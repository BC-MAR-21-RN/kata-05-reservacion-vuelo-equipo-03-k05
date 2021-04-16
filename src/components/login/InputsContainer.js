import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import InputConfigurable from './InputConfigurable';
import {inputsContainerStyles as styles} from './styles';
import eye from '../../library/assets/icons/eye.png';
const InputsContainer = ({login, nameProps, emailProps, passwordProps,isShowingPassword,setIsShowingPassword}) => {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.titleText}>{login ? 'Log In' : 'Sing Up'}</Text>
      <InputConfigurable {...nameProps} hidden={login} title="First Name" />
      <InputConfigurable {...emailProps} title="Email *" />
      <InputConfigurable
        {...passwordProps}
        secureTextEntry={isShowingPassword}
        title="Password *"
        downText={
          login
            ? ''
            : 'Use 8 or more characters with a mix of letters, numbers and symbols'
        }>
        <TouchableOpacity
          onPress={() => setIsShowingPassword(!isShowingPassword)}
          style={styles.icons}>
          <Image source={eye} style={styles.icons} resizeMode="contain" />
        </TouchableOpacity>
      </InputConfigurable>
    </View>
  );
};

export default InputsContainer;
