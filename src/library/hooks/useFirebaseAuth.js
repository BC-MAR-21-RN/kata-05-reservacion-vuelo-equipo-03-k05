import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import config from '../constants/config.json';
import auth from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/routers';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
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

export const useFirebaseConfig = () => {
 /* useEffect(() => {
    if (!firebase.apps.length) {
      var firebaseConfig = {
        apiKey: 'AIzaSyCILWen9L0dx5EHrlOEtEQ07gh1TSTALaI',
        authDomain: 'flightreservation-3f14d.firebaseapp.com',
        databaseURL:
        'https://flightreservation-3f14d-default-rtdb.firebaseio.com',
        projectId: 'flightreservation-3f14d',
        storageBucket: 'flightreservation-3f14d.appspot.com',
        messagingSenderId: '804086227701',
        appId: '1:804086227701:web:938bba141a7a109be2dbbc',
        measurementId: 'G-9P3CPRGCZ0',
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }
      
  }, []);
  return [database];
  */
};
