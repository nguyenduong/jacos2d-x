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

#ifndef DATA_QUEUE_H
#define DATA_QUEUE_H
#include "stdlib.h"
#include "string.h"
//struct ItemQueue;
#include "JacosBaseObject.h"

typedef struct _ItemQueue
{
    char *data;
    int            length;
    _ItemQueue * next;
} ItemQueue;

class DataQueue
{
public:
    DataQueue();
    ~DataQueue();
    void addItem(char* data, int length);
    char* nextData(int* length);
    inline char readByte() {
        JSC_ThrowException(mDataLength > 0, "Cannot read any more!");
        
        char value = mFirstItem->data[mLocalPosition++];
        mDataLength--;
        if (mLocalPosition >= mFirstItem->length)
        {
            mLocalPosition = 0;
            ItemQueue *item = mFirstItem;
            mFirstItem = mFirstItem->next;
            free(item->data);
            delete item;
                
        }
        return value;                
    }
    inline void readBytes(char* data, int length)
    {
        JSC_ThrowException(length > 0, "length must be larger 0!");
        JSC_ThrowException(data != NULL, "Data must be not NULL!");
        JSC_ThrowException(length <= mDataLength, "Not enough data!");
        int len = length;
        
        while (len > 0)
        {
            int count = mFirstItem->length - mLocalPosition;
            if (count <= length)
            {
                memcpy(data, mFirstItem->data + mLocalPosition, count);
                ItemQueue *item = mFirstItem;
                mFirstItem = mFirstItem->next;
                free(item->data);
                delete item;
                data += count;
                mLocalPosition = 0;
                mDataLength -= count;
                len -= count;
            } else {
                memcpy(data, mFirstItem->data + mLocalPosition, length);
                mDataLength -= length;
                mLocalPosition += length;
                len -= length;
            }
            
        }
    }
    inline void skip(int length)
    {
        JSC_ThrowException(length > 0, "length must be larger 0!");
        JSC_ThrowException(length <= mDataLength, "Not enough data!");
        int len = length;
        
        while (len > 0)
        {
            int count = mFirstItem->length - mLocalPosition;
            if (count <= length)
            {
                ItemQueue *item = mFirstItem;
                mFirstItem = mFirstItem->next;
                free(item->data);
                delete item;
                mLocalPosition = 0;
                mDataLength -= count;
                len -= count;
            } else {
                mDataLength -= length;
                mLocalPosition += length;
                len -= length;
            }
            
        }
    }

    inline int getDataLength() {return mDataLength;};
private:
    
    int         mLocalPosition;
    ItemQueue * mFirstItem;
    ItemQueue * mLastItem;
    int         mDataLength;
};

#endif