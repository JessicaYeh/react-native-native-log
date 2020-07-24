# react-native-native-log

A React Native log function that under the hood calls NSLog() on iOS and Log.i() on Android.

A potential use case for this library is to be able to read logs with an E2E UI testing tool like Appium.

## Installation

```sh
npm install react-native-native-log
```

## Usage

```js
import NativeLog from "react-native-native-log";

// ...

NativeLog.log('hello world'); // hello world
// or
NativeLog.logWithTag('my-tag', 'hello world'); // [my-tag] hello world
```

## Example app

To get started with the project, run `yarn bootstrap` in the root directory to install the required dependencies for each package:

```sh
yarn bootstrap
```

### iOS

To run the example app on iOS:

```sh
yarn example ios
```

In order to see the native logs (they won't show in the normal console log in the Metro window):
  - Run the iOS app from example/ios/NativeLogExample.xcworkspace in Xcode and look at the log window there

### Android

To run the example app on Android:

```sh
yarn example android
```

In order to see the native logs (they won't show in the normal console log in the Metro window):
  - run `adb logcat`

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
