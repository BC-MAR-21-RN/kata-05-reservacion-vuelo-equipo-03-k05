import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {buttonStyles as styles} from './styles';
const CustomButton = ({text, disabled, ...rest}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      {...rest}
      style={disabled ? styles.disabled : styles.button}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
