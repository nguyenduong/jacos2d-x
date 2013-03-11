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

#include "libHashTable.h"
#include "stdlib.h"
#include "string.h"

#define MAX_ITEMS 3169

typedef struct Node_
{
    unsigned int key;
    void* value;
    Node_ * next;
} Node;

libHashTable::libHashTable()
{
    mTable = new void*[MAX_ITEMS];        
    memset(mTable, 0, MAX_ITEMS * sizeof(void*));
}

void libHashTable::setValue(unsigned int key, const void *value)
{
    Node *node = new Node;
    node->key = key;
//    node->value = value;
    memcpy(&node->value, &value, sizeof(void*));
    node->next = (Node*)mTable[key % MAX_ITEMS];
    mTable[key % MAX_ITEMS] = node;
}
void* libHashTable::getValue(unsigned int key)
{
    Node* node = (Node*)mTable[key % MAX_ITEMS];
    while (node && node->key != key)
    {
        node = node->next;        
    }
    
    if (node)
        return node->value;
    return NULL;
}

libHashTable::~libHashTable()
{
    for (int i = 0; i < MAX_ITEMS; i++)
    {
        if (mTable[i])
        {
            Node* node = (Node*)mTable[i];
            
            do 
            {
                Node* next = node->next;
                delete node;
                node = next;
            } while (node);
        }
    }
}



