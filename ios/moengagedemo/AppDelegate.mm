#import "AppDelegate.h"
#import <ReactNativeMoEngage/MoEngageInitializer.h>
#import <ReactNativeMoEngage/MoEngageReactSDKInitializationConfig.h>
#import <MoEngageSDK/MoEngageSDK.h>
#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"moengagedemo";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

   MoEngageSDKConfig* sdkConfig = [[MoEngageSDKConfig alloc] initWithAppId:@"YOUR Workspace ID" dataCenter: YOUR_DATA_CENTER];
    sdkConfig.consoleLogConfig = [[MoEngageConsoleLogConfig alloc] initWithIsLoggingEnabled:true loglevel:MoEngageLoggerTypeVerbose];
    [[MoEngageInitializer sharedInstance] initializeDefaultSDKConfig:sdkConfig andLaunchOptions:launchOptions];
    
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
