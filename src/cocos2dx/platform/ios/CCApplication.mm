/****************************************************************************
 Copyright (c) 2010 cocos2d-x.org
 
 http://www.cocos2d-x.org
 
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

#import "CCApplication.h"

#import <UIKit/UIKit.h>

#import "CCGeometry.h"
#import "CCDirectorCaller.h"
#include "CCEGLView.h"
NS_CC_BEGIN

CCApplication* CCApplication::sm_pSharedApplication = 0;

CCApplication::CCApplication()
{
    CC_ASSERT(! sm_pSharedApplication);
    m_bChangedOrientation = false;
    sm_pSharedApplication = this;
    m_orientation = 1; //default is portrait
}

CCApplication::~CCApplication()
{
    CC_ASSERT(this == sm_pSharedApplication);
    sm_pSharedApplication = 0;
}

int CCApplication::run()
{
    if (applicationDidFinishLaunching()) 
    {
        [[CCDirectorCaller sharedDirectorCaller] startMainLoop];
    }
    return 0;
}

void CCApplication::setAnimationInterval(double interval)
{
    [[CCDirectorCaller sharedDirectorCaller] setAnimationInterval: interval ];
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// static member function
//////////////////////////////////////////////////////////////////////////////////////////////////

CCApplication* CCApplication::sharedApplication()
{
    CC_ASSERT(sm_pSharedApplication);
    return sm_pSharedApplication;
}

ccLanguageType CCApplication::getCurrentLanguage()
{
    // get the current language and country config
    NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
    NSArray *languages = [defaults objectForKey:@"AppleLanguages"];
    NSString *currentLanguage = [languages objectAtIndex:0];

    // get the current language code.(such as English is "en", Chinese is "zh" and so on)
    NSDictionary* temp = [NSLocale componentsFromLocaleIdentifier:currentLanguage];
    NSString * languageCode = [temp objectForKey:NSLocaleLanguageCode];

    ccLanguageType ret = kLanguageEnglish;
    if ([languageCode isEqualToString:@"zh"])
    {
        ret = kLanguageChinese;
    }
    else if ([languageCode isEqualToString:@"en"])
    {
        ret = kLanguageEnglish;
    }
    else if ([languageCode isEqualToString:@"fr"]){
        ret = kLanguageFrench;
    }
    else if ([languageCode isEqualToString:@"it"]){
        ret = kLanguageItalian;
    }
    else if ([languageCode isEqualToString:@"de"]){
        ret = kLanguageGerman;
    }
    else if ([languageCode isEqualToString:@"es"]){
        ret = kLanguageSpanish;
    }
    else if ([languageCode isEqualToString:@"ru"]){
        ret = kLanguageRussian;
    }
    else if ([languageCode isEqualToString:@"ko"]){
        ret = kLanguageKorean;
    }

    return ret;
}

TargetPlatform CCApplication::getTargetPlatform()
{
    if (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPad) // idiom for iOS <= 3.2, otherwise: [UIDevice userInterfaceIdiom] is faster.
    {
        return kTargetIpad;
    }
    else 
    {
        return kTargetIphone;
    }
}
void CCApplication::setOrientation(int orientation)
{
    if (m_orientation != orientation) {
        m_orientation = orientation;
        CCSize size = CCEGLView::sharedOpenGLView()->getFrameSize();
        CCSize size2 = CCEGLView::sharedOpenGLView()->getDesignResolutionSize();
        
        if (orientation == 0) //landscape
        {
            m_bChangedOrientation = false;
            [[UIApplication sharedApplication] setStatusBarHidden: YES];
            //[UIApplication sharedApplication].statusBarOrientation = UIInterfaceOrientationLandscapeRight;
            [[UIApplication sharedApplication] setStatusBarOrientation:UIInterfaceOrientationLandscapeRight animated: NO];
            CCEGLView::sharedOpenGLView()->refreshOrientation();
        } else if (orientation == 1) //portrait
        {
            m_bChangedOrientation = false;
            [[UIApplication sharedApplication] setStatusBarHidden: YES];
            //[[UIApplication sharedApplication] setStatusBarOrientation: UIInterfaceOrientationPortrait];
            [[UIApplication sharedApplication] setStatusBarOrientation:UIInterfaceOrientationLandscapeRight animated: NO];
            CCEGLView::sharedOpenGLView()->refreshOrientation();
        }
        if (orientation == 0 || orientation == 1) {
            while (!m_bChangedOrientation) {

//                [[[UIApplication sharedApplication] keyWindow] ];
                sleep(0);
            }
            CCEGLView::sharedOpenGLView()->setFrameSize(size.height, size.width);
            CCEGLView::sharedOpenGLView()->setDesignResolutionSize(size2.height, size2.width, kResolutionNoBorder);
            
        }
    }
}
int  CCApplication::getOrientation()
{
    return m_orientation;
}
NS_CC_END
