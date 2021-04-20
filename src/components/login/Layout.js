import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import InputsContainer from './InputsContainer';
import ButtonContainer from './ButtonContainer';
import {LayoutLoginStyles as styles} from './styles';
import {
  useFormLoginController,
  useInputController,
  useLoginSingUp,
} from '../../library/hooks';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {webClientId} from '../../library/constants/config';
const LayoutLogin = props => {
  const [inputProps] = useInputController();
  const [loginProps] = useFormLoginController(inputProps);
  const [handleEmailAuthentication, handleAuthWithGoogle] = useLoginSingUp(
    loginProps.login,
    inputProps,
  );

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: webClientId,
    });
  }, []);
  auth().onAuthStateChanged(user => {
    if (user) {
      console.log('USUARIO====>', props);
  
        props.navigation.navigate('BookingFrom');
   
   
    } else {
    }
  });
  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView />
      <InputsContainer {...loginProps} {...inputProps} />
      <ButtonContainer
        {...loginProps}
        {...inputProps}
        handlePress={handleEmailAuthentication}
        handleAuthWithGoogle={handleAuthWithGoogle}
      />
    </ScrollView>
  );
};

export default LayoutLogin;
