LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_CFLAGS := -D_COCOS2DX \
				-DCOCOS2D_DEBUG=1 \
				-O3
APP_OPTIM        := release

LOCAL_MODULE := game_shared

LOCAL_MODULE_FILENAME := libgame

LOCAL_SRC_FILES := hellocpp/main.cpp \
                   ../../Classes/AppDelegate.cpp \
				   ../../Classes/extlib/JacosDevScene.cpp \
				   ../../Classes/wrapper/jacos2dx_wrap.cpp \
				   ../../Classes/wrapper/libHashTable.cpp \
				   ../../Classes/wrapper/manual_wrap.cpp \
				   ../../Classes/wrapper/toV8lib.cpp \
				   ../../Classes/extlib/CCPhysicNodes.cpp \
				   ../../Classes/extlib/GLES-Render.cpp
                   

LOCAL_C_INCLUDES := $(LOCAL_PATH)/../../Classes \
					$(LOCAL_PATH)/../../Classes/extlib \
					$(LOCAL_PATH)/../../Classes/wrapper \
					$(LOCAL_PATH)/../../../Jacos2dxBase \
					$(LOCAL_PATH)/../../../extensions \
					$(LOCAL_PATH)/../../../cocos2dx \
					$(LOCAL_PATH)/../../../Box2D \
					$(LOCAL_PATH)/../../../ \
					$(LOCAL_PATH)/../../../CocosDenshion \
					$(LOCAL_PATH)/../../../cocos2dx/include \
					$(LOCAL_PATH)/../../../cocos2dx \
					$(LOCAL_PATH)/../../../v8/include \
					$(LOCAL_PATH)/../../../cocos2dx/effects \
					$(LOCAL_PATH)/../../../Box2D/Dynamics/Contacts \
					$(LOCAL_PATH)/../../../Box2D/Dynamics/Joints \
					$(LOCAL_PATH)/../../../Box2D/Common \
					$(LOCAL_PATH)/../../../Box2D/Collision \
					$(LOCAL_PATH)/../../../Box2D/Collision/Shapes \
					$(LOCAL_PATH)/../../../Box2D/Dynamics \
					$(LOCAL_PATH)/../../../cocos2dx/kazmath/include \
					$(LOCAL_PATH)/../../../cocos2dx/platform/android

LOCAL_WHOLE_STATIC_LIBRARIES := cocos2dx_static cocosdenshion_static cocos_extension_static v8_static box2d_static
            
include $(BUILD_SHARED_LIBRARY)

$(call import-module,CocosDenshion/android) \
$(call import-module,cocos2dx) \
$(call import-module,extensions) \
$(call import-module,Box2D) \
$(call import-module,v8)
