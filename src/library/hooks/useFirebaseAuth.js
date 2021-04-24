import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import config from '../constants/config.json';
import auth from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/routers';

export const useConfigureGoogleSingin = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: config.webClientId,
    });
  }, []);
};

export const useOnAuthStatusChanged = props => {
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        props.navigation.dispatch(StackActions.replace('BookingList'));
      } else {
      }
    });
  }, []);
};
