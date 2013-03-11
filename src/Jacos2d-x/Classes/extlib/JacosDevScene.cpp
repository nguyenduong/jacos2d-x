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

#include "JacosDevScene.h"

using namespace cocos2d;
using namespace cocos2d::extension;

#define FONT_NAME                       "Thonburi"
#define FONT_SIZE                       36
#define JACOS_URL						"JacosDevUrl"
void reset(const char* url);
JacosDevScene::JacosDevScene()
    :CCScene(),
    mLayer(NULL),
    mMenu(NULL),
    mEditBox(NULL)
{
    initialize();
}

JacosDevScene::~JacosDevScene()
{
}
void JacosDevScene::updatePosition()
{
    //re-position
    CCSize wndSize = CCDirector::sharedDirector()->getWinSize();
    mEditBox->setPosition(CCPoint(wndSize.width / 2, wndSize.height / 2 + 100));
    mMenu->setPosition(wndSize.width / 2, wndSize.height / 2);
}
    
void JacosDevScene::onEnter()
{
    CCScene::onEnter();
            
    updatePosition();
}
void JacosDevScene::initialize()
{

    if (mLayer)
        mLayer->release();
    if (mMenu)
        mMenu->release();
    if (mEditBox)
        mEditBox->release();

    mLayer = CCLayer::create();	
	CCSize wndSize = CCDirector::sharedDirector()->getWinSize();
	
	CCLabelTTF *lbReset = CCLabelTTF::labelWithString("Reset", FONT_NAME, FONT_SIZE);
	CCMenuItemLabel *mnReset = CCMenuItemLabel::create(lbReset, this, menu_selector(JacosDevScene::menuCallbackReset));

	CCLabelTTF *lbClose = CCLabelTTF::labelWithString("Close", FONT_NAME, FONT_SIZE);
	CCMenuItemLabel *mnClose = CCMenuItemLabel::create(lbClose, this, menu_selector(JacosDevScene::menuCallbackClose));

#if CC_TARGET_PLATFORM != CC_PLATFORM_IOS
	CCLabelTTF *lbExit = CCLabelTTF::labelWithString("Exit", FONT_NAME, FONT_SIZE);
	CCMenuItemLabel *mnExit = CCMenuItemLabel::create(lbExit, this, menu_selector(JacosDevScene::menuCallbackExit));
	mMenu = CCMenu::create(mnReset, mnClose, mnExit, NULL);
#else
    mMenu = CCMenu::create(mnReset, mnClose, NULL);
#endif

	mMenu->alignItemsVertically();
	mLayer->addChild(mMenu);
	CCScale9Sprite* background = CCScale9Sprite::create("res://yellow_edit.png");    
	
	mEditBox = CCEditBox::create(CCSize(240, 40), background);    
	mEditBox->setPosition(CCPoint(wndSize.width / 2, wndSize.height / 2 + 100));
    mEditBox->setInputFlag(kEditBoxInputFlagSensitive);
    //mEditBox->setPosition(CCPoint(120, 20));
    
	mEditBox->setInputMode((EditBoxInputMode)4);
	mEditBox->setDelegate(this);
	//mEditBox->setInputFlag(EditBoxInputFlag::
	mLayer->addChild(mEditBox);
    //item->addChild(mEditBox);
	this->addChild(mLayer);
	std::string url = CCUserDefault::sharedUserDefault()->getStringForKey(JACOS_URL);
	if (url.length() == 0)
		url = "http://192.168.1.200/test.js";
	mEditBox->setText(url.c_str());
}
void JacosDevScene::editBoxReturn(cocos2d::extension::CCEditBox* editBox)
{
	
}
void JacosDevScene::menuCallbackClose(cocos2d::CCObject* pSender)
{
	CCDirector::sharedDirector()->popScene();
}
void JacosDevScene::menuCallbackReset(CCObject* pSender)
{

	CCUserDefault::sharedUserDefault()->setStringForKey(JACOS_URL, mEditBox->getText());
	CCUserDefault::sharedUserDefault()->flush();
    
	CCDirector::sharedDirector()->popToRootScene();
    CCHttpClient* httpClient = CCHttpClient::getInstance();
    CCDirector::sharedDirector()->getScheduler()->unscheduleAll();
	CCDirector::sharedDirector()->getActionManager()->removeAllActions();
	CCDirector::sharedDirector()->getScheduler()->scheduleUpdateForTarget(CCDirector::sharedDirector()->getActionManager(), kCCPrioritySystem, false);    
    httpClient->setSchedule();

	reset(mEditBox->getText());    
}

void JacosDevScene::menuCallbackExit(CCObject* pSender)
{
	CCDirector::sharedDirector()->end();
}
