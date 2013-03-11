LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE := jacos2dx_static

LOCAL_MODULE_FILENAME := jacos2dx

LOCAL_SRC_FILES := AppDelegate.cpp \
				   extlib/JacosDevScene.cpp \
				   wrapper/jacos2dx_wrap.cpp \
				   wrapper/libHashTable.cpp \
				   wrapper/toV8lib.cpp \
				   wrapper/manual_wrap.cpp \
				   extlib/CCPhysicNodes.cpp \
				   extlib/GLES-Render.cpp				   
				   
                   
LOCAL_EXPORT_C_INCLUDES := $(LOCAL_PATH)\
						   $(LOCAL_PATH)/extlib\
						   $(LOCAL_PATH)/wrapper

include $(BUILD_STATIC_LIBRARY)
$(call import-module,CocosDenshion/android) \
$(call import-module,cocos2dx) \
$(call import-module,extensions) \
$(call import-module,Box2D) \
$(call import-module,v8) \
\