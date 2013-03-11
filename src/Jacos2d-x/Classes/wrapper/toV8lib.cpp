/****************************************************************************
 Copyright (c) 2013 Thai-Duong Nguyen

 http://jacos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
****************************************************************************/

#include "Dictionary.h"

#include "toV8lib.h"

#include "libHashTable.h"
#include "cocos2d.h"
#include "v8-debug.h"
#include "stdlib.h"
#include <string.h>
#include "../../Classes/AppDelegate.h"
#include "wrapped_classes.h"
#include "JacosDevScene.h"
#include "v8Cocos2d.h"
#include "manual_wrap.h"

extern "C" {
    extern void logHeap();
}

#ifdef ANDROID
#include <android\log.h>
#else
#define __android_log_print
#define ANDROID_LOG_DEBUG "Jni"
void logHeap()
{
};
#endif


Persistent<Context> _context;
bool _isLockedCreateObject;
Persistent<v8::Object> _importedList;
Persistent<v8::Object> _currentExport;

void mayjor_entry(const char* main_entry);
int getClassMemberIndex(const char *name);
void resolveJacos2dxFunctions();
void addInternalVariable(v8::Handle<v8::Object> parent, v8::Handle<v8::Object> object);
void removeInternalVariable(v8::Handle<v8::Object> parent, v8::Handle<v8::Object> object);
void pushToGlobal(void *key, Handle<Object> value);
void removeFromGlobal(void *key);
Handle<Object> getObjectFromGlobal(void* key);
static v8::Handle<Object> _createObjectFromFile(const char *file, const char* className);

v8::Persistent<v8::ObjectTemplate>         _global;

bool ExecuteString(v8::Handle<v8::String> source,v8::Handle<v8::Value> name,bool print_result) ;

extern JSSystemHelper *gJSCCallFunctions;
libVector< v8::Handle<v8::Object> > internalVarsQueue;
Persistent<Array> globalObjects;
bool v8_ready = false;

#define V8_PREPARE_CONTEXT \
		Handle<Context>	context =  getCurrentContext(); \
		Context::Scope context_scope(context);            \
		v8::HandleScope handle_scope;
#define V8_GET_OBJECT_WITH_HANDLE(X) (v8::Local<v8::Object>(reinterpret_cast<v8::Object*>(v8::HandleScope::CreateHandle((v8::internal::Object*)X))))
void ReportException(v8::TryCatch* try_catch);

static std::string mainEntry = "jacos2dx_entry/main.js";

void setMainEntry(const char* entry) {
    mainEntry = entry;
}
class JavaScriptCoreCallFunc : public JSSystemHelper
{

public:
	JavaScriptCoreCallFunc() {
		
	}
    void reportException(v8::TryCatch* try_catch)
	{
		ReportException(try_catch);
	}
    virtual v8::Handle<Object> createObjectFromFile(const char *file, const char* className)
    {
        return _createObjectFromFile(file, className);
    }
	virtual v8::Handle<v8::Value> callJSFunc(v8::Handle<v8::Function> function, v8::Handle<v8::Object> receive, int argc, v8::Handle<v8::Value> *args) {
		HandleScope handScope;
		v8::TryCatch try_catch;
		Handle<Value> ret = function->Call(receive, argc, args);
		if (try_catch.HasCaught())
			reportException(&try_catch);

		return handScope.Close(ret);
	}
    virtual void callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function)
    {
		HandleScope handScope;
		Handle<Context> context = getCurrentContext();		
		Context::Scope context_scope(context);
		if (function.IsEmpty() || function->IsNull() || function->IsUndefined())
			return;
		
		if (!function.IsEmpty() && function->IsFunction()) 
		{						
			
			v8::Handle<v8::Function> func = v8::Handle<v8::Function>::Cast(function);						
			callJSFunc(func, object, 0, NULL);
		}		
    };

	virtual void callJSFunction(v8::Handle<v8::Object> function)
    {
		
        Handle<Context>	context = getCurrentContext();
		Context::Scope context_scope(context);
		v8::HandleScope handle_scope;
		
		if (function.IsEmpty() || function->IsNull() || function->IsUndefined())
			return;

		v8::Handle<v8::Function> func = v8::Handle<v8::Function>::Cast(function);		
				
		callJSFunc(func, _context->Global(), 0, NULL);
		
    };
	virtual void callJSFunction(v8::Handle<v8::Object> function, v8::Handle<v8::Value> value)
    {
		
        Handle<Context>	context = Context::GetCurrent();
		Context::Scope context_scope(context);
		v8::HandleScope handle_scope;

		if (function.IsEmpty() || function->IsNull() || function->IsUndefined())
			return;

		v8::Handle<v8::Value> args[1] = {value};
		v8::Handle<v8::Function> func = v8::Handle<v8::Function>::Cast(function);		

		callJSFunc(func, Context::GetCurrent()->Global(), 1, args);
  
    };
    virtual void callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function, double numParam)
    {		
		HandleScope handScope;
		Handle<Context> context = getCurrentContext();		
		Context::Scope context_scope(context);
		if (function.IsEmpty() || function->IsNull() || function->IsUndefined())
			return;
		if (!function.IsEmpty() && function->IsFunction()) 
		{
			v8::Handle<v8::Value> args[1] = {v8::Number::New(numParam)};				
		
			v8::Handle<v8::Function> func = v8::Handle<v8::Function>::Cast(function);						
			callJSFunc(func, object, 1, args);       
		}		    		      
		
    };
	virtual void callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function, v8::Handle<v8::Object> sender, double eventID)
	{
		
		HandleScope handScope;
		Handle<Context> context = getCurrentContext();		
		Context::Scope context_scope(context);		

		if (function.IsEmpty() || function->IsNull() || function->IsUndefined())
			return;

		if (!function.IsEmpty() && function->IsFunction()) 
		{
			v8::Handle<v8::Value> args[2] = {sender, v8::Number::New(eventID)};				
		
			v8::Handle<v8::Function> func = v8::Handle<v8::Function>::Cast(function);						
			callJSFunc(func, object, 2, args);       
		}		
	}
	virtual v8::Handle<v8::Object> getObjectMemberByName(v8::Handle<v8::Object> object, const char* name)
	{
		HandleScope handScope;
		Handle<Context> context = getCurrentContext();		
		Context::Scope context_scope(context);
				
		Local<String> funcName = String::New(name);		

		if (object->IsObject() == false)
			return Handle<Object>(NULL);
		if (!object->Has(funcName))
			return Handle<Object>(NULL);

		return handScope.Close(object->Get(funcName)->ToObject());
	}
    virtual void callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function, double numParam1, double numParam2)
    {

    };
    virtual void callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function, double numParam1, double numParam2, double numParam3)
    {
        
    };
	virtual v8::Handle<v8::Value> assignJavaScriptObject(JacosBaseObject *jacosBaseObject, void* generalPtr, int classTypeID, bool needDeleteNative)
	{
       
		return tov8_pushusertype(jacosBaseObject, generalPtr, classTypeID, needDeleteNative);
	}
	
    virtual unsigned int callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function, void* data) {
                
        V8_PREPARE_CONTEXT
		
		v8::Handle<v8::Value> args[] = {v8::Local<v8::Object>((v8::Object*)data)};
		
		v8::Handle<v8::Function> func = v8::Handle<v8::Function>::Cast(function);		
		callJSFunc(func, object, 1, args);
        return 0;
    }
    virtual unsigned int callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function, int intParam, void *objParam)
    {
		V8_PREPARE_CONTEXT

		if (function.IsEmpty() || function->IsNull() || function->IsUndefined())
			return 0;
		v8::Handle<v8::Value> args[] = {v8::Number::New(intParam), v8::Local<v8::Object>((v8::Object*)objParam)};
		
				
		v8::Handle<v8::Function> func = v8::Handle<v8::Function>::Cast(function);

		v8::Local<v8::Value> ret = *callJSFunc(func, object, 2, args);
        
		if (ret.IsEmpty() || ret->IsNull() || ret->IsUndefined())
            return 0;
		else if (ret->IsBoolean())
			return (ret->ToBoolean())->BooleanValue()?1:0;
		else if (ret->IsNumber())
			return (unsigned int)ret->ToNumber()->Uint32Value();
        return 0;
    };
    virtual unsigned int callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function, void* param1, void* param2)
    {

		V8_PREPARE_CONTEXT
		if (function.IsEmpty() || function->IsNull() || function->IsUndefined())
			return 0;
		v8::Handle<v8::Value> args[] = {v8::Local<v8::Object>((v8::Object*)param1), v8::Local<v8::Object>((v8::Object*)param2)};
				
		v8::Handle<v8::Function> func = v8::Handle<v8::Function>::Cast(function);

		v8::Local<v8::Value> ret = *callJSFunc(func, object, 2, args);
        
		if (ret.IsEmpty() || ret->IsNull() || ret->IsUndefined())
            return 0;
		else if (ret->IsBoolean())
			return (ret->ToBoolean())->BooleanValue()?1:0;
		else if (ret->IsNumber())
			return (unsigned int)ret->ToNumber()->Uint32Value();
        return 0;

    };
	virtual void callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function, v8::Handle<v8::Object> sender, v8::Handle<v8::Object> obj)
	{
        if (!function->IsFunction()) return;
        Handle<Value> args[] = {sender, obj};
        this->callJSFunc(Handle<Function>::Cast(function), object, 2, args);
	};
	virtual void* callJSFunctionWithName(v8::Handle<v8::Object> object, const char* name) {
		if (!v8_ready)
			return NULL;		

		
		HandleScope handScope;
		Handle<Context> context = getCurrentContext();		
		Context::Scope context_scope(context);
		
		Local<String> funcName = String::New(name);		

		if (object->IsObject() == false)
			return NULL;
		if (!object->Has(funcName)) return NULL;

		v8::Local<v8::Value> funcObj = object->Get(funcName);
		if (!funcObj.IsEmpty() && funcObj->IsFunction()) {
			Handle<Function> func = Handle<Function>::Cast(funcObj->ToObject());
			//v8::Handle<v8::Value> args[] = {};
			v8::Handle<v8::Value> args[] = {v8::Number::New(0)};
			v8::Local<v8::Value> ret = *callJSFunc(func, object, 0, args);
			if (ret.IsEmpty() || ret->IsNull() || ret->IsUndefined())
				return NULL;
			else if (ret->IsBoolean())
				return (ret->ToBoolean())->BooleanValue()?(void*)-1:NULL;
			else if (ret->IsNumber())
				return reinterpret_cast<void*>((unsigned int)ret->ToNumber()->Uint32Value());
			else if (strcmp(name, "sub_nodeToParentTransform") == 0) { //return CCAffineTransform
				return JSC_ObjectGetPrivate(CLS_CCAFFINETRANSFORM_ID,  ret);
			}
		}		
		return NULL;
	};
	virtual void* callJSFunctionWithName(v8::Handle<v8::Object> object, const char* name, double param1) {
		V8_PREPARE_CONTEXT
		
		v8::Local<v8::Value> funcObj = object->Get(String::New(name));
		if (!funcObj.IsEmpty() && funcObj->IsFunction()) {
			Handle<Function> func = Handle<Function>::Cast(funcObj);
			v8::Handle<v8::Value> args[] = {v8::Number::New(param1)};
			callJSFunc(func, object, 1, args);
		}
		return NULL;
	};
	virtual void* callJSFunctionWithName(v8::Handle<v8::Object> object, const char* name, void* data) {

		V8_PREPARE_CONTEXT
        Local<String> nameStr = String::New(name);
        if (object.IsEmpty() || !object->Has(nameStr)) 
            return NULL;
		v8::Local<v8::Value> funcObj = object->Get(nameStr);
		if (!funcObj.IsEmpty() && funcObj->IsFunction()) {
			Handle<Function> func = Handle<Function>::Cast(funcObj);
			if (   strcmp(name, "ccTouchBegan") == 0
				|| strcmp(name, "ccTouchMoved") == 0
				|| strcmp(name, "ccTouchEnded") == 0
				|| strcmp(name, "ccTouchCancelled") == 0				
				
				) {
				v8::Handle<v8::Value> args[] = {tov8_pushusertype(data, (CCTouch*)data, CLS_CCTOUCH_ID, false)};
				v8::Handle<v8::Value> ret = callJSFunc(func, object, 1, args);
				if (!ret.IsEmpty() && ret->IsBoolean())
					return ret->ToBoolean()->BooleanValue()?(void*)-1 : NULL;
				return NULL;
			} else if (   strcmp(name, "ccTouchesBegan") == 0
						|| strcmp(name, "ccTouchesMoved") == 0
						|| strcmp(name, "ccTouchesEnded") == 0
						|| strcmp(name, "ccTouchesCancelled") == 0								
				) {
				
					CCSet *pTouches = (CCSet*)data;
					CCTouch *pTouch;
					CCSetIterator setIter;
					Local<Array> touchesList = Array::New(pTouches->count());
					int index = 0;
					for (setIter = pTouches->begin(); setIter != pTouches->end(); ++setIter)
					{
						pTouch = (CCTouch *)(*setIter);
						Handle<Value> item = tov8_pushusertype(pTouch, pTouch, CLS_CCTOUCH_ID, false);
						touchesList->Set(index, item);
					}

					v8::Handle<v8::Value> args[] = {touchesList};
					func->Call(object, 1, args);				
					
			}
			
		}
		return NULL;
	}
	virtual void* callJSFunctionWithName(v8::Handle<v8::Object> object, const char* name, double param1, double param2) {
		V8_PREPARE_CONTEXT

		v8::Local<v8::Value> funcObj = object->Get(String::New(name));
		if (!funcObj.IsEmpty() && funcObj->IsFunction()) {
			Handle<Function> func = Handle<Function>::Cast(funcObj);
			v8::Handle<v8::Value> args[] = {v8::Number::New(param1), v8::Number::New(param2)};
			callJSFunc(func, object, 2, args);
		}
		return NULL;
	};
    virtual Handle<Value> createJSObject(void* nativeObject, int classID, bool needDeleteNative)
    {
        return tov8_pushusertype(nativeObject, classID, needDeleteNative);
    };
    virtual void* createJSCCTouch(void* touch)
    {
    
        return *tov8_pushusertype(touch, CLS_CCTOUCH_ID, false);
    };
    virtual void* createJSCCTouches(void** touches, int count)
    {		
		v8::HandleScope handle_scope;
        v8::Local<v8::Array> obj = v8::Array::New(count);
        for (int i = 0; i < count; i++)
        {
			obj->Set(i, tov8_pushusertype((CCTouch*)touches[i], CLS_CCTOUCH_ID, false));
        }		
		v8::Persistent<v8::Array> ret = *obj;
        return *ret;
    };
  
	virtual void addInternalVar(v8::Handle<v8::Object> parent, v8::Handle<v8::Object> object) 
	{
		if (parent.IsEmpty() || object.IsEmpty()) return;
		
		addInternalVariable(parent, object);
	};
    virtual void removeInternalVar(v8::Handle<v8::Object> parent, v8::Handle<v8::Object> object)
	{
		if (parent.IsEmpty() || object.IsEmpty()) return;
		removeInternalVariable(parent, object);
	};
    virtual void addGlobalReference(v8::Handle<v8::Object> object)
	{
		addInternalVariable(getCurrentContext()->Global(), object);
	};
    virtual void removeGlobalReference(v8::Handle<v8::Object> object)
	{
	};
	virtual void* getHash(v8::Handle<v8::Object> object) {
        V8_PREPARE_CONTEXT

        if (object->InternalFieldCount() > 0) {
            Local<Value> val = object->GetInternalField(0);
	        
            if (val->IsExternal()) {
        	    return v8::Local<v8::External>::Cast(val)->Value(); 
            }
        }

		internal::Object** p = reinterpret_cast<internal::Object**>(*object);
        
		Local<String> hashKey = String::New("_hash");
		Handle<Value> hashVal = object->GetHiddenValue(hashKey);
		if (hashVal.IsEmpty()) {
			object->SetHiddenValue(hashKey, Number::New(reinterpret_cast<unsigned int>(*p)));
			return *p;
		} else {
			Local<Number> val = hashVal->ToNumber();
			unsigned int keyVal = val->Uint32Value();
			return (void*)keyVal;
		}
		
	}
};

class V8Handle {
public:
	V8Handle() {
		v8::V8::Initialize(); 
		m_pLocker = new v8::Locker();
	}

	static V8Handle* open() {
		return new V8Handle();
	}

private:
	v8::HandleScope handle_scope;
	v8::Locker *m_pLocker;
};
libHashTable        *gConstructorsHashTable;
bool              gIsInClass;


typedef struct CLASS_MEMBER_ {
    int memberType;
    const char* memberName;
    void*  memberPtr;
    void*  memberPtr2;
	double value;
} CLASS_MEMBER;

typedef struct SCOPE_INFORM_ {
	char * scopeName;
    v8::Handle<v8::ObjectTemplate> scopeObject;
    int scopID;
    int parentScop;

} SCOPE_INFORM;

typedef struct CLASS_INFORM_ {
    v8::InvocationCallback		constructor;
	int						classID;
    v8::Persistent<v8::Function>  classObjPtr;
	v8::Handle<v8::FunctionTemplate> classPtr;
	v8::Handle<v8::ObjectTemplate>  prototype;
	const char*				requireBaseClass;
    int         baseClassID;
    libVector<CLASS_MEMBER> *classMembersList;
    SCOPE_INFORM *scope;
    libVector<const char*>* familyClasses;
    int* familyClassesID;
    int  familySize;
} CLASS_INFORM;

libVector<CLASS_MEMBER> *currentClassMembers = NULL;


CLASS_INFORM_* classesList[CLASSES_COUNT];
bool           classesCreatedStatus[CLASSES_COUNT];
libVector<SCOPE_INFORM*> scopeList;
libVector<CLASS_INFORM>		 needInheritList;	
SCOPE_INFORM			*currentScope = NULL;


SCOPE_INFORM* getScopeByName(const char *scopeName);
bool JSC_instanceOf(PRIVATE_OBJECT_INFOR *object, const char *className);

void pushToGlobal(void *key, Handle<Object> value)
{
	
	Handle<Object> obj = getCurrentContext()->Global();
	int index = reinterpret_cast<unsigned int>(key);
	if (!obj->Has(index)) {
		Handle<Object> item = Object::New();
		item->Set(0, Number::New(1));
		item->Set(1, value);
		obj->Set(index, item);
	} else {
		Handle<Object> item = obj->Get(index)->ToObject();
		Handle<Number> count = item->Get(0)->ToNumber();
		item->Set(0, Number::New(count->Int32Value() + 1));
		obj->Set(index, item);
	}
	
}
void removeFromGlobal(void *key)
{	
	Handle<Object> obj = getCurrentContext()->Global();
	int index = reinterpret_cast<unsigned int>(key);
	if (obj->Has(index)) {
		Handle<Object> item = obj->Get(index)->ToObject();
		Handle<Number> count = item->Get(0)->ToNumber();
		if (count->Int32Value() > 1) {
			item->Set(0, Number::New(count->Int32Value() - 1));		
			obj->Set(index, item);
		} else {
			obj->Delete(index);
		}
	} 
}
Handle<Object> getObjectFromGlobal(void* key) {
	Handle<Object> obj = getCurrentContext()->Global();
	int index = reinterpret_cast<unsigned int>(key);
	if (obj->Has(index)) {
		Handle<Object> item = obj->Get(index)->ToObject();
		Handle<Number> count = item->Get(0)->ToNumber();
		if (item->Has(1)) {
			return item->Get(1)->ToObject();
		}
	}
	return v8::Null()->ToObject();
}
v8::Handle<v8::ObjectTemplate> tov8_openScope(const char* scopeName)
{

	SCOPE_INFORM *scopeInf = getScopeByName(scopeName);
	if (scopeInf == NULL) //add new scope
	{
		v8::Local<v8::ObjectTemplate> scopeObject;
        
        if (currentScope)
			scopeObject = v8::ObjectTemplate::New(); 
        else 
            scopeObject = *_global;

		scopeInf = new SCOPE_INFORM();
		scopeInf->scopeName = (char*)malloc(strlen(scopeName) + 1);
		strcpy(scopeInf->scopeName, scopeName);
		scopeInf->scopeObject = scopeObject;
        scopeInf->scopID = scopeList.size();

		if (currentScope != NULL)
		{
            scopeInf->parentScop = currentScope->scopID;                        
			currentScope->scopeObject->Set(scopeName, scopeObject);

		} else {
            scopeInf->parentScop = -1;
        }
		scopeList.addElement(scopeInf); 
        
	}
	//Local<Value> value;
	
	currentScope = scopeInf;
	return scopeInf->scopeObject;
}
void tov8_closeScope()
{		
	
    int index = currentScope->parentScop;
//	int index = scopeList.indexOf(currentScope);
	if (index >= 0)
	{
		currentScope = scopeList.elementAt(index);
	}	
    gIsInClass = false;
}
SCOPE_INFORM* getScopeByName(const char *scopeName)
{
	for (int i = scopeList.size() - 1; i >= 0; i--)
	{
		if (strcmp(scopeList.elementAt(i)->scopeName, scopeName) == 0)
		{
			return scopeList.elementAt(i);
		}
	}

	return NULL;
}

void do_nothing_collection_func (Persistent<Value> object, void *parameter)
{
	
}

Handle<Context> getCurrentContext()
{
	return _context;
}

v8::Handle<v8::Value> tov8_pushusertype(JacosBaseObject *value, void *generalPoint, int classID, bool needDeleteNative)
{
    
    if (generalPoint == NULL)
        return v8::Null();
	if (!value->getJSObjInstance().IsEmpty())
	{
		return value->getJSObjInstance();
	} else {
        
		v8::HandleScope handle_scope;
		CLASS_INFORM_ *inf = classesList[classID];	    
				
		_isLockedCreateObject = true;
        v8::Local<v8::Object> obj;

        if (inf->classObjPtr.IsEmpty())
		    obj = inf->classPtr->GetFunction()->NewInstance();
        else
            obj = inf->classObjPtr->NewInstance();

		_isLockedCreateObject = false;
		
		bool needCreateNew = true;
		
        if ((!obj->GetInternalField(0)->IsNull()) && (!obj->GetInternalField(0)->IsUndefined()))
		{
            assert(false);
		}

		if (needCreateNew)
		{
			PRIVATE_OBJECT_INFOR *objInf = new PRIVATE_OBJECT_INFOR();
			objInf->classNameList = inf->familyClasses;
			objInf->objectType = PRIVATE_OBJECT_INFOR::OBJ_TYPE_JacosBaseObject;    
			
			objInf->needDeleteNative = needDeleteNative && !value->isManaged();
			objInf->familySize = inf->familySize;
			objInf->familyIDList = inf->familyClassesID;
			objInf->classID = classID;
			objInf->className = WRAPPED_CLASSES_LIST[classID];

			//memcpy(&objInf->objectPtr, &generalPoint, sizeof(void*));
			objInf->objectPtr = (void*)generalPoint;
			//set internal value
			Persistent<External> thisObj = Persistent<External>::New(v8::External::New((void*)objInf));
			thisObj.MakeWeak(objInf, &default_object_collection_func);
			obj->SetInternalField(0, thisObj);
			
			Handle<Object> retobj = handle_scope.Close(obj);
            
			value->setJSObjInstance(retobj);
			
			for (int i = 0; i < internalVarsQueue.size(); i++)
			{
				addInternalVariable(value->getJSObjInstance(), internalVarsQueue.elementAt(i));
			} 
			internalVarsQueue.removeAllElements();

			return retobj;
		}
		//return obj;
//		Handle<Object> ooo = handle_scope.Close(obj);
		return handle_scope.Close(obj);
		//return Persistent<Object>::New(handle_scope.Close(obj));
	}
}

v8::Handle<v8::Value> tov8_pushusertype(void* value, int classID, bool needDeleteNative)
{    

	return tov8_pushusertype(value, value, classID, needDeleteNative);
}
v8::Handle<v8::Value> tov8_pushusertype(const void* value, const void *generalPoint, int classID, bool needDeleteNative)
{	
    v8::HandleScope handle_scope;
	if (value == NULL)
		return handle_scope.Close(v8::Null());

	CLASS_INFORM_ *inf = classesList[classID];	    
	_isLockedCreateObject = true;
     v8::Local<v8::Object> obj;

    if (inf->classObjPtr.IsEmpty())
	    obj = inf->classPtr->InstanceTemplate()->NewInstance();
    else
        obj = inf->classObjPtr->NewInstance();

	_isLockedCreateObject = false;
		
	
    PRIVATE_OBJECT_INFOR *objInf = new PRIVATE_OBJECT_INFOR();
	
    objInf->classNameList = inf->familyClasses;
    objInf->objectType = PRIVATE_OBJECT_INFOR::OBJ_TYPE_POINTER;    
    
    objInf->needDeleteNative = needDeleteNative;
    objInf->familySize = inf->familySize;
    objInf->familyIDList = inf->familyClassesID;
    objInf->classID = classID;
    objInf->className = WRAPPED_CLASSES_LIST[classID];
   
    //memcpy(&objInf->objectPtr, &generalPoint, sizeof(void*));
    objInf->objectPtr = (void*)generalPoint;	

	Persistent<External> thisObj = Persistent<External>::New(v8::External::New((void*)objInf));
	
	thisObj.MakeWeak(objInf, &default_object_collection_func);

	obj->SetInternalField(0, thisObj);
	
	return handle_scope.Close(obj);
}
void* initNewObject(int classID, JacosBaseObject* obj, Handle<Object> value)
{
	return initNewObject(classID, obj, obj, value);
}

void* initNewObject(int classID, JacosBaseObject* obj, void* originObj, Handle<Object> value)
{
	CLASS_INFORM_ *inf = classesList[classID];
	PRIVATE_OBJECT_INFOR *objInf = new PRIVATE_OBJECT_INFOR();
    objInf->classNameList = inf->familyClasses;
	objInf->objectType = PRIVATE_OBJECT_INFOR::OBJ_TYPE_JacosBaseObject;    
    
    objInf->needDeleteNative = true;
    objInf->familySize = inf->familySize;
    objInf->familyIDList = inf->familyClassesID;
    objInf->classID = classID;
    objInf->className = WRAPPED_CLASSES_LIST[classID];
	objInf->objectPtr = originObj;

	obj->setJSObjInstance(value);
   
	return objInf;
	
}
void* initNewObject(int classID, void* obj, Handle<Object> value)
{
	//printf("new class: %s\n", WRAPPED_CLASSES_LIST[classID]);
	CLASS_INFORM_ *inf = classesList[classID];
	PRIVATE_OBJECT_INFOR *objInf = new PRIVATE_OBJECT_INFOR();
    objInf->classNameList = inf->familyClasses;
	objInf->objectType = PRIVATE_OBJECT_INFOR::OBJ_TYPE_POINTER;    
    
    objInf->needDeleteNative = true;
    objInf->familySize = inf->familySize;
    objInf->familyIDList = inf->familyClassesID;
    objInf->classID = classID;
    objInf->className = WRAPPED_CLASSES_LIST[classID];
	objInf->objectPtr = obj;
		
	
	return objInf;
}

void tov8_constant(const char *constName, double value)
{
	//if (getClassMemberIndex(constName) >= 0) return;
    
    CLASS_MEMBER member;
	member.memberType = MEMBER_TYPE_CONST;
    member.memberName = constName;
	member.value = value;

	if (currentClassMembers)
		currentClassMembers->addElement(member);
	else
		currentScope->scopeObject->Set(String::New(constName), Number::New(value));
	
}


void toJSC_error(const char *msg, const char *str)
{

}
void toJSC_error(const char *msg, int errCode)
{
    printf("##### error %s", msg);
}

void tov8_cclass(int classID, int baseClassID, v8::InvocationCallback constructorCallback)
{
	if (classesList[classID]) return; //ignore exist class
    
    if (classID != BASE_CLASS_ID  
        && baseClassID < 0)
        baseClassID = BASE_CLASS_ID;
    
    
	
	CLASS_INFORM_ *inf = new CLASS_INFORM_();

    inf->baseClassID = baseClassID;
    //inf->classObjPtr = Handle<Function>(NULL);
    currentClassMembers = new libVector<CLASS_MEMBER>();
    
    
    inf->familySize = 0;
    inf->familyClassesID = NULL;
    inf->classMembersList = currentClassMembers;
	inf->constructor = constructorCallback;
	inf->classID = classID;
    inf->scope = currentScope;

    classesList[classID] = inf;
    gIsInClass = true;
    
}

int getClassStaticMemberIndex(libVector<CLASS_MEMBER> *memberList, const char *name)
{
    if (memberList == NULL) return -1;
    

    for (int i = memberList->size() - 1; i >= 0; i--)
    {
        int type = memberList->elementAt(i).memberType;
        if (type == MEMBER_TYPE_STATIC_METHOD || type == MEMBER_TYPE_CONST)
        {
            if (strcmp(memberList->elementAt(i).memberName, name) == 0) {
                return i;
            }
        }
    }
    
    return -1;
}

int getClassMemberIndex(libVector<CLASS_MEMBER> *memberList, const char *name)
{
    if (memberList == NULL) return -1;
    

    for (int i = memberList->size() - 1; i >= 0; i--)
    {
        if (strcmp(memberList->elementAt(i).memberName, name) == 0) {
            return i;
        }
    }
    
    return -1;
}

int getClassMemberIndex(const char *name)
{
    return getClassMemberIndex(currentClassMembers, name);
}


void tov8_function(const char* functionName, v8::InvocationCallback callback)
{
    
    if (currentClassMembers)
    {

        CLASS_MEMBER member;
        member.memberType = MEMBER_TYPE_METHOD;
        member.memberName = functionName;
        member.memberPtr = reinterpret_cast<void*>(callback);
        member.memberPtr2 = NULL;
        
		//int index = getClassMemberIndex(functionName);
        int index = currentClassMembers->size() - 1;
        if (index < 0 || strcmp(currentClassMembers->elementAt(index).memberName, functionName) != 0)
			currentClassMembers->addElement(member);
		else 
			currentClassMembers->setElementAt(member, index);

    } else {        
		v8::Handle<v8::FunctionTemplate> func = v8::FunctionTemplate::New(callback);		
		currentScope->scopeObject->Set(functionName, func);	
    }
}

void tov8_staticFunction(const char* functionName, v8::InvocationCallback callback)
{
    
	if (currentClassMembers) {
		CLASS_MEMBER member;
		member.memberType = MEMBER_TYPE_STATIC_METHOD;
		member.memberName = functionName;
		member.memberPtr = reinterpret_cast<void*>(callback);
		member.memberPtr2 = NULL;
		currentClassMembers->addElement(member);
	} else 
		currentScope->scopeObject->Set(functionName,  v8::FunctionTemplate::New((v8::InvocationCallback)callback));
}
void tov8_property(const char* propertyName, v8::AccessorGetter getFunc, v8::AccessorSetter setFunc)
{
	if (strcmp(propertyName, "__SelectorProtocol__") == 0)
		return;
	if (strstr(propertyName, "Delegate__"))
		return;
    
    //if (getClassMemberIndex(propertyName) >= 0) return;

    CLASS_MEMBER member;
    member.memberType = MEMBER_TYPE_PROPERTY;
    member.memberName = propertyName;
    member.memberPtr = reinterpret_cast<void*>(getFunc);
    member.memberPtr2 = reinterpret_cast<void*>(setFunc);
    currentClassMembers->addElement(member);
}


void fixBaseClass(const char* packageName, v8::Handle<v8::Object> container)
{
 
    SCOPE_INFORM *scope_inf = NULL;
    SCOPE_INFORM *global_scope = getScopeByName("global");
    if (packageName)
        scope_inf = getScopeByName(packageName);
    bool canStop;    
    do
    {
        canStop = true;
        for (int i = 0; i < CLASSES_COUNT; i++)
        {
            if (classesCreatedStatus[i])
                continue;
            CLASS_INFORM *inf = classesList[i];
            if (scope_inf && (inf->scope != scope_inf && inf->scope != global_scope))
                continue;
            //make sure parent is null or created
            if (inf->baseClassID == -1 || *classesList[inf->baseClassID]->classPtr != NULL) 
            {
                classesCreatedStatus[i] = true;
                if (i == CLS_CCSCROLLVIEW_ID) {
                    i = i;
                }
                if (inf->baseClassID >= 0) //need parent
                {                    

                    CLASS_INFORM_* parent = classesList[inf->baseClassID];   

                    //assign parent's static functions. Because they are not inherited automatically
                    libVector<CLASS_MEMBER> *parentMembers = parent->classMembersList;
                    int parentMemberSize = parentMembers->size();
                    for (int j = 0; j < parentMemberSize; j++)
                    {
                        CLASS_MEMBER member = parentMembers->elementAt(j);
                        if ((member.memberType == MEMBER_TYPE_STATIC_METHOD
                             || member.memberType == MEMBER_TYPE_CONST) 
                            && getClassStaticMemberIndex(inf->classMembersList, member.memberName) < 0)
                        {
                            inf->classMembersList->addElement(member);
                        }
                    }

                    //make family
                    inf->familySize = parent->familySize + 1;
                    inf->familyClassesID = new int[inf->familySize];
                    inf->familyClassesID[0] = i;
                    
                    for (int j = 0; j < parent->familySize; j++)
                    {
                        inf->familyClassesID[j + 1] = parent->familyClassesID[j];
                    }
                    
                } else {

                    inf->familySize = 1;
                    inf->familyClassesID = new int[1];
                    inf->familyClassesID[0] = i;
                }
                
                                
                //create class

                tov8_openScope(inf->scope->scopeName);
				inf->classPtr = v8::FunctionTemplate::New(inf->constructor);
				if (inf->baseClassID >= 0)
					inf->classPtr->Inherit(classesList[inf->baseClassID]->classPtr);				
				Handle<String> className = v8::String::New(WRAPPED_CLASSES_LIST[inf->classID]);
				inf->classPtr->SetClassName(className);


				inf->prototype = inf->classPtr->PrototypeTemplate();
				inf->prototype->SetInternalFieldCount(1);
				v8::Handle<v8::ObjectTemplate> point_inst = inf->classPtr->InstanceTemplate();

				//set the internal fields of the class as we have the Point class internally
				point_inst->SetInternalFieldCount(1);
				//create constructor
				
                int size = inf->classMembersList->size();
                //assign static functions                    
                for (int j = 0; j < size; j++)
                {
                    CLASS_MEMBER member = inf->classMembersList->elementAt(j);
					v8::Handle<v8::FunctionTemplate> func;
					switch (member.memberType)
					{
						case MEMBER_TYPE_STATIC_METHOD:					
							{
							func = v8::FunctionTemplate::New((v8::InvocationCallback)member.memberPtr);
							inf->classPtr->Set(member.memberName, func);
							}
						break;
						case MEMBER_TYPE_CONST:																										
							//point_inst->SetAccessor(String::New(member.memberName), (AccessorGetter)member.memberPtr);
							inf->classPtr->Set(member.memberName, v8::Number::New(member.value));
						break;
						case MEMBER_TYPE_METHOD:						
							{
								func = v8::FunctionTemplate::New((v8::InvocationCallback)member.memberPtr);						
								inf->prototype->Set(member.memberName, func);							
							}
							break;
						case MEMBER_TYPE_PROPERTY:
							{
								func = v8::FunctionTemplate::New((v8::InvocationCallback)member.memberPtr);						
								inf->prototype->SetAccessor(v8::String::New(member.memberName), (v8::AccessorGetter)member.memberPtr, (v8::AccessorSetter)member.memberPtr2);
							}
							break;
					}
                }                                                            
                                
				currentScope->scopeObject->Set(className, inf->classPtr);
                if (!container.IsEmpty()) {
                    inf->classObjPtr = Persistent<Function>::New(inf->classPtr->GetFunction());
                    container->Set(className, inf->classObjPtr);
                }
                tov8_closeScope();
                
            } else if (*inf->classPtr == NULL)
                canStop = false;
        }
    } while (!canStop);
    
  
}

static int trcount = 0;

int tov8_jacos2dx_open ();

extern char * smain_entry = "";

static bool init_script_entry(const char *main_entry)
{
	mayjor_entry(main_entry);
}

v8::Persistent<v8::Context> debug_message_context;
void DebugMessageDespatchCallback()
{
	v8::Context::Scope scope(debug_message_context);
	
	v8::Debug::ProcessDebugMessages();
}

static Handle<Value> tov8_extended_import_func(const Arguments& args)
{
	HandleScope handle_scope;
	if (args.Length() > 0 && !args.Data().IsEmpty() && args.Data()->IsFunction()) {
		Local<Function> makeImportStrFunc = Function::Cast(*args.Data());
		
		Handle<Value> *arguments = new Handle<Value>[args.Length()];

		for (int i = 0; i < args.Length(); i++)
			arguments[i] = args[i];

		
		Handle<Value> retStr = makeImportStrFunc->Call(args.Holder(), args.Length(), arguments);

		if (retStr.IsEmpty() || retStr->IsBoolean()) {
				
            return Null();
            /*
            //add to pending Class list
            //return PendingClass();
			Local<StackFrame> frame = StackTrace::CurrentStackTrace(1)->GetFrame(0);
			String::Utf8Value srcName(frame->GetScriptName());
			printf("Imported recursion (%s:%d:%d)\n", *srcName, frame->GetLineNumber(), frame->GetColumn());

			return Undefined();*/
		} else {
			String::Utf8Value val(retStr);
            //printf("import str: %s\n\n", *val);
			ExecuteString(retStr->ToString(), String::New("make_import_function"), false);
		}
	}
	return Undefined();
}
void reset(const char* url) {

	//reset global objects
	Local<Object> global = Context::GetCurrent()->Global();
	Local<Array> prop = global->GetPropertyNames();
		
	for (int i = 0; i < prop->Length(); i++) 
	{
		Handle<Value> key = prop->Get(i);
		global->Delete(key->ToString());
	}

	prop = globalObjects->GetPropertyNames();
	for (int i = 0; i < prop->Length(); i++) 
	{
		Handle<Value> key = prop->Get(i);
		global->Set(key, globalObjects->Get(key));
	}



	const char sourceCode[] = {0x5F,0x73,0x79,0x73,0x20,0x3D,0x20,0x5B,0x5D,0x3B,0xA,0x66,0x75,0x6E,0x63,0x74,0x69,0x6F,0x6E,0x20,0x47,0x65,0x74,0x4A,0x61,0x63,0x6F,0x73,0x49,0x6E,0x66,0x6F,0x72,0x28,0x29,0xA,0x7B,0xA,0x9,0x72,0x65,0x74,0x75,0x72,0x6E,0x20,0x7B,0xA,0x9,0x9,0x76,0x65,0x72,0x73,0x69,0x6F,0x6E,0x20,0x3A,0x20,0x22,0x30,0x2E,0x38,0x2E,0x32,0x38,0x38,0x22,0x2C,0xA,0x9,0x9,0x61,0x75,0x74,0x68,0x6F,0x72,0x20,0x20,0x3A,0x20,0x22,0x4E,0x67,0x75,0x79,0x65,0x6E,0x20,0x54,0x68,0x61,0x69,0x2D,0x44,0x75,0x6F,0x6E,0x67,0x22,0x2C,0xA,0x9,0x9,0x72,0x65,0x6C,0x65,0x61,0x73,0x65,0x5F,0x64,0x61,0x74,0x65,0x20,0x3A,0x20,0x22,0x30,0x33,0x2F,0x31,0x33,0x2F,0x32,0x30,0x31,0x33,0x22,0x2C,0xA,0x9,0x9,0x72,0x65,0x6C,0x65,0x61,0x73,0x65,0x5F,0x61,0x74,0x20,0x3A,0x20,0x22,0x48,0x61,0x20,0x44,0x6F,0x6E,0x67,0x20,0x64,0x69,0x73,0x74,0x72,0x69,0x63,0x74,0x2C,0x20,0x48,0x61,0x6E,0x6F,0x69,0x20,0x43,0x69,0x74,0x79,0x2C,0x20,0x56,0x69,0x65,0x74,0x6E,0x61,0x6D,0x22,0xA,0x9,0x7D,0x3B,0xA,0x7D,0xA,0x66,0x75,0x6E,0x63,0x74,0x69,0x6F,0x6E,0x20,0x41,0x64,0x64,0x50,0x65,0x6E,0x64,0x69,0x6E,0x67,0x43,0x6C,0x61,0x73,0x73,0x28,0x75,0x72,0x69,0x2C,0x20,0x63,0x6C,0x61,0x73,0x73,0x4E,0x61,0x6D,0x65,0x2C,0x20,0x43,0x6C,0x61,0x73,0x73,0x29,0xA,0x7B,0xA,0x9,0x2F,0x2F,0x70,0x72,0x69,0x6E,0x74,0x66,0x28,0x22,0x70,0x65,0x6E,0x64,0x69,0x6E,0x67,0x3A,0x20,0x22,0x20,0x2B,0x20,0x75,0x72,0x69,0x20,0x2B,0x20,0x22,0x20,0x2D,0x20,0x22,0x20,0x2B,0x20,0x63,0x6C,0x61,0x73,0x73,0x4E,0x61,0x6D,0x65,0x29,0x3B,0xA,0x9,0x69,0x66,0x20,0x28,0x21,0x5F,0x73,0x79,0x73,0x5B,0x75,0x72,0x69,0x5D,0x29,0x20,0x7B,0xA,0x9,0x9,0x5F,0x73,0x79,0x73,0x5B,0x75,0x72,0x69,0x5D,0x20,0x3D,0x20,0x5B,0x5D,0x3B,0xA,0x9,0x7D,0xA,0x9,0x5F,0x73,0x79,0x73,0x5B,0x75,0x72,0x69,0x5D,0x5B,0x63,0x6C,0x61,0x73,0x73,0x4E,0x61,0x6D,0x65,0x5D,0x20,0x3D,0x20,0x43,0x6C,0x61,0x73,0x73,0x3B,0xA,0x7D,0xA,0x66,0x75,0x6E,0x63,0x74,0x69,0x6F,0x6E,0x20,0x52,0x65,0x73,0x6F,0x6C,0x76,0x65,0x50,0x65,0x6E,0x64,0x69,0x6E,0x64,0x43,0x6C,0x61,0x73,0x73,0x65,0x73,0x28,0x75,0x72,0x69,0x29,0xA,0x7B,0xA,0x9,0x2F,0x2F,0x70,0x72,0x69,0x6E,0x74,0x66,0x28,0x22,0x72,0x65,0x73,0x6F,0x6C,0x76,0x65,0x3A,0x20,0x22,0x20,0x2B,0x20,0x75,0x72,0x69,0x29,0x3B,0xA,0x9,0x76,0x61,0x72,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x20,0x3D,0x20,0x4C,0x6F,0x61,0x64,0x4D,0x6F,0x64,0x75,0x6C,0x65,0x28,0x75,0x72,0x69,0x29,0x3B,0xA,0x9,0x69,0x66,0x20,0x28,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x20,0x3D,0x3D,0x20,0x66,0x61,0x6C,0x73,0x65,0x29,0x20,0x20,0x2F,0x2F,0x63,0x61,0x6E,0x6E,0x6F,0x74,0x20,0x72,0x65,0x73,0x6F,0x6C,0x76,0x65,0xA,0x9,0x9,0x72,0x65,0x74,0x75,0x72,0x6E,0x3B,0xA,0x9,0x2F,0x2F,0x70,0x72,0x69,0x6E,0x74,0x66,0x28,0x22,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x3A,0x20,0x22,0x20,0x2B,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x29,0x3B,0xA,0x9,0x76,0x61,0x72,0x20,0x63,0x6C,0x61,0x73,0x73,0x65,0x73,0x4C,0x69,0x73,0x74,0x20,0x3D,0x20,0x5F,0x73,0x79,0x73,0x5B,0x75,0x72,0x69,0x5D,0x3B,0xA,0x9,0x69,0x66,0x20,0x28,0x63,0x6C,0x61,0x73,0x73,0x65,0x73,0x4C,0x69,0x73,0x74,0x29,0x20,0x7B,0xA,0x9,0x9,0x66,0x6F,0x72,0x20,0x28,0x76,0x61,0x72,0x20,0x63,0x6C,0x73,0x20,0x69,0x6E,0x20,0x63,0x6C,0x61,0x73,0x73,0x65,0x73,0x4C,0x69,0x73,0x74,0x29,0x20,0x7B,0xA,0x9,0x9,0x9,0x2F,0x2F,0x52,0x65,0x73,0x6F,0x6C,0x76,0x65,0x50,0x65,0x6E,0x64,0x69,0x6E,0x67,0x43,0x6C,0x61,0x73,0x73,0x28,0x63,0x6C,0x61,0x73,0x73,0x65,0x73,0x4C,0x69,0x73,0x74,0x5B,0x63,0x6C,0x73,0x5D,0x2C,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x5B,0x63,0x6C,0x73,0x5D,0x29,0x3B,0xA,0x9,0x9,0x9,0x70,0x72,0x69,0x6E,0x74,0x66,0x28,0x22,0x63,0x6C,0x61,0x73,0x73,0x20,0x6E,0x61,0x6D,0x65,0x3A,0x20,0x22,0x20,0x2B,0x20,0x63,0x6C,0x73,0x29,0x3B,0xA,0x9,0x9,0x9,0x69,0x66,0x20,0x28,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x5B,0x63,0x6C,0x73,0x5D,0x29,0x20,0x7B,0xA,0x9,0x9,0x9,0x9,0x63,0x6C,0x61,0x73,0x73,0x65,0x73,0x4C,0x69,0x73,0x74,0x5B,0x63,0x6C,0x73,0x5D,0x28,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x5B,0x63,0x6C,0x73,0x5D,0x29,0x3B,0xA,0x9,0x9,0x9,0x9,0x64,0x65,0x6C,0x65,0x74,0x65,0x20,0x63,0x6C,0x61,0x73,0x73,0x65,0x73,0x4C,0x69,0x73,0x74,0x5B,0x63,0x6C,0x73,0x5D,0x3B,0xA,0x9,0x9,0x9,0x7D,0xA,0x9,0x9,0x7D,0xA,0x9,0x7D,0xA,0x7D,0xA,0x66,0x75,0x6E,0x63,0x74,0x69,0x6F,0x6E,0x20,0x5F,0x24,0x28,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4E,0x61,0x6D,0x65,0x29,0x20,0x7B,0xA,0x9,0x76,0x61,0x72,0x20,0x72,0x65,0x74,0x53,0x74,0x72,0x20,0x3D,0x20,0x27,0x27,0x3B,0x9,0xA,0x9,0x69,0x66,0x20,0x28,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4E,0x61,0x6D,0x65,0x20,0x26,0x26,0x20,0x28,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4E,0x61,0x6D,0x65,0x2E,0x63,0x6F,0x6E,0x73,0x74,0x72,0x75,0x63,0x74,0x6F,0x72,0x20,0x3D,0x3D,0x20,0x53,0x74,0x72,0x69,0x6E,0x67,0x29,0x29,0x20,0x7B,0xA,0x9,0x9,0x76,0x61,0x72,0x20,0x69,0x6E,0x64,0x65,0x78,0x20,0x3D,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4E,0x61,0x6D,0x65,0x2E,0x6C,0x61,0x73,0x74,0x49,0x6E,0x64,0x65,0x78,0x4F,0x66,0x28,0x27,0x2F,0x27,0x29,0x3B,0xA,0x9,0x9,0x69,0x66,0x20,0x28,0x69,0x6E,0x64,0x65,0x78,0x20,0x3E,0x20,0x30,0x20,0x26,0x26,0x20,0x69,0x6E,0x64,0x65,0x78,0x20,0x3C,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4E,0x61,0x6D,0x65,0x2E,0x6C,0x65,0x6E,0x67,0x74,0x68,0x29,0x20,0x7B,0xA,0x9,0x9,0x9,0x76,0x61,0x72,0x20,0x63,0x6C,0x61,0x73,0x73,0x4E,0x61,0x6D,0x65,0x20,0x3D,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4E,0x61,0x6D,0x65,0x2E,0x73,0x75,0x62,0x73,0x74,0x72,0x28,0x69,0x6E,0x64,0x65,0x78,0x20,0x2B,0x20,0x31,0x29,0x3B,0xA,0x9,0x9,0x9,0x76,0x61,0x72,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x55,0x72,0x69,0x20,0x3D,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4E,0x61,0x6D,0x65,0x2E,0x73,0x75,0x62,0x73,0x74,0x72,0x28,0x30,0x2C,0x20,0x69,0x6E,0x64,0x65,0x78,0x29,0x3B,0xA,0x9,0x9,0x9,0x76,0x61,0x72,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x52,0x65,0x67,0x20,0x3D,0x20,0x2F,0x5E,0x5B,0x61,0x2D,0x7A,0x41,0x2D,0x5A,0x5F,0x5D,0x2B,0x5B,0x61,0x2D,0x7A,0x41,0x2D,0x5A,0x5F,0x30,0x2D,0x39,0x5D,0x2A,0x28,0x5C,0x2E,0x5B,0x61,0x2D,0x7A,0x41,0x2D,0x5A,0x5F,0x5D,0x2B,0x5B,0x61,0x2D,0x7A,0x41,0x2D,0x5A,0x5F,0x30,0x2D,0x39,0x5D,0x2A,0x29,0x2A,0x24,0x2F,0x3B,0xA,0x9,0x9,0x9,0x76,0x61,0x72,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4F,0x62,0x6A,0x20,0x3D,0x20,0x6E,0x75,0x6C,0x6C,0x3B,0xA,0x9,0x9,0x9,0x76,0x61,0x72,0x20,0x69,0x73,0x55,0x72,0x69,0x20,0x3D,0x20,0x74,0x72,0x75,0x65,0x3B,0xA,0x9,0x9,0x9,0x2F,0x2F,0x70,0x72,0x69,0x6E,0x74,0x66,0x28,0x22,0x75,0x72,0x69,0x3A,0x20,0x22,0x20,0x2B,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x55,0x72,0x69,0x29,0x3B,0xA,0x9,0x9,0x9,0x69,0x66,0x20,0x28,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x52,0x65,0x67,0x2E,0x74,0x65,0x73,0x74,0x28,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x55,0x72,0x69,0x29,0x29,0x20,0x7B,0xA,0x9,0x9,0x9,0x9,0x69,0x73,0x55,0x72,0x69,0x20,0x3D,0x20,0x66,0x61,0x6C,0x73,0x65,0x3B,0xA,0x9,0x9,0x9,0x9,0x69,0x66,0x20,0x28,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x55,0x72,0x69,0x20,0x3D,0x3D,0x20,0x22,0x62,0x6F,0x78,0x32,0x64,0x22,0x29,0xA,0x9,0x9,0x9,0x9,0x9,0x4C,0x6F,0x61,0x64,0x4E,0x61,0x74,0x69,0x76,0x65,0x50,0x61,0x63,0x6B,0x61,0x67,0x65,0x28,0x22,0x62,0x6F,0x78,0x32,0x64,0x22,0x2C,0x20,0x62,0x6F,0x78,0x32,0x64,0x29,0x3B,0xA,0x9,0x9,0x9,0x9,0x65,0x6C,0x73,0x65,0x20,0x69,0x66,0x20,0x28,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x55,0x72,0x69,0x20,0x3D,0x3D,0x20,0x22,0x63,0x6F,0x63,0x6F,0x73,0x32,0x64,0x2E,0x65,0x78,0x74,0x65,0x6E,0x73,0x69,0x6F,0x6E,0x22,0x29,0xA,0x9,0x9,0x9,0x9,0x9,0x4C,0x6F,0x61,0x64,0x4E,0x61,0x74,0x69,0x76,0x65,0x50,0x61,0x63,0x6B,0x61,0x67,0x65,0x28,0x22,0x65,0x78,0x74,0x65,0x6E,0x73,0x69,0x6F,0x6E,0x22,0x2C,0x20,0x62,0x6F,0x78,0x32,0x64,0x2C,0x20,0x63,0x6F,0x63,0x6F,0x73,0x32,0x64,0x2E,0x65,0x78,0x74,0x65,0x6E,0x73,0x69,0x6F,0x6E,0x29,0x3B,0xA,0x9,0x9,0x9,0x9,0x9,0xA,0x9,0x9,0x9,0x9,0x65,0x76,0x61,0x6C,0x28,0x27,0x74,0x72,0x79,0x20,0x7B,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4F,0x62,0x6A,0x20,0x3D,0x20,0x27,0x20,0x2B,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x55,0x72,0x69,0x20,0x2B,0x20,0x27,0x3B,0x7D,0x20,0x63,0x61,0x74,0x63,0x68,0x20,0x28,0x65,0x29,0x20,0x7B,0x7D,0x27,0x29,0x3B,0xA,0x9,0x9,0x9,0x7D,0xA,0x9,0x9,0x9,0x76,0x61,0x72,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4E,0x61,0x6D,0x65,0x20,0x3D,0x20,0x22,0x22,0x3B,0xA,0x9,0x9,0x9,0x69,0x66,0x20,0x28,0x21,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4F,0x62,0x6A,0x29,0x20,0x7B,0xA,0x9,0x9,0x9,0x9,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4F,0x62,0x6A,0x20,0x3D,0x20,0x4C,0x6F,0x61,0x64,0x4D,0x6F,0x64,0x75,0x6C,0x65,0x28,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x55,0x72,0x69,0x29,0x3B,0x20,0xA,0x9,0x9,0x9,0x9,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4E,0x61,0x6D,0x65,0x20,0x3D,0x20,0x27,0x4C,0x6F,0x61,0x64,0x4D,0x6F,0x64,0x75,0x6C,0x65,0x28,0x22,0x27,0x20,0x2B,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x55,0x72,0x69,0x20,0x2B,0x20,0x27,0x22,0x29,0x27,0x3B,0x20,0xA,0x9,0x9,0x9,0x7D,0x20,0x65,0x6C,0x73,0x65,0x20,0xA,0x9,0x9,0x9,0x9,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4E,0x61,0x6D,0x65,0x20,0x3D,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x55,0x72,0x69,0x3B,0xA,0x9,0x9,0x9,0x69,0x66,0x20,0x28,0x28,0x63,0x6C,0x61,0x73,0x73,0x4E,0x61,0x6D,0x65,0x2E,0x72,0x65,0x70,0x6C,0x61,0x63,0x65,0x28,0x2F,0x20,0x2F,0x67,0x2C,0x20,0x27,0x27,0x29,0x29,0x20,0x3D,0x3D,0x20,0x27,0x2A,0x27,0x29,0x20,0x7B,0x20,0xA,0x9,0x9,0x9,0x9,0xA,0x9,0x9,0x9,0x9,0x69,0x66,0x20,0x28,0x69,0x73,0x55,0x72,0x69,0x20,0x26,0x26,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4F,0x62,0x6A,0x20,0x3D,0x3D,0x20,0x66,0x61,0x6C,0x73,0x65,0x29,0x20,0x7B,0xA,0x9,0x9,0x9,0x9,0x9,0x70,0x72,0x69,0x6E,0x74,0x66,0x28,0x22,0x63,0x61,0x6E,0x6E,0x6F,0x74,0x20,0x69,0x6D,0x70,0x6F,0x72,0x74,0x20,0x61,0x6E,0x20,0x65,0x78,0x74,0x65,0x72,0x6E,0x61,0x6C,0x20,0x6C,0x69,0x62,0x72,0x61,0x72,0x79,0x20,0x77,0x69,0x74,0x68,0x20,0x27,0x2A,0x27,0x21,0x22,0x29,0x3B,0xA,0x9,0x9,0x9,0x9,0x7D,0x20,0x65,0x6C,0x73,0x65,0xA,0x9,0x9,0x9,0x9,0x7B,0xA,0x9,0x9,0x9,0x9,0x9,0x66,0x6F,0x72,0x20,0x28,0x76,0x61,0x72,0x20,0x6B,0x65,0x79,0x20,0x69,0x6E,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4F,0x62,0x6A,0x29,0x20,0x7B,0xA,0x9,0x9,0x9,0x9,0x9,0x9,0x72,0x65,0x74,0x53,0x74,0x72,0x20,0x2B,0x3D,0x20,0x27,0x76,0x61,0x72,0x20,0x27,0x20,0x2B,0x20,0x6B,0x65,0x79,0x20,0x2B,0x20,0x27,0x20,0x3D,0x20,0x27,0x20,0x2B,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4E,0x61,0x6D,0x65,0x20,0x2B,0x20,0x27,0x2E,0x27,0x20,0x2B,0x20,0x6B,0x65,0x79,0x20,0x2B,0x20,0x27,0x3B,0x20,0x27,0x3B,0x20,0xA,0x9,0x9,0x9,0x9,0x9,0x7D,0xA,0x9,0x9,0x9,0x9,0x7D,0xA,0x9,0x9,0x9,0x9,0xA,0x9,0x9,0x9,0x7D,0x20,0x65,0x6C,0x73,0x65,0x20,0x7B,0xA,0x9,0x9,0x9,0x9,0x76,0x61,0x72,0x20,0x63,0x6C,0x61,0x73,0x73,0x65,0x73,0x20,0x3D,0x20,0x63,0x6C,0x61,0x73,0x73,0x4E,0x61,0x6D,0x65,0x2E,0x73,0x70,0x6C,0x69,0x74,0x28,0x27,0x2C,0x27,0x29,0x3B,0x20,0xA,0x9,0x9,0x9,0x9,0x69,0x66,0x20,0x28,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4F,0x62,0x6A,0x20,0x3D,0x3D,0x20,0x66,0x61,0x6C,0x73,0x65,0x29,0x20,0x7B,0xA,0x9,0x9,0x9,0x9,0x9,0x66,0x6F,0x72,0x20,0x28,0x76,0x61,0x72,0x20,0x69,0x74,0x65,0x6D,0x4B,0x65,0x79,0x20,0x69,0x6E,0x20,0x63,0x6C,0x61,0x73,0x73,0x65,0x73,0x29,0x20,0x7B,0xA,0x9,0x9,0x9,0x9,0x9,0x9,0x63,0x6C,0x61,0x73,0x4E,0x61,0x6D,0x65,0x20,0x3D,0x20,0x63,0x6C,0x61,0x73,0x73,0x65,0x73,0x5B,0x69,0x74,0x65,0x6D,0x4B,0x65,0x79,0x5D,0x2E,0x72,0x65,0x70,0x6C,0x61,0x63,0x65,0x28,0x2F,0x20,0x2F,0x67,0x2C,0x20,0x27,0x27,0x29,0x3B,0xA,0x9,0x9,0x9,0x9,0x9,0x9,0x72,0x65,0x74,0x53,0x74,0x72,0x20,0x2B,0x3D,0x20,0x27,0x76,0x61,0x72,0x20,0x27,0x20,0x2B,0x20,0x63,0x6C,0x61,0x73,0x4E,0x61,0x6D,0x65,0x20,0x2B,0x20,0x27,0x20,0x3D,0x20,0x66,0x75,0x6E,0x63,0x74,0x69,0x6F,0x6E,0x28,0x63,0x6C,0x73,0x29,0x20,0x7B,0x27,0x20,0x2B,0x20,0x63,0x6C,0x61,0x73,0x73,0x4E,0x61,0x6D,0x65,0x20,0x2B,0x20,0x27,0x20,0x3D,0x20,0x63,0x6C,0x73,0x3B,0x20,0x70,0x72,0x69,0x6E,0x74,0x66,0x28,0x22,0x72,0x73,0x6C,0x76,0x2D,0x2D,0x2D,0x22,0x20,0x2B,0x20,0x63,0x6C,0x73,0x29,0x3B,0x7D,0x3B,0x20,0x27,0x20,0x2B,0x20,0x63,0x6C,0x61,0x73,0x4E,0x61,0x6D,0x65,0x20,0x2B,0x20,0x27,0x2E,0x69,0x73,0x46,0x61,0x6B,0x65,0x20,0x3D,0x20,0x74,0x72,0x75,0x65,0x3B,0x27,0x20,0x2B,0x20,0x63,0x6C,0x61,0x73,0x4E,0x61,0x6D,0x65,0x20,0x2B,0x20,0x27,0x2E,0x75,0x72,0x69,0x20,0x3D,0x20,0x22,0x27,0x20,0x2B,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x55,0x72,0x69,0x20,0x2B,0x20,0x27,0x22,0x3B,0x27,0x20,0x2B,0x20,0x63,0x6C,0x61,0x73,0x4E,0x61,0x6D,0x65,0x20,0x2B,0x20,0x27,0x2E,0x63,0x6E,0x61,0x6D,0x65,0x20,0x3D,0x20,0x22,0x27,0x20,0x2B,0x20,0x63,0x6C,0x61,0x73,0x4E,0x61,0x6D,0x65,0x20,0x2B,0x20,0x27,0x22,0x3B,0x27,0x3B,0xA,0x9,0x9,0x9,0x9,0x9,0x9,0x72,0x65,0x74,0x53,0x74,0x72,0x20,0x2B,0x3D,0x20,0x27,0x41,0x64,0x64,0x50,0x65,0x6E,0x64,0x69,0x6E,0x67,0x43,0x6C,0x61,0x73,0x73,0x28,0x22,0x27,0x20,0x2B,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x55,0x72,0x69,0x20,0x2B,0x20,0x27,0x22,0x2C,0x20,0x22,0x27,0x20,0x2B,0x20,0x63,0x6C,0x61,0x73,0x4E,0x61,0x6D,0x65,0x20,0x2B,0x20,0x27,0x22,0x2C,0x20,0x27,0x20,0x2B,0x20,0x63,0x6C,0x61,0x73,0x4E,0x61,0x6D,0x65,0x20,0x2B,0x27,0x29,0x3B,0x27,0x3B,0xA,0x9,0x9,0x9,0x9,0x9,0x7D,0xA,0x9,0x9,0x9,0x9,0x7D,0x20,0x65,0x6C,0x73,0x65,0x20,0x7B,0xA,0x9,0x9,0x9,0x9,0x9,0x66,0x6F,0x72,0x20,0x28,0x76,0x61,0x72,0x20,0x69,0x74,0x65,0x6D,0x4B,0x65,0x79,0x20,0x69,0x6E,0x20,0x63,0x6C,0x61,0x73,0x73,0x65,0x73,0x29,0x20,0x7B,0xA,0x9,0x9,0x9,0x9,0x9,0x9,0x63,0x6C,0x61,0x73,0x4E,0x61,0x6D,0x65,0x20,0x3D,0x20,0x63,0x6C,0x61,0x73,0x73,0x65,0x73,0x5B,0x69,0x74,0x65,0x6D,0x4B,0x65,0x79,0x5D,0x2E,0x72,0x65,0x70,0x6C,0x61,0x63,0x65,0x28,0x2F,0x20,0x2F,0x67,0x2C,0x20,0x27,0x27,0x29,0x3B,0xA,0x9,0x9,0x9,0x9,0x9,0x9,0x72,0x65,0x74,0x53,0x74,0x72,0x20,0x2B,0x3D,0x20,0x27,0x76,0x61,0x72,0x20,0x27,0x20,0x2B,0x20,0x63,0x6C,0x61,0x73,0x4E,0x61,0x6D,0x65,0x20,0x2B,0x20,0x27,0x20,0x3D,0x20,0x27,0x20,0x2B,0x20,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x4E,0x61,0x6D,0x65,0x20,0x2B,0x20,0x27,0x2E,0x27,0x20,0x2B,0x20,0x63,0x6C,0x61,0x73,0x4E,0x61,0x6D,0x65,0x20,0x2B,0x20,0x27,0x3B,0x20,0x27,0x3B,0xA,0x9,0x9,0x9,0x9,0x9,0x7D,0xA,0x9,0x9,0x9,0x9,0x9,0x69,0x66,0x20,0x28,0x69,0x73,0x55,0x72,0x69,0x29,0xA,0x9,0x9,0x9,0x9,0x9,0x9,0x52,0x65,0x73,0x6F,0x6C,0x76,0x65,0x50,0x65,0x6E,0x64,0x69,0x6E,0x64,0x43,0x6C,0x61,0x73,0x73,0x65,0x73,0x28,0x6D,0x6F,0x64,0x75,0x6C,0x65,0x55,0x72,0x69,0x29,0x3B,0xA,0x9,0x9,0x9,0x9,0x7D,0xA,0x9,0x9,0x9,0x7D,0xA,0x9,0x9,0x7D,0xA,0x9,0x7D,0x20,0xA,0x9,0x72,0x65,0x74,0x75,0x72,0x6E,0x20,0x72,0x65,0x74,0x53,0x74,0x72,0x3B,0xA,0x7D, 0x00};

	ExecuteString(v8::String::New(sourceCode), v8::String::New("system_reset"), false);
	Handle<Value> makeImportStrFunc = global->Get(String::New("_$"));
	global->Delete(String::New("_$"));
	Handle<Function> func = FunctionTemplate::New(tov8_extended_import_func, makeImportStrFunc)->GetFunction();
    func->SetName(String::New("Import"));
	global->Set(String::New("Import"), func);
	globalObjects->Set(String::New("Import"), func);
	//CCTextureCache::purgeSharedTextureCache();
    CCTextureCache::sharedTextureCache()->removeAllTextures();
    
    CCFileUtils::sharedFileUtils()->purgeCachedEntries();
	CCDirector::sharedDirector()->removeAllTouchDelegates();
    
	mayjor_entry(url);

}
void runJacosApplication() {

	CCApplication::sharedApplication()->run();
}

void startV8JavascriptEngine() {
	/*
	v8::V8::Initialize(); 
	v8::Locker *locker = new v8::Locker();
	v8::HandleScope handle_scope;	
	
    initThread(init_native_lib);
	*/
	
	runJacosApplication();	
}
void mayjor_entry(const char* main_entry)
{	    
    CCLOG("------------> main entry: %s", main_entry);
    unsigned char *dataBuffer;
	std::string pathKey = main_entry;

	const char* fullPath = CCFileUtils::sharedFileUtils()->fullPathFromRelativePath(pathKey.c_str());
    
    
    for (int i = strlen(fullPath) - 1; i > 0; i--)
    {
        char ch = fullPath[i];
		if (ch == '/') {
			int path_length = i + 1;
            
			char* buffer = (char*)malloc(path_length + 1);
			strncpy(buffer, fullPath, path_length) ;
			buffer[path_length] = '\0';
            CCFileUtils::sharedFileUtils()->setApplicationRoot(buffer);            
			free(buffer);
            
			break;
		}
	}
	unsigned long size;
		
	dataBuffer = CCFileUtils::sharedFileUtils()->getFileData(fullPath, "r", &size);
	if (dataBuffer == NULL)
        return;
	
    char *data = (char*)malloc(size + 1);
    memcpy(data, dataBuffer, size);
    data[size] = '\0';
    
    free(dataBuffer);

	runSourceCode(data, fullPath);

}

void setV8GlobalVariable(v8::Handle<v8::Object> object, v8::Handle<v8::Object> target)
{
	pushToGlobal(*target, target);
}

void addInternalVariable(v8::Handle<v8::Object> parent, v8::Handle<v8::Object> object)
{

	if (parent.IsEmpty())
	{
		if (!object.IsEmpty())
			internalVarsQueue.addElement(object);
		return;
	}
		
	unsigned int index = getObjectHash(object);
	char buff[20];
	sprintf(buff, "k_%x", index);
	Local<String> key = String::New(buff);

	Handle<Value> keyVal = parent->GetHiddenValue(key);
	if (keyVal.IsEmpty()) {
		Local<Array> arr = Array::New(2);
		arr->Set(0, Number::New(1));
		arr->Set(1, object);
		parent->SetHiddenValue(key, arr);
	} else {
		Local<Array> arr = Array::Cast(*keyVal);
		Local<Value> count = arr->Get(0);
		int countVal = 1;
		if (!count.IsEmpty() && count->IsNumber())
			countVal = count->Int32Value() + 1;
		arr->Set(0, Number::New(countVal));
	}
	

}

void removeInternalVariable(v8::Handle<v8::Object> parent, v8::Handle<v8::Object> object)
{

	if (parent.IsEmpty() || object.IsEmpty()) return;

	
	HandleScope handScope;

	unsigned int index = getObjectHash(object);
	char buff[20];
	sprintf(buff, "k_%x", index);
	Local<String> key = String::New(buff);

	Handle<Value> keyVal = parent->GetHiddenValue(key);
	if (!keyVal.IsEmpty()) {	
		Local<Array> arr = Array::Cast(*keyVal);
		Local<Value> count = arr->Get(0);
		int countVal = 0;
		if (!count.IsEmpty() && count->IsNumber())
			countVal = count->Int32Value() - 1;
		if (countVal <= 0) {
			parent->DeleteHiddenValue(key);
		} else
			arr->Set(0, Number::New(countVal));
	}
	
}
void addGlobalReference(v8::Handle<v8::Object> object)
{	
	addInternalVariable(getCurrentContext()->Global(), object);
}

void removeGlobalReference(v8::Handle<v8::Object> object)
{
	removeInternalVariable(getCurrentContext()->Global(), object);
}

static v8::Handle<v8::Value> JS_ResolvePendingClass(const v8::Arguments& args)
{
	Local<Context> ctx = Context::GetCurrent();
	Local<Object> obj = ctx->Global();
	
	//args.Holder()->SetInternalField	
	if (args.Length() >= 2)
    {   
        /*
        internal::Object** obj1 = reinterpret_cast<internal::Object**>(*args[0]->ToObject());
        internal::Object** obj2 = reinterpret_cast<internal::Object**>(*args[1]->ToObject());
        *obj1 = *obj2;*/
        Handle<Value> v1 = args[0];
        Handle<Object> o1 = v1->ToObject();

        Handle<Value> v2 = args[1];
        Handle<Object> o2 = v2->ToObject();
        v8::Object *v8_obj = *args[0]->ToObject();
        v8::Value  *v8_val = *args[0];
        internal::Object** obj1 = reinterpret_cast<internal::Object**>(const_cast<v8::Object*>(v8_obj));
        internal::Object** obj2 = reinterpret_cast<internal::Object**>(*args[1]->ToObject());
        bool b = v1->IsInt32();
        int** v = reinterpret_cast<int**>(*args[0]);
        int** vv2 = reinterpret_cast<int**>(*args[1]);
        *v = *vv2;
        //**v = **vv2;
        /*
        #define MAKE_OPEN_HANDLE(From, To) \
            v8::internal::Handle<v8::internal::To> Utils::OpenHandle(const v8::From* that) {
            return v8::internal::Handle<v8::internal::To>( \
            reinterpret_cast<v8::internal::To**>(const_cast<v8::From*>(that))); \
        }
        */
        //v8::internal::Handle<v8::internal::Object> obj3 =        
        //memcpy(*obj1, *obj2, sizeof(internal::Object));
    }
	return v8::Undefined();
}

static v8::Handle<v8::Value> JS_printf(const v8::Arguments& args)
{
	Local<Context> ctx = Context::GetCurrent();
	Local<Object> obj = ctx->Global();
	
	//args.Holder()->SetInternalField	
	if (args.Length() > 0)
    {      
        bool b = args[0]->IsString();

		v8::String::AsciiValue ascii( args[0]); 		
        
#ifdef ANDROID
		__android_log_print(ANDROID_LOG_DEBUG  , "p2609", "%s\n",  *ascii);
        CCLOG("%s\n", *ascii);
#else
		printf("%s\n", *ascii);       
        CCLOG("%s\n", *ascii);
#endif
    }
	return v8::Undefined();
}

static v8::Handle<v8::Value> JS_loadNativePackage(const v8::Arguments& args)
{	
    
    static bool _box2dLoaded = false;
    static bool _extensionLoaded = false;
    
	if (args.Length() > 0)
    {      
        bool b = args[0]->IsString();

		v8::String::AsciiValue ascii( args[0]); 		
        
        if (strcmp(*ascii, "box2d") == 0) {
            if (!_box2dLoaded) {
                fixBaseClass("box2d", args[1]->ToObject());
                _box2dLoaded = true;
            }
        } else if (strcmp(*ascii, "extension") == 0) {
            if (!_box2dLoaded) {
                fixBaseClass("box2d", args[1]->ToObject());
                _box2dLoaded = true;
            }

            if (!_extensionLoaded) {
                fixBaseClass("extension", args[2]->ToObject());
                _extensionLoaded = true;
            }
        }
    }
	return v8::Undefined();
}
static v8::Handle<v8::Value> JS_setOrientation(const v8::Arguments& args)
{
	Local<Context> ctx = Context::GetCurrent();
	Local<Object> obj = ctx->Global();
		
	if (args.Length() > 0 && args[0]->IsNumber())
    {      
        double orient = args[0]->ToNumber()->NumberValue();
        CCSize size = CCEGLView::sharedOpenGLView()->getFrameSize();
        
        if ((orient == 1 && size.width > size.height)
            || (orient == 0 && size.width < size.height)) {

            CCSize size2 = CCEGLView::sharedOpenGLView()->getDesignResolutionSize();
            //CCSize size2 = CCEGLView::sharedOpenGLView()->getVisibleSize();
            
            CCApplication::sharedApplication()->setOrientation(orient);

        }

    }
	return v8::Undefined();
}

static Handle<Value> tov8_extended_call_func(const Arguments& args)
{
	HandleScope handle_scope;
	if (args.Length() > 0 && args[0]->IsFunction())
	{
		Local<Function> func = Function::Cast(*args[0]);

		Handle<Value> *arguments = NULL;
		
		if (args.Length() > 1) {
			arguments = new Handle<Value>[args.Length() - 1];

			for (int i = 0; i < args.Length() - 1; i++)
				arguments[i] = args[i + 1];
		}
		
		Handle<Value> ret = func->Call(args.Holder(), args.Length() - 1, arguments);

		delete arguments;

		return handle_scope.Close(ret);
	}

	return Undefined();
}
static Handle<Value> tov8_extended_bind_func(const Arguments& args)
{
	HandleScope handle_scope;
	
	if (!isLockedCreateObject() && !args.Data().IsEmpty() && args.Data()->IsArray()) {
		Local<Array> data = Array::Cast(*args.Data());
		
		Local<Function> func = Function::Cast(*data->Get(0));
		Local<Object> obj = data->Get(1)->ToObject();		
		
		Local<Array> param = Array::Cast(*data->Get(2));
		
		int argCount = args.Length() + param->Length();
		Handle<Value> *arguments = new Handle<Value>[argCount];

		int offset = 0;
		for (int i = 0; i < param->Length(); i++)
			arguments[offset++] = param->Get(i);
		for (int i = 0; i < args.Length(); i++)
			arguments[offset++] = args[i];
		
		Handle<Value> ret = func->Call(obj, argCount, arguments);

		delete arguments;
		
		return handle_scope.Close(ret);

	}

	return handle_scope.Close(Undefined());
}
static Handle<Value> tov8_extended_bind(const Arguments& args)
{
	HandleScope handle_scope;
	if (args.Length() >= 2 && args[0]->IsFunction() && args[1]->IsObject())
	{
		Local<Array> data = Array::New(3);
		data->Set(0, args[0]);
		data->Set(1, args[1]);
		Local<Array> params = Array::New(args.Length() - 2);
		for (int i = 2; i < args.Length(); i++) {
			params->Set(i - 2, args[i]);
		}
		data->Set(2, params);
		Local<FunctionTemplate> funcTemp = FunctionTemplate::New(tov8_extended_bind_func, data);
		return handle_scope.Close(funcTemp->GetFunction());
	}

	return Undefined();
}
static Handle<Value> tov8_extended_super_constructor(const Arguments& args)
{
	HandleScope handle_scope;
	
	if (!isLockedCreateObject() && !args.Data().IsEmpty() && args.Data()->IsArray()) {
		Local<Array> data = Array::Cast(*args.Data());
		Handle<Object> super = data->Get(0)->ToObject();
		Handle<Value> option = data->Get(1);
		
		Local<Function> superFunc = Function::Cast(*super);

		Handle<Value> *arguments = new Handle<Value>[args.Length()];

		for (int i = 0; i < args.Length(); i++)
			arguments[i] = args[i];
		v8::TryCatch try_catch;
		superFunc->Call(args.Holder(), args.Length(), arguments);

		delete arguments;
		if (try_catch.HasCaught())
			return handle_scope.Close(try_catch.Exception());
	
		if (option->IsBoolean() && option->BooleanValue()) 
		{
			
			//Get super's methods
			Handle<Object> superProto = superFunc->Get(String::New("prototype"))->ToObject();
			Handle<Array> superPropList = superProto->GetPropertyNames();
			Local<Object> ret = Object::New();

			for (int i = 0; i < superPropList->Length(); i++) {
				Handle<Value> key = superPropList->Get(i);
				Handle<Value> item = superProto->Get(key);
				if (item->IsFunction()) {
					ret->Set(key, item);
				}
			}

			//Get new methods which are created after call super's constructor
			Handle<Object> proto = args.Holder()->GetPrototype()->ToObject();
			Handle<Array> propList = args.Holder()->GetPropertyNames();

			for (int i = 0; i < propList->Length(); i++) {
				Handle<Value> key = propList->Get(i);
				Handle<Value> item = args.Holder()->Get(key);
				if (item->IsFunction()) {
					Handle<Value> protoItem = proto->Get(key);
					if (protoItem.IsEmpty() || protoItem->IsUndefined())
						ret->Set(key, item);
				}
				
			}

			//_call and _super are not necessary
			ret->Delete(String::New("_call"));
			ret->Delete(String::New("_super"));

			//set _super point to super's prototype
			args.Holder()->Set(String::New("_super"), ret);
			return handle_scope.Close(ret);
		}

	}

	return handle_scope.Close(Undefined());
}
static Handle<Value> tov8_extended_constructor(const Arguments& args)
{
	if (_isLockedCreateObject){
		return Undefined();
	}
	HandleScope handle_scope;
	if (args.Holder()->InternalFieldCount() >= 1 && !args.Data().IsEmpty() && args.Data()->IsArray()) {

		Local<Array> superData = Array::Cast(*args.Data());

		Handle<Value> superConstructorFunc = superData->Get(0);
		Handle<Value> constructorFunc = superData->Get(1);
		if (constructorFunc->IsFunction() && superConstructorFunc->IsFunction()) {

			Function* func = Function::Cast(*constructorFunc);
			Function* superFunc = Function::Cast(*superConstructorFunc);
			
			Handle<Value> *arguments = new Handle<Value>[args.Length()];

			for (int i = 0; i < args.Length(); i++)
				arguments[i] = args[i];

			//call super constructor
			
			v8::TryCatch try_catch;
			Local<Array> data = Array::New(2);
			data->Set(0, superConstructorFunc);
			data->Set(1, superData->Get(2));
			args.Holder()->Set(String::New("_super"), FunctionTemplate::New(tov8_extended_super_constructor, data)->GetFunction());
			
			args.Holder()->Set(String::New("_call"), FunctionTemplate::New(tov8_extended_call_func)->GetFunction());
			
			
			Handle<Value> ret;
			if (try_catch.HasCaught())			
				ret = ThrowException(try_catch.Exception());
			else {		
				ret = func->Call(args.Holder(), args.Length(), arguments);
                if (try_catch.HasCaught()) {
                    ReportException(&try_catch);
                    ret = ThrowException(try_catch.Exception());
                }
            }
			delete arguments;
			return handle_scope.Close(ret);

		}
	}
	return handle_scope.Close(Undefined());
}

static Handle<Value> tov8_fake_class(const Arguments& args)
{
    v8::HandleScope handle_scope;
    Local<Function> loadModuleFunc = Function::Cast(*_context->Global()->Get(String::New("LoadModule")));
    Local<Function> subClassFunc = Function::Cast(*_context->Global()->Get(String::New("SubClass")));
    Local<Array> data = Array::Cast(*args.Data());
    Local<Value> className = data->Get(0);
    Local<Value> uriParam = data->Get(1);
    Local<Value> cname = data->Get(2);
    Local<Value> constructor = data->Get(3);
    Local<Value> uri[1] = {uriParam};
    Local<Value> module = loadModuleFunc->Call(_context->Global(), 1, uri); 
    if (!module->IsObject()) 
        return Undefined();
    Local<Object> moduleObj = module->ToObject();
    Local<Value> subClassParam[3] = {className, moduleObj->Get(cname), constructor};
    Local<Value> newClass = subClassFunc->Call(_context->Global(), 3, subClassParam);

    if (newClass.IsEmpty() || !newClass->IsFunction())
        return Undefined();

    String::Utf8Value tmp(uriParam);
    
    const char* fullPath = CCFileUtils::sharedFileUtils()->fullPathFromRelativePath(*tmp);


    _importedList->Set(String::New(fullPath), newClass);


    return handle_scope.Close(newClass);
}
static v8::Handle<v8::Value> JS_ClassExtended(const v8::Arguments& args)
{
	v8::HandleScope handle_scope;
	if (args.Length() < 3) 
		return v8::Undefined();
	if (!args[0]->IsString() || !args[1]->IsFunction() || !args[2]->IsFunction())
		return v8::Undefined();
		
	
	Local<Function> superClass = Function::Cast(*args[1]);
	
    if (superClass->Has(String::New("isFake")))
    {
        Local<Array> superData = Array::New(3);
        superData->Set(0, args[0]); //class name
        superData->Set(1, superClass->Get(String::New("uri"))); //constructor
        superData->Set(2, superClass->Get(String::New("cname"))); //super's class name
        superData->Set(3, args[2]); //constructor

        Local<FunctionTemplate> func = FunctionTemplate::New(tov8_fake_class, superData);
        func->SetClassName(args[0]->ToString());
        return handle_scope.Close(func->GetFunction());
    }


	Local<Array> superData = Array::New(3);
	superData->Set(0, args[1]);
	superData->Set(1, args[2]);

	_isLockedCreateObject = true;
 	
	Handle<Object> newPrototype = superClass->NewInstance();
	_isLockedCreateObject = false;

	if (args.Length() >= 4 &&  args[3]->IsBoolean())
		superData->Set(2, args[3]);
	else 
		superData->Set(2, Boolean::New(false));

	Local<FunctionTemplate> newClass = FunctionTemplate::New(tov8_extended_constructor, superData);
	
	
	newClass->SetClassName(args[0]->ToString());
	Handle<ObjectTemplate> newClassPrototype = newClass->PrototypeTemplate();
	newClassPrototype->SetInternalFieldCount(1);
		

	v8::Handle<v8::ObjectTemplate> point_inst = newClass->InstanceTemplate();
	point_inst->SetInternalFieldCount(1);

	Handle<Function> retFunc = newClass->GetFunction();
	retFunc->Set(String::New("prototype"), newPrototype);
		
	return handle_scope.Close(retFunc);
}
static v8::Handle<v8::Value> JS_exports(const v8::Arguments& args)
{
	HandleScope handle_scope;
	if (args.Length() <= 0) return Undefined();

	Handle<Object> container = Object::New();
	for (int i = 0; i < args.Length(); i++) {
		if (args[i]->IsFunction()) {
			Local<Function> func = Function::Cast(*args[i]);
			container->Set(func->GetName(), func);
		} /*else {
			//throw exception
			return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot export none function!", 0)));
		}*/
	}
	_currentExport = Persistent<Object>::New(container);
	/*
	if (args.Length() > 0)
    {      		

		_currentExport = Persistent<Object>::New(args[0]->ToObject());				
    }*/
	return v8::Undefined();
}

// Extracts a C string from a V8 Utf8Value.
const char* ToCString(const v8::String::Utf8Value& value) {
  return *value ? *value : "<string conversion failed>";
}
void ReportException(v8::TryCatch* try_catch) {
  v8::HandleScope handle_scope;
  v8::String::Utf8Value exception(try_catch->Exception());
  const char* exception_string = ToCString(exception);
  v8::Handle<v8::Message> message = try_catch->Message();
  if (message.IsEmpty()) {
    // V8 didn't provide any extra information about this error; just
    // print the exception.
    fprintf(stderr, "%s\n", exception_string);
  } else {
    // Print (filename):(line number): (message).
    v8::String::Utf8Value filename(message->GetScriptResourceName());
    const char* filename_string = ToCString(filename);
    int linenum = message->GetLineNumber();
    fprintf(stderr, "%s:%i: %s\n", filename_string, linenum, exception_string);
    // Print line of source code.
    v8::String::Utf8Value sourceline(message->GetSourceLine());
    const char* sourceline_string = ToCString(sourceline);
    fprintf(stderr, "%s\n", sourceline_string);
    // Print wavy underline (GetUnderline is deprecated).
    int start = message->GetStartColumn();
    for (int i = 0; i < start; i++) {
      fprintf(stderr, " ");
    }
    int end = message->GetEndColumn();
    for (int i = start; i < end; i++) {
      fprintf(stderr, "^");
    }
    fprintf(stderr, "\n");
    v8::String::Utf8Value stack_trace(try_catch->StackTrace());
    if (stack_trace.length() > 0) {
      const char* stack_trace_string = ToCString(stack_trace);
      fprintf(stderr, "%s\n", stack_trace_string);
    }
  }
}
static v8::Handle<Object> _createObjectFromFile(const char *file, const char* className)
{
    std::string src = "(function(){";
    src.append("Import(\"");
    src.append(file);
    src.append("/");
    src.append(className);
    src.append("\");");
    src.append("return ");
    src.append(className);
    src.append(";})();");


    v8::HandleScope handle_scope;	
	v8::TryCatch try_catch;
		

    v8::Handle<v8::Script> script = v8::Script::Compile(String::New(src.c_str()), String::New(file));
	
	if (script.IsEmpty()) 
	{
		//v8::String::AsciiValue error(try_catch.Exception());
		//v8::String::AsciiValue trace(try_catch.StackTrace());
		//printf("trace: %s\n", *trace);
		ReportException(&try_catch);
		//return v8::ThrowException(Exception::Error(String::New(*error)));
        return handle_scope.Close(Handle<Object>());
	} 
	else 
	{
		v8::Handle<v8::Value> result = script->Run();
		
		if (result.IsEmpty()) 
		{
			v8::String::AsciiValue error(try_catch.Exception());
			
			char buffer[256];
			sprintf(buffer, "Import error - %s", *error);
			
			//return v8::ThrowException(v8::Exception::Error(v8::String::New(buffer)));
            return Handle<Object>();
		} else {
            if (result->IsFunction()) {
                Local<Function> func = Function::Cast(*result);
                Local<Object> obj = func->NewInstance();
                if (obj.IsEmpty()) {
                    int m = 0;
                    obj = func->NewInstance();
                    m += 2;
                }
                return handle_scope.Close(obj);
            } else 
                return Handle<Object>();
        }
        
	}
}

static v8::Handle<Value> loadSource(const char* source, const char* name)
{
       
	v8::HandleScope handle_scope;

	v8::TryCatch try_catch;
		
	v8::Handle<v8::Script> script = v8::Script::Compile(String::New(source), String::New(name));
	
	if (script.IsEmpty()) 
	{
		v8::String::AsciiValue error(try_catch.Exception());
		const char* s = *error;
		
		//printf("exception: %s\n", s);
		v8::String::AsciiValue trace(try_catch.StackTrace());
		printf("trace: %s\n", *trace);
		ReportException(&try_catch);
        return handle_scope.Close(v8::ThrowException(Exception::Error(String::New(*error))));
	} 
	else 
	{
		Local<String> libName = v8::String::New(name);
		//mark loading
		_importedList->Set(libName, Boolean::New(false));        
		//currentExport = Object::New();
		v8::Handle<v8::Value> result = script->Run();
		
		if (result.IsEmpty()) 
		{
			_importedList->Delete(libName);
            v8::String::Utf8Value error(try_catch.Exception());
			
			char buffer[256];
			sprintf(buffer, "Import error - %s", *error);
			printf("\n%s\n", buffer);
            ReportException(&try_catch);
            return handle_scope.Close(v8::ThrowException(v8::Exception::Error(v8::String::New(buffer))));
		} 
		else 
		{
			_importedList->Set(libName, _currentExport);		
		}

        return handle_scope.Close(_currentExport);
	}
}


static v8::Handle<v8::Value> JS_import(const v8::Arguments& args)
{
	HandleScope handle_scope;
	if (args.Length() > 0)
	{      
		v8::String::AsciiValue ascii( args[0]); 		
		const char* fileName = *ascii;
		bool isReload = false;
		
		if (args.Length() == 2 && args[1]->IsBoolean())
		{
			isReload = args[1]->ToBoolean()->BooleanValue();
		}

		const char* fullPath = CCFileUtils::sharedFileUtils()->fullPathFromRelativePath(fileName);
		if (!isReload)
		{

			Handle<Value> val = _importedList->Get(String::New(fullPath));

			if (val->IsBoolean() && val->BooleanValue() == false) {
                //the Class is not defined yet
                //return the UndefinedClass
				return handle_scope.Close(Boolean::New(false));
			} else if (!val->IsNull() && val->IsObject())
			{
                return handle_scope.Close(val);
			}
		}

		unsigned long size;
		unsigned char* dataBuffer = CCFileUtils::sharedFileUtils()->getFileData(fullPath, "r", &size);
		if (dataBuffer && size > 0) {
			char *data = (char*)malloc(size + 1);
			memcpy(data, dataBuffer, size);
			data[size] = '\0';
            std::string str = "(function(){";
            str.append(data);
            str.append("})();");
            printf("======-------------========\n");
			Handle<Value> ret = loadSource(data, fullPath);
            //Handle<Value> ret = loadSource(str.c_str(), fullPath);

			free(data);
			free(dataBuffer);
            return handle_scope.Close(ret);
		}

	}
	return v8::Undefined();
}
static v8::Handle<v8::Value> JS_garbageCollect(const v8::Arguments& args)
{
	v8::V8::LowMemoryNotification();
	
	//Need remove later
	while (!V8::IdleNotification())
	{
	}
	
	return v8::Undefined();
}


static v8::Handle<v8::Value>toJSC_collect_JacosBaseObject(v8::Persistent<v8::Value> object, void *parameter)
{
	PRIVATE_OBJECT_INFOR *info = (PRIVATE_OBJECT_INFOR*)parameter;
	delete info;
	return v8::Undefined();
}

static v8::Handle<v8::Value> CreateObject()
{
	CLASS_INFORM_ *inf = classesList[CLS_CCSPRITE_ID];	 
	//Handle<Object> obj = Object::New();
    Handle<Object> obj;
    if (inf->classObjPtr.IsEmpty())
	    obj = inf->classPtr->GetFunction()->NewInstance();
    else 
        obj = inf->classObjPtr->NewInstance();

	Persistent<External> etr = Persistent<External>::New(External::New(NULL));
	etr.MakeWeak(NULL, &do_nothing_collection_func);

	return obj;
}
static v8::Handle<v8::Value> TestObject(const v8::Arguments& args)
{
	return CreateObject();
}
v8::HandleScope *gHandleSope;

void resolveFunc(int classID, const char* functionName, v8::InvocationCallback callback, int memberType) {

	CLASS_MEMBER member;
	member.memberType = memberType;
	member.memberName = functionName;
	member.memberPtr = reinterpret_cast<void*>(callback);
	member.memberPtr2 = NULL;

	CLASS_INFORM_ *clsInf = classesList[classID];

	int index = getClassMemberIndex(clsInf->classMembersList, functionName);
	if (index < 0)
		clsInf->classMembersList->addElement(member);
	else 
		clsInf->classMembersList->setElementAt(member, index);

}

v8::Handle<v8::ObjectTemplate> initThread(CallbackType callbackFunc)
{
    scopeList.removeAllElements();
    currentScope = NULL;
    
	_global = v8::Persistent<v8::ObjectTemplate>(v8::ObjectTemplate::New());
	
	tov8_openScope("global");
	_global->Set("printf",  v8::FunctionTemplate::New(JS_printf));
    _global->Set("LoadNativePackage",  v8::FunctionTemplate::New(JS_loadNativePackage));
    _global->Set("ResolvePendingClass",  v8::FunctionTemplate::New(JS_ResolvePendingClass));
    
    _global->Set("setOrientation",  v8::FunctionTemplate::New(JS_setOrientation));
    
	
	_global->Set("SubClass",  v8::FunctionTemplate::New(JS_ClassExtended));
	_global->Set("bind",  v8::FunctionTemplate::New(tov8_extended_bind));
	_global->Set("LoadModule",  v8::FunctionTemplate::New(JS_import));
	
	_global->Set("Exports",  v8::FunctionTemplate::New(JS_exports));
	//_global->Set("TestObject",  v8::FunctionTemplate::New(TestObject));
	_global->Set("garbageCollect",  v8::FunctionTemplate::New(JS_garbageCollect));
	
    tov8_cclass(BASE_CLASS_ID,-1, NULL);
    tov8_closeClass();
	callbackFunc();

	resolveJacos2dxFunctions();
    
    
    fixBaseClass("cocos2d");
    fixBaseClass("jacos2dx");
    fixBaseClass("CocosDenshion");

    if (gJSCCallFunctions == NULL)
        gJSCCallFunctions = new JavaScriptCoreCallFunc();
	
	return _global;
}
bool ExecuteString(v8::Handle<v8::String> source,v8::Handle<v8::Value> name,bool print_result) 
{
    
  //v8::HandleScope handle_scope;
  //Context::Scope scope(_context);

  //Context::GetCurrent()->Global()->Set(String::New("native_var"), String::New("This is the var!!"));
  
  v8::TryCatch try_catch;
  v8::Handle<v8::Script> script = v8::Script::Compile(source, name);
  //v8::Handle<v8::Script> script = v8::Script::Compile(source);
  if (script.IsEmpty()) 
  {
    v8::String::AsciiValue error(try_catch.Exception());
	const char* s = *error;
    printf("%s\n", *error);
	v8::String::AsciiValue trace(try_catch.StackTrace());
	printf("trace: %s\n", *trace);
	ReportException(&try_catch);
    return false;
  } 
  else 
  {
    v8::Handle<v8::Value> result = script->Run();
    if (result.IsEmpty()) 
	{

		if (try_catch.HasCaught())
			ReportException(&try_catch);
		return false;
    } 
	else 
	{
      if (print_result && !result->IsUndefined()) 
	  {        
        v8::String::AsciiValue str(result);
        printf("%s\n", *str);
      }
      return true;
    }
  }
  
}
void contextDestroyed(Persistent<Value> object, void* parameter)
{
	int m = 0;
}

bool isLockedCreateObject()
{
	return _isLockedCreateObject;
}
void runSourceCode(const char* sourceCode, const char* sourceName)
{        
    try {

		v8_ready = true;
		_isLockedCreateObject = false;		
		_importedList = Persistent<Object>::New(Object::New());

		ExecuteString(v8::String::New(sourceCode), sourceName?v8::String::New(sourceName) : v8::String::New(sourceName), false);
		//v8::V8::LowMemoryNotification();
		
		//v8::StackTrace s;
		/*
		if (debug_message_context.IsEmpty())
		{
			debug_message_context = v8::Persistent<v8::Context>::New(context);
			v8::Locker *locker = new v8::Locker();
			//v8::V8::Initialize(); 
			v8::Debug::EnableAgent("V8-Thread1", 9223, true);
			v8::Debug::SetDebugMessageDispatchHandler(DebugMessageDespatchCallback, true);

		}*/

		
    } catch (JSCException e) {
        printf("exception");
    }

}

Handle<Value> executeJS(const char* source, const char *name)
{
	ExecuteString(v8::String::New(source), name?v8::String::New(name) : v8::String::New(""), false);
	return v8::Undefined();
}


void JSC_log_error(int errorcode)
{
    //    cocos2d::CCLayer *m;
}
void JSC_log_error(int errorcode, void* ctx, void* obj, void *exception)
{
    //    cocos2d::CCLayer *m;
}
v8::Handle<v8::Value> tov8_pushUserData(void *data)
{
    //return (JSObjectRef)data;
	return v8::Null();
};

void * JSC_ObjectGetPrivate(int classID, void *objectPtr)
{
    //return JSC_ObjectGetPrivate(classID, objectPtr);
	return objectPtr;
}

bool JSC_instanceOf(PRIVATE_OBJECT_INFOR *obj, int classID)
{
    int count = obj->familySize;
    for (int i = 0; i < count; i++)
        if (obj->familyIDList[i] == classID) return true;
    return false;
}
void * JSC_ObjectGetPrivate(int classID, v8::Handle<v8::Object> objectPtr)
{

	if (objectPtr.IsEmpty() || objectPtr->IsNull() || objectPtr->IsUndefined() || !objectPtr->IsObject())
        return NULL;
	Local<Value> val = objectPtr->GetInternalField(0);

	if (!val->IsExternal())
		throw JSCParametersException("Invalid parameter");
	if (val->IsUndefined() || val->IsNull())
		return NULL;	
	
	PRIVATE_OBJECT_INFOR *obj = (PRIVATE_OBJECT_INFOR*)v8::Local<v8::External>::Cast(val)->Value();  
    if (obj && (classID < 0 || (obj->signature == 'PRVO' && JSC_instanceOf(obj, classID))))
    {
        return obj->objectPtr;
    } else {      
        throw JSCParametersException("Invalid parameter(s)");
    }
    return NULL;
    
};
void tov8_closeClass()
{
    currentClassMembers = NULL;
}

void default_object_collection_func (Persistent<Value> object, void *parameter)
{
	PRIVATE_OBJECT_INFOR *objInf = (PRIVATE_OBJECT_INFOR*)parameter;
	if (objInf->signature == 'PRVO')
	{		
        
		if (!objInf->needDeleteNative && objInf->objectPtr && objInf->objectType == PRIVATE_OBJECT_INFOR::OBJ_TYPE_JacosBaseObject) {            
            ((JacosBaseObject*)objInf->objectPtr)->clearJSObj();            
		}

		delete objInf;
		object.Dispose();
	}
}
Handle<Object> makeJSObjectException(const char* message, int code)
{
	JSCException ex(message, code);
	return makeJSObjectException(&ex);
}
Handle<Object> makeJSObjectException(JSCException *exception)
{
	//v8::Local<Object> obj = Object::New();
	v8::Local<v8::Object> obj = v8::Exception::Error(String::New(exception->toString()))->ToObject();

	//obj->Set(String::New("message"), String::New(exception->toString()));
	//obj->Set(String::New("code"), Number::New(exception->getExceptionCode()));
	return obj;	
}


v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<std::string> *value, std::vector<std::string> *generalPoint, const char* className, bool needDeleteNative)
{
	
	Local<Array> obj = Array::New(value->size());
	
	std::vector<std::string>::const_iterator i;
	
	int count = 0;
	for (i = value->begin(); i != value->end(); ++i)
    {
		
		obj->Set(count, String::New(i->c_str()));
		count++;
    }		
	return obj;
}

v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<CCObject*>::iterator *value, std::vector<CCObject*>::iterator *generalPoint, const char* className, bool needDeleteNative)
{		
	return tov8_pushusertype(**value, **value, CLS_CCOBJECT_ID, false);	
}
v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<CCObject*>::reverse_iterator *value, std::vector<CCObject*>::reverse_iterator *generalPoint, const char* className, bool needDeleteNative)
{
	return tov8_pushusertype(**value, **value, CLS_CCOBJECT_ID, false);	
}
v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<CCSpriteFrame*>::iterator *value, std::vector<CCSpriteFrame*>::iterator *generalPoint, const char* className, bool needDeleteNative)
{
	return tov8_pushusertype(**value, **value, CLS_CCSPRITEFRAME_ID, false);	
}
v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<CCSpriteFrame*>::reverse_iterator *value,std::vector<CCSpriteFrame*>::reverse_iterator *generalPoint, const char* className, bool needDeleteNative)
{
	return tov8_pushusertype(**value, **value, CLS_CCSPRITEFRAME_ID, false);	
}
v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<CCFiniteTimeAction*>::iterator *value,std::vector<CCFiniteTimeAction*>::iterator *generalPoint, const char* className, bool needDeleteNative)
{
	return tov8_pushusertype(**value, **value, CLS_CCFINITETIMEACTION_ID, false);	
}
v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<CCFiniteTimeAction*>::reverse_iterator *value, std::vector<CCFiniteTimeAction*>::reverse_iterator *generalPoint, const char* className, bool needDeleteNative)
{
	return tov8_pushusertype(**value, **value, CLS_CCFINITETIMEACTION_ID, false);
}
v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<CCNode*>::iterator *value, std::vector<CCNode*>::iterator *generalPoint, const char* className, bool needDeleteNative)
{
	return tov8_pushusertype(**value, **value, CLS_CCNODE_ID, false);
}
v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<CCNode*>::reverse_iterator *value, std::vector<CCNode*>::reverse_iterator *generalPoint, const char* className, bool needDeleteNative)
{
	return tov8_pushusertype(**value, **value, CLS_CCNODE_ID, false);
}


v8::Handle<v8::Value> tov8_pushUserData(std::string str)
{
	return v8::String::New(str.c_str());
}

std::string JSC_GetStdString(v8::Handle<v8::Value> str)
{
	if (str->IsString()) {
		v8::String::AsciiValue strtmp0(str);
		return std::string(*strtmp0);
	}  else
		return std::string();
}

unsigned int getObjectHash(Handle<Object> value) {	
	if (value.IsEmpty()) return 0;
	internal::Object** p = reinterpret_cast<internal::Object**>(*value);
	return reinterpret_cast<unsigned int>(*p);
}

class DirectorDelegate : public CCDirectorDelegate 
{
public:
	virtual ~DirectorDelegate()
	{
		delete m_pScope;
	};
    virtual void updateProjection(void)
	{

	};

	virtual void onStart()
	{
		logHeap();
		m_pV8Handle = V8Handle::open();
		logHeap();
        initThread(tov8_jacos2dx_open);
		logHeap();
		_context = Persistent<Context>::New(Context::New(NULL, _global));		

		_context->Enter();
		m_pScope = new Context::Scope(_context);


#ifdef ALLOW_REMOTE_DEBUG
		if (debug_message_context.IsEmpty())
		{
			debug_message_context = v8::Persistent<v8::Context>::New(_context);
			v8::Locker *locker = new v8::Locker();            
			v8::Debug::SetDebugMessageDispatchHandler(DebugMessageDespatchCallback, true);
			v8::Debug::EnableAgent("Jacos2d-x", 9223, true);

		}
#endif
		
		globalObjects = Persistent<Array>::New(Array::New(50));
		Local<Object> global = Context::GetCurrent()->Global();
		Local<Array> prop = global->GetPropertyNames();
		
		for (int i = 0; i < prop->Length(); i++) 
		{
			Handle<Value> key = prop->Get(i);
			globalObjects->Set(key, global->Get(key));
			//v8::String::AsciiValue ascii(prop->Get(i)); 
			//printf("prop: %s\n", *ascii);
		}
        
#ifdef JACOS2DX_RELEASE
        reset(mainEntry.c_str());
#else
        CCDirector::sharedDirector()->setJacosDevScene(new JacosDevScene());
#endif
        
	};
	virtual void onExit()
	{
		_context->Exit();
		_context.Dispose();
	};
	virtual void onPause()
	{
	};
	virtual void onResume()
	{
	};
private:
	V8Handle *m_pV8Handle;
	Context::Scope *m_pScope;
};
static DirectorDelegate gDirectorDelegate;
void initJacos2dx()
{	
	CCDirector::sharedDirector()->setDirectorDelegate(&gDirectorDelegate);
}

bool isExistClass(int classID) {
    return classesList[classID] != NULL;
}
void setClassConstructor(int classID, v8::InvocationCallback constructor) {
    classesList[classID]->constructor = constructor;
}
v8::InvocationCallback getClassConstructor(int classID) {
    return classesList[classID]->constructor;
}

inline Handle<Value> tov8_pushString(const char* str)
{
	if (str == NULL)
		return v8::Null();
	else 
		return String::New(str);
}
inline Handle<Value> tov8_pushString(std::string str)
{
	return String::New(str.c_str());
}
void* initNewObject(int classID, void* obj, void* originObj, Handle<Object> value)
{
	return initNewObject(classID, obj, value);
}
static void setExternalDataObject(JacosBaseObject* obj, Handle<Object> value)
{
	//tov8_ret->setExternalData(copyObject(args.Holder()));
	obj->setJSObjInstance(value);
	//obj->markReference(value);
}
static void setExternalDataObject(void* obj, Handle<Object> value)
{

}
void* getJSObjectRef(v8::Handle<v8::Value> value)
{
	bool func = value->ToObject()->IsFunction();
	//return (value->IsNull()?NULL:*(value->ToObject()));
	return (value->IsNull()?NULL:getObjectRef(value->ToObject()));
}
void* getObjectRef(Handle<Object> value)
{
	//return *value;
	internal::Object** p = reinterpret_cast<internal::Object**>(*value);
	return *p;
	
}
v8::Handle<v8::Value> tov8_pushJSObject(void* data)
{
	//return (data != NULL)?(v8::Handle<v8::Value>((v8::Value*)data)):(v8::Null());	
	if (data) 
		return v8::Handle<v8::Value>((v8::Value*)data);
	else 
		return v8::Null();
	//return v8::Local<v8::Value>((v8::Value*)data);
};
inline void * JSC_ObjectGetPrivate(int classID, v8::Handle<v8::Value> objectPtr)
{

	return JSC_ObjectGetPrivate(classID, objectPtr->ToObject());
}
inline v8::Handle<v8::String> JSC_String(const char *str)
{    
	return v8:: String::New(str);
};

inline v8::Handle<v8::Value> JSC_MakeUndefined()
{
	return v8::Undefined();
};
inline void* toJSC_copy(void *source, int size)
{
	void* retVal  = malloc(size);
	memcpy(retVal, source, size);
	return retVal;
};

PRIVATE_OBJECT_INFOR::PRIVATE_OBJECT_INFOR()
{
    signature = 'PRVO';
    className = NULL;
    needDeleteNative = true;
};
PRIVATE_OBJECT_INFOR::~PRIVATE_OBJECT_INFOR()
{

    if (objectPtr && needDeleteNative) 
    {

        try {
            switch (objectType)
            {
            case OBJ_TYPE_POINTER:
                //free(objectPtr);            
                delete objectPtr;                    
                break;
            case OBJ_TYPE_JacosBaseObject:
                if (!((JacosBaseObject*)objectPtr)->isManaged())
                    delete (JacosBaseObject*)objectPtr;
                break;
            }
        } catch (JSCException e) {
            printf("Exception when destroy: %s \n", className);
        }
    }
    objectPtr = NULL;        
}