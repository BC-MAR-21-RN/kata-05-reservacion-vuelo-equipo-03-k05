import React,{useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import InputsContainer from './InputsContainer';
import {LayoutLoginStyles as styles} from './styles';
import {useFormLoginController, useInputController} from '../../library/hooks';
import ButtonContainer from './ButtonContainer';
import {useLoginSingUp} from '../../library/hooks/useAuthenticationControl';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const LayoutLogin = () => {
  const [inputProps] = useInputController();
  const [props] = useFormLoginController(inputProps);
  const [handleEmailAuthentication, handleAuthWithGoogle] = useLoginSingUp(
    props.login,
    inputProps,
  );

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '804086227701-oehjq4d1tjq64fu07mfdgrdbtu8hm9l6.apps.googleusercontent.com',
    });
  }, []);
  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView />
      <InputsContainer {...props} {...inputProps} />
      <ButtonContainer
        {...props}
        {...inputProps}
        handlePress={handleEmailAuthentication}
        handleAuthWithGoogle={handleAuthWithGoogle}
      />
    </ScrollView>
  );
};

export default LayoutLogin;
