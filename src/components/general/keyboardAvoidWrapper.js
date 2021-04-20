import React from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
const KeyboardAvoidWrapper = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-70}
      style={props.styleWrapper}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {props.children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default KeyboardAvoidWrapper;
