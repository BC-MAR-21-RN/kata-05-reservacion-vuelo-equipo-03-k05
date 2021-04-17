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
  const splitLocation = location => {
    const locationT = location.split(', ', 2);
    changeState({city: locationT[0] || '', country: locationT[1] || ''});
  };
  return (
    <View style={style.container}>
      <Text style={style.textStyle}>{text}</Text>
      <TextInput
        style={style.inputStyle}
        placeholder="Select location (City, Country)"
        onChangeText={value => splitLocation(value)}
        value={inputState}
      />
    </View>
  );
};

export default Location;
