import { NativeModules } from 'react-native';

type NativeLogType = {
  log(message: string): void;
  logWithTag(tag: string, message: string): void;
};

const { NativeLog } = NativeModules;

export default NativeLog as NativeLogType;
