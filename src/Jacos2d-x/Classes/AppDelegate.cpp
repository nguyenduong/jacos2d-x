#include "AppDelegate.h"
#include "HelloWorldScene.h"
#include "JavaScriptHelper.h"
#include "JacosDevScene.h"
//#include "AppMacros.h"

void initJacos2dx();
void setMainEntry(const char* entry);
USING_NS_CC;
void loadFileConfig();

AppDelegate::AppDelegate() {

}

AppDelegate::~AppDelegate() 
{
}

int designWidth = -1;
int designHeight = -1;
bool allowResetViewPort = false;

void loadFileConfig() 
{
    const char* path = CCFileUtils::sharedFileUtils()->fullPathFromRelativePath("jacos2dx.cfg");
    //FILE* f = fopen(path, "r");
    unsigned long size;
    unsigned char* data = CCFileUtils::sharedFileUtils()->getFileData(path, "r", &size);
   

    if (data) {
        char* fileBuffer = (char*)malloc(size + 1);
        memcpy(fileBuffer, data, size);
        fileBuffer[size] = '\0';
        delete data;
        int w, h;
        int status = sscanf(fileBuffer, "screen w=%d, h=%d\n", &w, &h);
        if (status == 2) {
            designWidth = w;
            designHeight = h;
        }
        char buffer[256];
        status = sscanf(fileBuffer, "main entry=%s", buffer);
        if (status == 1) {
            setMainEntry(buffer);
        }
        free(fileBuffer);
    } else {
        designWidth = 320;
        designHeight = 480;
    }
}
void resetViewport() {

    if (!allowResetViewPort)
        return;

    CCSize screenSize = CCEGLView::sharedOpenGLView()->getFrameSize();
    
    CCSize designSize = CCSizeMake(designWidth, designHeight);
    //CCSize designSize = CCSizeMake(480, 320);
    if (screenSize.width > screenSize.height) {
        designSize = CCSizeMake(designHeight, designWidth);
    }
    
    CCLOG("screen size: %d - %d", screenSize.width, screenSize.height);
    if (screenSize.width > designWidth)
    {        
        CCSize resourceSize = CCSizeMake(designWidth * 2, designHeight * 2);
        CCFileUtils::sharedFileUtils()->setResourceDirectory("hd");
        CCDirector::sharedDirector()->setContentScaleFactor(resourceSize.height/designSize.height);

        //CCDirector::sharedDirector()->setContentScaleFactor(1);
        //CCDirector::sharedDirector()->setContentScaleFactor(resourceSize.width/screenSize.width);
    } else {
        CCDirector::sharedDirector()->setContentScaleFactor(designWidth / screenSize.width);
    }
        
    
    CCEGLView::sharedOpenGLView()->setDesignResolutionSize(designSize.width, designSize.height, kResolutionNoBorder);
}
bool AppDelegate::applicationDidFinishLaunching() {
    loadFileConfig();
    // initialize director
    CCDirector* pDirector = CCDirector::sharedDirector();
    CCEGLView* pEGLView = CCEGLView::sharedOpenGLView();

    pDirector->setOpenGLView(pEGLView);
    allowResetViewPort = true;
    resetViewport();
    allowResetViewPort = false;

		/*
	// Set the design resolution
    pEGLView->setDesignResolutionSize(designResolutionSize.width, designResolutionSize.height, kResolutionNoBorder);
	CCSize frameSize = pEGLView->getFrameSize();

    // In this demo, we select resource according to the frame's height.
    // If the resource size is different from design resolution size, you need to set contentScaleFactor.
    // We use the ratio of resource's height to the height of design resolution,
    // this can make sure that the resource's height could fit for the height of design resolution.

    // if the frame's height is larger than the height of medium resource size, select large resource.
	if (frameSize.height > mediumResource.size.height)
	{ 
		CCFileUtils::sharedFileUtils()->setResourceDirectory(largeResource.directory);
        pDirector->setContentScaleFactor(largeResource.size.height/designResolutionSize.height);
	}
    // if the frame's height is larger than the height of small resource size, select medium resource.
    else if (frameSize.height > smallResource.size.height)
    { 
        CCFileUtils::sharedFileUtils()->setResourceDirectory(mediumResource.directory);
        pDirector->setContentScaleFactor(mediumResource.size.height/designResolutionSize.height);
    }
    // if the frame's height is smaller than the height of medium resource size, select small resource.
	else
    { 
		CCFileUtils::sharedFileUtils()->setResourceDirectory(smallResource.directory);
        pDirector->setContentScaleFactor(smallResource.size.height/designResolutionSize.height);
    }*/

	
    // turn on display FPS
#ifdef JACOS2DX_RELEASE
    pDirector->setDisplayStats(false);
#else
    pDirector->setDisplayStats(true);
#endif

    // set FPS. the default value is 1.0/60 if you don't call this
    pDirector->setAnimationInterval(1.0 / 60);
	
	CCScene *splashScene = CCScene::create();
    CCSprite *sprite = CCSprite::spriteWithFile("res://logo.png");
    sprite->setPosition(designWidth / 2, designHeight / 2);
    splashScene->addChild(sprite);
	pDirector->runWithScene(splashScene);
		
	initJacos2dx();
    return true;
}

// This function will be called when the app is inactive. When comes a phone call,it's be invoked too
void AppDelegate::applicationDidEnterBackground() {
    CCDirector::sharedDirector()->stopAnimation();
    allowResetViewPort = true;
    // if you use SimpleAudioEngine, it must be pause
    // SimpleAudioEngine::sharedEngine()->pauseBackgroundMusic();
}

// this function will be called when the app is active again
void AppDelegate::applicationWillEnterForeground() {
    CCDirector::sharedDirector()->startAnimation();
    //Fixed for Android
    resetViewport();
    allowResetViewPort = false;
    // if you use SimpleAudioEngine, it must resume here
    // SimpleAudioEngine::sharedEngine()->resumeBackgroundMusic();
}
