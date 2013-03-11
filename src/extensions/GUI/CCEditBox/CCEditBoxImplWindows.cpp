/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2012 James Chen
 
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

#include "CCEditBoxImplWindows.h"
#include "CCEditBox.h"
#include <windows.h>
#include <string>
#include "platform/win32/CCEGLView.h"

// This function is implemented in CCLabelBMFont.cpp


#ifdef UNICODE
typedef std::wstring InputBoxStringType;
typedef LPWSTR InputBoxCharPointerType;
typedef wchar_t InputBoxCharType;
#define InputBoxString(x) L##x
#else
typedef std::string InputBoxStringType;
typedef LPSTR InputBoxCharPointerType;
typedef char InputBoxCharType;
#define InputBoxString(x) x
#endif
static bool needUpdateText;
static bool isExit;
LRESULT CALLBACK InputBoxWndProc(HWND WndHandle, UINT Message, WPARAM wParam, LPARAM lParam)
{
	static InputBoxStringType *Results = 0;
	static HWND InputLabelHandle = 0;
	static HWND InputHandle = 0;

	switch(Message)
	{
	case WM_NCCREATE:
		{			
			Results = (InputBoxStringType*)((CREATESTRUCT*)lParam)->lpCreateParams;
			break;
		}

	case WM_CLOSE:
			ShowWindow(WndHandle, SW_HIDE);
			isExit = true;
		break;
	case WM_DESTROY:
		{
			SendMessage(WndHandle, WM_DESTROY, 0, 0);
			break;
		}

	case WM_COMMAND:
		{
			int NotifyCode = HIWORD(wParam);
			int ControlId = LOWORD(wParam);
			HWND ControlHandle = (HWND)lParam;

			switch(ControlId)
			{
			case 1001:
				{
					InputHandle = ControlHandle;
					break;
				}

			case 1002:
				{
					if(InputHandle == 0 || !Results)
					{
						PostMessage(WndHandle, WM_CLOSE, 0, 0);
						//SendMessage(WndHandle, WM_SYSCOMMAND, SC_CLOSE, 0);
						break;
					}

					InputBoxCharPointerType Buffer = new InputBoxCharType[256]; 
					GetWindowText(InputHandle, Buffer, 256);
					*Results = Buffer;
					needUpdateText = true;
					PostMessage(WndHandle, WM_CLOSE, 0, 0);
					//SendMessage(WndHandle, WM_SYSCOMMAND, SC_CLOSE, 0);
					break;
				}

			case 1003:
				{
					if(InputHandle == 0 || !Results)
					{
						PostMessage(WndHandle, WM_CLOSE, 0, 0);
						break;
					}

					//*Results = InputBoxString("");
					
					PostMessage(WndHandle, WM_CLOSE, 0, 0);
					
					break;
				}
			}
			break;
		}
	}
	return DefWindowProc(WndHandle, Message, wParam, lParam);
}

static InputBoxStringType ShowInputBox(HWND OwnerWindowHandle, const InputBoxStringType &InputLabel, const InputBoxStringType &InputText, const InputBoxStringType &Title)
{
	isExit = false;
	needUpdateText = false;
	WNDCLASS WndClass;
	HWND DialogHandle = 0;
	HWND InputLabelHandle = 0;
	HWND InputHandle = 0;
	HWND OkButtonHandle = 0, CancelButtonHandle = 0;
	InputBoxStringType Result = InputBoxString("");

	ZeroMemory(&WndClass, sizeof(WNDCLASS));
	WndClass.hbrBackground = GetSysColorBrush(COLOR_3DFACE);
	WndClass.hIcon = LoadIcon(0, IDI_APPLICATION);
	WndClass.hCursor = LoadCursor(0, IDC_ARROW);
	WndClass.hInstance = GetModuleHandle(0);
	WndClass.lpszClassName = InputBoxString("InputBox");
	WndClass.lpfnWndProc = InputBoxWndProc;
	RegisterClass(&WndClass);

	int X = 0, Y = 0;
	int Width = 0, Height = 0;
	RECT TempRect;
	GetWindowRect(GetDesktopWindow(), &TempRect);
	Width = (int)((float)(TempRect.right - TempRect.left) * 0.25f);
	Height = 180;
	X = ((TempRect.right - TempRect.left) / 2) - (Width / 2);
	Y = ((TempRect.bottom - TempRect.top) / 2) - (Height / 2);
	DialogHandle = CreateWindowEx(0, InputBoxString("InputBox"), Title.c_str(), WS_POPUP | WS_OVERLAPPEDWINDOW | WS_VISIBLE, X, Y, Width, Height, OwnerWindowHandle, 0, GetModuleHandle(0), (LPVOID)&Result);

	int LabelX = 5, LabelY = 5;
	int LabelWidth = Width - 10, LabelHeight = 24;
	InputLabelHandle = CreateWindowEx(0, InputBoxString("STATIC"), InputLabel.c_str(), WS_CHILD | WS_VISIBLE, LabelX, LabelY, LabelWidth, LabelHeight, DialogHandle, 0, GetModuleHandle(0), 0);

	int TBoxX = 5, TBoxY = 29;
	int TBoxWidth = Width - 20, TBoxHeight = 24;
	InputHandle = CreateWindowEx(0, InputBoxString("EDIT"), InputText.c_str(), WS_BORDER | WS_CHILD | WS_VISIBLE | ES_AUTOHSCROLL, TBoxX, TBoxY, TBoxWidth, TBoxHeight, DialogHandle, (HMENU)1001, GetModuleHandle(0), 0);
	SendMessage(InputHandle, EM_SETSEL, InputText.length(), InputText.length());
	int OkBtnX = (Width / 2) - 75, OkBtnY = Height - 75;
	int OkBtnWidth = 75, OkBtnHeight = 24;
	OkButtonHandle = CreateWindowEx(0, InputBoxString("BUTTON"), InputBoxString("Ok"), WS_CHILD | WS_VISIBLE, OkBtnX, OkBtnY, OkBtnWidth, OkBtnHeight, DialogHandle, (HMENU)1002, GetModuleHandle(0), 0);

	int CancelBtnX = (Width / 2) + 25, CancelBtnY = Height - 75;
	int CancelBtnWidth = 75, CancelBtnHeight = 24;
	CancelButtonHandle = CreateWindowEx(0, InputBoxString("BUTTON"), InputBoxString("Cancel"), WS_CHILD | WS_VISIBLE, CancelBtnX, CancelBtnY, CancelBtnWidth, CancelBtnHeight, DialogHandle, (HMENU)1003, GetModuleHandle(0), 0);
	
	MSG msg;
	ZeroMemory(&msg, sizeof(MSG));
	SetFocus(DialogHandle);
	SetFocus(InputHandle);
	
	EnableWindow(DialogHandle, true);
	EnableWindow(OwnerWindowHandle, false);
	//ShowWindow(DialogHandle, SW_NORMAL);	

	while (GetMessage( &msg, NULL, 0, 0 ))
	{
		if (msg.message==WM_KEYDOWN) {
			switch (msg.wParam) {
			case VK_RETURN:
				{
				//close
				InputBoxCharPointerType Buffer = new InputBoxCharType[256]; 
				GetWindowText(InputHandle, Buffer, 256);
				Result = Buffer;
				needUpdateText = true;
				PostMessage(DialogHandle, WM_CLOSE, 0, 0);
				}
				break;
			case VK_ESCAPE:
				//close
				PostMessage(DialogHandle, WM_CLOSE, 0, 0);
				break;
			default:
				TranslateMessage(&msg);
				break;
			}
		} else
			TranslateMessage(&msg);

		DispatchMessage(&msg);	
		if (msg.message == WM_CLOSE || isExit)
			break;
	}

	UnregisterClass(InputBoxString("InputBox"), GetModuleHandle(0));
	EnableWindow(OwnerWindowHandle, true);
	SetActiveWindow(OwnerWindowHandle);
	/*
	while(Message.message != WM_QUIT)
	{
		if(PeekMessage(&Message, 0, 0, 0, PM_REMOVE))
		{
			TranslateMessage(&Message);
			DispatchMessage(&Message);
		}
	}
	CloseWindow(DialogHandle);*/
	
	return Result;
}

#undef InputBoxString

NS_CC_BEGIN
extern long cc_utf8_strlen (const char * p, int max);
NS_CC_END

NS_CC_EXT_BEGIN

CCEditBoxImpl* __createSystemEditBox(CCEditBox* pEditBox)
{
    return new CCEditBoxImplWindows(pEditBox);
}

CCEditBoxImplWindows::CCEditBoxImplWindows(CCEditBox* pEditText)
: CCEditBoxImpl(pEditText)
, m_pLabel(NULL)
, m_pLabelPlaceHolder(NULL)
, m_eEditBoxInputMode(kEditBoxInputModeSingleLine)
, m_eEditBoxInputFlag(kEditBoxInputFlagInitialCapsAllCharacters)
, m_eKeyboardReturnType(kKeyboardReturnTypeDefault)
, m_colText(ccWHITE)
, m_colPlaceHolder(ccGRAY)
, m_nMaxLength(-1)
{
    
}

CCEditBoxImplWindows::~CCEditBoxImplWindows()
{

}

void CCEditBoxImplWindows::doAnimationWhenKeyboardMove(float duration, float distance)
{ // don't need to be implemented on android platform.

}

bool CCEditBoxImplWindows::initWithSize(const CCSize& size)
{
    //int fontSize = getFontSizeAccordingHeightJni(size.height-12);
	//DuongNT: need to fix later
	int fontSize = 5; 
    m_pLabel = CCLabelTTF::create("", "", size.height-12);
    m_pLabel->setAnchorPoint(ccp(0, 0));
    m_pLabel->setPosition(ccp(5, 2));
    m_pLabel->setColor(m_colText);
    m_pLabel->setDimensions(CCSize(size.width - 12, size.height));
    m_pEditBox->addChild(m_pLabel);

    m_pLabelPlaceHolder = CCLabelTTF::create("", "", size.height-12);
    m_pLabelPlaceHolder->setAnchorPoint(ccp(0, 0));
    m_pLabelPlaceHolder->setPosition(ccp(5, 2));
    m_pLabelPlaceHolder->setVisible(false);
    m_pLabelPlaceHolder->setColor(m_colPlaceHolder);
    m_pEditBox->addChild(m_pLabelPlaceHolder);
    
    m_EditSize = size;
    return true;
}

void CCEditBoxImplWindows::setFontColor(const ccColor3B& color)
{
    m_colText = color;
    m_pLabel->setColor(color);
}

void CCEditBoxImplWindows::setPlaceholderFontColor(const ccColor3B& color)
{
    m_colPlaceHolder = color;
    m_pLabelPlaceHolder->setColor(color);
}

void CCEditBoxImplWindows::setInputMode(EditBoxInputMode inputMode)
{
    m_eEditBoxInputMode = inputMode;
}

void CCEditBoxImplWindows::setMaxLength(int maxLength)
{
    m_nMaxLength = maxLength;
}

int CCEditBoxImplWindows::getMaxLength()
{
    return m_nMaxLength;
}

void CCEditBoxImplWindows::setInputFlag(EditBoxInputFlag inputFlag)
{
    m_eEditBoxInputFlag = inputFlag;
}

void CCEditBoxImplWindows::setReturnType(KeyboardReturnType returnType)
{
    m_eKeyboardReturnType = returnType;
}

bool CCEditBoxImplWindows::isEditing()
{
    return false;
}

void CCEditBoxImplWindows::setText(const char* pText)
{
    if (pText != NULL)
    {
        m_strText = pText;

        if (m_strText.length() > 0)
        {
            m_pLabelPlaceHolder->setVisible(false);

            std::string strToShow;

            if (kEditBoxInputFlagPassword == m_eEditBoxInputFlag)
            {
                long length = cc_utf8_strlen(m_strText.c_str(), -1);
                for (long i = 0; i < length; i++)
                {
                    strToShow.append("*");
                }
            }
            else
            {
                strToShow = m_strText;
            }

            //std::string strWithEllipsis = getStringWithEllipsisJni(strToShow.c_str(), m_EditSize.width, m_EditSize.height-12);
            
            std::string strWithEllipsis = m_strText;
			
			m_pLabel->setContentSize(CCSize(250, 30));
			
            m_pLabel->setString(strWithEllipsis.c_str());
        }
        else
        {
            m_pLabelPlaceHolder->setVisible(true);
            m_pLabel->setString("");
        }

    }
}

const char*  CCEditBoxImplWindows::getText(void)
{
    return m_strText.c_str();
}

void CCEditBoxImplWindows::setPlaceHolder(const char* pText)
{
    if (pText != NULL)
    {
        m_strPlaceHolder = pText;
        if (m_strPlaceHolder.length() > 0 && m_strText.length() == 0)
        {
            m_pLabelPlaceHolder->setVisible(true);
        }

        m_pLabelPlaceHolder->setString(m_strPlaceHolder.c_str());
    }
}

void CCEditBoxImplWindows::setPosition(const CCPoint& pos)
{ // don't need to be implemented on android platform.

}

void CCEditBoxImplWindows::setContentSize(const CCSize& size)
{ // don't need to be implemented on android platform.

}

void CCEditBoxImplWindows::visit(void)
{ // don't need to be implemented on android platform.
    
}

static void editBoxCallbackFunc(const char* pText, void* ctx)
{
    CCEditBoxImplWindows* thiz = (CCEditBoxImplWindows*)ctx;
    thiz->setText(pText);

    if (thiz->getDelegate() != NULL)
    {
        thiz->getDelegate()->editBoxTextChanged(thiz->getCCEditBox(), thiz->getText());
        thiz->getDelegate()->editBoxEditingDidEnd(thiz->getCCEditBox());
        thiz->getDelegate()->editBoxReturn(thiz->getCCEditBox());
    }
}
 INT_PTR CALLBACK DialogProc(UINT uMsg,WPARAM wParam,LPARAM lParam){
    switch(uMsg){
    case WM_INITDIALOG:
      
      break;
    case WM_COMMAND:
      
      break;
    default:
      return FALSE;
    }
    return TRUE;
  }

void CCEditBoxImplWindows::openKeyboard()
{
    if (m_pDelegate != NULL)
    {
        m_pDelegate->editBoxEditingDidBegin(m_pEditBox);
    }
	HWND hwnd = CCEGLView::sharedOpenGLView()->getHWnd();
	PWSTR wstr = L"";
    
    int count = 0;
    
	count = MultiByteToWideChar (CP_ACP,0, m_strText.c_str(), m_strText.length(),NULL,0);
    if ( count > 0 )
    {
        wstr = SysAllocStringLen(0,count);
        count = MultiByteToWideChar (CP_ACP, 0, m_strText.c_str(), m_strText.length(), wstr,count);
    }
	InputBoxStringType ret = ShowInputBox(hwnd, L"Your Jacos Application Url:", wstr, L"URL");
	
	/*
	count = ret.length() + 1;
	char *buffer = (char*)malloc(count);
	for (int i = 0; i < count; i++) {
		buffer[i] = (char)ret[i];
	}*/
	char buffer[512];
	
	memset (buffer, 0, sizeof(buffer));
	
	int ret_status = WideCharToMultiByte ( CP_UTF8, 0, (LPCWSTR) ret.c_str(), 256, buffer, 512, NULL, false);
	if (needUpdateText) {
		m_strText = buffer;
		editBoxCallbackFunc(buffer, this);
	}
	//MessageBox(0, Result.c_str(), L"Your name is:", MB_OK);
	/*
    showEditBoxDialogJni(   m_strPlaceHolder.c_str(),
                            m_strText.c_str(),
                            m_eEditBoxInputMode,
                            m_eEditBoxInputFlag,
                            m_eKeyboardReturnType,
                            m_nMaxLength,
                            editBoxCallbackFunc,
                            (void*)this  );*/

}

void CCEditBoxImplWindows::closeKeyboard()
{

}

NS_CC_EXT_END

