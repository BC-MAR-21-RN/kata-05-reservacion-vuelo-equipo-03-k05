import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import InputsContainer from './InputsContainer';
import {LayoutLoginStyles as styles} from './styles';
import {useFormLoginController, useInputController} from '../../library/hooks';
import ButtonContainer from './ButtonContainer';
const LayoutLogin = () => {
  const handlePress = () => console.log('presssed', emailProps);
  const [inputProps] = useInputController();
  const [props] = useFormLoginController(inputProps);

  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView />
      <InputsContainer {...props} {...inputProps} handlePress={handlePress} />
      <ButtonContainer {...props} {...inputProps} handlePress={handlePress} />
    </ScrollView>
  );
};

export default LayoutLogin;
