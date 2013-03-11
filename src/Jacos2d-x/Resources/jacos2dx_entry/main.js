//******************************************************
// Sprite 
// Show "Sprite" and add actions
//
//******************************************************
Import("cocos2d/CCDirector, CCScene,CCLayer");
Import("cocos2d/CCParallaxNode, CCSprite, CCMoveBy, CCMoveTo, CCRepeatForever, CCSequence, CCSpriteBatchNode, CCPhysicSprite, CCCallFunc");
Import("cocos2d.extension/CCScrollView, CCSize");
Import("cocos2d/CCParticleExplosion, CCParticleFireworks");
Import("box2d/*");

setOrientation(0);
var CROSSBOW_POS = cocos2d.ccp(140, 135);

var LAND_Y = 93;
var SCREEN_WIDTH = 480;
var SCREEN_HEIGHT = 320;
var PTM_RATIO = 32;
var kTagParentNode = 1;
var playerBirds = [];
//get director
var director = CCDirector.sharedDirector();
var m_groundBody = null;
//create main scene and layer
var myScene = CCScene.create();
var myLayer = CCScrollView.create(cocos2d.CCSizeMake(480, 320)); //CCLayer.create();
	myScene.addChild(myLayer);
	printf(">>>>>dir: " + cocos2d.extension.kCCScrollViewDirectionHorizontal);
	myLayer.setDirection(cocos2d.extension.kCCScrollViewDirectionHorizontal);
	myLayer.setContentSize(cocos2d.CCSizeMake(480 * 2, 320));
	myLayer.setContentOffset(cocos2d.ccp(0, 0), false);
	myLayer.setZoomScale(2.0);
	myLayer.setBounceable(false);
	
function makeLayer(image, y, flipped) {
	var layer = CCSpriteBatchNode.create(image, 2);
	var texture = layer.getTexture();
	var spr1 = CCSprite.createWithTexture(texture);	
	var spr2 = CCSprite.createWithTexture(texture);		
	
	spr1.setAnchorPoint( cocos2d.ccp(0, 0) );
	spr1.setPosition(cocos2d.ccp(0, y));
	
	spr2.setAnchorPoint( cocos2d.ccp(0.5, 0) );
	if (flipped)
		spr2.setScaleX(-1);
	spr2.setPosition(cocos2d.ccp(480 + 240, y));	
	layer.addChild(spr1);
	layer.addChild(spr2);
	
	return layer;
}

var cloudLayer = makeLayer("cloud.png", 0, false);
var landLayer = makeLayer("land.png", 0, false);
var backgroundLayer = makeLayer("bg.png", 0, false);
var gamePresentLayer = CCLayer.create();
var gameSpace = CCParallaxNode.create();

gameSpace.addChild(backgroundLayer, 0, cocos2d.ccp(0.2, 0.5), cocos2d.ccp(0,0));
gameSpace.addChild(cloudLayer, 1, cocos2d.ccp(0.75, 0.5), cocos2d.ccp(0,0));
gameSpace.addChild(landLayer, 2, cocos2d.ccp(1.0, 0.5), cocos2d.ccp(0,0));
gameSpace.addChild(gamePresentLayer, 2, cocos2d.ccp(1.0, 0.5), cocos2d.ccp(0,0));
gameSpace.setPosition(cocos2d.ccp(0, 0));
myLayer.addChild( gameSpace );
myLayer.setTouchEnabled(true);

var crossBow = CCSprite.create("cross_bow.png");
crossBow.setPosition(cocos2d.ccp(CROSSBOW_POS.x, CROSSBOW_POS.y - 20));
gamePresentLayer.addChild(crossBow);
var world;
var holdingBird = null;
var m_mouseJoint = null;

myLayer.setController({
	ccTouchBegan : function(touch) {
		return this.ccTouchesBegan([touch]);
	},
	ccTouchesBegan : function(touches) {
		printf("touches began");
		var touch = touches[0];
		holdingBird = null;
		var location = gameSpace.convertTouchToNodeSpace(touch);
		var vect = cocos2d.ccpSub(location, CROSSBOW_POS);
		//var normal = cocos2d.ccpNormalize(vect);
		var vectLength = cocos2d.ccpLength(vect);
		if (vectLength <= 16 && playerBirds.length > 0) {
			holdingBird = playerBirds.pop();
			return true;
		}
	},
	ccTouchMoved : function(touch) {
	
		//var touch = touches[0];
		
		
		var location = gameSpace.convertTouchToNodeSpace(touch);
		var deltaX = touch.getLocation().x - this._lastX;

		if (holdingBird) {
			var point = gameSpace.convertTouchToNodeSpace(touch);
			var vect = cocos2d.ccpSub(point, CROSSBOW_POS);
			
			var vectLength = cocos2d.ccpLength(vect);
			if (vectLength == 0)
				break;
			var vect1 = cocos2d.ccp(vect.x / vectLength, vect.y / vectLength);
			if (vectLength > 50) vectLength = 50;
			
			
			
			point = cocos2d.ccpMult(vect1, vectLength);
			point = cocos2d.ccpAdd(point, CROSSBOW_POS);
			
			holdingBird.setPosition(point);
			return true;
		}
	},
	ccTouchEnded : function(touch) {
		//setOrientation(this._b?0:1);
		if (this._b) this._b = false;
		else this._b = true;
		if (holdingBird) {
			//var touch = touches[0];		
			var location = gameSpace.convertTouchToNodeSpace(touch);
			var vect = cocos2d.ccpSub(CROSSBOW_POS, location);
			var vectLength = cocos2d.ccpLength(vect);
			var jetVec = new b2Vec2(vect.x / 3, vect.y / 3);
			printf("jet>>>> x: " + jetVec.x + "-y:" + jetVec.y);
			holdingBird.getPhysicBody().SetActive(true);
			holdingBird.getPhysicBody().ApplyLinearImpulse(jetVec, new b2Vec2(0, 0));
			//holdingBird = null;	
			//playerBirds.pop();
			nextBird();
			return true;
		}
	},
	update : function(dt) {
		if (dt >= 0.1) { //dt too large will cause world be shocked!
			dt = 0.1
		}
		var velocityIterations = 8;
		var positionIterations = 1;
	
		// Instruct the world to perform a single step of simulation. It is
		// generally best to keep the time step and iterations fixed.
		world.Step(dt, velocityIterations, positionIterations);
		if (needRemove.length > 0) {
			for (var i = 0; i < needRemove.length; i++)
				world.DestroyBody(needRemove[i]);
			needRemove = [];	
		}
	}
});

function initPhysic() {	
	var gravity = new b2Vec2(0.0, -10);
    world = new b2World(gravity);
	world.SetAllowSleeping(true);
	world.SetContinuousPhysics(true);
	var flags = b2Draw.e_shapeBit;
	var groundBodyDef = new b2BodyDef();
	groundBodyDef.position.Set(0, 0);
	groundBody = world.CreateBody(groundBodyDef);
	
	groundBox = new b2EdgeShape();
	var BOTTOM = 50;
	var WORLD_HEIGHT = SCREEN_HEIGHT + 100;
    // bottom
    groundBox.Set(new b2Vec2(0, -BOTTOM), new b2Vec2(2 * SCREEN_WIDTH/PTM_RATIO, -BOTTOM));
    groundBody.CreateFixture(groundBox,0);

    // top
    groundBox.Set(new b2Vec2(0, (WORLD_HEIGHT - 50) / PTM_RATIO), new b2Vec2( 2 * SCREEN_WIDTH / PTM_RATIO, (WORLD_HEIGHT - 50)/PTM_RATIO));
    groundBody.CreateFixture(groundBox,0);

    // left
    groundBox.Set(new b2Vec2(0, (WORLD_HEIGHT - 50)/PTM_RATIO), new b2Vec2(0, -50));
    groundBody.CreateFixture(groundBox, 0);

    // right
    groundBox.Set(new b2Vec2(2 * SCREEN_WIDTH / PTM_RATIO, -50), new b2Vec2(2 * SCREEN_WIDTH / PTM_RATIO, (WORLD_HEIGHT - 50) / PTM_RATIO));
    groundBody.CreateFixture(groundBox, 0);
	
	//land
	groundBox.Set(new b2Vec2(0, LAND_Y / PTM_RATIO), new b2Vec2(156/PTM_RATIO, LAND_Y / PTM_RATIO));
    groundBody.CreateFixture(groundBox,0);
	
	groundBox.Set(new b2Vec2(320 / PTM_RATIO, LAND_Y / PTM_RATIO), new b2Vec2((320 + 156 * 2)/PTM_RATIO, LAND_Y / PTM_RATIO));
    groundBody.CreateFixture(groundBox,0);
	
	groundBox.Set(new b2Vec2((320 + 156 * 2 + 160) / PTM_RATIO, LAND_Y / PTM_RATIO), new b2Vec2((320 + 156 * 2 + 160 + 156)/PTM_RATIO, LAND_Y / PTM_RATIO));
    groundBody.CreateFixture(groundBox,0);
	
	var bodyDef = new b2BodyDef();
	
	m_groundBody = world.CreateBody(bodyDef);
	
	
}
initPhysic();
var needRemove = [];
function beginContact(contacts) {
	if (holdingBird) {
		var bodyA = contacts.GetFixtureA().GetBody();
		var bodyB = contacts.GetFixtureB().GetBody();

		if (bodyA.GetJSUserData() == holdingBird){
			//world.DestroyBody(bodyA);			
			
			var posA = bodyA.GetPosition();
			var posB = bodyB.GetPosition();
			var vec = new b2Vec2((posB.x - posA.x) * 5, (posB.y - posA.y) * 5);
			bodyB.ApplyLinearImpulse(vec, new b2Vec2(0, 0));
			
			
			needRemove.push(bodyA);
			gamePresentLayer.removeChild(holdingBird);
			var explosion = CCParticleExplosion.create();
			explosion.setPosition(holdingBird.getPosition());
			gamePresentLayer.addChild(explosion);
			printf("contact");
			holdingBird = null;
		} else if (bodyB.GetJSUserData() == holdingBird){
			//world.DestroyBody(bodyB);
			var posA = bodyA.GetPosition();
			var posB = bodyB.GetPosition();
			var vec = new b2Vec2(posA.x - posB.x, posA.y - posB.y);
			bodyA.ApplyLinearImpulse(vec, new b2Vec2(0, 0));
			
			needRemove.push(bodyB);
			gamePresentLayer.removeChild(holdingBird);
			var explosion = CCParticleExplosion.create();
			explosion.setPosition(holdingBird.getPosition());
			gamePresentLayer.addChild(explosion);
			printf("contact");
			holdingBird = null;
		}
	}
}
function endContact() {
}
function preSolve() {
}
function postSolve() {
}
world.SetContactListener(beginContact, endContact, {}, {});
var parent = CCSpriteBatchNode.create("blocks.png", 100);
//parent.setTag(18);
var m_pSpriteTexture = parent.getTexture();

function addNewSpriteAtPosition(image, pos, rotation, friction, densiti, restitution) {
	var parent = gamePresentLayer;//myLayer.getChildByTag(kTagParentNode);
	
	var sprite = new CCPhysicSprite(image, PTM_RATIO, world, friction, densiti, restitution);
    parent.addChild(sprite);
	sprite.setRotation(rotation);
	sprite.setPosition( cocos2d.ccp( pos.x, pos.y) );	
}
function addNewBird(image, pos, isPlayer) {	
		
    // Define the dynamic body.
    //Set up a 1m squared box in the physics world
    var bodyDef = new b2BodyDef();
    bodyDef.type = box2d.b2_dynamicBody;
    var body = world.CreateBody(bodyDef);
    
    // Define another box shape for our dynamic body.
    var shape = new b2CircleShape();
    shape.m_radius = 16 / PTM_RATIO;
    
    // Define the dynamic body fixture.
    var fixtureDef = new b2FixtureDef();
    fixtureDef.shape = shape;    
    fixtureDef.density = 1.0;
    fixtureDef.friction = 0.3;
	fixtureDef.restitution = 0.3;
    body.CreateFixture(fixtureDef);
	
	var sprite = new CCPhysicSprite(body);
	sprite.initWithFile(image);	
	sprite.setPTMRatio(PTM_RATIO);    
    sprite.setPosition( cocos2d.ccp( pos.x, pos.y) ); 
	
	body.sprite = sprite;	
	gamePresentLayer.addChild(sprite);
	body.SetUserData(sprite);
	if (isPlayer)
	{
		body._ball = true;
		body.SetActive(false);
		playerBirds.push(sprite);
	}
	return sprite;
}
function makeBuilding() {
	var BLOCK_SIZE = 32;
	var ICE_FRICTION = 0.3;
	var WOOD_FRICTION = 2.0;
	var STONE_FRICTION = 1.5;
	
	var y = LAND_Y + 16;
	
	var x = 330;
	var top_width = 64 - 10;
	for (var i = 0; i < 3; i++) {
		addNewSpriteAtPosition("item1.png", cocos2d.ccp(x, y), 90, ICE_FRICTION, 15.0, 0.1);
		addNewSpriteAtPosition("item1.png", cocos2d.ccp(x + top_width, y), 90, ICE_FRICTION, 15.0, 0.1);
		addNewSpriteAtPosition("item1.png", cocos2d.ccp(x + top_width * 2, y), 90, ICE_FRICTION, 15.0, 0.1);
		y += BLOCK_SIZE;
	}

	y += -16 + 5;
	addNewSpriteAtPosition("item2.png", cocos2d.ccp(x + 32 - 9, y), 0, WOOD_FRICTION, 0.5, 0.4);
	addNewSpriteAtPosition("item2.png", cocos2d.ccp(x + 32 - 9 + 64, y), 0, WOOD_FRICTION, 0.5, 0.4);	
	var y = LAND_Y + 16;
	for (var  i = 0; i < 2; i++) {
		for (var j = 0; j < 3; j++) {
			addNewSpriteAtPosition("item3.png", cocos2d.ccp(x + top_width * 2 + 20 + j * (64), y), 90, STONE_FRICTION, 20.0, 0.1);					
		}
		y += 32;
	}
	y += -16 + 5;
	addNewSpriteAtPosition("item2.png", cocos2d.ccp(x + top_width * 2 + 20 + 30, y), 0, WOOD_FRICTION, 0.5, 0.4);
	addNewSpriteAtPosition("item2.png", cocos2d.ccp(x + top_width * 2 + 20 + 64 + 30, y), 0, WOOD_FRICTION, 0.5, 0.4);	
}
makeBuilding();
addNewBird("Agten1.png", cocos2d.ccp(820, LAND_Y + 16));
addNewBird("Angten3.png", cocos2d.ccp(400, LAND_Y + 16));
addNewBird("Agten2.png", cocos2d.ccp(460, LAND_Y + 16));
addNewBird("Angten4.png", cocos2d.ccp(550, LAND_Y + 16));
myLayer.scheduleUpdate();

function setupBirds() {	
	addNewBird("egg1.png", cocos2d.ccp(20, 115), true);
	addNewBird("egg2.png", cocos2d.ccp(45, 115), true);
	addNewBird("egg3.png", cocos2d.ccp(70, 115), true);
	addNewBird("egg4.png", CROSSBOW_POS, true);
}
function nextBird() {
	if (playerBirds.length > 0)
		playerBirds[playerBirds.length - 1].runAction(CCMoveTo.create(0.5, CROSSBOW_POS));
}
setupBirds();
director.pushScene(myScene);
//garbageCollect();