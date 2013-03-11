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

#include "manual_wrap.h"
#include "toV8lib.h"
#include "wrapped_classes.h"
#include "v8Cocos2d.h"

void* getUint32Array(Handle<Value> jsArray) {
	CC_ASSERT(jsArray->IsArray(), "parameter is not an array!");
	Local<Array> arr = Array::Cast(*jsArray);
	
	unsigned int length = arr->Length();
	unsigned int *data = (unsigned int*)malloc(length * sizeof(unsigned int));

	for (int i = 0; i < length; i++)
	{
		Local<Value> value = arr->Get(i);
		if (value->IsUndefined())
			data[i] = 0;
		else data[i] = value->ToNumber()->Uint32Value();
	}
	return data;
}

Handle<Value> getArrayFromUint32(unsigned int *data, int count) {
	Local<Array> arr = Array::New(count);

	for (int i = 0; i < count; i++) {
		arr->Set(i, Number::New(data[i]));
	}
	return arr;
}

void* getUint8Array(Handle<Value> jsArray) {
	CC_ASSERT(jsArray->IsArray(), "parameter is not an array!");
	Local<Array> arr = Array::Cast(*jsArray);
	
	unsigned int length = arr->Length();
	unsigned char *data = (unsigned char*)malloc(length * sizeof(unsigned char));

	for (int i = 0; i < length; i++)
	{
		Local<Value> value = arr->Get(i);
		if (value->IsUndefined())
			data[i] = 0;
		else data[i] = (unsigned char)value->ToNumber()->Uint32Value();
	}
	return data;
}

Handle<Value> getArrayFromUint8(unsigned char *data, int count) {
	Local<Array> arr = Array::New(count);

	for (int i = 0; i < count; i++) {
		arr->Set(i, Number::New(data[i]));
	}
	return arr;
}

static Handle<Value> tov8_jacos2dx_cocos2d_CCSequence_createWithArray(const Arguments& args)
{
	HandleScope handle_scope;
	if (args.Length() != 1
		||(args[0]->IsNull() || !args[0]->IsArray())
		) {
			return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get native object!", 0)));
	} else
	{
		try { 	  
			Local<Array> arr = Array::Cast(*args[0]);

			unsigned int length = arr->Length();			
			CCArray *actionsList = CCArray::create();
			for (int i = 0; i < length; i++)
			{
				Local<Value> value = arr->Get(i);
				if (!value->IsUndefined()) {
					CCFiniteTimeAction *action = (CCFiniteTimeAction*)JSC_ObjectGetPrivate(CLS_CCFINITETIMEACTION_ID, value);
					if (action == NULL) {						
						throw JSCParametersException(CCString::createWithFormat("Item %d is not CCFiniteTimeAction object!", i)->getCString());
					} else {
						actionsList->addObject(action);
					}
				}
					
			}
			try {
				CCFiniteTimeAction *ret = CCSequence::create(actionsList);
				actionsList->release();

				return  handle_scope.Close(tov8_pushusertype(ret, ret, CLS_CCFINITETIMEACTION_ID, true));
			} catch (JSCException e) {
				return  handle_scope.Close(v8::ThrowException(makeJSObjectException(&e)));
			}
		} catch (JSCParametersException e) {
			return  handle_scope.Close(v8::ThrowException(makeJSObjectException(&e)));
		}
	}
	return  handle_scope.Close(v8::Undefined());
}
static Handle<Value> tov8_jacos2dx_cocos2d_CCTMXLayer_setTiles00(const Arguments& args)
{
 HandleScope handle_scope;
 if (args.Length() != 1
	 ||(args[0]->IsNull() || !args[0]->IsArray())
) {
  return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get native object!", 0)));
} else
 {
  try { 
  cocos2d::CCTMXLayer* self = (cocos2d::CCTMXLayer*)  JSC_ObjectGetPrivate(-1, args.Holder());
  unsigned int *data = (unsigned int*)getUint32Array(args[0]);
#ifndef TOJSC_RELEASE
  if (!self) return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get native object!", 0)));
#endif
	try {
		self->setTiles(data);
	} catch (JSCException e) {
  		return  handle_scope.Close(v8::ThrowException(makeJSObjectException(&e)));
	}
	} catch (JSCParametersException e) {
  		return  handle_scope.Close(v8::ThrowException(makeJSObjectException(&e)));
	}
 }
 return  handle_scope.Close(v8::Undefined());
}


static Handle<Value> tov8_jacos2dx_cocos2d_CCTMXLayer_getTiles00(const Arguments& args)
{
	HandleScope handle_scope;
	if (args.Length() != 0) {
		return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get native function!", 0)));
	} else
	{
		try { 
			cocos2d::CCTMXLayer* self = (cocos2d::CCTMXLayer*)  JSC_ObjectGetPrivate(-1, args.Holder());

#ifndef TOJSC_RELEASE
			if (!self) return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get native object!", 0)));
#endif
			unsigned int *data = self->getTiles();
			
			CCSize size = self->getMapTileSize();
			return handle_scope.Close(getArrayFromUint32(data, (int)(size.width * size.height)));
		} catch (JSCParametersException e) {
			return  handle_scope.Close(v8::ThrowException(makeJSObjectException(&e)));
		}
		return  handle_scope.Close(v8::Undefined());
	}
}


static Handle<Value> tov8_jacos2dx_cocos2d_CCMENU_alignItemsInRows(const Arguments& args)
{
	HandleScope handle_scope;
	if (args.Length() != 1
		|| !args[0]->IsArray()) {
		return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get correct native function!", 0)));
	} else
	{
		try { 
			cocos2d::CCMenu* self = (cocos2d::CCMenu*)  JSC_ObjectGetPrivate(-1, args.Holder());

#ifndef TOJSC_RELEASE
			if (!self) return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get native object!", 0)));
#endif

			Local<Array> arr = Array::Cast(*args[0]);

			unsigned int length = arr->Length();
			std::vector<unsigned int> columns;
			for (int i = 0; i < length; i++)
			{
				Local<Value> value = arr->Get(i);
				if (!value->IsUndefined() && value->IsNumber())
					columns.push_back((unsigned char)value->ToNumber()->Uint32Value());
			}
            self->alignItemsInRows(columns.size(), &columns[0]);
			
		} catch (JSCParametersException e) {
			return  handle_scope.Close(v8::ThrowException(makeJSObjectException(&e)));
		}
		return  handle_scope.Close(v8::Undefined());
	}
}

static Handle<Value> tov8_jacos2dx_cocos2d_CCMenu_createWithArray(const Arguments& args)
{
	HandleScope handle_scope;
	if (args.Length() != 1
		||(args[0]->IsNull() || !args[0]->IsArray())
		) {
			return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get correct native function!", 0)));
	} else
	{
		try { 	  
			Local<Array> arr = Array::Cast(*args[0]);

			unsigned int length = arr->Length();			
			CCArray *itemsList = CCArray::create();
			for (int i = 0; i < length; i++)
			{
				Local<Value> value = arr->Get(i);
				if (!value->IsUndefined()) {
					CCMenuItem *item = (CCMenuItem*)JSC_ObjectGetPrivate(CLS_CCMENUITEM_ID, value);
					if (item == NULL) {						
						throw JSCParametersException(CCString::createWithFormat("Item %d is not CCMenuItem object!", i)->getCString());
					} else {
						itemsList->addObject(item);
					}
				}
					
			}
			try {
				CCMenu *ret = CCMenu::createWithArray(itemsList);
				itemsList->release();

				return  handle_scope.Close(tov8_pushusertype(ret, ret, CLS_CCMENU_ID, true));
			} catch (JSCException e) {
				return  handle_scope.Close(v8::ThrowException(makeJSObjectException(&e)));
			}
		} catch (JSCParametersException e) {
			return  handle_scope.Close(v8::ThrowException(makeJSObjectException(&e)));
		}
	}
	return  handle_scope.Close(v8::Undefined());
}

static Handle<Value> tov8_jacos2dx_cocos2d_CCMenuItemToggle_createWithTarget(const Arguments& args)
{
	HandleScope handle_scope;

	if (args.Length() != 3
		|| !args[0]->IsObject()
		|| !args[1]->IsFunction()
		|| !args[2]->IsArray()
		) {
			return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get correct native function!", 0)));
	} else
	{
		try { 	  
			Local<Array> arr = Array::Cast(*args[2]);

			unsigned int length = arr->Length();	
			if (length < 1) 
				throw JSCParametersException(CCString::createWithFormat("parameter 3 is an empty array!")->getCString());

			std::vector<CCMenuItem*> itemsList;
			for (int i = 0; i < length; i++)
			{
				Local<Value> value = arr->Get(i);
				if (!value->IsUndefined()) {
					CCMenuItem *item = (CCMenuItem*)JSC_ObjectGetPrivate(CLS_CCMENUITEM_ID, value);
					if (item == NULL) {						
						throw JSCParametersException(CCString::createWithFormat("Item %d is not CCMenuItem object!", i)->getCString());
					} else {
						itemsList.push_back(item);
					}
				}
					
			}
			try {				
                
				CCMenuItemToggle *ret = CCMenuItemToggle::createWithTarget(args[0]->ToObject(), args[1]->ToObject(), itemsList[0]);
                for (int i = 1; i < itemsList.size(); i++)
                    ret->addSubItem(itemsList[i]);
                
				return  handle_scope.Close(tov8_pushusertype(ret, ret, CLS_CCMENUITEMTOGGLE_ID, true));
			} catch (JSCException e) {
				return  handle_scope.Close(v8::ThrowException(makeJSObjectException(&e)));
			}
		} catch (JSCParametersException e) {
			return  handle_scope.Close(v8::ThrowException(makeJSObjectException(&e)));
		}
	}
	return  handle_scope.Close(v8::Undefined());
}
static Handle<Value> tov8_jacos2dx_cocos2d_CCPointsList_new01(const Arguments& args)
{
	HandleScope handle_scope;
	if (args.Holder()->InternalFieldCount() <= 0) {
		return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Do not call a constructor!", 0)));
	}
	if (args.Length() != 1
		|| (args.Length() == 1 && !args[0]->IsArray())) {
			return  handle_scope.Close(getClassConstructor(CLS_CCPOINTSLIST_ID)(args));
	} else
	{
		try { 
			try {
				if (isLockedCreateObject()) return   handle_scope.Close(v8::Undefined());

				Local<Array> arr = Array::Cast(*args[0]);

				unsigned int length = arr->Length();
				std::vector<CCPoint> points;
				for (int i = 0; i < length; i++)
				{
					Local<Value> value = arr->Get(i);
					if (!value->IsUndefined()) {
						CCPoint *point = (CCPoint*)JSC_ObjectGetPrivate(CLS_CCPOINT_ID, value);
						if (point) 
							points.push_back(*point);
					}
				}

				cocos2d::CCPointsList* tov8_ret = (cocos2d::CCPointsList*)  new cocos2d::CCPointsList(&points[0], points.size());
				void* retObj = initNewObject(/*CCPointsList*/ 112, tov8_ret, (void*)tov8_ret, args.Holder());
				Persistent<External> v8_extr = Persistent<External>::New(External::New(retObj));
				v8_extr.MakeWeak(retObj, &default_object_collection_func);
				args.Holder()->SetInternalField(0, v8_extr);

#ifdef JS_LOG_OBJECT 
				log_create_obj("cocos2d::CCPointsList", tov8_ret);
#endif 
			} catch (JSCException e) {
				return  handle_scope.Close(v8::ThrowException(makeJSObjectException(&e)));
			}
		} catch (JSCParametersException e) {
			return  handle_scope.Close(v8::ThrowException(makeJSObjectException(&e)));
		}
	}
	return  handle_scope.Close(v8::Undefined());
}



static Handle<Value> tov8_jacos2dx_cocos2d_CCMENU_alignItemsInColumns(const Arguments& args)
{
	HandleScope handle_scope;
	if (args.Length() != 1
		|| !args[0]->IsArray()) {
		return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get correct native function!", 0)));
	} else
	{
		try { 
			cocos2d::CCMenu* self = (cocos2d::CCMenu*)  JSC_ObjectGetPrivate(-1, args.Holder());

#ifndef TOJSC_RELEASE
			if (!self) return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get native object!", 0)));
#endif

			Local<Array> arr = Array::Cast(*args[0]);

			unsigned int length = arr->Length();
			std::vector<unsigned int> rows;
			for (int i = 0; i < length; i++)
			{
				Local<Value> value = arr->Get(i);
				if (!value->IsUndefined() && value->IsNumber())
					rows.push_back((unsigned char)value->ToNumber()->Uint32Value());
			}
            self->alignItemsInColumns(rows.size(), &rows[0]);
			
		} catch (JSCParametersException e) {
			return  handle_scope.Close(v8::ThrowException(makeJSObjectException(&e)));
		}
		return  handle_scope.Close(v8::Undefined());
	}
}

static Handle<Value> tov8_jacos2dx_cocos2d_CCTMXMapInfo_startElement(const Arguments& args)
{
	HandleScope handle_scope;
	if (args.Length() != 2
		|| !args[0]->IsString()
		|| !args[1]->IsObject()) {
		return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get correct native function!", 0)));
	} else
	{
		try { 
			cocos2d::CCTMXMapInfo* self = (cocos2d::CCTMXMapInfo*)  JSC_ObjectGetPrivate(-1, args.Holder());

#ifndef TOJSC_RELEASE
			if (!self) return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get native object!", 0)));
#endif

			Handle<Object> dict = args[1]->ToObject();
			Local<Array> arr = dict->GetPropertyNames();


			unsigned int length = arr->Length();
			char **buffer = (char**)malloc(length * sizeof(char*) * 2 + 1);
			buffer[length * 2] = NULL;
			for (int i = 0; i < length; i++)
			{
				Local<Value> key = arr->Get(i);
				String::AsciiValue strtmp0(key);
				const char*  keyName = (( const char*) *strtmp0);
				Local<Value> val = dict->Get(key);	
				
				buffer[i * 2] = (char*)malloc(strlen(keyName) + 1);
				strcpy(buffer[i * 2], keyName);
				if (val->IsUndefined()) {
					buffer[i * 2 + 1] = "";
				} else {
					String::AsciiValue strtmp1(key);
					const char*  strValue = (( const char*) *strtmp1);
					buffer[i * 2 + 1] = (char*)malloc(strlen(strValue) + 1);
					strcpy(buffer[i * 2 + 1], strValue);
				}
			
			}
			String::AsciiValue strtmp2(args[0]);
			self->startElement(NULL, *strtmp2, (const char**)buffer);
			
			for (int i = 0; i < length; i++)
			{
				free(buffer[i * 2]);
				free(buffer[i * 2 + 1]);
			}
			free(buffer);
		} catch (JSCParametersException e) {
			return  handle_scope.Close(v8::ThrowException(makeJSObjectException(&e)));
		}
		return  handle_scope.Close(v8::Undefined());
	}
}
static Handle<Value> tov8_jacos2dx_box2d_b2PolygonShape_Set(const Arguments& args)
{
	HandleScope handle_scope;
	if (args.Length() != 1
		|| !args[0]->IsArray()) {
		return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get correct native function!", 0)));
	} else
	{
		try { 
			box2d::b2PolygonShape* self = (box2d::b2PolygonShape*)  JSC_ObjectGetPrivate(-1, args.Holder());

#ifndef TOJSC_RELEASE
			if (!self) return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get native object!", 0)));
#endif

			Local<Array> arr = Array::Cast(*args[0]);

			unsigned int length = arr->Length();
			if (length > 0)
			{
				std::vector<b2Vec2> itemsList;
				for (int i = 0; i < length; i++)
				{
					Local<Value> value = arr->Get(i);
					if (!value->IsUndefined() && value->IsObject()) {
						b2Vec2* vec = (b2Vec2*)JSC_ObjectGetPrivate(CLS_B2VEC2_ID, value);
						itemsList.push_back(*vec);
					}
				}
				self->Set(&itemsList[0], itemsList.size());
			}
		} catch (JSCParametersException e) {
			return  handle_scope.Close(v8::ThrowException(makeJSObjectException(&e)));
		}
		return  handle_scope.Close(v8::Undefined());
	}
}

static Handle<Value> tov8_jacos2dx_box2d_b2GetPointStates(const Arguments& args)
{
	
	HandleScope handle_scope;
	if (args.Length() != 2
		|| !args[0]->IsObject()
		|| !args[1]->IsObject()) {
		return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get correct native function!", 0)));
	} else {
		const box2d::b2Manifold* manifold1 = (const box2d::b2Manifold*)JSC_ObjectGetPrivate(CLS_B2MANIFOLD_ID, args[0]);
		const box2d::b2Manifold* manifold2 = (const box2d::b2Manifold*)JSC_ObjectGetPrivate(CLS_B2MANIFOLD_ID, args[1]);
		b2PointState state1[b2_maxManifoldPoints], state2[b2_maxManifoldPoints];
		box2d::b2GetPointStates(state1, state2, manifold1, manifold2);

		Local<Array> arr1 = Array::New(b2_maxManifoldPoints);
		for (int i = 0; i < b2_maxManifoldPoints; i++) {
			arr1->Set(i, Number::New((int)state1[i]));
		}

		Local<Array> arr2 = Array::New(b2_maxManifoldPoints);
		for (int i = 0; i < b2_maxManifoldPoints; i++) {
			arr2->Set(i, Number::New((int)state2[i]));
		}

		Local<Object> ret = Object::New();
		ret->Set(String::New("state1"), arr2);
		ret->Set(String::New("state2"), arr2);

		return handle_scope.Close(ret);
	}

	return Undefined();
}
static Handle<Value> tov8_jacos2dx_cocos2d_extension_HttpRequest_setHeaders(const Arguments& args)
{
	HandleScope handle_scope;
	if (args.Length() != 1
		|| !args[0]->IsObject()) {
		return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get correct native function!", 0)));
	} else
	{
		try { 
            cocos2d::extension::CCHttpRequest* self = (cocos2d::extension::CCHttpRequest*)  JSC_ObjectGetPrivate(-1, args.Holder());

#ifndef TOJSC_RELEASE
			if (!self) return  handle_scope.Close(v8::ThrowException(makeJSObjectException("Cannot get native object!", 0)));
#endif

			Handle<Object> dict = args[0]->ToObject();
			Local<Array> arr = dict->GetPropertyNames();


			unsigned int length = arr->Length();
            std::vector<std::string> headers;
			
			for (int i = 0; i < length; i++)
			{
				Local<Value> key = arr->Get(i);
				String::AsciiValue strtmp0(key);
				const char*  keyName = (( const char*) *strtmp0);
				Local<Value> val = dict->Get(key);	
				               

				if (!val->IsUndefined()) {					
                    headers.push_back(keyName);
					String::AsciiValue strtmp1(key);
					const char*  strValue = (( const char*) *strtmp1);
                    headers.push_back(strValue);
				}
			
			}
			
            self->setHeaders(headers);
		} catch (JSCParametersException e) {
			return  handle_scope.Close(v8::ThrowException(makeJSObjectException(&e)));
		}
		return  handle_scope.Close(v8::Undefined());
	}
}

void resolveJacos2dxFunctions() {
	resolveFunc(CLS_CCTMXMAPINFO_ID , "startElement", tov8_jacos2dx_cocos2d_CCTMXMapInfo_startElement);
	resolveFunc(CLS_CCMENU_ID, "alignItemsInColumns", tov8_jacos2dx_cocos2d_CCMENU_alignItemsInColumns);
	resolveFunc(CLS_CCMENU_ID, "alignItemsInRows", tov8_jacos2dx_cocos2d_CCMENU_alignItemsInRows);
	resolveFunc(CLS_CCMENU_ID, "createWithArray", tov8_jacos2dx_cocos2d_CCMenu_createWithArray, MEMBER_TYPE_STATIC_METHOD);

	resolveFunc(CLS_CCMENUITEMTOGGLE_ID, "createWithTarget", tov8_jacos2dx_cocos2d_CCMenuItemToggle_createWithTarget, MEMBER_TYPE_STATIC_METHOD);
	resolveFunc(CLS_CCMENUITEMTOGGLE_ID, "itemWithTarget", tov8_jacos2dx_cocos2d_CCMenuItemToggle_createWithTarget, MEMBER_TYPE_STATIC_METHOD);
	
	resolveFunc(CLS_CCTMXLAYER_ID, "getTiles", tov8_jacos2dx_cocos2d_CCTMXLayer_getTiles00);
	resolveFunc(CLS_CCTMXLAYER_ID, "setTiles", tov8_jacos2dx_cocos2d_CCTMXLayer_setTiles00);
	resolveFunc(CLS_CCSEQUENCE_ID, "create", tov8_jacos2dx_cocos2d_CCSequence_createWithArray, MEMBER_TYPE_STATIC_METHOD);
		
	resolveFunc(CLS_B2POLYGONSHAPE_ID, "Set", tov8_jacos2dx_box2d_b2PolygonShape_Set);
	tov8_openScope("box2d");
	tov8_staticFunction("b2GetPointStates", tov8_jacos2dx_box2d_b2GetPointStates);
	tov8_constant("b2_maxManifoldPoints", b2_maxManifoldPoints);
	
	tov8_closeScope();
	//resolve constructor
	if (isExistClass(CLS_CCPOINTSLIST_ID))
		setClassConstructor(CLS_CCPOINTSLIST_ID, tov8_jacos2dx_cocos2d_CCPointsList_new01);
	
}
