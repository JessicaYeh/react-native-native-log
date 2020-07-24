package com.reactnativenativelog

import android.util.Log

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

private const val TAG = "NativeLog"

class NativeLogModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return TAG
    }

    @ReactMethod
    fun log(message: String) {
        Log.i(TAG, message)
    }

    @ReactMethod
    fun logWithTag(tag: String, message: String) {
        Log.i(tag, "[$tag] $message")
    }
    
}
