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
#ifndef JACOS2DX_BASE_OBJECT_H
#define JACOS2DX_BASE_OBJECT_H
#include <stdlib.h>
#include <string>
#include "v8.h"

#ifdef _COCOS2DX
#include "platform/CCPlatformMacros.h"
#endif

#ifdef _WINDOWS
#define __THREAD_LOCAL __declspec( thread )

#ifndef CC_DLL
#define CC_DLL      //__declspec(dllexport)
#endif

#else
#define __THREAD_LOCAL
#define CC_DLL
#endif

#ifndef BEGIN_BOX2D_NSP

#define BEGIN_BOX2D_NSP namespace box2d {
#endif

#ifndef END_BOX2D_NSP
#define END_BOX2D_NSP }
#endif

#define JACOS2DX_ASSERT JSC_ThrowException
#define CC_ASSERT JACOS2DX_ASSERT

#define JS_SAFE_MARK_REF(X) if (X) this->markReference((X)->getJSObjInstance());
#define JS_SAFE_REMOVE_REF(X) if (X) this->removeReference((X)->getJSObjInstance());

void CC_DLL JSC_ThrowException(int condition, const char *message = NULL, int code = 0);
void CC_DLL JSC_ThrowException(void* condition, const char *message = NULL);
bool startWithStrIgnoreCase(const char* source, const char* subStr);
bool endWithStrIgnoreCase(const char* source, const char* subStr);

class CC_DLL JSCException
{
protected:
	int			mExceptionCode;
	std::string	    mMessage;
public:
    JSCException(const char *msg, int exceptionCode = 0)
    {
        mMessage = msg;
		mExceptionCode = exceptionCode;
    }
    const char* toString()
    {
        return mMessage.c_str();
    };
	inline int getExceptionCode() {
		return mExceptionCode;
	};
};
class CC_DLL JSCParametersException : public JSCException
{
public:
    JSCParametersException(const char *msg)
    :JSCException(msg)
    {
		//mExceptionCode = 1;  
    }
};

class JacosBaseObject;
class CC_DLL JSSystemHelper
{
public:
    virtual v8::Handle<v8::Object> createObjectFromFile(const char *file, const char* className) = 0;
	virtual v8::Handle<v8::Value> callJSFunc(v8::Handle<v8::Function> function, v8::Handle<v8::Object> receive, int argc, v8::Handle<v8::Value> *args) = 0;
	virtual void callJSFunction(v8::Handle<v8::Object> function, v8::Handle<v8::Value> value) = 0;
	virtual void callJSFunction(v8::Handle<v8::Object> function) = 0;
    virtual void callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function) = 0;
    virtual unsigned int callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function, void* data) = 0;
    //    virtual unsigned int callJSFunction(void *object, void *function, void *objParam) = 0;
    virtual unsigned int callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function, int intParam, void *objParam) = 0;
    virtual void callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function, double numParam) = 0;
	//This method used for cocos2d extension
	virtual void callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function, v8::Handle<v8::Object> sender, double eventID) = 0;
	virtual void callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function, v8::Handle<v8::Object> sender, v8::Handle<v8::Object> obj) = 0;
    virtual void callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function, double numParam1, double numParam2) = 0;
    virtual void callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function, double numParam1, double numParam2, double numParam3) = 0;
    virtual void* callJSFunctionWithName(v8::Handle<v8::Object> object, const char* name) = 0;
	virtual void* callJSFunctionWithName(v8::Handle<v8::Object> object, const char* name, double param1) = 0;
	virtual void* callJSFunctionWithName(v8::Handle<v8::Object> object, const char* name, double param1, double param2) = 0;
	virtual void* callJSFunctionWithName(v8::Handle<v8::Object> object, const char* name, void* data) = 0;
	virtual v8::Handle<v8::Object> getObjectMemberByName(v8::Handle<v8::Object> object, const char* name) = 0;
	virtual void* createJSCCTouch(void* touch) = 0;
    virtual void* createJSCCTouches(void** points, int count) = 0;
    
	virtual v8::Handle<v8::Value> assignJavaScriptObject(JacosBaseObject *JacosBaseObject, void* generalPtr, int classTypeID, bool needDeleteNative) = 0;
    virtual unsigned int callJSFunction(v8::Handle<v8::Object> object, v8::Handle<v8::Object> function, void* param1, void* param2) = 0;
    
		
	virtual void addInternalVar(v8::Handle<v8::Object> parent, v8::Handle<v8::Object> object) = 0;
    virtual void removeInternalVar(v8::Handle<v8::Object> parent, v8::Handle<v8::Object> object) = 0;
    virtual void addGlobalReference(v8::Handle<v8::Object> object) = 0;
    virtual void removeGlobalReference(v8::Handle<v8::Object> object) = 0;
	virtual void* getHash(v8::Handle<v8::Object> object) = 0;
	virtual v8::Handle<v8::Value> createJSObject(void* nativeObject, int classID, bool needDeleteNative) = 0;
	//virtual void* createSingleton(int classID, void* identify) = 0;
	//virtual void* createCCNotificationCenterSingleton(void* identify) = 0;
    
};


void CC_DLL setJSSystemHelper(JSSystemHelper *jsSystemHelper);
JSSystemHelper* CC_DLL getJSSystemHelper();
class CC_DLL JacosBaseObject
{
public:
	JacosBaseObject() {
		mJSObjInstance = 0;		
	};
    
	virtual ~JacosBaseObject()
	{
		if (!mV8Controller.IsEmpty())
			this->getJSCCallFunc()->removeGlobalReference(mV8Controller);
	};
    
	
	virtual void setController(v8::Handle<v8::Object> controller);
		
	inline v8::Handle<v8::Object> getController() {	
		return mV8Controller;
	}
	
	virtual void setJSObjInstance(v8::Handle<v8::Object> data);
    void clearJSObj();
	inline v8::Handle<v8::Object> getJSObjInstance() {	
		return mV8JSObjInstance;
	};

	JacosBaseObject* getThis()
	{
		return this;
	}
    
	static void addGlobalReference(v8::Handle<v8::Object> object);
	
	static void removeGlobalReference(v8::Handle<v8::Object> object);	
	
    void markReference(v8::Handle<v8::Object> object);
    
	void removeReference(v8::Handle<v8::Object> object);
    void assignJavaScriptObject(int classTypeID, bool needDeleteNative = true);
    JSSystemHelper* getJSCCallFunc();
	virtual bool isManaged() {return false;}
	
private:
	static void default_object_collection_func (v8::Persistent<v8::Value> object, void *parameter);
protected:
	void* mJSObjInstance;
	
	v8::Persistent<v8::Object> mV8JSObjInstance;
	v8::Persistent<v8::Object> mV8Controller;
	

};


#endif