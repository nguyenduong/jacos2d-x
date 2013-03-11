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
#ifndef __DATA_STREAM_H
#define __DATA_STREAM_H

#include "cocoa/CCObject.h"
#include "stdio.h"

namespace jacos2dx {
    class ByteArray;

enum EOF_TYPE {
    _CR = 0,
    _LF,
    _CR_LF,
    _LF_CR
};
class InputStream
{
public:
    virtual int readByte() = 0;
    virtual int readSByte() = 0;
    virtual int readInt32() = 0;
    virtual unsigned int readUInt32() = 0;
    virtual int readUByte() = 0;
    virtual int readInt16() = 0;
    virtual int readUInt16() = 0;
    virtual float readFloat() = 0;
    virtual double readDouble() = 0;
    virtual long readLong() = 0;
    virtual const char* readUTF8() = 0;
    virtual const char* readUTF8Line(int eol) = 0;
    virtual bool readBoolean() = 0;
    virtual int readByteArray(ByteArray *data) = 0;
    virtual int readByteArray(ByteArray *data, unsigned int start, unsigned int length) = 0;
	virtual bool readByteArrayFully(ByteArray *data, unsigned int start, unsigned int length) = 0;
    virtual unsigned int available() = 0;
    virtual void skip(unsigned int bytes) = 0;    
};
class OutputStream
{
public:
    virtual void writeByte(int value) = 0;
    virtual void writeSByte(int value) = 0;
    virtual void writeInt32(int value) = 0;
    virtual void writeUInt32(unsigned int value) = 0;
    virtual void writeInt16(int value) = 0;
    virtual void writeUInt16(int value) = 0;
    virtual void writeLong(long value) = 0;
    virtual void writeFloat(float value) = 0;
    virtual void writeDouble(double value) = 0;
    virtual void writeUTF8(const char* string) = 0;
    virtual void writeUTF8Line(const char* string, int eol) = 0;
    virtual void writeBoolean(bool value) = 0;    
    
    virtual void writeByteArray(ByteArray *data) = 0;
    virtual void writeByteArray(ByteArray *data, unsigned int start, unsigned int length) = 0;
    virtual void flush() = 0;
protected:
    void    writeEOL(int eol);
};

class DataBufferedOutputStream;

class CC_DLL ByteArray : public cocos2d::CCObject
{
public:
    ByteArray(unsigned int size);
    ByteArray(ByteArray* data);
    ByteArray(const unsigned char* data, unsigned int size);
    ByteArray(const char* string);
	virtual ~ByteArray();
    
    bool write(unsigned int index, int value);
    int  read(unsigned int index);
    inline unsigned int getLength() {return mLength;};
	inline unsigned char* getBufferData() {
		return mBuffer;
	};
private:
    friend class DataBufferedOutputStream;
    friend class DataBufferedInputStream;

    unsigned char *mBuffer;
    
    unsigned int           mLength;
};

class CC_DLL DataBufferedOutputStream : public OutputStream,  public cocos2d::CCObject
{
public:
    DataBufferedOutputStream(int size);
    virtual ~DataBufferedOutputStream();
    virtual void writeByte(int value);
    virtual void writeSByte(int value);
    virtual void writeInt32(int value);
    virtual void writeUInt32(unsigned int value);
    virtual void writeInt16(int value);
    virtual void writeUInt16(int value);
    virtual void writeLong(long value);
    virtual void writeFloat(float value);
    virtual void writeDouble(double value);
    virtual void writeUTF8Line(const char* string, int eol);
    virtual void writeUTF8(const char* string);
    virtual void writeBoolean(bool value); 
    
    virtual void writeByteArray(ByteArray *data);
    virtual void writeByteArray(ByteArray *data, unsigned int start, unsigned int length);
    virtual void flush();
    
    inline unsigned int getLength()
    {
		return mPosition;
    };
	inline unsigned char* getDataPtr() {
		return mData;
	};
    ByteArray* toByteArray();
	
protected:
    inline void makeSureCapacity(unsigned int size){
        if (size > mCapacity) {
            mCapacity = size * 5 / 3;
            mData = (unsigned char*)realloc(mData, mCapacity);
        }
    }
    unsigned int  mCapacity;
    unsigned char *mData;
    unsigned int  mPosition;
};
    
    class DataBufferedInputStream :  public cocos2d::CCObject, public InputStream
    {
    public:
        DataBufferedInputStream(ByteArray* data, bool autoRelease = false);
		virtual ~DataBufferedInputStream();
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
        virtual const char* readUTF8Line(int eolType);
        virtual bool readBoolean();
        virtual int  readByteArray(ByteArray *data);
        virtual int  readByteArray(ByteArray *data, unsigned int start, unsigned int length);
		virtual bool readByteArrayFully(ByteArray *data, unsigned int start, unsigned int length);
        virtual void skip(unsigned int bytes);
        
        virtual inline unsigned int available() {
            return mData->getLength() - mPosition;
        }

    private:
        ByteArray *mData;
        unsigned int       mPosition;
		bool      mAutoRelease;
    };
}

#endif