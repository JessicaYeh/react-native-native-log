#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(NativeLog, NSObject)

+ (BOOL)requiresMainQueueSetup
{
    return NO;
}

RCT_EXTERN_METHOD(log:(NSString *)message)

RCT_EXTERN_METHOD(logWithTag:(NSString *)tag message:(NSString *)message)

@end
