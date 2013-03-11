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

#ifndef __CCJACOS_DEVELOPMENT_H__
#define __CCJACOS_DEVELOPMENT_H__
#include "sprite_nodes/CCSprite.h"
#include "touch_dispatcher/CCTouchDelegateProtocol.h"
#include "text_input_node/CCTextFieldTTF.h"
#include "menu_nodes/CCMenu.h"
#include "layers_scenes_transitions_nodes/CCScene.h"

class CCSet;
NS_CC_BEGIN
enum {
    BTNP_HORIZOL = 1,    
    BTNP_VERTICAL = 2
};
class JacosDevelopmentButton : public CCSprite, public CCTouchDelegate
{
public:
	JacosDevelopmentButton();
	
	void setDevelopmentScene(CCScene *scene);
	virtual bool ccTouchBegan(CCTouch *pTouch, CCEvent *pEvent);
    // optional

    virtual void ccTouchMoved(CCTouch *pTouch, CCEvent *pEvent);
    virtual void ccTouchEnded(CCTouch *pTouch, CCEvent *pEvent);
    virtual void ccTouchCancelled(CCTouch *pTouch, CCEvent *pEvent);

    // optional
     virtual void ccTouchesBegan(CCSet *pTouches, CCEvent *pEvent);
     virtual void ccTouchesMoved(CCSet *pTouches, CCEvent *pEvent);
     virtual void ccTouchesEnded(CCSet *pTouches, CCEvent *pEvent);
     virtual void ccTouchesCancelled(CCSet *pTouches, CCEvent *pEvent);

	 void showJacosBox();
protected:
	CCScene        *mJacosScene;
    int             mBtnPosition;
    CCPoint         mLastTouch;
    bool            mMoved;
    bool            mTouchedMe;
	
};
NS_CC_END
#endif