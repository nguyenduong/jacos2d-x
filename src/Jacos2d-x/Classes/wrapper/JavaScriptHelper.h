#ifndef JAVASCRIPT_HELPER_H
#define JAVASCRIPT_HELPER_H
//#include "toV8lib.h"
void testV8Lib() ;
class JavaScriptHelper  {
public:
	void initJavaScript();
	void runScript(const char *scriptName, const char* script);
	void runScriptFromFile(const char* scriptFile);
	void runScriptFromUrl(const char* url);
private:

};


#endif