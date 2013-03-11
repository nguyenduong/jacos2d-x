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
#include "JacosBaseObject.h"
#include "DataStream.h"
#include "stdlib.h"
#include "string.h"
#include "../CCString.h"
#define ASSERT JSC_ThrowException
namespace jacos2dx {
    void OutputStream::writeEOL(int eol)
    {
        switch (eol) {
        case _CR:
            this->writeByte(0x0D);
            break;
        case _LF:
            this->writeByte(0x0A);            
            break;
        case _CR_LF:
            this->writeByte(0x0D);
            this->writeByte(0x0A);
            break;
        case _LF_CR:
            this->writeByte(0x0A);
            this->writeByte(0x0D);
            break;
        }
    }
    ByteArray::ByteArray(unsigned int size)
    {
        mLength = size;
        mBuffer = (unsigned char*)malloc(size);
        memset(mBuffer, 0, mLength);
    }
    ByteArray::ByteArray(ByteArray* data)
    {
        mLength = data->mLength;
        mBuffer = (unsigned char*)malloc(mLength);
        memcpy(mBuffer, data->mBuffer, mLength);
    }
    ByteArray::ByteArray(const unsigned char* data, unsigned int size)
    {
        mLength = size;
        mBuffer = (unsigned char*)malloc(mLength);
        memcpy(mBuffer, data, mLength);
    }
    ByteArray::ByteArray(const char* string)
    {
        mLength = strlen(string) + 1;
        mBuffer = (unsigned char*)malloc(mLength);
        memcpy(mBuffer, string, mLength);
    }
    
    ByteArray::~ByteArray()
    {
        free(mBuffer);
    }
    
    bool ByteArray::write(unsigned int index, int value)
    {
        if (index >= 0 && index < mLength)
        {
            mBuffer[index] = (unsigned char)(value & 0xFF);
            return true;
        }
        return false;
    }
    
    int  ByteArray::read(unsigned int index)
    {
        if (index >= 0 && index < mLength)
        {
            return mBuffer[index];
        }
        return -1;
    }

    DataBufferedOutputStream::DataBufferedOutputStream(int size)
    {
        mPosition = 0;
        if (size == 0)
            mCapacity = 10;
        else mCapacity = size;
        
        mData = (unsigned char*)malloc(mCapacity);
    }
    DataBufferedOutputStream::~DataBufferedOutputStream()
    {
        free(mData);
    }
    void DataBufferedOutputStream::writeByte(int value)
    {
       makeSureCapacity(mPosition + 1);
       mData[mPosition++] = (unsigned char)(value & 0xFF) ;
    }
    void DataBufferedOutputStream::writeSByte(int value)
    {
       makeSureCapacity(mPosition + 1);
       mData[mPosition++] = (char)(value & 0xFF);
    }
    void DataBufferedOutputStream::writeInt32(int value)
    {
       makeSureCapacity(mPosition + 4);
       mData[mPosition++] = ((unsigned char)(value >> 24)  & 0xFF); 
       mData[mPosition++] = ((unsigned char)(value >> 16)  & 0xFF); 
       mData[mPosition++] = ((unsigned char)(value >> 8)  & 0xFF); 
       mData[mPosition++] = ((unsigned char)(value  & 0xFF)); 
    }
    void DataBufferedOutputStream::writeUInt32(unsigned int value)
    {
       makeSureCapacity(mPosition + 4);        
        mData[mPosition++] = ((unsigned char)(value >> 24)  & 0xFF); 
        mData[mPosition++] = ((unsigned char)(value >> 16)  & 0xFF); 
        mData[mPosition++] = ((unsigned char)(value >> 8)  & 0xFF); 
        mData[mPosition++] = ((unsigned char)(value  & 0xFF)); 
    }
    void DataBufferedOutputStream::writeInt16(int value)
    {
       makeSureCapacity(mPosition + 2);        
        mData[mPosition++] = ((unsigned char)(value >> 8)  & 0xFF); 
        mData[mPosition++] = ((unsigned char)(value  & 0xFF)); 
    }
    void DataBufferedOutputStream::writeUInt16(int value)
    {
        makeSureCapacity(mPosition + 2);        
        mData[mPosition++] = ((unsigned char)(value >> 8)  & 0xFF); 
        mData[mPosition++] = ((unsigned char)(value  & 0xFF)); 
    }
    void DataBufferedOutputStream::writeLong(long value)
    {
       makeSureCapacity(mPosition + 4);        
        mData[mPosition++] = ((unsigned char)(value >> 24)  & 0xFF); 
        mData[mPosition++] = ((unsigned char)(value >> 16)  & 0xFF); 
        mData[mPosition++] = ((unsigned char)(value >> 8)  & 0xFF); 
        mData[mPosition++] = ((unsigned char)(value  & 0xFF)); 
    }
    void DataBufferedOutputStream::writeFloat(float value)
    {
        
        makeSureCapacity(mPosition + sizeof(float));        
        memcpy(mData + mPosition, &value, sizeof(float));
        mPosition += sizeof(float);
    }
    void DataBufferedOutputStream::writeDouble(double value)
    {
       makeSureCapacity(mPosition + sizeof(double));        
        memcpy(mData + mPosition, &value, sizeof(double));
        mPosition += sizeof(double);
    }
    void DataBufferedOutputStream::writeUTF8(const char* string)
    {        
        int length = strlen(string);
        makeSureCapacity(mPosition + length + 2);
        writeUInt16(length);
        memcpy(mData + mPosition, string, length);
        
        mPosition += length;

		        
    }
    
    void DataBufferedOutputStream::writeUTF8Line(const char* string, int eol)
    {        
        int length = strlen(string);
        makeSureCapacity(mPosition + length + 2);        
        memcpy(mData + mPosition, string, length);        
        mPosition += length;
        writeEOL(eol);
                
    }
    void DataBufferedOutputStream::writeBoolean(bool value)
    {
        makeSureCapacity(mPosition + 1);
        mData[mPosition++] = value?0xFF:0;

    }
    
    void DataBufferedOutputStream::writeByteArray(ByteArray *data)
    {
        ASSERT(data != NULL, "data cannot null");
        makeSureCapacity(mPosition + data->getLength());
        memcpy(mData + mPosition, data->mBuffer, data->getLength());
        mPosition += data->getLength();        
    }
    void DataBufferedOutputStream::writeByteArray(ByteArray *data, unsigned int start, unsigned int length)
    {
        ASSERT(data != NULL, "data cannot null");
        ASSERT(length > 0, "length cannot equal 0");
        ASSERT(start >= 0, "length is lesser 0");
        ASSERT(start + length <= data->getLength(), "data not in range");        

        makeSureCapacity(mPosition + length);
        memcpy(mData + mPosition, data->mBuffer + start, length);
        mPosition += length;
    }
    void DataBufferedOutputStream::flush()
    {
        
    }
    
    ByteArray* DataBufferedOutputStream::toByteArray()
    {
		return new ByteArray(mData, getLength());
    }

    DataBufferedInputStream::DataBufferedInputStream(ByteArray* data, bool autoRelease)
    {
        ASSERT(data != NULL, "Data cannot null");
        mData = data;
        mPosition = 0;
		mAutoRelease = autoRelease;
    }
	DataBufferedInputStream::~DataBufferedInputStream()
	{
		if (mAutoRelease && mData)
			delete mData;
	}
    int DataBufferedInputStream::readByte()
    {
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");
        return mData->mBuffer[mPosition++];
    }
    int DataBufferedInputStream::readSByte()
    {
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");        
        return (char)mData->mBuffer[mPosition++];
    }
    int DataBufferedInputStream::readInt32()
    {
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");        
        int val0 = mData->mBuffer[mPosition++];
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");        
        int val1 = mData->mBuffer[mPosition++];
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");                
        int val2 = mData->mBuffer[mPosition++];
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");                
        int val3 = mData->mBuffer[mPosition++];
        
        return (val0 << 24) | (val1 << 16) | (val2 << 8) | val3;
        
    }
    unsigned int DataBufferedInputStream::readUInt32()
    {
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");        
        int val0 = mData->mBuffer[mPosition++];
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");        
        int val1 = mData->mBuffer[mPosition++];
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");                
        int val2 = mData->mBuffer[mPosition++];
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");                
        int val3 = mData->mBuffer[mPosition++];
        
        return (unsigned int)((val0 << 24) | (val1 << 16) | (val2 << 8) | val3);

    }
    int DataBufferedInputStream::readUByte()
    {
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");
        return mData->mBuffer[mPosition++];
    }
    int DataBufferedInputStream::readInt16()
    {
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");          
        int val0 = mData->mBuffer[mPosition++];
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");                
        int val1 = mData->mBuffer[mPosition++];
        
        return (short)((val0 << 8) | val1);

    }
    int DataBufferedInputStream::readUInt16()
    {
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");          
        int val0 = mData->mBuffer[mPosition++];
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");                
        int val1 = mData->mBuffer[mPosition++];
        
        return (unsigned short)((val0 << 8) | val1);

    }
    float DataBufferedInputStream::readFloat()
    {
        ASSERT(mPosition + sizeof(float) <= mData->getLength(), "Cannot read float!");          
        float ret;
        memcpy(&ret, mData + mPosition, sizeof(float));
        mPosition += sizeof(float);
		return ret;
    }
    double DataBufferedInputStream::readDouble()
    {
        ASSERT(mPosition + sizeof(double) <= mData->getLength(), "Cannot read double!");          
        double ret;
        memcpy(&ret, mData + mPosition, sizeof(double));
        mPosition += sizeof(double);        
		return ret;
    }
    long DataBufferedInputStream::readLong()
    {
        return readInt32();
    }
    const char* DataBufferedInputStream::readUTF8()
    {
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");
        int i = mPosition;
        int strLength = readUInt16();
        int length = mData->getLength() - mPosition;

        ASSERT(length < strLength, "Not enough data!");
                
        char* ret = (char*)malloc(strLength + 1);
        memcpy(ret, mData->mBuffer + mPosition, strLength);
        mPosition += strLength;
        ret[strLength] = '\0';
        
        cocos2d::CCString *rets = cocos2d::CCString::create(ret);
        free(ret);
        return rets->getCString();
    }
    const char* DataBufferedInputStream::readUTF8Line(int eol)
    {
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");
        int i = mPosition;
        int end = i;
        for (; i < mData->getLength(); i++) {
            
            if (eol == _CR && mData->mBuffer[i] == 0x0D) {
                end = i;
                break;
            } else if (eol == _LF && mData->mBuffer[i] == 0x0A) {
                end = i;
                break;
            } else if (eol == _CR_LF && i + 1 < mData->getLength()  && mData->mBuffer[i] == 0x0D && mData->mBuffer[i + 1] == 0x0A)
            {
                end = i;
                i++;
                break;
            } else if (eol == _LF_CR && i + 1 < mData->getLength()  && mData->mBuffer[i] == 0x0A && mData->mBuffer[i + 1] == 0x0D)
            {
                end = i;
                i++;
                break;
            }
        }

        int strLength = end - mPosition;
        char* ret = (char*)malloc(strLength + 1);
        memcpy(ret, mData->mBuffer + mPosition, strLength);
        
        ret[strLength] = '\0';
        
        cocos2d::CCString *rets = cocos2d::CCString::create(ret);
        free(ret);
        mPosition = i + 1;
        return rets->getCString();
    }
    bool DataBufferedInputStream::readBoolean()
    {
        ASSERT(mPosition < mData->getLength(), "Cannot read any more!");
        return mData->mBuffer[mPosition++]?true:false;
    }
    int DataBufferedInputStream::readByteArray(ByteArray *data)
    {
        //ASSERT(mPosition + data->getLength() <= mData->getLength(), "Data too large!");
		unsigned int avail = mData->getLength() - mPosition;

		if (avail >= data->getLength())
		{
			memcpy(data->mBuffer, mData->mBuffer + mPosition, data->getLength());
			mPosition += data->getLength();
			return data->getLength();
		} else if (avail > 0)
		{			
			memcpy(data->mBuffer, mData->mBuffer + mPosition, avail);
			mPosition += avail;
			return avail;
		}
        return 0;
    }
    int DataBufferedInputStream::readByteArray(ByteArray *data, unsigned int start, unsigned int length)
    {
		ASSERT(data != NULL, "data cannot null!");
        ASSERT(start >= 0, "start cannot less than 0");
		ASSERT(start < data->getLength(), "start must be lesser ByteArray's length");
        ASSERT(length >= 0, "length cannot less than 0");

        //ASSERT(start + length <= data->getLength(), "data not in range");
        //ASSERT(mPosition + length <= mData->getLength(), "Data too large!");
        
		unsigned int avail = mData->getLength() - mPosition;
		if (avail >= length)
		{
			memcpy(data->mBuffer + start, mData->mBuffer + mPosition, length);
			mPosition += length;
			return length;
		} else if (avail > 0)
		{
			memcpy(data->mBuffer + start, mData->mBuffer + mPosition, avail);
			mPosition += avail;
			return avail;
		}

		return 0;

    }
	bool DataBufferedInputStream::readByteArrayFully(ByteArray *data, unsigned int start, unsigned int length)
	{
		ASSERT(data != NULL, "data cannot null!");
		ASSERT(start >= 0, "start cannot less than 0");
		ASSERT(start < data->getLength(), "start must be lesser ByteArray's length");
        ASSERT(length >= 0, "length cannot less than 0");

        //ASSERT(start + length <= data->getLength(), "data not in range");
        //ASSERT(mPosition + length <= mData->getLength(), "Data too large!");
        
		unsigned int avail = mData->getLength() - mPosition;
		if (avail >= length)
		{
			memcpy(data->mBuffer + start, mData->mBuffer + mPosition, length);
			mPosition += length;
			return true;
		} 

		return false;
	}
    void DataBufferedInputStream::skip(unsigned int bytes)
    {
        ASSERT(bytes >= 0, "bytes less than 0");
        ASSERT(mPosition + bytes <= mData->getLength(), "bytes too lager");
        mPosition += bytes;
    }
    
}