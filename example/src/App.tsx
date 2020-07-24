import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import NativeLog from 'react-native-native-log';

export default function App() {
  const [tag, setTag] = React.useState('custom-tag');
  const [message, setMessage] = React.useState('Hello world');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Text>Tag</Text>
        <TextInput style={styles.textInput} value={tag} onChangeText={setTag} />
        <Text>Message</Text>
        <TextInput
          style={styles.textInput}
          value={message}
          onChangeText={setMessage}
        />
        <Button title="Log Message" onPress={() => NativeLog.log(message)} />
        <Button
          title="Log Message with Tag"
          onPress={() => NativeLog.logWithTag(tag, message)}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    width: '100%',
  },
});
