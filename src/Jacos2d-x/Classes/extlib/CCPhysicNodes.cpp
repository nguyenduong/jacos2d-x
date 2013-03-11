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

#include "CCPhysicNodes.h"
using namespace box2d;
namespace cocos2d {

CCPhysicSprite::CCPhysicSprite(const char* filename, float ptm_ratio, box2d::b2World* world, float friction, float density, float restitution):
CCSprite(),
m_PTM_RATIO(ptm_ratio),
m_bIgnoreBodyRotation(false)
{    
    if (initWithFile(filename)) {
        b2BodyDef bodyDef;
        bodyDef.type = b2_dynamicBody;
        bodyDef.setPosition(0, 0);
        m_physicBody = world->CreateBody(&bodyDef);

        b2PolygonShape shape;
        CCSize size = getTextureRect().size;
        shape.SetAsBox(size.width/ 2 / m_PTM_RATIO, size.height / 2 / m_PTM_RATIO);

        b2FixtureDef fixtureDef;
        fixtureDef.density = density;
        fixtureDef.friction = friction;
        fixtureDef.restitution = restitution;
        fixtureDef.shape = &shape;
        m_physicBody->CreateFixture(&fixtureDef);
    }
}
CCPhysicSprite::CCPhysicSprite(CCTexture2D* texture, float ptm_ratio, box2d::b2World* world, float friction, float density, float restitution):
CCSprite(),
m_PTM_RATIO(ptm_ratio),
m_bIgnoreBodyRotation(false)
{    
    if (initWithTexture(texture)) {
        b2BodyDef bodyDef;
        bodyDef.type = b2_dynamicBody;
        bodyDef.setPosition(0, 0);

        m_physicBody = world->CreateBody(&bodyDef);

        b2PolygonShape shape;
        CCSize size = getTextureRect().size;
        shape.SetAsBox(size.width / m_PTM_RATIO, size.height / m_PTM_RATIO);

        b2FixtureDef fixtureDef;
        fixtureDef.density = density;
        fixtureDef.friction = friction;
        fixtureDef.restitution = restitution;
        fixtureDef.shape = &shape;
        m_physicBody->CreateFixture(&fixtureDef);
    }
}
void CCPhysicSprite::createBody()
{
}
CCPhysicSprite::CCPhysicSprite(box2d::b2Body* body): 
    CCSprite(), 
    m_PTM_RATIO(1),
    m_bIgnoreBodyRotation(false),
    m_physicBody(body)
{
    CCAssert(body, "Body is null!!");
}

CCAffineTransform CCPhysicSprite::nodeToParentTransform(void)
{
    //return CCSprite::nodeToParentTransform();
    
    b2Vec2 pos  = m_physicBody->GetPosition();
    
    float x = pos.x * m_PTM_RATIO;
    float y = pos.y * m_PTM_RATIO;

    if ( isIgnoreAnchorPointForPosition() ) {
        x += m_obAnchorPointInPoints.x;
        y += m_obAnchorPointInPoints.y;
    }

    // Make matrix
    float radians = m_physicBody->GetAngle();
    float c = cosf(radians);
    float s = sinf(radians);

    if( ! m_obAnchorPointInPoints.equals(CCPointZero) ){
        x += c*-m_obAnchorPointInPoints.x + -s*-m_obAnchorPointInPoints.y;
        y += s*-m_obAnchorPointInPoints.x + c*-m_obAnchorPointInPoints.y;
    }

    // Rot, Translate Matrix
    m_sTransform = CCAffineTransformMake( c,  s,
        -s,    c,
        x,    y );

    return m_sTransform;
}
void CCPhysicSprite::visit(void) {				
    //printf("Visit---------");
    /*
    box2d::b2Vec2 pos  = m_physicBody->GetPosition(); 
    float x = pos.x * m_PTM_RATIO;		
    float y = pos.y * m_PTM_RATIO;		
    if ( isIgnoreAnchorPointForPosition() ) { 
        x += m_obAnchorPointInPoints.x;			
        y += m_obAnchorPointInPoints.y;			
    }											
    this->setPosition(x, y);						
    this->setRotation(m_physicBody->GetAngle());	
    */
    CCSprite::visit();
}
bool CCPhysicSprite::isIgnoreBodyRotation() const
{
    return m_bIgnoreBodyRotation;
}
void CCPhysicSprite::setMass(float mass)
{    
    box2d::b2MassData massData;
    m_physicBody->GetMassData(&massData);
    massData.mass = mass;
    m_physicBody->SetMassData(&massData);
}
void CCPhysicSprite::setIgnoreBodyRotation(bool bIgnoreBodyRotation)
{
    m_bIgnoreBodyRotation = bIgnoreBodyRotation;
}
CCPoint& CCPhysicSprite::getPosition()
{
    b2Vec2 pos = m_physicBody->GetPosition();
    
    float x = pos.x * m_PTM_RATIO;
    float y = pos.y * m_PTM_RATIO;
    m_physicPosition = ccp(x,y);
    return m_physicPosition;
}

void CCPhysicSprite::setPosition(const CCPoint &pos)
{
    float angle = m_physicBody->GetAngle();
    m_physicBody->SetTransform(b2Vec2(pos.x / m_PTM_RATIO, pos.y / m_PTM_RATIO), angle);
}

float CCPhysicSprite::getRotation()
{
    //return CC_RADIANS_TO_DEGREES(m_physicBody->GetAngle());
    
    return (m_bIgnoreBodyRotation ? CCSprite::getRotation() :
            CC_RADIANS_TO_DEGREES(m_physicBody->GetAngle()));
}

void CCPhysicSprite::setRotation(float fRotation)
{
    
    if (m_bIgnoreBodyRotation)
    {
        CCSprite::setRotation(fRotation);
    }
    else
    {
        b2Vec2 p = m_physicBody->GetPosition();
        float radians = CC_DEGREES_TO_RADIANS(fRotation);
        m_physicBody->SetTransform(p, radians);
    }
}
/*
void CCPhysicNode::draw()
{
	b2Vec2 pos  = m_physicBody->GetPosition();

    float x = pos.x * m_PTM_RATIO;
    float y = pos.y * m_PTM_RATIO;

    if ( isIgnoreAnchorPointForPosition() ) {
        x += m_tAnchorPointInPoints.x;
        y += m_tAnchorPointInPoints.y;
    }
	
	this->setPosition(x, y);
	this->setRotation(m_physicBody->GetAngle());

	CCNode::draw();
}

void CCPhysicSprite::draw()
{
	b2Vec2 pos  = m_physicBody->GetPosition();

    float x = pos.x * m_PTM_RATIO;
    float y = pos.y * m_PTM_RATIO;

    if ( isIgnoreAnchorPointForPosition() ) {
        x += m_tAnchorPointInPoints.x;
        y += m_tAnchorPointInPoints.y;
    }
	
	this->setPosition(ccp(x, y));
	this->setRotation(m_physicBody->GetAngle());

	CCSprite::draw();
}*/
}