import React, { useEffect } from 'react';
import {View, Text, TextInput} from 'react-native';
import {useInput} from '../../library/hooks';
import {locationStyles} from './styles';

const Location = ({
  text = '',
  active = false,
  setActive,
  setLocation,
}) => {
  const [propsInput] = useInput('');
  const style = locationStyles(active);
  useEffect(() => {
    const locationT = propsInput.value.split(', ', 2);
    locationT[0] && locationT[1] ? setActive(true) : setActive(false);
    setLocation({city: locationT[0] || '', country: locationT[1] || ''});
  }, [propsInput.value]);

  return (
    <View style={style.container}>
      <Text style={style.textStyle}>{text}</Text>
      <TextInput
        style={style.inputStyle}
        placeholder="Select location (City, Country)"
        {...propsInput}
      />
    </View>
  );
};

export default Location;
