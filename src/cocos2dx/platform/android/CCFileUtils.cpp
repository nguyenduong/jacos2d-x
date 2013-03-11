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

#define __CC_PLATFORM_FILEUTILS_CPP__
#include "platform/CCFileUtilsCommon_cpp.h"
#include "support/zip_support/ZipUtils.h"
#include <vector>
using namespace std;

NS_CC_BEGIN

#include "platform/CCCommon.h"
#include "jni/Java_org_cocos2dx_lib_Cocos2dxHelper.h"
#include "curl/curl.h"

std::map<std::string, bool> urlCache;
std::map< std::string, std::vector<unsigned char> > urlDataCache;
std::map<std::string, std::string> remoteDataCache;
// record the zip on the resource path
static ZipFile *s_pZipFile = NULL;

// record the resource path
static string s_strResourcePath = "";
std::string CCFileUtils::m_ApplicationRoot;

void CCFileUtils::setApplicationRoot(const char* path) {
    m_ApplicationRoot = path;
    urlCache.clear();
	urlDataCache.clear();
}
// Callback function used by libcurl for collect response data
// Callback function used by libcurl for collect response data
size_t writeData(void *ptr, size_t size, size_t nmemb, void *stream)
{
    std::vector<unsigned char> *recvBuffer = (std::vector<unsigned char>*)stream;
	size_t sizes = size * nmemb;
    //CCLOG("DuongNT: read data ");
	recvBuffer->insert(recvBuffer->end(), (unsigned char*)ptr, (unsigned char*)ptr + sizes);
	//recvBuffer->assign((unsigned char*)ptr, (unsigned char*)ptr + sizes);
    
	return sizes;
}
int totalSize;
unsigned char* getContentFromUrl(const char* url, unsigned long* dataLength) {
	CCLOG("Start get Data: %s", url);
	//load from cache
	std::map< std::string, std::vector<unsigned char> >::iterator it = urlDataCache.find(url);
    if (it != urlDataCache.end()) {
		CCLOG(">>>>>>>> LOAD FROM CACHE: %s", url);
		*dataLength = 0;
		int size = it->second.size();
        unsigned char *buffer = (unsigned char*)malloc(size + 1);		
		if (buffer == NULL) {
			return NULL;
		}
		if (size > 0) 
			memcpy(buffer, &it->second[0], size);
		buffer[size] = '\0';
		*dataLength = size;
		return buffer;
    }
	int responseCode;
	CURLcode code = CURL_LAST;
	*dataLength = 0;
	CURL *curl = curl_easy_init();
	std::vector<unsigned char> stream;
	code = curl_easy_setopt(curl, CURLOPT_URL, url);
	do {
		if (code != CURLE_OK) {
			break;
		}
		code = curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, &writeData);
		if (code != CURLE_OK) {
			break;
		}
		
		code = curl_easy_setopt(curl, CURLOPT_WRITEDATA, &stream);
		
		if (code != CURLE_OK) {
			break;
		}
		
		CCLOG("start easy perform");
		code = curl_easy_perform(curl);
		if (code != CURLE_OK) {
			break;
		}
		CCLOG("start easy get info");
		code = curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &responseCode); 
		CCLOG("finished easy get info");
	} while (false);
	
	if (code != CURLE_OK) {
		CCLOG("%s", "read data failed!");
		return NULL;
	}
	
	if (curl) {
		CCLOG("start cleanup");
        curl_easy_cleanup(curl);
		CCLOG("finish cleanup");
    }
	
	CCLOG("response code: %d", responseCode);
	if (responseCode != 200) {
		CCLOG("%s", "read data failed!");
		return NULL;
	}
	
	if (code == CURLE_OK) {
		CCLOG("read to buffer");
		*dataLength = stream.size();
		unsigned char *buffer = (unsigned char*)malloc(stream.size() + 1);
		/*
		totalSize += stream.size();
		
		CCLOG("read data size: %dKB - total: %dKB: ", stream.size() / 1024, totalSize / 1024);
		
		logHeap();*/
		if (buffer == NULL) {
			CCLOG("cannot alloc memory!");
			return NULL;
		}
		if (stream.size() > 0) 
			memcpy(buffer, &stream[0], stream.size());		
		buffer[stream.size()] = '\0';		
		urlCache[url] = true;  		
		urlDataCache[url] = stream;
		
		return buffer;
	} else {
		CCLOG("%s", "read data failed!");
		return NULL;
	}
}

bool isUrlExist(const char* url)
{
    std::map<std::string, bool>::iterator it = urlCache.find(url);
    if (it != urlCache.end()) {
        return it->second;
    }

	int responseCode = 0;
	CURLcode code = CURL_LAST;
	CURL *curl = curl_easy_init();
	std::vector<unsigned char> stream;

	code = curl_easy_setopt(curl, CURLOPT_URL, url);
	do {
		if (code != CURLE_OK) {
			break;
		}
		code = curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, &writeData);
		if (code != CURLE_OK) {
			break;
		}
		code = curl_easy_setopt(curl, CURLOPT_WRITEDATA, &stream);
		if (code != CURLE_OK) {
			break;
		}

		code = curl_easy_perform(curl);
		if (code != CURLE_OK) {
			break;
		}

		code = curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &responseCode); 
		
	} while (false);
    
	urlCache[url] = responseCode == 200;
	return responseCode == 200; //return ok
}
// record the resource path

static CCFileUtils* s_pFileUtils = NULL;

CCFileUtils* CCFileUtils::sharedFileUtils()
{
    if (s_pFileUtils == NULL)
    {
        s_pFileUtils = new CCFileUtils();
        std::string resourcePath = getApkPath();
        s_pZipFile = new ZipFile(resourcePath, "assets/");
    }
    return s_pFileUtils;
}

void CCFileUtils::purgeFileUtils()
{
    if (s_pFileUtils != NULL)
    {
        s_pFileUtils->purgeCachedEntries();
    }
	remoteDataCache.clear();
    CC_SAFE_DELETE(s_pZipFile);
    CC_SAFE_DELETE(s_pFileUtils);
}

void CCFileUtils::purgeCachedEntries()
{

}
const char* getFileFromCache(const char* filename)
{
    return CCFileUtils::sharedFileUtils()->getFileFromCache(filename);
}
const char* CCFileUtils::getFileFromCache(const char* filename) {
        std::map<std::string, std::string>::iterator it = remoteDataCache.find(filename);
    if (it != remoteDataCache.end()) {
        return it->second.c_str();
    }
    string tmpFile;
    //load from server
    unsigned long size;
    unsigned char* data = CCFileUtils::sharedFileUtils()->getFileData(filename, "ra", &size);
    if (data) {
        tmpFile = CCFileUtils::sharedFileUtils()->getWriteablePath();
		/*
        tmpFile += _CACHE_FOLDER;
        //CreateDirectoryA(tmpFile.c_str(), NULL);
		int result_code = mkdir(tmpFile.c_str(), 0770);
		*/
        tmpFile += "/";
        string fn = filename;
        for (int i = 0; i < fn.length(); i++) {
            if (fn[i] == '\\' || fn[i] == '/')
                fn[i] = '_';
        }

        tmpFile += fn;

        FILE* f = fopen(tmpFile.c_str(), "wb");
        if (!f)
            return filename;

        size_t ret = fwrite(data, size, 1, f);
        fclose(f);
        remoteDataCache[filename] = tmpFile.c_str();
        return remoteDataCache[filename].c_str();
    }    
    return filename;
}
const char* CCFileUtils::fullPathFromRelativePath(const char *pszRelativePath)
{
	CCString* pRet = CCString::create("");

	if (startWithStrIgnoreCase(pszRelativePath, "res://"))
	{
		return pszRelativePath;
	}
	if (startWithStrIgnoreCase(pszRelativePath, "http://")) {
		return pszRelativePath;
	}
	
	//DuongNT fixed for url
	if (startWithStrIgnoreCase(m_ApplicationRoot.c_str(), "http://")) {
		if (strlen(pszRelativePath) > 0
			&& ('/' == pszRelativePath[0] || '\\' == pszRelativePath[0]))
		{
			// path start with '/' or '\', is absolute path without driver name
			pRet->m_sString = m_ApplicationRoot.c_str();
			pRet->m_sString += pszRelativePath;			
		}
		else
		{
			pRet->m_sString =  m_ApplicationRoot.c_str();			
			pRet->m_sString += m_obDirectory.c_str();
			pRet->m_sString += pszRelativePath;
		}

        if (!isUrlExist(pRet->m_sString.c_str())) {
			pRet->m_sString = m_ApplicationRoot.c_str();
			pRet->m_sString += pszRelativePath;	
		}
		return pRet->m_sString.c_str();
		
	}
    return pszRelativePath;
}

const char* CCFileUtils::fullPathFromRelativeFile(const char *pszFilename, const char *pszRelativeFile)
{
    std::string relativeFile = pszRelativeFile;
    CCString *pRet = new CCString();
    pRet->autorelease();
    pRet->m_sString = relativeFile.substr(0, relativeFile.rfind('/')+1);
    pRet->m_sString += pszFilename;
    return pRet->m_sString.c_str();
}

unsigned char* CCFileUtils::getFileData(const char* pszFileName, const char* pszMode, unsigned long * pSize)
{    
	//DuongNT: check filename is a url
	bool isRes = false;
	if (!startWithStrIgnoreCase(pszFileName, "res://")) {
		if (startWithStrIgnoreCase(m_ApplicationRoot.c_str(), "http://") && !startWithStrIgnoreCase(pszFileName, "http://")) {
			std::string url(m_ApplicationRoot);
			if (pszFileName[0] == '/') 
				pszFileName++;
			url = url.append(pszFileName);
			return getContentFromUrl(url.c_str(), pSize);
		}
	
		if (startWithStrIgnoreCase(pszFileName, "http://")) {
			return getContentFromUrl(pszFileName, pSize);
		}/*
		std::string url;
		if (m_ApplicationRoot.length() > 0 && strstr(pszFileName, "/") == NULL)
		{
			url = m_ApplicationRoot;
			url = url.append(pszFileName);
			pszFileName = url.c_str();
		}*/
	} else {
		pszFileName = &pszFileName[6];
		isRes = true;
	}
	CCLOG("get file data: %s", pszFileName);
    unsigned char * pData = 0;
    string fullPath(pszFileName);

    if ((! pszFileName) || (! pszMode))
    {
        return 0;
    }

    if (pszFileName[0] != '/')
    {
        // read from apk
        string pathWithoutDirectory = fullPath;        		
        fullPath.insert(0, m_obDirectory.c_str());
		if (!isRes && !startWithStrIgnoreCase(pszFileName, m_ApplicationRoot.c_str())) //DuongNT: this solution is not good. I will improve it later
			fullPath.insert(0, m_ApplicationRoot.c_str());
        fullPath.insert(0, "assets/");
        pData = s_pZipFile->getFileData(fullPath, pSize);
        
        if (! pData && m_obDirectory.size() > 0)
        {
            // search from root
			
			if (!isRes && !startWithStrIgnoreCase(pszFileName, m_ApplicationRoot.c_str())) //DuongNT: this solution is not good. I will improve it later
				pathWithoutDirectory.insert(0, m_ApplicationRoot.c_str());
            pathWithoutDirectory.insert(0, "assets/");
			CCLOG("get file data here: %s", pathWithoutDirectory.c_str());
            pData = s_pZipFile->getFileData(pathWithoutDirectory, pSize);
        }
    }
    else
    {
        do 
        {
			CCLOG("get file data as file %s", pszFileName);
            // read rrom other path than user set it
            FILE *fp = fopen(pszFileName, pszMode);
            CC_BREAK_IF(!fp);

            unsigned long size;
            fseek(fp,0,SEEK_END);
            size = ftell(fp);
            fseek(fp,0,SEEK_SET);
            pData = new unsigned char[size];
            size = fread(pData,sizeof(unsigned char), size,fp);
            fclose(fp);

            if (pSize)
            {
                *pSize = size;
            }            
        } while (0);        
    }

    if (! pData && isPopupNotify())
    {
        std::string title = "Notification";
        std::string msg = "Get data from file(";
        msg.append(fullPath.c_str()).append(") failed!");
        CCMessageBox(msg.c_str(), title.c_str());
    }

    return pData;
}

string CCFileUtils::getWriteablePath()
{
    // the path is: /data/data/ + package name
    string dir("/data/data/");
    const char *tmp = getPackageNameJNI();

    if (tmp)
    {
        dir.append(tmp).append("/");

        return dir;
    }
    else
    {
        return "";
    }
}
jacos2dx::InputStream* CCFileUtils::getFileData(const char* pszFileName, const char* pszMode)
{
	unsigned long size;
	unsigned char* buffer = getFileData(pszFileName, pszMode, &size);

	jacos2dx::ByteArray *byteData = new jacos2dx::ByteArray(buffer, size);
	jacos2dx::DataBufferedInputStream *inputStream = new jacos2dx::DataBufferedInputStream(byteData, true);
	delete []buffer;
	return inputStream;
}
jacos2dx::InputStream* CCFileUtils::getFileDataFromZip(const char* pszZipFilePath, const char* pszFileName)
{
	unsigned long size;
	unsigned char* buffer = getFileDataFromZip(pszFileName, pszFileName, &size);

	jacos2dx::ByteArray *byteData = new jacos2dx::ByteArray(buffer, size);
	jacos2dx::DataBufferedInputStream *inputStream = new jacos2dx::DataBufferedInputStream(byteData, true);
	delete []buffer;
	return inputStream;
}
const char* CCFileUtils::getTextFileContent(const char* pszFileName)
{
	unsigned long size;
	char* data = (char*)getFileData(pszFileName, "r", &size);
	CCString *pRet = CCString::create(data);
	delete[]data;

	return pRet->m_sString.c_str();
}
NS_CC_END
