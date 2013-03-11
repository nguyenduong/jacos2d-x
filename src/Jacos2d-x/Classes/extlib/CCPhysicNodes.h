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

#ifndef __CCPHYSICNODES_H
#define __CCPHYSICNODES_H

#include "cocos2d.h"
#include "Box2D.h"
namespace cocos2d {

class PhysicNodeProtocol
{
public:
		PhysicNodeProtocol():m_PTM_RATIO(1){};
		void setPhysicBody(box2d::b2Body *physicBody) {
			m_physicBody = physicBody;
		}
		box2d::b2Body* getPhysicBody() {
			return m_physicBody;
		}
		inline void setPTMRatio(float ratio) {m_PTM_RATIO = ratio;}
		inline float getPTMRatio() {return m_PTM_RATIO;}
protected:
		box2d::b2Body *m_physicBody;
		float          m_PTM_RATIO;
};

#define PHYSIC_CLASS_DEF(xxx, yyy) \
	class xxx : public yyy, public PhysicNodeProtocol \
	{									\
	public:								\
		xxx():yyy(), m_PTM_RATIO(1){};	\
		void setPhysicBody(box2d::b2Body *physicBody) {	\
			m_physicBody = physicBody;			\
		}									\
		box2d::b2Body* getPhysicBody() {		\
			return m_physicBody;			\
		}							\
		inline void setPTMRatio(float ratio) {m_PTM_RATIO = ratio;}	\
		inline float getPTMRatio() {return m_PTM_RATIO;}		\
		virtual void draw() {				\
			box2d::b2Vec2 pos  = m_physicBody->GetPosition(); \
			float x = pos.x * m_PTM_RATIO;		\
			float y = pos.y * m_PTM_RATIO;		\
			if ( isIgnoreAnchorPointForPosition() ) { \
				x += m_obAnchorPointInPoints.x;			\
				y += m_obAnchorPointInPoints.y;			\
			}											\
			this->setPosition(x, y);						\
			this->setRotation(m_physicBody->GetAngle());	\
			yyy::draw();									\
		}										\
	protected:									\
		box2d::b2Body *m_physicBody;			\
		float          m_PTM_RATIO;				\
	};

PHYSIC_CLASS_DEF(CCPhysicNode, CCNode)
//PHYSIC_CLASS_DEF(CCPhysicSprite, CCSprite)
PHYSIC_CLASS_DEF(CCPhysicSpriteBatchNode, CCSpriteBatchNode)

	class CCPhysicSprite : public CCSprite
	{									
	public:			
		CCPhysicSprite(box2d::b2Body* body);
		CCPhysicSprite(const char* filename, float ptm_ratio, box2d::b2World* world, float friction, float density, float restitution);
        CCPhysicSprite(CCTexture2D* texture, float ptm_ratio, box2d::b2World* world, float friction, float density, float restitution);
		box2d::b2Body* getPhysicBody() {
			return m_physicBody;
		}
		virtual bool isDirty(void) {return true;};
		inline void setPTMRatio(float ratio) {m_PTM_RATIO = ratio;}
		inline float getPTMRatio() {return m_PTM_RATIO;}
		virtual void visit(void);				
		virtual CCAffineTransform nodeToParentTransform(void);
        virtual CCPoint& getPosition();
        virtual void setPosition(const CCPoint &position);
        virtual float getRotation();
        virtual void setRotation(float fRotation);
        bool isIgnoreBodyRotation() const;
        void setIgnoreBodyRotation(bool bIgnoreBodyRotation);
        void setMass(float mass);
        void createBody();
	protected:

            void setPhysicBody(box2d::b2Body *physicBody) {
			    m_physicBody = physicBody;
		    }
            bool    m_bIgnoreBodyRotation;
			box2d::b2Body *m_physicBody;
			float          m_PTM_RATIO;
            CCPoint        m_physicPosition;
	};
/*
class CCPhysicNode : public CCNode
{
public:
	CCPhysicNode() : CCNode(), m_PTM_RATIO(1) {};

	void setPhysicBody(box2d::b2Body *physicBody) {
		m_physicBody = physicBody;
	}
	box2d::b2Body* getPhysicBody() {
		return m_physicBody;
	}
	inline void setPTMRatio(float ratio) {m_PTM_RATIO = ratio;}
	inline float getPTMRatio() {return m_PTM_RATIO;}

	virtual void draw();
protected:
	box2d::b2Body *m_physicBody;
	float          m_PTM_RATIO;
};


class CCPhysicSprite : public CCSprite
{
public:
	CCPhysicSprite() : CCSprite(), m_PTM_RATIO(1) {};

	void setPhysicBody(box2d::b2Body *physicBody) {
		m_physicBody = physicBody;
	}
	box2d::b2Body* getPhysicBody() {
		return m_physicBody;
	}
	inline void setPTMRatio(float ratio) {m_PTM_RATIO = ratio;}
	inline float getPTMRatio() {return m_PTM_RATIO;}

	virtual void draw();
protected:
	box2d::b2Body *m_physicBody;
	float          m_PTM_RATIO;
};*/
}
#endif