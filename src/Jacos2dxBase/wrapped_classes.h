#ifndef CLASSES_DEFINE_H
#define CLASSES_DEFINE_H

#define CLASSES_COUNT 425
#define BASE_CLASS_ID -1

static const char* WRAPPED_CLASSES_LIST[] = {
   "CCAction",
   "CCFiniteTimeAction",
   "CCActionInterval",
   "CCSpeed",
   "CCFollow",
   "CCSequence",
   "CCRepeat",
   "CCRepeatForever",
   "CCSpawn",
   "CCRotateTo",
   "CCRotateBy",
   "CCMoveTo",
   "CCMoveBy",
   "CCSkewTo",
   "CCSkewBy",
   "CCJumpBy",
   "CCJumpTo",
   "ccBezierConfig",
   "CCBezierBy",
   "CCBezierTo",
   "CCScaleTo",
   "CCScaleBy",
   "CCBlink",
   "CCFadeIn",
   "CCFadeOut",
   "CCFadeTo",
   "CCTintTo",
   "CCTintBy",
   "CCDelayTime",
   "CCReverseTime",
   "CCAnimate",
   "CCTargetedAction",
   "CCActionInstant",
   "CCShow",
   "CCHide",
   "CCToggleVisibility",
   "CCFlipX",
   "CCFlipY",
   "CCPlace",
   "CCCallFunc",
   "CCCallFuncN",
   "CCActionCamera",
   "CCOrbitCamera",
   "CCPointArray",
   "CCCardinalSplineTo",
   "CCCardinalSplineBy",
   "CCCatmullRomTo",
   "CCCatmullRomBy",
   "CCActionEase",
   "CCEaseRateAction",
   "CCEaseIn",
   "CCEaseOut",
   "CCEaseInOut",
   "CCEaseExponentialIn",
   "CCEaseExponentialOut",
   "CCEaseExponentialInOut",
   "CCEaseSineIn",
   "CCEaseSineOut",
   "CCEaseSineInOut",
   "CCEaseElastic",
   "CCEaseElasticIn",
   "CCEaseElasticOut",
   "CCEaseElasticInOut",
   "CCEaseBounce",
   "CCEaseBounceIn",
   "CCEaseBounceOut",
   "CCEaseBounceInOut",
   "CCEaseBackIn",
   "CCEaseBackOut",
   "CCEaseBackInOut",
   "CCGridAction",
   "CCAccelDeccelAmplitude",
   "CCGrid3DAction",
   "CCTiledGrid3DAction",
   "CCAccelAmplitude",
   "CCDeccelAmplitude",
   "CCStopGrid",
   "CCReuseGrid",
   "CCWaves3D",
   "CCFlipX3D",
   "CCFlipY3D",
   "CCLens3D",
   "CCRipple3D",
   "CCShaky3D",
   "CCLiquid",
   "CCWaves",
   "CCTwirl",
   "CCActionManager",
   "CCPageTurn3D",
   "CCProgressTo",
   "CCProgressFromTo",
   "CCShakyTiles3D",
   "CCShatteredTiles3D",
   "CCShuffleTiles",
   "CCFadeOutTRTiles",
   "CCFadeOutBLTiles",
   "CCFadeOutUpTiles",
   "CCFadeOutDownTiles",
   "CCTurnOffTiles",
   "CCWavesTiles3D",
   "CCJumpTiles3D",
   "CCSplitRows",
   "CCSplitCols",
   "CCAffineTransform",
   "CCAnimationFrame",
   "CCAnimation",
   "CCAnimationCache",
   "CCApplication",
   "CCArray",
   "CCAtlasNode",
   "CCCamera",
   "CCDirector",
   "CCPointsList",
   "CCEGLViewProtocol",
   "CCFileUtils",
   "CCPoint",
   "CCSize",
   "CCRect",
   "CCLabelAtlas",
   "CCLabelBMFont",
   "CCLabelTTF",
   "CCLayer",
   "CCLayerColor",
   "CCLayerGradient",
   "CCLayerMultiplex",
   "CCMenu",
   "CCMenuItem",
   "CCMenuItemLabel",
   "CCMenuItemAtlasFont",
   "CCMenuItemFont",
   "CCMenuItemSprite",
   "CCMenuItemImage",
   "CCMenuItemToggle",
   "CCMotionStreak",
   "CCDictionary",
   "CCNode",
   "CCNotificationCenter",
   "CCZone",
   "CCCopying",
   "CCObject",
   "CCParallaxNode",
   "CCParticleFire",
   "CCParticleFireworks",
   "CCParticleSun",
   "CCParticleGalaxy",
   "CCParticleFlower",
   "CCParticleMeteor",
   "CCParticleSpiral",
   "CCParticleExplosion",
   "CCParticleSmoke",
   "CCParticleSnow",
   "CCParticleRain",
   "CCParticleSystem",
   "CCParticleSystemQuad",
   "CCParticleBatchNode",
   "CCProgressTimer",
   "CCRenderTexture",
   "CCScene",
   "CCTimer",
   "CCScheduler",
   "CCSprite",
   "CCSpriteBatchNode",
   "CCSpriteFrame",
   "CCSpriteFrameCache",
   "CCString",
   "CCTextFieldTTF",
   "ccTexParams",
   "CCTexture2D",
   "CCTextureAtlas",
   "CCTextureCache",
   "sImageTGA",
   "CCTileMapAtlas",
   "CCTMXLayer",
   "CCTMXObjectGroup",
   "CCTMXTiledMap",
   "CCTMXLayerInfo",
   "CCTMXTilesetInfo",
   "CCTMXMapInfo",
   "CCTouch",
   "CCEvent",
   "CCTransitionScene",
   "CCTransitionSceneOriented",
   "CCTransitionRotoZoom",
   "CCTransitionJumpZoom",
   "CCTransitionMoveInL",
   "CCTransitionMoveInR",
   "CCTransitionMoveInT",
   "CCTransitionMoveInB",
   "CCTransitionSlideInL",
   "CCTransitionSlideInR",
   "CCTransitionSlideInB",
   "CCTransitionSlideInT",
   "CCTransitionShrinkGrow",
   "CCTransitionFlipX",
   "CCTransitionFlipY",
   "CCTransitionFlipAngular",
   "CCTransitionZoomFlipX",
   "CCTransitionZoomFlipY",
   "CCTransitionZoomFlipAngular",
   "CCTransitionFade",
   "CCTransitionCrossFade",
   "CCTransitionTurnOffTiles",
   "CCTransitionSplitCols",
   "CCTransitionSplitRows",
   "CCTransitionFadeTR",
   "CCTransitionFadeBL",
   "CCTransitionFadeUp",
   "CCTransitionFadeDown",
   "CCTransitionPageTurn",
   "CCTransitionProgress",
   "CCTransitionProgressRadialCCW",
   "CCTransitionProgressRadialCW",
   "CCTransitionProgressHorizontal",
   "CCTransitionProgressVertical",
   "CCTransitionProgressInOut",
   "CCTransitionProgressOutIn",
   "ccColor3B",
   "ccColor4B",
   "ccColor4F",
   "ccVertex2F",
   "ccVertex3F",
   "ccTex2F",
   "ccPointSprite",
   "ccQuad2",
   "ccQuad3",
   "ccGridSize",
   "ccV2F_C4B_T2F",
   "ccV2F_C4F_T2F",
   "ccV3F_C4B_T2F",
   "ccV2F_C4B_T2F_Quad",
   "ccV3F_C4B_T2F_Quad",
   "ccV2F_C4F_T2F_Quad",
   "ccBlendFunc",
   "ccT2F_Quad",
   "ccAnimationFrameData",
   "CCUserDefault",
   "kmMat4",
   "CCIMEKeyboardNotificationInfo",
   "CCSet",
   "CCGridBase",
   "Tile",
   "CCEGLView",
   "CCTouchDispatcher",
   "CCKeypadDispatcher",
   "CCAccelerometer",
   "CCGLProgram",
   "ccGLServerState",
   "tCCParticle",
   "CCTextureProtocol",
   "CCImage",
   "tCCImageFormat",
   "CCPhysicNode",
   "CCPhysicSprite",
   "CCPhysicSpriteBatchNode",
   "CCHttpClient",
   "CCHttpRequest",
   "CCHttpResponse",
   "CCInvocation",
   "CCControl",
   "CCControlButton",
   "CCControlColourPicker",
   "CCControlHuePicker",
   "CCControlSaturationBrightnessPicker",
   "CCControlSlider",
   "CCControlSwitch",
   "RGBA",
   "HSV",
   "CCColor3bObject",
   "CCControlUtils",
   "CCEditBox",
   "CCEditBoxImpl",
   "CCEditBoxDelegate",
   "CCScale9Sprite",
   "CCScrollViewDelegate",
   "CCScrollView",
   "CCControlPotentiometer",
   "CCControlStepper",
   "CCSortableObject",
   "CCArrayForObjectSorting",
   "CCTableViewDelegate",
   "CCTableViewDataSource",
   "CCTableView",
   "CCTableViewCell",
   "CCBFileLoader",
   "CCBMemberVariableAssigner",
   "CCBKeyframe",
   "CCBReader",
   "CCBFile",
   "CCBSequence",
   "CCBSequenceProperty",
   "ccColor3BWapper",
   "CCBValue",
   "CCData",
   "CCControlButtonLoader",
   "CCControlLoader",
   "CCLabelBMFontLoader",
   "CCLabelTTFLoader",
   "CCLayerColorLoader",
   "CCLayerGradientLoader",
   "CCLayerLoader",
   "CCMenuItemImageLoader",
   "CCMenuItemLoader",
   "CCMenuLoader",
   "BlockData",
   "BlockCCControlData",
   "CCNodeLoader",
   "CCNodeLoaderLibrary",
   "CCNodeLoaderListener",
   "CCParticleSystemQuadLoader",
   "CCScale9SpriteLoader",
   "CCScrollViewLoader",
   "CCBAnimationManagerDelegate",
   "CCBAnimationManager",
   "CCBSetSpriteFrame",
   "CCBRotateTo",
   "JacosBaseObject",
   "b2BlockAllocator",
   "b2BodyDef",
   "b2Body",
   "b2Pair",
   "b2BroadPhase",
   "b2ChainAndCircleContact",
   "b2ChainAndPolygonContact",
   "b2ChainShape",
   "b2CircleContact",
   "b2CircleShape",
   "b2Shape",
   "b2EdgeShape",
   "b2PolygonShape",
   "b2ContactFeature",
   "b2ContactID",
   "b2ManifoldPoint",
   "b2Manifold",
   "b2WorldManifold",
   "b2ClipVertex",
   "b2RayCastInput",
   "b2RayCastOutput",
   "b2AABB",
   "b2Contact",
   "b2Fixture",
   "b2World",
   "b2StackAllocator",
   "b2ContactListener",
   "b2ContactRegister",
   "b2ContactEdge",
   "b2ContactFilter",
   "b2ContactManager",
   "b2ContactPositionConstraint",
   "b2VelocityConstraintPoint",
   "b2ContactVelocityConstraint",
   "b2ContactSolverDef",
   "b2ContactSolver",
   "b2DistanceProxy",
   "b2SimplexCache",
   "b2DistanceInput",
   "b2DistanceOutput",
   "b2DistanceJointDef",
   "b2DistanceJoint",
   "b2TreeNode",
   "b2DynamicTree",
   "b2EdgeAndCircleContact",
   "b2EdgeAndPolygonContact",
   "b2Filter",
   "b2FixtureDef",
   "b2FixtureProxy",
   "b2FrictionJointDef",
   "b2FrictionJoint",
   "b2RevoluteJoint",
   "b2PrismaticJoint",
   "b2GearJointDef",
   "b2GearJoint",
   "b2Joint",
   "b2Profile",
   "b2Island",
   "b2SolverData",
   "b2Jacobian",
   "b2JointEdge",
   "b2JointDef",
   "b2Vec2",
   "b2Vec3",
   "b2Mat22",
   "b2Mat33",
   "b2Rot",
   "b2Transform",
   "b2Sweep",
   "b2MouseJointDef",
   "b2MouseJoint",
   "b2PolygonAndCircleContact",
   "b2PolygonContact",
   "b2PrismaticJointDef",
   "b2PulleyJointDef",
   "b2PulleyJoint",
   "b2RevoluteJointDef",
   "b2Draw",
   "b2RopeDef",
   "b2Rope",
   "b2RopeJointDef",
   "b2RopeJoint",
   "b2Version",
   "b2MassData",
   "b2StackEntry",
   "b2TOIInput",
   "b2TOIOutput",
   "b2Timer",
   "b2TimeStep",
   "b2Position",
   "b2Velocity",
   "b2WeldJointDef",
   "b2WeldJoint",
   "b2WheelJointDef",
   "b2WheelJoint",
   "b2Color",
   "GLESDebugDraw",
   "b2ContactResult",
   "b2DestructionListener",
   "b2ContactImpulse",
   "b2QueryCallback",
   "b2RayCastCallback",
   "SimpleAudioEngine",
   "InputStream",
   "OutputStream",
   "FileStream",
   "ByteArray",
   "DataBufferedOutputStream",
   "DataBufferedInputStream",
};
#define CLS_CCACTION_ID 0
#define CLS_CCFINITETIMEACTION_ID 1
#define CLS_CCACTIONINTERVAL_ID 2
#define CLS_CCSPEED_ID 3
#define CLS_CCFOLLOW_ID 4
#define CLS_CCSEQUENCE_ID 5
#define CLS_CCREPEAT_ID 6
#define CLS_CCREPEATFOREVER_ID 7
#define CLS_CCSPAWN_ID 8
#define CLS_CCROTATETO_ID 9
#define CLS_CCROTATEBY_ID 10
#define CLS_CCMOVETO_ID 11
#define CLS_CCMOVEBY_ID 12
#define CLS_CCSKEWTO_ID 13
#define CLS_CCSKEWBY_ID 14
#define CLS_CCJUMPBY_ID 15
#define CLS_CCJUMPTO_ID 16
#define CLS_CCBEZIERCONFIG_ID 17
#define CLS_CCBEZIERBY_ID 18
#define CLS_CCBEZIERTO_ID 19
#define CLS_CCSCALETO_ID 20
#define CLS_CCSCALEBY_ID 21
#define CLS_CCBLINK_ID 22
#define CLS_CCFADEIN_ID 23
#define CLS_CCFADEOUT_ID 24
#define CLS_CCFADETO_ID 25
#define CLS_CCTINTTO_ID 26
#define CLS_CCTINTBY_ID 27
#define CLS_CCDELAYTIME_ID 28
#define CLS_CCREVERSETIME_ID 29
#define CLS_CCANIMATE_ID 30
#define CLS_CCTARGETEDACTION_ID 31
#define CLS_CCACTIONINSTANT_ID 32
#define CLS_CCSHOW_ID 33
#define CLS_CCHIDE_ID 34
#define CLS_CCTOGGLEVISIBILITY_ID 35
#define CLS_CCFLIPX_ID 36
#define CLS_CCFLIPY_ID 37
#define CLS_CCPLACE_ID 38
#define CLS_CCCALLFUNC_ID 39
#define CLS_CCCALLFUNCN_ID 40
#define CLS_CCACTIONCAMERA_ID 41
#define CLS_CCORBITCAMERA_ID 42
#define CLS_CCPOINTARRAY_ID 43
#define CLS_CCCARDINALSPLINETO_ID 44
#define CLS_CCCARDINALSPLINEBY_ID 45
#define CLS_CCCATMULLROMTO_ID 46
#define CLS_CCCATMULLROMBY_ID 47
#define CLS_CCACTIONEASE_ID 48
#define CLS_CCEASERATEACTION_ID 49
#define CLS_CCEASEIN_ID 50
#define CLS_CCEASEOUT_ID 51
#define CLS_CCEASEINOUT_ID 52
#define CLS_CCEASEEXPONENTIALIN_ID 53
#define CLS_CCEASEEXPONENTIALOUT_ID 54
#define CLS_CCEASEEXPONENTIALINOUT_ID 55
#define CLS_CCEASESINEIN_ID 56
#define CLS_CCEASESINEOUT_ID 57
#define CLS_CCEASESINEINOUT_ID 58
#define CLS_CCEASEELASTIC_ID 59
#define CLS_CCEASEELASTICIN_ID 60
#define CLS_CCEASEELASTICOUT_ID 61
#define CLS_CCEASEELASTICINOUT_ID 62
#define CLS_CCEASEBOUNCE_ID 63
#define CLS_CCEASEBOUNCEIN_ID 64
#define CLS_CCEASEBOUNCEOUT_ID 65
#define CLS_CCEASEBOUNCEINOUT_ID 66
#define CLS_CCEASEBACKIN_ID 67
#define CLS_CCEASEBACKOUT_ID 68
#define CLS_CCEASEBACKINOUT_ID 69
#define CLS_CCGRIDACTION_ID 70
#define CLS_CCACCELDECCELAMPLITUDE_ID 71
#define CLS_CCGRID3DACTION_ID 72
#define CLS_CCTILEDGRID3DACTION_ID 73
#define CLS_CCACCELAMPLITUDE_ID 74
#define CLS_CCDECCELAMPLITUDE_ID 75
#define CLS_CCSTOPGRID_ID 76
#define CLS_CCREUSEGRID_ID 77
#define CLS_CCWAVES3D_ID 78
#define CLS_CCFLIPX3D_ID 79
#define CLS_CCFLIPY3D_ID 80
#define CLS_CCLENS3D_ID 81
#define CLS_CCRIPPLE3D_ID 82
#define CLS_CCSHAKY3D_ID 83
#define CLS_CCLIQUID_ID 84
#define CLS_CCWAVES_ID 85
#define CLS_CCTWIRL_ID 86
#define CLS_CCACTIONMANAGER_ID 87
#define CLS_CCPAGETURN3D_ID 88
#define CLS_CCPROGRESSTO_ID 89
#define CLS_CCPROGRESSFROMTO_ID 90
#define CLS_CCSHAKYTILES3D_ID 91
#define CLS_CCSHATTEREDTILES3D_ID 92
#define CLS_CCSHUFFLETILES_ID 93
#define CLS_CCFADEOUTTRTILES_ID 94
#define CLS_CCFADEOUTBLTILES_ID 95
#define CLS_CCFADEOUTUPTILES_ID 96
#define CLS_CCFADEOUTDOWNTILES_ID 97
#define CLS_CCTURNOFFTILES_ID 98
#define CLS_CCWAVESTILES3D_ID 99
#define CLS_CCJUMPTILES3D_ID 100
#define CLS_CCSPLITROWS_ID 101
#define CLS_CCSPLITCOLS_ID 102
#define CLS_CCAFFINETRANSFORM_ID 103
#define CLS_CCANIMATIONFRAME_ID 104
#define CLS_CCANIMATION_ID 105
#define CLS_CCANIMATIONCACHE_ID 106
#define CLS_CCAPPLICATION_ID 107
#define CLS_CCARRAY_ID 108
#define CLS_CCATLASNODE_ID 109
#define CLS_CCCAMERA_ID 110
#define CLS_CCDIRECTOR_ID 111
#define CLS_CCPOINTSLIST_ID 112
#define CLS_CCEGLVIEWPROTOCOL_ID 113
#define CLS_CCFILEUTILS_ID 114
#define CLS_CCPOINT_ID 115
#define CLS_CCSIZE_ID 116
#define CLS_CCRECT_ID 117
#define CLS_CCLABELATLAS_ID 118
#define CLS_CCLABELBMFONT_ID 119
#define CLS_CCLABELTTF_ID 120
#define CLS_CCLAYER_ID 121
#define CLS_CCLAYERCOLOR_ID 122
#define CLS_CCLAYERGRADIENT_ID 123
#define CLS_CCLAYERMULTIPLEX_ID 124
#define CLS_CCMENU_ID 125
#define CLS_CCMENUITEM_ID 126
#define CLS_CCMENUITEMLABEL_ID 127
#define CLS_CCMENUITEMATLASFONT_ID 128
#define CLS_CCMENUITEMFONT_ID 129
#define CLS_CCMENUITEMSPRITE_ID 130
#define CLS_CCMENUITEMIMAGE_ID 131
#define CLS_CCMENUITEMTOGGLE_ID 132
#define CLS_CCMOTIONSTREAK_ID 133
#define CLS_CCDICTIONARY_ID 134
#define CLS_CCNODE_ID 135
#define CLS_CCNOTIFICATIONCENTER_ID 136
#define CLS_CCZONE_ID 137
#define CLS_CCCOPYING_ID 138
#define CLS_CCOBJECT_ID 139
#define CLS_CCPARALLAXNODE_ID 140
#define CLS_CCPARTICLEFIRE_ID 141
#define CLS_CCPARTICLEFIREWORKS_ID 142
#define CLS_CCPARTICLESUN_ID 143
#define CLS_CCPARTICLEGALAXY_ID 144
#define CLS_CCPARTICLEFLOWER_ID 145
#define CLS_CCPARTICLEMETEOR_ID 146
#define CLS_CCPARTICLESPIRAL_ID 147
#define CLS_CCPARTICLEEXPLOSION_ID 148
#define CLS_CCPARTICLESMOKE_ID 149
#define CLS_CCPARTICLESNOW_ID 150
#define CLS_CCPARTICLERAIN_ID 151
#define CLS_CCPARTICLESYSTEM_ID 152
#define CLS_CCPARTICLESYSTEMQUAD_ID 153
#define CLS_CCPARTICLEBATCHNODE_ID 154
#define CLS_CCPROGRESSTIMER_ID 155
#define CLS_CCRENDERTEXTURE_ID 156
#define CLS_CCSCENE_ID 157
#define CLS_CCTIMER_ID 158
#define CLS_CCSCHEDULER_ID 159
#define CLS_CCSPRITE_ID 160
#define CLS_CCSPRITEBATCHNODE_ID 161
#define CLS_CCSPRITEFRAME_ID 162
#define CLS_CCSPRITEFRAMECACHE_ID 163
#define CLS_CCSTRING_ID 164
#define CLS_CCTEXTFIELDTTF_ID 165
#define CLS_CCTEXPARAMS_ID 166
#define CLS_CCTEXTURE2D_ID 167
#define CLS_CCTEXTUREATLAS_ID 168
#define CLS_CCTEXTURECACHE_ID 169
#define CLS_SIMAGETGA_ID 170
#define CLS_CCTILEMAPATLAS_ID 171
#define CLS_CCTMXLAYER_ID 172
#define CLS_CCTMXOBJECTGROUP_ID 173
#define CLS_CCTMXTILEDMAP_ID 174
#define CLS_CCTMXLAYERINFO_ID 175
#define CLS_CCTMXTILESETINFO_ID 176
#define CLS_CCTMXMAPINFO_ID 177
#define CLS_CCTOUCH_ID 178
#define CLS_CCEVENT_ID 179
#define CLS_CCTRANSITIONSCENE_ID 180
#define CLS_CCTRANSITIONSCENEORIENTED_ID 181
#define CLS_CCTRANSITIONROTOZOOM_ID 182
#define CLS_CCTRANSITIONJUMPZOOM_ID 183
#define CLS_CCTRANSITIONMOVEINL_ID 184
#define CLS_CCTRANSITIONMOVEINR_ID 185
#define CLS_CCTRANSITIONMOVEINT_ID 186
#define CLS_CCTRANSITIONMOVEINB_ID 187
#define CLS_CCTRANSITIONSLIDEINL_ID 188
#define CLS_CCTRANSITIONSLIDEINR_ID 189
#define CLS_CCTRANSITIONSLIDEINB_ID 190
#define CLS_CCTRANSITIONSLIDEINT_ID 191
#define CLS_CCTRANSITIONSHRINKGROW_ID 192
#define CLS_CCTRANSITIONFLIPX_ID 193
#define CLS_CCTRANSITIONFLIPY_ID 194
#define CLS_CCTRANSITIONFLIPANGULAR_ID 195
#define CLS_CCTRANSITIONZOOMFLIPX_ID 196
#define CLS_CCTRANSITIONZOOMFLIPY_ID 197
#define CLS_CCTRANSITIONZOOMFLIPANGULAR_ID 198
#define CLS_CCTRANSITIONFADE_ID 199
#define CLS_CCTRANSITIONCROSSFADE_ID 200
#define CLS_CCTRANSITIONTURNOFFTILES_ID 201
#define CLS_CCTRANSITIONSPLITCOLS_ID 202
#define CLS_CCTRANSITIONSPLITROWS_ID 203
#define CLS_CCTRANSITIONFADETR_ID 204
#define CLS_CCTRANSITIONFADEBL_ID 205
#define CLS_CCTRANSITIONFADEUP_ID 206
#define CLS_CCTRANSITIONFADEDOWN_ID 207
#define CLS_CCTRANSITIONPAGETURN_ID 208
#define CLS_CCTRANSITIONPROGRESS_ID 209
#define CLS_CCTRANSITIONPROGRESSRADIALCCW_ID 210
#define CLS_CCTRANSITIONPROGRESSRADIALCW_ID 211
#define CLS_CCTRANSITIONPROGRESSHORIZONTAL_ID 212
#define CLS_CCTRANSITIONPROGRESSVERTICAL_ID 213
#define CLS_CCTRANSITIONPROGRESSINOUT_ID 214
#define CLS_CCTRANSITIONPROGRESSOUTIN_ID 215
#define CLS_CCCOLOR3B_ID 216
#define CLS_CCCOLOR4B_ID 217
#define CLS_CCCOLOR4F_ID 218
#define CLS_CCVERTEX2F_ID 219
#define CLS_CCVERTEX3F_ID 220
#define CLS_CCTEX2F_ID 221
#define CLS_CCPOINTSPRITE_ID 222
#define CLS_CCQUAD2_ID 223
#define CLS_CCQUAD3_ID 224
#define CLS_CCGRIDSIZE_ID 225
#define CLS_CCV2F_C4B_T2F_ID 226
#define CLS_CCV2F_C4F_T2F_ID 227
#define CLS_CCV3F_C4B_T2F_ID 228
#define CLS_CCV2F_C4B_T2F_QUAD_ID 229
#define CLS_CCV3F_C4B_T2F_QUAD_ID 230
#define CLS_CCV2F_C4F_T2F_QUAD_ID 231
#define CLS_CCBLENDFUNC_ID 232
#define CLS_CCT2F_QUAD_ID 233
#define CLS_CCANIMATIONFRAMEDATA_ID 234
#define CLS_CCUSERDEFAULT_ID 235
#define CLS_KMMAT4_ID 236
#define CLS_CCIMEKEYBOARDNOTIFICATIONINFO_ID 237
#define CLS_CCSET_ID 238
#define CLS_CCGRIDBASE_ID 239
#define CLS_TILE_ID 240
#define CLS_CCEGLVIEW_ID 241
#define CLS_CCTOUCHDISPATCHER_ID 242
#define CLS_CCKEYPADDISPATCHER_ID 243
#define CLS_CCACCELEROMETER_ID 244
#define CLS_CCGLPROGRAM_ID 245
#define CLS_CCGLSERVERSTATE_ID 246
#define CLS_TCCPARTICLE_ID 247
#define CLS_CCTEXTUREPROTOCOL_ID 248
#define CLS_CCIMAGE_ID 249
#define CLS_TCCIMAGEFORMAT_ID 250
#define CLS_CCPHYSICNODE_ID 251
#define CLS_CCPHYSICSPRITE_ID 252
#define CLS_CCPHYSICSPRITEBATCHNODE_ID 253
#define CLS_CCHTTPCLIENT_ID 254
#define CLS_CCHTTPREQUEST_ID 255
#define CLS_CCHTTPRESPONSE_ID 256
#define CLS_CCINVOCATION_ID 257
#define CLS_CCCONTROL_ID 258
#define CLS_CCCONTROLBUTTON_ID 259
#define CLS_CCCONTROLCOLOURPICKER_ID 260
#define CLS_CCCONTROLHUEPICKER_ID 261
#define CLS_CCCONTROLSATURATIONBRIGHTNESSPICKER_ID 262
#define CLS_CCCONTROLSLIDER_ID 263
#define CLS_CCCONTROLSWITCH_ID 264
#define CLS_RGBA_ID 265
#define CLS_HSV_ID 266
#define CLS_CCCOLOR3BOBJECT_ID 267
#define CLS_CCCONTROLUTILS_ID 268
#define CLS_CCEDITBOX_ID 269
#define CLS_CCEDITBOXIMPL_ID 270
#define CLS_CCEDITBOXDELEGATE_ID 271
#define CLS_CCSCALE9SPRITE_ID 272
#define CLS_CCSCROLLVIEWDELEGATE_ID 273
#define CLS_CCSCROLLVIEW_ID 274
#define CLS_CCCONTROLPOTENTIOMETER_ID 275
#define CLS_CCCONTROLSTEPPER_ID 276
#define CLS_CCSORTABLEOBJECT_ID 277
#define CLS_CCARRAYFOROBJECTSORTING_ID 278
#define CLS_CCTABLEVIEWDELEGATE_ID 279
#define CLS_CCTABLEVIEWDATASOURCE_ID 280
#define CLS_CCTABLEVIEW_ID 281
#define CLS_CCTABLEVIEWCELL_ID 282
#define CLS_CCBFILELOADER_ID 283
#define CLS_CCBMEMBERVARIABLEASSIGNER_ID 284
#define CLS_CCBKEYFRAME_ID 285
#define CLS_CCBREADER_ID 286
#define CLS_CCBFILE_ID 287
#define CLS_CCBSEQUENCE_ID 288
#define CLS_CCBSEQUENCEPROPERTY_ID 289
#define CLS_CCCOLOR3BWAPPER_ID 290
#define CLS_CCBVALUE_ID 291
#define CLS_CCDATA_ID 292
#define CLS_CCCONTROLBUTTONLOADER_ID 293
#define CLS_CCCONTROLLOADER_ID 294
#define CLS_CCLABELBMFONTLOADER_ID 295
#define CLS_CCLABELTTFLOADER_ID 296
#define CLS_CCLAYERCOLORLOADER_ID 297
#define CLS_CCLAYERGRADIENTLOADER_ID 298
#define CLS_CCLAYERLOADER_ID 299
#define CLS_CCMENUITEMIMAGELOADER_ID 300
#define CLS_CCMENUITEMLOADER_ID 301
#define CLS_CCMENULOADER_ID 302
#define CLS_BLOCKDATA_ID 303
#define CLS_BLOCKCCCONTROLDATA_ID 304
#define CLS_CCNODELOADER_ID 305
#define CLS_CCNODELOADERLIBRARY_ID 306
#define CLS_CCNODELOADERLISTENER_ID 307
#define CLS_CCPARTICLESYSTEMQUADLOADER_ID 308
#define CLS_CCSCALE9SPRITELOADER_ID 309
#define CLS_CCSCROLLVIEWLOADER_ID 310
#define CLS_CCBANIMATIONMANAGERDELEGATE_ID 311
#define CLS_CCBANIMATIONMANAGER_ID 312
#define CLS_CCBSETSPRITEFRAME_ID 313
#define CLS_CCBROTATETO_ID 314
#define CLS_JACOSBASEOBJECT_ID 315
#define CLS_B2BLOCKALLOCATOR_ID 316
#define CLS_B2BODYDEF_ID 317
#define CLS_B2BODY_ID 318
#define CLS_B2PAIR_ID 319
#define CLS_B2BROADPHASE_ID 320
#define CLS_B2CHAINANDCIRCLECONTACT_ID 321
#define CLS_B2CHAINANDPOLYGONCONTACT_ID 322
#define CLS_B2CHAINSHAPE_ID 323
#define CLS_B2CIRCLECONTACT_ID 324
#define CLS_B2CIRCLESHAPE_ID 325
#define CLS_B2SHAPE_ID 326
#define CLS_B2EDGESHAPE_ID 327
#define CLS_B2POLYGONSHAPE_ID 328
#define CLS_B2CONTACTFEATURE_ID 329
#define CLS_B2CONTACTID_ID 330
#define CLS_B2MANIFOLDPOINT_ID 331
#define CLS_B2MANIFOLD_ID 332
#define CLS_B2WORLDMANIFOLD_ID 333
#define CLS_B2CLIPVERTEX_ID 334
#define CLS_B2RAYCASTINPUT_ID 335
#define CLS_B2RAYCASTOUTPUT_ID 336
#define CLS_B2AABB_ID 337
#define CLS_B2CONTACT_ID 338
#define CLS_B2FIXTURE_ID 339
#define CLS_B2WORLD_ID 340
#define CLS_B2STACKALLOCATOR_ID 341
#define CLS_B2CONTACTLISTENER_ID 342
#define CLS_B2CONTACTREGISTER_ID 343
#define CLS_B2CONTACTEDGE_ID 344
#define CLS_B2CONTACTFILTER_ID 345
#define CLS_B2CONTACTMANAGER_ID 346
#define CLS_B2CONTACTPOSITIONCONSTRAINT_ID 347
#define CLS_B2VELOCITYCONSTRAINTPOINT_ID 348
#define CLS_B2CONTACTVELOCITYCONSTRAINT_ID 349
#define CLS_B2CONTACTSOLVERDEF_ID 350
#define CLS_B2CONTACTSOLVER_ID 351
#define CLS_B2DISTANCEPROXY_ID 352
#define CLS_B2SIMPLEXCACHE_ID 353
#define CLS_B2DISTANCEINPUT_ID 354
#define CLS_B2DISTANCEOUTPUT_ID 355
#define CLS_B2DISTANCEJOINTDEF_ID 356
#define CLS_B2DISTANCEJOINT_ID 357
#define CLS_B2TREENODE_ID 358
#define CLS_B2DYNAMICTREE_ID 359
#define CLS_B2EDGEANDCIRCLECONTACT_ID 360
#define CLS_B2EDGEANDPOLYGONCONTACT_ID 361
#define CLS_B2FILTER_ID 362
#define CLS_B2FIXTUREDEF_ID 363
#define CLS_B2FIXTUREPROXY_ID 364
#define CLS_B2FRICTIONJOINTDEF_ID 365
#define CLS_B2FRICTIONJOINT_ID 366
#define CLS_B2REVOLUTEJOINT_ID 367
#define CLS_B2PRISMATICJOINT_ID 368
#define CLS_B2GEARJOINTDEF_ID 369
#define CLS_B2GEARJOINT_ID 370
#define CLS_B2JOINT_ID 371
#define CLS_B2PROFILE_ID 372
#define CLS_B2ISLAND_ID 373
#define CLS_B2SOLVERDATA_ID 374
#define CLS_B2JACOBIAN_ID 375
#define CLS_B2JOINTEDGE_ID 376
#define CLS_B2JOINTDEF_ID 377
#define CLS_B2VEC2_ID 378
#define CLS_B2VEC3_ID 379
#define CLS_B2MAT22_ID 380
#define CLS_B2MAT33_ID 381
#define CLS_B2ROT_ID 382
#define CLS_B2TRANSFORM_ID 383
#define CLS_B2SWEEP_ID 384
#define CLS_B2MOUSEJOINTDEF_ID 385
#define CLS_B2MOUSEJOINT_ID 386
#define CLS_B2POLYGONANDCIRCLECONTACT_ID 387
#define CLS_B2POLYGONCONTACT_ID 388
#define CLS_B2PRISMATICJOINTDEF_ID 389
#define CLS_B2PULLEYJOINTDEF_ID 390
#define CLS_B2PULLEYJOINT_ID 391
#define CLS_B2REVOLUTEJOINTDEF_ID 392
#define CLS_B2DRAW_ID 393
#define CLS_B2ROPEDEF_ID 394
#define CLS_B2ROPE_ID 395
#define CLS_B2ROPEJOINTDEF_ID 396
#define CLS_B2ROPEJOINT_ID 397
#define CLS_B2VERSION_ID 398
#define CLS_B2MASSDATA_ID 399
#define CLS_B2STACKENTRY_ID 400
#define CLS_B2TOIINPUT_ID 401
#define CLS_B2TOIOUTPUT_ID 402
#define CLS_B2TIMER_ID 403
#define CLS_B2TIMESTEP_ID 404
#define CLS_B2POSITION_ID 405
#define CLS_B2VELOCITY_ID 406
#define CLS_B2WELDJOINTDEF_ID 407
#define CLS_B2WELDJOINT_ID 408
#define CLS_B2WHEELJOINTDEF_ID 409
#define CLS_B2WHEELJOINT_ID 410
#define CLS_B2COLOR_ID 411
#define CLS_GLESDEBUGDRAW_ID 412
#define CLS_B2CONTACTRESULT_ID 413
#define CLS_B2DESTRUCTIONLISTENER_ID 414
#define CLS_B2CONTACTIMPULSE_ID 415
#define CLS_B2QUERYCALLBACK_ID 416
#define CLS_B2RAYCASTCALLBACK_ID 417
#define CLS_SIMPLEAUDIOENGINE_ID 418
#define CLS_INPUTSTREAM_ID 419
#define CLS_OUTPUTSTREAM_ID 420
#define CLS_FILESTREAM_ID 421
#define CLS_BYTEARRAY_ID 422
#define CLS_DATABUFFEREDOUTPUTSTREAM_ID 423
#define CLS_DATABUFFEREDINPUTSTREAM_ID 424
#endif
