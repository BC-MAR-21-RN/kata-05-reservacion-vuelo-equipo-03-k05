import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import InputsContainer from './InputsContainer';
import {LayoutLoginStyles as styles} from './styles';
import {useInput, useLogin} from '../../library/hooks';
import {useSingIn} from '../../library/hooks/useSingUpLogIn';
import {useCheckBox} from '../../library/hooks/useInput';
import ButtonContainer from './ButtonContainer';
const LayoutLogin = () => {
  const [nameProps] = useInput('');
  const [emailProps] = useInput('');
  const [passwordProps] = useInput('');
  const [privacyProps] = useCheckBox(false);
  const [subscribeProps] = useCheckBox(false);
  const [ableLogIn] = useLogin(emailProps.value, passwordProps.value);
  const [ableSingIn] = useSingIn(
    nameProps.value,
    emailProps.value,
    passwordProps.value,
    privacyProps.value,
    subscribeProps.value,
  );
  const handlePress = () => console.log('presssed', emailProps);
  const [login, setLogin] = useState(false);
  const permisionToInteract = login ? !ableLogIn : !ableSingIn;
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView />
      <InputsContainer
        login={login}
        nameProps={nameProps}
        emailProps={emailProps}
        passwordProps={passwordProps}
        isShowingPassword={isShowingPassword}
        setIsShowingPassword={setIsShowingPassword}
      />
      <ButtonContainer
        login={login}
        privacyProps={privacyProps}
        subscribeProps={subscribeProps}
        permisionToInteract={permisionToInteract}
        handlePress={handlePress}
        setLogin={setLogin}
      />
    </ScrollView>
  );
};

export default LayoutLogin;
