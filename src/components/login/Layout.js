import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import InputsContainer from './InputsContainer';
import {LayoutLoginStyles as styles} from './styles';
import {useFormLoginController} from '../../library/hooks';
import ButtonContainer from './ButtonContainer';
const LayoutLogin = () => {
  const handlePress = () => console.log('presssed', emailProps);

  const [props] = useFormLoginController();

  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView />
      <InputsContainer {...props} handlePress={handlePress} />
      <ButtonContainer {...props} handlePress={handlePress} />
    </ScrollView>
  );
};

export default LayoutLogin;
