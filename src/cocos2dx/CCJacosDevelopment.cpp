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

#include "CCJacosDevelopment.h"
#include "touch_dispatcher/CCTouch.h"
#include "CCDirector.h"
#include "cocos2d.h"

NS_CC_BEGIN


void JacosDevelopmentButton::showJacosBox()
{
	if (mJacosScene && CCDirector::sharedDirector()->getRunningScene() != mJacosScene)
		CCDirector::sharedDirector()->pushScene(mJacosScene);
}
JacosDevelopmentButton::JacosDevelopmentButton() : CCSprite()
	, mJacosScene(NULL)
    , mBtnPosition(0)
    , mTouchedMe(false)
{
	
}
void JacosDevelopmentButton::setDevelopmentScene(CCScene *scene)
{
	mJacosScene = scene;
}

bool JacosDevelopmentButton::ccTouchBegan(CCTouch *pTouch, CCEvent *pEvent)
{
	//CCPoint p = this->convertToNodeSpace(pTouch->getLocation());
    if (this->boundingBox().containsPoint(pTouch->getLocation()))
    {
        mLastTouch = pTouch->getLocation();
        mTouchedMe = true;
        mMoved = false;
        return true;
    }
    return false;
}

void JacosDevelopmentButton::ccTouchMoved(CCTouch *pTouch, CCEvent *pEvent)
{
    if (mTouchedMe)
        mMoved = true;        
}

#define MIN_DELTA 5
void JacosDevelopmentButton::ccTouchEnded(CCTouch *pTouch, CCEvent *pEvent)
{
    mTouchedMe = false;
    bool changePosition = false;
    if (mMoved) {
        int button_size = 32;
        CCSize visibleSize = CCDirector::sharedDirector()->getVisibleSize();
        CCPoint p = pTouch->getLocation();
        float deltaX = p.x - mLastTouch.x;
        float deltaY = p.y - mLastTouch.y;

        bool moveToLeft = false;
        bool moveToRight = false;
        bool moveToTop = false;
        bool moveToBottom = false;

        float s = 1;
        if (deltaY == 0) 
            s = 10;
        else
            s = abs(deltaX / deltaY);


        if (s >= 0.9 && s <= 1.1) { //move follow a diagonal
            if (deltaX > MIN_DELTA && this->getPositionX() == 0)
                moveToRight = true;
            else if (deltaX < -MIN_DELTA && this->getPositionX() > 0)
                moveToLeft = true;

            if (deltaY < -MIN_DELTA && this->getPositionY() > 0)
                moveToBottom = true;
            else if (deltaY > MIN_DELTA && this->getPositionY() == button_size)
                moveToTop = true;
        } else if (s > 1.1) {
            if (deltaX > MIN_DELTA && this->getPositionX() == 0)
                moveToRight = true;
            else if (deltaX < -MIN_DELTA && this->getPositionX() > 0)
                moveToLeft = true;
        } else if (s < 0.9) {
            if (deltaY < -MIN_DELTA && this->getPositionY() > 0)
                moveToBottom = true;
            else if (deltaY > MIN_DELTA && this->getPositionY() == button_size)
                moveToTop = true;
        }             
    
        if (moveToRight) {            
            this->setPositionX(visibleSize.width - 32);            
        } else if (moveToLeft) {
            this->setPositionX(0);                
        }

        if (moveToTop) {
            this->setPositionY(visibleSize.height);
        } else if (moveToBottom) {
            this->setPositionY(32);
        }

        changePosition = moveToTop || moveToBottom || moveToLeft || moveToRight;
    } 

    if (!changePosition && this->boundingBox().containsPoint(pTouch->getLocation())) {
        showJacosBox();
    }	
}

void JacosDevelopmentButton::ccTouchCancelled(CCTouch *pTouch, CCEvent *pEvent)
{
}


void JacosDevelopmentButton::ccTouchesBegan(CCSet *pTouches, CCEvent *pEvent)
{
}

void JacosDevelopmentButton::ccTouchesMoved(CCSet *pTouches, CCEvent *pEvent)
{
}

void JacosDevelopmentButton::ccTouchesEnded(CCSet *pTouches, CCEvent *pEvent)
{
}

void JacosDevelopmentButton::ccTouchesCancelled(CCSet *pTouches, CCEvent *pEvent)
{
}

NS_CC_END