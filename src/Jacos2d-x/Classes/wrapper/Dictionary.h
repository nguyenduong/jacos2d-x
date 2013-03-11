// Dictionary.h: interface/implementation for the Dictionary class.
//
// Dictionary is a templatized class which is a direct copy of
// the VBScript Scripting.Dictionary object.  All methods
// and properties are provided with a syntax that is either
// identical to the VBS implementation, or with only trivial
// differences (mainly, C++ member functions require parentheses
// where VBscript methods don't)
//
// Comparison to VBS given in sample at end of header file.
// For most things, VBS docs can be used.
// 
// Copyright 1998, James M. Curran, All Rights reserved.
//  May be used freely, provided copyright noticed remains.
//  May not be sold in source code form.
//
// email: JamesCurran@CompuServe.Com
//   WWW: http://www.NJTheater.Com/JamesCurran
//////////////////////////////////////////////////////////////////////

#if !defined(AFX_DICTIONARY_H__A2B46E03_6E48_11D2_A434_00805F355F6A__INCLUDED_)
#define AFX_DICTIONARY_H__A2B46E03_6E48_11D2_A434_00805F355F6A__INCLUDED_

#if _MSC_VER >= 1000
#pragma once
#endif // _MSC_VER >= 1000

#include <map>
#include "libVector.h"

template<typename KEY, typename ITEM>
class Dictionary 
{
private:
	libVector<KEY> mKeysList;
	libVector<ITEM> mItemsList;
public:
	Dictionary() {};
	virtual ~Dictionary(){};
	
	void	Add(KEY k, ITEM i)
	{	
		mKeysList.addElement(k);
		mItemsList.addElement(i);
	}

	bool Exists(KEY k) const 
	{	
		return mKeysList.indexOf(k) >= 0;
	}

	int Count() const
	{	return mKeysList.size();	}

	void Remove(KEY k)
	{	
		int index = mKeysList.indexOf(k);
		if (index >= 0)
		{
			mKeysList.removeElementAt(index);
			mItemsList.removeElementAt(index);
		}
	}

	void RemoveAll()
	{	
		mKeysList.removeAllElements();
		mItemsList.removeAllElements();
	}


	ITEM	Item(KEY k)
	{
		int index = mKeysList.indexOf(k);
		if (index >= 0)
		{
			return mItemsList[index];			
		}
	}

	ITEM operator[](KEY k)
	{	return Item(k);		}

	ITEM operator()(KEY k)
	{	return Item(k);		}


};

// This doesn't work... When I figure out why, I'll reinstate it.
/*
template<typename KEY, typename ITEM>
inline std::ostream& operator<<(std::ostream& os, const Dictionary<KEY, ITEM>::DIH& dih)
{	os << (*dih.iter).second;
	return(os);
}*/

/// The remainder is a same sample code which demonstrates the similarity 
// between the syntaxes for the VBS Dictionary object & this Dictionary template
//

#if defined(DICTIONARY_TEST)
#include <vector>
#include <iostream>
#include <string>

#pragma warning(disable:4786)

using std::vector;
using std::string;
using std::cout;
using std::endl;

int dictionary_test()
{
	// VBScript sample code from Add Method
	// Dim d
	// Set d = CreateObject("Scripting.Dictionary")
	// d.Add "a", "Athens"
	// d.Add "b", "Belgarde"
	// d.Add "c", "Cairo"

	Dictionary<string, string>	d;

	d.Add("a", "Athens");
	d.Add("b", "Belgarde");
	d.Add("c", "Cairo");


	cout << "Keys:" << endl;
	// VBScript sample code from both Count property & Keys method
	// dim a
	// a = d.Keys
	// For i = 0 to d.Count -1
	//	 s = s & a(i) & "<BR>"
	// Next
	vector<string>	a1;
	string			s;
	a1 = d.Keys();
	for (int i = 0; i < d.Count(); i++)
		s = s + a1[i] + '\n';

	cout << s ;
	
	cout << endl ;
	cout << "Items:" << endl;
	// VBScript sample code from Items  method
	// dim a
	// a = d.Items
	// For i = 0 to d.Count -1
	//	 s = s & a(i) & "<BR>"
	// Next
	vector<string>	a2 = d.Items();
	for (i = 0; i < d.Count(); i++)
		cout << a2[i] << endl;	

	cout << endl ;

	// VBScript sample code from Exists method
	//	If d.Exists("c") Then    
	//		msg = "Specified key exists."  
	//	Else
	//		msg = "Specified key doesn't exist."  
	//	End If

	if (d.Exists("c"))
		cout << "Key: 'c' Exists" << endl;
	else
		cout << "Key: 'c' does not exist" << endl;

	// VBScript sample code from Remove method
	// a = d.Remove("b")       'Remove second pair
	// (docs never explain the return value of Remove method)

	d.Remove("b");

	// VBScript sample code from Key property
	//	d.Key("c") = "d"        'Set key for "c" to "d".
	d.Key("c") = "d";

	string dd = d.Item("d");
	cout << endl ;
	cout << "Item for new key 'd': " << dd << endl;

	cout << endl ;
	cout << "# Items in dict: " << d.Count() << endl;

	// VBScript sample code from RemoveAll method
	// a = d.RemoveAll         'Clear the dictionary
	// (docs never explain the return value of RemoveAll method)
	d.RemoveAll();

	cout << endl ;
	cout << "# Items in dict: " << d.Count() << endl;

	return 1;
}
#endif

#endif // !defined(AFX_DICTIONARY_H__A2B46E03_6E48_11D2_A434_00805F355F6A__INCLUDED_)
