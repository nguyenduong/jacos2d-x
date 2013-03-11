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

#ifndef TO_JSC_LIB_H
#define TO_JSC_LIB_H
#include "v8.h"


#include <string.h>
#include <stdlib.h>
#include "libVector.h"
#include "cocos2d.h"

#include "ThreadUtils.h"

USING_NS_CC;
using namespace v8;

#define MEMBER_TYPE_CONST  0
#define MEMBER_TYPE_PROPERTY  1
#define MEMBER_TYPE_METHOD  2
#define MEMBER_TYPE_STATIC_METHOD  3

#define STR_INVALID_PARAMETERS "Invalid parameter"
#define ERR_INVALID_PARAMETERS 1

#define INVALID_PARAMETERS 1


typedef int (*CallbackType)(void);  
void initJSCLib(CallbackType callbackFunc);

void fixBaseClass(const char* packageName = NULL, v8::Handle<v8::Object> container = v8::Handle<v8::Object>(NULL));
v8::Handle<v8::ObjectTemplate> tov8_openScope(const char* scopeName);
void tov8_closeScope();


inline void* toJSC_copy(void *source, int size);

void tov8_constant(const char *constName, double value);
void toJSC_error(const char *msg, const char *str);
void toJSC_error(const char *msg, int errCode);


void tov8_cclass(int classID, int baseClassID, v8::InvocationCallback constructorCallback);

void tov8_function(const char* functionName, v8::InvocationCallback callback);
void tov8_staticFunction(const char* functionName, v8::InvocationCallback callback);
void tov8_property(const char* propertyName, v8::AccessorGetter getFunc, v8::AccessorSetter setFunc);
void fixBaseClass();
v8::Handle<v8::ObjectTemplate> initThread(CallbackType callbackFunc);
void runSourceCode(const char* data, const char* sourceName);

v8::Handle<v8::Value> tov8_pushusertype(JacosBaseObject *value, void *generalPoint, int classID, bool needDeleteNative = true);
v8::Handle<v8::Value> tov8_pushusertype(void* value, int classID, bool needDeleteNative = true);
v8::Handle<v8::Value> tov8_pushusertype(const void* value, const void *generalPoint, int classID, bool needDeleteNative = true);
v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<std::string> *value, std::vector<std::string> *generalPoint, const char* className, bool needDeleteNative = true);
v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<CCObject*>::iterator *value, std::vector<CCObject*>::iterator *generalPoint, const char* className, bool needDeleteNative = true);
v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<CCObject*>::reverse_iterator *value, std::vector<CCObject*>::reverse_iterator *generalPoint, const char* className, bool needDeleteNative = true);
v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<CCSpriteFrame*>::iterator *value, std::vector<CCSpriteFrame*>::iterator *generalPoint, const char* className, bool needDeleteNative = true);
v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<CCSpriteFrame*>::reverse_iterator *value,std::vector<CCSpriteFrame*>::reverse_iterator *generalPoint, const char* className, bool needDeleteNative = true);
v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<CCFiniteTimeAction*>::iterator *value,std::vector<CCFiniteTimeAction*>::iterator *generalPoint, const char* className, bool needDeleteNative = true);
v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<CCFiniteTimeAction*>::reverse_iterator *value, std::vector<CCFiniteTimeAction*>::reverse_iterator *generalPoint, const char* className, bool needDeleteNative = true);
v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<CCNode*>::iterator *value, std::vector<CCNode*>::iterator *generalPoint, const char* className, bool needDeleteNative = true);
v8::Handle<v8::Value> tov8_push_std_usertype(std::vector<CCNode*>::reverse_iterator *value, std::vector<CCNode*>::reverse_iterator *generalPoint, const char* className, bool needDeleteNative = true);

v8::Handle<v8::Value> tov8_pushUserData(std::string str);
std::string JSC_GetStdString(v8::Handle<v8::Value> str);
bool isLockedCreateObject();
void resolveFunc(int classID, const char* functionName, v8::InvocationCallback callback, int memberType = MEMBER_TYPE_METHOD);
bool isExistClass(int classID);
void setClassConstructor(int classID, v8::InvocationCallback constructor);
v8::InvocationCallback getClassConstructor(int classID);
inline v8::Handle<v8::String> JSC_String(const char *str);
inline v8::Handle<v8::Value> JSC_MakeUndefined();
v8::Handle<v8::Value> tov8_pushUserData(void *data);

void * JSC_ObjectGetPrivate(int classID, const void *objectPtr);
void * JSC_ObjectGetPrivate(int classID, v8::Handle<v8::Object> objectPtr);
inline void * JSC_ObjectGetPrivate(int classID, v8::Handle<v8::Value> objectPtr);

void tov8_closeClass();
void JSC_log_error(int errorcode);
void JSC_log_error(int errorcode, void* ctx, void* obj, void *exception);
void default_object_collection_func (Persistent<Value> object, void *parameter);

v8::Handle<v8::Value> tov8_pushJSObject(void* data);

void* getObjectRef(Handle<Object> value);
unsigned int getObjectHash(Handle<Object> value);
void pushToGlobal(void *name, Handle<Value> value);
void* getJSObjectRef(v8::Handle<v8::Value> value);

void test2(CallbackType callbackFunc);
static void setExternalDataObject(JacosBaseObject* obj, Handle<Object> value);
static void setExternalDataObject(void* obj, Handle<Object> value);

void* initNewObject(int classID, JacosBaseObject* obj, void* originObj, Handle<Object> value);
void* initNewObject(int classID, JacosBaseObject* obj, Handle<Object> value);
void* initNewObject(int classID, void* obj, Handle<Object> value);
void* initNewObject(int classID, void* obj, void* originObj, Handle<Object> value);
Handle<Context> getCurrentContext();
Handle<Object> makeJSObjectException(const char* message, int code);
Handle<Object> makeJSObjectException(JSCException *exception);
inline Handle<Value> tov8_pushString(const char* str);
inline Handle<Value> tov8_pushString(std::string str);



class PRIVATE_OBJECT_INFOR {
public:
    enum {
      OBJ_TYPE_POINTER    = 0,
      OBJ_TYPE_JacosBaseObject = 1
    };
public:    
    PRIVATE_OBJECT_INFOR();
    ~PRIVATE_OBJECT_INFOR();
    unsigned int signature;
    //const char* className;
    libVector<const char*> *classNameList;
    const char* className;
    int         classID;
    int*         familyIDList;
    int         familySize;
    void*       objectPtr;
    int         objectType;
    bool        needDeleteNative;
    
};
#endif