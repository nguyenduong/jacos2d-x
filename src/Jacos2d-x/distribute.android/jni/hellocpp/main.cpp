#include "AppDelegate.h"
#include "platform/android/jni/JniHelper.h"
#include <jni.h>
#include <android/log.h>

#include "HelloWorldScene.h"

#define  LOG_TAG    "main"
#define  LOGD(...)  __android_log_print(ANDROID_LOG_DEBUG,LOG_TAG,__VA_ARGS__)

using namespace cocos2d;
void startV8JavascriptEngine();
void initJacos2dx();
extern "C"
{

jint JNI_OnLoad(JavaVM *vm, void *reserved)
{	
	LOGD("DUONGNT: onload JNI");
    JniHelper::setJavaVM(vm);	
    return JNI_VERSION_1_4;
}

void Java_org_cocos2dx_lib_Cocos2dxRenderer_nativeInit(JNIEnv*  env, jobject thiz, jint w, jint h)
{
	LOGD("DUONGNT: init native");
    if (!CCDirector::sharedDirector()->getOpenGLView())
    {
        CCEGLView *view = CCEGLView::sharedOpenGLView();
        view->setFrameSize(w, h);
		LOGD("DUONGNT: start delegate");
        AppDelegate *pAppDelegate = new AppDelegate();
		LOGD("DUONGNT: start javascript");
		//startV8JavascriptEngine();
        CCApplication::sharedApplication()->run();
    }
    else
    {
        ccDrawInit();
        ccGLInvalidateStateCache();
        
        CCShaderCache::sharedShaderCache()->reloadDefaultShaders();
        CCTextureCache::reloadAllTextures();
        CCNotificationCenter::sharedNotificationCenter()->postNotification(EVNET_COME_TO_FOREGROUND, NULL);
        CCDirector::sharedDirector()->setGLDefaultValues(); 
    }
}

}
