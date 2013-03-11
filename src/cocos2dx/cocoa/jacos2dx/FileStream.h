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
#ifndef DATA_STREAM_H
#define DATA_STREAM_H

#include "cocos2d.h"
#include "stdio.h"

using namespace cocos2d;
namespace jacos2dx {

    class FileInputStream;
    class FileOutputStream;

    class FileStream : public JacosBaseObject
    {
    public:
        enum {
            MODE_OPEN_READ = 0,
            MODE_OPEN_WRITE = 1,
            MODE_OPEN_READ_WRITE = 2,
            MODE_CREATE = 3,
            MODE_APPEND = 4,
            MODE_READ_APPEND = 5
        };
        enum {
            ORG_BEGIN = 0,
            ORG_END   = 1,
            ORG_CURRENT = 2
        };
    private:
        const char* getFileMode(int mode);
    private:
        friend class FileInputStream;
        friend class FileOutputStream;
        FILE* mFileHandle;
        int   mFileMode;
        long  mFileSize;
    public:
        FileStream(const char* filename, int mode);
        ~FileStream();
        static std::string getWriteablePath();
        inline long getFileSize() {return mFileSize;};
        long getPosition();
        void seek(int origin, int position);
        InputStream *openInputStream();
        OutputStream *openOutputStream();
        void close();

    };

}

#endif