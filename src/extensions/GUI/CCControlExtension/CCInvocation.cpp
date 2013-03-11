/*
 * Copyright (c) 2012 cocos2d-x.org
 * http://www.cocos2d-x.org
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 *
 * Converted to c++ / cocos2d-x by Angus C
 */

#include "CCInvocation.h"

NS_CC_EXT_BEGIN

CCInvocation* CCInvocation::create(CCObject* target, SEL_CCControlHandler action, CCControlEvent controlEvent)
{
    CCInvocation* pRet = new CCInvocation(target, action, controlEvent);
    if (pRet != NULL)
    {
        pRet->autorelease();
    }
    return pRet;
}

CCInvocation::CCInvocation(CCObject* target, SEL_CCControlHandler action, CCControlEvent controlEvent)
{
    m_target=target;
    m_action=action;
    m_controlEvent=controlEvent;
}

CCInvocation::CCInvocation(v8::Handle<v8::Object> target, const char* action, CCControlEvent controlEvent)
{
	m_jsTarget = v8::Persistent<v8::Object>::New(target);
	m_ActionFunc = action;
    m_controlEvent=controlEvent;
    m_target = NULL;
    m_action = NULL;

}
CCInvocation::~CCInvocation()
{

	if (!m_jsTarget.IsEmpty())
		m_jsTarget.Dispose();
}
void CCInvocation::invoke(CCObject* sender)
{
	
    if (m_target && m_action)
    {
        (m_target->*m_action)(sender, m_controlEvent);
    }                
	
	/*
	if (m_target && !m_jsAction.IsEmpty()) {
		//this->getJSCCallFunc()->callJSFunction(m_jsAction, 
	}*/
}
void CCInvocation::invoke(v8::Handle<v8::Object> sender)
{
       
	if (!m_jsTarget.IsEmpty()) {
		
		v8::Handle<v8::Object> func = this->getJSCCallFunc()->getObjectMemberByName(m_jsTarget, m_ActionFunc.c_str());
		if (!func.IsEmpty())
            this->getJSCCallFunc()->callJSFunction(m_jsTarget, func, sender, m_controlEvent);
	}
}

NS_CC_EXT_END
