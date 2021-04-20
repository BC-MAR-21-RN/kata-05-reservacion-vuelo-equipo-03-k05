import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import {webClientId} from '../constants/config';
import auth from '@react-native-firebase/auth';
export const useConfigureGoogleSingin = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:webClientId,
    });
  }, []);
};

export const useOnAuthStatusChanged = props => {
  auth().onAuthStateChanged(user => {
    if (user) {
      () => {
        props.navigation.navigate('BookingFrom');
      };
    } else {
    }
  });
};
