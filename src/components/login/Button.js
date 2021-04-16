import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {buttonStyles as styles} from './styles';
const CustomButton = ({text, disabled, ...rest}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      {...rest}
      style={{ ...styles.button,...(disabled && styles.disabled),}}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
