import {StackActions} from '@react-navigation/routers';
import auth from '@react-native-firebase/auth';
import {useEffect} from 'react';
export const useRedirect=(props)=>{
    useEffect(() => {
        const timeout = setTimeout(() => {
          if (auth()?.currentUser?.uid) {
            props.navigation.dispatch(StackActions.replace('BookingList'));
          }
        }, 3000);
        return () => {
          clearTimeout(timeout);
        };
      }, [auth().currentUser]);
}