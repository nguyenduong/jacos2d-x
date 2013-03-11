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
#include <stdio.h>

#include "JacosBaseObject.h"
JSSystemHelper *gJSCCallFunctions;

#define ASSERT(condition, message) JSC_ThrowException(condition, message)

bool startWithStrIgnoreCase(const char* source, const char* subStr)
{
    if (!source || !subStr)
        return false;
	int len = strlen(subStr);
	if (len > strlen(source)) return false;

	for (int i = 0; i < len; i++)
	{
		if (subStr[i] != source[i] 
			&& ((subStr[i] < 'a' || subStr[i] != source[i] + 32)) && (source[i] < 'a' || subStr[i] + 32 != source[i])) {
				return false;
			}
	}
	return true;
}
bool endWithStrIgnoreCase(const char* source, const char* subStr)
{
    if (!source || !subStr)
        return false;
	int len = strlen(subStr);
	if (len > strlen(source)) return false;
    int len2 = strlen(subStr);
    int index = len;
	for (int i = len2 - 1; i >= 0; i--)
	{
        index--;
		if (subStr[i] != source[index] 
			&& ((subStr[i] < 'a' || subStr[i] != source[index] + 32)) && (source[index] < 'a' || subStr[i] + 32 != source[index])) {
				return false;
			}
	}
	return true;
}

void CC_DLL setJSSystemHelper(JSSystemHelper *jsSystemHelper)
{
    gJSCCallFunctions = jsSystemHelper;
}
JSSystemHelper* CC_DLL getJSSystemHelper()
{
	return gJSCCallFunctions;
}
void JacosBaseObject::default_object_collection_func (v8::Persistent<v8::Value> object, void *parameter)
{
	object.Dispose();
}
void JacosBaseObject::setController(v8::Handle<v8::Object> eventListener)
{

	mV8Controller = v8::Persistent<v8::Object>::New(eventListener);
	mV8Controller.MakeWeak(this, &default_object_collection_func);
	v8::Context::GetCurrent()->Global()->Set(reinterpret_cast<uint32_t>(*mV8Controller), mV8Controller);

};

void CC_DLL JSC_ThrowException(int condition, const char *message, int code)
{
	if (!condition)
	{		
		/*
         v8::TryCatch trycatch;
         v8::Handle<v8::Value> exception = trycatch.Exception();
         v8::String::AsciiValue exception_str(exception);
         
         printf("Exception: %s\n", *exception_str);*/
        
		throw JSCException(message, code);
	}
}

void CC_DLL JSC_ThrowException(void* condition, const char *message)
{
	JSC_ThrowException(condition != NULL, message, 0);
}
void JacosBaseObject::addGlobalReference(v8::Handle<v8::Object> object) {
	if (!object.IsEmpty())
        gJSCCallFunctions->addGlobalReference(object);
}

void JacosBaseObject::removeGlobalReference(v8::Handle<v8::Object>  object) {
	if (!object.IsEmpty())
        gJSCCallFunctions->removeGlobalReference(object);
}



JSSystemHelper* JacosBaseObject::getJSCCallFunc()
{
    return gJSCCallFunctions;
}

void __collection_func(v8::Persistent<v8::Value> object, void *parameter)
{
	object.Dispose();
}
void JacosBaseObject::setJSObjInstance(v8::Handle<v8::Object> data) {		
	//v8::HandleScope scope;

	//mV8JSObjInstance = v8::Local<v8::Object>::New(data);
	if (!data.IsEmpty()) {
		//mV8JSObjInstance = data;
		//addGlobalReference(mV8JSObjInstance);		
		
		mV8JSObjInstance = v8::Persistent<v8::Object>::New(data);
		mV8JSObjInstance.MakeWeak(this, &__collection_func);
	}
	
	//v8::Persistent<v8::Object>::New(data);
}
void JacosBaseObject::clearJSObj()
{
	mV8JSObjInstance.Clear();	
}

void JacosBaseObject::markReference(v8::Handle<v8::Object> object)
{
    
	if (getJSObjInstance().IsEmpty() || object.IsEmpty()) return;

	gJSCCallFunctions->addInternalVar(getJSObjInstance(), object);
}
void  JacosBaseObject::assignJavaScriptObject(int classTypeID, bool needDeleteNative) {
	if (mV8JSObjInstance.IsEmpty()) {
		this->getJSCCallFunc()->assignJavaScriptObject(this, this, classTypeID, needDeleteNative);			
	}
}
void JacosBaseObject::removeReference(v8::Handle<v8::Object>  object)
{
#ifdef USING_V8
	if (v8::V8::IsProfilerPaused())
		return;
	if (getExternalData() == NULL) return;        
	_removeInternalVar(context, getExternalData(), object);
#else
    if (gJSCCallFunctions)
        gJSCCallFunctions->removeInternalVar(getJSObjInstance(), object);
#endif
}