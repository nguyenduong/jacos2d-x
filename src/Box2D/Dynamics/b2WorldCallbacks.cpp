/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

#include <Box2D/Dynamics/b2WorldCallbacks.h>
#include <Box2D/Dynamics/b2Fixture.h>

#include "Jacos2dxBase/wrapped_classes.h"
BEGIN_BOX2D_NSP
// Return true if contact calculations should be performed between these two shapes.
// If you implement your own collision filter you may want to build from this implementation.
bool b2ContactFilter::ShouldCollide(b2Fixture* fixtureA, b2Fixture* fixtureB)
{
	
	if (!mIsCalling && !this->getController().IsEmpty())
	{		
		v8::Local<v8::String> key = v8::String::New("ShouldCollide");
		if (this->getController()->Has(key)) {
			mIsCalling = true;
			v8::Handle<v8::Value> funcVal = this->getController()->Get(key);
			if (funcVal->IsFunction()) {
				v8::Local<v8::Function> func = v8::Function::Cast(*funcVal);
					v8::Handle<v8::Value> args[2] = {this->getJSCCallFunc()->assignJavaScriptObject(fixtureA, fixtureA, CLS_B2FIXTURE_ID, false),
					this->getJSCCallFunc()->assignJavaScriptObject(fixtureB, fixtureB, CLS_B2FIXTURE_ID, false),
				};
				v8::Handle<v8::Value> ret = getJSSystemHelper()->callJSFunc(func, this->getJSObjInstance(), 2, args);
				mIsCalling = false;
				if (ret->IsBoolean())
					return ret->ToBoolean()->BooleanValue();
				else return false;
			}
		}
	}
    const b2Filter& filterA = fixtureA->GetFilterData();
    const b2Filter& filterB = fixtureB->GetFilterData();

    if (filterA.groupIndex == filterB.groupIndex && filterA.groupIndex != 0)
    {
        return filterA.groupIndex > 0;
    }

    bool collide = (filterA.maskBits & filterB.categoryBits) != 0 && (filterA.categoryBits & filterB.maskBits) != 0;
    return collide;
}
END_BOX2D_NSP