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

#include "DataQueue.h"


DataQueue::DataQueue()
{
    mFirstItem = NULL;
    mLastItem = NULL;
    mDataLength = 0;
	mLocalPosition = 0;
}
DataQueue::~DataQueue()
{
    while (mFirstItem)
    {
        ItemQueue *item = mFirstItem;
        mFirstItem = mFirstItem->next;
        free(item->data);
        delete item;
    }
}
void DataQueue::addItem(char* data, int length)
{
    
    ItemQueue *item = new ItemQueue;

	item->data = (char*)malloc(length);
	memcpy(item->data, data, length);
    item->length = length;
    item->next = NULL;    
    
    if (mFirstItem == NULL)
    {
        mFirstItem = item;
        mLastItem = mFirstItem;
    } else {
        mLastItem->next = item;
        mLastItem = item;
    }
    
    mDataLength += length;
}

char* DataQueue::nextData(int* length)
{
    if (mFirstItem == NULL)
    {
        *length = 0;
        return NULL;
    }
    
    char* data = mFirstItem->data;
    ItemQueue * item = mFirstItem;
    mFirstItem = mFirstItem->next;
    delete item;
    
    return data;
}