jacos2dx = {};
cocos2d = {};
cocos2d.extension = {};
box2d = {};
/**
 * @function startElement(name, atts) 
 * @param {String} name
 * @param {Object} atts 
*/
CCTMXMapInfo.prototype.startElement = function(name, atts){

};

/**
 * @function Set(points) 
 * @param {Array} points - b2Vec2 array
*/
b2PolygonShape.prototype.Set = function(points) {
};

/**
 * @function b2GetPointStates(points) 
 * @param {b2Manifold} manifold1
 * @param {b2Manifold} manifold2
 * @returns {Object} - {state1: [state, state,...], state2 : [state, state,...]}
*/
box2d.b2GetPointStates = function(manifold1, manifold2) {
	return {state1: [], state2 : []};
};

/**
 * @function alignItemsInColumns(rows) 
 * @param {Array} rows - unsigned int array
*/
CCMenu.prototype.alignItemsInColumns = function(rows) {
};

/**
 * @function alignItemsInRows(columns) 
 * @param {Array} columns - unsigned int array
*/
CCMenu.prototype.alignItemsInRows = function(columns) {
};

/**
 * @function createWithArray(items) 
 * @param {Array} items - CCMenuItem array
 * @returns {CCMenu}
*/
CCMenu.createWithArray = function(items) {
	return new CCMenu();
};

/**
 * @function createWithArray(items) 
 * @param {Object} target
 * @param {Function} selector
 * @param {Array} items - CCMenuItem array
 * @returns {CCMenuItemToggle}
*/
CCMenuItemToggle.createWithTarget = function(target, selector, items) {
	return new CCMenuItemToggle();
};
/**
 * @function initWithTarget(items) 
 * @param {Object} target
 * @param {Function} selector
 * @param {Array} items - CCMenuItem array
 * @returns {Boolean}
*/
CCMenuItemToggle.prototype.initWithTarget = function(target, selector, items) {
	return true;
};
/**
 * @constructor CCPointsList(points) 
 * @param {Array} points - CCPoint array
*/
function CCPointsList(points) {
	
};

/**
 * @function getTiles() 
 * @returns {Array}
*/
CCTMXLayer.prototype.getTiles = function() {
	return [];
};

/**
 * @function getTiles(tiles) 
 * @param {Array} tiles
*/
CCTMXLayer.prototype.setTiles = function(tiles) {

};

/**
 * @function create(actions) 
 * @param {Array} actions - Array of CCAction
 * @returns {CCSequence}
*/
CCSequence.create = function(actions) {
	
};/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2BlockAllocator() {};
b2BlockAllocator.prototype = new JacosBaseObject();
box2d.b2_chunkSize = 0;
box2d.b2_maxBlockSize = 1;
box2d.b2_blockSizes = 2;
box2d.b2_chunkArrayIncrement = 3;
/**
 * @super Object
 * @constructor 
*/
function b2BodyDef() {};
b2BodyDef.prototype = {};
/**
 * Property type
 * @type Number
*/
b2BodyDef.prototype.type = 0;
/**
 * Property position
 * @type b2Vec2
*/
b2BodyDef.prototype.position = new b2Vec2();
/**
 * Property angle
 * @type Number
*/
b2BodyDef.prototype.angle = 0;
/**
 * Property linearVelocity
 * @type b2Vec2
*/
b2BodyDef.prototype.linearVelocity = new b2Vec2();
/**
 * Property angularVelocity
 * @type Number
*/
b2BodyDef.prototype.angularVelocity = 0;
/**
 * Property linearDamping
 * @type Number
*/
b2BodyDef.prototype.linearDamping = 0;
/**
 * Property angularDamping
 * @type Number
*/
b2BodyDef.prototype.angularDamping = 0;
/**
 * Property allowSleep
 * @type Boolean
*/
b2BodyDef.prototype.allowSleep = true;
/**
 * Property awake
 * @type Boolean
*/
b2BodyDef.prototype.awake = true;
/**
 * Property fixedRotation
 * @type Boolean
*/
b2BodyDef.prototype.fixedRotation = true;
/**
 * Property bullet
 * @type Boolean
*/
b2BodyDef.prototype.bullet = true;
/**
 * Property active
 * @type Boolean
*/
b2BodyDef.prototype.active = true;
/**
 * Property jsc_userData
 * @type Object
*/
b2BodyDef.prototype.jsc_userData = new Object();
/**
 * Property inertiaScale
 * @type Number
*/
b2BodyDef.prototype.inertiaScale = 0;
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2Body() {};
b2Body.prototype = new JacosBaseObject();
/**
 * @function CreateFixture(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {b2FixtureDef} - def.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {b2Shape} - shape <b>and</b> args[1] is {Number} - density.<br />
 * @returns {b2Fixture}
*/
b2Body.prototype.CreateFixture = function(args) {return new b2Fixture();};
/**
 * @function DestroyFixture(fixture)
 * @param {b2Fixture} fixture
*/
b2Body.prototype.DestroyFixture = function(fixture) {};
/**
 * @function SetTransform(position, angle)
 * @param {b2Vec2} position
 * @param {Number} angle
*/
b2Body.prototype.SetTransform = function(position, angle) {};
/**
 * @function GetTransform()
 * @returns {b2Transform}
*/
b2Body.prototype.GetTransform = function() {return new b2Transform();};
/**
 * @function GetPosition()
 * @returns {b2Vec2}
*/
b2Body.prototype.GetPosition = function() {return new b2Vec2();};
/**
 * @function GetAngle()
 * @returns {Number}
*/
b2Body.prototype.GetAngle = function() {return 0;};
/**
 * @function GetWorldCenter()
 * @returns {b2Vec2}
*/
b2Body.prototype.GetWorldCenter = function() {return new b2Vec2();};
/**
 * @function GetLocalCenter()
 * @returns {b2Vec2}
*/
b2Body.prototype.GetLocalCenter = function() {return new b2Vec2();};
/**
 * @function SetLinearVelocity(v)
 * @param {b2Vec2} v
*/
b2Body.prototype.SetLinearVelocity = function(v) {};
/**
 * @function GetLinearVelocity()
 * @returns {b2Vec2}
*/
b2Body.prototype.GetLinearVelocity = function() {return new b2Vec2();};
/**
 * @function SetAngularVelocity(omega)
 * @param {Number} omega
*/
b2Body.prototype.SetAngularVelocity = function(omega) {};
/**
 * @function GetAngularVelocity()
 * @returns {Number}
*/
b2Body.prototype.GetAngularVelocity = function() {return 0;};
/**
 * @function ApplyForce(force, point)
 * @param {b2Vec2} force
 * @param {b2Vec2} point
*/
b2Body.prototype.ApplyForce = function(force, point) {};
/**
 * @function ApplyTorque(torque)
 * @param {Number} torque
*/
b2Body.prototype.ApplyTorque = function(torque) {};
/**
 * @function ApplyLinearImpulse(impulse, point)
 * @param {b2Vec2} impulse
 * @param {b2Vec2} point
*/
b2Body.prototype.ApplyLinearImpulse = function(impulse, point) {};
/**
 * @function ApplyAngularImpulse(impulse)
 * @param {Number} impulse
*/
b2Body.prototype.ApplyAngularImpulse = function(impulse) {};
/**
 * @function GetMass()
 * @returns {Number}
*/
b2Body.prototype.GetMass = function() {return 0;};
/**
 * @function GetInertia()
 * @returns {Number}
*/
b2Body.prototype.GetInertia = function() {return 0;};
/**
 * @function GetMassData(data)
 * @param {b2MassData} data
*/
b2Body.prototype.GetMassData = function(data) {};
/**
 * @function SetMassData(data)
 * @param {b2MassData} data
*/
b2Body.prototype.SetMassData = function(data) {};
/**
 * @function ResetMassData()
*/
b2Body.prototype.ResetMassData = function() {};
/**
 * @function GetWorldPoint(localPoint)
 * @param {b2Vec2} localPoint
 * @returns {b2Vec2}
*/
b2Body.prototype.GetWorldPoint = function(localPoint) {return new b2Vec2();};
/**
 * @function GetWorldVector(localVector)
 * @param {b2Vec2} localVector
 * @returns {b2Vec2}
*/
b2Body.prototype.GetWorldVector = function(localVector) {return new b2Vec2();};
/**
 * @function GetLocalPoint(worldPoint)
 * @param {b2Vec2} worldPoint
 * @returns {b2Vec2}
*/
b2Body.prototype.GetLocalPoint = function(worldPoint) {return new b2Vec2();};
/**
 * @function GetLocalVector(worldVector)
 * @param {b2Vec2} worldVector
 * @returns {b2Vec2}
*/
b2Body.prototype.GetLocalVector = function(worldVector) {return new b2Vec2();};
/**
 * @function GetLinearVelocityFromWorldPoint(worldPoint)
 * @param {b2Vec2} worldPoint
 * @returns {b2Vec2}
*/
b2Body.prototype.GetLinearVelocityFromWorldPoint = function(worldPoint) {return new b2Vec2();};
/**
 * @function GetLinearVelocityFromLocalPoint(localPoint)
 * @param {b2Vec2} localPoint
 * @returns {b2Vec2}
*/
b2Body.prototype.GetLinearVelocityFromLocalPoint = function(localPoint) {return new b2Vec2();};
/**
 * @function GetLinearDamping()
 * @returns {Number}
*/
b2Body.prototype.GetLinearDamping = function() {return 0;};
/**
 * @function SetLinearDamping(linearDamping)
 * @param {Number} linearDamping
*/
b2Body.prototype.SetLinearDamping = function(linearDamping) {};
/**
 * @function GetAngularDamping()
 * @returns {Number}
*/
b2Body.prototype.GetAngularDamping = function() {return 0;};
/**
 * @function SetAngularDamping(angularDamping)
 * @param {Number} angularDamping
*/
b2Body.prototype.SetAngularDamping = function(angularDamping) {};
/**
 * @function SetType(type)
 * @param {Number} type
*/
b2Body.prototype.SetType = function(type) {};
/**
 * @function GetType()
 * @returns {Number}
*/
b2Body.prototype.GetType = function() {return 0;};
/**
 * @function SetBullet(flag)
 * @param {Boolean} flag
*/
b2Body.prototype.SetBullet = function(flag) {};
/**
 * @function IsBullet()
 * @returns {Boolean}
*/
b2Body.prototype.IsBullet = function() {return true;};
/**
 * @function SetSleepingAllowed(flag)
 * @param {Boolean} flag
*/
b2Body.prototype.SetSleepingAllowed = function(flag) {};
/**
 * @function IsSleepingAllowed()
 * @returns {Boolean}
*/
b2Body.prototype.IsSleepingAllowed = function() {return true;};
/**
 * @function SetAwake(flag)
 * @param {Boolean} flag
*/
b2Body.prototype.SetAwake = function(flag) {};
/**
 * @function IsAwake()
 * @returns {Boolean}
*/
b2Body.prototype.IsAwake = function() {return true;};
/**
 * @function SetActive(flag)
 * @param {Boolean} flag
*/
b2Body.prototype.SetActive = function(flag) {};
/**
 * @function IsActive()
 * @returns {Boolean}
*/
b2Body.prototype.IsActive = function() {return true;};
/**
 * @function SetFixedRotation(flag)
 * @param {Boolean} flag
*/
b2Body.prototype.SetFixedRotation = function(flag) {};
/**
 * @function IsFixedRotation()
 * @returns {Boolean}
*/
b2Body.prototype.IsFixedRotation = function() {return true;};
/**
 * @function GetFixtureList()
 * @returns {b2Fixture}
*/
b2Body.prototype.GetFixtureList = function() {return new b2Fixture();};
/**
 * @function GetJointList()
 * @returns {b2JointEdge}
*/
b2Body.prototype.GetJointList = function() {return new b2JointEdge();};
/**
 * @function GetContactList()
 * @returns {b2ContactEdge}
*/
b2Body.prototype.GetContactList = function() {return new b2ContactEdge();};
/**
 * @function GetNext()
 * @returns {b2Body}
*/
b2Body.prototype.GetNext = function() {return new b2Body();};
/**
 * @function GetUserData()
 * @returns {Object}
*/
b2Body.prototype.GetUserData = function() {return new Object();};
/**
 * @function SetUserData(jscobj_data)
 * @param {Object} jscobj_data
*/
b2Body.prototype.SetUserData = function(jscobj_data) {};
/**
 * @function GetWorld()
 * @returns {b2World}
*/
b2Body.prototype.GetWorld = function() {return new b2World();};
box2d.b2_staticBody = 0;
box2d.b2_kinematicBody = 0;
box2d.b2_dynamicBody = 0;
/**
 * @super Object
 * @constructor 
*/
function b2Pair() {};
b2Pair.prototype = {};
/**
 * Property proxyIdA
 * @type Number
*/
b2Pair.prototype.proxyIdA = 0;
/**
 * Property proxyIdB
 * @type Number
*/
b2Pair.prototype.proxyIdB = 0;
/**
 * Property next
 * @type Number
*/
b2Pair.prototype.next = 0;
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2BroadPhase() {};
b2BroadPhase.prototype = new JacosBaseObject();
/**
 * @function CreateProxy(aabb, jscobj_userData)
 * @param {b2AABB} aabb
 * @param {Object} jscobj_userData
 * @returns {Number}
*/
b2BroadPhase.prototype.CreateProxy = function(aabb, jscobj_userData) {return 0;};
/**
 * @function DestroyProxy(proxyId)
 * @param {Number} proxyId
*/
b2BroadPhase.prototype.DestroyProxy = function(proxyId) {};
/**
 * @function MoveProxy(proxyId, aabb, displacement)
 * @param {Number} proxyId
 * @param {b2AABB} aabb
 * @param {b2Vec2} displacement
*/
b2BroadPhase.prototype.MoveProxy = function(proxyId, aabb, displacement) {};
/**
 * @function TouchProxy(proxyId)
 * @param {Number} proxyId
*/
b2BroadPhase.prototype.TouchProxy = function(proxyId) {};
/**
 * @function GetFatAABB(proxyId)
 * @param {Number} proxyId
 * @returns {b2AABB}
*/
b2BroadPhase.prototype.GetFatAABB = function(proxyId) {return new b2AABB();};
/**
 * @function GetJSUserData(proxyId)
 * @param {Number} proxyId
 * @returns {Object}
*/
b2BroadPhase.prototype.GetJSUserData = function(proxyId) {return new Object();};
/**
 * @function TestOverlap(proxyIdA, proxyIdB)
 * @param {Number} proxyIdA
 * @param {Number} proxyIdB
 * @returns {Boolean}
*/
b2BroadPhase.prototype.TestOverlap = function(proxyIdA, proxyIdB) {return true;};
/**
 * @function GetProxyCount()
 * @returns {Number}
*/
b2BroadPhase.prototype.GetProxyCount = function() {return 0;};
/**
 * @function GetTreeHeight()
 * @returns {Number}
*/
b2BroadPhase.prototype.GetTreeHeight = function() {return 0;};
/**
 * @function GetTreeBalance()
 * @returns {Number}
*/
b2BroadPhase.prototype.GetTreeBalance = function() {return 0;};
/**
 * @function GetTreeQuality()
 * @returns {Number}
*/
b2BroadPhase.prototype.GetTreeQuality = function() {return 0;};
b2BroadPhase.e_nullProxy = -1;
/**
 * @super b2Contact
 * @constructor 
 * @param {b2Fixture} fixtureA
 * @param {Number} indexA
 * @param {b2Fixture} fixtureB
 * @param {Number} indexB
*/
function b2ChainAndCircleContact(fixtureA, indexA, fixtureB, indexB) {};
b2ChainAndCircleContact.prototype = new b2Contact();
/**
 * @function Create(fixtureA, indexA, fixtureB, indexB, allocator)
 * @static
 * @param {b2Fixture} fixtureA
 * @param {Number} indexA
 * @param {b2Fixture} fixtureB
 * @param {Number} indexB
 * @param {b2BlockAllocator} allocator
 * @returns {b2Contact}
*/
b2ChainAndCircleContact.Create = function(fixtureA, indexA, fixtureB, indexB, allocator) {return new b2Contact();};
/**
 * @function Destroy(contact, allocator)
 * @static
 * @param {b2Contact} contact
 * @param {b2BlockAllocator} allocator
*/
b2ChainAndCircleContact.Destroy = function(contact, allocator) {};
/**
 * @function Evaluate(manifold, xfA, xfB)
 * @param {b2Manifold} manifold
 * @param {b2Transform} xfA
 * @param {b2Transform} xfB
*/
b2ChainAndCircleContact.prototype.Evaluate = function(manifold, xfA, xfB) {};
/**
 * @super b2Contact
 * @constructor 
 * @param {b2Fixture} fixtureA
 * @param {Number} indexA
 * @param {b2Fixture} fixtureB
 * @param {Number} indexB
*/
function b2ChainAndPolygonContact(fixtureA, indexA, fixtureB, indexB) {};
b2ChainAndPolygonContact.prototype = new b2Contact();
/**
 * @function Create(fixtureA, indexA, fixtureB, indexB, allocator)
 * @static
 * @param {b2Fixture} fixtureA
 * @param {Number} indexA
 * @param {b2Fixture} fixtureB
 * @param {Number} indexB
 * @param {b2BlockAllocator} allocator
 * @returns {b2Contact}
*/
b2ChainAndPolygonContact.Create = function(fixtureA, indexA, fixtureB, indexB, allocator) {return new b2Contact();};
/**
 * @function Destroy(contact, allocator)
 * @static
 * @param {b2Contact} contact
 * @param {b2BlockAllocator} allocator
*/
b2ChainAndPolygonContact.Destroy = function(contact, allocator) {};
/**
 * @function Evaluate(manifold, xfA, xfB)
 * @param {b2Manifold} manifold
 * @param {b2Transform} xfA
 * @param {b2Transform} xfB
*/
b2ChainAndPolygonContact.prototype.Evaluate = function(manifold, xfA, xfB) {};
/**
 * @super b2Shape
 * @constructor 
*/
function b2ChainShape() {};
b2ChainShape.prototype = new b2Shape();
/**
 * @function CreateLoop(vertices, count)
 * @param {b2Vec2} vertices
 * @param {Number} count
*/
b2ChainShape.prototype.CreateLoop = function(vertices, count) {};
/**
 * @function CreateChain(vertices, count)
 * @param {b2Vec2} vertices
 * @param {Number} count
*/
b2ChainShape.prototype.CreateChain = function(vertices, count) {};
/**
 * @function SetPrevVertex(prevVertex)
 * @param {b2Vec2} prevVertex
*/
b2ChainShape.prototype.SetPrevVertex = function(prevVertex) {};
/**
 * @function SetNextVertex(nextVertex)
 * @param {b2Vec2} nextVertex
*/
b2ChainShape.prototype.SetNextVertex = function(nextVertex) {};
/**
 * @function Clone(allocator)
 * @param {b2BlockAllocator} allocator
 * @returns {b2Shape}
*/
b2ChainShape.prototype.Clone = function(allocator) {return new b2Shape();};
/**
 * @function GetChildCount()
 * @returns {Number}
*/
b2ChainShape.prototype.GetChildCount = function() {return 0;};
/**
 * @function GetChildEdge(edge, index)
 * @param {b2EdgeShape} edge
 * @param {Number} index
*/
b2ChainShape.prototype.GetChildEdge = function(edge, index) {};
/**
 * @function TestPoint(transform, p)
 * @param {b2Transform} transform
 * @param {b2Vec2} p
 * @returns {Boolean}
*/
b2ChainShape.prototype.TestPoint = function(transform, p) {return true;};
/**
 * @function RayCast(output, input, transform, childIndex)
 * @param {b2RayCastOutput} output
 * @param {b2RayCastInput} input
 * @param {b2Transform} transform
 * @param {Number} childIndex
 * @returns {Boolean}
*/
b2ChainShape.prototype.RayCast = function(output, input, transform, childIndex) {return true;};
/**
 * @function ComputeAABB(aabb, transform, childIndex)
 * @param {b2AABB} aabb
 * @param {b2Transform} transform
 * @param {Number} childIndex
*/
b2ChainShape.prototype.ComputeAABB = function(aabb, transform, childIndex) {};
/**
 * @function ComputeMass(massData, density)
 * @param {b2MassData} massData
 * @param {Number} density
*/
b2ChainShape.prototype.ComputeMass = function(massData, density) {};
/**
 * Property m_vertices
 * @type b2Vec2
*/
b2ChainShape.prototype.m_vertices = new b2Vec2();
/**
 * Property m_count
 * @type Number
*/
b2ChainShape.prototype.m_count = 0;
/**
 * Property m_prevVertex
 * @type b2Vec2
*/
b2ChainShape.prototype.m_prevVertex = new b2Vec2();
/**
 * Property m_nextVertex
 * @type b2Vec2
*/
b2ChainShape.prototype.m_nextVertex = new b2Vec2();
/**
 * Property m_hasPrevVertex
 * @type Boolean
*/
b2ChainShape.prototype.m_hasPrevVertex = true;
/**
 * Property m_hasNextVertex
 * @type Boolean
*/
b2ChainShape.prototype.m_hasNextVertex = true;
/**
 * @super b2Contact
 * @constructor 
 * @param {b2Fixture} fixtureA
 * @param {b2Fixture} fixtureB
*/
function b2CircleContact(fixtureA, fixtureB) {};
b2CircleContact.prototype = new b2Contact();
/**
 * @function Create(fixtureA, indexA, fixtureB, indexB, allocator)
 * @static
 * @param {b2Fixture} fixtureA
 * @param {Number} indexA
 * @param {b2Fixture} fixtureB
 * @param {Number} indexB
 * @param {b2BlockAllocator} allocator
 * @returns {b2Contact}
*/
b2CircleContact.Create = function(fixtureA, indexA, fixtureB, indexB, allocator) {return new b2Contact();};
/**
 * @function Destroy(contact, allocator)
 * @static
 * @param {b2Contact} contact
 * @param {b2BlockAllocator} allocator
*/
b2CircleContact.Destroy = function(contact, allocator) {};
/**
 * @function Evaluate(manifold, xfA, xfB)
 * @param {b2Manifold} manifold
 * @param {b2Transform} xfA
 * @param {b2Transform} xfB
*/
b2CircleContact.prototype.Evaluate = function(manifold, xfA, xfB) {};
/**
 * @super b2Shape
 * @constructor 
*/
function b2CircleShape() {};
b2CircleShape.prototype = new b2Shape();
/**
 * @function Clone(allocator)
 * @param {b2BlockAllocator} allocator
 * @returns {b2Shape}
*/
b2CircleShape.prototype.Clone = function(allocator) {return new b2Shape();};
/**
 * @function TestPoint(transform, p)
 * @param {b2Transform} transform
 * @param {b2Vec2} p
 * @returns {Boolean}
*/
b2CircleShape.prototype.TestPoint = function(transform, p) {return true;};
/**
 * @function RayCast(output, input, transform, childIndex)
 * @param {b2RayCastOutput} output
 * @param {b2RayCastInput} input
 * @param {b2Transform} transform
 * @param {Number} childIndex
 * @returns {Boolean}
*/
b2CircleShape.prototype.RayCast = function(output, input, transform, childIndex) {return true;};
/**
 * @function ComputeAABB(aabb, transform, childIndex)
 * @param {b2AABB} aabb
 * @param {b2Transform} transform
 * @param {Number} childIndex
*/
b2CircleShape.prototype.ComputeAABB = function(aabb, transform, childIndex) {};
/**
 * @function ComputeMass(massData, density)
 * @param {b2MassData} massData
 * @param {Number} density
*/
b2CircleShape.prototype.ComputeMass = function(massData, density) {};
/**
 * @function GetSupport(d)
 * @param {b2Vec2} d
 * @returns {Number}
*/
b2CircleShape.prototype.GetSupport = function(d) {return 0;};
/**
 * @function GetSupportVertex(d)
 * @param {b2Vec2} d
 * @returns {b2Vec2}
*/
b2CircleShape.prototype.GetSupportVertex = function(d) {return new b2Vec2();};
/**
 * @function GetVertexCount()
 * @returns {Number}
*/
b2CircleShape.prototype.GetVertexCount = function() {return 0;};
/**
 * @function GetVertex(index)
 * @param {Number} index
 * @returns {b2Vec2}
*/
b2CircleShape.prototype.GetVertex = function(index) {return new b2Vec2();};
/**
 * Property m_p
 * @type b2Vec2
*/
b2CircleShape.prototype.m_p = new b2Vec2();
/**
 * @super Object
 * @constructor 
*/
function Features() {};
Features.prototype = {};
/**
 * Property referenceEdge
 * @type Number
*/
Features.prototype.referenceEdge = 0;
/**
 * Property incidentEdge
 * @type Number
*/
Features.prototype.incidentEdge = 0;
/**
 * Property incidentVertex
 * @type Number
*/
Features.prototype.incidentVertex = 0;
/**
 * Property flip
 * @type Number
*/
Features.prototype.flip = 0;
/**
 * @super Object
 * @constructor 
*/
function b2ContactID() {};
b2ContactID.prototype = {};
/**
 * Property features
 * @type Features
*/
b2ContactID.prototype.features = new Features();
/**
 * Property key
 * @type Number
*/
b2ContactID.prototype.key = 0;
/**
 * @super Object
 * @constructor 
*/
function b2ManifoldPoint() {};
b2ManifoldPoint.prototype = {};
/**
 * Property localPoint
 * @type b2Vec2
*/
b2ManifoldPoint.prototype.localPoint = new b2Vec2();
/**
 * Property normalImpulse
 * @type Number
*/
b2ManifoldPoint.prototype.normalImpulse = 0;
/**
 * Property tangentImpulse
 * @type Number
*/
b2ManifoldPoint.prototype.tangentImpulse = 0;
/**
 * Property id
 * @type b2ContactID
*/
b2ManifoldPoint.prototype.id = new b2ContactID();
/**
 * @super Object
 * @constructor 
*/
function b2Manifold() {};
b2Manifold.prototype = {};
b2Manifold.e_circles = 0;
b2Manifold.e_faceA = 1;
b2Manifold.e_faceB = 2;
/**
 * Property localNormal
 * @type b2Vec2
*/
b2Manifold.prototype.localNormal = new b2Vec2();
/**
 * Property localPoint
 * @type b2Vec2
*/
b2Manifold.prototype.localPoint = new b2Vec2();
/**
 * Property type
 * @type Number
*/
b2Manifold.prototype.type = 0;
/**
 * Property pointCount
 * @type Number
*/
b2Manifold.prototype.pointCount = 0;
/**
 * @super Object
 * @constructor 
*/
function b2WorldManifold() {};
b2WorldManifold.prototype = {};
/**
 * @function Initialize(manifold, xfA, radiusA, xfB, radiusB)
 * @param {b2Manifold} manifold
 * @param {b2Transform} xfA
 * @param {Number} radiusA
 * @param {b2Transform} xfB
 * @param {Number} radiusB
*/
b2WorldManifold.prototype.Initialize = function(manifold, xfA, radiusA, xfB, radiusB) {};
/**
 * Property normal
 * @type b2Vec2
*/
b2WorldManifold.prototype.normal = new b2Vec2();
/**
 * @super Object
 * @constructor 
*/
function b2ClipVertex() {};
b2ClipVertex.prototype = {};
/**
 * Property v
 * @type b2Vec2
*/
b2ClipVertex.prototype.v = new b2Vec2();
/**
 * Property id
 * @type b2ContactID
*/
b2ClipVertex.prototype.id = new b2ContactID();
/**
 * @super Object
 * @constructor 
*/
function b2RayCastInput() {};
b2RayCastInput.prototype = {};
/**
 * Property p1
 * @type b2Vec2
*/
b2RayCastInput.prototype.p1 = new b2Vec2();
/**
 * Property p2
 * @type b2Vec2
*/
b2RayCastInput.prototype.p2 = new b2Vec2();
/**
 * Property maxFraction
 * @type Number
*/
b2RayCastInput.prototype.maxFraction = 0;
/**
 * @super Object
 * @constructor 
*/
function b2RayCastOutput() {};
b2RayCastOutput.prototype = {};
/**
 * Property normal
 * @type b2Vec2
*/
b2RayCastOutput.prototype.normal = new b2Vec2();
/**
 * Property fraction
 * @type Number
*/
b2RayCastOutput.prototype.fraction = 0;
/**
 * @super Object
 * @constructor 
*/
function b2AABB() {};
b2AABB.prototype = {};
/**
 * @function IsValid()
 * @returns {Boolean}
*/
b2AABB.prototype.IsValid = function() {return true;};
/**
 * @function GetCenter()
 * @returns {b2Vec2}
*/
b2AABB.prototype.GetCenter = function() {return new b2Vec2();};
/**
 * @function GetExtents()
 * @returns {b2Vec2}
*/
b2AABB.prototype.GetExtents = function() {return new b2Vec2();};
/**
 * @function Combine(aabb1, aabb2)
 * @param {b2AABB} aabb1
 * @param {b2AABB} aabb2
*/
b2AABB.prototype.Combine = function(aabb1, aabb2) {};
/**
 * @function Contains(aabb)
 * @param {b2AABB} aabb
 * @returns {Boolean}
*/
b2AABB.prototype.Contains = function(aabb) {return true;};
/**
 * @function RayCast(output, input)
 * @param {b2RayCastOutput} output
 * @param {b2RayCastInput} input
 * @returns {Boolean}
*/
b2AABB.prototype.RayCast = function(output, input) {return true;};
/**
 * Property lowerBound
 * @type b2Vec2
*/
b2AABB.prototype.lowerBound = new b2Vec2();
/**
 * Property upperBound
 * @type b2Vec2
*/
b2AABB.prototype.upperBound = new b2Vec2();
/**
 * Property b2_nullFeature
 * @type Number
*/
box2d.prototype.b2_nullFeature = 0;
/**
 * @super Object
 * @constructor 
*/
function b2ContactRegister() {};
b2ContactRegister.prototype = {};
/**
 * Property primary
 * @type Boolean
*/
b2ContactRegister.prototype.primary = true;
/**
 * @super Object
 * @constructor 
*/
function b2ContactEdge() {};
b2ContactEdge.prototype = {};
/**
 * Property other
 * @type b2Body
*/
b2ContactEdge.prototype.other = new b2Body();
/**
 * Property contact
 * @type b2Contact
*/
b2ContactEdge.prototype.contact = new b2Contact();
/**
 * Property prev
 * @type b2ContactEdge
*/
b2ContactEdge.prototype.prev = new b2ContactEdge();
/**
 * Property next
 * @type b2ContactEdge
*/
b2ContactEdge.prototype.next = new b2ContactEdge();
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2Contact() {};
b2Contact.prototype = new JacosBaseObject();
/**
 * @function GetManifold()
 * @returns {b2Manifold}
*/
b2Contact.prototype.GetManifold = function() {return new b2Manifold();};
/**
 * @function GetWorldManifold(worldManifold)
 * @param {b2WorldManifold} worldManifold
*/
b2Contact.prototype.GetWorldManifold = function(worldManifold) {};
/**
 * @function IsTouching()
 * @returns {Boolean}
*/
b2Contact.prototype.IsTouching = function() {return true;};
/**
 * @function SetEnabled(flag)
 * @param {Boolean} flag
*/
b2Contact.prototype.SetEnabled = function(flag) {};
/**
 * @function IsEnabled()
 * @returns {Boolean}
*/
b2Contact.prototype.IsEnabled = function() {return true;};
/**
 * @function GetNext()
 * @returns {b2Contact}
*/
b2Contact.prototype.GetNext = function() {return new b2Contact();};
/**
 * @function GetFixtureA()
 * @returns {b2Fixture}
*/
b2Contact.prototype.GetFixtureA = function() {return new b2Fixture();};
/**
 * @function GetChildIndexA()
 * @returns {Number}
*/
b2Contact.prototype.GetChildIndexA = function() {return 0;};
/**
 * @function GetFixtureB()
 * @returns {b2Fixture}
*/
b2Contact.prototype.GetFixtureB = function() {return new b2Fixture();};
/**
 * @function GetChildIndexB()
 * @returns {Number}
*/
b2Contact.prototype.GetChildIndexB = function() {return 0;};
/**
 * @function SetFriction(friction)
 * @param {Number} friction
*/
b2Contact.prototype.SetFriction = function(friction) {};
/**
 * @function GetFriction()
 * @returns {Number}
*/
b2Contact.prototype.GetFriction = function() {return 0;};
/**
 * @function ResetFriction()
*/
b2Contact.prototype.ResetFriction = function() {};
/**
 * @function SetRestitution(restitution)
 * @param {Number} restitution
*/
b2Contact.prototype.SetRestitution = function(restitution) {};
/**
 * @function GetRestitution()
 * @returns {Number}
*/
b2Contact.prototype.GetRestitution = function() {return 0;};
/**
 * @function ResetRestitution()
*/
b2Contact.prototype.ResetRestitution = function() {};
/**
 * @function Evaluate(manifold, xfA, xfB)
 * @param {b2Manifold} manifold
 * @param {b2Transform} xfA
 * @param {b2Transform} xfB
*/
b2Contact.prototype.Evaluate = function(manifold, xfA, xfB) {};
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2ContactManager() {};
b2ContactManager.prototype = new JacosBaseObject();
/**
 * @function AddPair(jscobj_proxyUserDataA, jscobj_proxyUserDataB)
 * @param {Object} jscobj_proxyUserDataA
 * @param {Object} jscobj_proxyUserDataB
*/
b2ContactManager.prototype.AddPair = function(jscobj_proxyUserDataA, jscobj_proxyUserDataB) {};
/**
 * @function FindNewContacts()
*/
b2ContactManager.prototype.FindNewContacts = function() {};
/**
 * @function Destroy(c)
 * @param {b2Contact} c
*/
b2ContactManager.prototype.Destroy = function(c) {};
/**
 * @function Collide()
*/
b2ContactManager.prototype.Collide = function() {};
/**
 * Property m_broadPhase
 * @type b2BroadPhase
*/
b2ContactManager.prototype.m_broadPhase = new b2BroadPhase();
/**
 * Property m_contactList
 * @type b2Contact
*/
b2ContactManager.prototype.m_contactList = new b2Contact();
/**
 * Property m_contactCount
 * @type Number
*/
b2ContactManager.prototype.m_contactCount = 0;
/**
 * Property m_contactFilter
 * @type b2ContactFilter
*/
b2ContactManager.prototype.m_contactFilter = new b2ContactFilter();
/**
 * Property m_contactListener
 * @type b2ContactListener
*/
b2ContactManager.prototype.m_contactListener = new b2ContactListener();
/**
 * Property m_allocator
 * @type b2BlockAllocator
*/
b2ContactManager.prototype.m_allocator = new b2BlockAllocator();
/**
 * @super Object
 * @constructor 
*/
function b2ContactConstraintPoint() {};
b2ContactConstraintPoint.prototype = {};
/**
 * Property rA
 * @type b2Vec2
*/
b2ContactConstraintPoint.prototype.rA = new b2Vec2();
/**
 * Property rB
 * @type b2Vec2
*/
b2ContactConstraintPoint.prototype.rB = new b2Vec2();
/**
 * Property normalImpulse
 * @type Number
*/
b2ContactConstraintPoint.prototype.normalImpulse = 0;
/**
 * Property tangentImpulse
 * @type Number
*/
b2ContactConstraintPoint.prototype.tangentImpulse = 0;
/**
 * Property normalMass
 * @type Number
*/
b2ContactConstraintPoint.prototype.normalMass = 0;
/**
 * Property tangentMass
 * @type Number
*/
b2ContactConstraintPoint.prototype.tangentMass = 0;
/**
 * Property velocityBias
 * @type Number
*/
b2ContactConstraintPoint.prototype.velocityBias = 0;
/**
 * @super Object
 * @constructor 
*/
function b2ContactVelocityConstraint() {};
b2ContactVelocityConstraint.prototype = {};
/**
 * Property normal
 * @type b2Vec2
*/
b2ContactVelocityConstraint.prototype.normal = new b2Vec2();
/**
 * Property normalMass
 * @type b2Mat22
*/
b2ContactVelocityConstraint.prototype.normalMass = new b2Mat22();
/**
 * Property K
 * @type b2Mat22
*/
b2ContactVelocityConstraint.prototype.K = new b2Mat22();
/**
 * Property indexA
 * @type Number
*/
b2ContactVelocityConstraint.prototype.indexA = 0;
/**
 * Property indexB
 * @type Number
*/
b2ContactVelocityConstraint.prototype.indexB = 0;
/**
 * Property invMassA
 * @type Number
*/
b2ContactVelocityConstraint.prototype.invMassA = 0;
/**
 * Property invMassB
 * @type Number
*/
b2ContactVelocityConstraint.prototype.invMassB = 0;
/**
 * Property invIA
 * @type Number
*/
b2ContactVelocityConstraint.prototype.invIA = 0;
/**
 * Property invIB
 * @type Number
*/
b2ContactVelocityConstraint.prototype.invIB = 0;
/**
 * Property friction
 * @type Number
*/
b2ContactVelocityConstraint.prototype.friction = 0;
/**
 * Property restitution
 * @type Number
*/
b2ContactVelocityConstraint.prototype.restitution = 0;
/**
 * Property pointCount
 * @type Number
*/
b2ContactVelocityConstraint.prototype.pointCount = 0;
/**
 * Property contactIndex
 * @type Number
*/
b2ContactVelocityConstraint.prototype.contactIndex = 0;
/**
 * @super Object
 * @constructor 
*/
function b2ContactSolverDef() {};
b2ContactSolverDef.prototype = {};
/**
 * Property step
 * @type b2TimeStep
*/
b2ContactSolverDef.prototype.step = new b2TimeStep();
/**
 * Property count
 * @type Number
*/
b2ContactSolverDef.prototype.count = 0;
/**
 * Property positions
 * @type b2Position
*/
b2ContactSolverDef.prototype.positions = new b2Position();
/**
 * Property velocities
 * @type b2Velocity
*/
b2ContactSolverDef.prototype.velocities = new b2Velocity();
/**
 * Property allocator
 * @type b2StackAllocator
*/
b2ContactSolverDef.prototype.allocator = new b2StackAllocator();
/**
 * @super JacosBaseObject
 * @constructor 
 * @param {b2ContactSolverDef} def
*/
function b2ContactSolver(def) {};
b2ContactSolver.prototype = new JacosBaseObject();
/**
 * @function InitializeVelocityConstraints()
*/
b2ContactSolver.prototype.InitializeVelocityConstraints = function() {};
/**
 * @function WarmStart()
*/
b2ContactSolver.prototype.WarmStart = function() {};
/**
 * @function SolveVelocityConstraints()
*/
b2ContactSolver.prototype.SolveVelocityConstraints = function() {};
/**
 * @function StoreImpulses()
*/
b2ContactSolver.prototype.StoreImpulses = function() {};
/**
 * @function SolvePositionConstraints()
 * @returns {Boolean}
*/
b2ContactSolver.prototype.SolvePositionConstraints = function() {return true;};
/**
 * @function SolveTOIPositionConstraints(toiIndexA, toiIndexB)
 * @param {Number} toiIndexA
 * @param {Number} toiIndexB
 * @returns {Boolean}
*/
b2ContactSolver.prototype.SolveTOIPositionConstraints = function(toiIndexA, toiIndexB) {return true;};
/**
 * Property m_step
 * @type b2TimeStep
*/
b2ContactSolver.prototype.m_step = new b2TimeStep();
/**
 * Property m_positions
 * @type b2Position
*/
b2ContactSolver.prototype.m_positions = new b2Position();
/**
 * Property m_velocities
 * @type b2Velocity
*/
b2ContactSolver.prototype.m_velocities = new b2Velocity();
/**
 * Property m_allocator
 * @type b2StackAllocator
*/
b2ContactSolver.prototype.m_allocator = new b2StackAllocator();
/**
 * Property m_positionConstraints
 * @type b2ContactPositionConstraint
*/
b2ContactSolver.prototype.m_positionConstraints = new b2ContactPositionConstraint();
/**
 * Property m_velocityConstraints
 * @type b2ContactVelocityConstraint
*/
b2ContactSolver.prototype.m_velocityConstraints = new b2ContactVelocityConstraint();
/**
 * @super Object
 * @constructor 
*/
function b2DistanceProxy() {};
b2DistanceProxy.prototype = {};
/**
 * @function Set(shape, index)
 * @param {b2Shape} shape
 * @param {Number} index
*/
b2DistanceProxy.prototype.Set = function(shape, index) {};
/**
 * @function GetSupport(d)
 * @param {b2Vec2} d
 * @returns {Number}
*/
b2DistanceProxy.prototype.GetSupport = function(d) {return 0;};
/**
 * @function GetSupportVertex(d)
 * @param {b2Vec2} d
 * @returns {b2Vec2}
*/
b2DistanceProxy.prototype.GetSupportVertex = function(d) {return new b2Vec2();};
/**
 * @function GetVertexCount()
 * @returns {Number}
*/
b2DistanceProxy.prototype.GetVertexCount = function() {return 0;};
/**
 * @function GetVertex(index)
 * @param {Number} index
 * @returns {b2Vec2}
*/
b2DistanceProxy.prototype.GetVertex = function(index) {return new b2Vec2();};
/**
 * Property m_vertices
 * @type b2Vec2
*/
b2DistanceProxy.prototype.m_vertices = new b2Vec2();
/**
 * Property m_count
 * @type Number
*/
b2DistanceProxy.prototype.m_count = 0;
/**
 * Property m_radius
 * @type Number
*/
b2DistanceProxy.prototype.m_radius = 0;
/**
 * @super Object
 * @constructor 
*/
function b2SimplexCache() {};
b2SimplexCache.prototype = {};
/**
 * Property metric
 * @type Number
*/
b2SimplexCache.prototype.metric = 0;
/**
 * Property count
 * @type Number
*/
b2SimplexCache.prototype.count = 0;
/**
 * @super Object
 * @constructor 
*/
function b2DistanceInput() {};
b2DistanceInput.prototype = {};
/**
 * Property proxyA
 * @type b2DistanceProxy
*/
b2DistanceInput.prototype.proxyA = new b2DistanceProxy();
/**
 * Property proxyB
 * @type b2DistanceProxy
*/
b2DistanceInput.prototype.proxyB = new b2DistanceProxy();
/**
 * Property transformA
 * @type b2Transform
*/
b2DistanceInput.prototype.transformA = new b2Transform();
/**
 * Property transformB
 * @type b2Transform
*/
b2DistanceInput.prototype.transformB = new b2Transform();
/**
 * Property useRadii
 * @type Boolean
*/
b2DistanceInput.prototype.useRadii = true;
/**
 * @super Object
 * @constructor 
*/
function b2DistanceOutput() {};
b2DistanceOutput.prototype = {};
/**
 * Property pointA
 * @type b2Vec2
*/
b2DistanceOutput.prototype.pointA = new b2Vec2();
/**
 * Property pointB
 * @type b2Vec2
*/
b2DistanceOutput.prototype.pointB = new b2Vec2();
/**
 * Property distance
 * @type Number
*/
b2DistanceOutput.prototype.distance = 0;
/**
 * Property iterations
 * @type Number
*/
b2DistanceOutput.prototype.iterations = 0;
/**
 * @super b2JointDef
 * @constructor 
*/
function b2DistanceJointDef() {};
b2DistanceJointDef.prototype = new b2JointDef();
/**
 * @function Initialize(bodyA, bodyB, anchorA, anchorB)
 * @param {b2Body} bodyA
 * @param {b2Body} bodyB
 * @param {b2Vec2} anchorA
 * @param {b2Vec2} anchorB
*/
b2DistanceJointDef.prototype.Initialize = function(bodyA, bodyB, anchorA, anchorB) {};
/**
 * Property localAnchorA
 * @type b2Vec2
*/
b2DistanceJointDef.prototype.localAnchorA = new b2Vec2();
/**
 * Property localAnchorB
 * @type b2Vec2
*/
b2DistanceJointDef.prototype.localAnchorB = new b2Vec2();
/**
 * Property length
 * @type Number
*/
b2DistanceJointDef.prototype.length = 0;
/**
 * Property frequencyHz
 * @type Number
*/
b2DistanceJointDef.prototype.frequencyHz = 0;
/**
 * Property dampingRatio
 * @type Number
*/
b2DistanceJointDef.prototype.dampingRatio = 0;
/**
 * @super b2Joint
 * @constructor 
*/
function b2DistanceJoint() {};
b2DistanceJoint.prototype = new b2Joint();
/**
 * @function GetAnchorA()
 * @returns {b2Vec2}
*/
b2DistanceJoint.prototype.GetAnchorA = function() {return new b2Vec2();};
/**
 * @function GetAnchorB()
 * @returns {b2Vec2}
*/
b2DistanceJoint.prototype.GetAnchorB = function() {return new b2Vec2();};
/**
 * @function GetReactionForce(inv_dt)
 * @param {Number} inv_dt
 * @returns {b2Vec2}
*/
b2DistanceJoint.prototype.GetReactionForce = function(inv_dt) {return new b2Vec2();};
/**
 * @function GetReactionTorque(inv_dt)
 * @param {Number} inv_dt
 * @returns {Number}
*/
b2DistanceJoint.prototype.GetReactionTorque = function(inv_dt) {return 0;};
/**
 * @function GetLocalAnchorA()
 * @returns {b2Vec2}
*/
b2DistanceJoint.prototype.GetLocalAnchorA = function() {return new b2Vec2();};
/**
 * @function GetLocalAnchorB()
 * @returns {b2Vec2}
*/
b2DistanceJoint.prototype.GetLocalAnchorB = function() {return new b2Vec2();};
/**
 * @function SetLength(length)
 * @param {Number} length
*/
b2DistanceJoint.prototype.SetLength = function(length) {};
/**
 * @function GetLength()
 * @returns {Number}
*/
b2DistanceJoint.prototype.GetLength = function() {return 0;};
/**
 * @function SetFrequency(hz)
 * @param {Number} hz
*/
b2DistanceJoint.prototype.SetFrequency = function(hz) {};
/**
 * @function GetFrequency()
 * @returns {Number}
*/
b2DistanceJoint.prototype.GetFrequency = function() {return 0;};
/**
 * @function SetDampingRatio(ratio)
 * @param {Number} ratio
*/
b2DistanceJoint.prototype.SetDampingRatio = function(ratio) {};
/**
 * @function GetDampingRatio()
 * @returns {Number}
*/
b2DistanceJoint.prototype.GetDampingRatio = function() {return 0;};
/**
 * @function Dump()
*/
b2DistanceJoint.prototype.Dump = function() {};
/**
 * @function tryCastFromb2Joint(joint)
 * @static
 * @param {b2Joint} joint
 * @returns {b2DistanceJoint}
*/
b2DistanceJoint.tryCastFromb2Joint = function(joint) {return new b2DistanceJoint();};
/**
 * @super Object
 * @constructor 
*/
function b2TreeNode() {};
b2TreeNode.prototype = {};
/**
 * @function IsLeaf()
 * @returns {Boolean}
*/
b2TreeNode.prototype.IsLeaf = function() {return true;};
/**
 * Property aabb
 * @type b2AABB
*/
b2TreeNode.prototype.aabb = new b2AABB();
/**
 * Property jsc_userData
 * @type Object
*/
b2TreeNode.prototype.jsc_userData = new Object();
/**
 * Property parent
 * @type Number
*/
b2TreeNode.prototype.parent = 0;
/**
 * Property next
 * @type Number
*/
b2TreeNode.prototype.next = 0;
/**
 * Property child1
 * @type Number
*/
b2TreeNode.prototype.child1 = 0;
/**
 * Property child2
 * @type Number
*/
b2TreeNode.prototype.child2 = 0;
/**
 * Property height
 * @type Number
*/
b2TreeNode.prototype.height = 0;
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2DynamicTree() {};
b2DynamicTree.prototype = new JacosBaseObject();
/**
 * @function CreateProxy(aabb, userData)
 * @param {b2AABB} aabb
 * @param {Object} userData
 * @returns {Number}
*/
b2DynamicTree.prototype.CreateProxy = function(aabb, userData) {return 0;};
/**
 * @function DestroyProxy(proxyId)
 * @param {Number} proxyId
*/
b2DynamicTree.prototype.DestroyProxy = function(proxyId) {};
/**
 * @function MoveProxy(proxyId, aabb1, displacement)
 * @param {Number} proxyId
 * @param {b2AABB} aabb1
 * @param {b2Vec2} displacement
 * @returns {Boolean}
*/
b2DynamicTree.prototype.MoveProxy = function(proxyId, aabb1, displacement) {return true;};
/**
 * @function GetJSUserData(proxyId)
 * @param {Number} proxyId
 * @returns {Object}
*/
b2DynamicTree.prototype.GetJSUserData = function(proxyId) {return new Object();};
/**
 * @function GetFatAABB(proxyId)
 * @param {Number} proxyId
 * @returns {b2AABB}
*/
b2DynamicTree.prototype.GetFatAABB = function(proxyId) {return new b2AABB();};
/**
 * @function Validate()
*/
b2DynamicTree.prototype.Validate = function() {};
/**
 * @function GetHeight()
 * @returns {Number}
*/
b2DynamicTree.prototype.GetHeight = function() {return 0;};
/**
 * @function GetMaxBalance()
 * @returns {Number}
*/
b2DynamicTree.prototype.GetMaxBalance = function() {return 0;};
/**
 * @function GetAreaRatio()
 * @returns {Number}
*/
b2DynamicTree.prototype.GetAreaRatio = function() {return 0;};
/**
 * @function RebuildBottomUp()
*/
b2DynamicTree.prototype.RebuildBottomUp = function() {};
/**
 * @super b2Shape
 * @constructor 
*/
function b2EdgeShape() {};
b2EdgeShape.prototype = new b2Shape();
/**
 * @function Set(v1, v2)
 * @param {b2Vec2} v1
 * @param {b2Vec2} v2
*/
b2EdgeShape.prototype.Set = function(v1, v2) {};
/**
 * @function Clone(allocator)
 * @param {b2BlockAllocator} allocator
 * @returns {b2Shape}
*/
b2EdgeShape.prototype.Clone = function(allocator) {return new b2Shape();};
/**
 * @function GetChildCount()
 * @returns {Number}
*/
b2EdgeShape.prototype.GetChildCount = function() {return 0;};
/**
 * @function TestPoint(transform, p)
 * @param {b2Transform} transform
 * @param {b2Vec2} p
 * @returns {Boolean}
*/
b2EdgeShape.prototype.TestPoint = function(transform, p) {return true;};
/**
 * @function RayCast(output, input, transform, childIndex)
 * @param {b2RayCastOutput} output
 * @param {b2RayCastInput} input
 * @param {b2Transform} transform
 * @param {Number} childIndex
 * @returns {Boolean}
*/
b2EdgeShape.prototype.RayCast = function(output, input, transform, childIndex) {return true;};
/**
 * @function ComputeAABB(aabb, transform, childIndex)
 * @param {b2AABB} aabb
 * @param {b2Transform} transform
 * @param {Number} childIndex
*/
b2EdgeShape.prototype.ComputeAABB = function(aabb, transform, childIndex) {};
/**
 * @function ComputeMass(massData, density)
 * @param {b2MassData} massData
 * @param {Number} density
*/
b2EdgeShape.prototype.ComputeMass = function(massData, density) {};
/**
 * Property m_vertex1
 * @type b2Vec2
*/
b2EdgeShape.prototype.m_vertex1 = new b2Vec2();
/**
 * Property m_vertex2
 * @type b2Vec2
*/
b2EdgeShape.prototype.m_vertex2 = new b2Vec2();
/**
 * Property m_vertex0
 * @type b2Vec2
*/
b2EdgeShape.prototype.m_vertex0 = new b2Vec2();
/**
 * Property m_vertex3
 * @type b2Vec2
*/
b2EdgeShape.prototype.m_vertex3 = new b2Vec2();
/**
 * Property m_hasVertex0
 * @type Boolean
*/
b2EdgeShape.prototype.m_hasVertex0 = true;
/**
 * Property m_hasVertex3
 * @type Boolean
*/
b2EdgeShape.prototype.m_hasVertex3 = true;
/**
 * @super Object
 * @constructor 
*/
function b2Filter() {};
b2Filter.prototype = {};
/**
 * Property categoryBits
 * @type Number
*/
b2Filter.prototype.categoryBits = 0;
/**
 * Property maskBits
 * @type Number
*/
b2Filter.prototype.maskBits = 0;
/**
 * Property groupIndex
 * @type int16
*/
b2Filter.prototype.groupIndex = new int16();
/**
 * @super Object
 * @constructor 
*/
function b2FixtureDef() {};
b2FixtureDef.prototype = {};
/**
 * Property shape
 * @type b2Shape
*/
b2FixtureDef.prototype.shape = new b2Shape();
/**
 * Property friction
 * @type Number
*/
b2FixtureDef.prototype.friction = 0;
/**
 * Property restitution
 * @type Number
*/
b2FixtureDef.prototype.restitution = 0;
/**
 * Property density
 * @type Number
*/
b2FixtureDef.prototype.density = 0;
/**
 * Property isSensor
 * @type Boolean
*/
b2FixtureDef.prototype.isSensor = true;
/**
 * Property filter
 * @type b2Filter
*/
b2FixtureDef.prototype.filter = new b2Filter();
/**
 * @super Object
 * @constructor 
*/
function b2FixtureProxy() {};
b2FixtureProxy.prototype = {};
/**
 * Property aabb
 * @type b2AABB
*/
b2FixtureProxy.prototype.aabb = new b2AABB();
/**
 * Property fixture
 * @type b2Fixture
*/
b2FixtureProxy.prototype.fixture = new b2Fixture();
/**
 * Property childIndex
 * @type Number
*/
b2FixtureProxy.prototype.childIndex = 0;
/**
 * Property proxyId
 * @type Number
*/
b2FixtureProxy.prototype.proxyId = 0;
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2Fixture() {};
b2Fixture.prototype = new JacosBaseObject();
/**
 * @function GetType()
 * @returns {Type}
*/
b2Fixture.prototype.GetType = function() {return new Type();};
/**
 * @function GetShape(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * @returns {b2Shape}
*/
b2Fixture.prototype.GetShape = function(args) {return new b2Shape();};
/**
 * @function SetSensor(sensor)
 * @param {Boolean} sensor
*/
b2Fixture.prototype.SetSensor = function(sensor) {};
/**
 * @function IsSensor()
 * @returns {Boolean}
*/
b2Fixture.prototype.IsSensor = function() {return true;};
/**
 * @function SetFilterData(filter)
 * @param {b2Filter} filter
*/
b2Fixture.prototype.SetFilterData = function(filter) {};
/**
 * @function GetFilterData()
 * @returns {b2Filter}
*/
b2Fixture.prototype.GetFilterData = function() {return new b2Filter();};
/**
 * @function Refilter()
*/
b2Fixture.prototype.Refilter = function() {};
/**
 * @function GetBody(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * @returns {b2Body}
*/
b2Fixture.prototype.GetBody = function(args) {return new b2Body();};
/**
 * @function GetNext(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * @returns {b2Fixture}
*/
b2Fixture.prototype.GetNext = function(args) {return new b2Fixture();};
/**
 * @function GetJSUserData()
 * @returns {Object}
*/
b2Fixture.prototype.GetJSUserData = function() {return new Object();};
/**
 * @function SetUserData(data)
 * @param {Object} data
*/
b2Fixture.prototype.SetUserData = function(data) {};
/**
 * @function TestPoint(p)
 * @param {b2Vec2} p
 * @returns {Boolean}
*/
b2Fixture.prototype.TestPoint = function(p) {return true;};
/**
 * @function RayCast(output, input, childIndex)
 * @param {b2RayCastOutput} output
 * @param {b2RayCastInput} input
 * @param {Number} childIndex
 * @returns {Boolean}
*/
b2Fixture.prototype.RayCast = function(output, input, childIndex) {return true;};
/**
 * @function GetMassData(massData)
 * @param {b2MassData} massData
*/
b2Fixture.prototype.GetMassData = function(massData) {};
/**
 * @function SetDensity(density)
 * @param {Number} density
*/
b2Fixture.prototype.SetDensity = function(density) {};
/**
 * @function GetDensity()
 * @returns {Number}
*/
b2Fixture.prototype.GetDensity = function() {return 0;};
/**
 * @function GetFriction()
 * @returns {Number}
*/
b2Fixture.prototype.GetFriction = function() {return 0;};
/**
 * @function SetFriction(friction)
 * @param {Number} friction
*/
b2Fixture.prototype.SetFriction = function(friction) {};
/**
 * @function GetRestitution()
 * @returns {Number}
*/
b2Fixture.prototype.GetRestitution = function() {return 0;};
/**
 * @function SetRestitution(restitution)
 * @param {Number} restitution
*/
b2Fixture.prototype.SetRestitution = function(restitution) {};
/**
 * @function GetAABB(childIndex)
 * @param {Number} childIndex
 * @returns {b2AABB}
*/
b2Fixture.prototype.GetAABB = function(childIndex) {return new b2AABB();};
/**
 * @function Dump(bodyIndex)
 * @param {Number} bodyIndex
*/
b2Fixture.prototype.Dump = function(bodyIndex) {};
/**
 * @super b2JointDef
 * @constructor 
*/
function b2FrictionJointDef() {};
b2FrictionJointDef.prototype = new b2JointDef();
/**
 * @function Initialize(bodyA, bodyB, anchor)
 * @param {b2Body} bodyA
 * @param {b2Body} bodyB
 * @param {b2Vec2} anchor
*/
b2FrictionJointDef.prototype.Initialize = function(bodyA, bodyB, anchor) {};
/**
 * Property localAnchorA
 * @type b2Vec2
*/
b2FrictionJointDef.prototype.localAnchorA = new b2Vec2();
/**
 * Property localAnchorB
 * @type b2Vec2
*/
b2FrictionJointDef.prototype.localAnchorB = new b2Vec2();
/**
 * Property maxForce
 * @type Number
*/
b2FrictionJointDef.prototype.maxForce = 0;
/**
 * Property maxTorque
 * @type Number
*/
b2FrictionJointDef.prototype.maxTorque = 0;
/**
 * @super b2Joint
 * @constructor 
*/
function b2FrictionJoint() {};
b2FrictionJoint.prototype = new b2Joint();
/**
 * @function GetAnchorA()
 * @returns {b2Vec2}
*/
b2FrictionJoint.prototype.GetAnchorA = function() {return new b2Vec2();};
/**
 * @function GetAnchorB()
 * @returns {b2Vec2}
*/
b2FrictionJoint.prototype.GetAnchorB = function() {return new b2Vec2();};
/**
 * @function GetReactionForce(inv_dt)
 * @param {Number} inv_dt
 * @returns {b2Vec2}
*/
b2FrictionJoint.prototype.GetReactionForce = function(inv_dt) {return new b2Vec2();};
/**
 * @function GetReactionTorque(inv_dt)
 * @param {Number} inv_dt
 * @returns {Number}
*/
b2FrictionJoint.prototype.GetReactionTorque = function(inv_dt) {return 0;};
/**
 * @function SetMaxForce(force)
 * @param {Number} force
*/
b2FrictionJoint.prototype.SetMaxForce = function(force) {};
/**
 * @function GetMaxForce()
 * @returns {Number}
*/
b2FrictionJoint.prototype.GetMaxForce = function() {return 0;};
/**
 * @function SetMaxTorque(torque)
 * @param {Number} torque
*/
b2FrictionJoint.prototype.SetMaxTorque = function(torque) {};
/**
 * @function GetMaxTorque()
 * @returns {Number}
*/
b2FrictionJoint.prototype.GetMaxTorque = function() {return 0;};
/**
 * @function Dump()
*/
b2FrictionJoint.prototype.Dump = function() {};
/**
 * @function tryCastFromb2Joint(joint)
 * @static
 * @param {b2Joint} joint
 * @returns {b2FrictionJoint}
*/
b2FrictionJoint.tryCastFromb2Joint = function(joint) {return new b2FrictionJoint();};
/**
 * @super b2JointDef
 * @constructor 
*/
function b2GearJointDef() {};
b2GearJointDef.prototype = new b2JointDef();
/**
 * Property joint1
 * @type b2Joint
*/
b2GearJointDef.prototype.joint1 = new b2Joint();
/**
 * Property joint2
 * @type b2Joint
*/
b2GearJointDef.prototype.joint2 = new b2Joint();
/**
 * Property ratio
 * @type Number
*/
b2GearJointDef.prototype.ratio = 0;
/**
 * @super b2Joint
 * @constructor 
*/
function b2GearJoint() {};
b2GearJoint.prototype = new b2Joint();
/**
 * @function GetAnchorA()
 * @returns {b2Vec2}
*/
b2GearJoint.prototype.GetAnchorA = function() {return new b2Vec2();};
/**
 * @function GetAnchorB()
 * @returns {b2Vec2}
*/
b2GearJoint.prototype.GetAnchorB = function() {return new b2Vec2();};
/**
 * @function GetReactionForce(inv_dt)
 * @param {Number} inv_dt
 * @returns {b2Vec2}
*/
b2GearJoint.prototype.GetReactionForce = function(inv_dt) {return new b2Vec2();};
/**
 * @function GetReactionTorque(inv_dt)
 * @param {Number} inv_dt
 * @returns {Number}
*/
b2GearJoint.prototype.GetReactionTorque = function(inv_dt) {return 0;};
/**
 * @function GetJoint1()
 * @returns {b2Joint}
*/
b2GearJoint.prototype.GetJoint1 = function() {return new b2Joint();};
/**
 * @function GetJoint2()
 * @returns {b2Joint}
*/
b2GearJoint.prototype.GetJoint2 = function() {return new b2Joint();};
/**
 * @function SetRatio(ratio)
 * @param {Number} ratio
*/
b2GearJoint.prototype.SetRatio = function(ratio) {};
/**
 * @function GetRatio()
 * @returns {Number}
*/
b2GearJoint.prototype.GetRatio = function() {return 0;};
/**
 * @function Dump()
*/
b2GearJoint.prototype.Dump = function() {};
/**
 * @function tryCastFromb2Joint(joint)
 * @static
 * @param {b2Joint} joint
 * @returns {b2GearJoint}
*/
b2GearJoint.tryCastFromb2Joint = function(joint) {return new b2GearJoint();};
/**
 * @super JacosBaseObject
 * @constructor 
 * @param {Number} bodyCapacity
 * @param {Number} contactCapacity
 * @param {Number} jointCapacity
 * @param {b2StackAllocator} allocator
 * @param {b2ContactListener} listener
*/
function b2Island(bodyCapacity, contactCapacity, jointCapacity, allocator, listener) {};
b2Island.prototype = new JacosBaseObject();
/**
 * @function Clear()
*/
b2Island.prototype.Clear = function() {};
/**
 * @function Solve(profile, step, gravity, allowSleep)
 * @param {b2Profile} profile
 * @param {b2TimeStep} step
 * @param {b2Vec2} gravity
 * @param {Boolean} allowSleep
*/
b2Island.prototype.Solve = function(profile, step, gravity, allowSleep) {};
/**
 * @function SolveTOI(subStep, toiIndexA, toiIndexB)
 * @param {b2TimeStep} subStep
 * @param {Number} toiIndexA
 * @param {Number} toiIndexB
*/
b2Island.prototype.SolveTOI = function(subStep, toiIndexA, toiIndexB) {};
/**
 * @function Add(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {b2Body} - body.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {b2Contact} - contact.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {b2Joint} - joint.<br />
*/
b2Island.prototype.Add = function(args) {};
/**
 * @function Report(constraints)
 * @param {b2ContactVelocityConstraint} constraints
*/
b2Island.prototype.Report = function(constraints) {};
/**
 * @super Object
 * @constructor 
*/
function b2Jacobian() {};
b2Jacobian.prototype = {};
/**
 * Property linear
 * @type b2Vec2
*/
b2Jacobian.prototype.linear = new b2Vec2();
/**
 * Property angularA
 * @type Number
*/
b2Jacobian.prototype.angularA = 0;
/**
 * Property angularB
 * @type Number
*/
b2Jacobian.prototype.angularB = 0;
/**
 * @super Object
 * @constructor 
*/
function b2JointEdge() {};
b2JointEdge.prototype = {};
/**
 * Property other
 * @type b2Body
*/
b2JointEdge.prototype.other = new b2Body();
/**
 * Property joint
 * @type b2Joint
*/
b2JointEdge.prototype.joint = new b2Joint();
/**
 * Property prev
 * @type b2JointEdge
*/
b2JointEdge.prototype.prev = new b2JointEdge();
/**
 * Property next
 * @type b2JointEdge
*/
b2JointEdge.prototype.next = new b2JointEdge();
/**
 * @super Object
 * @constructor 
*/
function b2JointDef() {};
b2JointDef.prototype = {};
/**
 * Property type
 * @type b2JointType
*/
b2JointDef.prototype.type = new b2JointType();
/**
 * Property bodyA
 * @type b2Body
*/
b2JointDef.prototype.bodyA = new b2Body();
/**
 * Property bodyB
 * @type b2Body
*/
b2JointDef.prototype.bodyB = new b2Body();
/**
 * Property collideConnected
 * @type Boolean
*/
b2JointDef.prototype.collideConnected = true;
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2Joint() {};
b2Joint.prototype = new JacosBaseObject();
/**
 * @function GetType()
 * @returns {b2JointType}
*/
b2Joint.prototype.GetType = function() {return new b2JointType();};
/**
 * @function GetBodyA()
 * @returns {b2Body}
*/
b2Joint.prototype.GetBodyA = function() {return new b2Body();};
/**
 * @function GetBodyB()
 * @returns {b2Body}
*/
b2Joint.prototype.GetBodyB = function() {return new b2Body();};
/**
 * @function GetAnchorA()
 * @returns {b2Vec2}
*/
b2Joint.prototype.GetAnchorA = function() {return new b2Vec2();};
/**
 * @function GetAnchorB()
 * @returns {b2Vec2}
*/
b2Joint.prototype.GetAnchorB = function() {return new b2Vec2();};
/**
 * @function GetReactionForce(inv_dt)
 * @param {Number} inv_dt
 * @returns {b2Vec2}
*/
b2Joint.prototype.GetReactionForce = function(inv_dt) {return new b2Vec2();};
/**
 * @function GetReactionTorque(inv_dt)
 * @param {Number} inv_dt
 * @returns {Number}
*/
b2Joint.prototype.GetReactionTorque = function(inv_dt) {return 0;};
/**
 * @function GetNext(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * @returns {b2Joint}
*/
b2Joint.prototype.GetNext = function(args) {return new b2Joint();};
/**
 * @function GetJSUserData()
 * @returns {V8HandleValue}
*/
b2Joint.prototype.GetJSUserData = function() {return new V8HandleValue();};
/**
 * @function SetUserData(data)
 * @param {Object} data
*/
b2Joint.prototype.SetUserData = function(data) {};
/**
 * @function IsActive()
 * @returns {Boolean}
*/
b2Joint.prototype.IsActive = function() {return true;};
/**
 * @function GetCollideConnected()
 * @returns {Boolean}
*/
b2Joint.prototype.GetCollideConnected = function() {return true;};
/**
 * @function Dump()
*/
b2Joint.prototype.Dump = function() {};
/**
 * @function tryCastTob2DistanceJoint()
 * @returns {b2DistanceJoint}
*/
b2Joint.prototype.tryCastTob2DistanceJoint = function() {return new b2DistanceJoint();};
/**
 * @function tryCastTob2MouseJoint()
 * @returns {b2MouseJoint}
*/
b2Joint.prototype.tryCastTob2MouseJoint = function() {return new b2MouseJoint();};
/**
 * @function tryCastTob2PrismaticJoint()
 * @returns {b2PrismaticJoint}
*/
b2Joint.prototype.tryCastTob2PrismaticJoint = function() {return new b2PrismaticJoint();};
/**
 * @function tryCastTob2RevoluteJoint()
 * @returns {b2RevoluteJoint}
*/
b2Joint.prototype.tryCastTob2RevoluteJoint = function() {return new b2RevoluteJoint();};
/**
 * @function tryCastTob2PulleyJoint()
 * @returns {b2PulleyJoint}
*/
b2Joint.prototype.tryCastTob2PulleyJoint = function() {return new b2PulleyJoint();};
/**
 * @function tryCastTob2GearJoint()
 * @returns {b2GearJoint}
*/
b2Joint.prototype.tryCastTob2GearJoint = function() {return new b2GearJoint();};
/**
 * @function tryCastTob2WheelJoint()
 * @returns {b2WheelJoint}
*/
b2Joint.prototype.tryCastTob2WheelJoint = function() {return new b2WheelJoint();};
/**
 * @function tryCastTob2WeldJoint()
 * @returns {b2WeldJoint}
*/
b2Joint.prototype.tryCastTob2WeldJoint = function() {return new b2WeldJoint();};
/**
 * @function tryCastTob2FrictionJoint()
 * @returns {b2FrictionJoint}
*/
b2Joint.prototype.tryCastTob2FrictionJoint = function() {return new b2FrictionJoint();};
/**
 * @function tryCastTob2RopeJoint()
 * @returns {b2RopeJoint}
*/
b2Joint.prototype.tryCastTob2RopeJoint = function() {return new b2RopeJoint();};
box2d.e_unknownJoint = 0;
box2d.e_revoluteJoint = 1;
box2d.e_prismaticJoint = 2;
box2d.e_distanceJoint = 3;
box2d.e_pulleyJoint = 4;
box2d.e_mouseJoint = 5;
box2d.e_gearJoint = 6;
box2d.e_wheelJoint = 7;
box2d.e_weldJoint = 8;
box2d.e_frictionJoint = 9;
box2d.e_ropeJoint = 10;
box2d.e_inactiveLimit = 0;
box2d.e_atLowerLimit = 1;
box2d.e_atUpperLimit = 2;
box2d.e_equalLimits = 3;
/**
 * @super b2JointDef
 * @constructor 
*/
function b2LineJointDef() {};
b2LineJointDef.prototype = new b2JointDef();
/**
 * @function Initialize(bodyA, bodyB, anchor, axis)
 * @param {b2Body} bodyA
 * @param {b2Body} bodyB
 * @param {b2Vec2} anchor
 * @param {b2Vec2} axis
*/
b2LineJointDef.prototype.Initialize = function(bodyA, bodyB, anchor, axis) {};
/**
 * Property localAnchorA
 * @type b2Vec2
*/
b2LineJointDef.prototype.localAnchorA = new b2Vec2();
/**
 * Property localAnchorB
 * @type b2Vec2
*/
b2LineJointDef.prototype.localAnchorB = new b2Vec2();
/**
 * Property localAxisA
 * @type b2Vec2
*/
b2LineJointDef.prototype.localAxisA = new b2Vec2();
/**
 * Property enableLimit
 * @type Boolean
*/
b2LineJointDef.prototype.enableLimit = true;
/**
 * Property lowerTranslation
 * @type Number
*/
b2LineJointDef.prototype.lowerTranslation = 0;
/**
 * Property upperTranslation
 * @type Number
*/
b2LineJointDef.prototype.upperTranslation = 0;
/**
 * Property enableMotor
 * @type Boolean
*/
b2LineJointDef.prototype.enableMotor = true;
/**
 * Property maxMotorForce
 * @type Number
*/
b2LineJointDef.prototype.maxMotorForce = 0;
/**
 * Property motorSpeed
 * @type Number
*/
b2LineJointDef.prototype.motorSpeed = 0;
/**
 * @super b2Joint
 * @constructor 
*/
function b2LineJoint() {};
b2LineJoint.prototype = new b2Joint();
/**
 * @function GetAnchorA()
 * @returns {b2Vec2}
*/
b2LineJoint.prototype.GetAnchorA = function() {return new b2Vec2();};
/**
 * @function GetAnchorB()
 * @returns {b2Vec2}
*/
b2LineJoint.prototype.GetAnchorB = function() {return new b2Vec2();};
/**
 * @function GetReactionForce(inv_dt)
 * @param {Number} inv_dt
 * @returns {b2Vec2}
*/
b2LineJoint.prototype.GetReactionForce = function(inv_dt) {return new b2Vec2();};
/**
 * @function GetReactionTorque(inv_dt)
 * @param {Number} inv_dt
 * @returns {Number}
*/
b2LineJoint.prototype.GetReactionTorque = function(inv_dt) {return 0;};
/**
 * @function GetJointTranslation()
 * @returns {Number}
*/
b2LineJoint.prototype.GetJointTranslation = function() {return 0;};
/**
 * @function GetJointSpeed()
 * @returns {Number}
*/
b2LineJoint.prototype.GetJointSpeed = function() {return 0;};
/**
 * @function IsLimitEnabled()
 * @returns {Boolean}
*/
b2LineJoint.prototype.IsLimitEnabled = function() {return true;};
/**
 * @function EnableLimit(flag)
 * @param {Boolean} flag
*/
b2LineJoint.prototype.EnableLimit = function(flag) {};
/**
 * @function GetLowerLimit()
 * @returns {Number}
*/
b2LineJoint.prototype.GetLowerLimit = function() {return 0;};
/**
 * @function GetUpperLimit()
 * @returns {Number}
*/
b2LineJoint.prototype.GetUpperLimit = function() {return 0;};
/**
 * @function SetLimits(lower, upper)
 * @param {Number} lower
 * @param {Number} upper
*/
b2LineJoint.prototype.SetLimits = function(lower, upper) {};
/**
 * @function IsMotorEnabled()
 * @returns {Boolean}
*/
b2LineJoint.prototype.IsMotorEnabled = function() {return true;};
/**
 * @function EnableMotor(flag)
 * @param {Boolean} flag
*/
b2LineJoint.prototype.EnableMotor = function(flag) {};
/**
 * @function SetMotorSpeed(speed)
 * @param {Number} speed
*/
b2LineJoint.prototype.SetMotorSpeed = function(speed) {};
/**
 * @function GetMotorSpeed()
 * @returns {Number}
*/
b2LineJoint.prototype.GetMotorSpeed = function() {return 0;};
/**
 * @function SetMaxMotorForce(force)
 * @param {Number} force
*/
b2LineJoint.prototype.SetMaxMotorForce = function(force) {};
/**
 * @function GetMaxMotorForce()
 * @returns {Number}
*/
b2LineJoint.prototype.GetMaxMotorForce = function() {return 0;};
/**
 * @function GetMotorForce()
 * @returns {Number}
*/
b2LineJoint.prototype.GetMotorForce = function() {return 0;};
/**
 * @super Object
 * @constructor 
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - x <b>and</b> args[1] is {Number} - y.<br />
*/
function b2Vec2(args) {};
b2Vec2.prototype = {};
/**
 * @function SetZero()
*/
b2Vec2.prototype.SetZero = function() {};
/**
 * @function Set(x_, y_)
 * @param {Number} x_
 * @param {Number} y_
*/
b2Vec2.prototype.Set = function(x_, y_) {};
/**
 * @function LengthSquared()
 * @returns {Number}
*/
b2Vec2.prototype.LengthSquared = function() {return 0;};
/**
 * @function Normalize()
 * @returns {Number}
*/
b2Vec2.prototype.Normalize = function() {return 0;};
/**
 * @function IsValid()
 * @returns {Boolean}
*/
b2Vec2.prototype.IsValid = function() {return true;};
/**
 * @function Skew()
 * @returns {b2Vec2}
*/
b2Vec2.prototype.Skew = function() {return new b2Vec2();};
/**
 * Property x
 * @type Number
*/
b2Vec2.prototype.x = 0;
/**
 * Property y
 * @type Number
*/
b2Vec2.prototype.y = 0;
/**
 * @super Object
 * @constructor 
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - x <b>and</b> args[1] is {Number} - y <b>and</b> args[2] is {Number} - z.<br />
*/
function b2Vec3(args) {};
b2Vec3.prototype = {};
/**
 * @function SetZero()
*/
b2Vec3.prototype.SetZero = function() {};
/**
 * @function Set(x_, y_, z_)
 * @param {Number} x_
 * @param {Number} y_
 * @param {Number} z_
*/
b2Vec3.prototype.Set = function(x_, y_, z_) {};
/**
 * Property x
 * @type Number
*/
b2Vec3.prototype.x = 0;
/**
 * Property y
 * @type Number
*/
b2Vec3.prototype.y = 0;
/**
 * Property z
 * @type Number
*/
b2Vec3.prototype.z = 0;
/**
 * @super Object
 * @constructor 
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {b2Vec2} - c1 <b>and</b> args[1] is {b2Vec2} - c2.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - a11 <b>and</b> args[1] is {Number} - a12 <b>and</b> args[2] is {Number} - a21 <b>and</b> args[3] is {Number} - a22.<br />
*/
function b2Mat22(args) {};
b2Mat22.prototype = {};
/**
 * @function Set(c1, c2)
 * @param {b2Vec2} c1
 * @param {b2Vec2} c2
*/
b2Mat22.prototype.Set = function(c1, c2) {};
/**
 * @function SetIdentity()
*/
b2Mat22.prototype.SetIdentity = function() {};
/**
 * @function SetZero()
*/
b2Mat22.prototype.SetZero = function() {};
/**
 * @function GetInverse()
 * @returns {b2Mat22}
*/
b2Mat22.prototype.GetInverse = function() {return new b2Mat22();};
/**
 * @function Solve(b)
 * @param {b2Vec2} b
 * @returns {b2Vec2}
*/
b2Mat22.prototype.Solve = function(b) {return new b2Vec2();};
/**
 * Property ex
 * @type b2Vec2
*/
b2Mat22.prototype.ex = new b2Vec2();
/**
 * Property ey
 * @type b2Vec2
*/
b2Mat22.prototype.ey = new b2Vec2();
/**
 * @super Object
 * @constructor 
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {b2Vec3} - c1 <b>and</b> args[1] is {b2Vec3} - c2 <b>and</b> args[2] is {b2Vec3} - c3.<br />
*/
function b2Mat33(args) {};
b2Mat33.prototype = {};
/**
 * @function SetZero()
*/
b2Mat33.prototype.SetZero = function() {};
/**
 * @function Solve33(b)
 * @param {b2Vec3} b
 * @returns {b2Vec3}
*/
b2Mat33.prototype.Solve33 = function(b) {return new b2Vec3();};
/**
 * @function Solve22(b)
 * @param {b2Vec2} b
 * @returns {b2Vec2}
*/
b2Mat33.prototype.Solve22 = function(b) {return new b2Vec2();};
/**
 * @function GetInverse22(M)
 * @param {b2Mat33} M
*/
b2Mat33.prototype.GetInverse22 = function(M) {};
/**
 * @function GetSymInverse33(M)
 * @param {b2Mat33} M
*/
b2Mat33.prototype.GetSymInverse33 = function(M) {};
/**
 * Property ex
 * @type b2Vec3
*/
b2Mat33.prototype.ex = new b2Vec3();
/**
 * Property ey
 * @type b2Vec3
*/
b2Mat33.prototype.ey = new b2Vec3();
/**
 * Property ez
 * @type b2Vec3
*/
b2Mat33.prototype.ez = new b2Vec3();
/**
 * @super Object
 * @constructor 
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - angle.<br />
*/
function b2Rot(args) {};
b2Rot.prototype = {};
/**
 * @function Set(angle)
 * @param {Number} angle
*/
b2Rot.prototype.Set = function(angle) {};
/**
 * @function SetIdentity()
*/
b2Rot.prototype.SetIdentity = function() {};
/**
 * @function GetAngle()
 * @returns {Number}
*/
b2Rot.prototype.GetAngle = function() {return 0;};
/**
 * @function GetXAxis()
 * @returns {b2Vec2}
*/
b2Rot.prototype.GetXAxis = function() {return new b2Vec2();};
/**
 * @function GetYAxis()
 * @returns {b2Vec2}
*/
b2Rot.prototype.GetYAxis = function() {return new b2Vec2();};
/**
 * Property s
 * @type Number
*/
b2Rot.prototype.s = 0;
/**
 * Property c
 * @type Number
*/
b2Rot.prototype.c = 0;
/**
 * @super Object
 * @constructor 
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {b2Vec2} - position <b>and</b> args[1] is {b2Rot} - rotation.<br />
*/
function b2Transform(args) {};
b2Transform.prototype = {};
/**
 * @function SetIdentity()
*/
b2Transform.prototype.SetIdentity = function() {};
/**
 * @function Set(position, angle)
 * @param {b2Vec2} position
 * @param {Number} angle
*/
b2Transform.prototype.Set = function(position, angle) {};
/**
 * Property p
 * @type b2Vec2
*/
b2Transform.prototype.p = new b2Vec2();
/**
 * Property q
 * @type b2Rot
*/
b2Transform.prototype.q = new b2Rot();
/**
 * @super Object
 * @constructor 
*/
function b2Sweep() {};
b2Sweep.prototype = {};
/**
 * @function GetTransform(xfb, beta)
 * @param {b2Transform} xfb
 * @param {Number} beta
*/
b2Sweep.prototype.GetTransform = function(xfb, beta) {};
/**
 * @function Advance(alpha)
 * @param {Number} alpha
*/
b2Sweep.prototype.Advance = function(alpha) {};
/**
 * @function Normalize()
*/
b2Sweep.prototype.Normalize = function() {};
/**
 * Property localCenter
 * @type b2Vec2
*/
b2Sweep.prototype.localCenter = new b2Vec2();
/**
 * Property c0
 * @type b2Vec2
*/
b2Sweep.prototype.c0 = new b2Vec2();
/**
 * Property c
 * @type b2Vec2
*/
b2Sweep.prototype.c = new b2Vec2();
/**
 * Property a0
 * @type Number
*/
b2Sweep.prototype.a0 = 0;
/**
 * Property a
 * @type Number
*/
b2Sweep.prototype.a = 0;
/**
 * Property alpha0
 * @type Number
*/
b2Sweep.prototype.alpha0 = 0;
/**
 * @function b2IsValid(x)
 * @static
 * @param {Number} x
 * @returns {Boolean}
*/
box2d.b2IsValid = function(x) {return true;};
/**
 * @super b2JointDef
 * @constructor 
*/
function b2MouseJointDef() {};
b2MouseJointDef.prototype = new b2JointDef();
/**
 * Property target
 * @type b2Vec2
*/
b2MouseJointDef.prototype.target = new b2Vec2();
/**
 * Property maxForce
 * @type Number
*/
b2MouseJointDef.prototype.maxForce = 0;
/**
 * Property frequencyHz
 * @type Number
*/
b2MouseJointDef.prototype.frequencyHz = 0;
/**
 * Property dampingRatio
 * @type Number
*/
b2MouseJointDef.prototype.dampingRatio = 0;
/**
 * @super b2Joint
 * @constructor 
*/
function b2MouseJoint() {};
b2MouseJoint.prototype = new b2Joint();
/**
 * @function GetAnchorA()
 * @returns {b2Vec2}
*/
b2MouseJoint.prototype.GetAnchorA = function() {return new b2Vec2();};
/**
 * @function GetAnchorB()
 * @returns {b2Vec2}
*/
b2MouseJoint.prototype.GetAnchorB = function() {return new b2Vec2();};
/**
 * @function GetReactionForce(inv_dt)
 * @param {Number} inv_dt
 * @returns {b2Vec2}
*/
b2MouseJoint.prototype.GetReactionForce = function(inv_dt) {return new b2Vec2();};
/**
 * @function GetReactionTorque(inv_dt)
 * @param {Number} inv_dt
 * @returns {Number}
*/
b2MouseJoint.prototype.GetReactionTorque = function(inv_dt) {return 0;};
/**
 * @function SetTarget(target)
 * @param {b2Vec2} target
*/
b2MouseJoint.prototype.SetTarget = function(target) {};
/**
 * @function GetTarget()
 * @returns {b2Vec2}
*/
b2MouseJoint.prototype.GetTarget = function() {return new b2Vec2();};
/**
 * @function SetMaxForce(force)
 * @param {Number} force
*/
b2MouseJoint.prototype.SetMaxForce = function(force) {};
/**
 * @function GetMaxForce()
 * @returns {Number}
*/
b2MouseJoint.prototype.GetMaxForce = function() {return 0;};
/**
 * @function SetFrequency(hz)
 * @param {Number} hz
*/
b2MouseJoint.prototype.SetFrequency = function(hz) {};
/**
 * @function GetFrequency()
 * @returns {Number}
*/
b2MouseJoint.prototype.GetFrequency = function() {return 0;};
/**
 * @function SetDampingRatio(ratio)
 * @param {Number} ratio
*/
b2MouseJoint.prototype.SetDampingRatio = function(ratio) {};
/**
 * @function GetDampingRatio()
 * @returns {Number}
*/
b2MouseJoint.prototype.GetDampingRatio = function() {return 0;};
/**
 * @function Dump()
*/
b2MouseJoint.prototype.Dump = function() {};
/**
 * @function tryCastFromb2Joint(joint)
 * @static
 * @param {b2Joint} joint
 * @returns {b2MouseJoint}
*/
b2MouseJoint.tryCastFromb2Joint = function(joint) {return new b2MouseJoint();};
/**
 * @super b2Contact
 * @constructor 
*/
function b2NullContact() {};
b2NullContact.prototype = new b2Contact();
/**
 * @function Evaluate()
*/
b2NullContact.prototype.Evaluate = function() {};
/**
 * @function ComputeTOI(sweepA, sweepB)
 * @param {b2Sweep} sweepA
 * @param {b2Sweep} sweepB
 * @returns {Number}
*/
b2NullContact.prototype.ComputeTOI = function(sweepA, sweepB) {return 0;};
/**
 * @super b2Contact
 * @constructor 
 * @param {b2Fixture} fixtureA
 * @param {b2Fixture} fixtureB
*/
function b2PolygonAndCircleContact(fixtureA, fixtureB) {};
b2PolygonAndCircleContact.prototype = new b2Contact();
/**
 * @function Create(fixtureA, indexA, fixtureB, indexB, allocator)
 * @static
 * @param {b2Fixture} fixtureA
 * @param {Number} indexA
 * @param {b2Fixture} fixtureB
 * @param {Number} indexB
 * @param {b2BlockAllocator} allocator
 * @returns {b2Contact}
*/
b2PolygonAndCircleContact.Create = function(fixtureA, indexA, fixtureB, indexB, allocator) {return new b2Contact();};
/**
 * @function Destroy(contact, allocator)
 * @static
 * @param {b2Contact} contact
 * @param {b2BlockAllocator} allocator
*/
b2PolygonAndCircleContact.Destroy = function(contact, allocator) {};
/**
 * @function Evaluate(manifold, xfA, xfB)
 * @param {b2Manifold} manifold
 * @param {b2Transform} xfA
 * @param {b2Transform} xfB
*/
b2PolygonAndCircleContact.prototype.Evaluate = function(manifold, xfA, xfB) {};
/**
 * @super b2Contact
 * @constructor 
 * @param {b2Fixture} fixtureA
 * @param {b2Fixture} fixtureB
*/
function b2PolygonContact(fixtureA, fixtureB) {};
b2PolygonContact.prototype = new b2Contact();
/**
 * @function Create(fixtureA, indexA, fixtureB, indexB, allocator)
 * @static
 * @param {b2Fixture} fixtureA
 * @param {Number} indexA
 * @param {b2Fixture} fixtureB
 * @param {Number} indexB
 * @param {b2BlockAllocator} allocator
 * @returns {b2Contact}
*/
b2PolygonContact.Create = function(fixtureA, indexA, fixtureB, indexB, allocator) {return new b2Contact();};
/**
 * @function Destroy(contact, allocator)
 * @static
 * @param {b2Contact} contact
 * @param {b2BlockAllocator} allocator
*/
b2PolygonContact.Destroy = function(contact, allocator) {};
/**
 * @function Evaluate(manifold, xfA, xfB)
 * @param {b2Manifold} manifold
 * @param {b2Transform} xfA
 * @param {b2Transform} xfB
*/
b2PolygonContact.prototype.Evaluate = function(manifold, xfA, xfB) {};
/**
 * @super b2Shape
 * @constructor 
*/
function b2PolygonShape() {};
b2PolygonShape.prototype = new b2Shape();
/**
 * @function Clone(allocator)
 * @param {b2BlockAllocator} allocator
 * @returns {b2Shape}
*/
b2PolygonShape.prototype.Clone = function(allocator) {return new b2Shape();};
/**
 * @function GetChildCount()
 * @returns {Number}
*/
b2PolygonShape.prototype.GetChildCount = function() {return 0;};
/**
 * @function Set(vertices, vertexCount)
 * @param {b2Vec2} vertices
 * @param {Number} vertexCount
*/
b2PolygonShape.prototype.Set = function(vertices, vertexCount) {};
/**
 * @function SetAsBox(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - hx <b>and</b> args[1] is {Number} - hy.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - hx <b>and</b> args[1] is {Number} - hy <b>and</b> args[2] is {b2Vec2} - center <b>and</b> args[3] is {Number} - angle.<br />
*/
b2PolygonShape.prototype.SetAsBox = function(args) {};
/**
 * @function TestPoint(transform, p)
 * @param {b2Transform} transform
 * @param {b2Vec2} p
 * @returns {Boolean}
*/
b2PolygonShape.prototype.TestPoint = function(transform, p) {return true;};
/**
 * @function RayCast(output, input, transform, childIndex)
 * @param {b2RayCastOutput} output
 * @param {b2RayCastInput} input
 * @param {b2Transform} transform
 * @param {Number} childIndex
 * @returns {Boolean}
*/
b2PolygonShape.prototype.RayCast = function(output, input, transform, childIndex) {return true;};
/**
 * @function ComputeAABB(aabb, transform, childIndex)
 * @param {b2AABB} aabb
 * @param {b2Transform} transform
 * @param {Number} childIndex
*/
b2PolygonShape.prototype.ComputeAABB = function(aabb, transform, childIndex) {};
/**
 * @function ComputeMass(massData, density)
 * @param {b2MassData} massData
 * @param {Number} density
*/
b2PolygonShape.prototype.ComputeMass = function(massData, density) {};
/**
 * @function GetVertexCount()
 * @returns {Number}
*/
b2PolygonShape.prototype.GetVertexCount = function() {return 0;};
/**
 * @function GetVertex(index)
 * @param {Number} index
 * @returns {b2Vec2}
*/
b2PolygonShape.prototype.GetVertex = function(index) {return new b2Vec2();};
/**
 * @super b2JointDef
 * @constructor 
*/
function b2PrismaticJointDef() {};
b2PrismaticJointDef.prototype = new b2JointDef();
/**
 * @function Initialize(bodyA, bodyB, anchor, axis)
 * @param {b2Body} bodyA
 * @param {b2Body} bodyB
 * @param {b2Vec2} anchor
 * @param {b2Vec2} axis
*/
b2PrismaticJointDef.prototype.Initialize = function(bodyA, bodyB, anchor, axis) {};
/**
 * Property localAnchorA
 * @type b2Vec2
*/
b2PrismaticJointDef.prototype.localAnchorA = new b2Vec2();
/**
 * Property localAnchorB
 * @type b2Vec2
*/
b2PrismaticJointDef.prototype.localAnchorB = new b2Vec2();
/**
 * Property localAxisA
 * @type b2Vec2
*/
b2PrismaticJointDef.prototype.localAxisA = new b2Vec2();
/**
 * Property referenceAngle
 * @type Number
*/
b2PrismaticJointDef.prototype.referenceAngle = 0;
/**
 * Property enableLimit
 * @type Boolean
*/
b2PrismaticJointDef.prototype.enableLimit = true;
/**
 * Property lowerTranslation
 * @type Number
*/
b2PrismaticJointDef.prototype.lowerTranslation = 0;
/**
 * Property upperTranslation
 * @type Number
*/
b2PrismaticJointDef.prototype.upperTranslation = 0;
/**
 * Property enableMotor
 * @type Boolean
*/
b2PrismaticJointDef.prototype.enableMotor = true;
/**
 * Property maxMotorForce
 * @type Number
*/
b2PrismaticJointDef.prototype.maxMotorForce = 0;
/**
 * Property motorSpeed
 * @type Number
*/
b2PrismaticJointDef.prototype.motorSpeed = 0;
/**
 * @super b2Joint
 * @constructor 
*/
function b2PrismaticJoint() {};
b2PrismaticJoint.prototype = new b2Joint();
/**
 * @function GetAnchorA()
 * @returns {b2Vec2}
*/
b2PrismaticJoint.prototype.GetAnchorA = function() {return new b2Vec2();};
/**
 * @function GetAnchorB()
 * @returns {b2Vec2}
*/
b2PrismaticJoint.prototype.GetAnchorB = function() {return new b2Vec2();};
/**
 * @function GetReactionForce(inv_dt)
 * @param {Number} inv_dt
 * @returns {b2Vec2}
*/
b2PrismaticJoint.prototype.GetReactionForce = function(inv_dt) {return new b2Vec2();};
/**
 * @function GetReactionTorque(inv_dt)
 * @param {Number} inv_dt
 * @returns {Number}
*/
b2PrismaticJoint.prototype.GetReactionTorque = function(inv_dt) {return 0;};
/**
 * @function GetLocalAnchorA()
 * @returns {b2Vec2}
*/
b2PrismaticJoint.prototype.GetLocalAnchorA = function() {return new b2Vec2();};
/**
 * @function GetLocalAnchorB()
 * @returns {b2Vec2}
*/
b2PrismaticJoint.prototype.GetLocalAnchorB = function() {return new b2Vec2();};
/**
 * @function GetLocalAxisA()
 * @returns {b2Vec2}
*/
b2PrismaticJoint.prototype.GetLocalAxisA = function() {return new b2Vec2();};
/**
 * @function GetReferenceAngle()
 * @returns {Number}
*/
b2PrismaticJoint.prototype.GetReferenceAngle = function() {return 0;};
/**
 * @function GetJointTranslation()
 * @returns {Number}
*/
b2PrismaticJoint.prototype.GetJointTranslation = function() {return 0;};
/**
 * @function GetJointSpeed()
 * @returns {Number}
*/
b2PrismaticJoint.prototype.GetJointSpeed = function() {return 0;};
/**
 * @function IsLimitEnabled()
 * @returns {Boolean}
*/
b2PrismaticJoint.prototype.IsLimitEnabled = function() {return true;};
/**
 * @function EnableLimit(flag)
 * @param {Boolean} flag
*/
b2PrismaticJoint.prototype.EnableLimit = function(flag) {};
/**
 * @function GetLowerLimit()
 * @returns {Number}
*/
b2PrismaticJoint.prototype.GetLowerLimit = function() {return 0;};
/**
 * @function GetUpperLimit()
 * @returns {Number}
*/
b2PrismaticJoint.prototype.GetUpperLimit = function() {return 0;};
/**
 * @function SetLimits(lower, upper)
 * @param {Number} lower
 * @param {Number} upper
*/
b2PrismaticJoint.prototype.SetLimits = function(lower, upper) {};
/**
 * @function IsMotorEnabled()
 * @returns {Boolean}
*/
b2PrismaticJoint.prototype.IsMotorEnabled = function() {return true;};
/**
 * @function EnableMotor(flag)
 * @param {Boolean} flag
*/
b2PrismaticJoint.prototype.EnableMotor = function(flag) {};
/**
 * @function SetMotorSpeed(speed)
 * @param {Number} speed
*/
b2PrismaticJoint.prototype.SetMotorSpeed = function(speed) {};
/**
 * @function GetMotorSpeed()
 * @returns {Number}
*/
b2PrismaticJoint.prototype.GetMotorSpeed = function() {return 0;};
/**
 * @function SetMaxMotorForce(force)
 * @param {Number} force
*/
b2PrismaticJoint.prototype.SetMaxMotorForce = function(force) {};
/**
 * @function GetMaxMotorForce()
 * @returns {Number}
*/
b2PrismaticJoint.prototype.GetMaxMotorForce = function() {return 0;};
/**
 * @function GetMotorForce(inv_dt)
 * @param {Number} inv_dt
 * @returns {Number}
*/
b2PrismaticJoint.prototype.GetMotorForce = function(inv_dt) {return 0;};
/**
 * @function Dump()
*/
b2PrismaticJoint.prototype.Dump = function() {};
/**
 * @function tryCastFromb2Joint(joint)
 * @static
 * @param {b2Joint} joint
 * @returns {b2PrismaticJoint}
*/
b2PrismaticJoint.tryCastFromb2Joint = function(joint) {return new b2PrismaticJoint();};
/**
 * @super b2JointDef
 * @constructor 
*/
function b2PulleyJointDef() {};
b2PulleyJointDef.prototype = new b2JointDef();
/**
 * @function Initialize(bodyA, bodyB, groundAnchorA, groundAnchorB, anchorA, anchorB, ratio)
 * @param {b2Body} bodyA
 * @param {b2Body} bodyB
 * @param {b2Vec2} groundAnchorA
 * @param {b2Vec2} groundAnchorB
 * @param {b2Vec2} anchorA
 * @param {b2Vec2} anchorB
 * @param {Number} ratio
*/
b2PulleyJointDef.prototype.Initialize = function(bodyA, bodyB, groundAnchorA, groundAnchorB, anchorA, anchorB, ratio) {};
/**
 * Property groundAnchorA
 * @type b2Vec2
*/
b2PulleyJointDef.prototype.groundAnchorA = new b2Vec2();
/**
 * Property groundAnchorB
 * @type b2Vec2
*/
b2PulleyJointDef.prototype.groundAnchorB = new b2Vec2();
/**
 * Property localAnchorA
 * @type b2Vec2
*/
b2PulleyJointDef.prototype.localAnchorA = new b2Vec2();
/**
 * Property localAnchorB
 * @type b2Vec2
*/
b2PulleyJointDef.prototype.localAnchorB = new b2Vec2();
/**
 * Property lengthA
 * @type Number
*/
b2PulleyJointDef.prototype.lengthA = 0;
/**
 * Property lengthB
 * @type Number
*/
b2PulleyJointDef.prototype.lengthB = 0;
/**
 * Property ratio
 * @type Number
*/
b2PulleyJointDef.prototype.ratio = 0;
/**
 * @super b2Joint
 * @constructor 
*/
function b2PulleyJoint() {};
b2PulleyJoint.prototype = new b2Joint();
/**
 * @function GetAnchorA()
 * @returns {b2Vec2}
*/
b2PulleyJoint.prototype.GetAnchorA = function() {return new b2Vec2();};
/**
 * @function GetAnchorB()
 * @returns {b2Vec2}
*/
b2PulleyJoint.prototype.GetAnchorB = function() {return new b2Vec2();};
/**
 * @function GetReactionForce(inv_dt)
 * @param {Number} inv_dt
 * @returns {b2Vec2}
*/
b2PulleyJoint.prototype.GetReactionForce = function(inv_dt) {return new b2Vec2();};
/**
 * @function GetReactionTorque(inv_dt)
 * @param {Number} inv_dt
 * @returns {Number}
*/
b2PulleyJoint.prototype.GetReactionTorque = function(inv_dt) {return 0;};
/**
 * @function GetGroundAnchorA()
 * @returns {b2Vec2}
*/
b2PulleyJoint.prototype.GetGroundAnchorA = function() {return new b2Vec2();};
/**
 * @function GetGroundAnchorB()
 * @returns {b2Vec2}
*/
b2PulleyJoint.prototype.GetGroundAnchorB = function() {return new b2Vec2();};
/**
 * @function GetLengthA()
 * @returns {Number}
*/
b2PulleyJoint.prototype.GetLengthA = function() {return 0;};
/**
 * @function GetLengthB()
 * @returns {Number}
*/
b2PulleyJoint.prototype.GetLengthB = function() {return 0;};
/**
 * @function GetRatio()
 * @returns {Number}
*/
b2PulleyJoint.prototype.GetRatio = function() {return 0;};
/**
 * @function Dump()
*/
b2PulleyJoint.prototype.Dump = function() {};
/**
 * @function tryCastFromb2Joint(joint)
 * @static
 * @param {b2Joint} joint
 * @returns {b2PulleyJoint}
*/
b2PulleyJoint.tryCastFromb2Joint = function(joint) {return new b2PulleyJoint();};
box2d.b2_minPulleyLength = 0;
/**
 * @super b2JointDef
 * @constructor 
*/
function b2RevoluteJointDef() {};
b2RevoluteJointDef.prototype = new b2JointDef();
/**
 * @function Initialize(bodyA, bodyB, anchor)
 * @param {b2Body} bodyA
 * @param {b2Body} bodyB
 * @param {b2Vec2} anchor
*/
b2RevoluteJointDef.prototype.Initialize = function(bodyA, bodyB, anchor) {};
/**
 * Property localAnchorA
 * @type b2Vec2
*/
b2RevoluteJointDef.prototype.localAnchorA = new b2Vec2();
/**
 * Property localAnchorB
 * @type b2Vec2
*/
b2RevoluteJointDef.prototype.localAnchorB = new b2Vec2();
/**
 * Property referenceAngle
 * @type Number
*/
b2RevoluteJointDef.prototype.referenceAngle = 0;
/**
 * Property enableLimit
 * @type Boolean
*/
b2RevoluteJointDef.prototype.enableLimit = true;
/**
 * Property lowerAngle
 * @type Number
*/
b2RevoluteJointDef.prototype.lowerAngle = 0;
/**
 * Property upperAngle
 * @type Number
*/
b2RevoluteJointDef.prototype.upperAngle = 0;
/**
 * Property enableMotor
 * @type Boolean
*/
b2RevoluteJointDef.prototype.enableMotor = true;
/**
 * Property motorSpeed
 * @type Number
*/
b2RevoluteJointDef.prototype.motorSpeed = 0;
/**
 * Property maxMotorTorque
 * @type Number
*/
b2RevoluteJointDef.prototype.maxMotorTorque = 0;
/**
 * @super b2Joint
 * @constructor 
*/
function b2RevoluteJoint() {};
b2RevoluteJoint.prototype = new b2Joint();
/**
 * @function GetAnchorA()
 * @returns {b2Vec2}
*/
b2RevoluteJoint.prototype.GetAnchorA = function() {return new b2Vec2();};
/**
 * @function GetAnchorB()
 * @returns {b2Vec2}
*/
b2RevoluteJoint.prototype.GetAnchorB = function() {return new b2Vec2();};
/**
 * @function GetLocalAnchorA()
 * @returns {b2Vec2}
*/
b2RevoluteJoint.prototype.GetLocalAnchorA = function() {return new b2Vec2();};
/**
 * @function GetLocalAnchorB()
 * @returns {b2Vec2}
*/
b2RevoluteJoint.prototype.GetLocalAnchorB = function() {return new b2Vec2();};
/**
 * @function GetReferenceAngle()
 * @returns {Number}
*/
b2RevoluteJoint.prototype.GetReferenceAngle = function() {return 0;};
/**
 * @function GetJointAngle()
 * @returns {Number}
*/
b2RevoluteJoint.prototype.GetJointAngle = function() {return 0;};
/**
 * @function GetJointSpeed()
 * @returns {Number}
*/
b2RevoluteJoint.prototype.GetJointSpeed = function() {return 0;};
/**
 * @function IsLimitEnabled()
 * @returns {Boolean}
*/
b2RevoluteJoint.prototype.IsLimitEnabled = function() {return true;};
/**
 * @function EnableLimit(flag)
 * @param {Boolean} flag
*/
b2RevoluteJoint.prototype.EnableLimit = function(flag) {};
/**
 * @function GetLowerLimit()
 * @returns {Number}
*/
b2RevoluteJoint.prototype.GetLowerLimit = function() {return 0;};
/**
 * @function GetUpperLimit()
 * @returns {Number}
*/
b2RevoluteJoint.prototype.GetUpperLimit = function() {return 0;};
/**
 * @function SetLimits(lower, upper)
 * @param {Number} lower
 * @param {Number} upper
*/
b2RevoluteJoint.prototype.SetLimits = function(lower, upper) {};
/**
 * @function IsMotorEnabled()
 * @returns {Boolean}
*/
b2RevoluteJoint.prototype.IsMotorEnabled = function() {return true;};
/**
 * @function EnableMotor(flag)
 * @param {Boolean} flag
*/
b2RevoluteJoint.prototype.EnableMotor = function(flag) {};
/**
 * @function SetMotorSpeed(speed)
 * @param {Number} speed
*/
b2RevoluteJoint.prototype.SetMotorSpeed = function(speed) {};
/**
 * @function GetMotorSpeed()
 * @returns {Number}
*/
b2RevoluteJoint.prototype.GetMotorSpeed = function() {return 0;};
/**
 * @function SetMaxMotorTorque(torque)
 * @param {Number} torque
*/
b2RevoluteJoint.prototype.SetMaxMotorTorque = function(torque) {};
/**
 * @function GetMaxMotorTorque()
 * @returns {Number}
*/
b2RevoluteJoint.prototype.GetMaxMotorTorque = function() {return 0;};
/**
 * @function GetReactionForce(inv_dt)
 * @param {Number} inv_dt
 * @returns {b2Vec2}
*/
b2RevoluteJoint.prototype.GetReactionForce = function(inv_dt) {return new b2Vec2();};
/**
 * @function GetReactionTorque(inv_dt)
 * @param {Number} inv_dt
 * @returns {Number}
*/
b2RevoluteJoint.prototype.GetReactionTorque = function(inv_dt) {return 0;};
/**
 * @function GetMotorTorque(inv_dt)
 * @param {Number} inv_dt
 * @returns {Number}
*/
b2RevoluteJoint.prototype.GetMotorTorque = function(inv_dt) {return 0;};
/**
 * @function Dump()
*/
b2RevoluteJoint.prototype.Dump = function() {};
/**
 * @function tryCastFromb2Joint(joint)
 * @static
 * @param {b2Joint} joint
 * @returns {b2RevoluteJoint}
*/
b2RevoluteJoint.tryCastFromb2Joint = function(joint) {return new b2RevoluteJoint();};
/**
 * @super b2JointDef
 * @constructor 
*/
function b2RopeJointDef() {};
b2RopeJointDef.prototype = new b2JointDef();
/**
 * Property localAnchorA
 * @type b2Vec2
*/
b2RopeJointDef.prototype.localAnchorA = new b2Vec2();
/**
 * Property localAnchorB
 * @type b2Vec2
*/
b2RopeJointDef.prototype.localAnchorB = new b2Vec2();
/**
 * Property maxLength
 * @type Number
*/
b2RopeJointDef.prototype.maxLength = 0;
/**
 * @super b2Joint
 * @constructor 
*/
function b2RopeJoint() {};
b2RopeJoint.prototype = new b2Joint();
/**
 * @function GetAnchorA()
 * @returns {b2Vec2}
*/
b2RopeJoint.prototype.GetAnchorA = function() {return new b2Vec2();};
/**
 * @function GetAnchorB()
 * @returns {b2Vec2}
*/
b2RopeJoint.prototype.GetAnchorB = function() {return new b2Vec2();};
/**
 * @function GetReactionForce(inv_dt)
 * @param {Number} inv_dt
 * @returns {b2Vec2}
*/
b2RopeJoint.prototype.GetReactionForce = function(inv_dt) {return new b2Vec2();};
/**
 * @function GetReactionTorque(inv_dt)
 * @param {Number} inv_dt
 * @returns {Number}
*/
b2RopeJoint.prototype.GetReactionTorque = function(inv_dt) {return 0;};
/**
 * @function GetLocalAnchorA()
 * @returns {b2Vec2}
*/
b2RopeJoint.prototype.GetLocalAnchorA = function() {return new b2Vec2();};
/**
 * @function GetLocalAnchorB()
 * @returns {b2Vec2}
*/
b2RopeJoint.prototype.GetLocalAnchorB = function() {return new b2Vec2();};
/**
 * @function SetMaxLength(length)
 * @param {Number} length
*/
b2RopeJoint.prototype.SetMaxLength = function(length) {};
/**
 * @function GetMaxLength()
 * @returns {Number}
*/
b2RopeJoint.prototype.GetMaxLength = function() {return 0;};
/**
 * @function GetLimitState()
 * @returns {b2LimitState}
*/
b2RopeJoint.prototype.GetLimitState = function() {return new b2LimitState();};
/**
 * @function Dump()
*/
b2RopeJoint.prototype.Dump = function() {};
/**
 * @function tryCastFromb2Joint(joint)
 * @static
 * @param {b2Joint} joint
 * @returns {b2RopeJoint}
*/
b2RopeJoint.tryCastFromb2Joint = function(joint) {return new b2RopeJoint();};
/**
 * @super Object
 * @constructor 
*/
function b2Version() {};
b2Version.prototype = {};
/**
 * Property major
 * @type Number
*/
b2Version.prototype.major = 0;
/**
 * Property minor
 * @type Number
*/
b2Version.prototype.minor = 0;
/**
 * Property revision
 * @type Number
*/
b2Version.prototype.revision = 0;
/**
 * @super Object
 * @constructor 
*/
function b2MassData() {};
b2MassData.prototype = {};
/**
 * Property mass
 * @type Number
*/
b2MassData.prototype.mass = 0;
/**
 * Property center
 * @type b2Vec2
*/
b2MassData.prototype.center = new b2Vec2();
/**
 * Property I
 * @type Number
*/
b2MassData.prototype.I = 0;
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2Shape() {};
b2Shape.prototype = new JacosBaseObject();
/**
 * @function Clone(allocator)
 * @param {b2BlockAllocator} allocator
 * @returns {b2Shape}
*/
b2Shape.prototype.Clone = function(allocator) {return new b2Shape();};
/**
 * @function GetType()
 * @returns {Type}
*/
b2Shape.prototype.GetType = function() {return new Type();};
/**
 * @function GetChildCount()
 * @returns {Number}
*/
b2Shape.prototype.GetChildCount = function() {return 0;};
/**
 * @function TestPoint(xf, p)
 * @param {b2Transform} xf
 * @param {b2Vec2} p
 * @returns {Boolean}
*/
b2Shape.prototype.TestPoint = function(xf, p) {return true;};
/**
 * @function RayCast(output, input, transform, childIndex)
 * @param {b2RayCastOutput} output
 * @param {b2RayCastInput} input
 * @param {b2Transform} transform
 * @param {Number} childIndex
 * @returns {Boolean}
*/
b2Shape.prototype.RayCast = function(output, input, transform, childIndex) {return true;};
/**
 * @function ComputeAABB(aabb, xf, childIndex)
 * @param {b2AABB} aabb
 * @param {b2Transform} xf
 * @param {Number} childIndex
*/
b2Shape.prototype.ComputeAABB = function(aabb, xf, childIndex) {};
/**
 * @function ComputeMass(massData, density)
 * @param {b2MassData} massData
 * @param {Number} density
*/
b2Shape.prototype.ComputeMass = function(massData, density) {};
b2Shape.e_circle = 0;
b2Shape.e_edge = 1;
b2Shape.e_polygon = 2;
b2Shape.e_chain = 3;
b2Shape.e_typeCount = 4;
/**
 * Property m_type
 * @type Number
*/
b2Shape.prototype.m_type = 0;
/**
 * Property m_radius
 * @type Number
*/
b2Shape.prototype.m_radius = 0;
/**
 * @super Object
 * @constructor 
*/
function b2StackEntry() {};
b2StackEntry.prototype = {};
/**
 * Property usedMalloc
 * @type Boolean
*/
b2StackEntry.prototype.usedMalloc = true;
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2StackAllocator() {};
b2StackAllocator.prototype = new JacosBaseObject();
/**
 * @function GetMaxAllocation()
 * @returns {Number}
*/
b2StackAllocator.prototype.GetMaxAllocation = function() {return 0;};
box2d.b2_stackSize = 0;
box2d.b2_maxStackEntries = 1;
/**
 * @super Object
 * @constructor 
*/
function b2TOIInput() {};
b2TOIInput.prototype = {};
/**
 * Property proxyA
 * @type b2DistanceProxy
*/
b2TOIInput.prototype.proxyA = new b2DistanceProxy();
/**
 * Property proxyB
 * @type b2DistanceProxy
*/
b2TOIInput.prototype.proxyB = new b2DistanceProxy();
/**
 * Property sweepA
 * @type b2Sweep
*/
b2TOIInput.prototype.sweepA = new b2Sweep();
/**
 * Property sweepB
 * @type b2Sweep
*/
b2TOIInput.prototype.sweepB = new b2Sweep();
/**
 * Property tMax
 * @type Number
*/
b2TOIInput.prototype.tMax = 0;
/**
 * @super Object
 * @constructor 
*/
function b2TOIOutput() {};
b2TOIOutput.prototype = {};
b2TOIOutput.e_unknown = 0;
b2TOIOutput.e_failed = 1;
b2TOIOutput.e_overlapped = 2;
b2TOIOutput.e_touching = 3;
b2TOIOutput.e_separated = 4;
/**
 * Property state
 * @type State
*/
b2TOIOutput.prototype.state = new State();
/**
 * Property t
 * @type Number
*/
b2TOIOutput.prototype.t = 0;
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2Timer() {};
b2Timer.prototype = new JacosBaseObject();
/**
 * @function Reset()
*/
b2Timer.prototype.Reset = function() {};
/**
 * @function GetMilliseconds()
 * @returns {Number}
*/
b2Timer.prototype.GetMilliseconds = function() {return 0;};
/**
 * @super Object
 * @constructor 
*/
function b2Profile() {};
b2Profile.prototype = {};
/**
 * Property step
 * @type Number
*/
b2Profile.prototype.step = 0;
/**
 * Property collide
 * @type Number
*/
b2Profile.prototype.collide = 0;
/**
 * Property solve
 * @type Number
*/
b2Profile.prototype.solve = 0;
/**
 * Property solveInit
 * @type Number
*/
b2Profile.prototype.solveInit = 0;
/**
 * Property solveVelocity
 * @type Number
*/
b2Profile.prototype.solveVelocity = 0;
/**
 * Property solvePosition
 * @type Number
*/
b2Profile.prototype.solvePosition = 0;
/**
 * Property broadphase
 * @type Number
*/
b2Profile.prototype.broadphase = 0;
/**
 * Property solveTOI
 * @type Number
*/
b2Profile.prototype.solveTOI = 0;
/**
 * @super Object
 * @constructor 
*/
function b2TimeStep() {};
b2TimeStep.prototype = {};
/**
 * Property dt
 * @type Number
*/
b2TimeStep.prototype.dt = 0;
/**
 * Property inv_dt
 * @type Number
*/
b2TimeStep.prototype.inv_dt = 0;
/**
 * Property dtRatio
 * @type Number
*/
b2TimeStep.prototype.dtRatio = 0;
/**
 * Property velocityIterations
 * @type Number
*/
b2TimeStep.prototype.velocityIterations = 0;
/**
 * Property positionIterations
 * @type Number
*/
b2TimeStep.prototype.positionIterations = 0;
/**
 * Property warmStarting
 * @type Boolean
*/
b2TimeStep.prototype.warmStarting = true;
/**
 * @super Object
 * @constructor 
*/
function b2Position() {};
b2Position.prototype = {};
/**
 * Property c
 * @type b2Vec2
*/
b2Position.prototype.c = new b2Vec2();
/**
 * Property a
 * @type Number
*/
b2Position.prototype.a = 0;
/**
 * @super Object
 * @constructor 
*/
function b2Velocity() {};
b2Velocity.prototype = {};
/**
 * Property v
 * @type b2Vec2
*/
b2Velocity.prototype.v = new b2Vec2();
/**
 * Property w
 * @type Number
*/
b2Velocity.prototype.w = 0;
/**
 * @super Object
 * @constructor 
*/
function b2SolverData() {};
b2SolverData.prototype = {};
/**
 * Property step
 * @type b2TimeStep
*/
b2SolverData.prototype.step = new b2TimeStep();
/**
 * Property positions
 * @type b2Position
*/
b2SolverData.prototype.positions = new b2Position();
/**
 * Property velocities
 * @type b2Velocity
*/
b2SolverData.prototype.velocities = new b2Velocity();
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2TOISolver() {};
b2TOISolver.prototype = new JacosBaseObject();
/**
 * @super b2JointDef
 * @constructor 
*/
function b2WeldJointDef() {};
b2WeldJointDef.prototype = new b2JointDef();
/**
 * @function Initialize(bodyA, bodyB, anchor)
 * @param {b2Body} bodyA
 * @param {b2Body} bodyB
 * @param {b2Vec2} anchor
*/
b2WeldJointDef.prototype.Initialize = function(bodyA, bodyB, anchor) {};
/**
 * Property localAnchorA
 * @type b2Vec2
*/
b2WeldJointDef.prototype.localAnchorA = new b2Vec2();
/**
 * Property localAnchorB
 * @type b2Vec2
*/
b2WeldJointDef.prototype.localAnchorB = new b2Vec2();
/**
 * Property referenceAngle
 * @type Number
*/
b2WeldJointDef.prototype.referenceAngle = 0;
/**
 * Property frequencyHz
 * @type Number
*/
b2WeldJointDef.prototype.frequencyHz = 0;
/**
 * Property dampingRatio
 * @type Number
*/
b2WeldJointDef.prototype.dampingRatio = 0;
/**
 * @super b2Joint
 * @constructor 
*/
function b2WeldJoint() {};
b2WeldJoint.prototype = new b2Joint();
/**
 * @function GetAnchorA()
 * @returns {b2Vec2}
*/
b2WeldJoint.prototype.GetAnchorA = function() {return new b2Vec2();};
/**
 * @function GetAnchorB()
 * @returns {b2Vec2}
*/
b2WeldJoint.prototype.GetAnchorB = function() {return new b2Vec2();};
/**
 * @function GetReactionForce(inv_dt)
 * @param {Number} inv_dt
 * @returns {b2Vec2}
*/
b2WeldJoint.prototype.GetReactionForce = function(inv_dt) {return new b2Vec2();};
/**
 * @function GetReactionTorque(inv_dt)
 * @param {Number} inv_dt
 * @returns {Number}
*/
b2WeldJoint.prototype.GetReactionTorque = function(inv_dt) {return 0;};
/**
 * @function GetLocalAnchorA()
 * @returns {b2Vec2}
*/
b2WeldJoint.prototype.GetLocalAnchorA = function() {return new b2Vec2();};
/**
 * @function GetLocalAnchorB()
 * @returns {b2Vec2}
*/
b2WeldJoint.prototype.GetLocalAnchorB = function() {return new b2Vec2();};
/**
 * @function GetReferenceAngle()
 * @returns {Number}
*/
b2WeldJoint.prototype.GetReferenceAngle = function() {return 0;};
/**
 * @function SetFrequency(hz)
 * @param {Number} hz
*/
b2WeldJoint.prototype.SetFrequency = function(hz) {};
/**
 * @function GetFrequency()
 * @returns {Number}
*/
b2WeldJoint.prototype.GetFrequency = function() {return 0;};
/**
 * @function SetDampingRatio(ratio)
 * @param {Number} ratio
*/
b2WeldJoint.prototype.SetDampingRatio = function(ratio) {};
/**
 * @function GetDampingRatio()
 * @returns {Number}
*/
b2WeldJoint.prototype.GetDampingRatio = function() {return 0;};
/**
 * @function Dump()
*/
b2WeldJoint.prototype.Dump = function() {};
/**
 * @function tryCastFromb2Joint(joint)
 * @static
 * @param {b2Joint} joint
 * @returns {b2WeldJoint}
*/
b2WeldJoint.tryCastFromb2Joint = function(joint) {return new b2WeldJoint();};
/**
 * @super b2JointDef
 * @constructor 
*/
function b2WheelJointDef() {};
b2WheelJointDef.prototype = new b2JointDef();
/**
 * @function Initialize(bodyA, bodyB, anchor, axis)
 * @param {b2Body} bodyA
 * @param {b2Body} bodyB
 * @param {b2Vec2} anchor
 * @param {b2Vec2} axis
*/
b2WheelJointDef.prototype.Initialize = function(bodyA, bodyB, anchor, axis) {};
/**
 * Property localAnchorA
 * @type b2Vec2
*/
b2WheelJointDef.prototype.localAnchorA = new b2Vec2();
/**
 * Property localAnchorB
 * @type b2Vec2
*/
b2WheelJointDef.prototype.localAnchorB = new b2Vec2();
/**
 * Property localAxisA
 * @type b2Vec2
*/
b2WheelJointDef.prototype.localAxisA = new b2Vec2();
/**
 * Property enableMotor
 * @type Boolean
*/
b2WheelJointDef.prototype.enableMotor = true;
/**
 * Property maxMotorTorque
 * @type Number
*/
b2WheelJointDef.prototype.maxMotorTorque = 0;
/**
 * Property motorSpeed
 * @type Number
*/
b2WheelJointDef.prototype.motorSpeed = 0;
/**
 * Property frequencyHz
 * @type Number
*/
b2WheelJointDef.prototype.frequencyHz = 0;
/**
 * Property dampingRatio
 * @type Number
*/
b2WheelJointDef.prototype.dampingRatio = 0;
/**
 * @super b2Joint
 * @constructor 
*/
function b2WheelJoint() {};
b2WheelJoint.prototype = new b2Joint();
/**
 * @function GetAnchorA()
 * @returns {b2Vec2}
*/
b2WheelJoint.prototype.GetAnchorA = function() {return new b2Vec2();};
/**
 * @function GetAnchorB()
 * @returns {b2Vec2}
*/
b2WheelJoint.prototype.GetAnchorB = function() {return new b2Vec2();};
/**
 * @function GetReactionForce(inv_dt)
 * @param {Number} inv_dt
 * @returns {b2Vec2}
*/
b2WheelJoint.prototype.GetReactionForce = function(inv_dt) {return new b2Vec2();};
/**
 * @function GetReactionTorque(inv_dt)
 * @param {Number} inv_dt
 * @returns {Number}
*/
b2WheelJoint.prototype.GetReactionTorque = function(inv_dt) {return 0;};
/**
 * @function GetLocalAnchorA()
 * @returns {b2Vec2}
*/
b2WheelJoint.prototype.GetLocalAnchorA = function() {return new b2Vec2();};
/**
 * @function GetLocalAnchorB()
 * @returns {b2Vec2}
*/
b2WheelJoint.prototype.GetLocalAnchorB = function() {return new b2Vec2();};
/**
 * @function GetLocalAxisA()
 * @returns {b2Vec2}
*/
b2WheelJoint.prototype.GetLocalAxisA = function() {return new b2Vec2();};
/**
 * @function GetJointTranslation()
 * @returns {Number}
*/
b2WheelJoint.prototype.GetJointTranslation = function() {return 0;};
/**
 * @function GetJointSpeed()
 * @returns {Number}
*/
b2WheelJoint.prototype.GetJointSpeed = function() {return 0;};
/**
 * @function IsMotorEnabled()
 * @returns {Boolean}
*/
b2WheelJoint.prototype.IsMotorEnabled = function() {return true;};
/**
 * @function EnableMotor(flag)
 * @param {Boolean} flag
*/
b2WheelJoint.prototype.EnableMotor = function(flag) {};
/**
 * @function SetMotorSpeed(speed)
 * @param {Number} speed
*/
b2WheelJoint.prototype.SetMotorSpeed = function(speed) {};
/**
 * @function GetMotorSpeed()
 * @returns {Number}
*/
b2WheelJoint.prototype.GetMotorSpeed = function() {return 0;};
/**
 * @function SetMaxMotorTorque(torque)
 * @param {Number} torque
*/
b2WheelJoint.prototype.SetMaxMotorTorque = function(torque) {};
/**
 * @function GetMaxMotorTorque()
 * @returns {Number}
*/
b2WheelJoint.prototype.GetMaxMotorTorque = function() {return 0;};
/**
 * @function GetMotorTorque(inv_dt)
 * @param {Number} inv_dt
 * @returns {Number}
*/
b2WheelJoint.prototype.GetMotorTorque = function(inv_dt) {return 0;};
/**
 * @function SetSpringFrequencyHz(hz)
 * @param {Number} hz
*/
b2WheelJoint.prototype.SetSpringFrequencyHz = function(hz) {};
/**
 * @function GetSpringFrequencyHz()
 * @returns {Number}
*/
b2WheelJoint.prototype.GetSpringFrequencyHz = function() {return 0;};
/**
 * @function SetSpringDampingRatio(ratio)
 * @param {Number} ratio
*/
b2WheelJoint.prototype.SetSpringDampingRatio = function(ratio) {};
/**
 * @function GetSpringDampingRatio()
 * @returns {Number}
*/
b2WheelJoint.prototype.GetSpringDampingRatio = function() {return 0;};
/**
 * @function Dump()
*/
b2WheelJoint.prototype.Dump = function() {};
/**
 * @function tryCastFromb2Joint(joint)
 * @static
 * @param {b2Joint} joint
 * @returns {b2WheelJoint}
*/
b2WheelJoint.tryCastFromb2Joint = function(joint) {return new b2WheelJoint();};
/**
 * @super Object
 * @constructor 
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - r <b>and</b> args[1] is {Number} - g <b>and</b> args[2] is {Number} - b.<br />
*/
function b2Color(args) {};
b2Color.prototype = {};
/**
 * @function Set(ri, gi, bi)
 * @param {Number} ri
 * @param {Number} gi
 * @param {Number} bi
*/
b2Color.prototype.Set = function(ri, gi, bi) {};
/**
 * Property r
 * @type Number
*/
b2Color.prototype.r = 0;
/**
 * Property g
 * @type Number
*/
b2Color.prototype.g = 0;
/**
 * Property b
 * @type Number
*/
b2Color.prototype.b = 0;
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2Draw() {};
b2Draw.prototype = new JacosBaseObject();
/**
 * @function SetFlags(flags)
 * @param {Number} flags
*/
b2Draw.prototype.SetFlags = function(flags) {};
/**
 * @function GetFlags()
 * @returns {Number}
*/
b2Draw.prototype.GetFlags = function() {return 0;};
/**
 * @function AppendFlags(flags)
 * @param {Number} flags
*/
b2Draw.prototype.AppendFlags = function(flags) {};
/**
 * @function ClearFlags(flags)
 * @param {Number} flags
*/
b2Draw.prototype.ClearFlags = function(flags) {};
b2Draw.e_shapeBit = 0;
b2Draw.e_jointBit = 1;
b2Draw.e_aabbBit = 2;
b2Draw.e_pairBit = 3;
b2Draw.e_centerOfMassBit = 4;
/**
 * @super b2Draw
 * @constructor 
*/
function GLESDebugDraw() {};
GLESDebugDraw.prototype = new b2Draw();
/**
 * @super JacosBaseObject
 * @constructor 
 * @param {b2Vec2} gravity
*/
function b2World(gravity) {};
b2World.prototype = new JacosBaseObject();
/**
 * @function SetDestructionListener(listener)
 * @param {Object} listener
*/
b2World.prototype.SetDestructionListener = function(listener) {};
/**
 * @function SetContactFilter(filter)
 * @param {b2ContactFilter} filter
*/
b2World.prototype.SetContactFilter = function(filter) {};
/**
 * @function SetContactListener(beginContactFunc, endContactFunc, preSolveFunc, postSolveFunc)
 * @param {Object} beginContactFunc
 * @param {Object} endContactFunc
 * @param {Object} preSolveFunc
 * @param {Object} postSolveFunc
*/
b2World.prototype.SetContactListener = function(beginContactFunc, endContactFunc, preSolveFunc, postSolveFunc) {};
/**
 * @function SetDebugDraw(debugDraw)
 * @param {b2Draw} debugDraw
*/
b2World.prototype.SetDebugDraw = function(debugDraw) {};
/**
 * @function CreateBody(def)
 * @param {b2BodyDef} def
 * @returns {b2Body}
*/
b2World.prototype.CreateBody = function(def) {return new b2Body();};
/**
 * @function DestroyBody(body)
 * @param {b2Body} body
*/
b2World.prototype.DestroyBody = function(body) {};
/**
 * @function CreateJoint(def)
 * @param {b2JointDef} def
 * @returns {b2Joint}
*/
b2World.prototype.CreateJoint = function(def) {return new b2Joint();};
/**
 * @function DestroyJoint(joint)
 * @param {b2Joint} joint
*/
b2World.prototype.DestroyJoint = function(joint) {};
/**
 * @function Step(timeStep, velocityIterations, positionIterations)
 * @param {Number} timeStep
 * @param {Number} velocityIterations
 * @param {Number} positionIterations
*/
b2World.prototype.Step = function(timeStep, velocityIterations, positionIterations) {};
/**
 * @function ClearForces()
*/
b2World.prototype.ClearForces = function() {};
/**
 * @function DrawDebugData()
*/
b2World.prototype.DrawDebugData = function() {};
/**
 * @function QueryAABB(callback, aabb)
 * @param {Object} callback
 * @param {b2AABB} aabb
*/
b2World.prototype.QueryAABB = function(callback, aabb) {};
/**
 * @function RayCast(callback, point1, point2)
 * @param {Object} callback
 * @param {b2Vec2} point1
 * @param {b2Vec2} point2
*/
b2World.prototype.RayCast = function(callback, point1, point2) {};
/**
 * @function GetBodyList(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * @returns {b2Body}
*/
b2World.prototype.GetBodyList = function(args) {return new b2Body();};
/**
 * @function GetJointList(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * @returns {b2Joint}
*/
b2World.prototype.GetJointList = function(args) {return new b2Joint();};
/**
 * @function GetContactList(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * @returns {b2Contact}
*/
b2World.prototype.GetContactList = function(args) {return new b2Contact();};
/**
 * @function SetAllowSleeping(flag)
 * @param {Boolean} flag
*/
b2World.prototype.SetAllowSleeping = function(flag) {};
/**
 * @function GetAllowSleeping()
 * @returns {Boolean}
*/
b2World.prototype.GetAllowSleeping = function() {return true;};
/**
 * @function SetWarmStarting(flag)
 * @param {Boolean} flag
*/
b2World.prototype.SetWarmStarting = function(flag) {};
/**
 * @function GetWarmStarting()
 * @returns {Boolean}
*/
b2World.prototype.GetWarmStarting = function() {return true;};
/**
 * @function SetContinuousPhysics(flag)
 * @param {Boolean} flag
*/
b2World.prototype.SetContinuousPhysics = function(flag) {};
/**
 * @function GetContinuousPhysics()
 * @returns {Boolean}
*/
b2World.prototype.GetContinuousPhysics = function() {return true;};
/**
 * @function SetSubStepping(flag)
 * @param {Boolean} flag
*/
b2World.prototype.SetSubStepping = function(flag) {};
/**
 * @function GetSubStepping()
 * @returns {Boolean}
*/
b2World.prototype.GetSubStepping = function() {return true;};
/**
 * @function GetProxyCount()
 * @returns {Number}
*/
b2World.prototype.GetProxyCount = function() {return 0;};
/**
 * @function GetBodyCount()
 * @returns {Number}
*/
b2World.prototype.GetBodyCount = function() {return 0;};
/**
 * @function GetJointCount()
 * @returns {Number}
*/
b2World.prototype.GetJointCount = function() {return 0;};
/**
 * @function GetContactCount()
 * @returns {Number}
*/
b2World.prototype.GetContactCount = function() {return 0;};
/**
 * @function GetTreeHeight()
 * @returns {Number}
*/
b2World.prototype.GetTreeHeight = function() {return 0;};
/**
 * @function GetTreeBalance()
 * @returns {Number}
*/
b2World.prototype.GetTreeBalance = function() {return 0;};
/**
 * @function GetTreeQuality()
 * @returns {Number}
*/
b2World.prototype.GetTreeQuality = function() {return 0;};
/**
 * @function SetGravity(gravity)
 * @param {b2Vec2} gravity
*/
b2World.prototype.SetGravity = function(gravity) {};
/**
 * @function GetGravity()
 * @returns {b2Vec2}
*/
b2World.prototype.GetGravity = function() {return new b2Vec2();};
/**
 * @function IsLocked()
 * @returns {Boolean}
*/
b2World.prototype.IsLocked = function() {return true;};
/**
 * @function SetAutoClearForces(flag)
 * @param {Boolean} flag
*/
b2World.prototype.SetAutoClearForces = function(flag) {};
/**
 * @function GetAutoClearForces()
 * @returns {Boolean}
*/
b2World.prototype.GetAutoClearForces = function() {return true;};
/**
 * @function GetContactManager()
 * @returns {b2ContactManager}
*/
b2World.prototype.GetContactManager = function() {return new b2ContactManager();};
/**
 * @function GetProfile()
 * @returns {b2Profile}
*/
b2World.prototype.GetProfile = function() {return new b2Profile();};
/**
 * @function Dump()
*/
b2World.prototype.Dump = function() {};
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2DestructionListener() {};
b2DestructionListener.prototype = new JacosBaseObject();
/**
 * @function SayGoodbye(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {b2Joint} - joint.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {b2Fixture} - fixture.<br />
*/
b2DestructionListener.prototype.SayGoodbye = function(args) {};
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2ContactFilter() {};
b2ContactFilter.prototype = new JacosBaseObject();
/**
 * @function ShouldCollide(fixtureA, fixtureB)
 * @param {b2Fixture} fixtureA
 * @param {b2Fixture} fixtureB
 * @returns {Boolean}
*/
b2ContactFilter.prototype.ShouldCollide = function(fixtureA, fixtureB) {return true;};
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2ContactImpulse() {};
b2ContactImpulse.prototype = new JacosBaseObject();
/**
 * Property count
 * @type Number
*/
b2ContactImpulse.prototype.count = 0;
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2ContactListener() {};
b2ContactListener.prototype = new JacosBaseObject();
/**
 * @function BeginContact(contact)
 * @param {b2Contact} contact
*/
b2ContactListener.prototype.BeginContact = function(contact) {};
/**
 * @function EndContact(contact)
 * @param {b2Contact} contact
*/
b2ContactListener.prototype.EndContact = function(contact) {};
/**
 * @function PreSolve(contact, oldManifold)
 * @param {b2Contact} contact
 * @param {b2Manifold} oldManifold
*/
b2ContactListener.prototype.PreSolve = function(contact, oldManifold) {};
/**
 * @function PostSolve(contact, impulse)
 * @param {b2Contact} contact
 * @param {b2ContactImpulse} impulse
*/
b2ContactListener.prototype.PostSolve = function(contact, impulse) {};
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2QueryCallback() {};
b2QueryCallback.prototype = new JacosBaseObject();
/**
 * @function ReportFixture(fixture)
 * @param {b2Fixture} fixture
 * @returns {Boolean}
*/
b2QueryCallback.prototype.ReportFixture = function(fixture) {return true;};
/**
 * @super JacosBaseObject
 * @constructor 
*/
function b2RayCastCallback() {};
b2RayCastCallback.prototype = new JacosBaseObject();
/**
 * @function ReportFixture(fixture, point, normal, fraction)
 * @param {b2Fixture} fixture
 * @param {b2Vec2} point
 * @param {b2Vec2} normal
 * @param {Number} fraction
 * @returns {Number}
*/
b2RayCastCallback.prototype.ReportFixture = function(fixture, point, normal, fraction) {return 0;};
/**
 * @super CCObject
 * @constructor 
*/
function CCAction() {};
CCAction.prototype = new CCObject();
/**
 * @function isDone()
 * @returns {Boolean}
*/
CCAction.prototype.isDone = function() {return true;};
/**
 * @function getTarget()
 * @returns {CCNode}
*/
CCAction.prototype.getTarget = function() {return new CCNode();};
/**
 * @function getOriginalTarget()
 * @returns {CCNode}
*/
CCAction.prototype.getOriginalTarget = function() {return new CCNode();};
/**
 * @function getTag()
 * @returns {Number}
*/
CCAction.prototype.getTag = function() {return 0;};
/**
 * @function setTag(nTag)
 * @param {Number} nTag
*/
CCAction.prototype.setTag = function(nTag) {};
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCAction.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @super CCAction
 * @constructor 
*/
function CCFiniteTimeAction() {};
CCFiniteTimeAction.prototype = new CCAction();
/**
 * @function getDuration()
 * @returns {Number}
*/
CCFiniteTimeAction.prototype.getDuration = function() {return 0;};
/**
 * @function setDuration(duration)
 * @param {Number} duration
*/
CCFiniteTimeAction.prototype.setDuration = function(duration) {};
/**
 * @function reverse()
 * @returns {CCFiniteTimeAction}
*/
CCFiniteTimeAction.prototype.reverse = function() {return new CCFiniteTimeAction();};
/**
 * @function tryCastToCCActionInterval()
 * @returns {CCActionInterval}
*/
CCFiniteTimeAction.prototype.tryCastToCCActionInterval = function() {return new CCActionInterval();};
/**
 * @super CCFiniteTimeAction
 * @constructor 
*/
function CCActionInterval() {};
CCActionInterval.prototype = new CCFiniteTimeAction();
/**
 * @function getElapsed()
 * @returns {Number}
*/
CCActionInterval.prototype.getElapsed = function() {return 0;};
/**
 * @function isDone()
 * @returns {Boolean}
*/
CCActionInterval.prototype.isDone = function() {return true;};
/**
 * @function setAmplitudeRate(amp)
 * @param {Number} amp
*/
CCActionInterval.prototype.setAmplitudeRate = function(amp) {};
/**
 * @function getAmplitudeRate()
 * @returns {Number}
*/
CCActionInterval.prototype.getAmplitudeRate = function() {return 0;};
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCActionInterval.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCActionInterval.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(d)
 * @param {Number} d
 * @returns {CCActionInterval}
*/
CCActionInterval.prototype.create = function(d) {return new CCActionInterval();};
/**
 * @super CCAction
 * @constructor 
*/
function CCSpeed() {};
CCSpeed.prototype = new CCAction();
/**
 * @function getSpeed()
 * @returns {Number}
*/
CCSpeed.prototype.getSpeed = function() {return 0;};
/**
 * @function setSpeed(fSpeed)
 * @param {Number} fSpeed
*/
CCSpeed.prototype.setSpeed = function(fSpeed) {};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCSpeed.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function isDone()
 * @returns {Boolean}
*/
CCSpeed.prototype.isDone = function() {return true;};
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCSpeed.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(pAction, fRate)
 * @static
 * @param {CCActionInterval} pAction
 * @param {Number} fRate
 * @returns {CCSpeed}
*/
CCSpeed.create = function(pAction, fRate) {return new CCSpeed();};
/**
 * @super CCAction
 * @constructor 
*/
function CCFollow() {};
CCFollow.prototype = new CCAction();
/**
 * @function isBoundarySet()
 * @returns {Boolean}
*/
CCFollow.prototype.isBoundarySet = function() {return true;};
/**
 * @function setBoudarySet(bValue)
 * @param {Boolean} bValue
*/
CCFollow.prototype.setBoudarySet = function(bValue) {};
/**
 * @function isDone()
 * @returns {Boolean}
*/
CCFollow.prototype.isDone = function() {return true;};
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCFollow.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - pFollowedNode.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - pFollowedNode <b>and</b> args[1] is {CCRect} - rect.<br />
 * @returns {CCFollow}
*/
CCFollow.create = function(args) {return new CCFollow();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCSequence() {};
CCSequence.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCSequence.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCSequence.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function createWithTwoActions(pActionOne, pActionTwo)
 * @static
 * @param {CCFiniteTimeAction} pActionOne
 * @param {CCFiniteTimeAction} pActionTwo
 * @returns {CCSequence}
*/
CCSequence.createWithTwoActions = function(pActionOne, pActionTwo) {return new CCSequence();};
/**
 * @function create(actions)
 * @static
 * @param {CCArray} actions
 * @returns {CCFiniteTimeAction}
*/
CCSequence.create = function(actions) {return new CCFiniteTimeAction();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCRepeat() {};
CCRepeat.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCRepeat.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function isDone()
 * @returns {Boolean}
*/
CCRepeat.prototype.isDone = function() {return true;};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCRepeat.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction, times)
 * @static
 * @param {CCActionInterval} pAction
 * @param {Number} times
 * @returns {CCRepeat}
*/
CCRepeat.create = function(pAction, times) {return new CCRepeat();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCRepeatForever() {};
CCRepeatForever.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCRepeatForever.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function isDone()
 * @returns {Boolean}
*/
CCRepeatForever.prototype.isDone = function() {return true;};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCRepeatForever.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction)
 * @static
 * @param {CCActionInterval} pAction
 * @returns {CCRepeatForever}
*/
CCRepeatForever.create = function(pAction) {return new CCRepeatForever();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCSpawn() {};
CCSpawn.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCSpawn.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCSpawn.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(actions)
 * @static
 * @param {CCArray} actions
 * @returns {CCFiniteTimeAction}
*/
CCSpawn.create = function(actions) {return new CCFiniteTimeAction();};
/**
 * @function createWithTwoActions(pAction1, pAction2)
 * @static
 * @param {CCFiniteTimeAction} pAction1
 * @param {CCFiniteTimeAction} pAction2
 * @returns {CCSpawn}
*/
CCSpawn.createWithTwoActions = function(pAction1, pAction2) {return new CCSpawn();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCRotateTo() {};
CCRotateTo.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCRotateTo.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(duration, fDeltaAngle)
 * @static
 * @param {Number} duration
 * @param {Number} fDeltaAngle
 * @returns {CCRotateTo}
*/
CCRotateTo.create = function(duration, fDeltaAngle) {return new CCRotateTo();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCRotateBy() {};
CCRotateBy.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCRotateBy.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCRotateBy.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(duration, fDeltaAngle)
 * @static
 * @param {Number} duration
 * @param {Number} fDeltaAngle
 * @returns {CCRotateBy}
*/
CCRotateBy.create = function(duration, fDeltaAngle) {return new CCRotateBy();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCMoveTo() {};
CCMoveTo.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCMoveTo.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(duration, position)
 * @static
 * @param {Number} duration
 * @param {CCPoint} position
 * @returns {CCMoveTo}
*/
CCMoveTo.create = function(duration, position) {return new CCMoveTo();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCMoveBy() {};
CCMoveBy.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCMoveBy.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCMoveBy.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(duration, position)
 * @static
 * @param {Number} duration
 * @param {CCPoint} position
 * @returns {CCMoveBy}
*/
CCMoveBy.create = function(duration, position) {return new CCMoveBy();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCSkewTo() {};
CCSkewTo.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCSkewTo.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(t, sx, sy)
 * @static
 * @param {Number} t
 * @param {Number} sx
 * @param {Number} sy
 * @returns {CCSkewTo}
*/
CCSkewTo.create = function(t, sx, sy) {return new CCSkewTo();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCSkewBy() {};
CCSkewBy.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCSkewBy.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCSkewBy.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(t, deltaSkewX, deltaSkewY)
 * @static
 * @param {Number} t
 * @param {Number} deltaSkewX
 * @param {Number} deltaSkewY
 * @returns {CCSkewBy}
*/
CCSkewBy.create = function(t, deltaSkewX, deltaSkewY) {return new CCSkewBy();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCJumpBy() {};
CCJumpBy.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCJumpBy.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCJumpBy.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(duration, position, height, jumps)
 * @static
 * @param {Number} duration
 * @param {CCPoint} position
 * @param {Number} height
 * @param {Number} jumps
 * @returns {CCJumpBy}
*/
CCJumpBy.create = function(duration, position, height, jumps) {return new CCJumpBy();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCJumpTo() {};
CCJumpTo.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCJumpTo.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(duration, position, height, jumps)
 * @static
 * @param {Number} duration
 * @param {CCPoint} position
 * @param {Number} height
 * @param {Number} jumps
 * @returns {CCJumpTo}
*/
CCJumpTo.create = function(duration, position, height, jumps) {return new CCJumpTo();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function ccBezierConfig() {};
ccBezierConfig.prototype = new CCActionInterval();
/**
 * Property endPosition
 * @type CCPoint
*/
ccBezierConfig.prototype.endPosition = new CCPoint();
/**
 * Property controlPoint_1
 * @type CCPoint
*/
ccBezierConfig.prototype.controlPoint_1 = new CCPoint();
/**
 * Property controlPoint_2
 * @type CCPoint
*/
ccBezierConfig.prototype.controlPoint_2 = new CCPoint();
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCBezierBy() {};
CCBezierBy.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCBezierBy.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCBezierBy.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(t, c)
 * @static
 * @param {Number} t
 * @param {ccBezierConfig} c
 * @returns {CCBezierBy}
*/
CCBezierBy.create = function(t, c) {return new CCBezierBy();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCBezierTo() {};
CCBezierTo.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCBezierTo.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(t, c)
 * @static
 * @param {Number} t
 * @param {ccBezierConfig} c
 * @returns {CCBezierTo}
*/
CCBezierTo.create = function(t, c) {return new CCBezierTo();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCScaleTo() {};
CCScaleTo.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCScaleTo.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - duration <b>and</b> args[1] is {Number} - s.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - duration <b>and</b> args[1] is {Number} - sx <b>and</b> args[2] is {Number} - sy.<br />
 * @returns {CCScaleTo}
*/
CCScaleTo.create = function(args) {return new CCScaleTo();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCScaleBy() {};
CCScaleBy.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCScaleBy.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCScaleBy.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - duration <b>and</b> args[1] is {Number} - s.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - duration <b>and</b> args[1] is {Number} - sx <b>and</b> args[2] is {Number} - sy.<br />
 * @returns {CCScaleBy}
*/
CCScaleBy.create = function(args) {return new CCScaleBy();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCBlink() {};
CCBlink.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCBlink.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCBlink.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(duration, uBlinks)
 * @static
 * @param {Number} duration
 * @param {Number} uBlinks
 * @returns {CCBlink}
*/
CCBlink.create = function(duration, uBlinks) {return new CCBlink();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCFadeIn() {};
CCFadeIn.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCFadeIn.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCFadeIn.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(d)
 * @static
 * @param {Number} d
 * @returns {CCFadeIn}
*/
CCFadeIn.create = function(d) {return new CCFadeIn();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCFadeOut() {};
CCFadeOut.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCFadeOut.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCFadeOut.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(d)
 * @static
 * @param {Number} d
 * @returns {CCFadeOut}
*/
CCFadeOut.create = function(d) {return new CCFadeOut();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCFadeTo() {};
CCFadeTo.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCFadeTo.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(duration, opacity)
 * @static
 * @param {Number} duration
 * @param {Number} opacity
 * @returns {CCFadeTo}
*/
CCFadeTo.create = function(duration, opacity) {return new CCFadeTo();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCTintTo() {};
CCTintTo.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCTintTo.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(duration, red, green, blue)
 * @static
 * @param {Number} duration
 * @param {Number} red
 * @param {Number} green
 * @param {Number} blue
 * @returns {CCTintTo}
*/
CCTintTo.create = function(duration, red, green, blue) {return new CCTintTo();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCTintBy() {};
CCTintBy.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCTintBy.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCTintBy.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(duration, deltaRed, deltaGreen, deltaBlue)
 * @static
 * @param {Number} duration
 * @param {Number} deltaRed
 * @param {Number} deltaGreen
 * @param {Number} deltaBlue
 * @returns {CCTintBy}
*/
CCTintBy.create = function(duration, deltaRed, deltaGreen, deltaBlue) {return new CCTintBy();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCDelayTime() {};
CCDelayTime.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCDelayTime.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCDelayTime.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(d)
 * @static
 * @param {Number} d
 * @returns {CCDelayTime}
*/
CCDelayTime.create = function(d) {return new CCDelayTime();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCReverseTime() {};
CCReverseTime.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCReverseTime.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCReverseTime.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction)
 * @static
 * @param {CCFiniteTimeAction} pAction
 * @returns {CCReverseTime}
*/
CCReverseTime.create = function(pAction) {return new CCReverseTime();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCAnimate() {};
CCAnimate.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCAnimate.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCAnimate.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function getAnimation()
 * @returns {CCAnimation}
*/
CCAnimate.prototype.getAnimation = function() {return new CCAnimation();};
/**
 * @function setAnimation(pAnimation)
 * @param {CCAnimation} pAnimation
*/
CCAnimate.prototype.setAnimation = function(pAnimation) {};
/**
 * @function create(pAnimation)
 * @static
 * @param {CCAnimation} pAnimation
 * @returns {CCAnimate}
*/
CCAnimate.create = function(pAnimation) {return new CCAnimate();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCTargetedAction() {};
CCTargetedAction.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCTargetedAction.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function getForcedTarget()
 * @returns {CCNode}
*/
CCTargetedAction.prototype.getForcedTarget = function() {return new CCNode();};
/**
 * @function setForcedTarget(target)
 * @param {CCNode} target
*/
CCTargetedAction.prototype.setForcedTarget = function(target) {};
/**
 * @function create(pTarget, pAction)
 * @static
 * @param {CCNode} pTarget
 * @param {CCFiniteTimeAction} pAction
 * @returns {CCTargetedAction}
*/
CCTargetedAction.create = function(pTarget, pAction) {return new CCTargetedAction();};
/**
 * @super CCFiniteTimeAction
 * @constructor 
*/
function CCActionInstant() {};
CCActionInstant.prototype = new CCFiniteTimeAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCActionInstant.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCFiniteTimeAction}
*/
CCActionInstant.prototype.reverse = function() {return new CCFiniteTimeAction();};
/**
 * @function isDone()
 * @returns {Boolean}
*/
CCActionInstant.prototype.isDone = function() {return true;};
/**
 * @super CCActionInstant
 * @constructor 
*/
function CCShow() {};
CCShow.prototype = new CCActionInstant();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCShow.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCFiniteTimeAction}
*/
CCShow.prototype.reverse = function() {return new CCFiniteTimeAction();};
/**
 * @function create()
 * @static
 * @returns {CCShow}
*/
CCShow.create = function() {return new CCShow();};
/**
 * @super CCActionInstant
 * @constructor 
*/
function CCHide() {};
CCHide.prototype = new CCActionInstant();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCHide.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCFiniteTimeAction}
*/
CCHide.prototype.reverse = function() {return new CCFiniteTimeAction();};
/**
 * @function create()
 * @static
 * @returns {CCHide}
*/
CCHide.create = function() {return new CCHide();};
/**
 * @super CCActionInstant
 * @constructor 
*/
function CCToggleVisibility() {};
CCToggleVisibility.prototype = new CCActionInstant();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCToggleVisibility.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create()
 * @static
 * @returns {CCToggleVisibility}
*/
CCToggleVisibility.create = function() {return new CCToggleVisibility();};
/**
 * @super CCActionInstant
 * @constructor 
*/
function CCFlipX() {};
CCFlipX.prototype = new CCActionInstant();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCFlipX.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCFiniteTimeAction}
*/
CCFlipX.prototype.reverse = function() {return new CCFiniteTimeAction();};
/**
 * @function create(x)
 * @static
 * @param {Boolean} x
 * @returns {CCFlipX}
*/
CCFlipX.create = function(x) {return new CCFlipX();};
/**
 * @super CCActionInstant
 * @constructor 
*/
function CCFlipY() {};
CCFlipY.prototype = new CCActionInstant();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCFlipY.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCFiniteTimeAction}
*/
CCFlipY.prototype.reverse = function() {return new CCFiniteTimeAction();};
/**
 * @function create(y)
 * @static
 * @param {Boolean} y
 * @returns {CCFlipY}
*/
CCFlipY.create = function(y) {return new CCFlipY();};
/**
 * @super CCActionInstant
 * @constructor 
*/
function CCPlace() {};
CCPlace.prototype = new CCActionInstant();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCPlace.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(pos)
 * @static
 * @param {CCPoint} pos
 * @returns {CCPlace}
*/
CCPlace.create = function(pos) {return new CCPlace();};
/**
 * @super CCActionInstant
 * @constructor 
*/
function CCCallFunc() {};
CCCallFunc.prototype = new CCActionInstant();
/**
 * @function actionWithTarget(target, selector)
 * @static
 * @param {Object} target
 * @param {Object} selector
 * @returns {CCCallFunc}
*/
CCCallFunc.actionWithTarget = function(target, selector) {return new CCCallFunc();};
/**
 * @super CCCallFunc
 * @constructor 
*/
function CCCallFuncN() {};
CCCallFuncN.prototype = new CCCallFunc();
cocos2d.kCCActionTagInvalid = -1;
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCActionCamera() {};
CCActionCamera.prototype = new CCActionInterval();
/**
 * @function startWithTarget(pTarget)
 * @param {CCNode} pTarget
*/
CCActionCamera.prototype.startWithTarget = function(pTarget) {};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCActionCamera.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @super CCActionCamera
 * @constructor 
*/
function CCOrbitCamera() {};
CCOrbitCamera.prototype = new CCActionCamera();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCOrbitCamera.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function sphericalRadius(r, zenith, azimuth)
 * @param {float} r
 * @param {float} zenith
 * @param {float} azimuth
*/
CCOrbitCamera.prototype.sphericalRadius = function(r, zenith, azimuth) {};
/**
 * @function create(t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX)
 * @static
 * @param {Number} t
 * @param {Number} radius
 * @param {Number} deltaRadius
 * @param {Number} angleZ
 * @param {Number} deltaAngleZ
 * @param {Number} angleX
 * @param {Number} deltaAngleX
 * @returns {CCOrbitCamera}
*/
CCOrbitCamera.create = function(t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX) {return new CCOrbitCamera();};
/**
 * @super CCNode
 * @constructor 
*/
function CCPointArray() {};
CCPointArray.prototype = new CCNode();
/**
 * @function initWithCapacity(capacity)
 * @param {Number} capacity
 * @returns {Boolean}
*/
CCPointArray.prototype.initWithCapacity = function(capacity) {return true;};
/**
 * @function addControlPoint(controlPoint)
 * @param {CCPoint} controlPoint
*/
CCPointArray.prototype.addControlPoint = function(controlPoint) {};
/**
 * @function insertControlPoint(controlPoint, index)
 * @param {CCPoint} controlPoint
 * @param {Number} index
*/
CCPointArray.prototype.insertControlPoint = function(controlPoint, index) {};
/**
 * @function replaceControlPoint(controlPoint, index)
 * @param {CCPoint} controlPoint
 * @param {Number} index
*/
CCPointArray.prototype.replaceControlPoint = function(controlPoint, index) {};
/**
 * @function getControlPointAtIndex(index)
 * @param {Number} index
 * @returns {CCPoint}
*/
CCPointArray.prototype.getControlPointAtIndex = function(index) {return new CCPoint();};
/**
 * @function removeControlPointAtIndex(index)
 * @param {Number} index
*/
CCPointArray.prototype.removeControlPointAtIndex = function(index) {};
/**
 * @function count()
 * @returns {Number}
*/
CCPointArray.prototype.count = function() {return 0;};
/**
 * @function reverse()
 * @returns {CCPointArray}
*/
CCPointArray.prototype.reverse = function() {return new CCPointArray();};
/**
 * @function reverseInline()
*/
CCPointArray.prototype.reverseInline = function() {};
/**
 * @function copyWithZone(zone)
 * @param {CCZone} zone
 * @returns {CCObject}
*/
CCPointArray.prototype.copyWithZone = function(zone) {return new CCObject();};
/**
 * @function getControlPoints()
 * @returns {CCArray}
*/
CCPointArray.prototype.getControlPoints = function() {return new CCArray();};
/**
 * @function setControlPoints(controlPoints)
 * @param {CCArray} controlPoints
*/
CCPointArray.prototype.setControlPoints = function(controlPoints) {};
/**
 * @function create(capacity)
 * @static
 * @param {Number} capacity
 * @returns {CCPointArray}
*/
CCPointArray.create = function(capacity) {return new CCPointArray();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCCardinalSplineTo() {};
CCCardinalSplineTo.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCCardinalSplineTo}
*/
CCCardinalSplineTo.prototype.copyWithZone = function(pZone) {return new CCCardinalSplineTo();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCCardinalSplineTo.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function getPoints()
 * @returns {CCPointArray}
*/
CCCardinalSplineTo.prototype.getPoints = function() {return new CCPointArray();};
/**
 * @function setPoints(points)
 * @param {CCPointArray} points
*/
CCCardinalSplineTo.prototype.setPoints = function(points) {};
/**
 * @function create(duration, points, tension)
 * @static
 * @param {Number} duration
 * @param {CCPointArray} points
 * @param {Number} tension
 * @returns {CCCardinalSplineTo}
*/
CCCardinalSplineTo.create = function(duration, points, tension) {return new CCCardinalSplineTo();};
/**
 * @super CCCardinalSplineTo
 * @constructor 
*/
function CCCardinalSplineBy() {};
CCCardinalSplineBy.prototype = new CCCardinalSplineTo();
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCCardinalSplineBy.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(duration, points, tension)
 * @static
 * @param {Number} duration
 * @param {CCPointArray} points
 * @param {Number} tension
 * @returns {CCCardinalSplineBy}
*/
CCCardinalSplineBy.create = function(duration, points, tension) {return new CCCardinalSplineBy();};
/**
 * @super CCCardinalSplineTo
 * @constructor 
*/
function CCCatmullRomTo() {};
CCCatmullRomTo.prototype = new CCCardinalSplineTo();
/**
 * @function create(dt, points)
 * @static
 * @param {Number} dt
 * @param {CCPointArray} points
 * @returns {CCCatmullRomTo}
*/
CCCatmullRomTo.create = function(dt, points) {return new CCCatmullRomTo();};
/**
 * @super CCCardinalSplineBy
 * @constructor 
*/
function CCCatmullRomBy() {};
CCCatmullRomBy.prototype = new CCCardinalSplineBy();
/**
 * @function create(dt, points)
 * @static
 * @param {Number} dt
 * @param {CCPointArray} points
 * @returns {CCCatmullRomBy}
*/
CCCatmullRomBy.create = function(dt, points) {return new CCCatmullRomBy();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCActionEase() {};
CCActionEase.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCActionEase.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCActionEase.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction)
 * @static
 * @param {CCActionInterval} pAction
 * @returns {CCActionEase}
*/
CCActionEase.create = function(pAction) {return new CCActionEase();};
/**
 * @super CCActionEase
 * @constructor 
*/
function CCEaseRateAction() {};
CCEaseRateAction.prototype = new CCActionEase();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseRateAction.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseRateAction.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction, fRate)
 * @static
 * @param {CCActionInterval} pAction
 * @param {Number} fRate
 * @returns {CCEaseRateAction}
*/
CCEaseRateAction.create = function(pAction, fRate) {return new CCEaseRateAction();};
/**
 * @super CCEaseRateAction
 * @constructor 
*/
function CCEaseIn() {};
CCEaseIn.prototype = new CCEaseRateAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseIn.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseIn.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction, fRate)
 * @static
 * @param {CCActionInterval} pAction
 * @param {Number} fRate
 * @returns {CCEaseIn}
*/
CCEaseIn.create = function(pAction, fRate) {return new CCEaseIn();};
/**
 * @super CCEaseRateAction
 * @constructor 
*/
function CCEaseOut() {};
CCEaseOut.prototype = new CCEaseRateAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseOut.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseOut.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction, fRate)
 * @static
 * @param {CCActionInterval} pAction
 * @param {Number} fRate
 * @returns {CCEaseOut}
*/
CCEaseOut.create = function(pAction, fRate) {return new CCEaseOut();};
/**
 * @super CCEaseRateAction
 * @constructor 
*/
function CCEaseInOut() {};
CCEaseInOut.prototype = new CCEaseRateAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseInOut.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseInOut.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction, fRate)
 * @static
 * @param {CCActionInterval} pAction
 * @param {Number} fRate
 * @returns {CCEaseInOut}
*/
CCEaseInOut.create = function(pAction, fRate) {return new CCEaseInOut();};
/**
 * @super CCActionEase
 * @constructor 
*/
function CCEaseExponentialIn() {};
CCEaseExponentialIn.prototype = new CCActionEase();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseExponentialIn.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseExponentialIn.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction)
 * @static
 * @param {CCActionInterval} pAction
 * @returns {CCEaseExponentialIn}
*/
CCEaseExponentialIn.create = function(pAction) {return new CCEaseExponentialIn();};
/**
 * @super CCActionEase
 * @constructor 
*/
function CCEaseExponentialOut() {};
CCEaseExponentialOut.prototype = new CCActionEase();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseExponentialOut.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseExponentialOut.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction)
 * @static
 * @param {CCActionInterval} pAction
 * @returns {CCEaseExponentialOut}
*/
CCEaseExponentialOut.create = function(pAction) {return new CCEaseExponentialOut();};
/**
 * @super CCActionEase
 * @constructor 
*/
function CCEaseExponentialInOut() {};
CCEaseExponentialInOut.prototype = new CCActionEase();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseExponentialInOut.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseExponentialInOut.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction)
 * @static
 * @param {CCActionInterval} pAction
 * @returns {CCEaseExponentialInOut}
*/
CCEaseExponentialInOut.create = function(pAction) {return new CCEaseExponentialInOut();};
/**
 * @super CCActionEase
 * @constructor 
*/
function CCEaseSineIn() {};
CCEaseSineIn.prototype = new CCActionEase();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseSineIn.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseSineIn.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction)
 * @static
 * @param {CCActionInterval} pAction
 * @returns {CCEaseSineIn}
*/
CCEaseSineIn.create = function(pAction) {return new CCEaseSineIn();};
/**
 * @super CCActionEase
 * @constructor 
*/
function CCEaseSineOut() {};
CCEaseSineOut.prototype = new CCActionEase();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseSineOut.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseSineOut.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction)
 * @static
 * @param {CCActionInterval} pAction
 * @returns {CCEaseSineOut}
*/
CCEaseSineOut.create = function(pAction) {return new CCEaseSineOut();};
/**
 * @super CCActionEase
 * @constructor 
*/
function CCEaseSineInOut() {};
CCEaseSineInOut.prototype = new CCActionEase();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseSineInOut.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseSineInOut.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction)
 * @static
 * @param {CCActionInterval} pAction
 * @returns {CCEaseSineInOut}
*/
CCEaseSineInOut.create = function(pAction) {return new CCEaseSineInOut();};
/**
 * @super CCActionEase
 * @constructor 
*/
function CCEaseElastic() {};
CCEaseElastic.prototype = new CCActionEase();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseElastic.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseElastic.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function getPeriod()
 * @returns {Number}
*/
CCEaseElastic.prototype.getPeriod = function() {return 0;};
/**
 * @function setPeriod(fPeriod)
 * @param {Number} fPeriod
*/
CCEaseElastic.prototype.setPeriod = function(fPeriod) {};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCActionInterval} - pAction.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCActionInterval} - pAction <b>and</b> args[1] is {Number} - fPeriod <i>- default is 0.3 -</i> .<br />
 * @returns {CCEaseElastic}
*/
CCEaseElastic.create = function(args) {return new CCEaseElastic();};
/**
 * @super CCEaseElastic
 * @constructor 
*/
function CCEaseElasticIn() {};
CCEaseElasticIn.prototype = new CCEaseElastic();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseElasticIn.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseElasticIn.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction, fPeriod)
 * @static
 * @param {CCActionInterval} pAction
 * @param {Number} fPeriod default is <b>0.3</b>
 * @returns {CCEaseElasticIn}
*/
CCEaseElasticIn.create = function(pAction, fPeriod) {return new CCEaseElasticIn();};
/**
 * @super CCEaseElastic
 * @constructor 
*/
function CCEaseElasticOut() {};
CCEaseElasticOut.prototype = new CCEaseElastic();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseElasticOut.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseElasticOut.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCActionInterval} - pAction.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCActionInterval} - pAction <b>and</b> args[1] is {Number} - fPeriod.<br />
 * @returns {CCEaseElasticOut}
*/
CCEaseElasticOut.create = function(args) {return new CCEaseElasticOut();};
/**
 * @super CCEaseElastic
 * @constructor 
*/
function CCEaseElasticInOut() {};
CCEaseElasticInOut.prototype = new CCEaseElastic();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseElasticInOut.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseElasticInOut.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCActionInterval} - pAction.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCActionInterval} - pAction <b>and</b> args[1] is {Number} - fPeriod.<br />
 * @returns {CCEaseElasticInOut}
*/
CCEaseElasticInOut.create = function(args) {return new CCEaseElasticInOut();};
/**
 * @super CCActionEase
 * @constructor 
*/
function CCEaseBounce() {};
CCEaseBounce.prototype = new CCActionEase();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseBounce.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseBounce.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction)
 * @static
 * @param {CCActionInterval} pAction
 * @returns {CCEaseBounce}
*/
CCEaseBounce.create = function(pAction) {return new CCEaseBounce();};
/**
 * @super CCEaseBounce
 * @constructor 
*/
function CCEaseBounceIn() {};
CCEaseBounceIn.prototype = new CCEaseBounce();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseBounceIn.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseBounceIn.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction)
 * @static
 * @param {CCActionInterval} pAction
 * @returns {CCEaseBounceIn}
*/
CCEaseBounceIn.create = function(pAction) {return new CCEaseBounceIn();};
/**
 * @super CCEaseBounce
 * @constructor 
*/
function CCEaseBounceOut() {};
CCEaseBounceOut.prototype = new CCEaseBounce();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseBounceOut.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseBounceOut.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction)
 * @static
 * @param {CCActionInterval} pAction
 * @returns {CCEaseBounceOut}
*/
CCEaseBounceOut.create = function(pAction) {return new CCEaseBounceOut();};
/**
 * @super CCEaseBounce
 * @constructor 
*/
function CCEaseBounceInOut() {};
CCEaseBounceInOut.prototype = new CCEaseBounce();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseBounceInOut.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseBounceInOut.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction)
 * @static
 * @param {CCActionInterval} pAction
 * @returns {CCEaseBounceInOut}
*/
CCEaseBounceInOut.create = function(pAction) {return new CCEaseBounceInOut();};
/**
 * @super CCActionEase
 * @constructor 
*/
function CCEaseBackIn() {};
CCEaseBackIn.prototype = new CCActionEase();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseBackIn.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseBackIn.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction)
 * @static
 * @param {CCActionInterval} pAction
 * @returns {CCEaseBackIn}
*/
CCEaseBackIn.create = function(pAction) {return new CCEaseBackIn();};
/**
 * @super CCActionEase
 * @constructor 
*/
function CCEaseBackOut() {};
CCEaseBackOut.prototype = new CCActionEase();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseBackOut.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseBackOut.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction)
 * @static
 * @param {CCActionInterval} pAction
 * @returns {CCEaseBackOut}
*/
CCEaseBackOut.create = function(pAction) {return new CCEaseBackOut();};
/**
 * @super CCActionEase
 * @constructor 
*/
function CCEaseBackInOut() {};
CCEaseBackInOut.prototype = new CCActionEase();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCEaseBackInOut.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCEaseBackInOut.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function create(pAction)
 * @static
 * @param {CCActionInterval} pAction
 * @returns {CCEaseBackInOut}
*/
CCEaseBackInOut.create = function(pAction) {return new CCEaseBackInOut();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCGridAction() {};
CCGridAction.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCGridAction.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCGridAction.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function getGrid()
 * @returns {CCGridBase}
*/
CCGridAction.prototype.getGrid = function() {return new CCGridBase();};
/**
 * @function create(gridSize, duration)
 * @static
 * @param {ccGridSize} gridSize
 * @param {Number} duration
 * @returns {CCGridAction}
*/
CCGridAction.create = function(gridSize, duration) {return new CCGridAction();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCAccelDeccelAmplitude() {};
CCAccelDeccelAmplitude.prototype = new CCActionInterval();
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCAccelDeccelAmplitude.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function getRate()
 * @returns {Number}
*/
CCAccelDeccelAmplitude.prototype.getRate = function() {return 0;};
/**
 * @function setRate(fRate)
 * @param {Number} fRate
*/
CCAccelDeccelAmplitude.prototype.setRate = function(fRate) {};
/**
 * @function create(pAction, duration)
 * @static
 * @param {CCAction} pAction
 * @param {Number} duration
 * @returns {CCAccelDeccelAmplitude}
*/
CCAccelDeccelAmplitude.create = function(pAction, duration) {return new CCAccelDeccelAmplitude();};
/**
 * @super CCGridAction
 * @constructor 
*/
function CCGrid3DAction() {};
CCGrid3DAction.prototype = new CCGridAction();
/**
 * @function getGrid()
 * @returns {CCGridBase}
*/
CCGrid3DAction.prototype.getGrid = function() {return new CCGridBase();};
/**
 * @function vertex(pos)
 * @param {ccGridSize} pos
 * @returns {ccVertex3F}
*/
CCGrid3DAction.prototype.vertex = function(pos) {return new ccVertex3F();};
/**
 * @function originalVertex(pos)
 * @param {ccGridSize} pos
 * @returns {ccVertex3F}
*/
CCGrid3DAction.prototype.originalVertex = function(pos) {return new ccVertex3F();};
/**
 * @function setVertex(pos, vertex)
 * @param {ccGridSize} pos
 * @param {ccVertex3F} vertex
*/
CCGrid3DAction.prototype.setVertex = function(pos, vertex) {};
/**
 * @super CCGridAction
 * @constructor 
*/
function CCTiledGrid3DAction() {};
CCTiledGrid3DAction.prototype = new CCGridAction();
/**
 * @function tile(pos)
 * @param {ccGridSize} pos
 * @returns {ccQuad3}
*/
CCTiledGrid3DAction.prototype.tile = function(pos) {return new ccQuad3();};
/**
 * @function originalTile(pos)
 * @param {ccGridSize} pos
 * @returns {ccQuad3}
*/
CCTiledGrid3DAction.prototype.originalTile = function(pos) {return new ccQuad3();};
/**
 * @function setTile(pos, coords)
 * @param {ccGridSize} pos
 * @param {ccQuad3} coords
*/
CCTiledGrid3DAction.prototype.setTile = function(pos, coords) {};
/**
 * @function getGrid()
 * @returns {CCGridBase}
*/
CCTiledGrid3DAction.prototype.getGrid = function() {return new CCGridBase();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCAccelAmplitude() {};
CCAccelAmplitude.prototype = new CCActionInterval();
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCAccelAmplitude.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function getRate()
 * @returns {Number}
*/
CCAccelAmplitude.prototype.getRate = function() {return 0;};
/**
 * @function setRate(fRate)
 * @param {Number} fRate
*/
CCAccelAmplitude.prototype.setRate = function(fRate) {};
/**
 * @function create(pAction, duration)
 * @static
 * @param {CCAction} pAction
 * @param {Number} duration
 * @returns {CCAccelAmplitude}
*/
CCAccelAmplitude.create = function(pAction, duration) {return new CCAccelAmplitude();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCDeccelAmplitude() {};
CCDeccelAmplitude.prototype = new CCActionInterval();
/**
 * @function reverse()
 * @returns {CCActionInterval}
*/
CCDeccelAmplitude.prototype.reverse = function() {return new CCActionInterval();};
/**
 * @function getRate()
 * @returns {Number}
*/
CCDeccelAmplitude.prototype.getRate = function() {return 0;};
/**
 * @function setRate(fRate)
 * @param {Number} fRate
*/
CCDeccelAmplitude.prototype.setRate = function(fRate) {};
/**
 * @function create(pAction, duration)
 * @static
 * @param {CCAction} pAction
 * @param {Number} duration
 * @returns {CCDeccelAmplitude}
*/
CCDeccelAmplitude.create = function(pAction, duration) {return new CCDeccelAmplitude();};
/**
 * @super CCActionInstant
 * @constructor 
*/
function CCStopGrid() {};
CCStopGrid.prototype = new CCActionInstant();
/**
 * @function create()
 * @static
 * @returns {CCStopGrid}
*/
CCStopGrid.create = function() {return new CCStopGrid();};
/**
 * @super CCActionInstant
 * @constructor 
*/
function CCReuseGrid() {};
CCReuseGrid.prototype = new CCActionInstant();
/**
 * @function create(times)
 * @static
 * @param {Number} times
 * @returns {CCReuseGrid}
*/
CCReuseGrid.create = function(times) {return new CCReuseGrid();};
/**
 * @super CCGrid3DAction
 * @constructor 
*/
function CCWaves3D() {};
CCWaves3D.prototype = new CCGrid3DAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCWaves3D.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function getAmplitude()
 * @returns {Number}
*/
CCWaves3D.prototype.getAmplitude = function() {return 0;};
/**
 * @function setAmplitude(fAmplitude)
 * @param {Number} fAmplitude
*/
CCWaves3D.prototype.setAmplitude = function(fAmplitude) {};
/**
 * @function getAmplitudeRate()
 * @returns {Number}
*/
CCWaves3D.prototype.getAmplitudeRate = function() {return 0;};
/**
 * @function setAmplitudeRate(fAmplitudeRate)
 * @param {Number} fAmplitudeRate
*/
CCWaves3D.prototype.setAmplitudeRate = function(fAmplitudeRate) {};
/**
 * @function create(wav, amp, gridSize, duration)
 * @static
 * @param {Number} wav
 * @param {Number} amp
 * @param {ccGridSize} gridSize
 * @param {Number} duration
 * @returns {CCWaves3D}
*/
CCWaves3D.create = function(wav, amp, gridSize, duration) {return new CCWaves3D();};
/**
 * @super CCGrid3DAction
 * @constructor 
*/
function CCFlipX3D() {};
CCFlipX3D.prototype = new CCGrid3DAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCFlipX3D.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(duration)
 * @static
 * @param {Number} duration
 * @returns {CCFlipX3D}
*/
CCFlipX3D.create = function(duration) {return new CCFlipX3D();};
/**
 * @super CCFlipX3D
 * @constructor 
*/
function CCFlipY3D() {};
CCFlipY3D.prototype = new CCFlipX3D();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCFlipY3D.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(duration)
 * @static
 * @param {Number} duration
 * @returns {CCFlipY3D}
*/
CCFlipY3D.create = function(duration) {return new CCFlipY3D();};
/**
 * @super CCGrid3DAction
 * @constructor 
*/
function CCLens3D() {};
CCLens3D.prototype = new CCGrid3DAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCLens3D.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function getLensEffect()
 * @returns {Number}
*/
CCLens3D.prototype.getLensEffect = function() {return 0;};
/**
 * @function setLensEffect(fLensEffect)
 * @param {Number} fLensEffect
*/
CCLens3D.prototype.setLensEffect = function(fLensEffect) {};
/**
 * @function getPosition()
 * @returns {CCPoint}
*/
CCLens3D.prototype.getPosition = function() {return new CCPoint();};
/**
 * @function setPosition(position)
 * @param {CCPoint} position
*/
CCLens3D.prototype.setPosition = function(position) {};
/**
 * @function create(pos, r, gridSize, duration)
 * @static
 * @param {CCPoint} pos
 * @param {Number} r
 * @param {ccGridSize} gridSize
 * @param {Number} duration
 * @returns {CCLens3D}
*/
CCLens3D.create = function(pos, r, gridSize, duration) {return new CCLens3D();};
/**
 * @super CCGrid3DAction
 * @constructor 
*/
function CCRipple3D() {};
CCRipple3D.prototype = new CCGrid3DAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCRipple3D.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function getPosition()
 * @returns {CCPoint}
*/
CCRipple3D.prototype.getPosition = function() {return new CCPoint();};
/**
 * @function setPosition(position)
 * @param {CCPoint} position
*/
CCRipple3D.prototype.setPosition = function(position) {};
/**
 * @function getAmplitude()
 * @returns {Number}
*/
CCRipple3D.prototype.getAmplitude = function() {return 0;};
/**
 * @function setAmplitude(fAmplitude)
 * @param {Number} fAmplitude
*/
CCRipple3D.prototype.setAmplitude = function(fAmplitude) {};
/**
 * @function getAmplitudeRate()
 * @returns {Number}
*/
CCRipple3D.prototype.getAmplitudeRate = function() {return 0;};
/**
 * @function setAmplitudeRate(fAmplitudeRate)
 * @param {Number} fAmplitudeRate
*/
CCRipple3D.prototype.setAmplitudeRate = function(fAmplitudeRate) {};
/**
 * @function create(pos, r, wav, amp, gridSize, duration)
 * @static
 * @param {CCPoint} pos
 * @param {Number} r
 * @param {Number} wav
 * @param {Number} amp
 * @param {ccGridSize} gridSize
 * @param {Number} duration
 * @returns {CCRipple3D}
*/
CCRipple3D.create = function(pos, r, wav, amp, gridSize, duration) {return new CCRipple3D();};
/**
 * @super CCGrid3DAction
 * @constructor 
*/
function CCShaky3D() {};
CCShaky3D.prototype = new CCGrid3DAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCShaky3D.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(range, shakeZ, gridSize, duration)
 * @static
 * @param {Number} range
 * @param {Boolean} shakeZ
 * @param {ccGridSize} gridSize
 * @param {Number} duration
 * @returns {CCShaky3D}
*/
CCShaky3D.create = function(range, shakeZ, gridSize, duration) {return new CCShaky3D();};
/**
 * @super CCGrid3DAction
 * @constructor 
*/
function CCLiquid() {};
CCLiquid.prototype = new CCGrid3DAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCLiquid.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function getAmplitude()
 * @returns {Number}
*/
CCLiquid.prototype.getAmplitude = function() {return 0;};
/**
 * @function setAmplitude(fAmplitude)
 * @param {Number} fAmplitude
*/
CCLiquid.prototype.setAmplitude = function(fAmplitude) {};
/**
 * @function getAmplitudeRate()
 * @returns {Number}
*/
CCLiquid.prototype.getAmplitudeRate = function() {return 0;};
/**
 * @function setAmplitudeRate(fAmplitudeRate)
 * @param {Number} fAmplitudeRate
*/
CCLiquid.prototype.setAmplitudeRate = function(fAmplitudeRate) {};
/**
 * @function create(wav, amp, gridSize, duration)
 * @static
 * @param {Number} wav
 * @param {Number} amp
 * @param {ccGridSize} gridSize
 * @param {Number} duration
 * @returns {CCLiquid}
*/
CCLiquid.create = function(wav, amp, gridSize, duration) {return new CCLiquid();};
/**
 * @super CCGrid3DAction
 * @constructor 
*/
function CCWaves() {};
CCWaves.prototype = new CCGrid3DAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCWaves.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function getAmplitude()
 * @returns {Number}
*/
CCWaves.prototype.getAmplitude = function() {return 0;};
/**
 * @function setAmplitude(fAmplitude)
 * @param {Number} fAmplitude
*/
CCWaves.prototype.setAmplitude = function(fAmplitude) {};
/**
 * @function getAmplitudeRate()
 * @returns {Number}
*/
CCWaves.prototype.getAmplitudeRate = function() {return 0;};
/**
 * @function setAmplitudeRate(fAmplitudeRate)
 * @param {Number} fAmplitudeRate
*/
CCWaves.prototype.setAmplitudeRate = function(fAmplitudeRate) {};
/**
 * @function create(wav, amp, h, v, gridSize, duration)
 * @static
 * @param {Number} wav
 * @param {Number} amp
 * @param {Boolean} h
 * @param {Boolean} v
 * @param {ccGridSize} gridSize
 * @param {Number} duration
 * @returns {CCWaves}
*/
CCWaves.create = function(wav, amp, h, v, gridSize, duration) {return new CCWaves();};
/**
 * @super CCGrid3DAction
 * @constructor 
*/
function CCTwirl() {};
CCTwirl.prototype = new CCGrid3DAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCTwirl.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function getPosition()
 * @returns {CCPoint}
*/
CCTwirl.prototype.getPosition = function() {return new CCPoint();};
/**
 * @function setPosition(position)
 * @param {CCPoint} position
*/
CCTwirl.prototype.setPosition = function(position) {};
/**
 * @function getAmplitude()
 * @returns {Number}
*/
CCTwirl.prototype.getAmplitude = function() {return 0;};
/**
 * @function setAmplitude(fAmplitude)
 * @param {Number} fAmplitude
*/
CCTwirl.prototype.setAmplitude = function(fAmplitude) {};
/**
 * @function getAmplitudeRate()
 * @returns {Number}
*/
CCTwirl.prototype.getAmplitudeRate = function() {return 0;};
/**
 * @function setAmplitudeRate(fAmplitudeRate)
 * @param {Number} fAmplitudeRate
*/
CCTwirl.prototype.setAmplitudeRate = function(fAmplitudeRate) {};
/**
 * @function create(pos, t, amp, gridSize, duration)
 * @static
 * @param {CCPoint} pos
 * @param {Number} t
 * @param {Number} amp
 * @param {ccGridSize} gridSize
 * @param {Number} duration
 * @returns {CCTwirl}
*/
CCTwirl.create = function(pos, t, amp, gridSize, duration) {return new CCTwirl();};
/**
 * @super CCObject
 * @constructor 
*/
function CCActionManager() {};
CCActionManager.prototype = new CCObject();
/**
 * @function addAction(pAction, pTarget, paused)
 * @param {CCAction} pAction
 * @param {CCNode} pTarget
 * @param {Boolean} paused
*/
CCActionManager.prototype.addAction = function(pAction, pTarget, paused) {};
/**
 * @function removeAllActions()
*/
CCActionManager.prototype.removeAllActions = function() {};
/**
 * @function removeAllActionsFromTarget(pTarget)
 * @param {CCObject} pTarget
*/
CCActionManager.prototype.removeAllActionsFromTarget = function(pTarget) {};
/**
 * @function removeAction(pAction)
 * @param {CCAction} pAction
*/
CCActionManager.prototype.removeAction = function(pAction) {};
/**
 * @function removeActionByTag(tag, pTarget)
 * @param {Number} tag
 * @param {CCObject} pTarget
*/
CCActionManager.prototype.removeActionByTag = function(tag, pTarget) {};
/**
 * @function getActionByTag(tag, pTarget)
 * @param {Number} tag
 * @param {CCObject} pTarget
 * @returns {CCAction}
*/
CCActionManager.prototype.getActionByTag = function(tag, pTarget) {return new CCAction();};
/**
 * @function numberOfRunningActionsInTarget(pTarget)
 * @param {CCObject} pTarget
 * @returns {Number}
*/
CCActionManager.prototype.numberOfRunningActionsInTarget = function(pTarget) {return 0;};
/**
 * @function pauseTarget(pTarget)
 * @param {CCObject} pTarget
*/
CCActionManager.prototype.pauseTarget = function(pTarget) {};
/**
 * @function resumeTarget(pTarget)
 * @param {CCObject} pTarget
*/
CCActionManager.prototype.resumeTarget = function(pTarget) {};
/**
 * @function pauseAllRunningActions()
 * @returns {CCSet}
*/
CCActionManager.prototype.pauseAllRunningActions = function() {return new CCSet();};
/**
 * @function resumeTargets(targetsToResume)
 * @param {CCSet} targetsToResume
*/
CCActionManager.prototype.resumeTargets = function(targetsToResume) {};
/**
 * @super CCGrid3DAction
 * @constructor 
*/
function CCPageTurn3D() {};
CCPageTurn3D.prototype = new CCGrid3DAction();
/**
 * @function create(gridSize, time)
 * @static
 * @param {ccGridSize} gridSize
 * @param {Number} time
 * @returns {CCPageTurn3D}
*/
CCPageTurn3D.create = function(gridSize, time) {return new CCPageTurn3D();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCProgressTo() {};
CCProgressTo.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCProgressTo.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(duration, fPercent)
 * @static
 * @param {Number} duration
 * @param {Number} fPercent
 * @returns {CCProgressTo}
*/
CCProgressTo.create = function(duration, fPercent) {return new CCProgressTo();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCProgressFromTo() {};
CCProgressFromTo.prototype = new CCActionInterval();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCProgressFromTo.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(duration, fFromPercentage, fToPercentage)
 * @static
 * @param {Number} duration
 * @param {Number} fFromPercentage
 * @param {Number} fToPercentage
 * @returns {CCProgressFromTo}
*/
CCProgressFromTo.create = function(duration, fFromPercentage, fToPercentage) {return new CCProgressFromTo();};
/**
 * @super CCTiledGrid3DAction
 * @constructor 
*/
function CCShakyTiles3D() {};
CCShakyTiles3D.prototype = new CCTiledGrid3DAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCShakyTiles3D.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(nRange, bShakeZ, gridSize, duration)
 * @static
 * @param {Number} nRange
 * @param {Boolean} bShakeZ
 * @param {ccGridSize} gridSize
 * @param {Number} duration
 * @returns {CCShakyTiles3D}
*/
CCShakyTiles3D.create = function(nRange, bShakeZ, gridSize, duration) {return new CCShakyTiles3D();};
/**
 * @super CCTiledGrid3DAction
 * @constructor 
*/
function CCShatteredTiles3D() {};
CCShatteredTiles3D.prototype = new CCTiledGrid3DAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCShatteredTiles3D.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(nRange, bShatterZ, gridSize, duration)
 * @static
 * @param {Number} nRange
 * @param {Boolean} bShatterZ
 * @param {ccGridSize} gridSize
 * @param {Number} duration
 * @returns {CCShatteredTiles3D}
*/
CCShatteredTiles3D.create = function(nRange, bShatterZ, gridSize, duration) {return new CCShatteredTiles3D();};
/**
 * @super CCTiledGrid3DAction
 * @constructor 
*/
function CCShuffleTiles() {};
CCShuffleTiles.prototype = new CCTiledGrid3DAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCShuffleTiles.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function shuffle(pArray, nLen)
 * @param {int} pArray
 * @param {Number} nLen
*/
CCShuffleTiles.prototype.shuffle = function(pArray, nLen) {};
/**
 * @function getDelta(pos)
 * @param {ccGridSize} pos
 * @returns {ccGridSize}
*/
CCShuffleTiles.prototype.getDelta = function(pos) {return new ccGridSize();};
/**
 * @function placeTile(pos, t)
 * @param {ccGridSize} pos
 * @param {Tile} t
*/
CCShuffleTiles.prototype.placeTile = function(pos, t) {};
/**
 * @function create(s, gridSize, duration)
 * @static
 * @param {Number} s
 * @param {ccGridSize} gridSize
 * @param {Number} duration
 * @returns {CCShuffleTiles}
*/
CCShuffleTiles.create = function(s, gridSize, duration) {return new CCShuffleTiles();};
/**
 * @super CCTiledGrid3DAction
 * @constructor 
*/
function CCFadeOutTRTiles() {};
CCFadeOutTRTiles.prototype = new CCTiledGrid3DAction();
/**
 * @function turnOnTile(pos)
 * @param {ccGridSize} pos
*/
CCFadeOutTRTiles.prototype.turnOnTile = function(pos) {};
/**
 * @function turnOffTile(pos)
 * @param {ccGridSize} pos
*/
CCFadeOutTRTiles.prototype.turnOffTile = function(pos) {};
/**
 * @function transformTile(pos, distance)
 * @param {ccGridSize} pos
 * @param {Number} distance
*/
CCFadeOutTRTiles.prototype.transformTile = function(pos, distance) {};
/**
 * @function create(gridSize, time)
 * @static
 * @param {ccGridSize} gridSize
 * @param {Number} time
 * @returns {CCFadeOutTRTiles}
*/
CCFadeOutTRTiles.create = function(gridSize, time) {return new CCFadeOutTRTiles();};
/**
 * @super CCFadeOutTRTiles
 * @constructor 
*/
function CCFadeOutBLTiles() {};
CCFadeOutBLTiles.prototype = new CCFadeOutTRTiles();
/**
 * @function create(gridSize, time)
 * @static
 * @param {ccGridSize} gridSize
 * @param {Number} time
 * @returns {CCFadeOutBLTiles}
*/
CCFadeOutBLTiles.create = function(gridSize, time) {return new CCFadeOutBLTiles();};
/**
 * @super CCFadeOutTRTiles
 * @constructor 
*/
function CCFadeOutUpTiles() {};
CCFadeOutUpTiles.prototype = new CCFadeOutTRTiles();
/**
 * @function transformTile(pos, distance)
 * @param {ccGridSize} pos
 * @param {Number} distance
*/
CCFadeOutUpTiles.prototype.transformTile = function(pos, distance) {};
/**
 * @function create(gridSize, time)
 * @static
 * @param {ccGridSize} gridSize
 * @param {Number} time
 * @returns {CCFadeOutUpTiles}
*/
CCFadeOutUpTiles.create = function(gridSize, time) {return new CCFadeOutUpTiles();};
/**
 * @super CCFadeOutUpTiles
 * @constructor 
*/
function CCFadeOutDownTiles() {};
CCFadeOutDownTiles.prototype = new CCFadeOutUpTiles();
/**
 * @function create(gridSize, time)
 * @static
 * @param {ccGridSize} gridSize
 * @param {Number} time
 * @returns {CCFadeOutDownTiles}
*/
CCFadeOutDownTiles.create = function(gridSize, time) {return new CCFadeOutDownTiles();};
/**
 * @super CCTiledGrid3DAction
 * @constructor 
*/
function CCTurnOffTiles() {};
CCTurnOffTiles.prototype = new CCTiledGrid3DAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCTurnOffTiles.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function shuffle(pArray, nLen)
 * @param {int} pArray
 * @param {Number} nLen
*/
CCTurnOffTiles.prototype.shuffle = function(pArray, nLen) {};
/**
 * @function turnOnTile(pos)
 * @param {ccGridSize} pos
*/
CCTurnOffTiles.prototype.turnOnTile = function(pos) {};
/**
 * @function turnOffTile(pos)
 * @param {ccGridSize} pos
*/
CCTurnOffTiles.prototype.turnOffTile = function(pos) {};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {ccGridSize} - size <b>and</b> args[1] is {Number} - d.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - s <b>and</b> args[1] is {ccGridSize} - gridSize <b>and</b> args[2] is {Number} - duration.<br />
 * @returns {CCTurnOffTiles}
*/
CCTurnOffTiles.create = function(args) {return new CCTurnOffTiles();};
/**
 * @super CCTiledGrid3DAction
 * @constructor 
*/
function CCWavesTiles3D() {};
CCWavesTiles3D.prototype = new CCTiledGrid3DAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCWavesTiles3D.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function getAmplitude()
 * @returns {Number}
*/
CCWavesTiles3D.prototype.getAmplitude = function() {return 0;};
/**
 * @function setAmplitude(fAmplitude)
 * @param {Number} fAmplitude
*/
CCWavesTiles3D.prototype.setAmplitude = function(fAmplitude) {};
/**
 * @function getAmplitudeRate()
 * @returns {Number}
*/
CCWavesTiles3D.prototype.getAmplitudeRate = function() {return 0;};
/**
 * @function setAmplitudeRate(fAmplitudeRate)
 * @param {Number} fAmplitudeRate
*/
CCWavesTiles3D.prototype.setAmplitudeRate = function(fAmplitudeRate) {};
/**
 * @function create(wav, amp, gridSize, duration)
 * @static
 * @param {Number} wav
 * @param {Number} amp
 * @param {ccGridSize} gridSize
 * @param {Number} duration
 * @returns {CCWavesTiles3D}
*/
CCWavesTiles3D.create = function(wav, amp, gridSize, duration) {return new CCWavesTiles3D();};
/**
 * @super CCTiledGrid3DAction
 * @constructor 
*/
function CCJumpTiles3D() {};
CCJumpTiles3D.prototype = new CCTiledGrid3DAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCJumpTiles3D.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function getAmplitude()
 * @returns {Number}
*/
CCJumpTiles3D.prototype.getAmplitude = function() {return 0;};
/**
 * @function setAmplitude(fAmplitude)
 * @param {Number} fAmplitude
*/
CCJumpTiles3D.prototype.setAmplitude = function(fAmplitude) {};
/**
 * @function getAmplitudeRate()
 * @returns {Number}
*/
CCJumpTiles3D.prototype.getAmplitudeRate = function() {return 0;};
/**
 * @function setAmplitudeRate(fAmplitudeRate)
 * @param {Number} fAmplitudeRate
*/
CCJumpTiles3D.prototype.setAmplitudeRate = function(fAmplitudeRate) {};
/**
 * @function create(j, amp, gridSize, duration)
 * @static
 * @param {Number} j
 * @param {Number} amp
 * @param {ccGridSize} gridSize
 * @param {Number} duration
 * @returns {CCJumpTiles3D}
*/
CCJumpTiles3D.create = function(j, amp, gridSize, duration) {return new CCJumpTiles3D();};
/**
 * @super CCTiledGrid3DAction
 * @constructor 
*/
function CCSplitRows() {};
CCSplitRows.prototype = new CCTiledGrid3DAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCSplitRows.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(nRows, duration)
 * @static
 * @param {Number} nRows
 * @param {Number} duration
 * @returns {CCSplitRows}
*/
CCSplitRows.create = function(nRows, duration) {return new CCSplitRows();};
/**
 * @super CCTiledGrid3DAction
 * @constructor 
*/
function CCSplitCols() {};
CCSplitCols.prototype = new CCTiledGrid3DAction();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCSplitCols.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(nCols, duration)
 * @static
 * @param {Number} nCols
 * @param {Number} duration
 * @returns {CCSplitCols}
*/
CCSplitCols.create = function(nCols, duration) {return new CCSplitCols();};
/**
 * @super Object
 * @constructor 
*/
function CCAffineTransform() {};
CCAffineTransform.prototype = {};
/**
 * Property a
 * @type Number
*/
CCAffineTransform.prototype.a = 0;
/**
 * Property b
 * @type Number
*/
CCAffineTransform.prototype.b = 0;
/**
 * Property c
 * @type Number
*/
CCAffineTransform.prototype.c = 0;
/**
 * Property d
 * @type Number
*/
CCAffineTransform.prototype.d = 0;
/**
 * Property tx
 * @type Number
*/
CCAffineTransform.prototype.tx = 0;
/**
 * Property ty
 * @type Number
*/
CCAffineTransform.prototype.ty = 0;
/**
 * @super CCObject
 * @constructor 
*/
function CCAnimationFrame() {};
CCAnimationFrame.prototype = new CCObject();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCAnimationFrame.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function initWithSpriteFrame(spriteFrame, delayUnits, userInfo)
 * @param {CCSpriteFrame} spriteFrame
 * @param {Number} delayUnits
 * @param {CCDictionary} userInfo
 * @returns {Boolean}
*/
CCAnimationFrame.prototype.initWithSpriteFrame = function(spriteFrame, delayUnits, userInfo) {return true;};
/**
 * @function getSpriteFrame()
 * @returns {CCSpriteFrame}
*/
CCAnimationFrame.prototype.getSpriteFrame = function() {return new CCSpriteFrame();};
/**
 * @function setSpriteFrame(pSpFrame)
 * @param {CCSpriteFrame} pSpFrame
*/
CCAnimationFrame.prototype.setSpriteFrame = function(pSpFrame) {};
/**
 * @function getDelayUnits()
 * @returns {Number}
*/
CCAnimationFrame.prototype.getDelayUnits = function() {return 0;};
/**
 * @function setDelayUnits(fDelayUnits)
 * @param {Number} fDelayUnits
*/
CCAnimationFrame.prototype.setDelayUnits = function(fDelayUnits) {};
/**
 * @function getUserInfo()
 * @returns {CCDictionary}
*/
CCAnimationFrame.prototype.getUserInfo = function() {return new CCDictionary();};
/**
 * @function setUserInfo(pDict)
 * @param {CCDictionary} pDict
*/
CCAnimationFrame.prototype.setUserInfo = function(pDict) {};
/**
 * @super CCObject
 * @constructor 
*/
function CCAnimation() {};
CCAnimation.prototype = new CCObject();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCAnimation.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCArray} - arrayOfAnimationFrameNames <b>and</b> args[1] is {Number} - delayPerUnit <b>and</b> args[2] is {Number} - loops.<br />
 * @returns {CCAnimation}
*/
CCAnimation.create = function(args) {return new CCAnimation();};
/**
 * @function createWithSpriteFrames(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCArray} - arrayOfSpriteFrameNames.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCArray} - arrayOfSpriteFrameNames <b>and</b> args[1] is {Number} - delay.<br />
 * @returns {CCAnimation}
*/
CCAnimation.createWithSpriteFrames = function(args) {return new CCAnimation();};
/**
 * @function addSpriteFrame(pFrame)
 * @param {CCSpriteFrame} pFrame
*/
CCAnimation.prototype.addSpriteFrame = function(pFrame) {};
/**
 * @function addSpriteFrameWithFileName(pszFileName)
 * @param {String} pszFileName
*/
CCAnimation.prototype.addSpriteFrameWithFileName = function(pszFileName) {};
/**
 * @function addSpriteFrameWithTexture(pobTexture, rect)
 * @param {CCTexture2D} pobTexture
 * @param {CCRect} rect
*/
CCAnimation.prototype.addSpriteFrameWithTexture = function(pobTexture, rect) {};
/**
 * @function getTotalDelayUnits()
 * @returns {Number}
*/
CCAnimation.prototype.getTotalDelayUnits = function() {return 0;};
/**
 * @function getDelayPerUnit()
 * @returns {Number}
*/
CCAnimation.prototype.getDelayPerUnit = function() {return 0;};
/**
 * @function setDelayPerUnit(fDelayPerUnits)
 * @param {Number} fDelayPerUnits
*/
CCAnimation.prototype.setDelayPerUnit = function(fDelayPerUnits) {};
/**
 * @function getDuration()
 * @returns {Number}
*/
CCAnimation.prototype.getDuration = function() {return 0;};
/**
 * @function copy()
 * @returns {CCAnimation}
*/
CCAnimation.prototype.copy = function() {return new CCAnimation();};
/**
 * @function getFrames()
 * @returns {CCArray}
*/
CCAnimation.prototype.getFrames = function() {return new CCArray();};
/**
 * @function setFrames(pFrames)
 * @param {CCArray} pFrames
*/
CCAnimation.prototype.setFrames = function(pFrames) {};
/**
 * @function getRestoreOriginalFrame()
 * @returns {Boolean}
*/
CCAnimation.prototype.getRestoreOriginalFrame = function() {return true;};
/**
 * @function setRestoreOriginalFrame(bRestoreFrame)
 * @param {Boolean} bRestoreFrame
*/
CCAnimation.prototype.setRestoreOriginalFrame = function(bRestoreFrame) {};
/**
 * @function getLoops()
 * @returns {Number}
*/
CCAnimation.prototype.getLoops = function() {return 0;};
/**
 * @function setLoops(uLoops)
 * @param {Number} uLoops
*/
CCAnimation.prototype.setLoops = function(uLoops) {};
/**
 * @super CCObject
 * @constructor 
*/
function CCAnimationCache() {};
CCAnimationCache.prototype = new CCObject();
/**
 * @function addAnimation(animation, name)
 * @param {CCAnimation} animation
 * @param {String} name
*/
CCAnimationCache.prototype.addAnimation = function(animation, name) {};
/**
 * @function removeAnimationByName(name)
 * @param {String} name
*/
CCAnimationCache.prototype.removeAnimationByName = function(name) {};
/**
 * @function animationByName(name)
 * @param {String} name
 * @returns {CCAnimation}
*/
CCAnimationCache.prototype.animationByName = function(name) {return new CCAnimation();};
/**
 * @function sharedAnimationCache()
 * @static
 * @returns {CCAnimationCache}
*/
CCAnimationCache.sharedAnimationCache = function() {return new CCAnimationCache();};
/**
 * @function purgeSharedAnimationCache()
 * @static
*/
CCAnimationCache.purgeSharedAnimationCache = function() {};
/**
 * @function addAnimationsWithDictionary(dictionary)
 * @param {CCDictionary} dictionary
*/
CCAnimationCache.prototype.addAnimationsWithDictionary = function(dictionary) {};
/**
 * @function addAnimationsWithFile(plist)
 * @param {String} plist
*/
CCAnimationCache.prototype.addAnimationsWithFile = function(plist) {};
/**
 * @super Object
 * @constructor 
*/
function CCApplication() {};
CCApplication.prototype = {};
/**
 * @function sharedApplication()
 * @static
 * @returns {CCApplication}
*/
CCApplication.sharedApplication = function() {return new CCApplication();};
/**
 * @function getCurrentLanguage()
 * @returns {Number}
*/
CCApplication.prototype.getCurrentLanguage = function() {return 0;};
/**
 * @function getTargetPlatform()
 * @returns {TargetPlatform}
*/
CCApplication.prototype.getTargetPlatform = function() {return new TargetPlatform();};
cocos2d.kLanguageEnglish = 0;
cocos2d.kLanguageChinese = 0;
cocos2d.kLanguageFrench = 0;
cocos2d.kLanguageItalian = 0;
cocos2d.kLanguageGerman = 0;
cocos2d.kLanguageSpanish = 0;
cocos2d.kLanguageRussian = 0;
cocos2d.kTargetWindows = 0;
cocos2d.kTargetLinux = 1;
cocos2d.kTargetMacOS = 2;
cocos2d.kTargetAndroid = 3;
cocos2d.kTargetIphone = 4;
cocos2d.kTargetIpad = 5;
cocos2d.kTargetBlackBerry = 6;
/**
 * @super CCObject
 * @constructor 
*/
function CCArray() {};
CCArray.prototype = new CCObject();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCArray.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function create()
 * @static
 * @returns {CCArray}
*/
CCArray.create = function() {return new CCArray();};
/**
 * @function createWithObject(pObject)
 * @static
 * @param {CCObject} pObject
 * @returns {CCArray}
*/
CCArray.createWithObject = function(pObject) {return new CCArray();};
/**
 * @function createWithArray(otherArray)
 * @static
 * @param {CCArray} otherArray
 * @returns {CCArray}
*/
CCArray.createWithArray = function(otherArray) {return new CCArray();};
/**
 * @function createWithCapacity(capacity)
 * @static
 * @param {Number} capacity
 * @returns {CCArray}
*/
CCArray.createWithCapacity = function(capacity) {return new CCArray();};
/**
 * @function createWithContentsOfFile(pFileName)
 * @static
 * @param {String} pFileName
 * @returns {CCArray}
*/
CCArray.createWithContentsOfFile = function(pFileName) {return new CCArray();};
/**
 * @function count()
 * @returns {Number}
*/
CCArray.prototype.count = function() {return 0;};
/**
 * @function capacity()
 * @returns {Number}
*/
CCArray.prototype.capacity = function() {return 0;};
/**
 * @function indexOfObject(object)
 * @param {CCObject} object
 * @returns {Number}
*/
CCArray.prototype.indexOfObject = function(object) {return 0;};
/**
 * @function objectAtIndex(index)
 * @param {Number} index
 * @returns {CCObject}
*/
CCArray.prototype.objectAtIndex = function(index) {return new CCObject();};
/**
 * @function lastObject()
 * @returns {CCObject}
*/
CCArray.prototype.lastObject = function() {return new CCObject();};
/**
 * @function randomObject()
 * @returns {CCObject}
*/
CCArray.prototype.randomObject = function() {return new CCObject();};
/**
 * @function isEqualToArray(pOtherArray)
 * @param {CCArray} pOtherArray
 * @returns {Boolean}
*/
CCArray.prototype.isEqualToArray = function(pOtherArray) {return true;};
/**
 * @function containsObject(object)
 * @param {CCObject} object
 * @returns {Boolean}
*/
CCArray.prototype.containsObject = function(object) {return true;};
/**
 * @function addObject(object)
 * @param {CCObject} object
*/
CCArray.prototype.addObject = function(object) {};
/**
 * @function addObjectsFromArray(otherArray)
 * @param {CCArray} otherArray
*/
CCArray.prototype.addObjectsFromArray = function(otherArray) {};
/**
 * @function insertObject(object, index)
 * @param {CCObject} object
 * @param {Number} index
*/
CCArray.prototype.insertObject = function(object, index) {};
/**
 * @function removeLastObject(bReleaseObj)
 * @param {Boolean} bReleaseObj default is <b>true</b>
*/
CCArray.prototype.removeLastObject = function(bReleaseObj) {};
/**
 * @function removeObject(object, bReleaseObj)
 * @param {CCObject} object
 * @param {Boolean} bReleaseObj default is <b>true</b>
*/
CCArray.prototype.removeObject = function(object, bReleaseObj) {};
/**
 * @function removeObjectAtIndex(index, bReleaseObj)
 * @param {Number} index
 * @param {Boolean} bReleaseObj default is <b>true</b>
*/
CCArray.prototype.removeObjectAtIndex = function(index, bReleaseObj) {};
/**
 * @function removeObjectsInArray(otherArray)
 * @param {CCArray} otherArray
*/
CCArray.prototype.removeObjectsInArray = function(otherArray) {};
/**
 * @function removeAllObjects()
*/
CCArray.prototype.removeAllObjects = function() {};
/**
 * @function fastRemoveObject(object)
 * @param {CCObject} object
*/
CCArray.prototype.fastRemoveObject = function(object) {};
/**
 * @function fastRemoveObjectAtIndex(index)
 * @param {Number} index
*/
CCArray.prototype.fastRemoveObjectAtIndex = function(index) {};
/**
 * @function exchangeObject(object1, object2)
 * @param {CCObject} object1
 * @param {CCObject} object2
*/
CCArray.prototype.exchangeObject = function(object1, object2) {};
/**
 * @function exchangeObjectAtIndex(index1, index2)
 * @param {Number} index1
 * @param {Number} index2
*/
CCArray.prototype.exchangeObjectAtIndex = function(index1, index2) {};
/**
 * @function reverseObjects()
*/
CCArray.prototype.reverseObjects = function() {};
/**
 * @function reduceMemoryFootprint()
*/
CCArray.prototype.reduceMemoryFootprint = function() {};
/**
 * @function replaceObjectAtIndex(uIndex, pObject, bReleaseObject)
 * @param {Number} uIndex
 * @param {CCObject} pObject
 * @param {Boolean} bReleaseObject default is <b>true</b>
*/
CCArray.prototype.replaceObjectAtIndex = function(uIndex, pObject, bReleaseObject) {};
/**
 * @super CCNode
 * @constructor 
*/
function CCAtlasNode() {};
CCAtlasNode.prototype = new CCNode();
/**
 * @function getTextureAtlas()
 * @returns {CCTextureAtlas}
*/
CCAtlasNode.prototype.getTextureAtlas = function() {return new CCTextureAtlas();};
/**
 * @function setTextureAtlas(atlas)
 * @param {CCTextureAtlas} atlas
*/
CCAtlasNode.prototype.setTextureAtlas = function(atlas) {};
/**
 * @function getTexture()
 * @returns {CCTexture2D}
*/
CCAtlasNode.prototype.getTexture = function() {return new CCTexture2D();};
/**
 * @function setTexture(texture)
 * @param {CCTexture2D} texture
*/
CCAtlasNode.prototype.setTexture = function(texture) {};
/**
 * @function getColor()
 * @returns {ccColor3B}
*/
CCAtlasNode.prototype.getColor = function() {return new ccColor3B();};
/**
 * @function setColor(color)
 * @param {ccColor3B} color
*/
CCAtlasNode.prototype.setColor = function(color) {};
/**
 * @function getQuadsToDraw()
 * @returns {Number}
*/
CCAtlasNode.prototype.getQuadsToDraw = function() {return 0;};
/**
 * @function setQuadsToDraw(quadsToDraw)
 * @param {Number} quadsToDraw
*/
CCAtlasNode.prototype.setQuadsToDraw = function(quadsToDraw) {};
/**
 * @function getOpacity()
 * @returns {Number}
*/
CCAtlasNode.prototype.getOpacity = function() {return 0;};
/**
 * @function setOpacity(opacity)
 * @param {Number} opacity
*/
CCAtlasNode.prototype.setOpacity = function(opacity) {};
/**
 * @function updateAtlasValues()
*/
CCAtlasNode.prototype.updateAtlasValues = function() {};
/**
 * @function isOpacityModifyRGB()
 * @returns {Boolean}
*/
CCAtlasNode.prototype.isOpacityModifyRGB = function() {return true;};
/**
 * @function setOpacityModifyRGB(isOpacityModifyRGB)
 * @param {Boolean} isOpacityModifyRGB
*/
CCAtlasNode.prototype.setOpacityModifyRGB = function(isOpacityModifyRGB) {};
/**
 * @function create(tile, tileWidth, tileHeight, itemsToRender)
 * @static
 * @param {String} tile
 * @param {Number} tileWidth
 * @param {Number} tileHeight
 * @param {Number} itemsToRender
 * @returns {CCAtlasNode}
*/
CCAtlasNode.create = function(tile, tileWidth, tileHeight, itemsToRender) {return new CCAtlasNode();};
/**
 * @super CCObject
 * @constructor 
*/
function CCCamera() {};
CCCamera.prototype = new CCObject();
/**
 * @function init()
*/
CCCamera.prototype.init = function() {};
/**
 * @function description()
 * @returns {String}
*/
CCCamera.prototype.description = function() {return "";};
/**
 * @function setDirty(bValue)
 * @param {Boolean} bValue
*/
CCCamera.prototype.setDirty = function(bValue) {};
/**
 * @function isDirty()
 * @returns {Boolean}
*/
CCCamera.prototype.isDirty = function() {return true;};
/**
 * @function restore()
*/
CCCamera.prototype.restore = function() {};
/**
 * @function locate()
*/
CCCamera.prototype.locate = function() {};
/**
 * @function setEyeXYZ(fEyeX, fEyeY, fEyeZ)
 * @param {Number} fEyeX
 * @param {Number} fEyeY
 * @param {Number} fEyeZ
*/
CCCamera.prototype.setEyeXYZ = function(fEyeX, fEyeY, fEyeZ) {};
/**
 * @function setCenterXYZ(fCenterX, fCenterY, fCenterZ)
 * @param {Number} fCenterX
 * @param {Number} fCenterY
 * @param {Number} fCenterZ
*/
CCCamera.prototype.setCenterXYZ = function(fCenterX, fCenterY, fCenterZ) {};
/**
 * @function setUpXYZ(fUpX, fUpY, fUpZ)
 * @param {Number} fUpX
 * @param {Number} fUpY
 * @param {Number} fUpZ
*/
CCCamera.prototype.setUpXYZ = function(fUpX, fUpY, fUpZ) {};
/**
 * @function getEyeXYZ(pEyeX, pEyeY, pEyeZ)
 * @param {float} pEyeX
 * @param {float} pEyeY
 * @param {float} pEyeZ
*/
CCCamera.prototype.getEyeXYZ = function(pEyeX, pEyeY, pEyeZ) {};
/**
 * @function getCenterXYZ(pCenterX, pCenterY, pCenterZ)
 * @param {float} pCenterX
 * @param {float} pCenterY
 * @param {float} pCenterZ
*/
CCCamera.prototype.getCenterXYZ = function(pCenterX, pCenterY, pCenterZ) {};
/**
 * @function getUpXYZ(pUpX, pUpY, pUpZ)
 * @param {float} pUpX
 * @param {float} pUpY
 * @param {float} pUpZ
*/
CCCamera.prototype.getUpXYZ = function(pUpX, pUpY, pUpZ) {};
/**
 * @function getZEye()
 * @static
 * @returns {Number}
*/
CCCamera.getZEye = function() {return 0;};
/**
 * @function CCLuaLog(pszFormat)
 * @static
 * @param {String} pszFormat
*/
cocos2d.CCLuaLog = function(pszFormat) {};
/**
 * @function CCMessageBox(pszMsg, pszTitle)
 * @static
 * @param {String} pszMsg
 * @param {String} pszTitle
*/
cocos2d.CCMessageBox = function(pszMsg, pszTitle) {};
cocos2d.kLanguageEnglish = 0;
cocos2d.kLanguageChinese = 0;
cocos2d.kLanguageFrench = 0;
cocos2d.kLanguageItalian = 0;
cocos2d.kLanguageGerman = 0;
cocos2d.kLanguageSpanish = 0;
cocos2d.kLanguageRussian = 0;
/**
 * @super CCObject
 * @constructor 
*/
function CCDictionary() {};
CCDictionary.prototype = new CCObject();
/**
 * @function count()
 * @returns {Number}
*/
CCDictionary.prototype.count = function() {return 0;};
/**
 * @function allKeys()
 * @returns {CCArray}
*/
CCDictionary.prototype.allKeys = function() {return new CCArray();};
/**
 * @function allKeysForObject(object)
 * @param {CCObject} object
 * @returns {CCArray}
*/
CCDictionary.prototype.allKeysForObject = function(object) {return new CCArray();};
/**
 * @function objectForKey(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - key.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - key.<br />
 * @returns {CCObject}
*/
CCDictionary.prototype.objectForKey = function(args) {return new CCObject();};
/**
 * @function valueForKey(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - key.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - key.<br />
 * @returns {CCString}
*/
CCDictionary.prototype.valueForKey = function(args) {return new CCString();};
/**
 * @function setObject(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCObject} - pObject <b>and</b> args[1] is {String} - key.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCObject} - pObject <b>and</b> args[1] is {Number} - key.<br />
*/
CCDictionary.prototype.setObject = function(args) {};
/**
 * @function removeObjectForKey(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - key.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - key.<br />
*/
CCDictionary.prototype.removeObjectForKey = function(args) {};
/**
 * @function removeObjectsForKeys(pKeyArray)
 * @param {CCArray} pKeyArray
*/
CCDictionary.prototype.removeObjectsForKeys = function(pKeyArray) {};
/**
 * @function removeAllObjects()
*/
CCDictionary.prototype.removeAllObjects = function() {};
/**
 * @function create()
 * @static
 * @returns {CCDictionary}
*/
CCDictionary.create = function() {return new CCDictionary();};
/**
 * @function createWithDictionary(srcDict)
 * @static
 * @param {CCDictionary} srcDict
 * @returns {CCDictionary}
*/
CCDictionary.createWithDictionary = function(srcDict) {return new CCDictionary();};
/**
 * @function createWithContentsOfFile(pFileName)
 * @static
 * @param {String} pFileName
 * @returns {CCDictionary}
*/
CCDictionary.createWithContentsOfFile = function(pFileName) {return new CCDictionary();};
/**
 * @super CCObject
 * @constructor 
*/
function CCDirector() {};
CCDirector.prototype = new CCObject();
/**
 * @function getRunningScene()
 * @returns {CCScene}
*/
CCDirector.prototype.getRunningScene = function() {return new CCScene();};
/**
 * @function getAnimationInterval()
 * @returns {Number}
*/
CCDirector.prototype.getAnimationInterval = function() {return 0;};
/**
 * @function isDisplayStats()
 * @returns {Boolean}
*/
CCDirector.prototype.isDisplayStats = function() {return true;};
/**
 * @function setDisplayStats(bDisplayFPS)
 * @param {Boolean} bDisplayFPS
*/
CCDirector.prototype.setDisplayStats = function(bDisplayFPS) {};
/**
 * @function isPaused()
 * @returns {Boolean}
*/
CCDirector.prototype.isPaused = function() {return true;};
/**
 * @function getTotalFrames()
 * @returns {Number}
*/
CCDirector.prototype.getTotalFrames = function() {return 0;};
/**
 * @function getOpenGLView()
 * @returns {CCEGLViewProtocol}
*/
CCDirector.prototype.getOpenGLView = function() {return new CCEGLViewProtocol();};
/**
 * @function getWinSize()
 * @returns {CCSize}
*/
CCDirector.prototype.getWinSize = function() {return new CCSize();};
/**
 * @function getWinSizeInPixels()
 * @returns {CCSize}
*/
CCDirector.prototype.getWinSizeInPixels = function() {return new CCSize();};
/**
 * @function convertToGL(obPoint)
 * @param {CCPoint} obPoint
 * @returns {CCPoint}
*/
CCDirector.prototype.convertToGL = function(obPoint) {return new CCPoint();};
/**
 * @function convertToUI(obPoint)
 * @param {CCPoint} obPoint
 * @returns {CCPoint}
*/
CCDirector.prototype.convertToUI = function(obPoint) {return new CCPoint();};
/**
 * @function pause()
*/
CCDirector.prototype.pause = function() {};
/**
 * @function resume()
*/
CCDirector.prototype.resume = function() {};
/**
 * @function purgeCachedData()
*/
CCDirector.prototype.purgeCachedData = function() {};
/**
 * @function runWithScene(pScene)
 * @param {CCScene} pScene
*/
CCDirector.prototype.runWithScene = function(pScene) {};
/**
 * @function pushScene(pScene)
 * @param {CCScene} pScene
*/
CCDirector.prototype.pushScene = function(pScene) {};
/**
 * @function popScene()
*/
CCDirector.prototype.popScene = function() {};
/**
 * @function replaceScene(pScene)
 * @param {CCScene} pScene
*/
CCDirector.prototype.replaceScene = function(pScene) {};
/**
 * @function getContentScaleFactor()
 * @returns {Number}
*/
CCDirector.prototype.getContentScaleFactor = function() {return 0;};
/**
 * @function getScheduler()
 * @returns {CCScheduler}
*/
CCDirector.prototype.getScheduler = function() {return new CCScheduler();};
/**
 * @function getActionManager()
 * @returns {CCActionManager}
*/
CCDirector.prototype.getActionManager = function() {return new CCActionManager();};
/**
 * @function getTouchDispatcher()
 * @returns {CCTouchDispatcher}
*/
CCDirector.prototype.getTouchDispatcher = function() {return new CCTouchDispatcher();};
/**
 * @function getKeypadDispatcher()
 * @returns {CCKeypadDispatcher}
*/
CCDirector.prototype.getKeypadDispatcher = function() {return new CCKeypadDispatcher();};
/**
 * @function getAccelerometer()
 * @returns {CCAccelerometer}
*/
CCDirector.prototype.getAccelerometer = function() {return new CCAccelerometer();};
/**
 * @function setDepthTest(depthTest)
 * @param {Boolean} depthTest
*/
CCDirector.prototype.setDepthTest = function(depthTest) {};
/**
 * @function setProjection(kProjection)
 * @param {ccDirectorProjection} kProjection
*/
CCDirector.prototype.setProjection = function(kProjection) {};
/**
 * @function getProjection()
 * @returns {ccDirectorProjection}
*/
CCDirector.prototype.getProjection = function() {return new ccDirectorProjection();};
/**
 * @function getNotificationNode()
 * @returns {CCNode}
*/
CCDirector.prototype.getNotificationNode = function() {return new CCNode();};
/**
 * @function setNotificationNode(node)
 * @param {CCNode} node
*/
CCDirector.prototype.setNotificationNode = function(node) {};
/**
 * @function getZEye()
 * @returns {Number}
*/
CCDirector.prototype.getZEye = function() {return 0;};
/**
 * @function getVisibleSize()
 * @returns {CCSize}
*/
CCDirector.prototype.getVisibleSize = function() {return new CCSize();};
/**
 * @function getVisibleOrigin()
 * @returns {CCPoint}
*/
CCDirector.prototype.getVisibleOrigin = function() {return new CCPoint();};
/**
 * @function sharedDirector()
 * @static
 * @returns {CCDirector}
*/
CCDirector.sharedDirector = function() {return new CCDirector();};
cocos2d.kCCDirectorProjection2D = 0;
cocos2d.kCCDirectorProjection3D = 1;
cocos2d.kCCDirectorProjectionCustom = 2;
cocos2d.kCCDirectorProjectionDefault = 1;
/**
 * @super JacosBaseObject
 * @constructor 
*/
function CCPointsList() {};
CCPointsList.prototype = new JacosBaseObject();
/**
 * @function getPointAt(index)
 * @param {Number} index
 * @returns {CCPoint}
*/
CCPointsList.prototype.getPointAt = function(index) {return new CCPoint();};
/**
 * @function addPoint(point)
 * @param {CCPoint} point
*/
CCPointsList.prototype.addPoint = function(point) {};
/**
 * @function removePointAt(index)
 * @param {Number} index
*/
CCPointsList.prototype.removePointAt = function(index) {};
/**
 * @function insertPointAt(point, index)
 * @param {CCPoint} point
 * @param {Number} index
*/
CCPointsList.prototype.insertPointAt = function(point, index) {};
/**
 * @function reverse()
 * @returns {CCPointsList}
*/
CCPointsList.prototype.reverse = function() {return new CCPointsList();};
/**
 * @function getPointsList()
 * @returns {CCPoint}
*/
CCPointsList.prototype.getPointsList = function() {return new CCPoint();};
/**
 * @function getNumberOfPoints()
 * @returns {Number}
*/
CCPointsList.prototype.getNumberOfPoints = function() {return 0;};
/**
 * @super Object
 * @constructor 
*/
function CCEGLViewProtocol() {};
CCEGLViewProtocol.prototype = {};
/**
 * @function getFrameSize()
 * @returns {CCSize}
*/
CCEGLViewProtocol.prototype.getFrameSize = function() {return new CCSize();};
/**
 * @function setFrameSize(width, height)
 * @param {Number} width
 * @param {Number} height
*/
CCEGLViewProtocol.prototype.setFrameSize = function(width, height) {};
/**
 * @function getVisibleSize()
 * @returns {CCSize}
*/
CCEGLViewProtocol.prototype.getVisibleSize = function() {return new CCSize();};
/**
 * @function getVisibleOrigin()
 * @returns {CCPoint}
*/
CCEGLViewProtocol.prototype.getVisibleOrigin = function() {return new CCPoint();};
/**
 * @function setDesignResolutionSize(width, height, resolutionPolicy)
 * @param {Number} width
 * @param {Number} height
 * @param {ResolutionPolicy} resolutionPolicy
*/
CCEGLViewProtocol.prototype.setDesignResolutionSize = function(width, height, resolutionPolicy) {};
/**
 * @function getDesignResolutionSize()
 * @returns {CCSize}
*/
CCEGLViewProtocol.prototype.getDesignResolutionSize = function() {return new CCSize();};
/**
 * @function setViewPortInPoints(x, y, w, h)
 * @param {Number} x
 * @param {Number} y
 * @param {Number} w
 * @param {Number} h
*/
CCEGLViewProtocol.prototype.setViewPortInPoints = function(x, y, w, h) {};
/**
 * @function setScissorInPoints(x, y, w, h)
 * @param {Number} x
 * @param {Number} y
 * @param {Number} w
 * @param {Number} h
*/
CCEGLViewProtocol.prototype.setScissorInPoints = function(x, y, w, h) {};
/**
 * @function getViewPortRect()
 * @returns {CCRect}
*/
CCEGLViewProtocol.prototype.getViewPortRect = function() {return new CCRect();};
/**
 * @function getScaleX()
 * @returns {Number}
*/
CCEGLViewProtocol.prototype.getScaleX = function() {return 0;};
/**
 * @function getScaleY()
 * @returns {Number}
*/
CCEGLViewProtocol.prototype.getScaleY = function() {return 0;};
cocos2d.kResolutionExactFit = 0;
cocos2d.kResolutionNoBorder = 1;
cocos2d.kResolutionShowAll = 2;
cocos2d.kResolutionUnKnown = 3;
/**
 * @super Object
 * @constructor 
*/
function CCFileUtils() {};
CCFileUtils.prototype = {};
/**
 * @function sharedFileUtils()
 * @static
 * @returns {CCFileUtils}
*/
CCFileUtils.sharedFileUtils = function() {return new CCFileUtils();};
/**
 * @function getWriteablePath()
 * @returns {String}
*/
CCFileUtils.prototype.getWriteablePath = function() {return "";};
/**
 * @function fullPathFromRelativePath(pszRelativePath)
 * @param {String} pszRelativePath
 * @returns {String}
*/
CCFileUtils.prototype.fullPathFromRelativePath = function(pszRelativePath) {return "";};
/**
 * @function fullPathFromRelativeFile(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pszFilename <b>and</b> args[1] is {String} - pszRelativeFile.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pszFilename <b>and</b> args[1] is {String} - pszRelativeFile.<br />
 * @returns {String}
*/
CCFileUtils.prototype.fullPathFromRelativeFile = function(args) {return "";};
/**
 * @function getTextFileContent(pszFileName)
 * @param {String} pszFileName
 * @returns {String}
*/
CCFileUtils.prototype.getTextFileContent = function(pszFileName) {return "";};
/**
 * @function getFileData(pszFileName, pszMode)
 * @param {String} pszFileName
 * @param {String} pszMode
 * @returns {InputStream}
*/
CCFileUtils.prototype.getFileData = function(pszFileName, pszMode) {return new InputStream();};
/**
 * @function getFileDataFromZip(pszZipFilePath, pszFileName)
 * @param {String} pszZipFilePath
 * @param {String} pszFileName
 * @returns {InputStream}
*/
CCFileUtils.prototype.getFileDataFromZip = function(pszZipFilePath, pszFileName) {return new InputStream();};
/**
 * @super CCObject
 * @constructor 
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - x <b>and</b> args[1] is {Number} - y.<br />
*/
function CCPoint(args) {};
CCPoint.prototype = new CCObject();
/**
 * @function equals(target)
 * @param {CCPoint} target
 * @returns {Boolean}
*/
CCPoint.prototype.equals = function(target) {return true;};
/**
 * Property x
 * @type Number
*/
CCPoint.prototype.x = 0;
/**
 * Property y
 * @type Number
*/
CCPoint.prototype.y = 0;
/**
 * @super CCObject
 * @constructor 
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - width <b>and</b> args[1] is {Number} - height.<br />
*/
function CCSize(args) {};
CCSize.prototype = new CCObject();
/**
 * @function equals(target)
 * @param {CCSize} target
 * @returns {Boolean}
*/
CCSize.prototype.equals = function(target) {return true;};
/**
 * Property width
 * @type Number
*/
CCSize.prototype.width = 0;
/**
 * Property height
 * @type Number
*/
CCSize.prototype.height = 0;
/**
 * @super CCObject
 * @constructor 
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - x <b>and</b> args[1] is {Number} - y <b>and</b> args[2] is {Number} - width <b>and</b> args[3] is {Number} - height.<br />
*/
function CCRect(args) {};
CCRect.prototype = new CCObject();
/**
 * @function getMinX()
 * @returns {Number}
*/
CCRect.prototype.getMinX = function() {return 0;};
/**
 * @function getMidX()
 * @returns {Number}
*/
CCRect.prototype.getMidX = function() {return 0;};
/**
 * @function getMaxX()
 * @returns {Number}
*/
CCRect.prototype.getMaxX = function() {return 0;};
/**
 * @function getMinY()
 * @returns {Number}
*/
CCRect.prototype.getMinY = function() {return 0;};
/**
 * @function getMidY()
 * @returns {Number}
*/
CCRect.prototype.getMidY = function() {return 0;};
/**
 * @function getMaxY()
 * @returns {Number}
*/
CCRect.prototype.getMaxY = function() {return 0;};
/**
 * @function equals(rect)
 * @param {CCRect} rect
 * @returns {Boolean}
*/
CCRect.prototype.equals = function(rect) {return true;};
/**
 * @function containsPoint(point)
 * @param {CCPoint} point
 * @returns {Boolean}
*/
CCRect.prototype.containsPoint = function(point) {return true;};
/**
 * @function intersectsRect(rect)
 * @param {CCRect} rect
 * @returns {Boolean}
*/
CCRect.prototype.intersectsRect = function(rect) {return true;};
/**
 * Property origin
 * @type CCPoint
*/
CCRect.prototype.origin = new CCPoint();
/**
 * Property size
 * @type CCSize
*/
CCRect.prototype.size = new CCSize();
/**
 * @super CCAtlasNode
 * @constructor 
*/
function CCLabelAtlas() {};
CCLabelAtlas.prototype = new CCAtlasNode();
/**
 * @function updateAtlasValues()
*/
CCLabelAtlas.prototype.updateAtlasValues = function() {};
/**
 * @function setString(label)
 * @param {String} label
*/
CCLabelAtlas.prototype.setString = function(label) {};
/**
 * @function getString()
 * @returns {String}
*/
CCLabelAtlas.prototype.getString = function() {return "";};
/**
 * @function getTexture()
 * @returns {CCTexture2D}
*/
CCLabelAtlas.prototype.getTexture = function() {return new CCTexture2D();};
/**
 * @function setTexture(texture)
 * @param {CCTexture2D} texture
*/
CCLabelAtlas.prototype.setTexture = function(texture) {};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - label <b>and</b> args[1] is {String} - charMapFile <b>and</b> args[2] is {Number} - itemWidth <b>and</b> args[3] is {Number} - itemHeight <b>and</b> args[4] is {Number} - startCharMap.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - sring <b>and</b> args[1] is {String} - fntFile.<br />
 * @returns {CCLabelAtlas}
*/
CCLabelAtlas.create = function(args) {return new CCLabelAtlas();};
/**
 * @super CCNode
 * @constructor 
*/
function CCLabelBMFont() {};
CCLabelBMFont.prototype = new CCNode();
/**
 * @function setString(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - label.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - label <b>and</b> args[1] is {Boolean} - fromUpdate.<br />
*/
CCLabelBMFont.prototype.setString = function(args) {};
/**
 * @function setCString(label)
 * @param {String} label
*/
CCLabelBMFont.prototype.setCString = function(label) {};
/**
 * @function getString()
 * @returns {String}
*/
CCLabelBMFont.prototype.getString = function() {return "";};
/**
 * @function updateString(fromUpdate)
 * @param {Boolean} fromUpdate
*/
CCLabelBMFont.prototype.updateString = function(fromUpdate) {};
/**
 * @function setAnchorPoint(point)
 * @param {CCPoint} point
*/
CCLabelBMFont.prototype.setAnchorPoint = function(point) {};
/**
 * @function setAlignment(alignment)
 * @param {CCTextAlignment} alignment
*/
CCLabelBMFont.prototype.setAlignment = function(alignment) {};
/**
 * @function setWidth(width)
 * @param {Number} width
*/
CCLabelBMFont.prototype.setWidth = function(width) {};
/**
 * @function setLineBreakWithoutSpace(breakWithoutSpace)
 * @param {Boolean} breakWithoutSpace
*/
CCLabelBMFont.prototype.setLineBreakWithoutSpace = function(breakWithoutSpace) {};
/**
 * @function setScale(scale)
 * @param {Number} scale
*/
CCLabelBMFont.prototype.setScale = function(scale) {};
/**
 * @function setScaleX(scaleX)
 * @param {Number} scaleX
*/
CCLabelBMFont.prototype.setScaleX = function(scaleX) {};
/**
 * @function setScaleY(scaleY)
 * @param {Number} scaleY
*/
CCLabelBMFont.prototype.setScaleY = function(scaleY) {};
/**
 * @function setFntFile(fntFile)
 * @param {String} fntFile
*/
CCLabelBMFont.prototype.setFntFile = function(fntFile) {};
/**
 * @function getFntFile()
 * @returns {String}
*/
CCLabelBMFont.prototype.getFntFile = function() {return "";};
/**
 * @function setColor(color)
 * @param {ccColor3B} color
*/
CCLabelBMFont.prototype.setColor = function(color) {};
/**
 * @function getColor()
 * @returns {ccColor3B}
*/
CCLabelBMFont.prototype.getColor = function() {return new ccColor3B();};
/**
 * @function getOpacity()
 * @returns {Number}
*/
CCLabelBMFont.prototype.getOpacity = function() {return 0;};
/**
 * @function setOpacity(opacity)
 * @param {Number} opacity
*/
CCLabelBMFont.prototype.setOpacity = function(opacity) {};
/**
 * @function isOpacityModifyRGB()
 * @returns {Boolean}
*/
CCLabelBMFont.prototype.isOpacityModifyRGB = function() {return true;};
/**
 * @function setOpacityModifyRGB(isOpacityModifyRGB)
 * @param {Boolean} isOpacityModifyRGB
*/
CCLabelBMFont.prototype.setOpacityModifyRGB = function(isOpacityModifyRGB) {};
/**
 * @function purgeCachedData()
 * @static
*/
CCLabelBMFont.purgeCachedData = function() {};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - str <b>and</b> args[1] is {String} - fntFile <b>and</b> args[2] is {Number} - width <b>and</b> args[3] is {CCTextAlignment} - alignment <b>and</b> args[4] is {CCPoint} - imageOffset.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - str <b>and</b> args[1] is {String} - fntFile <b>and</b> args[2] is {Number} - width <b>and</b> args[3] is {CCTextAlignment} - alignment.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - str <b>and</b> args[1] is {String} - fntFile <b>and</b> args[2] is {Number} - width.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - str <b>and</b> args[1] is {String} - fntFile.<br />
 * @returns {CCLabelBMFont}
*/
CCLabelBMFont.create = function(args) {return new CCLabelBMFont();};
/**
 * Property opacity
 * @type Number
*/
CCLabelBMFont.prototype.opacity = 0;
cocos2d.kCCLabelAutomaticWidth = -1;
/**
 * @super CCSprite
 * @constructor 
*/
function CCLabelTTF() {};
CCLabelTTF.prototype = new CCSprite();
/**
 * @function setString(label)
 * @param {String} label
*/
CCLabelTTF.prototype.setString = function(label) {};
/**
 * @function getString()
 * @returns {String}
*/
CCLabelTTF.prototype.getString = function() {return "";};
/**
 * @function getHorizontalAlignment()
 * @returns {CCTextAlignment}
*/
CCLabelTTF.prototype.getHorizontalAlignment = function() {return new CCTextAlignment();};
/**
 * @function setHorizontalAlignment(alignment)
 * @param {CCTextAlignment} alignment
*/
CCLabelTTF.prototype.setHorizontalAlignment = function(alignment) {};
/**
 * @function getVerticalAlignment()
 * @returns {CCVerticalTextAlignment}
*/
CCLabelTTF.prototype.getVerticalAlignment = function() {return new CCVerticalTextAlignment();};
/**
 * @function setVerticalAlignment(verticalAlignment)
 * @param {CCVerticalTextAlignment} verticalAlignment
*/
CCLabelTTF.prototype.setVerticalAlignment = function(verticalAlignment) {};
/**
 * @function getDimensions()
 * @returns {CCSize}
*/
CCLabelTTF.prototype.getDimensions = function() {return new CCSize();};
/**
 * @function setDimensions(dim)
 * @param {CCSize} dim
*/
CCLabelTTF.prototype.setDimensions = function(dim) {};
/**
 * @function getFontSize()
 * @returns {Number}
*/
CCLabelTTF.prototype.getFontSize = function() {return 0;};
/**
 * @function setFontSize(fontSize)
 * @param {Number} fontSize
*/
CCLabelTTF.prototype.setFontSize = function(fontSize) {};
/**
 * @function getFontName()
 * @returns {String}
*/
CCLabelTTF.prototype.getFontName = function() {return "";};
/**
 * @function setFontName(fontName)
 * @param {String} fontName
*/
CCLabelTTF.prototype.setFontName = function(fontName) {};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - str <b>and</b> args[1] is {String} - fontName <b>and</b> args[2] is {Number} - fontSize.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - str <b>and</b> args[1] is {String} - fontName <b>and</b> args[2] is {Number} - fontSize <b>and</b> args[3] is {CCSize} - dimensions <b>and</b> args[4] is {CCTextAlignment} - hAlignment.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - str <b>and</b> args[1] is {String} - fontName <b>and</b> args[2] is {Number} - fontSize <b>and</b> args[3] is {CCSize} - dimensions <b>and</b> args[4] is {CCTextAlignment} - hAlignment <b>and</b> args[5] is {CCVerticalTextAlignment} - vAlignment.<br />
 * @returns {CCLabelTTF}
*/
CCLabelTTF.create = function(args) {return new CCLabelTTF();};
/**
 * @super CCNode
 * @constructor 
*/
function CCLayer() {};
CCLayer.prototype = new CCNode();
/**
 * @function setTouchMode(mode)
 * @param {Number} mode
*/
CCLayer.prototype.setTouchMode = function(mode) {};
/**
 * @function setTouchEnabled(bValue)
 * @param {Boolean} bValue
*/
CCLayer.prototype.setTouchEnabled = function(bValue) {};
/**
 * @function isTouchEnabled()
 * @returns {Boolean}
*/
CCLayer.prototype.isTouchEnabled = function() {return true;};
/**
 * @function setAccelerometerEnabled(bValue)
 * @param {Boolean} bValue
*/
CCLayer.prototype.setAccelerometerEnabled = function(bValue) {};
/**
 * @function isAccelerometerEnabled()
 * @returns {Boolean}
*/
CCLayer.prototype.isAccelerometerEnabled = function() {return true;};
/**
 * @function setKeypadEnabled(bValue)
 * @param {Boolean} bValue
*/
CCLayer.prototype.setKeypadEnabled = function(bValue) {};
/**
 * @function isKeypadEnabled()
 * @returns {Boolean}
*/
CCLayer.prototype.isKeypadEnabled = function() {return true;};
/**
 * @function create()
 * @static
 * @returns {CCLayer}
*/
CCLayer.create = function() {return new CCLayer();};
/**
 * @super CCLayer
 * @constructor 
*/
function CCLayerColor() {};
CCLayerColor.prototype = new CCLayer();
/**
 * @function changeWidth(w)
 * @param {Number} w
*/
CCLayerColor.prototype.changeWidth = function(w) {};
/**
 * @function changeHeight(h)
 * @param {Number} h
*/
CCLayerColor.prototype.changeHeight = function(h) {};
/**
 * @function changeWidthAndHeight(w, h)
 * @param {Number} w
 * @param {Number} h
*/
CCLayerColor.prototype.changeWidthAndHeight = function(w, h) {};
/**
 * @function setContentSize(size)
 * @param {CCSize} size
*/
CCLayerColor.prototype.setContentSize = function(size) {};
/**
 * @function setOpacity(opacity)
 * @param {Number} opacity
*/
CCLayerColor.prototype.setOpacity = function(opacity) {};
/**
 * @function getOpacity()
 * @returns {Number}
*/
CCLayerColor.prototype.getOpacity = function() {return 0;};
/**
 * @function setColor(Value)
 * @param {ccColor3B} Value
*/
CCLayerColor.prototype.setColor = function(Value) {};
/**
 * @function getColor()
 * @returns {ccColor3B}
*/
CCLayerColor.prototype.getColor = function() {return new ccColor3B();};
/**
 * @function setBlendFunc(Value)
 * @param {ccBlendFunc} Value
*/
CCLayerColor.prototype.setBlendFunc = function(Value) {};
/**
 * @function getBlendFunc()
 * @returns {ccBlendFunc}
*/
CCLayerColor.prototype.getBlendFunc = function() {return new ccBlendFunc();};
/**
 * @function setOpacityModifyRGB(bValue)
 * @param {Boolean} bValue
*/
CCLayerColor.prototype.setOpacityModifyRGB = function(bValue) {};
/**
 * @function isOpacityModifyRGB()
 * @returns {Boolean}
*/
CCLayerColor.prototype.isOpacityModifyRGB = function() {return true;};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {ccColor4B} - color <b>and</b> args[1] is {Number} - width <b>and</b> args[2] is {Number} - height.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {ccColor4B} - color.<br />
 * @returns {CCLayerColor}
*/
CCLayerColor.create = function(args) {return new CCLayerColor();};
/**
 * @super CCLayerColor
 * @constructor 
*/
function CCLayerGradient() {};
CCLayerGradient.prototype = new CCLayerColor();
/**
 * @function setStartColor(colors)
 * @param {ccColor3B} colors
*/
CCLayerGradient.prototype.setStartColor = function(colors) {};
/**
 * @function getStartColor()
 * @returns {ccColor3B}
*/
CCLayerGradient.prototype.getStartColor = function() {return new ccColor3B();};
/**
 * @function setEndColor(Value)
 * @param {ccColor3B} Value
*/
CCLayerGradient.prototype.setEndColor = function(Value) {};
/**
 * @function getEndColor()
 * @returns {ccColor3B}
*/
CCLayerGradient.prototype.getEndColor = function() {return new ccColor3B();};
/**
 * @function setStartOpacity(Value)
 * @param {Number} Value
*/
CCLayerGradient.prototype.setStartOpacity = function(Value) {};
/**
 * @function getStartOpacity()
 * @returns {Number}
*/
CCLayerGradient.prototype.getStartOpacity = function() {return 0;};
/**
 * @function setEndOpacity(Value)
 * @param {Number} Value
*/
CCLayerGradient.prototype.setEndOpacity = function(Value) {};
/**
 * @function getEndOpacity()
 * @returns {Number}
*/
CCLayerGradient.prototype.getEndOpacity = function() {return 0;};
/**
 * @function setVector(Value)
 * @param {CCPoint} Value
*/
CCLayerGradient.prototype.setVector = function(Value) {};
/**
 * @function getVector()
 * @returns {CCPoint}
*/
CCLayerGradient.prototype.getVector = function() {return new CCPoint();};
/**
 * @function setCompressedInterpolation(Value)
 * @param {Boolean} Value
*/
CCLayerGradient.prototype.setCompressedInterpolation = function(Value) {};
/**
 * @function isCompressedInterpolation()
 * @returns {Boolean}
*/
CCLayerGradient.prototype.isCompressedInterpolation = function() {return true;};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {ccColor4B} - start <b>and</b> args[1] is {ccColor4B} - end.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {ccColor4B} - start <b>and</b> args[1] is {ccColor4B} - end <b>and</b> args[2] is {CCPoint} - v.<br />
 * @returns {CCLayerGradient}
*/
CCLayerGradient.create = function(args) {return new CCLayerGradient();};
/**
 * @super CCLayer
 * @constructor 
*/
function CCLayerMultiplex() {};
CCLayerMultiplex.prototype = new CCLayer();
/**
 * @function addLayer(layer)
 * @param {CCLayer} layer
*/
CCLayerMultiplex.prototype.addLayer = function(layer) {};
/**
 * @function switchTo(n)
 * @param {Number} n
*/
CCLayerMultiplex.prototype.switchTo = function(n) {};
/**
 * @function switchToAndReleaseMe(n)
 * @param {Number} n
*/
CCLayerMultiplex.prototype.switchToAndReleaseMe = function(n) {};
/**
 * @function create(layer)
 * @static
 * @param {CCLayer} layer
 * @returns {CCLayerMultiplex}
*/
CCLayerMultiplex.create = function(layer) {return new CCLayerMultiplex();};
/**
 * @function createWithLayer(layer)
 * @static
 * @param {CCLayer} layer
 * @returns {CCLayerMultiplex}
*/
CCLayerMultiplex.createWithLayer = function(layer) {return new CCLayerMultiplex();};
cocos2d.kCCTouchesAllAtOnce = 0;
cocos2d.kCCTouchesOneByOne = 1;
/**
 * @super CCLayer
 * @constructor 
*/
function CCMenu() {};
CCMenu.prototype = new CCLayer();
/**
 * @function alignItemsVertically()
*/
CCMenu.prototype.alignItemsVertically = function() {};
/**
 * @function alignItemsVerticallyWithPadding(padding)
 * @param {Number} padding
*/
CCMenu.prototype.alignItemsVerticallyWithPadding = function(padding) {};
/**
 * @function alignItemsHorizontally()
*/
CCMenu.prototype.alignItemsHorizontally = function() {};
/**
 * @function alignItemsHorizontallyWithPadding(padding)
 * @param {Number} padding
*/
CCMenu.prototype.alignItemsHorizontallyWithPadding = function(padding) {};
/**
 * @function setHandlerPriority(newPriority)
 * @param {Number} newPriority
*/
CCMenu.prototype.setHandlerPriority = function(newPriority) {};
/**
 * @function addChild(child, zOrder, tag)
 * @param {CCMenuItem} child
 * @param {Number} zOrder default is <b>0</b>
 * @param {Number} tag default is <b>-1</b>
*/
CCMenu.prototype.addChild = function(child, zOrder, tag) {};
/**
 * @function setOpacity(opacity)
 * @param {Number} opacity
*/
CCMenu.prototype.setOpacity = function(opacity) {};
/**
 * @function getOpacity()
 * @returns {Number}
*/
CCMenu.prototype.getOpacity = function() {return 0;};
/**
 * @function setColor(color)
 * @param {ccColor3B} color
*/
CCMenu.prototype.setColor = function(color) {};
/**
 * @function getColor()
 * @returns {ccColor3B}
*/
CCMenu.prototype.getColor = function() {return new ccColor3B();};
/**
 * @function setOpacityModifyRGB(bValue)
 * @param {Boolean} bValue
*/
CCMenu.prototype.setOpacityModifyRGB = function(bValue) {};
/**
 * @function isOpacityModifyRGB()
 * @returns {Boolean}
*/
CCMenu.prototype.isOpacityModifyRGB = function() {return true;};
/**
 * @function isEnabled()
 * @returns {Boolean}
*/
CCMenu.prototype.isEnabled = function() {return true;};
/**
 * @function setEnabled(value)
 * @param {Boolean} value
*/
CCMenu.prototype.setEnabled = function(value) {};
/**
 * @function create()
 * @static
 * @returns {CCMenu}
*/
CCMenu.create = function() {return new CCMenu();};
/**
 * @function createWithItem(item)
 * @static
 * @param {CCMenuItem} item
 * @returns {CCMenu}
*/
CCMenu.createWithItem = function(item) {return new CCMenu();};

/**
 * @super CCNode
 * @constructor 
*/
function CCMenuItem() {};
CCMenuItem.prototype = new CCNode();
/**
 * @function rect()
 * @returns {CCRect}
*/
CCMenuItem.prototype.rect = function() {return new CCRect();};
/**
 * @function activate()
*/
CCMenuItem.prototype.activate = function() {};
/**
 * @function selected()
*/
CCMenuItem.prototype.selected = function() {};
/**
 * @function unselected()
*/
CCMenuItem.prototype.unselected = function() {};
/**
 * @function setEnabled(enabled)
 * @param {Boolean} enabled
*/
CCMenuItem.prototype.setEnabled = function(enabled) {};
/**
 * @function isEnabled()
 * @returns {Boolean}
*/
CCMenuItem.prototype.isEnabled = function() {return true;};
/**
 * @function isSelected()
 * @returns {Boolean}
*/
CCMenuItem.prototype.isSelected = function() {return true;};
/**
 * @function itemWithTarget(target, selector)
 * @static
 * @param {Object} target
 * @param {Object} selector
 * @returns {CCMenuItem}
*/
CCMenuItem.itemWithTarget = function(target, selector) {return new CCMenuItem();};
/**
 * @super CCMenuItem
 * @constructor 
*/
function CCMenuItemLabel() {};
CCMenuItemLabel.prototype = new CCMenuItem();
/**
 * @function setString(label)
 * @param {String} label
*/
CCMenuItemLabel.prototype.setString = function(label) {};
/**
 * @function setOpacity(opacity)
 * @param {Number} opacity
*/
CCMenuItemLabel.prototype.setOpacity = function(opacity) {};
/**
 * @function getOpacity()
 * @returns {Number}
*/
CCMenuItemLabel.prototype.getOpacity = function() {return 0;};
/**
 * @function setColor(color)
 * @param {ccColor3B} color
*/
CCMenuItemLabel.prototype.setColor = function(color) {};
/**
 * @function getColor()
 * @returns {ccColor3B}
*/
CCMenuItemLabel.prototype.getColor = function() {return new ccColor3B();};
/**
 * @function setDisabledColor(color)
 * @param {ccColor3B} color
*/
CCMenuItemLabel.prototype.setDisabledColor = function(color) {};
/**
 * @function getDisabledColor()
 * @returns {ccColor3B}
*/
CCMenuItemLabel.prototype.getDisabledColor = function() {return new ccColor3B();};
/**
 * @function setLabel(pLabel)
 * @param {CCNode} pLabel
*/
CCMenuItemLabel.prototype.setLabel = function(pLabel) {};
/**
 * @function getLabel()
 * @returns {CCNode}
*/
CCMenuItemLabel.prototype.getLabel = function() {return new CCNode();};
/**
 * @function activate()
*/
CCMenuItemLabel.prototype.activate = function() {};
/**
 * @function selected()
*/
CCMenuItemLabel.prototype.selected = function() {};
/**
 * @function unselected()
*/
CCMenuItemLabel.prototype.unselected = function() {};
/**
 * @function setEnabled(enabled)
 * @param {Boolean} enabled
*/
CCMenuItemLabel.prototype.setEnabled = function(enabled) {};
/**
 * @function setOpacityModifyRGB(bValue)
 * @param {Boolean} bValue
*/
CCMenuItemLabel.prototype.setOpacityModifyRGB = function(bValue) {};
/**
 * @function isOpacityModifyRGB()
 * @returns {Boolean}
*/
CCMenuItemLabel.prototype.isOpacityModifyRGB = function() {return true;};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - label.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - label <b>and</b> args[1] is {Object} - target <b>and</b> args[2] is {Object} - selector.<br />
 * @returns {CCMenuItemLabel}
*/
CCMenuItemLabel.create = function(args) {return new CCMenuItemLabel();};
/**
 * @function itemWithLabel(label, target, selector)
 * @static
 * @param {CCNode} label
 * @param {Object} target
 * @param {Object} selector
 * @returns {CCMenuItemLabel}
*/
CCMenuItemLabel.itemWithLabel = function(label, target, selector) {return new CCMenuItemLabel();};
/**
 * @super CCMenuItemLabel
 * @constructor 
*/
function CCMenuItemAtlasFont() {};
CCMenuItemAtlasFont.prototype = new CCMenuItemLabel();
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - value <b>and</b> args[1] is {String} - charMapFile <b>and</b> args[2] is {Number} - itemWidth <b>and</b> args[3] is {Number} - itemHeight <b>and</b> args[4] is {Number} - startCharMap.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - value <b>and</b> args[1] is {String} - charMapFile <b>and</b> args[2] is {Number} - itemWidth <b>and</b> args[3] is {Number} - itemHeight <b>and</b> args[4] is {Number} - startCharMap <b>and</b> args[5] is {Object} - target <b>and</b> args[6] is {Object} - selector.<br />
 * @returns {CCMenuItemAtlasFont}
*/
CCMenuItemAtlasFont.create = function(args) {return new CCMenuItemAtlasFont();};
/**
 * @function itemWithString(value, charMapFile, itemWidth, itemHeight, startCharMap, target, selector)
 * @static
 * @param {String} value
 * @param {String} charMapFile
 * @param {Number} itemWidth
 * @param {Number} itemHeight
 * @param {Number} startCharMap
 * @param {Object} target
 * @param {Object} selector
 * @returns {CCMenuItemAtlasFont}
*/
CCMenuItemAtlasFont.itemWithString = function(value, charMapFile, itemWidth, itemHeight, startCharMap, target, selector) {return new CCMenuItemAtlasFont();};
/**
 * @super CCMenuItemLabel
 * @constructor 
*/
function CCMenuItemFont() {};
CCMenuItemFont.prototype = new CCMenuItemLabel();
/**
 * @function setFontSize(s)
 * @static
 * @param {Number} s
*/
CCMenuItemFont.setFontSize = function(s) {};
/**
 * @function fontSize()
 * @static
 * @returns {Number}
*/
CCMenuItemFont.fontSize = function() {return 0;};
/**
 * @function setFontName(name)
 * @static
 * @param {String} name
*/
CCMenuItemFont.setFontName = function(name) {};
/**
 * @function fontName()
 * @static
 * @returns {String}
*/
CCMenuItemFont.fontName = function() {return "";};
/**
 * @function setFontSizeObj(s)
 * @param {Number} s
*/
CCMenuItemFont.prototype.setFontSizeObj = function(s) {};
/**
 * @function fontSizeObj()
 * @returns {Number}
*/
CCMenuItemFont.prototype.fontSizeObj = function() {return 0;};
/**
 * @function setFontNameObj(name)
 * @param {String} name
*/
CCMenuItemFont.prototype.setFontNameObj = function(name) {};
/**
 * @function fontNameObj()
 * @returns {String}
*/
CCMenuItemFont.prototype.fontNameObj = function() {return "";};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - value.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - value <b>and</b> args[1] is {Object} - target <b>and</b> args[2] is {Object} - selector.<br />
 * @returns {CCMenuItemFont}
*/
CCMenuItemFont.create = function(args) {return new CCMenuItemFont();};
/**
 * @function itemWithString(value, target, selector)
 * @static
 * @param {String} value
 * @param {Object} target
 * @param {Object} selector
 * @returns {CCMenuItemFont}
*/
CCMenuItemFont.itemWithString = function(value, target, selector) {return new CCMenuItemFont();};
/**
 * @super CCMenuItem
 * @constructor 
*/
function CCMenuItemSprite() {};
CCMenuItemSprite.prototype = new CCMenuItem();
/**
 * @function setColor(color)
 * @param {ccColor3B} color
*/
CCMenuItemSprite.prototype.setColor = function(color) {};
/**
 * @function getColor()
 * @returns {ccColor3B}
*/
CCMenuItemSprite.prototype.getColor = function() {return new ccColor3B();};
/**
 * @function setOpacity(opacity)
 * @param {Number} opacity
*/
CCMenuItemSprite.prototype.setOpacity = function(opacity) {};
/**
 * @function getOpacity()
 * @returns {Number}
*/
CCMenuItemSprite.prototype.getOpacity = function() {return 0;};
/**
 * @function setNormalImage(pImage)
 * @param {CCNode} pImage
*/
CCMenuItemSprite.prototype.setNormalImage = function(pImage) {};
/**
 * @function getNormalImage()
 * @returns {CCNode}
*/
CCMenuItemSprite.prototype.getNormalImage = function() {return new CCNode();};
/**
 * @function setSelectedImage(pImage)
 * @param {CCNode} pImage
*/
CCMenuItemSprite.prototype.setSelectedImage = function(pImage) {};
/**
 * @function getSelectedImage()
 * @returns {CCNode}
*/
CCMenuItemSprite.prototype.getSelectedImage = function() {return new CCNode();};
/**
 * @function setDisabledImage(pImage)
 * @param {CCNode} pImage
*/
CCMenuItemSprite.prototype.setDisabledImage = function(pImage) {};
/**
 * @function getDisabledImage()
 * @returns {CCNode}
*/
CCMenuItemSprite.prototype.getDisabledImage = function() {return new CCNode();};
/**
 * @function selected()
*/
CCMenuItemSprite.prototype.selected = function() {};
/**
 * @function unselected()
*/
CCMenuItemSprite.prototype.unselected = function() {};
/**
 * @function setEnabled(bEnabled)
 * @param {Boolean} bEnabled
*/
CCMenuItemSprite.prototype.setEnabled = function(bEnabled) {};
/**
 * @function setOpacityModifyRGB(bValue)
 * @param {Boolean} bValue
*/
CCMenuItemSprite.prototype.setOpacityModifyRGB = function(bValue) {};
/**
 * @function isOpacityModifyRGB()
 * @returns {Boolean}
*/
CCMenuItemSprite.prototype.isOpacityModifyRGB = function() {return true;};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - normalSprite <b>and</b> args[1] is {CCNode} - selectedSprite.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - normalSprite <b>and</b> args[1] is {CCNode} - selectedSprite <b>and</b> args[2] is {CCNode} - disabledSprite.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - normalSprite <b>and</b> args[1] is {CCNode} - selectedSprite <b>and</b> args[2] is {Object} - target <b>and</b> args[3] is {Object} - selector.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - normalSprite <b>and</b> args[1] is {CCNode} - selectedSprite <b>and</b> args[2] is {CCNode} - disabledSprite <b>and</b> args[3] is {Object} - target <b>and</b> args[4] is {Object} - selector.<br />
 * @returns {CCMenuItemSprite}
*/
CCMenuItemSprite.create = function(args) {return new CCMenuItemSprite();};
/**
 * @function itemWithNormalSprite(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - normalSprite <b>and</b> args[1] is {CCNode} - selectedSprite <b>and</b> args[2] is {Object} - target <b>and</b> args[3] is {Object} - selector.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - normalSprite <b>and</b> args[1] is {CCNode} - selectedSprite <b>and</b> args[2] is {CCNode} - disabledSprite <b>and</b> args[3] is {Object} - target <b>and</b> args[4] is {Object} - selector.<br />
 * @returns {CCMenuItemSprite}
*/
CCMenuItemSprite.itemWithNormalSprite = function(args) {return new CCMenuItemSprite();};
/**
 * @super CCMenuItemSprite
 * @constructor 
*/
function CCMenuItemImage() {};
CCMenuItemImage.prototype = new CCMenuItemSprite();
/**
 * @function setColor(color)
 * @param {ccColor3B} color
*/
CCMenuItemImage.prototype.setColor = function(color) {};
/**
 * @function getColor()
 * @returns {ccColor3B}
*/
CCMenuItemImage.prototype.getColor = function() {return new ccColor3B();};
/**
 * @function setOpacity(opacity)
 * @param {Number} opacity
*/
CCMenuItemImage.prototype.setOpacity = function(opacity) {};
/**
 * @function getOpacity()
 * @returns {Number}
*/
CCMenuItemImage.prototype.getOpacity = function() {return 0;};
/**
 * @function setNormalSpriteFrame(frame)
 * @param {CCSpriteFrame} frame
*/
CCMenuItemImage.prototype.setNormalSpriteFrame = function(frame) {};
/**
 * @function setSelectedSpriteFrame(frame)
 * @param {CCSpriteFrame} frame
*/
CCMenuItemImage.prototype.setSelectedSpriteFrame = function(frame) {};
/**
 * @function setDisabledSpriteFrame(frame)
 * @param {CCSpriteFrame} frame
*/
CCMenuItemImage.prototype.setDisabledSpriteFrame = function(frame) {};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - normalImage <b>and</b> args[1] is {String} - selectedImage.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - normalImage <b>and</b> args[1] is {String} - selectedImage <b>and</b> args[2] is {String} - disabledImage.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - normalImage <b>and</b> args[1] is {String} - selectedImage <b>and</b> args[2] is {Object} - target <b>and</b> args[3] is {Object} - selector.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - normalImage <b>and</b> args[1] is {String} - selectedImage <b>and</b> args[2] is {String} - disabledImage <b>and</b> args[3] is {Object} - target <b>and</b> args[4] is {Object} - selector.<br />
 * @returns {CCMenuItemImage}
*/
CCMenuItemImage.create = function(args) {return new CCMenuItemImage();};
/**
 * @function itemWithNormalImage(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - normalImage <b>and</b> args[1] is {String} - selectedImage <b>and</b> args[2] is {Object} - target <b>and</b> args[3] is {Object} - selector.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - normalImage <b>and</b> args[1] is {String} - selectedImage <b>and</b> args[2] is {String} - disabledImage <b>and</b> args[3] is {Object} - target <b>and</b> args[4] is {Object} - selector.<br />
 * @returns {CCMenuItemImage}
*/
CCMenuItemImage.itemWithNormalImage = function(args) {return new CCMenuItemImage();};
/**
 * @super CCMenuItem
 * @constructor 
*/
function CCMenuItemToggle() {};
CCMenuItemToggle.prototype = new CCMenuItem();
/**
 * @function setColor(color)
 * @param {ccColor3B} color
*/
CCMenuItemToggle.prototype.setColor = function(color) {};
/**
 * @function getColor()
 * @returns {ccColor3B}
*/
CCMenuItemToggle.prototype.getColor = function() {return new ccColor3B();};
/**
 * @function setOpacity(opacity)
 * @param {Number} opacity
*/
CCMenuItemToggle.prototype.setOpacity = function(opacity) {};
/**
 * @function getOpacity()
 * @returns {Number}
*/
CCMenuItemToggle.prototype.getOpacity = function() {return 0;};
/**
 * @function setSelectedIndex(index)
 * @param {Number} index
*/
CCMenuItemToggle.prototype.setSelectedIndex = function(index) {};
/**
 * @function getSelectedIndex()
 * @returns {Number}
*/
CCMenuItemToggle.prototype.getSelectedIndex = function() {return 0;};
/**
 * @function setSubItems(pArrayOfItems)
 * @param {CCArray} pArrayOfItems
*/
CCMenuItemToggle.prototype.setSubItems = function(pArrayOfItems) {};
/**
 * @function getSubItems()
 * @returns {CCArray}
*/
CCMenuItemToggle.prototype.getSubItems = function() {return new CCArray();};
/**
 * @function addSubItem(item)
 * @param {CCMenuItem} item
*/
CCMenuItemToggle.prototype.addSubItem = function(item) {};
/**
 * @function selectedItem()
 * @returns {CCMenuItem}
*/
CCMenuItemToggle.prototype.selectedItem = function() {return new CCMenuItem();};
/**
 * @function activate()
*/
CCMenuItemToggle.prototype.activate = function() {};
/**
 * @function selected()
*/
CCMenuItemToggle.prototype.selected = function() {};
/**
 * @function unselected()
*/
CCMenuItemToggle.prototype.unselected = function() {};
/**
 * @function setEnabled(enabled)
 * @param {Boolean} enabled
*/
CCMenuItemToggle.prototype.setEnabled = function(enabled) {};
/**
 * @function setOpacityModifyRGB(bValue)
 * @param {Boolean} bValue
*/
CCMenuItemToggle.prototype.setOpacityModifyRGB = function(bValue) {};
/**
 * @function isOpacityModifyRGB()
 * @returns {Boolean}
*/
CCMenuItemToggle.prototype.isOpacityModifyRGB = function() {return true;};
/**
 * @function create(item)
 * @static
 * @param {CCMenuItem} item
 * @returns {CCMenuItemToggle}
*/
CCMenuItemToggle.create = function(item) {return new CCMenuItemToggle();};
/**
 * @super CCNode
 * @constructor 
*/
function CCMotionStreak() {};
CCMotionStreak.prototype = new CCNode();
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - fade <b>and</b> args[1] is {Number} - minSeg <b>and</b> args[2] is {Number} - stroke <b>and</b> args[3] is {ccColor3B} - color <b>and</b> args[4] is {String} - path.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - fade <b>and</b> args[1] is {Number} - minSeg <b>and</b> args[2] is {Number} - stroke <b>and</b> args[3] is {ccColor3B} - color <b>and</b> args[4] is {CCTexture2D} - texture.<br />
 * @returns {CCMotionStreak}
*/
CCMotionStreak.create = function(args) {return new CCMotionStreak();};
/**
 * @function tintWithColor(colors)
 * @param {ccColor3B} colors
*/
CCMotionStreak.prototype.tintWithColor = function(colors) {};
/**
 * @function reset()
*/
CCMotionStreak.prototype.reset = function() {};
/**
 * @function setPosition(position)
 * @param {CCPoint} position
*/
CCMotionStreak.prototype.setPosition = function(position) {};
/**
 * @function getTexture()
 * @returns {CCTexture2D}
*/
CCMotionStreak.prototype.getTexture = function() {return new CCTexture2D();};
/**
 * @function setTexture(texture)
 * @param {CCTexture2D} texture
*/
CCMotionStreak.prototype.setTexture = function(texture) {};
/**
 * @function setBlendFunc(blendFunc)
 * @param {ccBlendFunc} blendFunc
*/
CCMotionStreak.prototype.setBlendFunc = function(blendFunc) {};
/**
 * @function getBlendFunc()
 * @returns {ccBlendFunc}
*/
CCMotionStreak.prototype.getBlendFunc = function() {return new ccBlendFunc();};
/**
 * @function setColor(color)
 * @param {ccColor3B} color
*/
CCMotionStreak.prototype.setColor = function(color) {};
/**
 * @function getColor()
 * @returns {ccColor3B}
*/
CCMotionStreak.prototype.getColor = function() {return new ccColor3B();};
/**
 * @function getOpacity()
 * @returns {Number}
*/
CCMotionStreak.prototype.getOpacity = function() {return 0;};
/**
 * @function setOpacity(opacity)
 * @param {Number} opacity
*/
CCMotionStreak.prototype.setOpacity = function(opacity) {};
/**
 * @function setOpacityModifyRGB(bValue)
 * @param {Boolean} bValue
*/
CCMotionStreak.prototype.setOpacityModifyRGB = function(bValue) {};
/**
 * @function isOpacityModifyRGB()
 * @returns {Boolean}
*/
CCMotionStreak.prototype.isOpacityModifyRGB = function() {return true;};
/**
 * @function isFastMode()
 * @returns {Boolean}
*/
CCMotionStreak.prototype.isFastMode = function() {return true;};
/**
 * @function setFastMode(bFastMode)
 * @param {Boolean} bFastMode
*/
CCMotionStreak.prototype.setFastMode = function(bFastMode) {};
/**
 * @function isStartingPositionInitialized()
 * @returns {Boolean}
*/
CCMotionStreak.prototype.isStartingPositionInitialized = function() {return true;};
/**
 * @function setStartingPositionInitialized(bStartingPositionInitialized)
 * @param {Boolean} bStartingPositionInitialized
*/
CCMotionStreak.prototype.setStartingPositionInitialized = function(bStartingPositionInitialized) {};
/**
 * @super CCObject
 * @constructor 
*/
function CCNode() {};
CCNode.prototype = new CCObject();
/**
 * @function getZOrder()
 * @returns {Number}
*/
CCNode.prototype.getZOrder = function() {return 0;};
/**
 * @function getVertexZ()
 * @returns {Number}
*/
CCNode.prototype.getVertexZ = function() {return 0;};
/**
 * @function setVertexZ(vertextZ)
 * @param {Number} vertextZ
*/
CCNode.prototype.setVertexZ = function(vertextZ) {};
/**
 * @function getRotation()
 * @returns {Number}
*/
CCNode.prototype.getRotation = function() {return 0;};
/**
 * @function setRotation(newRotation)
 * @param {Number} newRotation
*/
CCNode.prototype.setRotation = function(newRotation) {};
/**
 * @function getScale()
 * @returns {Number}
*/
CCNode.prototype.getScale = function() {return 0;};
/**
 * @function setScale(scale)
 * @param {Number} scale
*/
CCNode.prototype.setScale = function(scale) {};
/**
 * @function getScaleX()
 * @returns {Number}
*/
CCNode.prototype.getScaleX = function() {return 0;};
/**
 * @function setScaleX(newScaleX)
 * @param {Number} newScaleX
*/
CCNode.prototype.setScaleX = function(newScaleX) {};
/**
 * @function getScaleY()
 * @returns {Number}
*/
CCNode.prototype.getScaleY = function() {return 0;};
/**
 * @function setScaleY(newScaleY)
 * @param {Number} newScaleY
*/
CCNode.prototype.setScaleY = function(newScaleY) {};
/**
 * @function getPosition()
 * @returns {CCPoint}
*/
CCNode.prototype.getPosition = function() {return new CCPoint();};
/**
 * @function getPositionX()
 * @returns {Number}
*/
CCNode.prototype.getPositionX = function() {return 0;};
/**
 * @function getPositionY()
 * @returns {Number}
*/
CCNode.prototype.getPositionY = function() {return 0;};
/**
 * @function setPosition(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - x <b>and</b> args[1] is {Number} - y.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCPoint} - pos.<br />
*/
CCNode.prototype.setPosition = function(args) {};
/**
 * @function setPositionX(x)
 * @param {Number} x
*/
CCNode.prototype.setPositionX = function(x) {};
/**
 * @function setPositionY(y)
 * @param {Number} y
*/
CCNode.prototype.setPositionY = function(y) {};
/**
 * @function getSkewX()
 * @returns {Number}
*/
CCNode.prototype.getSkewX = function() {return 0;};
/**
 * @function setSkewX(skewX)
 * @param {Number} skewX
*/
CCNode.prototype.setSkewX = function(skewX) {};
/**
 * @function getSkewY()
 * @returns {Number}
*/
CCNode.prototype.getSkewY = function() {return 0;};
/**
 * @function setSkewY(skewY)
 * @param {Number} skewY
*/
CCNode.prototype.setSkewY = function(skewY) {};
/**
 * @function isVisible()
 * @returns {Boolean}
*/
CCNode.prototype.isVisible = function() {return true;};
/**
 * @function setVisible(visible)
 * @param {Boolean} visible
*/
CCNode.prototype.setVisible = function(visible) {};
/**
 * @function getAnchorPoint()
 * @returns {CCPoint}
*/
CCNode.prototype.getAnchorPoint = function() {return new CCPoint();};
/**
 * @function setAnchorPoint(point)
 * @param {CCPoint} point
*/
CCNode.prototype.setAnchorPoint = function(point) {};
/**
 * @function getContentSize()
 * @returns {CCSize}
*/
CCNode.prototype.getContentSize = function() {return new CCSize();};
/**
 * @function setContentSize(size)
 * @param {CCSize} size
*/
CCNode.prototype.setContentSize = function(size) {};
/**
 * @function getTag()
 * @returns {Number}
*/
CCNode.prototype.getTag = function() {return 0;};
/**
 * @function setTag(tag)
 * @param {Number} tag
*/
CCNode.prototype.setTag = function(tag) {};
/**
 * @function getChildren()
 * @returns {CCArray}
*/
CCNode.prototype.getChildren = function() {return new CCArray();};
/**
 * @function getChildrenCount()
 * @returns {Number}
*/
CCNode.prototype.getChildrenCount = function() {return 0;};
/**
 * @function getChildAt(index)
 * @param {Number} index
 * @returns {CCNode}
*/
CCNode.prototype.getChildAt = function(index) {return new CCNode();};
/**
 * @function getCamera()
 * @returns {CCCamera}
*/
CCNode.prototype.getCamera = function() {return new CCCamera();};
/**
 * @function getGrid()
 * @returns {CCGridBase}
*/
CCNode.prototype.getGrid = function() {return new CCGridBase();};
/**
 * @function setGrid(pGrid)
 * @param {CCGridBase} pGrid
*/
CCNode.prototype.setGrid = function(pGrid) {};
/**
 * @function getAnchorPointInPoints()
 * @returns {CCPoint}
*/
CCNode.prototype.getAnchorPointInPoints = function() {return new CCPoint();};
/**
 * @function isRunning()
 * @returns {Boolean}
*/
CCNode.prototype.isRunning = function() {return true;};
/**
 * @function getParent()
 * @returns {CCNode}
*/
CCNode.prototype.getParent = function() {return new CCNode();};
/**
 * @function setParent(parent)
 * @param {CCNode} parent
*/
CCNode.prototype.setParent = function(parent) {};
/**
 * @function isIgnoreAnchorPointForPosition()
 * @returns {Boolean}
*/
CCNode.prototype.isIgnoreAnchorPointForPosition = function() {return true;};
/**
 * @function ignoreAnchorPointForPosition(newValue)
 * @param {Boolean} newValue
*/
CCNode.prototype.ignoreAnchorPointForPosition = function(newValue) {};
/**
 * @function getUserObject()
 * @returns {CCObject}
*/
CCNode.prototype.getUserObject = function() {return new CCObject();};
/**
 * @function setUserObject(pObject)
 * @param {CCObject} pObject
*/
CCNode.prototype.setUserObject = function(pObject) {};
/**
 * @function getShaderProgram()
 * @returns {CCGLProgram}
*/
CCNode.prototype.getShaderProgram = function() {return new CCGLProgram();};
/**
 * @function setShaderProgram(pShaderProgram)
 * @param {CCGLProgram} pShaderProgram
*/
CCNode.prototype.setShaderProgram = function(pShaderProgram) {};
/**
 * @function getOrderOfArrival()
 * @returns {Number}
*/
CCNode.prototype.getOrderOfArrival = function() {return 0;};
/**
 * @function setOrderOfArrival(order)
 * @param {Number} order
*/
CCNode.prototype.setOrderOfArrival = function(order) {};
/**
 * @function getGLServerState()
 * @returns {ccGLServerState}
*/
CCNode.prototype.getGLServerState = function() {return new ccGLServerState();};
/**
 * @function setGLServerState(state)
 * @param {ccGLServerState} state
*/
CCNode.prototype.setGLServerState = function(state) {};
/**
 * @function getActionManager()
 * @returns {CCActionManager}
*/
CCNode.prototype.getActionManager = function() {return new CCActionManager();};
/**
 * @function setActionManager(pActionMgr)
 * @param {CCActionManager} pActionMgr
*/
CCNode.prototype.setActionManager = function(pActionMgr) {};
/**
 * @function getScheduler()
 * @returns {CCScheduler}
*/
CCNode.prototype.getScheduler = function() {return new CCScheduler();};
/**
 * @function setScheduler(pScheduler)
 * @param {CCScheduler} pScheduler
*/
CCNode.prototype.setScheduler = function(pScheduler) {};
/**
 * @function addChild(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - child <b>and</b> args[1] is {Number} - zOrder <b>and</b> args[2] is {Number} - tag.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - child <b>and</b> args[1] is {Number} - zOrder.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - child.<br />
*/
CCNode.prototype.addChild = function(args) {};
/**
 * @function removeChild(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - child.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - child <b>and</b> args[1] is {Boolean} - cleanup.<br />
*/
CCNode.prototype.removeChild = function(args) {};
/**
 * @function removeAllChildrenWithCleanup(cleanup)
 * @param {Boolean} cleanup
*/
CCNode.prototype.removeAllChildrenWithCleanup = function(cleanup) {};
/**
 * @function reorderChild(child, zOrder)
 * @param {CCNode} child
 * @param {Number} zOrder
*/
CCNode.prototype.reorderChild = function(child, zOrder) {};
/**
 * @function cleanup()
*/
CCNode.prototype.cleanup = function() {};
/**
 * @function transform()
*/
CCNode.prototype.transform = function() {};
/**
 * @function transformAncestors()
*/
CCNode.prototype.transformAncestors = function() {};
/**
 * @function boundingBox()
 * @returns {CCRect}
*/
CCNode.prototype.boundingBox = function() {return new CCRect();};
/**
 * @function runAction(action)
 * @param {CCAction} action
 * @returns {CCAction}
*/
CCNode.prototype.runAction = function(action) {return new CCAction();};
/**
 * @function stopAllActions()
*/
CCNode.prototype.stopAllActions = function() {};
/**
 * @function stopAction(action)
 * @param {CCAction} action
*/
CCNode.prototype.stopAction = function(action) {};
/**
 * @function stopActionByTag(tag)
 * @param {Number} tag
*/
CCNode.prototype.stopActionByTag = function(tag) {};
/**
 * @function getActionByTag(tag)
 * @param {Number} tag
 * @returns {CCAction}
*/
CCNode.prototype.getActionByTag = function(tag) {return new CCAction();};
/**
 * @function description()
 * @returns {String}
*/
CCNode.prototype.description = function() {return "";};
/**
 * @function getChildByTag(tag)
 * @param {Number} tag
 * @returns {CCNode}
*/
CCNode.prototype.getChildByTag = function(tag) {return new CCNode();};
/**
 * @function numberOfRunningActions()
 * @returns {Number}
*/
CCNode.prototype.numberOfRunningActions = function() {return 0;};
/**
 * @function nodeToParentTransform()
 * @returns {CCAffineTransform}
*/
CCNode.prototype.nodeToParentTransform = function() {return new CCAffineTransform();};
/**
 * @function parentToNodeTransform()
 * @returns {CCAffineTransform}
*/
CCNode.prototype.parentToNodeTransform = function() {return new CCAffineTransform();};
/**
 * @function nodeToWorldTransform()
 * @returns {CCAffineTransform}
*/
CCNode.prototype.nodeToWorldTransform = function() {return new CCAffineTransform();};
/**
 * @function worldToNodeTransform()
 * @returns {CCAffineTransform}
*/
CCNode.prototype.worldToNodeTransform = function() {return new CCAffineTransform();};
/**
 * @function convertToNodeSpace(worldPoint)
 * @param {CCPoint} worldPoint
 * @returns {CCPoint}
*/
CCNode.prototype.convertToNodeSpace = function(worldPoint) {return new CCPoint();};
/**
 * @function convertToWorldSpace(nodePoint)
 * @param {CCPoint} nodePoint
 * @returns {CCPoint}
*/
CCNode.prototype.convertToWorldSpace = function(nodePoint) {return new CCPoint();};
/**
 * @function convertToNodeSpaceAR(worldPoint)
 * @param {CCPoint} worldPoint
 * @returns {CCPoint}
*/
CCNode.prototype.convertToNodeSpaceAR = function(worldPoint) {return new CCPoint();};
/**
 * @function convertToWorldSpaceAR(nodePoint)
 * @param {CCPoint} nodePoint
 * @returns {CCPoint}
*/
CCNode.prototype.convertToWorldSpaceAR = function(nodePoint) {return new CCPoint();};
/**
 * @function convertTouchToNodeSpace(touch)
 * @param {CCTouch} touch
 * @returns {CCPoint}
*/
CCNode.prototype.convertTouchToNodeSpace = function(touch) {return new CCPoint();};
/**
 * @function convertTouchToNodeSpaceAR(touch)
 * @param {CCTouch} touch
 * @returns {CCPoint}
*/
CCNode.prototype.convertTouchToNodeSpaceAR = function(touch) {return new CCPoint();};
/**
 * @function removeFromParentAndCleanup(cleanup)
 * @param {Boolean} cleanup
*/
CCNode.prototype.removeFromParentAndCleanup = function(cleanup) {};
/**
 * @function removeChildByTag(tag, cleanup)
 * @param {Number} tag
 * @param {Boolean} cleanup
*/
CCNode.prototype.removeChildByTag = function(tag, cleanup) {};
/**
 * @function scheduleUpdate()
*/
CCNode.prototype.scheduleUpdate = function() {};
/**
 * @function unscheduleUpdate()
*/
CCNode.prototype.unscheduleUpdate = function() {};
/**
 * @function schedule(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Object} - selector.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Object} - selector <b>and</b> args[1] is {Number} - interval.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Object} - selector <b>and</b> args[1] is {Number} - interval <b>and</b> args[2] is {Number} - repeat <b>and</b> args[3] is {Number} - delay.<br />
*/
CCNode.prototype.schedule = function(args) {};
/**
 * @function scheduleOnce(selector, delay)
 * @param {Object} selector
 * @param {Number} delay
*/
CCNode.prototype.scheduleOnce = function(selector, delay) {};
/**
 * @function unschedule(selector)
 * @param {Object} selector
*/
CCNode.prototype.unschedule = function(selector) {};
/**
 * @function unscheduleAllSelectors()
*/
CCNode.prototype.unscheduleAllSelectors = function() {};
/**
 * @function resumeSchedulerAndActions()
*/
CCNode.prototype.resumeSchedulerAndActions = function() {};
/**
 * @function pauseSchedulerAndActions()
*/
CCNode.prototype.pauseSchedulerAndActions = function() {};
/**
 * @function create()
 * @static
 * @returns {CCNode}
*/
CCNode.create = function() {return new CCNode();};
/**
 * Property zOrder
 * @type Number
*/
CCNode.prototype.zOrder = 0;
/**
 * Property vertexZ
 * @type Number
*/
CCNode.prototype.vertexZ = 0;
/**
 * Property rotation
 * @type Number
*/
CCNode.prototype.rotation = 0;
/**
 * Property scale
 * @type Number
*/
CCNode.prototype.scale = 0;
/**
 * Property scaleX
 * @type Number
*/
CCNode.prototype.scaleX = 0;
/**
 * Property scaleY
 * @type Number
*/
CCNode.prototype.scaleY = 0;
/**
 * Property skewX
 * @type Number
*/
CCNode.prototype.skewX = 0;
/**
 * Property skewY
 * @type Number
*/
CCNode.prototype.skewY = 0;
/**
 * Property tag
 * @type Number
*/
CCNode.prototype.tag = 0;
cocos2d.kCCNodeTagInvalid = -1;
cocos2d.kCCNodeOnEnter = 0;
cocos2d.kCCNodeOnExit = 1;
/**
 * @super CCObject
 * @constructor 
*/
function CCNotificationCenter() {};
CCNotificationCenter.prototype = new CCObject();
/**
 * @function sharedNotificationCenter()
 * @static
 * @returns {CCNotificationCenter}
*/
CCNotificationCenter.sharedNotificationCenter = function() {return new CCNotificationCenter();};
/**
 * @function addObserver(target, name)
 * @param {Object} target
 * @param {String} name
*/
CCNotificationCenter.prototype.addObserver = function(target, name) {};
/**
 * @function removeObserver(target, name)
 * @param {Object} target
 * @param {String} name
*/
CCNotificationCenter.prototype.removeObserver = function(target, name) {};
/**
 * @function postNotification(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - name <b>and</b> args[1] is {Object} - value.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - name.<br />
*/
CCNotificationCenter.prototype.postNotification = function(args) {};
/**
 * @function unregisterScriptObserver()
*/
CCNotificationCenter.prototype.unregisterScriptObserver = function() {};
/**
 * @super Object
 * @constructor 
*/
function CCZone() {};
CCZone.prototype = {};
/**
 * @super JacosBaseObject
 * @constructor 
*/
function CCCopying() {};
CCCopying.prototype = new JacosBaseObject();
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCCopying.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @super CCCopying
 * @constructor 
*/
function CCObject() {};
CCObject.prototype = new CCCopying();
/**
 * @function setController(controller)
 * @param {Object} controller
*/
CCObject.prototype.setController = function(controller) {};
/**
 * @function getController()
 * @returns {Object}
*/
CCObject.prototype.getController = function() {return new Object();};
/**
 * @function release()
*/
CCObject.prototype.release = function() {};
/**
 * @function retain()
*/
CCObject.prototype.retain = function() {};
/**
 * @function isSingleReference()
 * @returns {Boolean}
*/
CCObject.prototype.isSingleReference = function() {return true;};
/**
 * @function retainCount()
 * @returns {Number}
*/
CCObject.prototype.retainCount = function() {return 0;};
/**
 * @function isEqual(pObject)
 * @param {CCObject} pObject
 * @returns {Boolean}
*/
CCObject.prototype.isEqual = function(pObject) {return true;};
/**
 * @function copy()
 * @returns {CCObject}
*/
CCObject.prototype.copy = function() {return new CCObject();};
/**
 * @function autorelease()
 * @returns {CCObject}
*/
CCObject.prototype.autorelease = function() {return new CCObject();};
/**
 * @super CCNode
 * @constructor 
*/
function CCParallaxNode() {};
CCParallaxNode.prototype = new CCNode();
/**
 * @function addChild(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - child <b>and</b> args[1] is {Number} - z <b>and</b> args[2] is {CCPoint} - parallaxRatio <b>and</b> args[3] is {CCPoint} - positionOffset.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - child <b>and</b> args[1] is {Number} - zOrder <b>and</b> args[2] is {Number} - tag.<br />
*/
CCParallaxNode.prototype.addChild = function(args) {};
/**
 * @function removeChild(child, cleanup)
 * @param {CCNode} child
 * @param {Boolean} cleanup
*/
CCParallaxNode.prototype.removeChild = function(child, cleanup) {};
/**
 * @function removeAllChildrenWithCleanup(cleanup)
 * @param {Boolean} cleanup
*/
CCParallaxNode.prototype.removeAllChildrenWithCleanup = function(cleanup) {};
/**
 * @function create()
 * @static
 * @returns {CCParallaxNode}
*/
CCParallaxNode.create = function() {return new CCParallaxNode();};
/**
 * @super CCNode
 * @constructor 
*/
function CCParticleBatchNode() {};
CCParticleBatchNode.prototype = new CCNode();
/**
 * @function addChild(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - child.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - child <b>and</b> args[1] is {Number} - zOrder.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - child <b>and</b> args[1] is {Number} - zOrder <b>and</b> args[2] is {Number} - tag.<br />
*/
CCParticleBatchNode.prototype.addChild = function(args) {};
/**
 * @function insertChild(pSystem, index)
 * @param {CCParticleSystem} pSystem
 * @param {Number} index
*/
CCParticleBatchNode.prototype.insertChild = function(pSystem, index) {};
/**
 * @function removeChild(child, cleanup)
 * @param {CCNode} child
 * @param {Boolean} cleanup
*/
CCParticleBatchNode.prototype.removeChild = function(child, cleanup) {};
/**
 * @function reorderChild(child, zOrder)
 * @param {CCNode} child
 * @param {Number} zOrder
*/
CCParticleBatchNode.prototype.reorderChild = function(child, zOrder) {};
/**
 * @function removeChildAtIndex(index, doCleanup)
 * @param {Number} index
 * @param {Boolean} doCleanup
*/
CCParticleBatchNode.prototype.removeChildAtIndex = function(index, doCleanup) {};
/**
 * @function removeAllChildrenWithCleanup(doCleanup)
 * @param {Boolean} doCleanup
*/
CCParticleBatchNode.prototype.removeAllChildrenWithCleanup = function(doCleanup) {};
/**
 * @function disableParticle(particleIndex)
 * @param {Number} particleIndex
*/
CCParticleBatchNode.prototype.disableParticle = function(particleIndex) {};
/**
 * @function getTexture()
 * @returns {CCTexture2D}
*/
CCParticleBatchNode.prototype.getTexture = function() {return new CCTexture2D();};
/**
 * @function setTexture(texture)
 * @param {CCTexture2D} texture
*/
CCParticleBatchNode.prototype.setTexture = function(texture) {};
/**
 * @function setBlendFunc(blendFunc)
 * @param {ccBlendFunc} blendFunc
*/
CCParticleBatchNode.prototype.setBlendFunc = function(blendFunc) {};
/**
 * @function getBlendFunc()
 * @returns {ccBlendFunc}
*/
CCParticleBatchNode.prototype.getBlendFunc = function() {return new ccBlendFunc();};
/**
 * @function create(fileImage, capacity)
 * @static
 * @param {String} fileImage
 * @param {Number} capacity default is <b>kCCParticleDefaultCapacity</b>
 * @returns {CCParticleBatchNode}
*/
CCParticleBatchNode.create = function(fileImage, capacity) {return new CCParticleBatchNode();};
/**
 * @function createWithTexture(tex, capacity)
 * @static
 * @param {CCTexture2D} tex
 * @param {Number} capacity default is <b>kCCParticleDefaultCapacity</b>
 * @returns {CCParticleBatchNode}
*/
CCParticleBatchNode.createWithTexture = function(tex, capacity) {return new CCParticleBatchNode();};
/**
 * @super CCParticleSystemQuad
 * @constructor 
*/
function CCParticleFire() {};
CCParticleFire.prototype = new CCParticleSystemQuad();
/**
 * @function create()
 * @static
 * @returns {CCParticleFire}
*/
CCParticleFire.create = function() {return new CCParticleFire();};
/**
 * @super CCParticleSystemQuad
 * @constructor 
*/
function CCParticleFireworks() {};
CCParticleFireworks.prototype = new CCParticleSystemQuad();
/**
 * @function create()
 * @static
 * @returns {CCParticleFireworks}
*/
CCParticleFireworks.create = function() {return new CCParticleFireworks();};
/**
 * @super CCParticleSystemQuad
 * @constructor 
*/
function CCParticleSun() {};
CCParticleSun.prototype = new CCParticleSystemQuad();
/**
 * @function create()
 * @static
 * @returns {CCParticleSun}
*/
CCParticleSun.create = function() {return new CCParticleSun();};
/**
 * @super CCParticleSystemQuad
 * @constructor 
*/
function CCParticleGalaxy() {};
CCParticleGalaxy.prototype = new CCParticleSystemQuad();
/**
 * @function create()
 * @static
 * @returns {CCParticleGalaxy}
*/
CCParticleGalaxy.create = function() {return new CCParticleGalaxy();};
/**
 * @super CCParticleSystemQuad
 * @constructor 
*/
function CCParticleFlower() {};
CCParticleFlower.prototype = new CCParticleSystemQuad();
/**
 * @function create()
 * @static
 * @returns {CCParticleFlower}
*/
CCParticleFlower.create = function() {return new CCParticleFlower();};
/**
 * @super CCParticleSystemQuad
 * @constructor 
*/
function CCParticleMeteor() {};
CCParticleMeteor.prototype = new CCParticleSystemQuad();
/**
 * @function create()
 * @static
 * @returns {CCParticleMeteor}
*/
CCParticleMeteor.create = function() {return new CCParticleMeteor();};
/**
 * @super CCParticleSystemQuad
 * @constructor 
*/
function CCParticleSpiral() {};
CCParticleSpiral.prototype = new CCParticleSystemQuad();
/**
 * @function create()
 * @static
 * @returns {CCParticleSpiral}
*/
CCParticleSpiral.create = function() {return new CCParticleSpiral();};
/**
 * @super CCParticleSystemQuad
 * @constructor 
*/
function CCParticleExplosion() {};
CCParticleExplosion.prototype = new CCParticleSystemQuad();
/**
 * @function create()
 * @static
 * @returns {CCParticleExplosion}
*/
CCParticleExplosion.create = function() {return new CCParticleExplosion();};
/**
 * @super CCParticleSystemQuad
 * @constructor 
*/
function CCParticleSmoke() {};
CCParticleSmoke.prototype = new CCParticleSystemQuad();
/**
 * @function create()
 * @static
 * @returns {CCParticleSmoke}
*/
CCParticleSmoke.create = function() {return new CCParticleSmoke();};
/**
 * @super CCParticleSystemQuad
 * @constructor 
*/
function CCParticleSnow() {};
CCParticleSnow.prototype = new CCParticleSystemQuad();
/**
 * @function create()
 * @static
 * @returns {CCParticleSnow}
*/
CCParticleSnow.create = function() {return new CCParticleSnow();};
/**
 * @super CCParticleSystemQuad
 * @constructor 
*/
function CCParticleRain() {};
CCParticleRain.prototype = new CCParticleSystemQuad();
/**
 * @function create()
 * @static
 * @returns {CCParticleRain}
*/
CCParticleRain.create = function() {return new CCParticleRain();};
/**
 * @super CCNode
 * @constructor 
*/
function CCParticleSystem() {};
CCParticleSystem.prototype = new CCNode();
/**
 * @function getGravity()
 * @returns {CCPoint}
*/
CCParticleSystem.prototype.getGravity = function() {return new CCPoint();};
/**
 * @function setGravity(g)
 * @param {CCPoint} g
*/
CCParticleSystem.prototype.setGravity = function(g) {};
/**
 * @function getSpeed()
 * @returns {Number}
*/
CCParticleSystem.prototype.getSpeed = function() {return 0;};
/**
 * @function setSpeed(speed)
 * @param {Number} speed
*/
CCParticleSystem.prototype.setSpeed = function(speed) {};
/**
 * @function getSpeedVar()
 * @returns {Number}
*/
CCParticleSystem.prototype.getSpeedVar = function() {return 0;};
/**
 * @function setSpeedVar(speed)
 * @param {Number} speed
*/
CCParticleSystem.prototype.setSpeedVar = function(speed) {};
/**
 * @function getTangentialAccel()
 * @returns {Number}
*/
CCParticleSystem.prototype.getTangentialAccel = function() {return 0;};
/**
 * @function setTangentialAccel(t)
 * @param {Number} t
*/
CCParticleSystem.prototype.setTangentialAccel = function(t) {};
/**
 * @function getTangentialAccelVar()
 * @returns {Number}
*/
CCParticleSystem.prototype.getTangentialAccelVar = function() {return 0;};
/**
 * @function setTangentialAccelVar(t)
 * @param {Number} t
*/
CCParticleSystem.prototype.setTangentialAccelVar = function(t) {};
/**
 * @function getRadialAccel()
 * @returns {Number}
*/
CCParticleSystem.prototype.getRadialAccel = function() {return 0;};
/**
 * @function setRadialAccel(t)
 * @param {Number} t
*/
CCParticleSystem.prototype.setRadialAccel = function(t) {};
/**
 * @function getRadialAccelVar()
 * @returns {Number}
*/
CCParticleSystem.prototype.getRadialAccelVar = function() {return 0;};
/**
 * @function setRadialAccelVar(t)
 * @param {Number} t
*/
CCParticleSystem.prototype.setRadialAccelVar = function(t) {};
/**
 * @function getStartRadius()
 * @returns {Number}
*/
CCParticleSystem.prototype.getStartRadius = function() {return 0;};
/**
 * @function setStartRadius(startRadius)
 * @param {Number} startRadius
*/
CCParticleSystem.prototype.setStartRadius = function(startRadius) {};
/**
 * @function getStartRadiusVar()
 * @returns {Number}
*/
CCParticleSystem.prototype.getStartRadiusVar = function() {return 0;};
/**
 * @function setStartRadiusVar(startRadiusVar)
 * @param {Number} startRadiusVar
*/
CCParticleSystem.prototype.setStartRadiusVar = function(startRadiusVar) {};
/**
 * @function getEndRadius()
 * @returns {Number}
*/
CCParticleSystem.prototype.getEndRadius = function() {return 0;};
/**
 * @function setEndRadius(endRadius)
 * @param {Number} endRadius
*/
CCParticleSystem.prototype.setEndRadius = function(endRadius) {};
/**
 * @function getEndRadiusVar()
 * @returns {Number}
*/
CCParticleSystem.prototype.getEndRadiusVar = function() {return 0;};
/**
 * @function setEndRadiusVar(endRadiusVar)
 * @param {Number} endRadiusVar
*/
CCParticleSystem.prototype.setEndRadiusVar = function(endRadiusVar) {};
/**
 * @function getRotatePerSecond()
 * @returns {Number}
*/
CCParticleSystem.prototype.getRotatePerSecond = function() {return 0;};
/**
 * @function setRotatePerSecond(degrees)
 * @param {Number} degrees
*/
CCParticleSystem.prototype.setRotatePerSecond = function(degrees) {};
/**
 * @function getRotatePerSecondVar()
 * @returns {Number}
*/
CCParticleSystem.prototype.getRotatePerSecondVar = function() {return 0;};
/**
 * @function setRotatePerSecondVar(degrees)
 * @param {Number} degrees
*/
CCParticleSystem.prototype.setRotatePerSecondVar = function(degrees) {};
/**
 * @function addParticle()
 * @returns {Boolean}
*/
CCParticleSystem.prototype.addParticle = function() {return true;};
/**
 * @function initParticle(particle)
 * @param {tCCParticle} particle
*/
CCParticleSystem.prototype.initParticle = function(particle) {};
/**
 * @function stopSystem()
*/
CCParticleSystem.prototype.stopSystem = function() {};
/**
 * @function resetSystem()
*/
CCParticleSystem.prototype.resetSystem = function() {};
/**
 * @function isFull()
 * @returns {Boolean}
*/
CCParticleSystem.prototype.isFull = function() {return true;};
/**
 * @function updateQuadWithParticle(particle, newPosition)
 * @param {tCCParticle} particle
 * @param {CCPoint} newPosition
*/
CCParticleSystem.prototype.updateQuadWithParticle = function(particle, newPosition) {};
/**
 * @function postStep()
*/
CCParticleSystem.prototype.postStep = function() {};
/**
 * @function getParticleCount()
 * @returns {Number}
*/
CCParticleSystem.prototype.getParticleCount = function() {return 0;};
/**
 * @function getDuration()
 * @returns {Number}
*/
CCParticleSystem.prototype.getDuration = function() {return 0;};
/**
 * @function setDuration(d)
 * @param {Number} d
*/
CCParticleSystem.prototype.setDuration = function(d) {};
/**
 * @function getSourcePosition()
 * @returns {CCPoint}
*/
CCParticleSystem.prototype.getSourcePosition = function() {return new CCPoint();};
/**
 * @function setSourcePosition(pos)
 * @param {CCPoint} pos
*/
CCParticleSystem.prototype.setSourcePosition = function(pos) {};
/**
 * @function getPosVar()
 * @returns {CCPoint}
*/
CCParticleSystem.prototype.getPosVar = function() {return new CCPoint();};
/**
 * @function setPosVar(pos)
 * @param {CCPoint} pos
*/
CCParticleSystem.prototype.setPosVar = function(pos) {};
/**
 * @function getLife()
 * @returns {Number}
*/
CCParticleSystem.prototype.getLife = function() {return 0;};
/**
 * @function setLife(life)
 * @param {Number} life
*/
CCParticleSystem.prototype.setLife = function(life) {};
/**
 * @function getLifeVar()
 * @returns {Number}
*/
CCParticleSystem.prototype.getLifeVar = function() {return 0;};
/**
 * @function setLifeVar(lifeVar)
 * @param {Number} lifeVar
*/
CCParticleSystem.prototype.setLifeVar = function(lifeVar) {};
/**
 * @function getAngle()
 * @returns {Number}
*/
CCParticleSystem.prototype.getAngle = function() {return 0;};
/**
 * @function setAngle(angle)
 * @param {Number} angle
*/
CCParticleSystem.prototype.setAngle = function(angle) {};
/**
 * @function getAngleVar()
 * @returns {Number}
*/
CCParticleSystem.prototype.getAngleVar = function() {return 0;};
/**
 * @function setAngleVar(angle)
 * @param {Number} angle
*/
CCParticleSystem.prototype.setAngleVar = function(angle) {};
/**
 * @function getStartSize()
 * @returns {Number}
*/
CCParticleSystem.prototype.getStartSize = function() {return 0;};
/**
 * @function setStartSize(size)
 * @param {Number} size
*/
CCParticleSystem.prototype.setStartSize = function(size) {};
/**
 * @function getStartSizeVar()
 * @returns {Number}
*/
CCParticleSystem.prototype.getStartSizeVar = function() {return 0;};
/**
 * @function setStartSizeVar(size)
 * @param {Number} size
*/
CCParticleSystem.prototype.setStartSizeVar = function(size) {};
/**
 * @function getEndSize()
 * @returns {Number}
*/
CCParticleSystem.prototype.getEndSize = function() {return 0;};
/**
 * @function setEndSize(size)
 * @param {Number} size
*/
CCParticleSystem.prototype.setEndSize = function(size) {};
/**
 * @function getEndSizeVar()
 * @returns {Number}
*/
CCParticleSystem.prototype.getEndSizeVar = function() {return 0;};
/**
 * @function setEndSizeVar(size)
 * @param {Number} size
*/
CCParticleSystem.prototype.setEndSizeVar = function(size) {};
/**
 * @function setStartColor(color)
 * @param {ccColor4F} color
*/
CCParticleSystem.prototype.setStartColor = function(color) {};
/**
 * @function getStartColor()
 * @returns {ccColor4F}
*/
CCParticleSystem.prototype.getStartColor = function() {return new ccColor4F();};
/**
 * @function setStartColorVar(color)
 * @param {ccColor4F} color
*/
CCParticleSystem.prototype.setStartColorVar = function(color) {};
/**
 * @function getStartColorVar()
 * @returns {ccColor4F}
*/
CCParticleSystem.prototype.getStartColorVar = function() {return new ccColor4F();};
/**
 * @function setEndColor(color)
 * @param {ccColor4F} color
*/
CCParticleSystem.prototype.setEndColor = function(color) {};
/**
 * @function getEndColor()
 * @returns {ccColor4F}
*/
CCParticleSystem.prototype.getEndColor = function() {return new ccColor4F();};
/**
 * @function setEndColorVar(color)
 * @param {ccColor4F} color
*/
CCParticleSystem.prototype.setEndColorVar = function(color) {};
/**
 * @function getEndColorVar()
 * @returns {ccColor4F}
*/
CCParticleSystem.prototype.getEndColorVar = function() {return new ccColor4F();};
/**
 * @function setStartSpin(spin)
 * @param {Number} spin
*/
CCParticleSystem.prototype.setStartSpin = function(spin) {};
/**
 * @function getStartSpin()
 * @returns {Number}
*/
CCParticleSystem.prototype.getStartSpin = function() {return 0;};
/**
 * @function setStartSpinVar(spin)
 * @param {Number} spin
*/
CCParticleSystem.prototype.setStartSpinVar = function(spin) {};
/**
 * @function getStartSpinVar()
 * @returns {Number}
*/
CCParticleSystem.prototype.getStartSpinVar = function() {return 0;};
/**
 * @function setEndSpin(spin)
 * @param {Number} spin
*/
CCParticleSystem.prototype.setEndSpin = function(spin) {};
/**
 * @function getEndSpin()
 * @returns {Number}
*/
CCParticleSystem.prototype.getEndSpin = function() {return 0;};
/**
 * @function setEndSpinVar(spin)
 * @param {Number} spin
*/
CCParticleSystem.prototype.setEndSpinVar = function(spin) {};
/**
 * @function getEndSpinVar()
 * @returns {Number}
*/
CCParticleSystem.prototype.getEndSpinVar = function() {return 0;};
/**
 * @function setEmissionRate(rate)
 * @param {Number} rate
*/
CCParticleSystem.prototype.setEmissionRate = function(rate) {};
/**
 * @function getEmissionRate()
 * @returns {Number}
*/
CCParticleSystem.prototype.getEmissionRate = function() {return 0;};
/**
 * @function getTotalParticles()
 * @returns {Number}
*/
CCParticleSystem.prototype.getTotalParticles = function() {return 0;};
/**
 * @function isAutoRemoveOnFinish()
 * @returns {Boolean}
*/
CCParticleSystem.prototype.isAutoRemoveOnFinish = function() {return true;};
/**
 * @function setAutoRemoveOnFinish(autoRemove)
 * @param {Boolean} autoRemove
*/
CCParticleSystem.prototype.setAutoRemoveOnFinish = function(autoRemove) {};
/**
 * @function getEmitterMode()
 * @returns {Number}
*/
CCParticleSystem.prototype.getEmitterMode = function() {return 0;};
/**
 * @function setEmitterMode(mode)
 * @param {Number} mode
*/
CCParticleSystem.prototype.setEmitterMode = function(mode) {};
/**
 * @function getTexture()
 * @returns {CCTexture2D}
*/
CCParticleSystem.prototype.getTexture = function() {return new CCTexture2D();};
/**
 * @function setTexture(texture)
 * @param {CCTexture2D} texture
*/
CCParticleSystem.prototype.setTexture = function(texture) {};
/**
 * @function getBlendFunc()
 * @returns {ccBlendFunc}
*/
CCParticleSystem.prototype.getBlendFunc = function() {return new ccBlendFunc();};
/**
 * @function setBlendFunc(blendFunc)
 * @param {ccBlendFunc} blendFunc
*/
CCParticleSystem.prototype.setBlendFunc = function(blendFunc) {};
/**
 * @function setScale(s)
 * @param {Number} s
*/
CCParticleSystem.prototype.setScale = function(s) {};
/**
 * @function setRotation(newRotation)
 * @param {Number} newRotation
*/
CCParticleSystem.prototype.setRotation = function(newRotation) {};
/**
 * @function setScaleX(newScaleX)
 * @param {Number} newScaleX
*/
CCParticleSystem.prototype.setScaleX = function(newScaleX) {};
/**
 * @function setScaleY(newScaleY)
 * @param {Number} newScaleY
*/
CCParticleSystem.prototype.setScaleY = function(newScaleY) {};
/**
 * @function isActive()
 * @returns {Boolean}
*/
CCParticleSystem.prototype.isActive = function() {return true;};
/**
 * @function isBlendAdditive()
 * @returns {Boolean}
*/
CCParticleSystem.prototype.isBlendAdditive = function() {return true;};
/**
 * @function setBlendAdditive(value)
 * @param {Boolean} value
*/
CCParticleSystem.prototype.setBlendAdditive = function(value) {};
/**
 * @function getBatchNode()
 * @returns {CCParticleBatchNode}
*/
CCParticleSystem.prototype.getBatchNode = function() {return new CCParticleBatchNode();};
/**
 * @function setBatchNode(node)
 * @param {CCParticleBatchNode} node
*/
CCParticleSystem.prototype.setBatchNode = function(node) {};
/**
 * @function getPositionType()
 * @returns {Number}
*/
CCParticleSystem.prototype.getPositionType = function() {return 0;};
/**
 * @function setPositionType(type)
 * @param {Number} type
*/
CCParticleSystem.prototype.setPositionType = function(type) {};
/**
 * @function initWithFile(plistFile)
 * @param {String} plistFile
 * @returns {Boolean}
*/
CCParticleSystem.prototype.initWithFile = function(plistFile) {return true;};
/**
 * @function initWithTotalParticles(number)
 * @param {Number} number
 * @returns {Boolean}
*/
CCParticleSystem.prototype.initWithTotalParticles = function(number) {return true;};
/**
 * @function create(plistFile)
 * @static
 * @param {String} plistFile
 * @returns {CCParticleSystem}
*/
CCParticleSystem.create = function(plistFile) {return new CCParticleSystem();};
/**
 * @super CCParticleSystem
 * @constructor 
*/
function CCParticleSystemQuad() {};
CCParticleSystemQuad.prototype = new CCParticleSystem();
/**
 * @function postStep(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
*/
CCParticleSystemQuad.prototype.postStep = function(args) {};
/**
 * @function setDisplayFrame(spriteFrame)
 * @param {CCSpriteFrame} spriteFrame
*/
CCParticleSystemQuad.prototype.setDisplayFrame = function(spriteFrame) {};
/**
 * @function setTexture(texture)
 * @param {CCTexture2D} texture
*/
CCParticleSystemQuad.prototype.setTexture = function(texture) {};
/**
 * @function setTextureWithRect(texture, rect)
 * @param {CCTexture2D} texture
 * @param {CCRect} rect
*/
CCParticleSystemQuad.prototype.setTextureWithRect = function(texture, rect) {};
/**
 * @function setBatchNode(batchNode)
 * @param {CCParticleBatchNode} batchNode
*/
CCParticleSystemQuad.prototype.setBatchNode = function(batchNode) {};
/**
 * @function setTotalParticles(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - tp.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - tp.<br />
*/
CCParticleSystemQuad.prototype.setTotalParticles = function(args) {};
/**
 * @function updateQuadWithParticle(particle, newPosition)
 * @param {tCCParticle} particle
 * @param {CCPoint} newPosition
*/
CCParticleSystemQuad.prototype.updateQuadWithParticle = function(particle, newPosition) {};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - plistFile.<br />
 * @returns {CCParticleSystemQuad}
*/
CCParticleSystemQuad.create = function(args) {return new CCParticleSystemQuad();};
cocos2d.kCCParticleDurationInfinity = -1;
cocos2d.kCCParticleStartSizeEqualToEndSize = -1;
cocos2d.kCCParticleStartRadiusEqualToEndRadius = -1;
cocos2d.kParticleStartSizeEqualToEndSize = -1;
cocos2d.kParticleDurationInfinity = -1;
cocos2d.kCCParticleModeGravity = 0;
cocos2d.kCCParticleModeRadius = 1;
cocos2d.kCCPositionTypeFree = 0;
cocos2d.kCCPositionTypeRelative = 1;
cocos2d.kCCPositionTypeGrouped = 2;
cocos2d.kPositionTypeFree = 0;
cocos2d.kPositionTypeGrouped = 2;
/**
 * @super CCNode
 * @constructor 
*/
function CCPhysicNode() {};
CCPhysicNode.prototype = new CCNode();
/**
 * @function setPhysicBody(physicBody)
 * @param {b2Body} physicBody
*/
CCPhysicNode.prototype.setPhysicBody = function(physicBody) {};
/**
 * @function getPhysicBody()
 * @returns {b2Body}
*/
CCPhysicNode.prototype.getPhysicBody = function() {return new b2Body();};
/**
 * @function setPTMRatio(ratio)
 * @param {Number} ratio
*/
CCPhysicNode.prototype.setPTMRatio = function(ratio) {};
/**
 * @function getPTMRatio()
 * @returns {Number}
*/
CCPhysicNode.prototype.getPTMRatio = function() {return 0;};
/**
 * @super CCSprite
 * @constructor 
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - filename <b>and</b> args[1] is {Number} - ptm_ratio <b>and</b> args[2] is {b2World} - world <b>and</b> args[3] is {Number} - friction <b>and</b> args[4] is {Number} - density <b>and</b> args[5] is {Number} - restitution.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCTexture2D} - texture <b>and</b> args[1] is {Number} - ptm_ratio <b>and</b> args[2] is {b2World} - world <b>and</b> args[3] is {Number} - friction <b>and</b> args[4] is {Number} - density <b>and</b> args[5] is {Number} - restitution.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {b2Body} - body.<br />
*/
function CCPhysicSprite(args) {};
CCPhysicSprite.prototype = new CCSprite();
/**
 * @function getPhysicBody()
 * @returns {b2Body}
*/
CCPhysicSprite.prototype.getPhysicBody = function() {return new b2Body();};
/**
 * @function setPTMRatio(ratio)
 * @param {Number} ratio
*/
CCPhysicSprite.prototype.setPTMRatio = function(ratio) {};
/**
 * @function getPTMRatio()
 * @returns {Number}
*/
CCPhysicSprite.prototype.getPTMRatio = function() {return 0;};
/**
 * @function setMass(mass)
 * @param {Number} mass
*/
CCPhysicSprite.prototype.setMass = function(mass) {};
/**
 * @super CCSpriteBatchNode
 * @constructor 
*/
function CCPhysicSpriteBatchNode() {};
CCPhysicSpriteBatchNode.prototype = new CCSpriteBatchNode();
/**
 * @function setPhysicBody(physicBody)
 * @param {b2Body} physicBody
*/
CCPhysicSpriteBatchNode.prototype.setPhysicBody = function(physicBody) {};
/**
 * @function getPhysicBody()
 * @returns {b2Body}
*/
CCPhysicSpriteBatchNode.prototype.getPhysicBody = function() {return new b2Body();};
/**
 * @function setPTMRatio(ratio)
 * @param {Number} ratio
*/
CCPhysicSpriteBatchNode.prototype.setPTMRatio = function(ratio) {};
/**
 * @function getPTMRatio()
 * @returns {Number}
*/
CCPhysicSpriteBatchNode.prototype.getPTMRatio = function() {return 0;};
/**
 * @function ccpNeg(v)
 * @static
 * @param {CCPoint} v
 * @returns {CCPoint}
*/
cocos2d.ccpNeg = function(v) {return new CCPoint();};
/**
 * @function ccpAdd(v1, v2)
 * @static
 * @param {CCPoint} v1
 * @param {CCPoint} v2
 * @returns {CCPoint}
*/
cocos2d.ccpAdd = function(v1, v2) {return new CCPoint();};
/**
 * @function ccpSub(v1, v2)
 * @static
 * @param {CCPoint} v1
 * @param {CCPoint} v2
 * @returns {CCPoint}
*/
cocos2d.ccpSub = function(v1, v2) {return new CCPoint();};
/**
 * @function ccpMult(v, s)
 * @static
 * @param {CCPoint} v
 * @param {CGFloat} s
 * @returns {CCPoint}
*/
cocos2d.ccpMult = function(v, s) {return new CCPoint();};
/**
 * @function ccpMidpoint(v1, v2)
 * @static
 * @param {CCPoint} v1
 * @param {CCPoint} v2
 * @returns {CCPoint}
*/
cocos2d.ccpMidpoint = function(v1, v2) {return new CCPoint();};
/**
 * @function ccpDot(v1, v2)
 * @static
 * @param {CCPoint} v1
 * @param {CCPoint} v2
 * @returns {CGFloat}
*/
cocos2d.ccpDot = function(v1, v2) {return new CGFloat();};
/**
 * @function ccpCross(v1, v2)
 * @static
 * @param {CCPoint} v1
 * @param {CCPoint} v2
 * @returns {CGFloat}
*/
cocos2d.ccpCross = function(v1, v2) {return new CGFloat();};
/**
 * @function ccpPerp(v)
 * @static
 * @param {CCPoint} v
 * @returns {CCPoint}
*/
cocos2d.ccpPerp = function(v) {return new CCPoint();};
/**
 * @function ccpRPerp(v)
 * @static
 * @param {CCPoint} v
 * @returns {CCPoint}
*/
cocos2d.ccpRPerp = function(v) {return new CCPoint();};
/**
 * @function ccpProject(v1, v2)
 * @static
 * @param {CCPoint} v1
 * @param {CCPoint} v2
 * @returns {CCPoint}
*/
cocos2d.ccpProject = function(v1, v2) {return new CCPoint();};
/**
 * @function ccpRotate(v1, v2)
 * @static
 * @param {CCPoint} v1
 * @param {CCPoint} v2
 * @returns {CCPoint}
*/
cocos2d.ccpRotate = function(v1, v2) {return new CCPoint();};
/**
 * @function ccpUnrotate(v1, v2)
 * @static
 * @param {CCPoint} v1
 * @param {CCPoint} v2
 * @returns {CCPoint}
*/
cocos2d.ccpUnrotate = function(v1, v2) {return new CCPoint();};
/**
 * @function ccpLengthSQ(v)
 * @static
 * @param {CCPoint} v
 * @returns {CGFloat}
*/
cocos2d.ccpLengthSQ = function(v) {return new CGFloat();};
/**
 * @function ccpDistanceSQ(p1, p2)
 * @static
 * @param {CCPoint} p1
 * @param {CCPoint} p2
 * @returns {CGFloat}
*/
cocos2d.ccpDistanceSQ = function(p1, p2) {return new CGFloat();};
/**
 * @function ccpLength(v)
 * @static
 * @param {CCPoint} v
 * @returns {CGFloat}
*/
cocos2d.ccpLength = function(v) {return new CGFloat();};
/**
 * @function ccpDistance(v1, v2)
 * @static
 * @param {CCPoint} v1
 * @param {CCPoint} v2
 * @returns {CGFloat}
*/
cocos2d.ccpDistance = function(v1, v2) {return new CGFloat();};
/**
 * @function ccpNormalize(v)
 * @static
 * @param {CCPoint} v
 * @returns {CCPoint}
*/
cocos2d.ccpNormalize = function(v) {return new CCPoint();};
/**
 * @function ccpForAngle(a)
 * @static
 * @param {CGFloat} a
 * @returns {CCPoint}
*/
cocos2d.ccpForAngle = function(a) {return new CCPoint();};
/**
 * @function ccpToAngle(v)
 * @static
 * @param {CCPoint} v
 * @returns {CGFloat}
*/
cocos2d.ccpToAngle = function(v) {return new CGFloat();};
/**
 * @function clampf(value, min_inclusive, max_inclusive)
 * @static
 * @param {Number} value
 * @param {Number} min_inclusive
 * @param {Number} max_inclusive
 * @returns {Number}
*/
cocos2d.clampf = function(value, min_inclusive, max_inclusive) {return 0;};
/**
 * @function ccpClamp(p, from, to)
 * @static
 * @param {CCPoint} p
 * @param {CCPoint} from
 * @param {CCPoint} to
 * @returns {CCPoint}
*/
cocos2d.ccpClamp = function(p, from, to) {return new CCPoint();};
/**
 * @function ccpFromSize(s)
 * @static
 * @param {CCSize} s
 * @returns {CCPoint}
*/
cocos2d.ccpFromSize = function(s) {return new CCPoint();};
/**
 * @function ccpLerp(a, b, alpha)
 * @static
 * @param {CCPoint} a
 * @param {CCPoint} b
 * @param {Number} alpha
 * @returns {CCPoint}
*/
cocos2d.ccpLerp = function(a, b, alpha) {return new CCPoint();};
/**
 * @function ccpFuzzyEqual(a, b, variance)
 * @static
 * @param {CCPoint} a
 * @param {CCPoint} b
 * @param {Number} variance
 * @returns {Boolean}
*/
cocos2d.ccpFuzzyEqual = function(a, b, variance) {return true;};
/**
 * @function ccpCompMult(a, b)
 * @static
 * @param {CCPoint} a
 * @param {CCPoint} b
 * @returns {CCPoint}
*/
cocos2d.ccpCompMult = function(a, b) {return new CCPoint();};
/**
 * @function ccpAngleSigned(a, b)
 * @static
 * @param {CCPoint} a
 * @param {CCPoint} b
 * @returns {Number}
*/
cocos2d.ccpAngleSigned = function(a, b) {return 0;};
/**
 * @function ccpAngle(a, b)
 * @static
 * @param {CCPoint} a
 * @param {CCPoint} b
 * @returns {Number}
*/
cocos2d.ccpAngle = function(a, b) {return 0;};
/**
 * @function ccpRotateByAngle(v, pivot, angle)
 * @static
 * @param {CCPoint} v
 * @param {CCPoint} pivot
 * @param {Number} angle
 * @returns {CCPoint}
*/
cocos2d.ccpRotateByAngle = function(v, pivot, angle) {return new CCPoint();};
/**
 * @function ccpLineIntersect(p1, p2, p3, p4, s, t)
 * @static
 * @param {CCPoint} p1
 * @param {CCPoint} p2
 * @param {CCPoint} p3
 * @param {CCPoint} p4
 * @param {float} s
 * @param {float} t
 * @returns {Boolean}
*/
cocos2d.ccpLineIntersect = function(p1, p2, p3, p4, s, t) {return true;};
/**
 * @function ccpSegmentIntersect(A, B, C, D)
 * @static
 * @param {CCPoint} A
 * @param {CCPoint} B
 * @param {CCPoint} C
 * @param {CCPoint} D
 * @returns {Boolean}
*/
cocos2d.ccpSegmentIntersect = function(A, B, C, D) {return true;};
/**
 * @function ccpIntersectPoint(A, B, C, D)
 * @static
 * @param {CCPoint} A
 * @param {CCPoint} B
 * @param {CCPoint} C
 * @param {CCPoint} D
 * @returns {CCPoint}
*/
cocos2d.ccpIntersectPoint = function(A, B, C, D) {return new CCPoint();};
/**
 * @super CCNode
 * @constructor 
*/
function CCProgressTimer() {};
CCProgressTimer.prototype = new CCNode();
/**
 * @function getType()
 * @returns {CCProgressTimerType}
*/
CCProgressTimer.prototype.getType = function() {return new CCProgressTimerType();};
/**
 * @function getPercentage()
 * @returns {Number}
*/
CCProgressTimer.prototype.getPercentage = function() {return 0;};
/**
 * @function getSprite()
 * @returns {CCSprite}
*/
CCProgressTimer.prototype.getSprite = function() {return new CCSprite();};
/**
 * @function setPercentage(fPercentage)
 * @param {Number} fPercentage
*/
CCProgressTimer.prototype.setPercentage = function(fPercentage) {};
/**
 * @function setSprite(pSprite)
 * @param {CCSprite} pSprite
*/
CCProgressTimer.prototype.setSprite = function(pSprite) {};
/**
 * @function setType(type)
 * @param {CCProgressTimerType} type
*/
CCProgressTimer.prototype.setType = function(type) {};
/**
 * @function setReverseProgress(reverse)
 * @param {Boolean} reverse
*/
CCProgressTimer.prototype.setReverseProgress = function(reverse) {};
/**
 * @function setAnchorPoint(anchorPoint)
 * @param {CCPoint} anchorPoint
*/
CCProgressTimer.prototype.setAnchorPoint = function(anchorPoint) {};
/**
 * @function setColor(color)
 * @param {ccColor3B} color
*/
CCProgressTimer.prototype.setColor = function(color) {};
/**
 * @function getColor()
 * @returns {ccColor3B}
*/
CCProgressTimer.prototype.getColor = function() {return new ccColor3B();};
/**
 * @function getOpacity()
 * @returns {Number}
*/
CCProgressTimer.prototype.getOpacity = function() {return 0;};
/**
 * @function setOpacity(opacity)
 * @param {Number} opacity
*/
CCProgressTimer.prototype.setOpacity = function(opacity) {};
/**
 * @function setOpacityModifyRGB(bValue)
 * @param {Boolean} bValue
*/
CCProgressTimer.prototype.setOpacityModifyRGB = function(bValue) {};
/**
 * @function isOpacityModifyRGB()
 * @returns {Boolean}
*/
CCProgressTimer.prototype.isOpacityModifyRGB = function() {return true;};
/**
 * @function create(sp)
 * @static
 * @param {CCSprite} sp
 * @returns {CCProgressTimer}
*/
CCProgressTimer.create = function(sp) {return new CCProgressTimer();};
/**
 * @function getMidpoint()
 * @returns {CCPoint}
*/
CCProgressTimer.prototype.getMidpoint = function() {return new CCPoint();};
/**
 * @function setMidpoint(pt)
 * @param {CCPoint} pt
*/
CCProgressTimer.prototype.setMidpoint = function(pt) {};
/**
 * @function getBarChangeRate()
 * @returns {CCPoint}
*/
CCProgressTimer.prototype.getBarChangeRate = function() {return new CCPoint();};
/**
 * @function setBarChangeRate(rate)
 * @param {CCPoint} rate
*/
CCProgressTimer.prototype.setBarChangeRate = function(rate) {};
/**
 * @function isReverseDirection()
 * @returns {Boolean}
*/
CCProgressTimer.prototype.isReverseDirection = function() {return true;};
/**
 * @function setReverseDirection(bReverseDir)
 * @param {Boolean} bReverseDir
*/
CCProgressTimer.prototype.setReverseDirection = function(bReverseDir) {};
cocos2d.kCCProgressTimerTypeRadial = 0;
cocos2d.kCCProgressTimerTypeBar = 1;
/**
 * @super CCNode
 * @constructor 
*/
function CCRenderTexture() {};
CCRenderTexture.prototype = new CCNode();
/**
 * @function getSprite()
 * @returns {CCSprite}
*/
CCRenderTexture.prototype.getSprite = function() {return new CCSprite();};
/**
 * @function setSprite(psprite)
 * @param {CCSprite} psprite
*/
CCRenderTexture.prototype.setSprite = function(psprite) {};
/**
 * @function begin()
*/
CCRenderTexture.prototype.begin = function() {};
/**
 * @function beginWithClear(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - r <b>and</b> args[1] is {Number} - g <b>and</b> args[2] is {Number} - b <b>and</b> args[3] is {Number} - a.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - r <b>and</b> args[1] is {Number} - g <b>and</b> args[2] is {Number} - b <b>and</b> args[3] is {Number} - a <b>and</b> args[4] is {Number} - depthValue.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - r <b>and</b> args[1] is {Number} - g <b>and</b> args[2] is {Number} - b <b>and</b> args[3] is {Number} - a <b>and</b> args[4] is {Number} - depthValue <b>and</b> args[5] is {Number} - stencilValue.<br />
*/
CCRenderTexture.prototype.beginWithClear = function(args) {};
/**
 * @function clear(r, g, b, a)
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @param {Number} a
*/
CCRenderTexture.prototype.clear = function(r, g, b, a) {};
/**
 * @function clearDepth(depthValue)
 * @param {Number} depthValue
*/
CCRenderTexture.prototype.clearDepth = function(depthValue) {};
/**
 * @function clearStencil(stencilValue)
 * @param {Number} stencilValue
*/
CCRenderTexture.prototype.clearStencil = function(stencilValue) {};
/**
 * @function newCCImage()
 * @returns {CCImage}
*/
CCRenderTexture.prototype.newCCImage = function() {return new CCImage();};
/**
 * @function saveToFile(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - szFilePath.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - name <b>and</b> args[1] is {tCCImageFormat} - format.<br />
 * @returns {Boolean}
*/
CCRenderTexture.prototype.saveToFile = function(args) {return true;};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - w <b>and</b> args[1] is {Number} - h <b>and</b> args[2] is {CCTexture2DPixelFormat} - eFormat <b>and</b> args[3] is {Number} - uDepthStencilFormat.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - w <b>and</b> args[1] is {Number} - h <b>and</b> args[2] is {CCTexture2DPixelFormat} - eFormat.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - w <b>and</b> args[1] is {Number} - h.<br />
 * @returns {CCRenderTexture}
*/
CCRenderTexture.create = function(args) {return new CCRenderTexture();};
cocos2d.kCCImageFormatJPEG = 0;
cocos2d.kCCImageFormatPNG = 1;
/**
 * @super CCNode
 * @constructor 
*/
function CCRibbon() {};
CCRibbon.prototype = new CCNode();
/**
 * @function setTexture(val)
 * @param {CCTexture2D} val
*/
CCRibbon.prototype.setTexture = function(val) {};
/**
 * @function getTexture()
 * @returns {CCTexture2D}
*/
CCRibbon.prototype.getTexture = function() {return new CCTexture2D();};
/**
 * @function setTextureLength(val)
 * @param {Number} val
*/
CCRibbon.prototype.setTextureLength = function(val) {};
/**
 * @function getTextureLength()
 * @returns {Number}
*/
CCRibbon.prototype.getTextureLength = function() {return 0;};
/**
 * @function setBlendFunc(val)
 * @param {ccBlendFunc} val
*/
CCRibbon.prototype.setBlendFunc = function(val) {};
/**
 * @function getBlendFunc()
 * @returns {ccBlendFunc}
*/
CCRibbon.prototype.getBlendFunc = function() {return new ccBlendFunc();};
/**
 * @function setColor(val)
 * @param {ccColor4B} val
*/
CCRibbon.prototype.setColor = function(val) {};
/**
 * @function getColor()
 * @returns {ccColor4B}
*/
CCRibbon.prototype.getColor = function() {return new ccColor4B();};
/**
 * @function addPointAt(location, width)
 * @param {CCPoint} location
 * @param {Number} width
*/
CCRibbon.prototype.addPointAt = function(location, width) {};
/**
 * @function sideOfLine(p, l1, l2)
 * @param {CCPoint} p
 * @param {CCPoint} l1
 * @param {CCPoint} l2
 * @returns {Number}
*/
CCRibbon.prototype.sideOfLine = function(p, l1, l2) {return 0;};
/**
 * @function create(w, path, length, color, fade)
 * @static
 * @param {Number} w
 * @param {String} path
 * @param {Number} length
 * @param {ccColor4B} color
 * @param {Number} fade
 * @returns {CCRibbon}
*/
CCRibbon.create = function(w, path, length, color, fade) {return new CCRibbon();};
/**
 * @super CCNode
 * @constructor 
*/
function CCScene() {};
CCScene.prototype = new CCNode();
/**
 * @function create()
 * @static
 * @returns {CCScene}
*/
CCScene.create = function() {return new CCScene();};
/**
 * @super CCObject
 * @constructor 
*/
function CCTimer() {};
CCTimer.prototype = new CCObject();
/**
 * @function getInterval()
 * @returns {Number}
*/
CCTimer.prototype.getInterval = function() {return 0;};
/**
 * @function setInterval(fInterval)
 * @param {Number} fInterval
*/
CCTimer.prototype.setInterval = function(fInterval) {};
/**
 * @function update(dt)
 * @param {Number} dt
*/
CCTimer.prototype.update = function(dt) {};
/**
 * @function timerWithTarget(target, selector, fSeconds)
 * @static
 * @param {Object} target
 * @param {Object} selector
 * @param {Number} fSeconds
 * @returns {CCTimer}
*/
CCTimer.timerWithTarget = function(target, selector, fSeconds) {return new CCTimer();};
/**
 * @super CCObject
 * @constructor 
*/
function CCScheduler() {};
CCScheduler.prototype = new CCObject();
/**
 * @function getTimeScale()
 * @returns {Number}
*/
CCScheduler.prototype.getTimeScale = function() {return 0;};
/**
 * @function setTimeScale(fTimeScale)
 * @param {Number} fTimeScale
*/
CCScheduler.prototype.setTimeScale = function(fTimeScale) {};
/**
 * @function isTargetPaused(target)
 * @param {Object} target
 * @returns {Boolean}
*/
CCScheduler.prototype.isTargetPaused = function(target) {return true;};
/**
 * @function resumeTarget(target)
 * @param {Object} target
*/
CCScheduler.prototype.resumeTarget = function(target) {};
/**
 * @function pauseTarget(target)
 * @param {Object} target
*/
CCScheduler.prototype.pauseTarget = function(target) {};
/**
 * @function unscheduleUpdateForTarget(target)
 * @param {Object} target
*/
CCScheduler.prototype.unscheduleUpdateForTarget = function(target) {};
/**
 * @function unscheduleSelector(target, selector)
 * @param {Object} target
 * @param {Object} selector
*/
CCScheduler.prototype.unscheduleSelector = function(target, selector) {};
/**
 * @function scheduleUpdateForTarget(target, nPriority, bPaused)
 * @param {Object} target
 * @param {Number} nPriority
 * @param {Boolean} bPaused
*/
CCScheduler.prototype.scheduleUpdateForTarget = function(target, nPriority, bPaused) {};
/**
 * @function scheduleSelector(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Object} - target <b>and</b> args[1] is {Object} - selector <b>and</b> args[2] is {Number} - fInterval <b>and</b> args[3] is {Boolean} - bPaused.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Object} - target <b>and</b> args[1] is {Object} - selector <b>and</b> args[2] is {Number} - fInterval <b>and</b> args[3] is {Boolean} - bPaused <b>and</b> args[4] is {Number} - repeat <b>and</b> args[5] is {Number} - delay.<br />
*/
CCScheduler.prototype.scheduleSelector = function(args) {};
/**
 * @function unscheduleAll()
*/
CCScheduler.prototype.unscheduleAll = function() {};
/**
 * @function unscheduleAllWithMinPriority(nMinPriority)
 * @param {Number} nMinPriority
*/
CCScheduler.prototype.unscheduleAllWithMinPriority = function(nMinPriority) {};
/**
 * @super CCNode
 * @constructor 
*/
function CCSprite() {};
CCSprite.prototype = new CCNode();
/**
 * @function setDirty(bDirty)
 * @param {Boolean} bDirty
*/
CCSprite.prototype.setDirty = function(bDirty) {};
/**
 * @function isDirty()
 * @returns {Boolean}
*/
CCSprite.prototype.isDirty = function() {return true;};
/**
 * @function getQuad()
 * @returns {ccV3F_C4B_T2F_Quad}
*/
CCSprite.prototype.getQuad = function() {return new ccV3F_C4B_T2F_Quad();};
/**
 * @function getTextureRect()
 * @returns {CCRect}
*/
CCSprite.prototype.getTextureRect = function() {return new CCRect();};
/**
 * @function initWithTexture(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCTexture2D} - pTexture.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCTexture2D} - pTexture <b>and</b> args[1] is {CCRect} - rect.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCTexture2D} - pTexture <b>and</b> args[1] is {CCRect} - rect <b>and</b> args[2] is {Boolean} - rotated.<br />
 * @returns {Boolean}
*/
CCSprite.prototype.initWithTexture = function(args) {return true;};
/**
 * @function initWithSpriteFrame(pSpriteFrame)
 * @param {CCSpriteFrame} pSpriteFrame
 * @returns {Boolean}
*/
CCSprite.prototype.initWithSpriteFrame = function(pSpriteFrame) {return true;};
/**
 * @function initWithSpriteFrameName(pszSpriteFrameName)
 * @param {String} pszSpriteFrameName
 * @returns {Boolean}
*/
CCSprite.prototype.initWithSpriteFrameName = function(pszSpriteFrameName) {return true;};
/**
 * @function initWithFile(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pszFilename.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pszFilename <b>and</b> args[1] is {CCRect} - rect.<br />
 * @returns {Boolean}
*/
CCSprite.prototype.initWithFile = function(args) {return true;};
/**
 * @function isTextureRectRotated()
 * @returns {Boolean}
*/
CCSprite.prototype.isTextureRectRotated = function() {return true;};
/**
 * @function setAtlasIndex(uAtlasIndex)
 * @param {Number} uAtlasIndex
*/
CCSprite.prototype.setAtlasIndex = function(uAtlasIndex) {};
/**
 * @function getAtlasIndex()
 * @returns {Number}
*/
CCSprite.prototype.getAtlasIndex = function() {return 0;};
/**
 * @function setTextureAtlas(pobTextureAtlas)
 * @param {CCTextureAtlas} pobTextureAtlas
*/
CCSprite.prototype.setTextureAtlas = function(pobTextureAtlas) {};
/**
 * @function getTextureAtlas()
 * @returns {CCTextureAtlas}
*/
CCSprite.prototype.getTextureAtlas = function() {return new CCTextureAtlas();};
/**
 * @function setBlendFunc(blendFunc)
 * @param {ccBlendFunc} blendFunc
*/
CCSprite.prototype.setBlendFunc = function(blendFunc) {};
/**
 * @function getBlendFunc()
 * @returns {ccBlendFunc}
*/
CCSprite.prototype.getBlendFunc = function() {return new ccBlendFunc();};
/**
 * @function getOffsetPosition()
 * @returns {CCPoint}
*/
CCSprite.prototype.getOffsetPosition = function() {return new CCPoint();};
/**
 * @function setDirtyRecursively(bValue)
 * @param {Boolean} bValue
*/
CCSprite.prototype.setDirtyRecursively = function(bValue) {};
/**
 * @function ignoreAnchorPointForPosition(newValue)
 * @param {Boolean} newValue
*/
CCSprite.prototype.ignoreAnchorPointForPosition = function(newValue) {};
/**
 * @function setFlipX(bFlipX)
 * @param {Boolean} bFlipX
*/
CCSprite.prototype.setFlipX = function(bFlipX) {};
/**
 * @function setFlipY(bFlipY)
 * @param {Boolean} bFlipY
*/
CCSprite.prototype.setFlipY = function(bFlipY) {};
/**
 * @function isFlipX()
 * @returns {Boolean}
*/
CCSprite.prototype.isFlipX = function() {return true;};
/**
 * @function isFlipY()
 * @returns {Boolean}
*/
CCSprite.prototype.isFlipY = function() {return true;};
/**
 * @function updateColor()
*/
CCSprite.prototype.updateColor = function() {};
/**
 * @function removeChild(pChild, bCleanUp)
 * @param {CCNode} pChild
 * @param {Boolean} bCleanUp
*/
CCSprite.prototype.removeChild = function(pChild, bCleanUp) {};
/**
 * @function removeAllChildrenWithCleanup(bCleanup)
 * @param {Boolean} bCleanup
*/
CCSprite.prototype.removeAllChildrenWithCleanup = function(bCleanup) {};
/**
 * @function reorderChild(pChild, zOrder)
 * @param {CCNode} pChild
 * @param {Number} zOrder
*/
CCSprite.prototype.reorderChild = function(pChild, zOrder) {};
/**
 * @function addChild(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - pChild.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - pChild <b>and</b> args[1] is {Number} - zOrder.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - pChild <b>and</b> args[1] is {Number} - zOrder <b>and</b> args[2] is {Number} - tag.<br />
*/
CCSprite.prototype.addChild = function(args) {};
/**
 * @function sortAllChildren()
*/
CCSprite.prototype.sortAllChildren = function() {};
/**
 * @function setRotation(rotation)
 * @param {Number} rotation
*/
CCSprite.prototype.setRotation = function(rotation) {};
/**
 * @function setSkewX(sx)
 * @param {Number} sx
*/
CCSprite.prototype.setSkewX = function(sx) {};
/**
 * @function setSkewY(sy)
 * @param {Number} sy
*/
CCSprite.prototype.setSkewY = function(sy) {};
/**
 * @function setScale(fScale)
 * @param {Number} fScale
*/
CCSprite.prototype.setScale = function(fScale) {};
/**
 * @function setScaleX(fScaleX)
 * @param {Number} fScaleX
*/
CCSprite.prototype.setScaleX = function(fScaleX) {};
/**
 * @function setScaleY(fScaleY)
 * @param {Number} fScaleY
*/
CCSprite.prototype.setScaleY = function(fScaleY) {};
/**
 * @function setVertexZ(fVertexZ)
 * @param {Number} fVertexZ
*/
CCSprite.prototype.setVertexZ = function(fVertexZ) {};
/**
 * @function setAnchorPoint(anchor)
 * @param {CCPoint} anchor
*/
CCSprite.prototype.setAnchorPoint = function(anchor) {};
/**
 * @function setVisible(bVisible)
 * @param {Boolean} bVisible
*/
CCSprite.prototype.setVisible = function(bVisible) {};
/**
 * @function setOpacity(opacity)
 * @param {Number} opacity
*/
CCSprite.prototype.setOpacity = function(opacity) {};
/**
 * @function getOpacity()
 * @returns {Number}
*/
CCSprite.prototype.getOpacity = function() {return 0;};
/**
 * @function setColor(color3)
 * @param {ccColor3B} color3
*/
CCSprite.prototype.setColor = function(color3) {};
/**
 * @function getColor()
 * @returns {ccColor3B}
*/
CCSprite.prototype.getColor = function() {return new ccColor3B();};
/**
 * @function setOpacityModifyRGB(bValue)
 * @param {Boolean} bValue
*/
CCSprite.prototype.setOpacityModifyRGB = function(bValue) {};
/**
 * @function isOpacityModifyRGB()
 * @returns {Boolean}
*/
CCSprite.prototype.isOpacityModifyRGB = function() {return true;};
/**
 * @function setTexture(texture)
 * @param {CCTexture2D} texture
*/
CCSprite.prototype.setTexture = function(texture) {};
/**
 * @function getTexture()
 * @returns {CCTexture2D}
*/
CCSprite.prototype.getTexture = function() {return new CCTexture2D();};
/**
 * @function updateTransform()
*/
CCSprite.prototype.updateTransform = function() {};
/**
 * @function setTextureRect(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCRect} - rect.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCRect} - rect <b>and</b> args[1] is {Boolean} - rotated <b>and</b> args[2] is {CCSize} - size.<br />
*/
CCSprite.prototype.setTextureRect = function(args) {};
/**
 * @function setVertexRect(rect)
 * @param {CCRect} rect
*/
CCSprite.prototype.setVertexRect = function(rect) {};
/**
 * @function setDisplayFrame(pNewFrame)
 * @param {CCSpriteFrame} pNewFrame
*/
CCSprite.prototype.setDisplayFrame = function(pNewFrame) {};
/**
 * @function isFrameDisplayed(pFrame)
 * @param {CCSpriteFrame} pFrame
 * @returns {Boolean}
*/
CCSprite.prototype.isFrameDisplayed = function(pFrame) {return true;};
/**
 * @function displayFrame()
 * @returns {CCSpriteFrame}
*/
CCSprite.prototype.displayFrame = function() {return new CCSpriteFrame();};
/**
 * @function setBatchNode(pBatchNode)
 * @param {CCSpriteBatchNode} pBatchNode
*/
CCSprite.prototype.setBatchNode = function(pBatchNode) {};
/**
 * @function getBatchNode()
 * @returns {CCSpriteBatchNode}
*/
CCSprite.prototype.getBatchNode = function() {return new CCSpriteBatchNode();};
/**
 * @function setDisplayFrameWithAnimationName(animationName, frameIndex)
 * @param {String} animationName
 * @param {Number} frameIndex
*/
CCSprite.prototype.setDisplayFrameWithAnimationName = function(animationName, frameIndex) {};
/**
 * @function createWithTexture(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCTexture2D} - pTexture.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCTexture2D} - pTexture <b>and</b> args[1] is {CCRect} - rect.<br />
 * @returns {CCSprite}
*/
CCSprite.createWithTexture = function(args) {return new CCSprite();};
/**
 * @function createWithSpriteFrame(pSpriteFrame)
 * @static
 * @param {CCSpriteFrame} pSpriteFrame
 * @returns {CCSprite}
*/
CCSprite.createWithSpriteFrame = function(pSpriteFrame) {return new CCSprite();};
/**
 * @function createWithSpriteFrameName(pszSpriteFrameName)
 * @static
 * @param {String} pszSpriteFrameName
 * @returns {CCSprite}
*/
CCSprite.createWithSpriteFrameName = function(pszSpriteFrameName) {return new CCSprite();};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pszFileName.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pszFileName <b>and</b> args[1] is {CCRect} - rect.<br />
 * @returns {CCSprite}
*/
CCSprite.create = function(args) {return new CCSprite();};
/**
 * @super CCNode
 * @constructor 
*/
function CCSpriteBatchNode() {};
CCSpriteBatchNode.prototype = new CCNode();
/**
 * @function getTextureAtlas()
 * @returns {CCTextureAtlas}
*/
CCSpriteBatchNode.prototype.getTextureAtlas = function() {return new CCTextureAtlas();};
/**
 * @function setTextureAtlas(textureAtlas)
 * @param {CCTextureAtlas} textureAtlas
*/
CCSpriteBatchNode.prototype.setTextureAtlas = function(textureAtlas) {};
/**
 * @function getDescendants()
 * @returns {CCArray}
*/
CCSpriteBatchNode.prototype.getDescendants = function() {return new CCArray();};
/**
 * @function increaseAtlasCapacity()
*/
CCSpriteBatchNode.prototype.increaseAtlasCapacity = function() {};
/**
 * @function removeChildAtIndex(index, doCleanup)
 * @param {Number} index
 * @param {Boolean} doCleanup
*/
CCSpriteBatchNode.prototype.removeChildAtIndex = function(index, doCleanup) {};
/**
 * @function insertChild(child, index)
 * @param {CCSprite} child
 * @param {Number} index
*/
CCSpriteBatchNode.prototype.insertChild = function(child, index) {};
/**
 * @function appendChild(child)
 * @param {CCSprite} child
*/
CCSpriteBatchNode.prototype.appendChild = function(child) {};
/**
 * @function removeSpriteFromAtlas(sprite)
 * @param {CCSprite} sprite
*/
CCSpriteBatchNode.prototype.removeSpriteFromAtlas = function(sprite) {};
/**
 * @function rebuildIndexInOrder(parent, index)
 * @param {CCSprite} parent
 * @param {Number} index
 * @returns {Number}
*/
CCSpriteBatchNode.prototype.rebuildIndexInOrder = function(parent, index) {return 0;};
/**
 * @function highestAtlasIndexInChild(sprite)
 * @param {CCSprite} sprite
 * @returns {Number}
*/
CCSpriteBatchNode.prototype.highestAtlasIndexInChild = function(sprite) {return 0;};
/**
 * @function lowestAtlasIndexInChild(sprite)
 * @param {CCSprite} sprite
 * @returns {Number}
*/
CCSpriteBatchNode.prototype.lowestAtlasIndexInChild = function(sprite) {return 0;};
/**
 * @function atlasIndexForChild(sprite, z)
 * @param {CCSprite} sprite
 * @param {Number} z
 * @returns {Number}
*/
CCSpriteBatchNode.prototype.atlasIndexForChild = function(sprite, z) {return 0;};
/**
 * @function reorderBatch(reorder)
 * @param {Boolean} reorder
*/
CCSpriteBatchNode.prototype.reorderBatch = function(reorder) {};
/**
 * @function setTexture(texture)
 * @param {CCTexture2D} texture
*/
CCSpriteBatchNode.prototype.setTexture = function(texture) {};
/**
 * @function getTexture()
 * @returns {CCTexture2D}
*/
CCSpriteBatchNode.prototype.getTexture = function() {return new CCTexture2D();};
/**
 * @function setBlendFunc(blendFunc)
 * @param {ccBlendFunc} blendFunc
*/
CCSpriteBatchNode.prototype.setBlendFunc = function(blendFunc) {};
/**
 * @function getBlendFunc()
 * @returns {ccBlendFunc}
*/
CCSpriteBatchNode.prototype.getBlendFunc = function() {return new ccBlendFunc();};
/**
 * @function addChild(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - child.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - child <b>and</b> args[1] is {Number} - zOrder.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - child <b>and</b> args[1] is {Number} - zOrder <b>and</b> args[2] is {Number} - tag.<br />
*/
CCSpriteBatchNode.prototype.addChild = function(args) {};
/**
 * @function reorderChild(child, zOrder)
 * @param {CCNode} child
 * @param {Number} zOrder
*/
CCSpriteBatchNode.prototype.reorderChild = function(child, zOrder) {};
/**
 * @function removeChild(child, cleanup)
 * @param {CCNode} child
 * @param {Boolean} cleanup
*/
CCSpriteBatchNode.prototype.removeChild = function(child, cleanup) {};
/**
 * @function removeAllChildrenWithCleanup(cleanup)
 * @param {Boolean} cleanup
*/
CCSpriteBatchNode.prototype.removeAllChildrenWithCleanup = function(cleanup) {};
/**
 * @function sortAllChildren()
*/
CCSpriteBatchNode.prototype.sortAllChildren = function() {};
/**
 * @function createWithTexture(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCTexture2D} - tex.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCTexture2D} - tex <b>and</b> args[1] is {Number} - capacity.<br />
 * @returns {CCSpriteBatchNode}
*/
CCSpriteBatchNode.createWithTexture = function(args) {return new CCSpriteBatchNode();};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - fileImage.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - fileImage <b>and</b> args[1] is {Number} - capacity.<br />
 * @returns {CCSpriteBatchNode}
*/
CCSpriteBatchNode.create = function(args) {return new CCSpriteBatchNode();};
/**
 * @super CCObject
 * @constructor 
*/
function CCSpriteFrame() {};
CCSpriteFrame.prototype = new CCObject();
/**
 * @function getRectInPixels()
 * @returns {CCRect}
*/
CCSpriteFrame.prototype.getRectInPixels = function() {return new CCRect();};
/**
 * @function setRectInPixels(rectInPixels)
 * @param {CCRect} rectInPixels
*/
CCSpriteFrame.prototype.setRectInPixels = function(rectInPixels) {};
/**
 * @function isRotated()
 * @returns {Boolean}
*/
CCSpriteFrame.prototype.isRotated = function() {return true;};
/**
 * @function setRotated(bRotated)
 * @param {Boolean} bRotated
*/
CCSpriteFrame.prototype.setRotated = function(bRotated) {};
/**
 * @function getRect()
 * @returns {CCRect}
*/
CCSpriteFrame.prototype.getRect = function() {return new CCRect();};
/**
 * @function setRect(rect)
 * @param {CCRect} rect
*/
CCSpriteFrame.prototype.setRect = function(rect) {};
/**
 * @function getOffsetInPixels()
 * @returns {CCPoint}
*/
CCSpriteFrame.prototype.getOffsetInPixels = function() {return new CCPoint();};
/**
 * @function setOffsetInPixels(offsetInPixels)
 * @param {CCPoint} offsetInPixels
*/
CCSpriteFrame.prototype.setOffsetInPixels = function(offsetInPixels) {};
/**
 * @function getOriginalSizeInPixels()
 * @returns {CCSize}
*/
CCSpriteFrame.prototype.getOriginalSizeInPixels = function() {return new CCSize();};
/**
 * @function setOriginalSizeInPixels(sizeInPixels)
 * @param {CCSize} sizeInPixels
*/
CCSpriteFrame.prototype.setOriginalSizeInPixels = function(sizeInPixels) {};
/**
 * @function getOriginalSize()
 * @returns {CCSize}
*/
CCSpriteFrame.prototype.getOriginalSize = function() {return new CCSize();};
/**
 * @function setOriginalSize(size)
 * @param {CCSize} size
*/
CCSpriteFrame.prototype.setOriginalSize = function(size) {};
/**
 * @function getTexture()
 * @returns {CCTexture2D}
*/
CCSpriteFrame.prototype.getTexture = function() {return new CCTexture2D();};
/**
 * @function setTexture(pobTexture)
 * @param {CCTexture2D} pobTexture
*/
CCSpriteFrame.prototype.setTexture = function(pobTexture) {};
/**
 * @function getOffset()
 * @returns {CCPoint}
*/
CCSpriteFrame.prototype.getOffset = function() {return new CCPoint();};
/**
 * @function setOffset(offsets)
 * @param {CCPoint} offsets
*/
CCSpriteFrame.prototype.setOffset = function(offsets) {};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - filename <b>and</b> args[1] is {CCRect} - rect.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - filename <b>and</b> args[1] is {CCRect} - rect <b>and</b> args[2] is {Boolean} - rotated <b>and</b> args[3] is {CCPoint} - offset <b>and</b> args[4] is {CCSize} - originalSize.<br />
 * @returns {CCSpriteFrame}
*/
CCSpriteFrame.create = function(args) {return new CCSpriteFrame();};
/**
 * @function createWithTexture(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCTexture2D} - pobTexture <b>and</b> args[1] is {CCRect} - rect.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCTexture2D} - pobTexture <b>and</b> args[1] is {CCRect} - rect <b>and</b> args[2] is {Boolean} - rotated <b>and</b> args[3] is {CCPoint} - offset <b>and</b> args[4] is {CCSize} - originalSize.<br />
 * @returns {CCSpriteFrame}
*/
CCSpriteFrame.createWithTexture = function(args) {return new CCSpriteFrame();};
/**
 * @super CCObject
 * @constructor 
*/
function CCSpriteFrameCache() {};
CCSpriteFrameCache.prototype = new CCObject();
/**
 * @function addSpriteFramesWithFile(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pszPlist.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - plist <b>and</b> args[1] is {String} - textureFileName.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pszPlist <b>and</b> args[1] is {CCTexture2D} - pobTexture.<br />
*/
CCSpriteFrameCache.prototype.addSpriteFramesWithFile = function(args) {};
/**
 * @function addSpriteFrame(pobFrame, pszFrameName)
 * @param {CCSpriteFrame} pobFrame
 * @param {String} pszFrameName
*/
CCSpriteFrameCache.prototype.addSpriteFrame = function(pobFrame, pszFrameName) {};
/**
 * @function removeSpriteFrames()
*/
CCSpriteFrameCache.prototype.removeSpriteFrames = function() {};
/**
 * @function removeUnusedSpriteFrames()
*/
CCSpriteFrameCache.prototype.removeUnusedSpriteFrames = function() {};
/**
 * @function removeSpriteFrameByName(pszName)
 * @param {String} pszName
*/
CCSpriteFrameCache.prototype.removeSpriteFrameByName = function(pszName) {};
/**
 * @function removeSpriteFramesFromFile(plist)
 * @param {String} plist
*/
CCSpriteFrameCache.prototype.removeSpriteFramesFromFile = function(plist) {};
/**
 * @function removeSpriteFramesFromTexture(texture)
 * @param {CCTexture2D} texture
*/
CCSpriteFrameCache.prototype.removeSpriteFramesFromTexture = function(texture) {};
/**
 * @function spriteFrameByName(pszName)
 * @param {String} pszName
 * @returns {CCSpriteFrame}
*/
CCSpriteFrameCache.prototype.spriteFrameByName = function(pszName) {return new CCSpriteFrame();};
/**
 * @function sharedSpriteFrameCache()
 * @static
 * @returns {CCSpriteFrameCache}
*/
CCSpriteFrameCache.sharedSpriteFrameCache = function() {return new CCSpriteFrameCache();};
/**
 * @function purgeSharedSpriteFrameCache()
 * @static
*/
CCSpriteFrameCache.purgeSharedSpriteFrameCache = function() {};
/**
 * @super CCObject
 * @constructor 
*/
function CCString() {};
CCString.prototype = new CCObject();
/**
 * @function intValue()
 * @returns {Number}
*/
CCString.prototype.intValue = function() {return 0;};
/**
 * @function uintValue()
 * @returns {Number}
*/
CCString.prototype.uintValue = function() {return 0;};
/**
 * @function floatValue()
 * @returns {Number}
*/
CCString.prototype.floatValue = function() {return 0;};
/**
 * @function doubleValue()
 * @returns {Number}
*/
CCString.prototype.doubleValue = function() {return 0;};
/**
 * @function boolValue()
 * @returns {Boolean}
*/
CCString.prototype.boolValue = function() {return true;};
/**
 * @function getCString()
 * @returns {String}
*/
CCString.prototype.getCString = function() {return "";};
/**
 * @function length()
 * @returns {Number}
*/
CCString.prototype.length = function() {return 0;};
/**
 * @function compare(str)
 * @param {String} str
 * @returns {Number}
*/
CCString.prototype.compare = function(str) {return 0;};
/**
 * @function isEqual(pObject)
 * @param {CCObject} pObject
 * @returns {Boolean}
*/
CCString.prototype.isEqual = function(pObject) {return true;};
/**
 * @function create(pStr)
 * @static
 * @param {String} pStr
 * @returns {CCString}
*/
CCString.create = function(pStr) {return new CCString();};
/**
 * @function createWithData(pData, nLen)
 * @static
 * @param {String} pData
 * @param {Number} nLen
 * @returns {CCString}
*/
CCString.createWithData = function(pData, nLen) {return new CCString();};
/**
 * @function createWithContentsOfFile(pszFileName)
 * @static
 * @param {String} pszFileName
 * @returns {CCString}
*/
CCString.createWithContentsOfFile = function(pszFileName) {return new CCString();};
/**
 * @super CCLabelTTF
 * @constructor 
*/
function CCTextFieldTTF() {};
CCTextFieldTTF.prototype = new CCLabelTTF();
/**
 * @function attachWithIME()
 * @returns {Boolean}
*/
CCTextFieldTTF.prototype.attachWithIME = function() {return true;};
/**
 * @function detachWithIME()
 * @returns {Boolean}
*/
CCTextFieldTTF.prototype.detachWithIME = function() {return true;};
/**
 * @function getCharCount()
 * @returns {Number}
*/
CCTextFieldTTF.prototype.getCharCount = function() {return 0;};
/**
 * @function setColorSpaceHolder(val)
 * @param {ccColor3B} val
*/
CCTextFieldTTF.prototype.setColorSpaceHolder = function(val) {};
/**
 * @function getColorSpaceHolder()
 * @returns {ccColor3B}
*/
CCTextFieldTTF.prototype.getColorSpaceHolder = function() {return new ccColor3B();};
/**
 * @function setString(text)
 * @param {String} text
*/
CCTextFieldTTF.prototype.setString = function(text) {};
/**
 * @function getString()
 * @returns {String}
*/
CCTextFieldTTF.prototype.getString = function() {return "";};
/**
 * @function setPlaceHolder(text)
 * @param {String} text
*/
CCTextFieldTTF.prototype.setPlaceHolder = function(text) {};
/**
 * @function getPlaceHolder()
 * @returns {String}
*/
CCTextFieldTTF.prototype.getPlaceHolder = function() {return "";};
/**
 * @function textFieldWithPlaceHolder(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - placeholder <b>and</b> args[1] is {CCSize} - dimensions <b>and</b> args[2] is {CCTextAlignment} - alignment <b>and</b> args[3] is {String} - fontName <b>and</b> args[4] is {Number} - fontSize.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - placeholder <b>and</b> args[1] is {String} - fontName <b>and</b> args[2] is {Number} - fontSize.<br />
 * @returns {CCTextFieldTTF}
*/
CCTextFieldTTF.textFieldWithPlaceHolder = function(args) {return new CCTextFieldTTF();};
/**
 * @super Object
 * @constructor 
*/
function ccTexParams() {};
ccTexParams.prototype = {};
/**
 * Property minFilter
 * @type Number
*/
ccTexParams.prototype.minFilter = 0;
/**
 * Property magFilter
 * @type Number
*/
ccTexParams.prototype.magFilter = 0;
/**
 * Property wrapS
 * @type Number
*/
ccTexParams.prototype.wrapS = 0;
/**
 * Property wrapT
 * @type Number
*/
ccTexParams.prototype.wrapT = 0;
/**
 * @super CCObject
 * @constructor 
*/
function CCTexture2D() {};
CCTexture2D.prototype = new CCObject();
/**
 * @function getPixelFormat()
 * @returns {CCTexture2DPixelFormat}
*/
CCTexture2D.prototype.getPixelFormat = function() {return new CCTexture2DPixelFormat();};
/**
 * @function getPixelsWide()
 * @returns {Number}
*/
CCTexture2D.prototype.getPixelsWide = function() {return 0;};
/**
 * @function getPixelsHigh()
 * @returns {Number}
*/
CCTexture2D.prototype.getPixelsHigh = function() {return 0;};
/**
 * @function getName()
 * @returns {Number}
*/
CCTexture2D.prototype.getName = function() {return 0;};
/**
 * @function getContentSizeInPixels()
 * @returns {CCSize}
*/
CCTexture2D.prototype.getContentSizeInPixels = function() {return new CCSize();};
/**
 * @function setMaxS(val)
 * @param {Number} val
*/
CCTexture2D.prototype.setMaxS = function(val) {};
/**
 * @function getMaxS()
 * @returns {Number}
*/
CCTexture2D.prototype.getMaxS = function() {return 0;};
/**
 * @function getMaxT()
 * @returns {Number}
*/
CCTexture2D.prototype.getMaxT = function() {return 0;};
/**
 * @function setMaxT(val)
 * @param {Number} val
*/
CCTexture2D.prototype.setMaxT = function(val) {};
/**
 * @function hasPremultipliedAlpha()
 * @returns {Boolean}
*/
CCTexture2D.prototype.hasPremultipliedAlpha = function() {return true;};
/**
 * @function hasMipmaps()
 * @returns {Boolean}
*/
CCTexture2D.prototype.hasMipmaps = function() {return true;};
/**
 * @function drawAtPoint(point)
 * @param {CCPoint} point
*/
CCTexture2D.prototype.drawAtPoint = function(point) {};
/**
 * @function drawInRect(rect)
 * @param {CCRect} rect
*/
CCTexture2D.prototype.drawInRect = function(rect) {};
/**
 * @function getContentSize()
 * @returns {CCSize}
*/
CCTexture2D.prototype.getContentSize = function() {return new CCSize();};
/**
 * @function setTexParameters(texParams)
 * @param {ccTexParams} texParams
*/
CCTexture2D.prototype.setTexParameters = function(texParams) {};
/**
 * @function setAntiAliasTexParameters()
*/
CCTexture2D.prototype.setAntiAliasTexParameters = function() {};
/**
 * @function setAliasTexParameters()
*/
CCTexture2D.prototype.setAliasTexParameters = function() {};
/**
 * @function generateMipmap()
*/
CCTexture2D.prototype.generateMipmap = function() {};
/**
 * @function stringForFormat()
 * @returns {String}
*/
CCTexture2D.prototype.stringForFormat = function() {return "";};
/**
 * @function bitsPerPixelForFormat(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCTexture2DPixelFormat} - format.<br />
 * @returns {Number}
*/
CCTexture2D.prototype.bitsPerPixelForFormat = function(args) {return 0;};
/**
 * @function setDefaultAlphaPixelFormat(format)
 * @static
 * @param {CCTexture2DPixelFormat} format
*/
CCTexture2D.setDefaultAlphaPixelFormat = function(format) {};
/**
 * @function defaultAlphaPixelFormat()
 * @static
 * @returns {CCTexture2DPixelFormat}
*/
CCTexture2D.defaultAlphaPixelFormat = function() {return new CCTexture2DPixelFormat();};
cocos2d.kCCTexture2DPixelFormat_RGBA8888 = 0;
cocos2d.kCCTexture2DPixelFormat_RGB888 = 1;
cocos2d.kCCTexture2DPixelFormat_RGB565 = 2;
cocos2d.kCCTexture2DPixelFormat_A8 = 3;
cocos2d.kCCTexture2DPixelFormat_I8 = 4;
cocos2d.kCCTexture2DPixelFormat_AI88 = 5;
cocos2d.kCCTexture2DPixelFormat_RGBA4444 = 6;
cocos2d.kCCTexture2DPixelFormat_RGB5A1 = 7;
cocos2d.kCCTexture2DPixelFormat_PVRTC4 = 8;
cocos2d.kCCTexture2DPixelFormat_PVRTC2 = 9;
cocos2d.kCCTexture2DPixelFormat_Default = 1;
cocos2d.kTexture2DPixelFormat_RGBA8888 = 0;
cocos2d.kTexture2DPixelFormat_RGB888 = 1;
cocos2d.kTexture2DPixelFormat_RGB565 = 2;
cocos2d.kTexture2DPixelFormat_A8 = 3;
cocos2d.kTexture2DPixelFormat_RGBA4444 = 6;
cocos2d.kTexture2DPixelFormat_RGB5A1 = 7;
cocos2d.kTexture2DPixelFormat_Default = 1;
/**
 * @super CCObject
 * @constructor 
*/
function CCTextureAtlas() {};
CCTextureAtlas.prototype = new CCObject();
/**
 * @function getTotalQuads()
 * @returns {Number}
*/
CCTextureAtlas.prototype.getTotalQuads = function() {return 0;};
/**
 * @function getCapacity()
 * @returns {Number}
*/
CCTextureAtlas.prototype.getCapacity = function() {return 0;};
/**
 * @function setTexture(val)
 * @param {CCTexture2D} val
*/
CCTextureAtlas.prototype.setTexture = function(val) {};
/**
 * @function getTexture()
 * @returns {CCTexture2D}
*/
CCTextureAtlas.prototype.getTexture = function() {return new CCTexture2D();};
/**
 * @function setQuads(val)
 * @param {ccV3F_C4B_T2F_Quad} val
*/
CCTextureAtlas.prototype.setQuads = function(val) {};
/**
 * @function getQuads()
 * @returns {ccV3F_C4B_T2F_Quad}
*/
CCTextureAtlas.prototype.getQuads = function() {return new ccV3F_C4B_T2F_Quad();};
/**
 * @function updateQuad(quad, index)
 * @param {ccV3F_C4B_T2F_Quad} quad
 * @param {Number} index
*/
CCTextureAtlas.prototype.updateQuad = function(quad, index) {};
/**
 * @function insertQuad(quad, index)
 * @param {ccV3F_C4B_T2F_Quad} quad
 * @param {Number} index
*/
CCTextureAtlas.prototype.insertQuad = function(quad, index) {};
/**
 * @function insertQuadFromIndex(fromIndex, newIndex)
 * @param {Number} fromIndex
 * @param {Number} newIndex
*/
CCTextureAtlas.prototype.insertQuadFromIndex = function(fromIndex, newIndex) {};
/**
 * @function removeQuadAtIndex(index)
 * @param {Number} index
*/
CCTextureAtlas.prototype.removeQuadAtIndex = function(index) {};
/**
 * @function removeAllQuads()
*/
CCTextureAtlas.prototype.removeAllQuads = function() {};
/**
 * @function resizeCapacity(n)
 * @param {Number} n
 * @returns {Boolean}
*/
CCTextureAtlas.prototype.resizeCapacity = function(n) {return true;};
/**
 * @function drawNumberOfQuads(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - n.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - n <b>and</b> args[1] is {Number} - start.<br />
*/
CCTextureAtlas.prototype.drawNumberOfQuads = function(args) {};
/**
 * @function increaseTotalQuadsWith(amount)
 * @param {Number} amount
*/
CCTextureAtlas.prototype.increaseTotalQuadsWith = function(amount) {};
/**
 * @function moveQuadsFromIndex(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - oldIndex <b>and</b> args[1] is {Number} - amount <b>and</b> args[2] is {Number} - newIndex.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - index <b>and</b> args[1] is {Number} - newIndex.<br />
*/
CCTextureAtlas.prototype.moveQuadsFromIndex = function(args) {};
/**
 * @function fillWithEmptyQuadsFromIndex(index, amount)
 * @param {Number} index
 * @param {Number} amount
*/
CCTextureAtlas.prototype.fillWithEmptyQuadsFromIndex = function(index, amount) {};
/**
 * @function drawQuads()
*/
CCTextureAtlas.prototype.drawQuads = function() {};
/**
 * @function create(file, capacity)
 * @static
 * @param {String} file
 * @param {Number} capacity
 * @returns {CCTextureAtlas}
*/
CCTextureAtlas.create = function(file, capacity) {return new CCTextureAtlas();};
/**
 * @function createWithTexture(texture, capacity)
 * @static
 * @param {CCTexture2D} texture
 * @param {Number} capacity
 * @returns {CCTextureAtlas}
*/
CCTextureAtlas.createWithTexture = function(texture, capacity) {return new CCTextureAtlas();};
/**
 * @super CCObject
 * @constructor 
*/
function CCTextureCache() {};
CCTextureCache.prototype = new CCObject();
/**
 * @function addImage(fileimage)
 * @param {String} fileimage
 * @returns {CCTexture2D}
*/
CCTextureCache.prototype.addImage = function(fileimage) {return new CCTexture2D();};
/**
 * @function addUIImage(image, key)
 * @param {CCImage} image
 * @param {String} key
 * @returns {CCTexture2D}
*/
CCTextureCache.prototype.addUIImage = function(image, key) {return new CCTexture2D();};
/**
 * @function textureForKey(key)
 * @param {String} key
 * @returns {CCTexture2D}
*/
CCTextureCache.prototype.textureForKey = function(key) {return new CCTexture2D();};
/**
 * @function addPVRImage(filename)
 * @param {String} filename
 * @returns {CCTexture2D}
*/
CCTextureCache.prototype.addPVRImage = function(filename) {return new CCTexture2D();};
/**
 * @function removeAllTextures()
*/
CCTextureCache.prototype.removeAllTextures = function() {};
/**
 * @function removeUnusedTextures()
*/
CCTextureCache.prototype.removeUnusedTextures = function() {};
/**
 * @function removeTexture(texture)
 * @param {CCTexture2D} texture
*/
CCTextureCache.prototype.removeTexture = function(texture) {};
/**
 * @function removeTextureForKey(textureKeyName)
 * @param {String} textureKeyName
*/
CCTextureCache.prototype.removeTextureForKey = function(textureKeyName) {};
/**
 * @function dumpCachedTextureInfo()
*/
CCTextureCache.prototype.dumpCachedTextureInfo = function() {};
/**
 * @function sharedTextureCache()
 * @static
 * @returns {CCTextureCache}
*/
CCTextureCache.sharedTextureCache = function() {return new CCTextureCache();};
/**
 * @function reloadAllTextures()
 * @static
*/
CCTextureCache.reloadAllTextures = function() {};
/**
 * @function purgeSharedTextureCache()
 * @static
*/
CCTextureCache.purgeSharedTextureCache = function() {};
/**
 * @super CCAtlasNode
 * @constructor 
*/
function CCTileMapAtlas() {};
CCTileMapAtlas.prototype = new CCAtlasNode();
/**
 * @function setTile(tile, position)
 * @param {ccColor3B} tile
 * @param {ccGridSize} position
*/
CCTileMapAtlas.prototype.setTile = function(tile, position) {};
/**
 * @function releaseMap()
*/
CCTileMapAtlas.prototype.releaseMap = function() {};
/**
 * @function tileAt(pos)
 * @param {ccGridSize} pos
 * @returns {ccColor3B}
*/
CCTileMapAtlas.prototype.tileAt = function(pos) {return new ccColor3B();};
/**
 * @function create(tile, mapFile, tileWidth, tileHeight)
 * @static
 * @param {String} tile
 * @param {String} mapFile
 * @param {Number} tileWidth
 * @param {Number} tileHeight
 * @returns {CCTileMapAtlas}
*/
CCTileMapAtlas.create = function(tile, mapFile, tileWidth, tileHeight) {return new CCTileMapAtlas();};
/**
 * @super CCSpriteBatchNode
 * @constructor 
*/
function CCTMXLayer() {};
CCTMXLayer.prototype = new CCSpriteBatchNode();
/**
 * @function setLayerSize(val)
 * @param {CCSize} val
*/
CCTMXLayer.prototype.setLayerSize = function(val) {};
/**
 * @function getLayerSize()
 * @returns {CCSize}
*/
CCTMXLayer.prototype.getLayerSize = function() {return new CCSize();};
/**
 * @function setMapTileSize(val)
 * @param {CCSize} val
*/
CCTMXLayer.prototype.setMapTileSize = function(val) {};
/**
 * @function getMapTileSize()
 * @returns {CCSize}
*/
CCTMXLayer.prototype.getMapTileSize = function() {return new CCSize();};
/**
 * @function setTileSet(pval)
 * @param {CCTMXTilesetInfo} pval
*/
CCTMXLayer.prototype.setTileSet = function(pval) {};
/**
 * @function getTileSet()
 * @returns {CCTMXTilesetInfo}
*/
CCTMXLayer.prototype.getTileSet = function() {return new CCTMXTilesetInfo();};
/**
 * @function setLayerOrientation(val)
 * @param {Number} val
*/
CCTMXLayer.prototype.setLayerOrientation = function(val) {};
/**
 * @function getLayerOrientation()
 * @returns {Number}
*/
CCTMXLayer.prototype.getLayerOrientation = function() {return 0;};
/**
 * @function setProperties(pval)
 * @param {CCDictionary} pval
*/
CCTMXLayer.prototype.setProperties = function(pval) {};
/**
 * @function getProperties()
 * @returns {CCDictionary}
*/
CCTMXLayer.prototype.getProperties = function() {return new CCDictionary();};
/**
 * @function releaseMap()
*/
CCTMXLayer.prototype.releaseMap = function() {};
/**
 * @function tileAt(tileCoordinate)
 * @param {CCPoint} tileCoordinate
 * @returns {CCSprite}
*/
CCTMXLayer.prototype.tileAt = function(tileCoordinate) {return new CCSprite();};
/**
 * @function tileGIDAt(tileCoordinate)
 * @param {CCPoint} tileCoordinate
 * @returns {Number}
*/
CCTMXLayer.prototype.tileGIDAt = function(tileCoordinate) {return 0;};
/**
 * @function setTileGID(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - gid <b>and</b> args[1] is {CCPoint} - tileCoordinate.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - gid <b>and</b> args[1] is {CCPoint} - tileCoordinate <b>and</b> args[2] is {ccTMXTileFlags} - flags.<br />
*/
CCTMXLayer.prototype.setTileGID = function(args) {};
/**
 * @function removeTileAt(tileCoordinate)
 * @param {CCPoint} tileCoordinate
*/
CCTMXLayer.prototype.removeTileAt = function(tileCoordinate) {};
/**
 * @function positionAt(tileCoordinate)
 * @param {CCPoint} tileCoordinate
 * @returns {CCPoint}
*/
CCTMXLayer.prototype.positionAt = function(tileCoordinate) {return new CCPoint();};
/**
 * @function propertyNamed(propertyName)
 * @param {String} propertyName
 * @returns {CCString}
*/
CCTMXLayer.prototype.propertyNamed = function(propertyName) {return new CCString();};
/**
 * @function setupTiles()
*/
CCTMXLayer.prototype.setupTiles = function() {};
/**
 * @function setLayerName(layerName)
 * @param {String} layerName
*/
CCTMXLayer.prototype.setLayerName = function(layerName) {};
/**
 * @function getLayerName()
 * @returns {String}
*/
CCTMXLayer.prototype.getLayerName = function() {return "";};
/**
 * @function create(tilesetInfo, layerInfo, mapInfo)
 * @static
 * @param {CCTMXTilesetInfo} tilesetInfo
 * @param {CCTMXLayerInfo} layerInfo
 * @param {CCTMXMapInfo} mapInfo
 * @returns {CCTMXLayer}
*/
CCTMXLayer.create = function(tilesetInfo, layerInfo, mapInfo) {return new CCTMXLayer();};
/**
 * @super CCObject
 * @constructor 
*/
function CCTMXObjectGroup() {};
CCTMXObjectGroup.prototype = new CCObject();
/**
 * @function setPositionOffset(pt)
 * @param {CCPoint} pt
*/
CCTMXObjectGroup.prototype.setPositionOffset = function(pt) {};
/**
 * @function getPositionOffset()
 * @returns {CCPoint}
*/
CCTMXObjectGroup.prototype.getPositionOffset = function() {return new CCPoint();};
/**
 * @function setProperties(pval)
 * @param {CCDictionary} pval
*/
CCTMXObjectGroup.prototype.setProperties = function(pval) {};
/**
 * @function getProperties()
 * @returns {CCDictionary}
*/
CCTMXObjectGroup.prototype.getProperties = function() {return new CCDictionary();};
/**
 * @function setObjects(val)
 * @param {CCArray} val
*/
CCTMXObjectGroup.prototype.setObjects = function(val) {};
/**
 * @function getObjects()
 * @returns {CCArray}
*/
CCTMXObjectGroup.prototype.getObjects = function() {return new CCArray();};
/**
 * @function setGroupName(groupName)
 * @param {String} groupName
*/
CCTMXObjectGroup.prototype.setGroupName = function(groupName) {};
/**
 * @function getGroupName()
 * @returns {String}
*/
CCTMXObjectGroup.prototype.getGroupName = function() {return "";};
/**
 * @function propertyNamed(propertyName)
 * @param {String} propertyName
 * @returns {CCString}
*/
CCTMXObjectGroup.prototype.propertyNamed = function(propertyName) {return new CCString();};
/**
 * @function objectNamed(objectName)
 * @param {String} objectName
 * @returns {CCDictionary}
*/
CCTMXObjectGroup.prototype.objectNamed = function(objectName) {return new CCDictionary();};
/**
 * @super CCNode
 * @constructor 
*/
function CCTMXTiledMap() {};
CCTMXTiledMap.prototype = new CCNode();
/**
 * @function setMapSize(sz)
 * @param {CCSize} sz
*/
CCTMXTiledMap.prototype.setMapSize = function(sz) {};
/**
 * @function getMapSize()
 * @returns {CCSize}
*/
CCTMXTiledMap.prototype.getMapSize = function() {return new CCSize();};
/**
 * @function setTileSize(sz)
 * @param {CCSize} sz
*/
CCTMXTiledMap.prototype.setTileSize = function(sz) {};
/**
 * @function getTileSize()
 * @returns {CCSize}
*/
CCTMXTiledMap.prototype.getTileSize = function() {return new CCSize();};
/**
 * @function setMapOrientation(val)
 * @param {Number} val
*/
CCTMXTiledMap.prototype.setMapOrientation = function(val) {};
/**
 * @function getMapOrientation()
 * @returns {Number}
*/
CCTMXTiledMap.prototype.getMapOrientation = function() {return 0;};
/**
 * @function setObjectGroups(pval)
 * @param {CCArray} pval
*/
CCTMXTiledMap.prototype.setObjectGroups = function(pval) {};
/**
 * @function getObjectGroups()
 * @returns {CCArray}
*/
CCTMXTiledMap.prototype.getObjectGroups = function() {return new CCArray();};
/**
 * @function setProperties(pval)
 * @param {CCDictionary} pval
*/
CCTMXTiledMap.prototype.setProperties = function(pval) {};
/**
 * @function getProperties()
 * @returns {CCDictionary}
*/
CCTMXTiledMap.prototype.getProperties = function() {return new CCDictionary();};
/**
 * @function layerNamed(layerName)
 * @param {String} layerName
 * @returns {CCTMXLayer}
*/
CCTMXTiledMap.prototype.layerNamed = function(layerName) {return new CCTMXLayer();};
/**
 * @function objectGroupNamed(groupName)
 * @param {String} groupName
 * @returns {CCTMXObjectGroup}
*/
CCTMXTiledMap.prototype.objectGroupNamed = function(groupName) {return new CCTMXObjectGroup();};
/**
 * @function propertyNamed(propertyName)
 * @param {String} propertyName
 * @returns {CCString}
*/
CCTMXTiledMap.prototype.propertyNamed = function(propertyName) {return new CCString();};
/**
 * @function propertiesForGID(GID)
 * @param {Number} GID
 * @returns {CCDictionary}
*/
CCTMXTiledMap.prototype.propertiesForGID = function(GID) {return new CCDictionary();};
/**
 * @function create(tmxFile)
 * @static
 * @param {String} tmxFile
 * @returns {CCTMXTiledMap}
*/
CCTMXTiledMap.create = function(tmxFile) {return new CCTMXTiledMap();};
/**
 * @function createWithXML(tmxString, resourcePath)
 * @static
 * @param {String} tmxString
 * @param {String} resourcePath
 * @returns {CCTMXTiledMap}
*/
CCTMXTiledMap.createWithXML = function(tmxString, resourcePath) {return new CCTMXTiledMap();};
cocos2d.CCTMXOrientationOrtho = 0;
cocos2d.CCTMXOrientationHex = 1;
cocos2d.CCTMXOrientationIso = 2;
/**
 * @super CCObject
 * @constructor 
*/
function CCTMXLayerInfo() {};
CCTMXLayerInfo.prototype = new CCObject();
/**
 * @function getProperties()
 * @returns {CCDictionary}
*/
CCTMXLayerInfo.prototype.getProperties = function() {return new CCDictionary();};
/**
 * @function setProperties(pval)
 * @param {CCDictionary} pval
*/
CCTMXLayerInfo.prototype.setProperties = function(pval) {};
/**
 * @super CCObject
 * @constructor 
*/
function CCTMXTilesetInfo() {};
CCTMXTilesetInfo.prototype = new CCObject();
/**
 * @function rectForGID(gid)
 * @param {Number} gid
 * @returns {CCRect}
*/
CCTMXTilesetInfo.prototype.rectForGID = function(gid) {return new CCRect();};
/**
 * @super CCObject
 * @constructor 
*/
function CCTMXMapInfo() {};
CCTMXMapInfo.prototype = new CCObject();
/**
 * @function setOrientation(val)
 * @param {Number} val
*/
CCTMXMapInfo.prototype.setOrientation = function(val) {};
/**
 * @function getOrientation()
 * @returns {Number}
*/
CCTMXMapInfo.prototype.getOrientation = function() {return 0;};
/**
 * @function setMapSize(sz)
 * @param {CCSize} sz
*/
CCTMXMapInfo.prototype.setMapSize = function(sz) {};
/**
 * @function getMapSize()
 * @returns {CCSize}
*/
CCTMXMapInfo.prototype.getMapSize = function() {return new CCSize();};
/**
 * @function setTileSize(sz)
 * @param {CCSize} sz
*/
CCTMXMapInfo.prototype.setTileSize = function(sz) {};
/**
 * @function getTileSize()
 * @returns {CCSize}
*/
CCTMXMapInfo.prototype.getTileSize = function() {return new CCSize();};
/**
 * @function setLayers(pval)
 * @param {CCArray} pval
*/
CCTMXMapInfo.prototype.setLayers = function(pval) {};
/**
 * @function getLayers()
 * @returns {CCArray}
*/
CCTMXMapInfo.prototype.getLayers = function() {return new CCArray();};
/**
 * @function setTilesets(pval)
 * @param {CCArray} pval
*/
CCTMXMapInfo.prototype.setTilesets = function(pval) {};
/**
 * @function getTilesets()
 * @returns {CCArray}
*/
CCTMXMapInfo.prototype.getTilesets = function() {return new CCArray();};
/**
 * @function setObjectGroups(val)
 * @param {CCArray} val
*/
CCTMXMapInfo.prototype.setObjectGroups = function(val) {};
/**
 * @function getObjectGroups()
 * @returns {CCArray}
*/
CCTMXMapInfo.prototype.getObjectGroups = function() {return new CCArray();};
/**
 * @function setParentElement(val)
 * @param {Number} val
*/
CCTMXMapInfo.prototype.setParentElement = function(val) {};
/**
 * @function getParentElement()
 * @returns {Number}
*/
CCTMXMapInfo.prototype.getParentElement = function() {return 0;};
/**
 * @function setParentGID(val)
 * @param {Number} val
*/
CCTMXMapInfo.prototype.setParentGID = function(val) {};
/**
 * @function getParentGID()
 * @returns {Number}
*/
CCTMXMapInfo.prototype.getParentGID = function() {return 0;};
/**
 * @function setLayerAttribs(val)
 * @param {Number} val
*/
CCTMXMapInfo.prototype.setLayerAttribs = function(val) {};
/**
 * @function getLayerAttribs()
 * @returns {Number}
*/
CCTMXMapInfo.prototype.getLayerAttribs = function() {return 0;};
/**
 * @function setStoringCharacters(val)
 * @param {Boolean} val
*/
CCTMXMapInfo.prototype.setStoringCharacters = function(val) {};
/**
 * @function getStoringCharacters()
 * @returns {Boolean}
*/
CCTMXMapInfo.prototype.getStoringCharacters = function() {return true;};
/**
 * @function setProperties(pval)
 * @param {CCDictionary} pval
*/
CCTMXMapInfo.prototype.setProperties = function(pval) {};
/**
 * @function getProperties()
 * @returns {CCDictionary}
*/
CCTMXMapInfo.prototype.getProperties = function() {return new CCDictionary();};
/**
 * @function setTileProperties(tileProperties)
 * @param {CCDictionary} tileProperties
*/
CCTMXMapInfo.prototype.setTileProperties = function(tileProperties) {};
/**
 * @function getTileProperties()
 * @returns {CCDictionary}
*/
CCTMXMapInfo.prototype.getTileProperties = function() {return new CCDictionary();};
/**
 * @function setCurrentString(currentString)
 * @param {String} currentString
*/
CCTMXMapInfo.prototype.setCurrentString = function(currentString) {};
/**
 * @function getCurrentString()
 * @returns {String}
*/
CCTMXMapInfo.prototype.getCurrentString = function() {return "";};
/**
 * @function setTMXFileName(fileName)
 * @param {String} fileName
*/
CCTMXMapInfo.prototype.setTMXFileName = function(fileName) {};
/**
 * @function getTMXFileName()
 * @returns {String}
*/
CCTMXMapInfo.prototype.getTMXFileName = function() {return "";};
/**
 * @function parseXMLFile(xmlFilename)
 * @param {String} xmlFilename
 * @returns {Boolean}
*/
CCTMXMapInfo.prototype.parseXMLFile = function(xmlFilename) {return true;};
/**
 * @function parseXMLString(xmlString)
 * @param {String} xmlString
 * @returns {Boolean}
*/
CCTMXMapInfo.prototype.parseXMLString = function(xmlString) {return true;};
/**
 * @function formatWithTMXFile(tmxFile)
 * @static
 * @param {String} tmxFile
 * @returns {CCTMXMapInfo}
*/
CCTMXMapInfo.formatWithTMXFile = function(tmxFile) {return new CCTMXMapInfo();};
/**
 * @function formatWithXML(tmxString, resourcePath)
 * @static
 * @param {String} tmxString
 * @param {String} resourcePath
 * @returns {CCTMXMapInfo}
*/
CCTMXMapInfo.formatWithXML = function(tmxString, resourcePath) {return new CCTMXMapInfo();};
cocos2d.TMXLayerAttribNone = 1;
cocos2d.TMXLayerAttribBase64 = 2;
cocos2d.TMXLayerAttribGzip = 4;
cocos2d.TMXLayerAttribZlib = 8;
cocos2d.TMXPropertyNone = 0;
cocos2d.TMXPropertyMap = 1;
cocos2d.TMXPropertyLayer = 2;
cocos2d.TMXPropertyObjectGroup = 3;
cocos2d.TMXPropertyObject = 4;
cocos2d.TMXPropertyTile = 5;
cocos2d.kCCTMXTileHorizontalFlag = 0;
cocos2d.kCCTMXTileVerticalFlag = 0;
cocos2d.kCCTMXTileDiagonalFlag = 0;
cocos2d.kCCFlipedAll = 0;
cocos2d.kCCFlippedMask = 0;
/**
 * @super CCObject
 * @constructor 
*/
function CCTouch() {};
CCTouch.prototype = new CCObject();
/**
 * @function getLocation()
 * @returns {CCPoint}
*/
CCTouch.prototype.getLocation = function() {return new CCPoint();};
/**
 * @function getPreviousLocation()
 * @returns {CCPoint}
*/
CCTouch.prototype.getPreviousLocation = function() {return new CCPoint();};
/**
 * @function getDelta()
 * @returns {CCPoint}
*/
CCTouch.prototype.getDelta = function() {return new CCPoint();};
/**
 * @function getLocationInView()
 * @returns {CCPoint}
*/
CCTouch.prototype.getLocationInView = function() {return new CCPoint();};
/**
 * @function getPreviousLocationInView()
 * @returns {CCPoint}
*/
CCTouch.prototype.getPreviousLocationInView = function() {return new CCPoint();};
/**
 * @function setTouchInfo(id, x, y)
 * @param {Number} id
 * @param {Number} x
 * @param {Number} y
*/
CCTouch.prototype.setTouchInfo = function(id, x, y) {};
/**
 * @function getID()
 * @returns {Number}
*/
CCTouch.prototype.getID = function() {return 0;};
/**
 * @super CCObject
 * @constructor 
*/
function CCEvent() {};
CCEvent.prototype = new CCObject();
cocos2d.CCTOUCHBEGAN = 0;
cocos2d.CCTOUCHMOVED = 1;
cocos2d.CCTOUCHENDED = 2;
cocos2d.CCTOUCHCANCELLED = 3;
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionScene() {};
CCTransitionScene.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionScene}
*/
CCTransitionScene.create = function(t, scene) {return new CCTransitionScene();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionSceneOriented() {};
CCTransitionSceneOriented.prototype = new CCScene();
/**
 * @function create(t, scene, o)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @param {tOrientation} o
 * @returns {CCTransitionSceneOriented}
*/
CCTransitionSceneOriented.create = function(t, scene, o) {return new CCTransitionSceneOriented();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionRotoZoom() {};
CCTransitionRotoZoom.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionRotoZoom}
*/
CCTransitionRotoZoom.create = function(t, scene) {return new CCTransitionRotoZoom();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionJumpZoom() {};
CCTransitionJumpZoom.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionJumpZoom}
*/
CCTransitionJumpZoom.create = function(t, scene) {return new CCTransitionJumpZoom();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionMoveInL() {};
CCTransitionMoveInL.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionMoveInL}
*/
CCTransitionMoveInL.create = function(t, scene) {return new CCTransitionMoveInL();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionMoveInR() {};
CCTransitionMoveInR.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionMoveInR}
*/
CCTransitionMoveInR.create = function(t, scene) {return new CCTransitionMoveInR();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionMoveInT() {};
CCTransitionMoveInT.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionMoveInT}
*/
CCTransitionMoveInT.create = function(t, scene) {return new CCTransitionMoveInT();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionMoveInB() {};
CCTransitionMoveInB.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionMoveInB}
*/
CCTransitionMoveInB.create = function(t, scene) {return new CCTransitionMoveInB();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionSlideInL() {};
CCTransitionSlideInL.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionSlideInL}
*/
CCTransitionSlideInL.create = function(t, scene) {return new CCTransitionSlideInL();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionSlideInR() {};
CCTransitionSlideInR.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionSlideInR}
*/
CCTransitionSlideInR.create = function(t, scene) {return new CCTransitionSlideInR();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionSlideInB() {};
CCTransitionSlideInB.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionSlideInB}
*/
CCTransitionSlideInB.create = function(t, scene) {return new CCTransitionSlideInB();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionSlideInT() {};
CCTransitionSlideInT.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionSlideInT}
*/
CCTransitionSlideInT.create = function(t, scene) {return new CCTransitionSlideInT();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionShrinkGrow() {};
CCTransitionShrinkGrow.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionShrinkGrow}
*/
CCTransitionShrinkGrow.create = function(t, scene) {return new CCTransitionShrinkGrow();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionFlipX() {};
CCTransitionFlipX.prototype = new CCScene();
/**
 * @function create(t, s, o)
 * @static
 * @param {Number} t
 * @param {CCScene} s
 * @param {tOrientation} o default is <b>kOrientationRightOver</b>
 * @returns {CCTransitionFlipX}
*/
CCTransitionFlipX.create = function(t, s, o) {return new CCTransitionFlipX();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionFlipY() {};
CCTransitionFlipY.prototype = new CCScene();
/**
 * @function create(t, s, o)
 * @static
 * @param {Number} t
 * @param {CCScene} s
 * @param {tOrientation} o default is <b>kOrientationUpOver</b>
 * @returns {CCTransitionFlipY}
*/
CCTransitionFlipY.create = function(t, s, o) {return new CCTransitionFlipY();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionFlipAngular() {};
CCTransitionFlipAngular.prototype = new CCScene();
/**
 * @function create(t, s, o)
 * @static
 * @param {Number} t
 * @param {CCScene} s
 * @param {tOrientation} o default is <b>kOrientationRightOver</b>
 * @returns {CCTransitionFlipAngular}
*/
CCTransitionFlipAngular.create = function(t, s, o) {return new CCTransitionFlipAngular();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionZoomFlipX() {};
CCTransitionZoomFlipX.prototype = new CCScene();
/**
 * @function create(t, s, o)
 * @static
 * @param {Number} t
 * @param {CCScene} s
 * @param {tOrientation} o default is <b>kOrientationRightOver</b>
 * @returns {CCTransitionZoomFlipX}
*/
CCTransitionZoomFlipX.create = function(t, s, o) {return new CCTransitionZoomFlipX();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionZoomFlipY() {};
CCTransitionZoomFlipY.prototype = new CCScene();
/**
 * @function create(t, s, o)
 * @static
 * @param {Number} t
 * @param {CCScene} s
 * @param {tOrientation} o default is <b>kOrientationUpOver</b>
 * @returns {CCTransitionZoomFlipY}
*/
CCTransitionZoomFlipY.create = function(t, s, o) {return new CCTransitionZoomFlipY();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionZoomFlipAngular() {};
CCTransitionZoomFlipAngular.prototype = new CCScene();
/**
 * @function create(t, s, o)
 * @static
 * @param {Number} t
 * @param {CCScene} s
 * @param {tOrientation} o default is <b>kOrientationRightOver</b>
 * @returns {CCTransitionZoomFlipAngular}
*/
CCTransitionZoomFlipAngular.create = function(t, s, o) {return new CCTransitionZoomFlipAngular();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionFade() {};
CCTransitionFade.prototype = new CCScene();
/**
 * @function create(duration, scene, color)
 * @static
 * @param {Number} duration
 * @param {CCScene} scene
 * @param {ccColor3B} color default is <b>ccBLACK</b>
 * @returns {CCTransitionFade}
*/
CCTransitionFade.create = function(duration, scene, color) {return new CCTransitionFade();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionCrossFade() {};
CCTransitionCrossFade.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionCrossFade}
*/
CCTransitionCrossFade.create = function(t, scene) {return new CCTransitionCrossFade();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionTurnOffTiles() {};
CCTransitionTurnOffTiles.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionTurnOffTiles}
*/
CCTransitionTurnOffTiles.create = function(t, scene) {return new CCTransitionTurnOffTiles();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionSplitCols() {};
CCTransitionSplitCols.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionSplitCols}
*/
CCTransitionSplitCols.create = function(t, scene) {return new CCTransitionSplitCols();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionSplitRows() {};
CCTransitionSplitRows.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionSplitRows}
*/
CCTransitionSplitRows.create = function(t, scene) {return new CCTransitionSplitRows();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionFadeTR() {};
CCTransitionFadeTR.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionFadeTR}
*/
CCTransitionFadeTR.create = function(t, scene) {return new CCTransitionFadeTR();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionFadeBL() {};
CCTransitionFadeBL.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionFadeBL}
*/
CCTransitionFadeBL.create = function(t, scene) {return new CCTransitionFadeBL();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionFadeUp() {};
CCTransitionFadeUp.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionFadeUp}
*/
CCTransitionFadeUp.create = function(t, scene) {return new CCTransitionFadeUp();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionFadeDown() {};
CCTransitionFadeDown.prototype = new CCScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionFadeDown}
*/
CCTransitionFadeDown.create = function(t, scene) {return new CCTransitionFadeDown();};
/**
 * @super CCScene
 * @constructor 
*/
function CCTransitionPageTurn() {};
CCTransitionPageTurn.prototype = new CCScene();
/**
 * @function actionWithSize(vector)
 * @param {ccGridSize} vector
 * @returns {CCActionInterval}
*/
CCTransitionPageTurn.prototype.actionWithSize = function(vector) {return new CCActionInterval();};
/**
 * @function create(t, scene, backwards)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @param {Boolean} backwards
 * @returns {CCTransitionPageTurn}
*/
CCTransitionPageTurn.create = function(t, scene, backwards) {return new CCTransitionPageTurn();};
cocos2d.kOrientationLeftOver = 0;
cocos2d.kOrientationRightOver = 1;
cocos2d.kOrientationUpOver = 0;
cocos2d.kOrientationDownOver = 1;
/**
 * @super CCTransitionScene
 * @constructor 
*/
function CCTransitionProgress() {};
CCTransitionProgress.prototype = new CCTransitionScene();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionProgress}
*/
CCTransitionProgress.create = function(t, scene) {return new CCTransitionProgress();};
/**
 * @super CCTransitionProgress
 * @constructor 
*/
function CCTransitionProgressRadialCCW() {};
CCTransitionProgressRadialCCW.prototype = new CCTransitionProgress();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionProgressRadialCCW}
*/
CCTransitionProgressRadialCCW.create = function(t, scene) {return new CCTransitionProgressRadialCCW();};
/**
 * @super CCTransitionProgress
 * @constructor 
*/
function CCTransitionProgressRadialCW() {};
CCTransitionProgressRadialCW.prototype = new CCTransitionProgress();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionProgressRadialCW}
*/
CCTransitionProgressRadialCW.create = function(t, scene) {return new CCTransitionProgressRadialCW();};
/**
 * @super CCTransitionProgress
 * @constructor 
*/
function CCTransitionProgressHorizontal() {};
CCTransitionProgressHorizontal.prototype = new CCTransitionProgress();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionProgressHorizontal}
*/
CCTransitionProgressHorizontal.create = function(t, scene) {return new CCTransitionProgressHorizontal();};
/**
 * @super CCTransitionProgress
 * @constructor 
*/
function CCTransitionProgressVertical() {};
CCTransitionProgressVertical.prototype = new CCTransitionProgress();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionProgressVertical}
*/
CCTransitionProgressVertical.create = function(t, scene) {return new CCTransitionProgressVertical();};
/**
 * @super CCTransitionProgress
 * @constructor 
*/
function CCTransitionProgressInOut() {};
CCTransitionProgressInOut.prototype = new CCTransitionProgress();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionProgressInOut}
*/
CCTransitionProgressInOut.create = function(t, scene) {return new CCTransitionProgressInOut();};
/**
 * @super CCTransitionProgress
 * @constructor 
*/
function CCTransitionProgressOutIn() {};
CCTransitionProgressOutIn.prototype = new CCTransitionProgress();
/**
 * @function create(t, scene)
 * @static
 * @param {Number} t
 * @param {CCScene} scene
 * @returns {CCTransitionProgressOutIn}
*/
CCTransitionProgressOutIn.create = function(t, scene) {return new CCTransitionProgressOutIn();};
/**
 * @super Object
 * @constructor 
*/
function ccColor3B() {};
ccColor3B.prototype = {};
/**
 * Property r
 * @type Number
*/
ccColor3B.prototype.r = 0;
/**
 * Property g
 * @type Number
*/
ccColor3B.prototype.g = 0;
/**
 * Property b
 * @type Number
*/
ccColor3B.prototype.b = 0;
/**
 * @super Object
 * @constructor 
*/
function ccColor4B() {};
ccColor4B.prototype = {};
/**
 * Property r
 * @type Number
*/
ccColor4B.prototype.r = 0;
/**
 * Property g
 * @type Number
*/
ccColor4B.prototype.g = 0;
/**
 * Property b
 * @type Number
*/
ccColor4B.prototype.b = 0;
/**
 * Property a
 * @type Number
*/
ccColor4B.prototype.a = 0;
/**
 * @super Object
 * @constructor 
*/
function ccColor4F() {};
ccColor4F.prototype = {};
/**
 * Property r
 * @type Number
*/
ccColor4F.prototype.r = 0;
/**
 * Property g
 * @type Number
*/
ccColor4F.prototype.g = 0;
/**
 * Property b
 * @type Number
*/
ccColor4F.prototype.b = 0;
/**
 * Property a
 * @type Number
*/
ccColor4F.prototype.a = 0;
/**
 * @super Object
 * @constructor 
*/
function ccVertex2F() {};
ccVertex2F.prototype = {};
/**
 * Property x
 * @type Number
*/
ccVertex2F.prototype.x = 0;
/**
 * Property y
 * @type Number
*/
ccVertex2F.prototype.y = 0;
/**
 * @super Object
 * @constructor 
*/
function ccVertex3F() {};
ccVertex3F.prototype = {};
/**
 * Property x
 * @type Number
*/
ccVertex3F.prototype.x = 0;
/**
 * Property y
 * @type Number
*/
ccVertex3F.prototype.y = 0;
/**
 * Property z
 * @type Number
*/
ccVertex3F.prototype.z = 0;
/**
 * @super Object
 * @constructor 
*/
function ccTex2F() {};
ccTex2F.prototype = {};
/**
 * Property u
 * @type Number
*/
ccTex2F.prototype.u = 0;
/**
 * Property v
 * @type Number
*/
ccTex2F.prototype.v = 0;
/**
 * @super Object
 * @constructor 
*/
function ccPointSprite() {};
ccPointSprite.prototype = {};
/**
 * Property pos
 * @type ccVertex2F
*/
ccPointSprite.prototype.pos = new ccVertex2F();
/**
 * Property color
 * @type ccColor4B
*/
ccPointSprite.prototype.color = new ccColor4B();
/**
 * Property size
 * @type Number
*/
ccPointSprite.prototype.size = 0;
/**
 * @super Object
 * @constructor 
*/
function ccQuad2() {};
ccQuad2.prototype = {};
/**
 * Property tl
 * @type ccVertex2F
*/
ccQuad2.prototype.tl = new ccVertex2F();
/**
 * Property tr
 * @type ccVertex2F
*/
ccQuad2.prototype.tr = new ccVertex2F();
/**
 * Property bl
 * @type ccVertex2F
*/
ccQuad2.prototype.bl = new ccVertex2F();
/**
 * Property br
 * @type ccVertex2F
*/
ccQuad2.prototype.br = new ccVertex2F();
/**
 * @super Object
 * @constructor 
*/
function ccQuad3() {};
ccQuad3.prototype = {};
/**
 * Property bl
 * @type ccVertex3F
*/
ccQuad3.prototype.bl = new ccVertex3F();
/**
 * Property br
 * @type ccVertex3F
*/
ccQuad3.prototype.br = new ccVertex3F();
/**
 * Property tl
 * @type ccVertex3F
*/
ccQuad3.prototype.tl = new ccVertex3F();
/**
 * Property tr
 * @type ccVertex3F
*/
ccQuad3.prototype.tr = new ccVertex3F();
/**
 * @super Object
 * @constructor 
*/
function ccGridSize() {};
ccGridSize.prototype = {};
/**
 * Property x
 * @type Number
*/
ccGridSize.prototype.x = 0;
/**
 * Property y
 * @type Number
*/
ccGridSize.prototype.y = 0;
/**
 * @super Object
 * @constructor 
*/
function ccV2F_C4B_T2F() {};
ccV2F_C4B_T2F.prototype = {};
/**
 * Property vertices
 * @type ccVertex2F
*/
ccV2F_C4B_T2F.prototype.vertices = new ccVertex2F();
/**
 * Property colors
 * @type ccColor4B
*/
ccV2F_C4B_T2F.prototype.colors = new ccColor4B();
/**
 * Property texCoords
 * @type ccTex2F
*/
ccV2F_C4B_T2F.prototype.texCoords = new ccTex2F();
/**
 * @super Object
 * @constructor 
*/
function ccV2F_C4F_T2F() {};
ccV2F_C4F_T2F.prototype = {};
/**
 * Property vertices
 * @type ccVertex2F
*/
ccV2F_C4F_T2F.prototype.vertices = new ccVertex2F();
/**
 * Property colors
 * @type ccColor4F
*/
ccV2F_C4F_T2F.prototype.colors = new ccColor4F();
/**
 * Property texCoords
 * @type ccTex2F
*/
ccV2F_C4F_T2F.prototype.texCoords = new ccTex2F();
/**
 * @super Object
 * @constructor 
*/
function ccV3F_C4B_T2F() {};
ccV3F_C4B_T2F.prototype = {};
/**
 * Property vertices
 * @type ccVertex3F
*/
ccV3F_C4B_T2F.prototype.vertices = new ccVertex3F();
/**
 * Property colors
 * @type ccColor4B
*/
ccV3F_C4B_T2F.prototype.colors = new ccColor4B();
/**
 * Property texCoords
 * @type ccTex2F
*/
ccV3F_C4B_T2F.prototype.texCoords = new ccTex2F();
/**
 * @super Object
 * @constructor 
*/
function ccV2F_C4B_T2F_Quad() {};
ccV2F_C4B_T2F_Quad.prototype = {};
/**
 * Property bl
 * @type ccV2F_C4B_T2F
*/
ccV2F_C4B_T2F_Quad.prototype.bl = new ccV2F_C4B_T2F();
/**
 * Property br
 * @type ccV2F_C4B_T2F
*/
ccV2F_C4B_T2F_Quad.prototype.br = new ccV2F_C4B_T2F();
/**
 * Property tl
 * @type ccV2F_C4B_T2F
*/
ccV2F_C4B_T2F_Quad.prototype.tl = new ccV2F_C4B_T2F();
/**
 * Property tr
 * @type ccV2F_C4B_T2F
*/
ccV2F_C4B_T2F_Quad.prototype.tr = new ccV2F_C4B_T2F();
/**
 * @super Object
 * @constructor 
*/
function ccV3F_C4B_T2F_Quad() {};
ccV3F_C4B_T2F_Quad.prototype = {};
/**
 * Property tl
 * @type ccV3F_C4B_T2F
*/
ccV3F_C4B_T2F_Quad.prototype.tl = new ccV3F_C4B_T2F();
/**
 * Property bl
 * @type ccV3F_C4B_T2F
*/
ccV3F_C4B_T2F_Quad.prototype.bl = new ccV3F_C4B_T2F();
/**
 * Property tr
 * @type ccV3F_C4B_T2F
*/
ccV3F_C4B_T2F_Quad.prototype.tr = new ccV3F_C4B_T2F();
/**
 * Property br
 * @type ccV3F_C4B_T2F
*/
ccV3F_C4B_T2F_Quad.prototype.br = new ccV3F_C4B_T2F();
/**
 * @super Object
 * @constructor 
*/
function ccV2F_C4F_T2F_Quad() {};
ccV2F_C4F_T2F_Quad.prototype = {};
/**
 * Property bl
 * @type ccV2F_C4F_T2F
*/
ccV2F_C4F_T2F_Quad.prototype.bl = new ccV2F_C4F_T2F();
/**
 * Property br
 * @type ccV2F_C4F_T2F
*/
ccV2F_C4F_T2F_Quad.prototype.br = new ccV2F_C4F_T2F();
/**
 * Property tl
 * @type ccV2F_C4F_T2F
*/
ccV2F_C4F_T2F_Quad.prototype.tl = new ccV2F_C4F_T2F();
/**
 * Property tr
 * @type ccV2F_C4F_T2F
*/
ccV2F_C4F_T2F_Quad.prototype.tr = new ccV2F_C4F_T2F();
/**
 * @super Object
 * @constructor 
*/
function ccBlendFunc() {};
ccBlendFunc.prototype = {};
/**
 * Property src
 * @type Number
*/
ccBlendFunc.prototype.src = 0;
/**
 * Property dst
 * @type Number
*/
ccBlendFunc.prototype.dst = 0;
/**
 * @super Object
 * @constructor 
*/
function ccT2F_Quad() {};
ccT2F_Quad.prototype = {};
/**
 * Property bl
 * @type ccTex2F
*/
ccT2F_Quad.prototype.bl = new ccTex2F();
/**
 * Property br
 * @type ccTex2F
*/
ccT2F_Quad.prototype.br = new ccTex2F();
/**
 * Property tl
 * @type ccTex2F
*/
ccT2F_Quad.prototype.tl = new ccTex2F();
/**
 * Property tr
 * @type ccTex2F
*/
ccT2F_Quad.prototype.tr = new ccTex2F();
/**
 * @super Object
 * @constructor 
*/
function ccAnimationFrameData() {};
ccAnimationFrameData.prototype = {};
/**
 * Property texCoords
 * @type ccT2F_Quad
*/
ccAnimationFrameData.prototype.texCoords = new ccT2F_Quad();
/**
 * Property delay
 * @type Number
*/
ccAnimationFrameData.prototype.delay = 0;
/**
 * Property size
 * @type CCSize
*/
ccAnimationFrameData.prototype.size = new CCSize();
/**
 * @super Object
 * @constructor 
*/
function CCUserDefault() {};
CCUserDefault.prototype = {};
/**
 * @function getBoolForKey(pKey)
 * @param {String} pKey
 * @returns {Boolean}
*/
CCUserDefault.prototype.getBoolForKey = function(pKey) {return true;};
/**
 * @function getIntegerForKey(pKey)
 * @param {String} pKey
 * @returns {Number}
*/
CCUserDefault.prototype.getIntegerForKey = function(pKey) {return 0;};
/**
 * @function getFloatForKey(pKey)
 * @param {String} pKey
 * @returns {Number}
*/
CCUserDefault.prototype.getFloatForKey = function(pKey) {return 0;};
/**
 * @function getDoubleForKey(pKey)
 * @param {String} pKey
 * @returns {Number}
*/
CCUserDefault.prototype.getDoubleForKey = function(pKey) {return 0;};
/**
 * @function getStringForKey(pKey)
 * @param {String} pKey
 * @returns {String}
*/
CCUserDefault.prototype.getStringForKey = function(pKey) {return "";};
/**
 * @function setBoolForKey(pKey, value)
 * @param {String} pKey
 * @param {Boolean} value
*/
CCUserDefault.prototype.setBoolForKey = function(pKey, value) {};
/**
 * @function setIntegerForKey(pKey, value)
 * @param {String} pKey
 * @param {Number} value
*/
CCUserDefault.prototype.setIntegerForKey = function(pKey, value) {};
/**
 * @function setFloatForKey(pKey, value)
 * @param {String} pKey
 * @param {Number} value
*/
CCUserDefault.prototype.setFloatForKey = function(pKey, value) {};
/**
 * @function setDoubleForKey(pKey, value)
 * @param {String} pKey
 * @param {Number} value
*/
CCUserDefault.prototype.setDoubleForKey = function(pKey, value) {};
/**
 * @function setStringForKey(pKey, value)
 * @param {String} pKey
 * @param {String} value
*/
CCUserDefault.prototype.setStringForKey = function(pKey, value) {};
/**
 * @function flush()
*/
CCUserDefault.prototype.flush = function() {};
/**
 * @function sharedUserDefault()
 * @static
 * @returns {CCUserDefault}
*/
CCUserDefault.sharedUserDefault = function() {return new CCUserDefault();};
/**
 * @function purgeSharedUserDefault()
 * @static
*/
CCUserDefault.purgeSharedUserDefault = function() {};
/**
 * @function getXMLFilePath()
 * @static
 * @returns {String}
*/
CCUserDefault.getXMLFilePath = function() {return "";};
/**
 * @super Object
 * @constructor 
*/
function CCIMEKeyboardNotificationInfo() {};
CCIMEKeyboardNotificationInfo.prototype = {};
/**
 * Property begin
 * @type CCRect
*/
CCIMEKeyboardNotificationInfo.prototype.begin = new CCRect();
/**
 * Property end
 * @type CCRect
*/
CCIMEKeyboardNotificationInfo.prototype.end = new CCRect();
/**
 * Property duration
 * @type Number
*/
CCIMEKeyboardNotificationInfo.prototype.duration = 0;
/**
 * @super CCObject
 * @constructor 
*/
function CCSet() {};
CCSet.prototype = new CCObject();
/**
 * @super CCObject
 * @constructor 
*/
function CCGridBase() {};
CCGridBase.prototype = new CCObject();
/**
 * @super CCObject
 * @constructor 
*/
function Tile() {};
Tile.prototype = new CCObject();
/**
 * @super CCObject
 * @constructor 
*/
function CCEGLView() {};
CCEGLView.prototype = new CCObject();
/**
 * @super CCObject
 * @constructor 
*/
function CCTouchDispatcher() {};
CCTouchDispatcher.prototype = new CCObject();
/**
 * @function isDispatchEvents()
 * @returns {Boolean}
*/
CCTouchDispatcher.prototype.isDispatchEvents = function() {return true;};
/**
 * @function setDispatchEvents(bDispatchEvents)
 * @param {Boolean} bDispatchEvents
*/
CCTouchDispatcher.prototype.setDispatchEvents = function(bDispatchEvents) {};
/**
 * @function addStandardDelegate(pDelegate, nPriority)
 * @param {Object} pDelegate
 * @param {Number} nPriority
*/
CCTouchDispatcher.prototype.addStandardDelegate = function(pDelegate, nPriority) {};
/**
 * @function addTargetedDelegate(pDelegate, nPriority, bSwallowsTouches)
 * @param {Object} pDelegate
 * @param {Number} nPriority
 * @param {Boolean} bSwallowsTouches
*/
CCTouchDispatcher.prototype.addTargetedDelegate = function(pDelegate, nPriority, bSwallowsTouches) {};
/**
 * @function removeDelegate(pDelegate)
 * @param {Object} pDelegate
*/
CCTouchDispatcher.prototype.removeDelegate = function(pDelegate) {};
/**
 * @function removeAllDelegates()
*/
CCTouchDispatcher.prototype.removeAllDelegates = function() {};
/**
 * @function setPriority(nPriority, pDelegate)
 * @param {Number} nPriority
 * @param {Object} pDelegate
*/
CCTouchDispatcher.prototype.setPriority = function(nPriority, pDelegate) {};
/**
 * @super CCObject
 * @constructor 
*/
function CCKeypadDispatcher() {};
CCKeypadDispatcher.prototype = new CCObject();
/**
 * @super CCObject
 * @constructor 
*/
function CCAccelerometer() {};
CCAccelerometer.prototype = new CCObject();
/**
 * @super CCObject
 * @constructor 
*/
function CCGLProgram() {};
CCGLProgram.prototype = new CCObject();
/**
 * @super CCObject
 * @constructor 
*/
function ccGLServerState() {};
ccGLServerState.prototype = new CCObject();
/**
 * @super CCObject
 * @constructor 
*/
function tCCParticle() {};
tCCParticle.prototype = new CCObject();
/**
 * @super CCObject
 * @constructor 
*/
function CCTextureProtocol() {};
CCTextureProtocol.prototype = new CCObject();
/**
 * @super CCObject
 * @constructor 
*/
function CCImage() {};
CCImage.prototype = new CCObject();
/**
 * @super CCObject
 * @constructor 
*/
function tCCImageFormat() {};
tCCImageFormat.prototype = new CCObject();

/**
 * @super Object
 * @constructor 
*/
function kmMat4() {};
kmMat4.prototype = {};
/**
 * @super CCLayer
 * @constructor 
*/
function CCControl() {};
CCControl.prototype = new CCLayer();
/**
 * @function isOpacityModifyRGB()
 * @returns {Boolean}
*/
CCControl.prototype.isOpacityModifyRGB = function() {return true;};
/**
 * @function setOpacityModifyRGB(isOpacityModifyRGB)
 * @param {Boolean} isOpacityModifyRGB
*/
CCControl.prototype.setOpacityModifyRGB = function(isOpacityModifyRGB) {};
/**
 * @function setEnabled(bEnabled)
 * @param {Boolean} bEnabled
*/
CCControl.prototype.setEnabled = function(bEnabled) {};
/**
 * @function isEnabled()
 * @returns {Boolean}
*/
CCControl.prototype.isEnabled = function() {return true;};
/**
 * @function setSelected(bSelected)
 * @param {Boolean} bSelected
*/
CCControl.prototype.setSelected = function(bSelected) {};
/**
 * @function isSelected()
 * @returns {Boolean}
*/
CCControl.prototype.isSelected = function() {return true;};
/**
 * @function setHighlighted(bHighlighted)
 * @param {Boolean} bHighlighted
*/
CCControl.prototype.setHighlighted = function(bHighlighted) {};
/**
 * @function isHighlighted()
 * @returns {Boolean}
*/
CCControl.prototype.isHighlighted = function() {return true;};
/**
 * @function init()
 * @returns {Boolean}
*/
CCControl.prototype.init = function() {return true;};
/**
 * @function registerWithTouchDispatcher()
*/
CCControl.prototype.registerWithTouchDispatcher = function() {};
/**
 * @function sendActionsForControlEvents(controlEvents)
 * @param {Number} controlEvents
*/
CCControl.prototype.sendActionsForControlEvents = function(controlEvents) {};
/**
 * @function addTargetWithActionForControlEvents(target, action, controlEvents)
 * @param {Object} target
 * @param {String} action
 * @param {Number} controlEvents
*/
CCControl.prototype.addTargetWithActionForControlEvents = function(target, action, controlEvents) {};
/**
 * @function removeTargetWithActionForControlEvents(target, action, controlEvents)
 * @param {Object} target
 * @param {String} action
 * @param {Number} controlEvents
*/
CCControl.prototype.removeTargetWithActionForControlEvents = function(target, action, controlEvents) {};
/**
 * @function getTouchLocation(touch)
 * @param {CCTouch} touch
 * @returns {CCPoint}
*/
CCControl.prototype.getTouchLocation = function(touch) {return new CCPoint();};
/**
 * @function isTouchInside(touch)
 * @param {CCTouch} touch
 * @returns {Boolean}
*/
CCControl.prototype.isTouchInside = function(touch) {return true;};
/**
 * Property Opacity
 * @type Number
*/
CCControl.prototype.Opacity = 0;
/**
 * Property Color
 * @type ccColor3B
*/
CCControl.prototype.Color = new ccColor3B();
/**
 * Property m_bIsOpacityModifyRGB
 * @type Boolean
*/
CCControl.prototype.m_bIsOpacityModifyRGB = true;
extension.CCControlEventTouchDown = 1;
extension.CCControlEventTouchDragInside = 2;
extension.CCControlEventTouchDragOutside = 4;
extension.CCControlEventTouchDragEnter = 8;
extension.CCControlEventTouchDragExit = 16;
extension.CCControlEventTouchUpInside = 32;
extension.CCControlEventTouchUpOutside = 64;
extension.CCControlEventTouchCancel = 128;
extension.CCControlEventValueChanged = 256;
extension.CCControlStateNormal = 1;
extension.CCControlStateHighlighted = 2;
extension.CCControlStateDisabled = 4;
extension.CCControlStateSelected = 8;
/**
 * @super CCControl
 * @constructor 
*/
function CCControlButton() {};
CCControlButton.prototype = new CCControl();
/**
 * @function needsLayout()
*/
CCControlButton.prototype.needsLayout = function() {};
/**
 * @function setEnabled(enabled)
 * @param {Boolean} enabled
*/
CCControlButton.prototype.setEnabled = function(enabled) {};
/**
 * @function setSelected(enabled)
 * @param {Boolean} enabled
*/
CCControlButton.prototype.setSelected = function(enabled) {};
/**
 * @function setHighlighted(enabled)
 * @param {Boolean} enabled
*/
CCControlButton.prototype.setHighlighted = function(enabled) {};
/**
 * @function init()
 * @returns {Boolean}
*/
CCControlButton.prototype.init = function() {return true;};
/**
 * @function initWithLabelAndBackgroundSprite(label, backgroundSprite)
 * @param {CCNode} label
 * @param {CCScale9Sprite} backgroundSprite
 * @returns {Boolean}
*/
CCControlButton.prototype.initWithLabelAndBackgroundSprite = function(label, backgroundSprite) {return true;};
/**
 * @function buttonWithLabelAndBackgroundSprite(label, backgroundSprite)
 * @static
 * @param {CCNode} label
 * @param {CCScale9Sprite} backgroundSprite
 * @returns {CCControlButton}
*/
CCControlButton.buttonWithLabelAndBackgroundSprite = function(label, backgroundSprite) {return new CCControlButton();};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - label <b>and</b> args[1] is {CCScale9Sprite} - backgroundSprite.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - title <b>and</b> args[1] is {String} - fontName <b>and</b> args[2] is {Number} - fontSize.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCScale9Sprite} - sprite.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * @returns {CCControlButton}
*/
CCControlButton.create = function(args) {return new CCControlButton();};
/**
 * @function initWithTitleAndFontNameAndFontSize(title, fontName, fontSize)
 * @param {String} title
 * @param {String} fontName
 * @param {Number} fontSize
 * @returns {Boolean}
*/
CCControlButton.prototype.initWithTitleAndFontNameAndFontSize = function(title, fontName, fontSize) {return true;};
/**
 * @function buttonWithTitleAndFontNameAndFontSize(title, fontName, fontSize)
 * @static
 * @param {String} title
 * @param {String} fontName
 * @param {Number} fontSize
 * @returns {CCControlButton}
*/
CCControlButton.buttonWithTitleAndFontNameAndFontSize = function(title, fontName, fontSize) {return new CCControlButton();};
/**
 * @function initWithBackgroundSprite(sprite)
 * @param {CCScale9Sprite} sprite
 * @returns {Boolean}
*/
CCControlButton.prototype.initWithBackgroundSprite = function(sprite) {return true;};
/**
 * @function buttonWithBackgroundSprite(sprite)
 * @static
 * @param {CCScale9Sprite} sprite
 * @returns {CCControlButton}
*/
CCControlButton.buttonWithBackgroundSprite = function(sprite) {return new CCControlButton();};
/**
 * @function getTitleForState(state)
 * @param {CCControlState} state
 * @returns {CCString}
*/
CCControlButton.prototype.getTitleForState = function(state) {return new CCString();};
/**
 * @function setTitleForState(title, state)
 * @param {CCString} title
 * @param {CCControlState} state
*/
CCControlButton.prototype.setTitleForState = function(title, state) {};
/**
 * @function getTitleColorForState(state)
 * @param {CCControlState} state
 * @returns {ccColor3B}
*/
CCControlButton.prototype.getTitleColorForState = function(state) {return new ccColor3B();};
/**
 * @function setTitleColorForState(color, state)
 * @param {ccColor3B} color
 * @param {CCControlState} state
*/
CCControlButton.prototype.setTitleColorForState = function(color, state) {};
/**
 * @function getTitleLabelForState(state)
 * @param {CCControlState} state
 * @returns {CCNode}
*/
CCControlButton.prototype.getTitleLabelForState = function(state) {return new CCNode();};
/**
 * @function setTitleLabelForState(label, state)
 * @param {CCNode} label
 * @param {CCControlState} state
*/
CCControlButton.prototype.setTitleLabelForState = function(label, state) {};
/**
 * @function setTitleTTFForState(fntFile, state)
 * @param {String} fntFile
 * @param {CCControlState} state
*/
CCControlButton.prototype.setTitleTTFForState = function(fntFile, state) {};
/**
 * @function getTitleTTFForState(state)
 * @param {CCControlState} state
 * @returns {String}
*/
CCControlButton.prototype.getTitleTTFForState = function(state) {return "";};
/**
 * @function setTitleTTFSizeForState(size, state)
 * @param {Number} size
 * @param {CCControlState} state
*/
CCControlButton.prototype.setTitleTTFSizeForState = function(size, state) {};
/**
 * @function getTitleTTFSizeForState(state)
 * @param {CCControlState} state
 * @returns {Number}
*/
CCControlButton.prototype.getTitleTTFSizeForState = function(state) {return 0;};
/**
 * @function setTitleBMFontForState(fntFile, state)
 * @param {String} fntFile
 * @param {CCControlState} state
*/
CCControlButton.prototype.setTitleBMFontForState = function(fntFile, state) {};
/**
 * @function getTitleBMFontForState(state)
 * @param {CCControlState} state
 * @returns {String}
*/
CCControlButton.prototype.getTitleBMFontForState = function(state) {return "";};
/**
 * @function getBackgroundSpriteForState(state)
 * @param {CCControlState} state
 * @returns {CCScale9Sprite}
*/
CCControlButton.prototype.getBackgroundSpriteForState = function(state) {return new CCScale9Sprite();};
/**
 * @function setBackgroundSpriteForState(sprite, state)
 * @param {CCScale9Sprite} sprite
 * @param {CCControlState} state
*/
CCControlButton.prototype.setBackgroundSpriteForState = function(sprite, state) {};
/**
 * @function setBackgroundSpriteFrameForState(spriteFrame, state)
 * @param {CCSpriteFrame} spriteFrame
 * @param {CCControlState} state
*/
CCControlButton.prototype.setBackgroundSpriteFrameForState = function(spriteFrame, state) {};
/**
 * @function node()
 * @static
 * @returns {CCControlButton}
*/
CCControlButton.node = function() {return new CCControlButton();};
/**
 * @super CCControl
 * @constructor 
*/
function CCControlColourPicker() {};
CCControlColourPicker.prototype = new CCControl();
/**
 * @function setColor(colorValue)
 * @param {ccColor3B} colorValue
*/
CCControlColourPicker.prototype.setColor = function(colorValue) {};
/**
 * @function setEnabled(bEnabled)
 * @param {Boolean} bEnabled
*/
CCControlColourPicker.prototype.setEnabled = function(bEnabled) {};
/**
 * @function colourPicker()
 * @static
 * @returns {CCControlColourPicker}
*/
CCControlColourPicker.colourPicker = function() {return new CCControlColourPicker();};
/**
 * @function create()
 * @static
 * @returns {CCControlColourPicker}
*/
CCControlColourPicker.create = function() {return new CCControlColourPicker();};
/**
 * @function init()
 * @returns {Boolean}
*/
CCControlColourPicker.prototype.init = function() {return true;};
/**
 * @function hueSliderValueChanged(sender, controlEvent)
 * @param {CCObject} sender
 * @param {CCControlEvent} controlEvent
*/
CCControlColourPicker.prototype.hueSliderValueChanged = function(sender, controlEvent) {};
/**
 * @function colourSliderValueChanged(sender, controlEvent)
 * @param {CCObject} sender
 * @param {CCControlEvent} controlEvent
*/
CCControlColourPicker.prototype.colourSliderValueChanged = function(sender, controlEvent) {};
/**
 * @super CCControl
 * @constructor 
*/
function CCControlHuePicker() {};
CCControlHuePicker.prototype = new CCControl();
/**
 * @function getHue()
 * @returns {Number}
*/
CCControlHuePicker.prototype.getHue = function() {return 0;};
/**
 * @function setHue(val)
 * @param {Number} val
*/
CCControlHuePicker.prototype.setHue = function(val) {};
/**
 * @function getHuePercentage()
 * @returns {Number}
*/
CCControlHuePicker.prototype.getHuePercentage = function() {return 0;};
/**
 * @function setHuePercentage(val)
 * @param {Number} val
*/
CCControlHuePicker.prototype.setHuePercentage = function(val) {};
/**
 * @function getBackground()
 * @returns {CCSprite}
*/
CCControlHuePicker.prototype.getBackground = function() {return new CCSprite();};
/**
 * @function getSlider()
 * @returns {CCSprite}
*/
CCControlHuePicker.prototype.getSlider = function() {return new CCSprite();};
/**
 * @function getStartPos()
 * @returns {CCPoint}
*/
CCControlHuePicker.prototype.getStartPos = function() {return new CCPoint();};
/**
 * @function initWithTargetAndPos(target, pos)
 * @param {CCNode} target
 * @param {CCPoint} pos
 * @returns {Boolean}
*/
CCControlHuePicker.prototype.initWithTargetAndPos = function(target, pos) {return true;};
/**
 * @function pickerWithTargetAndPos(target, pos)
 * @static
 * @param {CCNode} target
 * @param {CCPoint} pos
 * @returns {CCControlHuePicker}
*/
CCControlHuePicker.pickerWithTargetAndPos = function(target, pos) {return new CCControlHuePicker();};
/**
 * @function create(target, pos)
 * @static
 * @param {CCNode} target
 * @param {CCPoint} pos
 * @returns {CCControlHuePicker}
*/
CCControlHuePicker.create = function(target, pos) {return new CCControlHuePicker();};
/**
 * @super CCControl
 * @constructor 
*/
function CCControlPotentiometer() {};
CCControlPotentiometer.prototype = new CCControl();
/**
 * @function create(backgroundFile, progressFile, thumbFile)
 * @static
 * @param {String} backgroundFile
 * @param {String} progressFile
 * @param {String} thumbFile
 * @returns {CCControlPotentiometer}
*/
CCControlPotentiometer.create = function(backgroundFile, progressFile, thumbFile) {return new CCControlPotentiometer();};
/**
 * @function initWithTrackSprite_ProgressTimer_ThumbSprite(trackSprite, progressTimer, thumbSprite)
 * @param {CCSprite} trackSprite
 * @param {CCProgressTimer} progressTimer
 * @param {CCSprite} thumbSprite
 * @returns {Boolean}
*/
CCControlPotentiometer.prototype.initWithTrackSprite_ProgressTimer_ThumbSprite = function(trackSprite, progressTimer, thumbSprite) {return true;};
/**
 * @function setValue(value)
 * @param {Number} value
*/
CCControlPotentiometer.prototype.setValue = function(value) {};
/**
 * @function getValue()
 * @returns {Number}
*/
CCControlPotentiometer.prototype.getValue = function() {return 0;};
/**
 * @function setMinimumValue(minimumValue)
 * @param {Number} minimumValue
*/
CCControlPotentiometer.prototype.setMinimumValue = function(minimumValue) {};
/**
 * @function getMinimumValue()
 * @returns {Number}
*/
CCControlPotentiometer.prototype.getMinimumValue = function() {return 0;};
/**
 * @function setMaximumValue(maximumValue)
 * @param {Number} maximumValue
*/
CCControlPotentiometer.prototype.setMaximumValue = function(maximumValue) {};
/**
 * @function getMaximumValue()
 * @returns {Number}
*/
CCControlPotentiometer.prototype.getMaximumValue = function() {return 0;};
/**
 * @function setEnabled(enabled)
 * @param {Boolean} enabled
*/
CCControlPotentiometer.prototype.setEnabled = function(enabled) {};
/**
 * @function isTouchInside(touch)
 * @param {CCTouch} touch
 * @returns {Boolean}
*/
CCControlPotentiometer.prototype.isTouchInside = function(touch) {return true;};
/**
 * @function ccTouchBegan(pTouch, pEvent)
 * @param {CCTouch} pTouch
 * @param {CCEvent} pEvent
 * @returns {Boolean}
*/
CCControlPotentiometer.prototype.ccTouchBegan = function(pTouch, pEvent) {return true;};
/**
 * @function ccTouchMoved(pTouch, pEvent)
 * @param {CCTouch} pTouch
 * @param {CCEvent} pEvent
*/
CCControlPotentiometer.prototype.ccTouchMoved = function(pTouch, pEvent) {};
/**
 * @function ccTouchEnded(pTouch, pEvent)
 * @param {CCTouch} pTouch
 * @param {CCEvent} pEvent
*/
CCControlPotentiometer.prototype.ccTouchEnded = function(pTouch, pEvent) {};
/**
 * @super CCControl
 * @constructor 
*/
function CCControlSaturationBrightnessPicker() {};
CCControlSaturationBrightnessPicker.prototype = new CCControl();
/**
 * @function getSaturation()
 * @returns {Number}
*/
CCControlSaturationBrightnessPicker.prototype.getSaturation = function() {return 0;};
/**
 * @function getBrightness()
 * @returns {Number}
*/
CCControlSaturationBrightnessPicker.prototype.getBrightness = function() {return 0;};
/**
 * @function getBackground()
 * @returns {CCSprite}
*/
CCControlSaturationBrightnessPicker.prototype.getBackground = function() {return new CCSprite();};
/**
 * @function getOverlay()
 * @returns {CCSprite}
*/
CCControlSaturationBrightnessPicker.prototype.getOverlay = function() {return new CCSprite();};
/**
 * @function getShadow()
 * @returns {CCSprite}
*/
CCControlSaturationBrightnessPicker.prototype.getShadow = function() {return new CCSprite();};
/**
 * @function getSlider()
 * @returns {CCSprite}
*/
CCControlSaturationBrightnessPicker.prototype.getSlider = function() {return new CCSprite();};
/**
 * @function getStartPos()
 * @returns {CCPoint}
*/
CCControlSaturationBrightnessPicker.prototype.getStartPos = function() {return new CCPoint();};
/**
 * @function initWithTargetAndPos(target, pos)
 * @param {CCNode} target
 * @param {CCPoint} pos
 * @returns {Boolean}
*/
CCControlSaturationBrightnessPicker.prototype.initWithTargetAndPos = function(target, pos) {return true;};
/**
 * @function pickerWithTargetAndPos(target, pos)
 * @static
 * @param {CCNode} target
 * @param {CCPoint} pos
 * @returns {CCControlSaturationBrightnessPicker}
*/
CCControlSaturationBrightnessPicker.pickerWithTargetAndPos = function(target, pos) {return new CCControlSaturationBrightnessPicker();};
/**
 * @function create(target, pos)
 * @static
 * @param {CCNode} target
 * @param {CCPoint} pos
 * @returns {CCControlSaturationBrightnessPicker}
*/
CCControlSaturationBrightnessPicker.create = function(target, pos) {return new CCControlSaturationBrightnessPicker();};
/**
 * @function updateWithHSV(hsv)
 * @param {HSV} hsv
*/
CCControlSaturationBrightnessPicker.prototype.updateWithHSV = function(hsv) {};
/**
 * @function updateDraggerWithHSV(hsv)
 * @param {HSV} hsv
*/
CCControlSaturationBrightnessPicker.prototype.updateDraggerWithHSV = function(hsv) {};
/**
 * @super CCControl
 * @constructor 
*/
function CCControlSlider() {};
CCControlSlider.prototype = new CCControl();
/**
 * @function getValue()
 * @returns {Number}
*/
CCControlSlider.prototype.getValue = function() {return 0;};
/**
 * @function setValue(val)
 * @param {Number} val
*/
CCControlSlider.prototype.setValue = function(val) {};
/**
 * @function getMinimumValue()
 * @returns {Number}
*/
CCControlSlider.prototype.getMinimumValue = function() {return 0;};
/**
 * @function setMinimumValue(val)
 * @param {Number} val
*/
CCControlSlider.prototype.setMinimumValue = function(val) {};
/**
 * @function getMaximumValue()
 * @returns {Number}
*/
CCControlSlider.prototype.getMaximumValue = function() {return 0;};
/**
 * @function setMaximumValue(val)
 * @param {Number} val
*/
CCControlSlider.prototype.setMaximumValue = function(val) {};
/**
 * @function setEnabled(enabled)
 * @param {Boolean} enabled
*/
CCControlSlider.prototype.setEnabled = function(enabled) {};
/**
 * @function isTouchInside(touch)
 * @param {CCTouch} touch
 * @returns {Boolean}
*/
CCControlSlider.prototype.isTouchInside = function(touch) {return true;};
/**
 * @function locationFromTouch(touch)
 * @param {CCTouch} touch
 * @returns {CCPoint}
*/
CCControlSlider.prototype.locationFromTouch = function(touch) {return new CCPoint();};
/**
 * @function getMinimumAllowedValue()
 * @returns {Number}
*/
CCControlSlider.prototype.getMinimumAllowedValue = function() {return 0;};
/**
 * @function setMinimumAllowedValue(value)
 * @param {Number} value
*/
CCControlSlider.prototype.setMinimumAllowedValue = function(value) {};
/**
 * @function getMaximumAllowedValue()
 * @returns {Number}
*/
CCControlSlider.prototype.getMaximumAllowedValue = function() {return 0;};
/**
 * @function setMaximumAllowedValue(value)
 * @param {Number} value
*/
CCControlSlider.prototype.setMaximumAllowedValue = function(value) {};
/**
 * @function getThumbSprite()
 * @returns {CCSprite}
*/
CCControlSlider.prototype.getThumbSprite = function() {return new CCSprite();};
/**
 * @function setThumbSprite(sprite)
 * @param {CCSprite} sprite
*/
CCControlSlider.prototype.setThumbSprite = function(sprite) {};
/**
 * @function getProgressSprite()
 * @returns {CCSprite}
*/
CCControlSlider.prototype.getProgressSprite = function() {return new CCSprite();};
/**
 * @function setProgressSprite(sprite)
 * @param {CCSprite} sprite
*/
CCControlSlider.prototype.setProgressSprite = function(sprite) {};
/**
 * @function getBackgroundSprite()
 * @returns {CCSprite}
*/
CCControlSlider.prototype.getBackgroundSprite = function() {return new CCSprite();};
/**
 * @function setBackgroundSprite(sprite)
 * @param {CCSprite} sprite
*/
CCControlSlider.prototype.setBackgroundSprite = function(sprite) {};
/**
 * @function initWithSprites(backgroundSprite, progressSprite, thumbSprite)
 * @param {CCSprite} backgroundSprite
 * @param {CCSprite} progressSprite
 * @param {CCSprite} thumbSprite
 * @returns {Boolean}
*/
CCControlSlider.prototype.initWithSprites = function(backgroundSprite, progressSprite, thumbSprite) {return true;};
/**
 * @function sliderWithFiles(bgFile, progressFile, thumbFile)
 * @static
 * @param {String} bgFile
 * @param {String} progressFile
 * @param {String} thumbFile
 * @returns {CCControlSlider}
*/
CCControlSlider.sliderWithFiles = function(bgFile, progressFile, thumbFile) {return new CCControlSlider();};
/**
 * @function sliderWithSprites(backgroundSprite, pogressSprite, thumbSprite)
 * @static
 * @param {CCSprite} backgroundSprite
 * @param {CCSprite} pogressSprite
 * @param {CCSprite} thumbSprite
 * @returns {CCControlSlider}
*/
CCControlSlider.sliderWithSprites = function(backgroundSprite, pogressSprite, thumbSprite) {return new CCControlSlider();};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - bgFile <b>and</b> args[1] is {String} - progressFile <b>and</b> args[2] is {String} - thumbFile.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSprite} - backgroundSprite <b>and</b> args[1] is {CCSprite} - pogressSprite <b>and</b> args[2] is {CCSprite} - thumbSprite.<br />
 * @returns {CCControlSlider}
*/
CCControlSlider.create = function(args) {return new CCControlSlider();};
/**
 * @function needsLayout()
*/
CCControlSlider.prototype.needsLayout = function() {};
/**
 * @super CCControl
 * @constructor 
*/
function CCControlStepper() {};
CCControlStepper.prototype = new CCControl();
/**
 * @function initWithMinusSpriteAndPlusSprite(minusSprite, plusSprite)
 * @param {CCSprite} minusSprite
 * @param {CCSprite} plusSprite
 * @returns {Boolean}
*/
CCControlStepper.prototype.initWithMinusSpriteAndPlusSprite = function(minusSprite, plusSprite) {return true;};
/**
 * @function create(minusSprite, plusSprite)
 * @static
 * @param {CCSprite} minusSprite
 * @param {CCSprite} plusSprite
 * @returns {CCControlStepper}
*/
CCControlStepper.create = function(minusSprite, plusSprite) {return new CCControlStepper();};
/**
 * @function setWraps(wraps)
 * @param {Boolean} wraps
*/
CCControlStepper.prototype.setWraps = function(wraps) {};
/**
 * @function setMinimumValue(minimumValue)
 * @param {Number} minimumValue
*/
CCControlStepper.prototype.setMinimumValue = function(minimumValue) {};
/**
 * @function setMaximumValue(maximumValue)
 * @param {Number} maximumValue
*/
CCControlStepper.prototype.setMaximumValue = function(maximumValue) {};
/**
 * @function setValue(value)
 * @param {Number} value
*/
CCControlStepper.prototype.setValue = function(value) {};
/**
 * @function getValue()
 * @returns {Number}
*/
CCControlStepper.prototype.getValue = function() {return 0;};
/**
 * @function setStepValue(stepValue)
 * @param {Number} stepValue
*/
CCControlStepper.prototype.setStepValue = function(stepValue) {};
/**
 * @function setValueWithSendingEvent(value, send)
 * @param {Number} value
 * @param {Boolean} send
*/
CCControlStepper.prototype.setValueWithSendingEvent = function(value, send) {};
/**
 * @function isContinuous()
 * @returns {Boolean}
*/
CCControlStepper.prototype.isContinuous = function() {return true;};
/**
 * @function update(dt)
 * @param {Number} dt
*/
CCControlStepper.prototype.update = function(dt) {};
/**
 * @function ccTouchBegan(pTouch, pEvent)
 * @param {CCTouch} pTouch
 * @param {CCEvent} pEvent
 * @returns {Boolean}
*/
CCControlStepper.prototype.ccTouchBegan = function(pTouch, pEvent) {return true;};
/**
 * @function ccTouchMoved(pTouch, pEvent)
 * @param {CCTouch} pTouch
 * @param {CCEvent} pEvent
*/
CCControlStepper.prototype.ccTouchMoved = function(pTouch, pEvent) {};
/**
 * @function ccTouchEnded(pTouch, pEvent)
 * @param {CCTouch} pTouch
 * @param {CCEvent} pEvent
*/
CCControlStepper.prototype.ccTouchEnded = function(pTouch, pEvent) {};
extension.kCCControlStepperPartMinus = 0;
extension.kCCControlStepperPartPlus = 1;
extension.kCCControlStepperPartNone = 2;
/**
 * @super CCControl
 * @constructor 
*/
function CCControlSwitch() {};
CCControlSwitch.prototype = new CCControl();
/**
 * @function initWithMaskSprite(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSprite} - maskSprite <b>and</b> args[1] is {CCSprite} - onSprite <b>and</b> args[2] is {CCSprite} - offSprite <b>and</b> args[3] is {CCSprite} - thumbSprite.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSprite} - maskSprite <b>and</b> args[1] is {CCSprite} - onSprite <b>and</b> args[2] is {CCSprite} - offSprite <b>and</b> args[3] is {CCSprite} - thumbSprite <b>and</b> args[4] is {CCLabelTTF} - onLabel <b>and</b> args[5] is {CCLabelTTF} - offLabel.<br />
 * @returns {Boolean}
*/
CCControlSwitch.prototype.initWithMaskSprite = function(args) {return true;};
/**
 * @function switchWithMaskSprite(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSprite} - maskSprite <b>and</b> args[1] is {CCSprite} - onSprite <b>and</b> args[2] is {CCSprite} - offSprite <b>and</b> args[3] is {CCSprite} - thumbSprite.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSprite} - maskSprite <b>and</b> args[1] is {CCSprite} - onSprite <b>and</b> args[2] is {CCSprite} - offSprite <b>and</b> args[3] is {CCSprite} - thumbSprite <b>and</b> args[4] is {CCLabelTTF} - onLabel <b>and</b> args[5] is {CCLabelTTF} - offLabel.<br />
 * @returns {CCControlSwitch}
*/
CCControlSwitch.switchWithMaskSprite = function(args) {return new CCControlSwitch();};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSprite} - maskSprite <b>and</b> args[1] is {CCSprite} - onSprite <b>and</b> args[2] is {CCSprite} - offSprite <b>and</b> args[3] is {CCSprite} - thumbSprite.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSprite} - maskSprite <b>and</b> args[1] is {CCSprite} - onSprite <b>and</b> args[2] is {CCSprite} - offSprite <b>and</b> args[3] is {CCSprite} - thumbSprite <b>and</b> args[4] is {CCLabelTTF} - onLabel <b>and</b> args[5] is {CCLabelTTF} - offLabel.<br />
 * @returns {CCControlSwitch}
*/
CCControlSwitch.create = function(args) {return new CCControlSwitch();};
/**
 * @function setOn(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Boolean} - isOn <b>and</b> args[1] is {Boolean} - animated.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Boolean} - isOn.<br />
*/
CCControlSwitch.prototype.setOn = function(args) {};
/**
 * @function isOn()
 * @returns {Boolean}
*/
CCControlSwitch.prototype.isOn = function() {return true;};
/**
 * @function hasMoved()
 * @returns {Boolean}
*/
CCControlSwitch.prototype.hasMoved = function() {return true;};
/**
 * @function setEnabled(enabled)
 * @param {Boolean} enabled
*/
CCControlSwitch.prototype.setEnabled = function(enabled) {};
/**
 * @function locationFromTouch(touch)
 * @param {CCTouch} touch
 * @returns {CCPoint}
*/
CCControlSwitch.prototype.locationFromTouch = function(touch) {return new CCPoint();};
/**
 * @super Object
 * @constructor 
*/
function RGBA() {};
RGBA.prototype = {};
/**
 * Property r
 * @type Number
*/
RGBA.prototype.r = 0;
/**
 * Property g
 * @type Number
*/
RGBA.prototype.g = 0;
/**
 * Property b
 * @type Number
*/
RGBA.prototype.b = 0;
/**
 * Property a
 * @type Number
*/
RGBA.prototype.a = 0;
/**
 * @super Object
 * @constructor 
*/
function HSV() {};
HSV.prototype = {};
/**
 * Property h
 * @type Number
*/
HSV.prototype.h = 0;
/**
 * Property s
 * @type Number
*/
HSV.prototype.s = 0;
/**
 * Property v
 * @type Number
*/
HSV.prototype.v = 0;
/**
 * @super CCObject
 * @constructor 
 * @param {ccColor3B} s_value
*/
function CCColor3bObject(s_value) {};
CCColor3bObject.prototype = new CCObject();
/**
 * Property value
 * @type ccColor3B
*/
CCColor3bObject.prototype.value = new ccColor3B();
/**
 * @super CCObject
 * @constructor 
*/
function CCControlUtils() {};
CCControlUtils.prototype = new CCObject();
/**
 * @function addSpriteToTargetWithPosAndAnchor(spriteName, target, pos, anchor)
 * @static
 * @param {String} spriteName
 * @param {CCNode} target
 * @param {CCPoint} pos
 * @param {CCPoint} anchor
 * @returns {CCSprite}
*/
CCControlUtils.addSpriteToTargetWithPosAndAnchor = function(spriteName, target, pos, anchor) {return new CCSprite();};
/**
 * @function HSVfromRGB(value)
 * @static
 * @param {RGBA} value
 * @returns {HSV}
*/
CCControlUtils.HSVfromRGB = function(value) {return new HSV();};
/**
 * @function RGBfromHSV(value)
 * @static
 * @param {HSV} value
 * @returns {RGBA}
*/
CCControlUtils.RGBfromHSV = function(value) {return new RGBA();};
/**
 * @function CCRectUnion(src1, src2)
 * @static
 * @param {CCRect} src1
 * @param {CCRect} src2
 * @returns {CCRect}
*/
CCControlUtils.CCRectUnion = function(src1, src2) {return new CCRect();};
/**
 * @super Object
 * @constructor 
*/
function CCEditBoxDelegate() {};
CCEditBoxDelegate.prototype = {};
/**
 * @function editBoxEditingDidBegin(editBox)
 * @param {CCEditBox} editBox
*/
CCEditBoxDelegate.prototype.editBoxEditingDidBegin = function(editBox) {};
/**
 * @function editBoxEditingDidEnd(editBox)
 * @param {CCEditBox} editBox
*/
CCEditBoxDelegate.prototype.editBoxEditingDidEnd = function(editBox) {};
/**
 * @function editBoxTextChanged(editBox, text)
 * @param {CCEditBox} editBox
 * @param {String} text
*/
CCEditBoxDelegate.prototype.editBoxTextChanged = function(editBox, text) {};
/**
 * @function editBoxReturn(editBox)
 * @param {CCEditBox} editBox
*/
CCEditBoxDelegate.prototype.editBoxReturn = function(editBox) {};
/**
 * @super CCControlButton
 * @constructor 
*/
function CCEditBox() {};
CCEditBox.prototype = new CCControlButton();
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSize} - size <b>and</b> args[1] is {CCScale9Sprite} - pNormal9SpriteBg.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSize} - size <b>and</b> args[1] is {CCScale9Sprite} - pNormal9SpriteBg <b>and</b> args[2] is {CCScale9Sprite} - pPressed9SpriteBg.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSize} - size <b>and</b> args[1] is {CCScale9Sprite} - pNormal9SpriteBg <b>and</b> args[2] is {CCScale9Sprite} - pPressed9SpriteBg <b>and</b> args[3] is {CCScale9Sprite} - pDisabled9SpriteBg.<br />
 * @returns {CCEditBox}
*/
CCEditBox.create = function(args) {return new CCEditBox();};
/**
 * @function initWithSizeAndBackgroundSprite(size, pNormal9SpriteBg)
 * @param {CCSize} size
 * @param {CCScale9Sprite} pNormal9SpriteBg
 * @returns {Boolean}
*/
CCEditBox.prototype.initWithSizeAndBackgroundSprite = function(size, pNormal9SpriteBg) {return true;};
/**
 * @function setDelegate(pDelegate)
 * @param {CCEditBoxDelegate} pDelegate
*/
CCEditBox.prototype.setDelegate = function(pDelegate) {};
/**
 * @function setText(pText)
 * @param {String} pText
*/
CCEditBox.prototype.setText = function(pText) {};
/**
 * @function getText()
 * @returns {String}
*/
CCEditBox.prototype.getText = function() {return "";};
/**
 * @function setFontColor(color)
 * @param {ccColor3B} color
*/
CCEditBox.prototype.setFontColor = function(color) {};
/**
 * @function setPlaceholderFontColor(color)
 * @param {ccColor3B} color
*/
CCEditBox.prototype.setPlaceholderFontColor = function(color) {};
/**
 * @function setPlaceHolder(pText)
 * @param {String} pText
*/
CCEditBox.prototype.setPlaceHolder = function(pText) {};
/**
 * @function getPlaceHolder()
 * @returns {String}
*/
CCEditBox.prototype.getPlaceHolder = function() {return "";};
/**
 * @function setInputMode(inputMode)
 * @param {EditBoxInputMode} inputMode
*/
CCEditBox.prototype.setInputMode = function(inputMode) {};
/**
 * @function setMaxLength(maxLength)
 * @param {Number} maxLength
*/
CCEditBox.prototype.setMaxLength = function(maxLength) {};
/**
 * @function getMaxLength()
 * @returns {Number}
*/
CCEditBox.prototype.getMaxLength = function() {return 0;};
/**
 * @function setInputFlag(inputFlag)
 * @param {EditBoxInputFlag} inputFlag
*/
CCEditBox.prototype.setInputFlag = function(inputFlag) {};
/**
 * @function setReturnType(returnType)
 * @param {KeyboardReturnType} returnType
*/
CCEditBox.prototype.setReturnType = function(returnType) {};
/**
 * @function setPosition(pos)
 * @param {CCPoint} pos
*/
CCEditBox.prototype.setPosition = function(pos) {};
/**
 * @function setContentSize(size)
 * @param {CCSize} size
*/
CCEditBox.prototype.setContentSize = function(size) {};
/**
 * @function visit()
*/
CCEditBox.prototype.visit = function() {};
/**
 * @function onExit()
*/
CCEditBox.prototype.onExit = function() {};
/**
 * @function keyboardWillShow(info)
 * @param {CCIMEKeyboardNotificationInfo} info
*/
CCEditBox.prototype.keyboardWillShow = function(info) {};
/**
 * @function keyboardDidShow(info)
 * @param {CCIMEKeyboardNotificationInfo} info
*/
CCEditBox.prototype.keyboardDidShow = function(info) {};
/**
 * @function keyboardWillHide(info)
 * @param {CCIMEKeyboardNotificationInfo} info
*/
CCEditBox.prototype.keyboardWillHide = function(info) {};
/**
 * @function keyboardDidHide(info)
 * @param {CCIMEKeyboardNotificationInfo} info
*/
CCEditBox.prototype.keyboardDidHide = function(info) {};
extension.kKeyboardReturnTypeDefault = 0;
extension.kKeyboardReturnTypeDone = 0;
extension.kKeyboardReturnTypeSend = 0;
extension.kKeyboardReturnTypeSearch = 0;
extension.kKeyboardReturnTypeGo = 0;
extension.kEditBoxInputModeAny = 0;
extension.kEditBoxInputModeEmailAddr = 0;
extension.kEditBoxInputModeNumeric = 0;
extension.kEditBoxInputModePhoneNumber = 0;
extension.kEditBoxInputModeUrl = 0;
extension.kEditBoxInputModeDecimal = 0;
extension.kEditBoxInputModeSingleLine = 0;
extension.kEditBoxInputFlagPassword = 0;
extension.kEditBoxInputFlagSensitive = 0;
extension.kEditBoxInputFlagInitialCapsWord = 0;
extension.kEditBoxInputFlagInitialCapsSentence = 0;
extension.kEditBoxInputFlagInitialCapsAllCharacters = 0;
/**
 * @super CCObject
 * @constructor 
 * @param {Object} target
 * @param {String} action
 * @param {Number} controlEvent
*/
function CCInvocation(target, action, controlEvent) {};
CCInvocation.prototype = new CCObject();
/**
 * @function getAction()
 * @returns {String}
*/
CCInvocation.prototype.getAction = function() {return "";};
/**
 * @function invoke(sender)
 * @param {CCObject} sender
*/
CCInvocation.prototype.invoke = function(sender) {};
/**
 * @super CCNode
 * @constructor 
*/
function CCScale9Sprite() {};
CCScale9Sprite.prototype = new CCNode();
/**
 * @function setContentSize(size)
 * @param {CCSize} size
*/
CCScale9Sprite.prototype.setContentSize = function(size) {};
/**
 * @function visit()
*/
CCScale9Sprite.prototype.visit = function() {};
/**
 * @function init()
 * @returns {Boolean}
*/
CCScale9Sprite.prototype.init = function() {return true;};
/**
 * @function initWithBatchNode(batchnode, rect, capInsets)
 * @param {CCSpriteBatchNode} batchnode
 * @param {CCRect} rect
 * @param {CCRect} capInsets
 * @returns {Boolean}
*/
CCScale9Sprite.prototype.initWithBatchNode = function(batchnode, rect, capInsets) {return true;};
/**
 * @function initWithFile(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - file <b>and</b> args[1] is {CCRect} - rect <b>and</b> args[2] is {CCRect} - capInsets.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - file <b>and</b> args[1] is {CCRect} - rect.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCRect} - capInsets <b>and</b> args[1] is {String} - file.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - file.<br />
 * @returns {Boolean}
*/
CCScale9Sprite.prototype.initWithFile = function(args) {return true;};
/**
 * @function spriteWithFile(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - file <b>and</b> args[1] is {CCRect} - rect <b>and</b> args[2] is {CCRect} - capInsets.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - file <b>and</b> args[1] is {CCRect} - rect.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCRect} - capInsets <b>and</b> args[1] is {String} - file.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - file.<br />
 * @returns {CCScale9Sprite}
*/
CCScale9Sprite.spriteWithFile = function(args) {return new CCScale9Sprite();};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - file <b>and</b> args[1] is {CCRect} - rect <b>and</b> args[2] is {CCRect} - capInsets.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - file <b>and</b> args[1] is {CCRect} - rect.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCRect} - capInsets <b>and</b> args[1] is {String} - file.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - file.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * @returns {CCScale9Sprite}
*/
CCScale9Sprite.create = function(args) {return new CCScale9Sprite();};
/**
 * @function initWithSpriteFrame(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSpriteFrame} - spriteFrame <b>and</b> args[1] is {CCRect} - capInsets.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSpriteFrame} - spriteFrame.<br />
 * @returns {Boolean}
*/
CCScale9Sprite.prototype.initWithSpriteFrame = function(args) {return true;};
/**
 * @function spriteWithSpriteFrame(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSpriteFrame} - spriteFrame <b>and</b> args[1] is {CCRect} - capInsets.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSpriteFrame} - spriteFrame.<br />
 * @returns {CCScale9Sprite}
*/
CCScale9Sprite.spriteWithSpriteFrame = function(args) {return new CCScale9Sprite();};
/**
 * @function createWithSpriteFrame(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSpriteFrame} - spriteFrame <b>and</b> args[1] is {CCRect} - capInsets.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSpriteFrame} - spriteFrame.<br />
 * @returns {CCScale9Sprite}
*/
CCScale9Sprite.createWithSpriteFrame = function(args) {return new CCScale9Sprite();};
/**
 * @function initWithSpriteFrameName(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - spriteFrameName <b>and</b> args[1] is {CCRect} - capInsets.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - spriteFrameName.<br />
 * @returns {Boolean}
*/
CCScale9Sprite.prototype.initWithSpriteFrameName = function(args) {return true;};
/**
 * @function spriteWithSpriteFrameName(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - spriteFrameName <b>and</b> args[1] is {CCRect} - capInsets.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - spriteFrameName.<br />
 * @returns {CCScale9Sprite}
*/
CCScale9Sprite.spriteWithSpriteFrameName = function(args) {return new CCScale9Sprite();};
/**
 * @function createWithSpriteFrameName(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - spriteFrameName <b>and</b> args[1] is {CCRect} - capInsets.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - spriteFrameName.<br />
 * @returns {CCScale9Sprite}
*/
CCScale9Sprite.createWithSpriteFrameName = function(args) {return new CCScale9Sprite();};
/**
 * @function resizableSpriteWithCapInsets(capInsets)
 * @param {CCRect} capInsets
 * @returns {CCScale9Sprite}
*/
CCScale9Sprite.prototype.resizableSpriteWithCapInsets = function(capInsets) {return new CCScale9Sprite();};
/**
 * @function node()
 * @static
 * @returns {CCScale9Sprite}
*/
CCScale9Sprite.node = function() {return new CCScale9Sprite();};
/**
 * @function setOpacityModifyRGB(bValue)
 * @param {Boolean} bValue
*/
CCScale9Sprite.prototype.setOpacityModifyRGB = function(bValue) {};
/**
 * @function isOpacityModifyRGB()
 * @returns {Boolean}
*/
CCScale9Sprite.prototype.isOpacityModifyRGB = function() {return true;};
/**
 * @function updateWithBatchNode(batchnode, rect, rotated, capInsets)
 * @param {CCSpriteBatchNode} batchnode
 * @param {CCRect} rect
 * @param {Boolean} rotated
 * @param {CCRect} capInsets
 * @returns {Boolean}
*/
CCScale9Sprite.prototype.updateWithBatchNode = function(batchnode, rect, rotated, capInsets) {return true;};
/**
 * @function setSpriteFrame(spriteFrame)
 * @param {CCSpriteFrame} spriteFrame
*/
CCScale9Sprite.prototype.setSpriteFrame = function(spriteFrame) {};
/**
 * Property OriginalSize
 * @type CCSize
*/
CCScale9Sprite.prototype.OriginalSize = new CCSize();
/**
 * Property PreferredSize
 * @type CCSize
*/
CCScale9Sprite.prototype.PreferredSize = new CCSize();
/**
 * Property Opacity
 * @type Number
*/
CCScale9Sprite.prototype.Opacity = 0;
/**
 * Property Color
 * @type ccColor3B
*/
CCScale9Sprite.prototype.Color = new ccColor3B();
/**
 * Property CapInsets
 * @type CCRect
*/
CCScale9Sprite.prototype.CapInsets = new CCRect();
/**
 * Property InsetLeft
 * @type Number
*/
CCScale9Sprite.prototype.InsetLeft = 0;
/**
 * Property InsetTop
 * @type Number
*/
CCScale9Sprite.prototype.InsetTop = 0;
/**
 * Property InsetRight
 * @type Number
*/
CCScale9Sprite.prototype.InsetRight = 0;
/**
 * Property InsetBottom
 * @type Number
*/
CCScale9Sprite.prototype.InsetBottom = 0;
/**
 * @super Object
 * @constructor 
*/
function CCScrollViewDelegate() {};
CCScrollViewDelegate.prototype = {};
/**
 * @function scrollViewDidScroll(view)
 * @param {CCScrollView} view
*/
CCScrollViewDelegate.prototype.scrollViewDidScroll = function(view) {};
/**
 * @function scrollViewDidZoom(view)
 * @param {CCScrollView} view
*/
CCScrollViewDelegate.prototype.scrollViewDidZoom = function(view) {};
/**
 * @super CCLayer
 * @constructor 
*/
function CCScrollView() {};
CCScrollView.prototype = new CCLayer();
/**
 * @function init()
 * @returns {Boolean}
*/
CCScrollView.prototype.init = function() {return true;};
/**
 * @function registerWithTouchDispatcher()
*/
CCScrollView.prototype.registerWithTouchDispatcher = function() {};
/**
 * @function viewWithViewSize(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSize} - size.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSize} - size <b>and</b> args[1] is {CCNode} - container.<br />
 * @returns {CCScrollView}
*/
CCScrollView.viewWithViewSize = function(args) {return new CCScrollView();};
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSize} - size.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSize} - size <b>and</b> args[1] is {CCNode} - container.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * @returns {CCScrollView}
*/
CCScrollView.create = function(args) {return new CCScrollView();};
/**
 * @function node()
 * @static
 * @returns {CCScrollView}
*/
CCScrollView.node = function() {return new CCScrollView();};
/**
 * @function initWithViewSize(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSize} - size.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCSize} - size <b>and</b> args[1] is {CCNode} - container <i>- default is NULL -</i> .<br />
 * @returns {Boolean}
*/
CCScrollView.prototype.initWithViewSize = function(args) {return true;};
/**
 * @function setContentOffset(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCPoint} - offset.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCPoint} - offset <b>and</b> args[1] is {Boolean} - animated <i>- default is false -</i> .<br />
*/
CCScrollView.prototype.setContentOffset = function(args) {};
/**
 * @function getContentOffset()
 * @returns {CCPoint}
*/
CCScrollView.prototype.getContentOffset = function() {return new CCPoint();};
/**
 * @function setContentOffsetInDuration(offset, dt)
 * @param {CCPoint} offset
 * @param {Number} dt
*/
CCScrollView.prototype.setContentOffsetInDuration = function(offset, dt) {};
/**
 * @function setZoomScale(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - s.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - s <b>and</b> args[1] is {Boolean} - animated.<br />
*/
CCScrollView.prototype.setZoomScale = function(args) {};
/**
 * @function getZoomScale()
 * @returns {Number}
*/
CCScrollView.prototype.getZoomScale = function() {return 0;};
/**
 * @function setZoomScaleInDuration(s, dt)
 * @param {Number} s
 * @param {Number} dt
*/
CCScrollView.prototype.setZoomScaleInDuration = function(s, dt) {};
/**
 * @function minContainerOffset()
 * @returns {CCPoint}
*/
CCScrollView.prototype.minContainerOffset = function() {return new CCPoint();};
/**
 * @function maxContainerOffset()
 * @returns {CCPoint}
*/
CCScrollView.prototype.maxContainerOffset = function() {return new CCPoint();};
/**
 * @function isNodeVisible(node)
 * @param {CCNode} node
 * @returns {Boolean}
*/
CCScrollView.prototype.isNodeVisible = function(node) {return true;};
/**
 * @function pause(sender)
 * @param {CCObject} sender
*/
CCScrollView.prototype.pause = function(sender) {};
/**
 * @function resume(sender)
 * @param {CCObject} sender
*/
CCScrollView.prototype.resume = function(sender) {};
/**
 * @function isDragging()
 * @returns {Boolean}
*/
CCScrollView.prototype.isDragging = function() {return true;};
/**
 * @function isTouchMoved()
 * @returns {Boolean}
*/
CCScrollView.prototype.isTouchMoved = function() {return true;};
/**
 * @function isBounceable()
 * @returns {Boolean}
*/
CCScrollView.prototype.isBounceable = function() {return true;};
/**
 * @function setBounceable(bBounceable)
 * @param {Boolean} bBounceable
*/
CCScrollView.prototype.setBounceable = function(bBounceable) {};
/**
 * @function getViewSize()
 * @returns {CCSize}
*/
CCScrollView.prototype.getViewSize = function() {return new CCSize();};
/**
 * @function setViewSize(size)
 * @param {CCSize} size
*/
CCScrollView.prototype.setViewSize = function(size) {};
/**
 * @function getContainer()
 * @returns {CCNode}
*/
CCScrollView.prototype.getContainer = function() {return new CCNode();};
/**
 * @function setContainer(pContainer)
 * @param {CCNode} pContainer
*/
CCScrollView.prototype.setContainer = function(pContainer) {};
/**
 * @function getDirection()
 * @returns {CCScrollViewDirection}
*/
CCScrollView.prototype.getDirection = function() {return new CCScrollViewDirection();};
/**
 * @function setDirection(eDirection)
 * @param {CCScrollViewDirection} eDirection
*/
CCScrollView.prototype.setDirection = function(eDirection) {};
/**
 * @function getDelegate()
 * @returns {CCScrollViewDelegate}
*/
CCScrollView.prototype.getDelegate = function() {return new CCScrollViewDelegate();};
/**
 * @function setDelegate(pDelegate)
 * @param {CCScrollViewDelegate} pDelegate
*/
CCScrollView.prototype.setDelegate = function(pDelegate) {};
/**
 * @function isClippingToBounds()
 * @returns {Boolean}
*/
CCScrollView.prototype.isClippingToBounds = function() {return true;};
/**
 * @function setClippingToBounds(bClippingToBounds)
 * @param {Boolean} bClippingToBounds
*/
CCScrollView.prototype.setClippingToBounds = function(bClippingToBounds) {};
/**
 * @function visit()
*/
CCScrollView.prototype.visit = function() {};
/**
 * @function addChild(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - child <b>and</b> args[1] is {Number} - zOrder <b>and</b> args[2] is {Number} - tag.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - child <b>and</b> args[1] is {Number} - zOrder.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNode} - child.<br />
*/
CCScrollView.prototype.addChild = function(args) {};
/**
 * @function setTouchEnabled(e)
 * @param {Boolean} e
*/
CCScrollView.prototype.setTouchEnabled = function(e) {};
extension.kCCScrollViewDirectionNone = -1;
extension.kCCScrollViewDirectionHorizontal = 0;
extension.kCCScrollViewDirectionVertical = 0;
extension.kCCScrollViewDirectionBoth = 0;
/**
 * @super Object
 * @constructor 
*/
function CCSortableObject() {};
CCSortableObject.prototype = {};
/**
 * @function setObjectID(objectID)
 * @param {Number} objectID
*/
CCSortableObject.prototype.setObjectID = function(objectID) {};
/**
 * @function getObjectID()
 * @returns {Number}
*/
CCSortableObject.prototype.getObjectID = function() {return 0;};
/**
 * @super CCArray
 * @constructor 
*/
function CCArrayForObjectSorting() {};
CCArrayForObjectSorting.prototype = new CCArray();
/**
 * @function insertSortedObject(object)
 * @param {CCSortableObject} object
*/
CCArrayForObjectSorting.prototype.insertSortedObject = function(object) {};
/**
 * @function removeSortedObject(object)
 * @param {CCSortableObject} object
*/
CCArrayForObjectSorting.prototype.removeSortedObject = function(object) {};
/**
 * @function setObjectID_ofSortedObject(tag, object)
 * @param {Number} tag
 * @param {CCSortableObject} object
*/
CCArrayForObjectSorting.prototype.setObjectID_ofSortedObject = function(tag, object) {};
/**
 * @function objectWithObjectID(tag)
 * @param {Number} tag
 * @returns {CCSortableObject}
*/
CCArrayForObjectSorting.prototype.objectWithObjectID = function(tag) {return new CCSortableObject();};
/**
 * @function indexOfSortedObject(obj)
 * @param {CCSortableObject} obj
 * @returns {Number}
*/
CCArrayForObjectSorting.prototype.indexOfSortedObject = function(obj) {return 0;};
/**
 * @super CCLayer
 * @constructor 
*/
function CCSpacer() {};
CCSpacer.prototype = new CCLayer();
/**
 * @function verticalSpacer(space)
 * @static
 * @param {Number} space
 * @returns {CCSpacer}
*/
CCSpacer.verticalSpacer = function(space) {return new CCSpacer();};
/**
 * @function horizontalSpacer(space)
 * @static
 * @param {Number} space
 * @returns {CCSpacer}
*/
CCSpacer.horizontalSpacer = function(space) {return new CCSpacer();};
/**
 * @super CCScrollViewDelegate
 * @constructor 
*/
function CCTableViewDelegate() {};
CCTableViewDelegate.prototype = new CCScrollViewDelegate();
/**
 * @function tableCellTouched(table, cell)
 * @param {CCTableView} table
 * @param {CCTableViewCell} cell
*/
CCTableViewDelegate.prototype.tableCellTouched = function(table, cell) {};
/**
 * @super CCScrollViewDelegate
 * @constructor 
*/
function CCTableViewDataSource() {};
CCTableViewDataSource.prototype = new CCScrollViewDelegate();
/**
 * @function cellSizeForTable(table)
 * @param {CCTableView} table
 * @returns {CCSize}
*/
CCTableViewDataSource.prototype.cellSizeForTable = function(table) {return new CCSize();};
/**
 * @function tableCellAtIndex(table, idx)
 * @param {CCTableView} table
 * @param {Number} idx
 * @returns {CCTableViewCell}
*/
CCTableViewDataSource.prototype.tableCellAtIndex = function(table, idx) {return new CCTableViewCell();};
/**
 * @function numberOfCellsInTableView(table)
 * @param {CCTableView} table
 * @returns {Number}
*/
CCTableViewDataSource.prototype.numberOfCellsInTableView = function(table) {return 0;};
/**
 * @super CCScrollView
 * @constructor 
*/
function CCTableView() {};
CCTableView.prototype = new CCScrollView();
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCTableViewDataSource} - dataSource <b>and</b> args[1] is {CCSize} - size.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCTableViewDataSource} - dataSource <b>and</b> args[1] is {CCSize} - size <b>and</b> args[2] is {CCNode} - container.<br />
 * @returns {CCTableView}
*/
CCTableView.create = function(args) {return new CCTableView();};
/**
 * @function getDataSource()
 * @returns {CCTableViewDataSource}
*/
CCTableView.prototype.getDataSource = function() {return new CCTableViewDataSource();};
/**
 * @function setDataSource(source)
 * @param {CCTableViewDataSource} source
*/
CCTableView.prototype.setDataSource = function(source) {};
/**
 * @function getDelegate()
 * @returns {CCTableViewDelegate}
*/
CCTableView.prototype.getDelegate = function() {return new CCTableViewDelegate();};
/**
 * @function setDelegate(pDelegate)
 * @param {CCTableViewDelegate} pDelegate
*/
CCTableView.prototype.setDelegate = function(pDelegate) {};
/**
 * @function setVerticalFillOrder(order)
 * @param {CCTableViewVerticalFillOrder} order
*/
CCTableView.prototype.setVerticalFillOrder = function(order) {};
/**
 * @function getVerticalFillOrder()
 * @returns {CCTableViewVerticalFillOrder}
*/
CCTableView.prototype.getVerticalFillOrder = function() {return new CCTableViewVerticalFillOrder();};
/**
 * @function initWithViewSize(size, container)
 * @param {CCSize} size
 * @param {CCNode} container default is <b>NULL</b>
 * @returns {Boolean}
*/
CCTableView.prototype.initWithViewSize = function(size, container) {return true;};
/**
 * @function updateCellAtIndex(idx)
 * @param {Number} idx
*/
CCTableView.prototype.updateCellAtIndex = function(idx) {};
/**
 * @function insertCellAtIndex(idx)
 * @param {Number} idx
*/
CCTableView.prototype.insertCellAtIndex = function(idx) {};
/**
 * @function removeCellAtIndex(idx)
 * @param {Number} idx
*/
CCTableView.prototype.removeCellAtIndex = function(idx) {};
/**
 * @function reloadData()
*/
CCTableView.prototype.reloadData = function() {};
/**
 * @function dequeueCell()
 * @returns {CCTableViewCell}
*/
CCTableView.prototype.dequeueCell = function() {return new CCTableViewCell();};
/**
 * @function cellAtIndex(idx)
 * @param {Number} idx
 * @returns {CCTableViewCell}
*/
CCTableView.prototype.cellAtIndex = function(idx) {return new CCTableViewCell();};
/**
 * @function scrollViewDidScroll(view)
 * @param {CCScrollView} view
*/
CCTableView.prototype.scrollViewDidScroll = function(view) {};
/**
 * @function scrollViewDidZoom(view)
 * @param {CCScrollView} view
*/
CCTableView.prototype.scrollViewDidZoom = function(view) {};
/**
 * @function ccTouchEnded(pTouch, pEvent)
 * @param {CCTouch} pTouch
 * @param {CCEvent} pEvent
*/
CCTableView.prototype.ccTouchEnded = function(pTouch, pEvent) {};
extension.kCCTableViewFillTopDown = 0;
extension.kCCTableViewFillBottomUp = 1;
/**
 * @super CCNode
 * @constructor 
*/
function CCTableViewCell() {};
CCTableViewCell.prototype = new CCNode();
/**
 * @function getIdx()
 * @returns {Number}
*/
CCTableViewCell.prototype.getIdx = function() {return 0;};
/**
 * @function setIdx(uIdx)
 * @param {Number} uIdx
*/
CCTableViewCell.prototype.setIdx = function(uIdx) {};
/**
 * @function reset()
*/
CCTableViewCell.prototype.reset = function() {};
/**
 * @function setObjectID(uIdx)
 * @param {Number} uIdx
*/
CCTableViewCell.prototype.setObjectID = function(uIdx) {};
/**
 * @function getObjectID()
 * @returns {Number}
*/
CCTableViewCell.prototype.getObjectID = function() {return 0;};
/**
 * @super Object
 * @constructor 
*/
function CCBAnimationManagerDelegate() {};
CCBAnimationManagerDelegate.prototype = {};
/**
 * @function completedAnimationSequenceNamed(name)
 * @param {String} name
*/
CCBAnimationManagerDelegate.prototype.completedAnimationSequenceNamed = function(name) {};
/**
 * @super CCObject
 * @constructor 
*/
function CCBAnimationManager() {};
CCBAnimationManager.prototype = new CCObject();
/**
 * @function init()
 * @returns {Boolean}
*/
CCBAnimationManager.prototype.init = function() {return true;};
/**
 * @function getSequences()
 * @returns {CCArray}
*/
CCBAnimationManager.prototype.getSequences = function() {return new CCArray();};
/**
 * @function getAutoPlaySequenceId()
 * @returns {Number}
*/
CCBAnimationManager.prototype.getAutoPlaySequenceId = function() {return 0;};
/**
 * @function setAutoPlaySequenceId(autoPlaySequenceId)
 * @param {Number} autoPlaySequenceId
*/
CCBAnimationManager.prototype.setAutoPlaySequenceId = function(autoPlaySequenceId) {};
/**
 * @function getRootNode()
 * @returns {CCNode}
*/
CCBAnimationManager.prototype.getRootNode = function() {return new CCNode();};
/**
 * @function setRootNode(pRootNode)
 * @param {CCNode} pRootNode
*/
CCBAnimationManager.prototype.setRootNode = function(pRootNode) {};
/**
 * @function getRootContainerSize()
 * @returns {CCSize}
*/
CCBAnimationManager.prototype.getRootContainerSize = function() {return new CCSize();};
/**
 * @function setRootContainerSize(rootContainerSize)
 * @param {CCSize} rootContainerSize
*/
CCBAnimationManager.prototype.setRootContainerSize = function(rootContainerSize) {};
/**
 * @function getDelegate()
 * @returns {CCBAnimationManagerDelegate}
*/
CCBAnimationManager.prototype.getDelegate = function() {return new CCBAnimationManagerDelegate();};
/**
 * @function setDelegate(pDelegate)
 * @param {CCBAnimationManagerDelegate} pDelegate
*/
CCBAnimationManager.prototype.setDelegate = function(pDelegate) {};
/**
 * @function getJSDelegate()
 * @returns {Object}
*/
CCBAnimationManager.prototype.getJSDelegate = function() {return new Object();};
/**
 * @function setJSDelegate(target)
 * @param {Object} target
*/
CCBAnimationManager.prototype.setJSDelegate = function(target) {};
/**
 * @function getRunningSequenceName()
 * @returns {String}
*/
CCBAnimationManager.prototype.getRunningSequenceName = function() {return "";};
/**
 * @function getContainerSize(pNode)
 * @param {CCNode} pNode
 * @returns {CCSize}
*/
CCBAnimationManager.prototype.getContainerSize = function(pNode) {return new CCSize();};
/**
 * @function addNode(pNode, pSeq)
 * @param {CCNode} pNode
 * @param {CCDictionary} pSeq
*/
CCBAnimationManager.prototype.addNode = function(pNode, pSeq) {};
/**
 * @function setBaseValue(pValue, pNode, pPropName)
 * @param {CCObject} pValue
 * @param {CCNode} pNode
 * @param {String} pPropName
*/
CCBAnimationManager.prototype.setBaseValue = function(pValue, pNode, pPropName) {};
/**
 * @function runAnimations(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pName <b>and</b> args[1] is {Number} - fTweenDuration.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pName.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - nSeqId <b>and</b> args[1] is {Number} - fTweenDuraiton.<br />
*/
CCBAnimationManager.prototype.runAnimations = function(args) {};
/**
 * @function debug()
*/
CCBAnimationManager.prototype.debug = function() {};
/**
 * @super CCActionInstant
 * @constructor 
*/
function CCBSetSpriteFrame() {};
CCBSetSpriteFrame.prototype = new CCActionInstant();
/**
 * @function create(pSpriteFrame)
 * @static
 * @param {CCSpriteFrame} pSpriteFrame
 * @returns {CCBSetSpriteFrame}
*/
CCBSetSpriteFrame.create = function(pSpriteFrame) {return new CCBSetSpriteFrame();};
/**
 * @function initWithSpriteFrame(pSpriteFrame)
 * @param {CCSpriteFrame} pSpriteFrame
 * @returns {Boolean}
*/
CCBSetSpriteFrame.prototype.initWithSpriteFrame = function(pSpriteFrame) {return true;};
/**
 * @function update(time)
 * @param {Number} time
*/
CCBSetSpriteFrame.prototype.update = function(time) {};
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCBSetSpriteFrame.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @super CCActionInterval
 * @constructor 
*/
function CCBRotateTo() {};
CCBRotateTo.prototype = new CCActionInterval();
/**
 * @function create(fDuration, fAngle)
 * @static
 * @param {Number} fDuration
 * @param {Number} fAngle
 * @returns {CCBRotateTo}
*/
CCBRotateTo.create = function(fDuration, fAngle) {return new CCBRotateTo();};
/**
 * @function initWithDuration(fDuration, fAngle)
 * @param {Number} fDuration
 * @param {Number} fAngle
 * @returns {Boolean}
*/
CCBRotateTo.prototype.initWithDuration = function(fDuration, fAngle) {return true;};
/**
 * @function update(time)
 * @param {Number} time
*/
CCBRotateTo.prototype.update = function(time) {};
/**
 * @function copyWithZone(pZone)
 * @param {CCZone} pZone
 * @returns {CCObject}
*/
CCBRotateTo.prototype.copyWithZone = function(pZone) {return new CCObject();};
/**
 * @function startWithTarget(pNode)
 * @param {CCNode} pNode
*/
CCBRotateTo.prototype.startWithTarget = function(pNode) {};
/**
 * @super CCNodeLoader
 * @constructor 
*/
function CCBFileLoader() {};
CCBFileLoader.prototype = new CCNodeLoader();
/**
 * @function loader()
 * @returns {CCBFileLoader}
*/
CCBFileLoader.prototype.loader = function() {return new CCBFileLoader();};
/**
 * @super CCObject
 * @constructor 
*/
function CCBKeyframe() {};
CCBKeyframe.prototype = new CCObject();
/**
 * @function getValue()
 * @returns {CCObject}
*/
CCBKeyframe.prototype.getValue = function() {return new CCObject();};
/**
 * @function setValue(pValue)
 * @param {CCObject} pValue
*/
CCBKeyframe.prototype.setValue = function(pValue) {};
/**
 * @function getTime()
 * @returns {Number}
*/
CCBKeyframe.prototype.getTime = function() {return 0;};
/**
 * @function setTime(fTime)
 * @param {Number} fTime
*/
CCBKeyframe.prototype.setTime = function(fTime) {};
/**
 * @function getEasingType()
 * @returns {Number}
*/
CCBKeyframe.prototype.getEasingType = function() {return 0;};
/**
 * @function setEasingType(nEasingType)
 * @param {Number} nEasingType
*/
CCBKeyframe.prototype.setEasingType = function(nEasingType) {};
/**
 * @function getEasingOpt()
 * @returns {Number}
*/
CCBKeyframe.prototype.getEasingOpt = function() {return 0;};
/**
 * @function setEasingOpt(fEasingOpt)
 * @param {Number} fEasingOpt
*/
CCBKeyframe.prototype.setEasingOpt = function(fEasingOpt) {};
/**
 * @super Object
 * @constructor 
*/
function CCBMemberVariableAssigner() {};
CCBMemberVariableAssigner.prototype = {};
/**
 * @function onAssignCCBMemberVariable(pTarget, pMemberVariableName, pNode)
 * @param {CCObject} pTarget
 * @param {String} pMemberVariableName
 * @param {CCNode} pNode
 * @returns {Boolean}
*/
CCBMemberVariableAssigner.prototype.onAssignCCBMemberVariable = function(pTarget, pMemberVariableName, pNode) {return true;};
/**
 * @super CCObject
 * @constructor 
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {CCNodeLoaderLibrary} - pCCNodeLoaderLibrary.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter.<br />
*/
function CCBReader(args) {};
CCBReader.prototype = new CCObject();
/**
 * @function readNodeGraphFromFile(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pCCBFileName.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pCCBFileName <b>and</b> args[1] is {CCObject} - pOwner.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pCCBFileName <b>and</b> args[1] is {CCObject} - pOwner <b>and</b> args[2] is {CCSize} - parentSize.<br />
 * @returns {CCNode}
*/
CCBReader.prototype.readNodeGraphFromFile = function(args) {return new CCNode();};
/**
 * @function readNodeGraphFromData(pData, pOwner, parentSize)
 * @param {InputStream} pData
 * @param {CCObject} pOwner
 * @param {CCSize} parentSize
 * @returns {CCNode}
*/
CCBReader.prototype.readNodeGraphFromData = function(pData, pOwner, parentSize) {return new CCNode();};
/**
 * @function createSceneWithNodeGraphFromFile(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pCCBFileName.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pCCBFileName <b>and</b> args[1] is {CCObject} - pOwner.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pCCBFileName <b>and</b> args[1] is {CCObject} - pOwner <b>and</b> args[2] is {CCSize} - parentSize.<br />
 * @returns {CCScene}
*/
CCBReader.prototype.createSceneWithNodeGraphFromFile = function(args) {return new CCScene();};
/**
 * @function getAnimationManager()
 * @returns {CCBAnimationManager}
*/
CCBReader.prototype.getAnimationManager = function() {return new CCBAnimationManager();};
/**
 * @function setAnimationManager(pAnimationManager)
 * @param {CCBAnimationManager} pAnimationManager
*/
CCBReader.prototype.setAnimationManager = function(pAnimationManager) {};
/**
 * @function getOwner()
 * @returns {CCObject}
*/
CCBReader.prototype.getOwner = function() {return new CCObject();};
/**
 * @function getResolutionScale()
 * @static
 * @returns {Number}
*/
CCBReader.getResolutionScale = function() {return 0;};
/**
 * @function readFileWithCleanUp(bCleanUp, am)
 * @param {Boolean} bCleanUp
 * @param {CCDictionary} am
 * @returns {CCNode}
*/
CCBReader.prototype.readFileWithCleanUp = function(bCleanUp, am) {return new CCNode();};
/**
 * @super CCObject
 * @constructor 
*/
function CCBSequence() {};
CCBSequence.prototype = new CCObject();
/**
 * @function getDuration()
 * @returns {Number}
*/
CCBSequence.prototype.getDuration = function() {return 0;};
/**
 * @function setDuration(fDuration)
 * @param {Number} fDuration
*/
CCBSequence.prototype.setDuration = function(fDuration) {};
/**
 * @function getName()
 * @returns {String}
*/
CCBSequence.prototype.getName = function() {return "";};
/**
 * @function setName(pName)
 * @param {String} pName
*/
CCBSequence.prototype.setName = function(pName) {};
/**
 * @function getSequenceId()
 * @returns {Number}
*/
CCBSequence.prototype.getSequenceId = function() {return 0;};
/**
 * @function setSequenceId(nSequenceId)
 * @param {Number} nSequenceId
*/
CCBSequence.prototype.setSequenceId = function(nSequenceId) {};
/**
 * @function getChainedSequenceId()
 * @returns {Number}
*/
CCBSequence.prototype.getChainedSequenceId = function() {return 0;};
/**
 * @function setChainedSequenceId(nChainedSequenceId)
 * @param {Number} nChainedSequenceId
*/
CCBSequence.prototype.setChainedSequenceId = function(nChainedSequenceId) {};
/**
 * @super CCObject
 * @constructor 
*/
function CCBSequenceProperty() {};
CCBSequenceProperty.prototype = new CCObject();
/**
 * @function init()
 * @returns {Boolean}
*/
CCBSequenceProperty.prototype.init = function() {return true;};
/**
 * @function getName()
 * @returns {String}
*/
CCBSequenceProperty.prototype.getName = function() {return "";};
/**
 * @function setName(pName)
 * @param {String} pName
*/
CCBSequenceProperty.prototype.setName = function(pName) {};
/**
 * @function getType()
 * @returns {Number}
*/
CCBSequenceProperty.prototype.getType = function() {return 0;};
/**
 * @function setType(nType)
 * @param {Number} nType
*/
CCBSequenceProperty.prototype.setType = function(nType) {};
/**
 * @function getKeyframes()
 * @returns {CCArray}
*/
CCBSequenceProperty.prototype.getKeyframes = function() {return new CCArray();};
/**
 * @super CCObject
 * @constructor 
*/
function ccColor3BWapper() {};
ccColor3BWapper.prototype = new CCObject();
/**
 * @function create(color)
 * @static
 * @param {ccColor3B} color
 * @returns {ccColor3BWapper}
*/
ccColor3BWapper.create = function(color) {return new ccColor3BWapper();};
/**
 * @function getColor()
 * @returns {ccColor3B}
*/
ccColor3BWapper.prototype.getColor = function() {return new ccColor3B();};
/**
 * @super CCObject
 * @constructor 
*/
function CCBValue() {};
CCBValue.prototype = new CCObject();
/**
 * @function create(args)
 * @static
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - nValue.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Boolean} - bValue.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - fValue.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - byte.<br />
 * @returns {CCBValue}
*/
CCBValue.create = function(args) {return new CCBValue();};
/**
 * @function getIntValue()
 * @returns {Number}
*/
CCBValue.prototype.getIntValue = function() {return 0;};
/**
 * @function getFloatValue()
 * @returns {Number}
*/
CCBValue.prototype.getFloatValue = function() {return 0;};
/**
 * @function getBoolValue()
 * @returns {Boolean}
*/
CCBValue.prototype.getBoolValue = function() {return true;};
/**
 * @function getByteValue()
 * @returns {Number}
*/
CCBValue.prototype.getByteValue = function() {return 0;};
/**
 * @super CCControlLoader
 * @constructor 
*/
function CCControlButtonLoader() {};
CCControlButtonLoader.prototype = new CCControlLoader();
/**
 * @function loader()
 * @returns {CCControlButtonLoader}
*/
CCControlButtonLoader.prototype.loader = function() {return new CCControlButtonLoader();};
/**
 * @super CCNodeLoader
 * @constructor 
*/
function CCControlLoader() {};
CCControlLoader.prototype = new CCNodeLoader();
/**
 * @super CCObject
 * @constructor 
*/
function CCData() {};
CCData.prototype = new CCObject();
/**
 * @super CCNodeLoader
 * @constructor 
*/
function CCLabelBMFontLoader() {};
CCLabelBMFontLoader.prototype = new CCNodeLoader();
/**
 * @function loader()
 * @returns {CCLabelBMFontLoader}
*/
CCLabelBMFontLoader.prototype.loader = function() {return new CCLabelBMFontLoader();};
/**
 * @super CCNodeLoader
 * @constructor 
*/
function CCLabelTTFLoader() {};
CCLabelTTFLoader.prototype = new CCNodeLoader();
/**
 * @function loader()
 * @returns {CCLabelTTFLoader}
*/
CCLabelTTFLoader.prototype.loader = function() {return new CCLabelTTFLoader();};
/**
 * @super CCLayerLoader
 * @constructor 
*/
function CCLayerColorLoader() {};
CCLayerColorLoader.prototype = new CCLayerLoader();
/**
 * @function loader()
 * @returns {CCLayerColorLoader}
*/
CCLayerColorLoader.prototype.loader = function() {return new CCLayerColorLoader();};
/**
 * @super CCLayerLoader
 * @constructor 
*/
function CCLayerGradientLoader() {};
CCLayerGradientLoader.prototype = new CCLayerLoader();
/**
 * @function loader()
 * @returns {CCLayerGradientLoader}
*/
CCLayerGradientLoader.prototype.loader = function() {return new CCLayerGradientLoader();};
/**
 * @super CCNodeLoader
 * @constructor 
*/
function CCLayerLoader() {};
CCLayerLoader.prototype = new CCNodeLoader();
/**
 * @function loader()
 * @static
 * @returns {CCLayerLoader}
*/
CCLayerLoader.loader = function() {return new CCLayerLoader();};
/**
 * @super CCMenuItemLoader
 * @constructor 
*/
function CCMenuItemImageLoader() {};
CCMenuItemImageLoader.prototype = new CCMenuItemLoader();
/**
 * @function loader()
 * @returns {CCMenuItemImageLoader}
*/
CCMenuItemImageLoader.prototype.loader = function() {return new CCMenuItemImageLoader();};
/**
 * @super CCNodeLoader
 * @constructor 
*/
function CCMenuItemLoader() {};
CCMenuItemLoader.prototype = new CCNodeLoader();
/**
 * @super CCLayerLoader
 * @constructor 
*/
function CCMenuLoader() {};
CCMenuLoader.prototype = new CCLayerLoader();
/**
 * @function loader()
 * @returns {CCMenuLoader}
*/
CCMenuLoader.prototype.loader = function() {return new CCMenuLoader();};
/**
 * @super Object
 * @constructor 
*/
function BlockData() {};
BlockData.prototype = {};
/**
 * Property mTarget
 * @type CCObject
*/
BlockData.prototype.mTarget = new CCObject();
/**
 * @super Object
 * @constructor 
*/
function BlockCCControlData() {};
BlockCCControlData.prototype = {};
/**
 * Property mTarget
 * @type CCObject
*/
BlockCCControlData.prototype.mTarget = new CCObject();
/**
 * Property mControlEvents
 * @type Number
*/
BlockCCControlData.prototype.mControlEvents = 0;
/**
 * @super CCObject
 * @constructor 
*/
function CCNodeLoader() {};
CCNodeLoader.prototype = new CCObject();
/**
 * @function loader()
 * @static
 * @returns {CCNodeLoader}
*/
CCNodeLoader.loader = function() {return new CCNodeLoader();};
/**
 * @function loadCCNode(pNode, pCCBReader)
 * @param {CCNode} pNode
 * @param {CCBReader} pCCBReader
 * @returns {CCNode}
*/
CCNodeLoader.prototype.loadCCNode = function(pNode, pCCBReader) {return new CCNode();};
/**
 * @function parseProperties(pNode, pParent, pCCBReader)
 * @param {CCNode} pNode
 * @param {CCNode} pParent
 * @param {CCBReader} pCCBReader
*/
CCNodeLoader.prototype.parseProperties = function(pNode, pParent, pCCBReader) {};
/**
 * @super CCObject
 * @constructor 
*/
function CCNodeLoaderLibrary() {};
CCNodeLoaderLibrary.prototype = new CCObject();
/**
 * @function library()
 * @returns {CCNodeLoaderLibrary}
*/
CCNodeLoaderLibrary.prototype.library = function() {return new CCNodeLoaderLibrary();};
/**
 * @function registerDefaultCCNodeLoaders()
*/
CCNodeLoaderLibrary.prototype.registerDefaultCCNodeLoaders = function() {};
/**
 * @function registerCCNodeLoader(pClassName, pCCNodeLoader)
 * @param {String} pClassName
 * @param {CCNodeLoader} pCCNodeLoader
*/
CCNodeLoaderLibrary.prototype.registerCCNodeLoader = function(pClassName, pCCNodeLoader) {};
/**
 * @function unregisterCCNodeLoader(pClassName)
 * @param {String} pClassName
*/
CCNodeLoaderLibrary.prototype.unregisterCCNodeLoader = function(pClassName) {};
/**
 * @function getCCNodeLoader(pClassName)
 * @param {String} pClassName
 * @returns {CCNodeLoader}
*/
CCNodeLoaderLibrary.prototype.getCCNodeLoader = function(pClassName) {return new CCNodeLoader();};
/**
 * @function purge(pDelete)
 * @param {Boolean} pDelete
*/
CCNodeLoaderLibrary.prototype.purge = function(pDelete) {};
/**
 * @function sharedCCNodeLoaderLibrary()
 * @static
 * @returns {CCNodeLoaderLibrary}
*/
CCNodeLoaderLibrary.sharedCCNodeLoaderLibrary = function() {return new CCNodeLoaderLibrary();};
/**
 * @function purgeSharedCCNodeLoaderLibrary()
 * @static
*/
CCNodeLoaderLibrary.purgeSharedCCNodeLoaderLibrary = function() {};
/**
 * @function newDefaultCCNodeLoaderLibrary()
 * @static
 * @returns {CCNodeLoaderLibrary}
*/
CCNodeLoaderLibrary.newDefaultCCNodeLoaderLibrary = function() {return new CCNodeLoaderLibrary();};
/**
 * @super Object
 * @constructor 
*/
function CCNodeLoaderListener() {};
CCNodeLoaderListener.prototype = {};
/**
 * @function onNodeLoaded(pNode, pNodeLoader)
 * @param {CCNode} pNode
 * @param {CCNodeLoader} pNodeLoader
*/
CCNodeLoaderListener.prototype.onNodeLoaded = function(pNode, pNodeLoader) {};
/**
 * @super CCNodeLoader
 * @constructor 
*/
function CCParticleSystemQuadLoader() {};
CCParticleSystemQuadLoader.prototype = new CCNodeLoader();
/**
 * @function loader()
 * @returns {CCParticleSystemQuadLoader}
*/
CCParticleSystemQuadLoader.prototype.loader = function() {return new CCParticleSystemQuadLoader();};
/**
 * @super CCNodeLoader
 * @constructor 
*/
function CCScale9SpriteLoader() {};
CCScale9SpriteLoader.prototype = new CCNodeLoader();
/**
 * @function loader()
 * @returns {CCScale9SpriteLoader}
*/
CCScale9SpriteLoader.prototype.loader = function() {return new CCScale9SpriteLoader();};
/**
 * @super CCNodeLoader
 * @constructor 
*/
function CCScrollViewLoader() {};
CCScrollViewLoader.prototype = new CCNodeLoader();
/**
 * @function loader()
 * @returns {CCScrollViewLoader}
*/
CCScrollViewLoader.prototype.loader = function() {return new CCScrollViewLoader();};
/**
 * @super CCNodeLoader
 * @constructor 
*/
function CCSpriteLoader() {};
CCSpriteLoader.prototype = new CCNodeLoader();
/**
 * @function loader()
 * @returns {CCSpriteLoader}
*/
CCSpriteLoader.prototype.loader = function() {return new CCSpriteLoader();};
/**
 * @super CCObject
 * @constructor 
*/
function CCHttpClient() {};
CCHttpClient.prototype = new CCObject();
/**
 * @function getInstance()
 * @static
 * @returns {CCHttpClient}
*/
CCHttpClient.getInstance = function() {return new CCHttpClient();};
/**
 * @function destroyInstance()
 * @static
*/
CCHttpClient.destroyInstance = function() {};
/**
 * @function send(request)
 * @param {CCHttpRequest} request
*/
CCHttpClient.prototype.send = function(request) {};
/**
 * @function setTimeoutForConnect(value)
 * @param {Number} value
*/
CCHttpClient.prototype.setTimeoutForConnect = function(value) {};
/**
 * @function getTimeoutForConnect()
 * @returns {Number}
*/
CCHttpClient.prototype.getTimeoutForConnect = function() {return 0;};
/**
 * @function setTimeoutForRead(value)
 * @param {Number} value
*/
CCHttpClient.prototype.setTimeoutForRead = function(value) {};
/**
 * @function getTimeoutForRead()
 * @returns {Number}
*/
CCHttpClient.prototype.getTimeoutForRead = function() {return 0;};
/**
 * @super CCObject
 * @constructor 
*/
function CCHttpRequest() {};
CCHttpRequest.prototype = new CCObject();
/**
 * @function setRequestType(type)
 * @param {HttpRequestType} type
*/
CCHttpRequest.prototype.setRequestType = function(type) {};
/**
 * @function getRequestType()
 * @returns {HttpRequestType}
*/
CCHttpRequest.prototype.getRequestType = function() {return new HttpRequestType();};
/**
 * @function setUrl(url)
 * @param {String} url
*/
CCHttpRequest.prototype.setUrl = function(url) {};
/**
 * @function getUrl()
 * @returns {String}
*/
CCHttpRequest.prototype.getUrl = function() {return "";};
/**
 * @function setRequestData(bufferStream)
 * @param {DataBufferedOutputStream} bufferStream
*/
CCHttpRequest.prototype.setRequestData = function(bufferStream) {};
/**
 * @function getRequestDataSize()
 * @returns {Number}
*/
CCHttpRequest.prototype.getRequestDataSize = function() {return 0;};
/**
 * @function setTag(tag)
 * @param {String} tag
*/
CCHttpRequest.prototype.setTag = function(tag) {};
/**
 * @function getTag()
 * @returns {String}
*/
CCHttpRequest.prototype.getTag = function() {return "";};
/**
 * @function setUserJSData(pUserData)
 * @param {Object} pUserData
*/
CCHttpRequest.prototype.setUserJSData = function(pUserData) {};
/**
 * @function getUserJSData()
 * @returns {Object}
*/
CCHttpRequest.prototype.getUserJSData = function() {return new Object();};
/**
 * @function setResponseCallback(pTarget, pSelector)
 * @param {Object} pTarget
 * @param {Object} pSelector
*/
CCHttpRequest.prototype.setResponseCallback = function(pTarget, pSelector) {};
/**
 * @function getTarget()
 * @returns {CCObject}
*/
CCHttpRequest.prototype.getTarget = function() {return new CCObject();};
/**
 * @function setHeader(key, value)
 * @param {String} key
 * @param {String} value
*/
CCHttpRequest.prototype.setHeader = function(key, value) {};
/**
 * @function getHeader(key)
 * @param {String} key
 * @returns {String}
*/
CCHttpRequest.prototype.getHeader = function(key) {return "";};
CCHttpRequest.kHttpGet = 0;
CCHttpRequest.kHttpPost = 1;
CCHttpRequest.kHttpUnkown = 2;
/**
 * @super CCObject
 * @constructor 
 * @param {CCHttpRequest} request
*/
function CCHttpResponse(request) {};
CCHttpResponse.prototype = new CCObject();
/**
 * @function getHttpRequest()
 * @returns {CCHttpRequest}
*/
CCHttpResponse.prototype.getHttpRequest = function() {return new CCHttpRequest();};
/**
 * @function isSucceed()
 * @returns {Boolean}
*/
CCHttpResponse.prototype.isSucceed = function() {return true;};
/**
 * @function getResponseCode()
 * @returns {Number}
*/
CCHttpResponse.prototype.getResponseCode = function() {return 0;};
/**
 * @function setSucceed(value)
 * @param {Boolean} value
*/
CCHttpResponse.prototype.setSucceed = function(value) {};
/**
 * @function setResponseCode(value)
 * @param {Number} value
*/
CCHttpResponse.prototype.setResponseCode = function(value) {};
/**
 * @function setErrorBuffer(value)
 * @param {String} value
*/
CCHttpResponse.prototype.setErrorBuffer = function(value) {};
/**
 * @function getInputStream()
 * @returns {InputStream}
*/
CCHttpResponse.prototype.getInputStream = function() {return new InputStream();};
/**
 * @super Object
 * @constructor 
*/
function SimpleAudioEngine() {};
SimpleAudioEngine.prototype = {};
/**
 * @function sharedEngine()
 * @static
 * @returns {SimpleAudioEngine}
*/
SimpleAudioEngine.sharedEngine = function() {return new SimpleAudioEngine();};
/**
 * @function preloadBackgroundMusic(pszFilePath)
 * @param {String} pszFilePath
*/
SimpleAudioEngine.prototype.preloadBackgroundMusic = function(pszFilePath) {};
/**
 * @function playBackgroundMusic(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pszFilePath.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pszFilePath <b>and</b> args[1] is {Boolean} - bLoop.<br />
*/
SimpleAudioEngine.prototype.playBackgroundMusic = function(args) {};
/**
 * @function stopBackgroundMusic(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> No parameter<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Boolean} - bReleaseData.<br />
*/
SimpleAudioEngine.prototype.stopBackgroundMusic = function(args) {};
/**
 * @function pauseBackgroundMusic()
*/
SimpleAudioEngine.prototype.pauseBackgroundMusic = function() {};
/**
 * @function resumeBackgroundMusic()
*/
SimpleAudioEngine.prototype.resumeBackgroundMusic = function() {};
/**
 * @function rewindBackgroundMusic()
*/
SimpleAudioEngine.prototype.rewindBackgroundMusic = function() {};
/**
 * @function willPlayBackgroundMusic()
 * @returns {Boolean}
*/
SimpleAudioEngine.prototype.willPlayBackgroundMusic = function() {return true;};
/**
 * @function isBackgroundMusicPlaying()
 * @returns {Boolean}
*/
SimpleAudioEngine.prototype.isBackgroundMusicPlaying = function() {return true;};
/**
 * @function getBackgroundMusicVolume()
 * @returns {Number}
*/
SimpleAudioEngine.prototype.getBackgroundMusicVolume = function() {return 0;};
/**
 * @function setBackgroundMusicVolume(volume)
 * @param {Number} volume
*/
SimpleAudioEngine.prototype.setBackgroundMusicVolume = function(volume) {};
/**
 * @function getEffectsVolume()
 * @returns {Number}
*/
SimpleAudioEngine.prototype.getEffectsVolume = function() {return 0;};
/**
 * @function setEffectsVolume(volume)
 * @param {Number} volume
*/
SimpleAudioEngine.prototype.setEffectsVolume = function(volume) {};
/**
 * @function playEffect(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pszFilePath.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {String} - pszFilePath <b>and</b> args[1] is {Boolean} - bLoop.<br />
 * @returns {Number}
*/
SimpleAudioEngine.prototype.playEffect = function(args) {return 0;};
/**
 * @function stopEffect(nSoundId)
 * @param {Number} nSoundId
*/
SimpleAudioEngine.prototype.stopEffect = function(nSoundId) {};
/**
 * @function preloadEffect(pszFilePath)
 * @param {String} pszFilePath
*/
SimpleAudioEngine.prototype.preloadEffect = function(pszFilePath) {};
/**
 * @function unloadEffect(pszFilePath)
 * @param {String} pszFilePath
*/
SimpleAudioEngine.prototype.unloadEffect = function(pszFilePath) {};
/**
 * @super JacosBaseObject
 * @constructor 
*/
function InputStream() {};
InputStream.prototype = new JacosBaseObject();
/**
 * @function readByte()
 * @returns {Number}
*/
InputStream.prototype.readByte = function() {return 0;};
/**
 * @function readSByte()
 * @returns {Number}
*/
InputStream.prototype.readSByte = function() {return 0;};
/**
 * @function readInt32()
 * @returns {Number}
*/
InputStream.prototype.readInt32 = function() {return 0;};
/**
 * @function readUInt32()
 * @returns {Number}
*/
InputStream.prototype.readUInt32 = function() {return 0;};
/**
 * @function readUByte()
 * @returns {Number}
*/
InputStream.prototype.readUByte = function() {return 0;};
/**
 * @function readInt16()
 * @returns {Number}
*/
InputStream.prototype.readInt16 = function() {return 0;};
/**
 * @function readUInt16()
 * @returns {Number}
*/
InputStream.prototype.readUInt16 = function() {return 0;};
/**
 * @function readFloat()
 * @returns {Number}
*/
InputStream.prototype.readFloat = function() {return 0;};
/**
 * @function readDouble()
 * @returns {Number}
*/
InputStream.prototype.readDouble = function() {return 0;};
/**
 * @function readLong()
 * @returns {Number}
*/
InputStream.prototype.readLong = function() {return 0;};
/**
 * @function readUTF8()
 * @returns {String}
*/
InputStream.prototype.readUTF8 = function() {return "";};
/**
 * @function readBoolean()
 * @returns {Boolean}
*/
InputStream.prototype.readBoolean = function() {return true;};
/**
 * @function readByteArray(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {ByteArray} - data.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {ByteArray} - data <b>and</b> args[1] is {Number} - start <b>and</b> args[2] is {Number} - length.<br />
 * @returns {Number}
*/
InputStream.prototype.readByteArray = function(args) {return 0;};
/**
 * @function readByteArrayFully(data, start, length)
 * @param {ByteArray} data
 * @param {Number} start
 * @param {Number} length
 * @returns {Boolean}
*/
InputStream.prototype.readByteArrayFully = function(data, start, length) {return true;};
/**
 * @function available()
 * @returns {Number}
*/
InputStream.prototype.available = function() {return 0;};
/**
 * @function skip(bytes)
 * @param {Number} bytes
*/
InputStream.prototype.skip = function(bytes) {};
/**
 * @super JacosBaseObject
 * @constructor 
*/
function OutputStream() {};
OutputStream.prototype = new JacosBaseObject();
/**
 * @function writeByte(value)
 * @param {Number} value
*/
OutputStream.prototype.writeByte = function(value) {};
/**
 * @function writeSByte(value)
 * @param {Number} value
*/
OutputStream.prototype.writeSByte = function(value) {};
/**
 * @function writeInt32(value)
 * @param {Number} value
*/
OutputStream.prototype.writeInt32 = function(value) {};
/**
 * @function writeUInt32(value)
 * @param {Number} value
*/
OutputStream.prototype.writeUInt32 = function(value) {};
/**
 * @function writeInt16(value)
 * @param {Number} value
*/
OutputStream.prototype.writeInt16 = function(value) {};
/**
 * @function writeUInt16(value)
 * @param {Number} value
*/
OutputStream.prototype.writeUInt16 = function(value) {};
/**
 * @function writeLong(value)
 * @param {Number} value
*/
OutputStream.prototype.writeLong = function(value) {};
/**
 * @function writeFloat(value)
 * @param {Number} value
*/
OutputStream.prototype.writeFloat = function(value) {};
/**
 * @function writeDouble(value)
 * @param {Number} value
*/
OutputStream.prototype.writeDouble = function(value) {};
/**
 * @function writeUTF8(str)
 * @param {String} str
*/
OutputStream.prototype.writeUTF8 = function(str) {};
/**
 * @function writeBoolean(value)
 * @param {Boolean} value
*/
OutputStream.prototype.writeBoolean = function(value) {};
/**
 * @function writeByteArray(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {ByteArray} - data.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {ByteArray} - data <b>and</b> args[1] is {Number} - start <b>and</b> args[2] is {Number} - length.<br />
*/
OutputStream.prototype.writeByteArray = function(args) {};
/**
 * @function flush()
*/
OutputStream.prototype.flush = function() {};
/**
 * @super JacosBaseObject
 * @constructor 
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {Number} - size.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {ByteArray} - data.<br />
*/
function ByteArray(args) {};
ByteArray.prototype = new JacosBaseObject();
/**
 * @function write(index, value)
 * @param {Number} index
 * @param {Number} value
 * @returns {Boolean}
*/
ByteArray.prototype.write = function(index, value) {return true;};
/**
 * @function read(index)
 * @param {Number} index
 * @returns {Number}
*/
ByteArray.prototype.read = function(index) {return 0;};
/**
 * @function getLength()
 * @returns {Number}
*/
ByteArray.prototype.getLength = function() {return 0;};
/**
 * @super OutputStream
 * @constructor 
 * @param {Number} size
*/
function DataBufferedOutputStream(size) {};
DataBufferedOutputStream.prototype = new OutputStream();
/**
 * @function writeByte(value)
 * @param {Number} value
*/
DataBufferedOutputStream.prototype.writeByte = function(value) {};
/**
 * @function writeSByte(value)
 * @param {Number} value
*/
DataBufferedOutputStream.prototype.writeSByte = function(value) {};
/**
 * @function writeInt32(value)
 * @param {Number} value
*/
DataBufferedOutputStream.prototype.writeInt32 = function(value) {};
/**
 * @function writeUInt32(value)
 * @param {Number} value
*/
DataBufferedOutputStream.prototype.writeUInt32 = function(value) {};
/**
 * @function writeInt16(value)
 * @param {Number} value
*/
DataBufferedOutputStream.prototype.writeInt16 = function(value) {};
/**
 * @function writeUInt16(value)
 * @param {Number} value
*/
DataBufferedOutputStream.prototype.writeUInt16 = function(value) {};
/**
 * @function writeLong(value)
 * @param {Number} value
*/
DataBufferedOutputStream.prototype.writeLong = function(value) {};
/**
 * @function writeFloat(value)
 * @param {Number} value
*/
DataBufferedOutputStream.prototype.writeFloat = function(value) {};
/**
 * @function writeDouble(value)
 * @param {Number} value
*/
DataBufferedOutputStream.prototype.writeDouble = function(value) {};
/**
 * @function writeUTF8(str)
 * @param {String} str
*/
DataBufferedOutputStream.prototype.writeUTF8 = function(str) {};
/**
 * @function writeBoolean(value)
 * @param {Boolean} value
*/
DataBufferedOutputStream.prototype.writeBoolean = function(value) {};
/**
 * @function writeByteArray(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {ByteArray} - data.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {ByteArray} - data <b>and</b> args[1] is {Number} - start <b>and</b> args[2] is {Number} - length.<br />
*/
DataBufferedOutputStream.prototype.writeByteArray = function(args) {};
/**
 * @function flush()
*/
DataBufferedOutputStream.prototype.flush = function() {};
/**
 * @function getLength()
 * @returns {Number}
*/
DataBufferedOutputStream.prototype.getLength = function() {return 0;};
/**
 * @function toByteArray()
 * @returns {ByteArray}
*/
DataBufferedOutputStream.prototype.toByteArray = function() {return new ByteArray();};
/**
 * @super InputStream
 * @constructor 
 * @param {ByteArray} data
*/
function DataBufferedInputStream(data) {};
DataBufferedInputStream.prototype = new InputStream();
/**
 * @function readByte()
 * @returns {Number}
*/
DataBufferedInputStream.prototype.readByte = function() {return 0;};
/**
 * @function readSByte()
 * @returns {Number}
*/
DataBufferedInputStream.prototype.readSByte = function() {return 0;};
/**
 * @function readInt32()
 * @returns {Number}
*/
DataBufferedInputStream.prototype.readInt32 = function() {return 0;};
/**
 * @function readUInt32()
 * @returns {Number}
*/
DataBufferedInputStream.prototype.readUInt32 = function() {return 0;};
/**
 * @function readUByte()
 * @returns {Number}
*/
DataBufferedInputStream.prototype.readUByte = function() {return 0;};
/**
 * @function readInt16()
 * @returns {Number}
*/
DataBufferedInputStream.prototype.readInt16 = function() {return 0;};
/**
 * @function readUInt16()
 * @returns {Number}
*/
DataBufferedInputStream.prototype.readUInt16 = function() {return 0;};
/**
 * @function readFloat()
 * @returns {Number}
*/
DataBufferedInputStream.prototype.readFloat = function() {return 0;};
/**
 * @function readDouble()
 * @returns {Number}
*/
DataBufferedInputStream.prototype.readDouble = function() {return 0;};
/**
 * @function readLong()
 * @returns {Number}
*/
DataBufferedInputStream.prototype.readLong = function() {return 0;};
/**
 * @function readUTF8()
 * @returns {String}
*/
DataBufferedInputStream.prototype.readUTF8 = function() {return "";};
/**
 * @function readBoolean()
 * @returns {Boolean}
*/
DataBufferedInputStream.prototype.readBoolean = function() {return true;};
/**
 * @function readByteArray(args)
 * @param {Array} args <br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {ByteArray} - data.<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;<b>+</b> args[0] is {ByteArray} - data <b>and</b> args[1] is {Number} - start <b>and</b> args[2] is {Number} - length.<br />
 * @returns {Number}
*/
DataBufferedInputStream.prototype.readByteArray = function(args) {return 0;};
/**
 * @function readByteArrayFully(data, start, length)
 * @param {ByteArray} data
 * @param {Number} start
 * @param {Number} length
 * @returns {Boolean}
*/
DataBufferedInputStream.prototype.readByteArrayFully = function(data, start, length) {return true;};
/**
 * @function skip(bytes)
 * @param {Number} bytes
*/
DataBufferedInputStream.prototype.skip = function(bytes) {};
/**
 * @function available()
 * @returns {Number}
*/
DataBufferedInputStream.prototype.available = function() {return 0;};
