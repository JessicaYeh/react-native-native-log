import { NativeModules } from 'react-native';

type NativeLogType = {
  multiply(a: number, b: number): Promise<number>;
};

const { NativeLog } = NativeModules;

export default NativeLog as NativeLogType;
