import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {
  useConfigureGoogleSingin,
  useFormLoginController,
  useInputController,
  useLoginSingUp,
} from '../../library/hooks';
import {LayoutLoginStyles as styles} from '../../components/login';
import {InputsContainer, ButtonContainer} from '..';
import ModalScreen from './modal.container';

const LayoutLogin = props => {
  const [inputProps] = useInputController();
  const [loginProps] = useFormLoginController(inputProps);
  const [
    state,
    handleEmailAuthentication,
    handleAuthWithGoogle,
  ] = useLoginSingUp(loginProps.login, inputProps);
  useConfigureGoogleSingin()

  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView />
      <ModalScreen {...{...state, ...props}} />
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
