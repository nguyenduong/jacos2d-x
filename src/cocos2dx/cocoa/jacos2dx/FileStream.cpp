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
#include "FileStream.h"
#include "stdlib.h"
#include "string.h"
#define ASSERT JSC_ThrowException
namespace jacos2dx {

    class FileInputStream : public InputStream
    {
    public:
        FileInputStream(FileStream *fileStream);

        virtual int readByte();
        virtual int readSByte();
        virtual int readInt32();
        virtual unsigned int readUInt32();
        virtual int readUByte();
        virtual int readInt16();
        virtual int readUInt16();
        virtual float readFloat();
        virtual double readDouble();
        virtual long readLong();
        virtual const char* readUTF8();
        virtual const char* readUTF8Line(int eol);
        virtual bool readBoolean();

        virtual int readByteArray(ByteArray *data);
        virtual int readByteArray(ByteArray *data, unsigned int start, unsigned int length);
        virtual bool readByteArrayFully(ByteArray *data, unsigned int start, unsigned int length);

        virtual unsigned int available();
        virtual void skip(unsigned int bytes);

    private:
        FILE* mFileHandle;
        FileStream *mFileStream;
        FILE* getFileHandle();

    };
    FILE* FileInputStream::getFileHandle() {
        ASSERT(mFileStream->mFileHandle, "File was closed!");
        return mFileStream->mFileHandle;
    }

    FileInputStream::FileInputStream(FileStream* fileStream)
    {
        mFileStream = fileStream;
        mFileHandle = fileStream->mFileHandle;

    }
    int FileInputStream::readByte()
    {    
        ASSERT(feof(getFileHandle()) == 0, "Cannot read any more!");
        return (unsigned char)fgetc(getFileHandle());
    }
    int FileInputStream::readSByte()
    {
        ASSERT(feof(getFileHandle()) == 0, "Cannot read any more!");
        return fgetc(getFileHandle());
    }
    int FileInputStream::readInt32()
    {
        ASSERT(mFileStream->getFileSize() - mFileStream->getPosition() >= 4, "Cannot read Int32");
        int v1 = fgetc(getFileHandle()) & 0xFF;
        int v2 = fgetc(getFileHandle()) & 0xFF;
        int v3 = fgetc(getFileHandle()) & 0xFF;
        int v4 = fgetc(getFileHandle()) & 0xFF;
        return (v1 << 24) | (v2 << 16) | (v3 << 8) | v4;
    }
    unsigned int FileInputStream::readUInt32()
    {
        ASSERT(mFileStream->getFileSize() - mFileStream->getPosition() >= 4, "Cannot read Int32");
        int v1 = fgetc(getFileHandle()) & 0xFF;
        int v2 = fgetc(getFileHandle()) & 0xFF;
        int v3 = fgetc(getFileHandle()) & 0xFF;
        int v4 = fgetc(getFileHandle()) & 0xFF;
        return (unsigned int)((v1 << 24) | (v2 << 16) | (v3 << 8) | v4);
    }
    int FileInputStream::readUByte()
    {        
        ASSERT(feof(getFileHandle()) == 0, "Cannot read any more!");
        return fgetc(getFileHandle());
    }
    int FileInputStream::readInt16()
    {
        ASSERT(mFileStream->getFileSize() - mFileStream->getPosition() >= 2, "Cannot read Int16");
        int v1 = fgetc(getFileHandle()) & 0xFF;
        int v2 = fgetc(getFileHandle()) & 0xFF;

        return (short)((v1 << 8) | v2);
    }
    int FileInputStream::readUInt16()
    {
        ASSERT(mFileStream->getFileSize() - mFileStream->getPosition() >= 2, "Cannot read UInt16");
        int v1 = fgetc(getFileHandle()) & 0xFF;
        int v2 = fgetc(getFileHandle()) & 0xFF;

        return ((v1 << 8) | v2);
    }
    float FileInputStream::readFloat()
    {
        ASSERT(mFileStream->getFileSize() - mFileStream->getPosition() >= sizeof(float), "Cannot read Float");
        float ret;

        fgets((char*)&ret, sizeof(float), getFileHandle());
        return ret;
    }
    double FileInputStream::readDouble()
    {
        ASSERT(mFileStream->getFileSize() - mFileStream->getPosition() >= sizeof(double), "Cannot read Double");
        double ret;
        fgets((char*)&ret, sizeof(double), getFileHandle());
        return ret;
    }
    long FileInputStream::readLong()
    {
        return readInt32();
    }
    const char* FileInputStream::readUTF8()
    {
        int strLength = readUInt16();
        ASSERT(strLength <= available(), "not enough data!");
        char* buffer = (char*)malloc(strLength + 1);        
        fread(buffer, strLength, 1, getFileHandle());
        buffer[strLength] = '\0';
        cocos2d::CCString *ccstr =  cocos2d::CCString::create(buffer);
        free(buffer);
        return ccstr->m_sString.c_str();
    }
    const char* FileInputStream::readUTF8Line(int eol)
    {
        ASSERT(available() > 0, "Cannot read any more!");
        int dataLength = available();
        
        std::string str;
        int count = 0;
        while (count < dataLength) {
            int ch = readByte();
            count++;
            if (eol == _CR && ch == 0x0D) {                
                break;
            } else if (eol == _LF && ch == 0x0A) {
                break;
            } else if (eol == _CR_LF && ch == 0x0D && readByte() == 0x0A)
            {                
                break;
            } else if (eol == _LF_CR && ch == 0x0A && readByte() == 0x0D)
            {
                break;
            } else {
                str += ((char)ch);
            }
        }

        cocos2d::CCString *rets = cocos2d::CCString::create(str);
        return rets->getCString();
    }
    bool FileInputStream::readBoolean()
    {
        ASSERT(feof(getFileHandle()) == 0, "Cannot read any more!");
        return fgetc(getFileHandle()) != 0;
    }
    int FileInputStream::readByteArray(ByteArray *data)
    {        
        ASSERT(data != NULL, "data cannot null!");
        unsigned int avail = mFileStream->getFileSize() - mFileStream->getPosition();		
        if (avail >= data->getLength())
        {
            fgets((char*)data->getBufferData(), data->getLength(), getFileHandle());
            return data->getLength();
        } else if (avail > 0) {
            fgets((char*)data->getBufferData(), avail, getFileHandle());
            return avail;
        } else return 0;
    }
    int FileInputStream::readByteArray(ByteArray *data, unsigned int start, unsigned int length)
    {
        ASSERT(data != NULL, "data cannot null!");
        int avail = mFileStream->getFileSize() - mFileStream->getPosition();

        ASSERT(length >= 0, "length must not be lesser 0!");    
        ASSERT(start >= 0, "start must not be lesser 0!");    
        ASSERT(start < data->getLength(), "start must be lesser ByteArray's length!");
        ASSERT(start + length <= data->getLength(), "start + length must not be larger ByteArray's length!");

        if (avail >= length)
        {
            fgets((char*)data->getBufferData() + start, data->getLength(), getFileHandle());
            return length;
        } else if (avail > 0)
        {
            fgets((char*)data->getBufferData() + start, avail, getFileHandle());
            return avail;
        } else {
            return 0;
        }        
    }
    bool FileInputStream::readByteArrayFully(ByteArray *data, unsigned int start, unsigned int length)
    {
        ASSERT(data != NULL, "data cannot null!");
        int avail = mFileStream->getFileSize() - mFileStream->getPosition();

        ASSERT(length >= 0, "length must not be lesser 0!");    
        ASSERT(start >= 0, "start must not be lesser 0!");    
        ASSERT(start < data->getLength(), "start must be lesser ByteArray's length!");
        ASSERT(start + length <= data->getLength(), "start + length must not be larger ByteArray's length!");

        if (avail >= length)
        {
            fgets((char*)data->getBufferData() + start, data->getLength(), getFileHandle());
            return true;
        } else
            return false;
    }
    unsigned int FileInputStream::available()
    {
        return mFileStream->getFileSize() - mFileStream->getPosition();
    }
    void FileInputStream::skip(unsigned int bytes)
    {
        ASSERT(mFileStream->getFileSize() - mFileStream->getPosition() >= bytes, "bytes amount too large");
        fseek(getFileHandle(), bytes, SEEK_CUR);
    }
    class FileOutputStream : public OutputStream
    {
    public:
        FileOutputStream(FileStream *fileStream);
        virtual void writeByte(int value);
        virtual void writeSByte(int value);
        virtual void writeInt32(int value);
        virtual void writeUInt32(unsigned int value);
        virtual void writeInt16(int value);
        virtual void writeUInt16(int value);
        virtual void writeLong(long value);
        virtual void writeFloat(float value);
        virtual void writeDouble(double value);
        virtual void writeUTF8(const char* string);
        virtual void writeUTF8Line(const char* string, int eol);
        virtual void writeBoolean(bool value);    

        virtual void writeByteArray(ByteArray *data);
        virtual void writeByteArray(ByteArray *data, unsigned int start, unsigned int length);
        virtual void flush();
    private:
        FILE *mFileHandle;
        FileStream *mFileStream;
        FILE *getFileHandle() {
            ASSERT(mFileStream->mFileHandle, "File was closed!");
            return mFileStream->mFileHandle;
        };
    };

    FileOutputStream::FileOutputStream(FileStream *fileStream)
    {
        mFileStream = fileStream;
        mFileHandle = fileStream->mFileHandle;
    }
    void FileOutputStream::writeByte(int value)
    {
        int status = fputc(value, getFileHandle());
        ASSERT(status == value, "Cannot write!");
    }
    void FileOutputStream::writeSByte(int value)
    {
        int status = fputc(value, getFileHandle());
        ASSERT(status == value, "Cannot write!");
    }
    void FileOutputStream::writeInt32(int value)
    {

        int status = fputc((value >> 24) & 0xFF, getFileHandle());
        ASSERT(status >= 0, "Cannot write!");
        status = fputc((value >> 16) & 0xFF, getFileHandle());
        ASSERT(status >= 0, "Cannot write!");
        status = fputc((value >> 8) & 0xFF, getFileHandle());
        ASSERT(status >= 0, "Cannot write!");
        status = fputc(value & 0xFF, getFileHandle());
        ASSERT(status >= 0, "Cannot write!");
    }
    void FileOutputStream::writeUInt32(unsigned int value)
    {
        int status = fputc((value >> 24) & 0xFF, getFileHandle());
        ASSERT(status >= 0, "Cannot write!");
        status = fputc((value >> 16) & 0xFF, getFileHandle());
        ASSERT(status >= 0, "Cannot write!");
        status = fputc((value >> 8) & 0xFF, getFileHandle());
        ASSERT(status >= 0, "Cannot write!");
        status = fputc(value & 0xFF, getFileHandle());
        ASSERT(status >= 0, "Cannot write!");
    }
    void FileOutputStream::writeInt16(int value)
    {
        int status = fputc((value >> 8) & 0xFF, getFileHandle());
        ASSERT(status >= 0, "Cannot write!");
        status = fputc(value & 0xFF, getFileHandle());
        ASSERT(status >= 0, "Cannot write!");
    }
    void FileOutputStream::writeUInt16(int value)
    {
        int status = fputc((value >> 8) & 0xFF, getFileHandle());
        ASSERT(status >= 0, "Cannot write!");
        status = fputc(value & 0xFF, getFileHandle());
        ASSERT(status >= 0, "Cannot write!");
    }
    void FileOutputStream::writeLong(long value)
    {
        int size = fwrite(&value, 1, sizeof(long), getFileHandle());
        ASSERT(size == sizeof(long), "Cannot write a long!");        
    }
    void FileOutputStream::writeFloat(float value)
    {
        int size = fwrite(&value, 1, sizeof(float), getFileHandle());
        ASSERT(size == sizeof(float), "Cannot write a float!");        
    }
    void FileOutputStream::writeDouble(double value)
    {
        int size = fwrite(&value, 1, sizeof(double), getFileHandle());
        ASSERT(size == sizeof(double), "Cannot write a double!");
    }
    void FileOutputStream::writeUTF8(const char* string)
    {
        int strLength = strlen(string);
        writeUInt16(strLength);
        int size = fwrite(string, strLength, 1, getFileHandle());
        ASSERT(size > 0, "Cannot write!");
    }
    void FileOutputStream::writeUTF8Line(const char* string, int eol)
    {        
        int length = strlen(string);
        int size = fwrite(string, 1, length, getFileHandle());
        ASSERT(size >= 0, "Cannot write!");
        writeEOL(eol);
                
    }
    void FileOutputStream::writeBoolean(bool value)
    {
        int status = fputc(value, getFileHandle());
        ASSERT(status >= 0, "Cannot write!");
    }

    void FileOutputStream::writeByteArray(ByteArray *data)
    {
        int size = fwrite(data->getBufferData(), 1, data->getLength(), getFileHandle());
        ASSERT(size == data->getLength(), "Cannot write an array!");
    }
    void FileOutputStream::writeByteArray(ByteArray *data, unsigned int start, unsigned int length)
    {
        ASSERT(length > 0, "Length must be larger 0");
        ASSERT(start >= 0, "start cannot lesser 0");

        ASSERT(start + length < data->getLength(), "data not in range");
        int size = fwrite(data->getBufferData() + start, 1, length, getFileHandle());
        ASSERT(size == data->getLength(), "Cannot write an array!");
    }
    void FileOutputStream::flush()
    {
        fflush(getFileHandle());
    }
    FileStream::FileStream(const char* filename, int mode)
    {
        mFileMode = mode;
        const char* fileMode = getFileMode(mode);

        if (fileMode == NULL)
            throw JSCException("File mode is wrong!");

        mFileHandle = fopen(filename, fileMode);
        if (mFileHandle == NULL)
            throw JSCException("cannot open file!!");
        
        fseek(mFileHandle, 0, SEEK_END);
        mFileSize = ftell(mFileHandle);
        fseek(mFileHandle, 0, SEEK_SET);

        printf("file size: %d\n", mFileSize);
    }
    long FileStream::getPosition()
    {
        return ftell(mFileHandle);
    }
    const char* FileStream::getFileMode(int mode)
    {
        switch (mode) {
        case MODE_OPEN_READ:
            return "rb";
        case MODE_OPEN_WRITE:
            return "w+b";
        case MODE_OPEN_READ_WRITE:
            return "r+b";
        case MODE_CREATE:
            return "wb";
        case MODE_APPEND:
            return "ab";
        case MODE_READ_APPEND:
            return "a+b";
        default:
            return NULL;
        }
    }

    void FileStream::seek(int origin, int position)
    {
        switch (origin) {
        case ORG_BEGIN:
            fseek(mFileHandle, SEEK_SET, position);
            break;
        case ORG_CURRENT:
            fseek(mFileHandle, SEEK_CUR, position);
            break;
        case ORG_END:
            fseek(mFileHandle, SEEK_END, position);
            break;

        }
    }
    InputStream *FileStream::openInputStream()
    {
        ASSERT(mFileMode == MODE_OPEN_READ || mFileMode == MODE_OPEN_READ_WRITE, "File mode cannot read");
        return new FileInputStream(this);
    }
    OutputStream *FileStream::openOutputStream()
    {
        ASSERT(mFileMode == MODE_CREATE || mFileMode == MODE_OPEN_READ_WRITE || mFileMode == MODE_OPEN_WRITE, "File mode cannot write");

        return new FileOutputStream(this);
    } 
    std::string FileStream::getWriteablePath()
    {        
        return CCFileUtils::sharedFileUtils()->getWriteablePath();
    }
    void FileStream::close()
    {
        if (mFileHandle) {
            fclose(mFileHandle);
            mFileHandle = NULL;
        }
    }
    FileStream::~FileStream()
    {
        close();
    }

}