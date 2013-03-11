#include "main.h"
#include "../Classes/AppDelegate.h"
#include "CCEGLView.h"
#include "GUIConsole.h"

USING_NS_CC;
void startV8JavascriptEngine();

int APIENTRY _tWinMain(HINSTANCE hInstance,
                       HINSTANCE hPrevInstance,
                       LPTSTR    lpCmdLine,
                       int       nCmdShow)
{
    UNREFERENCED_PARAMETER(hPrevInstance);
    UNREFERENCED_PARAMETER(lpCmdLine);
	RedirectIOToConsole();
    // create the application instance
    AppDelegate app;
    CCEGLView* eglView = CCEGLView::sharedOpenGLView();
    //eglView->setFrameSize(960, 640 );
	//eglView->setFrameSize(480, 320);
    eglView->setFrameSize(320, 480);
    //eglView->setFrameSize(480, 800);
    //eglView->setFrameSize(752, 1280);
	startV8JavascriptEngine();
	return 0;
    //return CCApplication::sharedApplication()->run();
}
