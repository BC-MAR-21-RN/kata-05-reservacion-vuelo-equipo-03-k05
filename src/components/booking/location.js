import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {locationStyles} from './styles';

const Location = ({
  text = '',
  inputState = '',
  changeState,
  active = false,
}) => {
  const style = locationStyles(active);
  return (
    <View style={style.container}>
      <Text style={style.textStyle}>{text}</Text>
      <TextInput
        style={style.inputStyle}
        placeholder="Select location (City, Country)"
        onChangeText={value => changeState(value)}
        value={inputState}
      />
    </View>
  );
};

export default Location;
