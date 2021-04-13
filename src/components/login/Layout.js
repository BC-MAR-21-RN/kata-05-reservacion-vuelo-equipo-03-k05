import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import CustomButton from './Button';
import Checkbox from './Checkbox';
import InputConfigurable from './InputConfigurable';
import {LayoutLoginStyles as styles} from './styles';
import {useInput, useLogin} from '../../library/hooks';
import {useSingIn} from '../../library/hooks/useSingUpLogIn';
import {useCheckBox} from '../../library/hooks/useInput';
import eye from '../../library/assets/icons/eye.png';
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
          <TouchableOpacity onPress={()=>setIsShowingPassword(!isShowingPassword)} style={styles.icons}>
            <Image source={eye} style={styles.icons} resizeMode="contain" />
          </TouchableOpacity>
        </InputConfigurable>
      </View>
      <View style={styles.buttonContainer}>
        {!login && (
          <Checkbox
            {...privacyProps}
            requiered
            text="I agree to the Terms and Privacy Policy."
          />
        )}
        {!login && (
          <Checkbox
            {...subscribeProps}
            text="Subscribe for select products updates."
          />
        )}
        <View style={styles.buttonArea}>
          <CustomButton
            onPress={() => handlePress()}
            disabled={permisionToInteract}
            text={login ? 'Log In' : 'Sign Up '}
          />
          <Text>or</Text>
          <CustomButton
            disabled={permisionToInteract}
            text={login ? 'Log In with Google' : 'Sign Up with Google'}
          />
          <View style={styles.footerContainer}>
            <Text>
              {`${
                login
                  ? "Don't you have an account?"
                  : 'Already have an account?'
              } `}
            </Text>
            <Text style={styles.textLink} onPress={() => setLogin(!login)}>
              {login ? 'Sing Up' : 'Log In'}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LayoutLogin;
