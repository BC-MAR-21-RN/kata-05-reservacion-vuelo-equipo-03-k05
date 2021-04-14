import React from 'react';
import {View, Text} from 'react-native';
import Checkbox from './Checkbox';
import CustomButton from './Button';
import {buttonContainerStyles as styles} from './styles';
const ButtonContainer = ({
  login,
  privacyProps,
  subscribeProps,
  permisionToInteract,
  handlePress,
  setLogin,
}) => {
  return (
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
              login ? "Don't you have an account?" : 'Already have an account?'
            } `}
          </Text>
          <Text style={styles.textLink} onPress={() => setLogin(!login)}>
            {login ? 'Sing Up' : 'Log In'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ButtonContainer;
