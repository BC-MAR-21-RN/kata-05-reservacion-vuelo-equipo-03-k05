import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {
  useConfigureGoogleSingin,
  useFormLoginController,
  useInputController,
  useLoginSingUp,
  useOnAuthStatusChanged,
} from '../../library/hooks';
import {LayoutLoginStyles as styles} from '../../components/login';
import {InputsContainer, ButtonContainer} from '..';

const LayoutLogin = props => {
  const [inputProps] = useInputController();
  const [loginProps] = useFormLoginController(inputProps);
  const [handleEmailAuthentication, handleAuthWithGoogle] = useLoginSingUp(
    loginProps.login,
    inputProps,
  );

  useConfigureGoogleSingin();
  useOnAuthStatusChanged(props);

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
