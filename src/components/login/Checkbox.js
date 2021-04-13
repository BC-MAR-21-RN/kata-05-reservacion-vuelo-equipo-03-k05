import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {CheckBoxStyles as styles, tintCheckBox} from './styles';
const Checkbox = ({text, requiered, ...rest}) => {
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox {...rest} disabled={false} tintColors={tintCheckBox} />
      <Text style={styles.label}>{text}</Text>
      <Text style={{...styles.requiered, ...(!requiered && styles.hide)}}>
        *
      </Text>
    </View>
  );
};

export default Checkbox;
