#ifndef VECTOR_H_INCLUDED
#define VECTOR_H_INCLUDED


///////////////////////////////////////////////////////////////////////////////////////////////////
// libVector

//
// A simple vector class that emulates that of java.util.libVector.
///////////////////////////////////////////////////////////////////////////////////////////////////

template <class T>
class libVector
{
private:
    enum
    {
        // The default number of elements in storage.
        INITIAL_CAPACITY = 1,

        // The default capacity increment.
        CAPACITY_INCREMENT = 16
    };

private:
    // The number of elements we currently have.
    short mNumElements;

    // The current capacity.
    short mCapacity;
    // Storage for the vector elements.
    T *mElements;

public:
    // Construct an empty vector.
    libVector();

    // Construct an empty vector with the specified initial capacity.
    libVector(int aInitialCapacity);

    // Construct an empty vector with the specified initial capacity and capacity increment.
    libVector(int aInitialCapacity, int aCapacityIncrement);

    // Destructor.
    virtual ~libVector();

public:
    // Add an element to the end of the vector.
    inline void addElement(T aElement);

	void push(T aElement);

    // Return the current capacity (not number of elements) of the vector.
    inline int capacity() const;

    // Tests if the specified object is contained in this vector.
    inline bool contains(T aElement) const;

    // Return the element at this zero-based index.
    inline T elementAt(int aIndex) const;

	T pop();
	T peek() const;

	inline T& operator[](int aIndex);

	libVector<T>& operator=(libVector<T> &src);

    // Increases the capacity of this vector, if necessary.
    inline void ensureCapacity(int aCapacity);

    // Return the first element.
    inline T firstElement() const;

    // Search for the first occurence of this element.  Return the index of it or -1 if not found.
    inline int indexOf(T aElement) const;

    // Search for the first occurence of this element starting from this index.  Return the index
    // or -1 if not found.
    inline int indexOf(T aElement, int aStartIndex) const;

    // Insert an element at this index.
    inline void insertElementAt(T aElement, int aIndex);

    // Tests if this vector has no elements.
    inline bool isEmpty() const;

    // Return the last element of this vector.
    inline T lastElement() const;

    // Return the index of the last occurence of this element in the vector.  Return -1 if not found.
    inline int lastIndexOf(T aElement) const;

    // Return the index of the last occurence of this element starting at this index.  Return
    // -1 if not found.
    inline int lastIndexOf(T aElement, int aStartIndex) const;

    // Remove all elements and set the size to zero.
    inline void removeAllElements();
	
	inline void deleteAllElements();

    // Remove the first occurence of the arguement from the vector.  Return true if the arguement
    // was part of the vector.
    inline bool removeElement(T aElement);

    // Remove the element at the specified zero-based index.
    inline void removeElementAt(int aIndex);

    // Set the element at the specified index.
    inline void setElementAt(T aElement, int aIndex);

    // Set the size of the vector.  If this is greater than the current size, null elements will
    // be added.  If this is smaller, elements will be truncated.
    inline void setSize(int aNewSize);

    // Return the number of elements in this vector.
    inline int size() const;

	inline bool compare(T el1, T el2) const;
};

template <class T>
libVector<T>::libVector()
{
    mCapacity = 10;
    mElements = new T[mCapacity];//(T *)MALLOC(mCapacity * sizeof(T));
    mNumElements = 0;
}


template <class T>
libVector<T>::libVector(int aInitialCapacity)
{
    mCapacity = aInitialCapacity;
	mElements = new T[mCapacity];//(T *)MALLOC(mCapacity * sizeof(T));
    mNumElements = 0;
}


template <class T>
libVector<T>::libVector(int aInitialCapacity, int aCapacityIncrement)
{
    mCapacity = aInitialCapacity;
    mElements = new T[mCapacity];//(T *)MALLOC(mCapacity * sizeof(T));
    mNumElements = 0;
}


template <class T>
libVector<T>::~libVector()
{
	if (mElements)
		delete[] mElements;
    //FREE(mElements);
}


template <class T>
inline void libVector<T>::addElement(T aElement)
{
    ensureCapacity(mNumElements + 1);

    mElements[mNumElements++] = aElement;
}

template <class T>
void libVector<T>::push(T aElement)
{
	addElement(aElement);
}


template <class T>
inline int libVector<T>::capacity() const
{
    return mCapacity;
}


template <class T>
inline bool libVector<T>::contains(T aElement) const
{
    for (int i = 0; i < mNumElements; i++)
    {
        if (compare(aElement, mElements[i]))
        {
            return true;
        }
    }

    return false;
}


template <class T>
inline T libVector<T>::elementAt(int aIndex) const
{
    return mElements[aIndex];
}

template <class T>
T libVector<T>::pop()
{
	T item = mElements[size()-1];

	removeElementAt(size()-1);

	return item;
}

template <class T>
T libVector<T>::peek() const
{
	return mElements[size()-1];
}

template <class T>
inline T& libVector<T>::operator[](int aIndex)
{
	return mElements[aIndex];
}

template <class T> 
libVector<T>& libVector<T>::operator=(libVector<T> &src)
{
	ensureCapacity(src.mCapacity);
	for (int i = 0; i < src.mNumElements; i++)
		mElements[i] = src.mElements[i];

	mNumElements = src.mNumElements;

	return *this;
}


template <class T>
inline void libVector<T>::ensureCapacity(int aCapacity)
{
    if (aCapacity > mCapacity)
    {
        //mElements = (T *)REALLOC(mElements, mCapacity * sizeof(T));
		T *aElements = new T[aCapacity];
		for (int i = 0; i < mCapacity; i++)
		{
			aElements[i] = mElements[i];
		}

        mCapacity = aCapacity;

		if (mElements != 0)
			delete[] mElements;

		mElements = aElements;
    }
}


template <class T>
inline T libVector<T>::firstElement() const
{
    return mElements[0];
}


template <class T>
inline int libVector<T>::indexOf(T aElement) const
{
    for (int i = 0; i < mNumElements; i++)
    {
        if (compare(aElement, mElements[i]))
        {
            return i;
        }
    }

    return -1;
}


template <class T>
inline int libVector<T>::indexOf(T aElement, int aStartIndex) const
{
    for (int i = aStartIndex; i < mNumElements; i++)
    {
        if (compare(aElement, mElements[i]))
        {
            return i;
        }
    }

    return -1;
}


template <class T>
inline void libVector<T>::insertElementAt(T aElement, int aIndex)
{
    // See if we're adding to the end of the vector.
    if (aIndex == mNumElements)
    {
        addElement(aElement);
        return;
    }

    ensureCapacity(mNumElements + 1);

    // Shift down all elements from the specified index.
    for (int i = mNumElements - 1; i >= aIndex; i--)
    {
        mElements[i + 1] = mElements[i];
    }

    // Replace the element at the index.
    mElements[aIndex] = aElement;

    // Increase the number of elements.
    mNumElements++;
}


template <class T>
inline bool libVector<T>::isEmpty() const
{
    return (mNumElements == 0);
}


template <class T>
inline T libVector<T>::lastElement() const
{
    return mElements[mNumElements - 1];
}


template <class T>
inline int libVector<T>::lastIndexOf(T aElement) const
{
    for (int i = mNumElements - 1; i >= 0; i--)
    {
        if (compare(aElement, mElements[i]))
        {
            return i;
        }
    }

    return -1;
}


template <class T>
inline int libVector<T>::lastIndexOf(T aElement, int aStartIndex) const
{
    for (int i = aStartIndex; i >= 0; i--)
    {
        if (compare(aElement, mElements[i]))
        {
            return i;
        }
    }

    return -1;
}

template <class T>
inline void libVector<T>::removeAllElements()
{
	/*
	if (mElements)
		delete[]mElements;

	mElements = 0;

	mCapacity = 0;
	*/
    mNumElements = 0;
}

template <class T>
inline void libVector<T>::deleteAllElements()
{
	for (int i = 0; i < size(); i++)
	{
		delete mElements[i];
	}
	
	mNumElements = 0;
}

template <class T>
inline bool libVector<T>::removeElement(T aElement)
{
    int index = indexOf(aElement);
    if (index == -1)
    {
        return false;
    }

    removeElementAt(index);

    return true;
}


template <class T>
inline void libVector<T>::removeElementAt(int aIndex)
{
    // Shift all elements above this index down one.
    for (int i = aIndex + 1; i < mNumElements; i++)
    {
        mElements[i - 1] = mElements[i];
    }

    // Decrement the number of elements.
    mNumElements--;
}


template <class T>
inline void libVector<T>::setElementAt(T aElement, int aIndex)
{
    // Replace the element.
    mElements[aIndex] = aElement;
}


template <class T>
inline void libVector<T>::setSize(int aNewSize)
{
    // See if we need to add or truncate.
    if (aNewSize > mNumElements)
    {
        // Add null elements.
        ensureCapacity(aNewSize);

        for (int i = mNumElements; i < aNewSize - 1; i++)
        {
            mElements[i] = (T)0;
        }

        // Update the number of elements.
        mNumElements = aNewSize;
    }
    else if (aNewSize < mNumElements)
    {
        // Truncate the elements.
        mNumElements = aNewSize;
    }
}


template <class T>
inline int libVector<T>::size() const
{
    return mNumElements;
}

template <class T>
inline bool libVector<T>::compare(T el1, T el2) const
{	
	return el1 == el2;
}

typedef libVector<void*> Vector;
typedef libVector<int> VectorINT;

#endif
