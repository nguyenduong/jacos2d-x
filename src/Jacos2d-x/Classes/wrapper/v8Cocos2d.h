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

#ifndef V8_COCOS2D_H
#define V8_COCOS2D_H

int  tov8_jacos2dx_open ();

#include "Box2D.h"
#include "b2ContactSolver.h"
#include <Box2D/Dynamics/Contacts/b2PolygonContact.h>
#include <Box2D/Dynamics/Contacts/b2Contact.h>
#include <Box2D/Dynamics/Contacts/b2PolygonAndCircleContact.h>
#include <Box2D/Collision/Shapes/b2Shape.h>
#include <Box2D/Dynamics/Contacts/b2CircleContact.h>
#include <Box2D/Dynamics/Contacts/b2ChainAndCircleContact.h>
#include <Box2D/Dynamics/Contacts/b2ChainAndPolygonContact.h>
#include <Box2D/Dynamics/Contacts/b2EdgeAndCircleContact.h>
#include <Box2D/Dynamics/Contacts/b2EdgeAndPolygonContact.h>
#include <Box2D/Dynamics/Joints/b2MouseJoint.h>

#include <Box2D/Dynamics/b2Island.h>
#include <Box2D/Rope/b2Rope.h>

#include <CocosDenshion/Include/SimpleAudioEngine.h>

#include "cocos-ext.h"
#include "CCPhysicNodes.h"
#include "GLES-Render.h"

using namespace box2d;
using namespace CocosDenshion;
using namespace jacos2dx;

#endif