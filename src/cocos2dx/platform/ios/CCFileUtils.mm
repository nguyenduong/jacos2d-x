/****************************************************************************
Copyright (c) 2010-2012 cocos2d-x.org
Copyright (c) 2011      Zynga Inc.

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
#import <Foundation/Foundation.h>
#import <UIKit/UIDevice.h>

#include <string>
#include <stack>
#include <libxml/parser.h>
#include <libxml/tree.h>
#include <libxml/xmlmemory.h>
#include "CCString.h"
#include "CCFileUtils.h"
#include "CCDirector.h"
#include "CCSAXParser.h"
#include "CCDictionary.h"
#include "support/zip_support/unzip.h"
#include <vector>
#include "curl/curl.h"
#define MAX_PATH 260

USING_NS_CC;

static void static_addValueToCCDict(id key, id value, CCDictionary* pDict);
static void static_addItemToCCArray(id item, CCArray* pArray);

static void static_addItemToCCArray(id item, CCArray *pArray)
{
    // add string value into array
    if ([item isKindOfClass:[NSString class]]) {
        CCString* pValue = new CCString([item UTF8String]);
        
        pArray->addObject(pValue);
        pValue->release();
        return;
    }

    // add number value into array(such as int, float, bool and so on)
    if ([item isKindOfClass:[NSNumber class]]) {
        NSString* pStr = [item stringValue];
        CCString* pValue = new CCString([pStr UTF8String]);
        
        pArray->addObject(pValue);
        pValue->release();
        return;
    }
    
    // add dictionary value into array
    if ([item isKindOfClass:[NSDictionary class]]) {
        CCDictionary* pDictItem = new CCDictionary();
        for (id subKey in [item allKeys]) {
            id subValue = [item objectForKey:subKey];
            static_addValueToCCDict(subKey, subValue, pDictItem);
        }
        pArray->addObject(pDictItem);
        pDictItem->release();
        return;
    }
    
    // add array value into array
    if ([item isKindOfClass:[NSArray class]]) {
        CCArray *pArrayItem = new CCArray();
        pArrayItem->init();
        for (id subItem in item) {
            static_addItemToCCArray(subItem, pArrayItem);
        }
        pArray->addObject(pArrayItem);
        pArrayItem->release();
        return;
    }
}

static void static_addValueToCCDict(id key, id value, CCDictionary* pDict)
{
    // the key must be a string
    CCAssert([key isKindOfClass:[NSString class]], "The key should be a string!");
    std::string pKey = [key UTF8String];

    // the value is a new dictionary
    if ([value isKindOfClass:[NSDictionary class]]) {
        CCDictionary* pSubDict = new CCDictionary();
        for (id subKey in [value allKeys]) {
            id subValue = [value objectForKey:subKey];
            static_addValueToCCDict(subKey, subValue, pSubDict);
        }
        pDict->setObject(pSubDict, pKey.c_str());
        pSubDict->release();
        return;
    }

    // the value is a string
    if ([value isKindOfClass:[NSString class]]) {
        CCString* pValue = new CCString([value UTF8String]);

        pDict->setObject(pValue, pKey.c_str());
        pValue->release();
        return;
    }

    // the value is a number
    if ([value isKindOfClass:[NSNumber class]]) {
        NSString* pStr = [value stringValue];
        CCString* pValue = new CCString([pStr UTF8String]);
        
        pDict->setObject(pValue, pKey.c_str());
        pValue->release();
        return;
    }

    // the value is a array
    if ([value isKindOfClass:[NSArray class]]) {
        CCArray *pArray = new CCArray();
        pArray->init();
        for (id item in value) {
            static_addItemToCCArray(item, pArray);
        }
        pDict->setObject(pArray, pKey.c_str());
        pArray->release();
        return;
    }
}

NS_CC_BEGIN

std::map<std::string, bool> urlCache;
std::map<std::string, std::string> remoteDataCache;
static CCFileUtils* s_pFileUtils = NULL;
std::string CCFileUtils::m_ApplicationRoot;
void CCFileUtils::setApplicationRoot(const char* path) {
    m_ApplicationRoot = path;
    urlCache.clear();	
}
// Callback function used by libcurl for collect response data
// Callback function used by libcurl for collect response data
size_t writeData(void *ptr, size_t size, size_t nmemb, void *stream)
{
    std::vector<unsigned char> *recvBuffer = (std::vector<unsigned char>*)stream;
	size_t sizes = size * nmemb;

	recvBuffer->insert(recvBuffer->end(), (unsigned char*)ptr, (unsigned char*)ptr + sizes);
	//recvBuffer->assign((unsigned char*)ptr, (unsigned char*)ptr + sizes);
    
	return sizes;
}
unsigned char* getContentFromUrl(const char* url, unsigned long* dataLength) {
    
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
	if (code == CURLE_OK) {
		*dataLength = stream.size();
		unsigned char *buffer = (unsigned char*)malloc(stream.size() + 1);
		if (buffer == NULL)
			return NULL;
		if (stream.size() > 0)
			memcpy(buffer, &stream[0], stream.size());
		buffer[stream.size()] = '\0';
		//CCLOG("DuongNT: complete data %s", buffer);
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
  
    if (responseCode == 200 || responseCode == 401)
        urlCache[url] = responseCode == 200;  
    
	return responseCode == 200; //return ok
}
const char* getFileFromCache(const char* filename) {
    return CCFileUtils::sharedFileUtils()->getFileFromCache(filename);
}
const char* CCFileUtils::getFileFromCache(const char* filename) {
        std::map<std::string, std::string>::iterator it = remoteDataCache.find(filename);
    if (it != remoteDataCache.end()) {
        return it->second.c_str();
    }
    std::string tmpFile;
    //load from server
    unsigned long size;
    unsigned char* data = CCFileUtils::sharedFileUtils()->getFileData(filename, "rb", &size);
    if (data) {
        tmpFile = CCFileUtils::sharedFileUtils()->getWriteablePath();
		/*
        tmpFile += _CACHE_FOLDER;
        //CreateDirectoryA(tmpFile.c_str(), NULL);
		int result_code = mkdir(tmpFile.c_str(), 0770);
		*/
        tmpFile += "/";
        std::string fn = filename;
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
CCFileUtils* CCFileUtils::sharedFileUtils()
{
    if (s_pFileUtils == NULL)
    {
        s_pFileUtils = new CCFileUtils();
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
    urlCache.clear();
    CC_SAFE_DELETE(s_pFileUtils);
}

void CCFileUtils::purgeCachedEntries()
{

}

void CCFileUtils::setResourceDirectory(const char *pszDirectoryName)
{
    m_obDirectory = pszDirectoryName;
    if (m_obDirectory.size() > 0 && m_obDirectory[m_obDirectory.size() - 1] != '/')
    {
        m_obDirectory.append("/");
    }
}

const char* CCFileUtils::getResourceDirectory()
{
    return m_obDirectory.c_str();
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

    CCAssert(pszRelativePath != NULL, "CCFileUtils: Invalid path");
    
    NSString *fullpath = nil;
    NSString *relPath = [NSString stringWithUTF8String:pszRelativePath];
    
    // only if it is not an absolute path
    if( ! [relPath isAbsolutePath] ) {
        
        // pathForResource also searches in .lproj directories. issue #1230
        NSString *lastPathComponent = [relPath lastPathComponent];
        
        NSString *imageDirectory = [relPath stringByDeletingLastPathComponent];
        NSMutableString *imageDirectoryByAppendDirectory = nil;
        if (!isRes && m_ApplicationRoot.length() > 0)
        {
            NSString *mainBundle = [[NSBundle mainBundle] pathForResource:@"/" ofType:nil];
            NSString *mainPath = [NSMutableString stringWithUTF8String:m_ApplicationRoot.c_str()];
            NSRange range = [mainPath rangeOfString: mainBundle];
            
            if (range.length != 0) {
                mainPath = [mainPath substringFromIndex:range.length + 1];
            }
            imageDirectoryByAppendDirectory = [NSMutableString stringWithUTF8String: [mainPath UTF8String]];
            [imageDirectoryByAppendDirectory appendFormat: @"%s", m_obDirectory.c_str()];
            
        } else
             imageDirectoryByAppendDirectory = [NSMutableString stringWithUTF8String:m_obDirectory.c_str()];
        [imageDirectoryByAppendDirectory appendString:imageDirectory];
        
        // search path from directory set by setResourceDirectory
        fullpath = [[NSBundle mainBundle] pathForResource:lastPathComponent
                                                   ofType:nil
                                              inDirectory:imageDirectoryByAppendDirectory];
        if (fullpath == nil)
        {
            // search from root directory
            fullpath = [[NSBundle mainBundle] pathForResource:lastPathComponent
                                                       ofType:nil
                                                  inDirectory:imageDirectory];
        }
    }
    
    if (fullpath == nil)
    {
        fullpath = relPath;
    }
    if (isRes)
        return [[NSString stringWithFormat:@"res://%s", [fullpath UTF8String]] UTF8String];
    return [fullpath UTF8String];
}

const char *CCFileUtils::fullPathFromRelativeFile(const char *pszFilename, const char *pszRelativeFile)
{
    std::string relativeFile = fullPathFromRelativePath(pszRelativeFile);
    CCString *pRet = new CCString();
    pRet->autorelease();
    pRet->m_sString = relativeFile.substr(0, relativeFile.rfind('/')+1);
    pRet->m_sString += pszFilename;
    return pRet->m_sString.c_str();
}

CCDictionary* ccFileUtils_dictionaryWithContentsOfFileThreadSafe(const char *pFileName)
{
    const char* pszFullPath = CCFileUtils::sharedFileUtils()->fullPathFromRelativePath(pFileName);
    NSDictionary* pDict = nil;
    if (startWithStrIgnoreCase(pszFullPath, "http://")) {
        NSURL *url = [NSURL URLWithString:[NSString stringWithUTF8String:pszFullPath]];
        pDict = [NSDictionary dictionaryWithContentsOfURL:url];

    } else {
        NSString* pPath = [NSString stringWithUTF8String:pszFullPath];
        pDict = [NSDictionary dictionaryWithContentsOfFile:pPath];
    }
    
    CCDictionary* pRet = new CCDictionary();
    for (id key in [pDict allKeys]) {
        id value = [pDict objectForKey:key];
        static_addValueToCCDict(key, value, pRet);
    }
    
    return pRet;
}

CCArray* ccFileUtils_arrayWithContentsOfFileThreadSafe(const char* pFileName)
{
//    NSString* pPath = [NSString stringWithUTF8String:pFileName];
//    NSString* pathExtension= [pPath pathExtension];
//    pPath = [pPath stringByDeletingPathExtension];
//    pPath = [[NSBundle mainBundle] pathForResource:pPath ofType:pathExtension];
//    fixing cannot read data using CCArray::createWithContentsOfFile
    const char* pszFullPath = CCFileUtils::sharedFileUtils()->fullPathFromRelativePath(pFileName);
    NSString* pPath = [NSString stringWithUTF8String:pszFullPath];
    NSArray* pArray = [NSArray arrayWithContentsOfFile:pPath];
    
    CCArray* pRet = new CCArray();
    for (id value in pArray) {
        static_addItemToCCArray(value, pRet);
    }

    return pRet;
}

unsigned char* CCFileUtils::getFileData(const char* pszFileName, const char* pszMode, unsigned long * pSize)
{
    std::string fullPath;
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
		}
    
		std::string url;
		if (m_ApplicationRoot.length() > 0 && strstr(pszFileName, "/") == NULL)
		{
			url = m_ApplicationRoot;
			url = url.append(pszFileName);
			pszFileName = url.c_str();
		}
	} else {
        pszFileName += 6;

	}
    unsigned char * pBuffer = NULL;
    CCAssert(pszFileName != NULL && pSize != NULL && pszMode != NULL, "Invalid parameters.");
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

// notification support when getFileData from a invalid file
static bool s_bPopupNotify = true;

void CCFileUtils::setPopupNotify(bool bNotify)
{
    s_bPopupNotify = bNotify;
}

bool CCFileUtils::isPopupNotify()
{
    return s_bPopupNotify;
}

std::string CCFileUtils::getWriteablePath()
{
    // save to document folder
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0];
    std::string strRet = [documentsDirectory UTF8String];
    strRet.append("/");
    return strRet;
}

unsigned char* CCFileUtils::getFileDataFromZip(const char* pszZipFilePath, const char* pszFileName, unsigned long * pSize)
{
        unsigned char * pBuffer = NULL;
        unzFile pFile = NULL;
        *pSize = 0;
    
        do 
        {
            CC_BREAK_IF(!pszZipFilePath || !pszFileName);
            CC_BREAK_IF(strlen(pszZipFilePath) == 0);
    
            pFile = unzOpen(pszZipFilePath);
            CC_BREAK_IF(!pFile);
    
            int nRet = unzLocateFile(pFile, pszFileName, 1);
            CC_BREAK_IF(UNZ_OK != nRet);
    
            char szFilePathA[260];
            unz_file_info FileInfo;
            nRet = unzGetCurrentFileInfo(pFile, &FileInfo, szFilePathA, sizeof(szFilePathA), NULL, 0, NULL, 0);
            CC_BREAK_IF(UNZ_OK != nRet);
    
            nRet = unzOpenCurrentFile(pFile);
            CC_BREAK_IF(UNZ_OK != nRet);
    
            pBuffer = new unsigned char[FileInfo.uncompressed_size];
            int nSize = 0;
            nSize = unzReadCurrentFile(pFile, pBuffer, FileInfo.uncompressed_size);
            CCAssert(nSize == 0 || nSize == (int)FileInfo.uncompressed_size, "the file size is wrong");
    
            *pSize = FileInfo.uncompressed_size;
            unzCloseCurrentFile(pFile);
        } while (0);
    
        if (pFile)
        {
            unzClose(pFile);
        }

            return pBuffer;
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

