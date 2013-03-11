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
#include <windows.h>
#include <Shlobj.h>
#include "CCDirector.h"

#include "CCApplication.h"
#include "curl.h"
#include <vector>
#include "platform/platform.h"
#define _CACHE_FOLDER "cache_data_AFC124BD"
using namespace std;

NS_CC_BEGIN

std::map<std::string, bool> urlCache;
std::map<std::string, std::string> remoteDataCache;

void CCFileUtils::setApplicationRoot(const char* path) {
    m_ApplicationRoot = path;
    urlCache.clear();
}
// Callback function used by libcurl for collect response data
size_t writeData(void *ptr, size_t size, size_t nmemb, void *stream)
{
    std::vector<unsigned char> *recvBuffer = (std::vector<unsigned char>*)stream;
	size_t sizes = size * nmemb;
    
	recvBuffer->insert(recvBuffer->end(), (unsigned char*)ptr, (unsigned char*)ptr + sizes);
	//recvBuffer->assign((unsigned char*)ptr, (unsigned char*)ptr + sizes);
    
	return sizes;
}
//double totalTime = 0;
//int count = 0;

unsigned char* getContentFromUrl(const char* url, unsigned long* dataLength) {
    
    std::map< std::string, std::vector<unsigned char> >::iterator it;
    
    //double lastTick = CCTime::currentMiliseconds();
    //count++;
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

		code = curl_easy_perform(curl);
		if (code != CURLE_OK) {
			break;
		}

		code = curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &responseCode); 
		
	} while (false);
	if (code != CURLE_OK)
		return NULL;
	if (curl) {
        curl_easy_cleanup(curl);
    }
	if (responseCode != 200)
		return NULL;
	if (code == CURLE_OK) {
		*dataLength = stream.size();
		unsigned char *buffer = (unsigned char*)malloc(stream.size() + 1);
		if (buffer == NULL)
			return NULL;
		if (stream.size() > 0) 
			memcpy(buffer, &stream[0], stream.size());

		buffer[stream.size()] = '\0';

        /*
        double curTick = CCTime::currentMiliseconds();
        totalTime += curTick - lastTick;
        printf(">>> %d - load time: %f - total: %f - %s : %d\n", count, curTick - lastTick, totalTime, url, stream.size() / 1024);
        */
		return buffer;
	} else {
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
        tmpFile += _CACHE_FOLDER;
        CreateDirectoryA(tmpFile.c_str(), NULL);
        tmpFile += "\\";
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
// record the resource path
static char s_pszResourcePath[MAX_PATH] = {0};
std::string CCFileUtils::m_ApplicationRoot;
static void _CheckPath()
{
    if (! s_pszResourcePath[0])
    {
        WCHAR  wszPath[MAX_PATH] = {0};
        int nNum = WideCharToMultiByte(CP_ACP, 0, wszPath,
            GetCurrentDirectoryW(sizeof(wszPath), wszPath),
            s_pszResourcePath, MAX_PATH, NULL, NULL);
        s_pszResourcePath[nNum] = '\\';
    }
}

static CCFileUtils* s_pFileUtils = NULL;

CCFileUtils* CCFileUtils::sharedFileUtils()
{
    if (s_pFileUtils == NULL)
    {
        s_pFileUtils = new CCFileUtils();
        _CheckPath();
    }
    return s_pFileUtils;
}

void CCFileUtils::purgeFileUtils()
{
    if (s_pFileUtils != NULL)
    {
        s_pFileUtils->purgeCachedEntries();
    }

    CC_SAFE_DELETE(s_pFileUtils);
}

void CCFileUtils::purgeCachedEntries()
{
    remoteDataCache.clear();
}
bool endWithStrIgnoreCase(const char* source, const char* subStr)
{
	int len = strlen(subStr);
    int len2 = strlen(source);
	if (len > len2) return false;
    int j = len2;

	for (int i = len; i >= 0; i--)
	{
		if (subStr[i] != source[j] 
			&& ((subStr[i] < 'a' || subStr[i] != source[j] + 32)) && (source[j] < 'a' || subStr[i] + 32 != source[j])) {
				return false;
			}
        j--;
	}
	return true;
}


const char* CCFileUtils::fullPathFromRelativePath(const char *pszRelativePath)
{
	CCString* pRet = CCString::create("");

    

	if (startWithStrIgnoreCase(pszRelativePath, "http://")) {
		return pszRelativePath;
	}
    bool isRes = false;
	if (startWithStrIgnoreCase(pszRelativePath, "res://"))
	{
        isRes = true;
        pszRelativePath += 6;
		//return pszRelativePath;
	} else if (startWithStrIgnoreCase(m_ApplicationRoot.c_str(), "http://")) {
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

    bool bFileExist = true;
    const char* resDir = m_obDirectory.c_str();    

    const std::string& resourceRootPath = CCApplication::sharedApplication()->getResourceRootPath();
    if ((strlen(pszRelativePath) > 1 && pszRelativePath[1] == ':'))
    {
        // path start with "x:", is absolute path
        pRet->m_sString = pszRelativePath;
    }
    else if (strlen(pszRelativePath) > 0
        && ('/' == pszRelativePath[0] || '\\' == pszRelativePath[0]))
    {
        // path start with '/' or '\', is absolute path without driver name
        char szDriver[3] = {s_pszResourcePath[0], s_pszResourcePath[1], 0};
        pRet->m_sString = szDriver;
        pRet->m_sString += pszRelativePath;
    }
    else if (resourceRootPath.length() > 0)
    {
        pRet->m_sString = resourceRootPath.c_str();
        pRet->m_sString += m_obDirectory.c_str();
        pRet->m_sString += pszRelativePath;
    }
    else
    {
        pRet->m_sString = s_pszResourcePath;
        pRet->m_sString += resDir;
        pRet->m_sString += pszRelativePath;
    }

    // If file or directory doesn't exist, try to find it in the root path.
    if (GetFileAttributesA(pRet->m_sString.c_str()) == -1)
    {
        pRet->m_sString = s_pszResourcePath;
        pRet->m_sString += pszRelativePath;

        if (GetFileAttributesA(pRet->m_sString.c_str()) == -1)
        {
            bFileExist = false;
        }
    }

    if (!bFileExist)
    { // Can't find the file, return the relative path.
        pRet->m_sString = pszRelativePath;
    }
    if (isRes)
        pRet = CCString::stringWithFormat("res://%s", pRet->m_sString.c_str());
    return pRet->m_sString.c_str();
}

const char *CCFileUtils::fullPathFromRelativeFile(const char *pszFilename, const char *pszRelativeFile)
{
    // std::string relativeFile = fullPathFromRelativePath(pszRelativeFile);
    std::string relativeFile = pszRelativeFile;
    CCString *pRet = CCString::create("");
    pRet->m_sString = relativeFile.substr(0, relativeFile.find_last_of("/\\") + 1);
    pRet->m_sString += pszFilename;
    return pRet->m_sString.c_str();
}

unsigned char* CCFileUtils::getFileData(const char* pszFileName, const char* pszMode, unsigned long* pSize)
{
    std::string url;
    //DuongNT: check filename is a url
    if (!startWithStrIgnoreCase(pszFileName, "res://")) {
        if ((startWithStrIgnoreCase(m_ApplicationRoot.c_str(), "http://") && !startWithStrIgnoreCase(pszFileName, "http://")))     
        {
            std::string url(m_ApplicationRoot);
            if (pszFileName[0] == '/') 
                pszFileName++;
            url = url.append(pszFileName);
            return getContentFromUrl(url.c_str(), pSize);
        }

        if (startWithStrIgnoreCase(pszFileName, "http://")) {
            return getContentFromUrl(pszFileName, pSize);
        }        
        if (m_ApplicationRoot.length() > 0 && strstr(pszFileName, "/") == NULL)
        {
            url = m_ApplicationRoot;
            url = url.append(pszFileName);
            pszFileName = url.c_str();
        }
    } else {
        pszFileName = &pszFileName[6];
    }
    unsigned char* pBuffer = NULL;
    CCAssert(pszFileName != NULL && pSize != NULL && pszMode != NULL, "Invaild parameters.");
    *pSize = 0;
    do
    {
        // read the file from hardware
        FILE *fp = fopen(pszFileName, pszMode);
        CC_BREAK_IF(!fp);

        fseek(fp,0,SEEK_END);
        *pSize = ftell(fp);
        fseek(fp,0,SEEK_SET);
        pBuffer = new unsigned char[*pSize];
        *pSize = fread(pBuffer,sizeof(unsigned char), *pSize,fp);
        fclose(fp);
    } while (0);

    if (! pBuffer && isPopupNotify())
    {
        std::string title = "Notification";
        std::string msg = "Get data from file(";
        msg.append(pszFileName).append(") failed!");

        CCMessageBox(msg.c_str(), title.c_str());
    }
    return pBuffer;
}

string CCFileUtils::getWriteablePath()
{
	// Get full path of executable, e.g. c:\Program Files (x86)\My Game Folder\MyGame.exe
	char full_path[_MAX_PATH + 1];
	::GetModuleFileNameA(NULL, full_path, _MAX_PATH + 1);

	// Debug app uses executable directory; Non-debug app uses local app data directory
#ifndef _DEBUG
		// Get filename of executable only, e.g. MyGame.exe
		char *base_name = strrchr(full_path, '\\');

		if(base_name)
		{
			char app_data_path[_MAX_PATH + 1];

			// Get local app data directory, e.g. C:\Documents and Settings\username\Local Settings\Application Data
			if (SUCCEEDED(SHGetFolderPathA(NULL, CSIDL_LOCAL_APPDATA, NULL, SHGFP_TYPE_CURRENT, app_data_path)))
			{
				string ret((char*)app_data_path);

				// Adding executable filename, e.g. C:\Documents and Settings\username\Local Settings\Application Data\MyGame.exe
				ret += base_name;

				// Remove ".exe" extension, e.g. C:\Documents and Settings\username\Local Settings\Application Data\MyGame
				ret = ret.substr(0, ret.rfind("."));

				ret += "\\";

				// Create directory
				if (SUCCEEDED(SHCreateDirectoryExA(NULL, ret.c_str(), NULL)))
				{
					return ret;
				}
			}
		}
#endif // not defined _DEBUG

	// If fetching of local app data directory fails, use the executable one
	string ret((char*)full_path);

	// remove xxx.exe
	ret =  ret.substr(0, ret.rfind("\\") + 1);

	return ret;
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
