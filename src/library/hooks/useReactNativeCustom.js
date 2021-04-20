import {useEffect} from 'react';
import {BackHandler} from 'react-native';
import auth from '@react-native-firebase/auth';
export const useBackButtonCustom = (props) => {

  useEffect(() => {
    
    
    const handleBackButtonClick = () => {
    
    console.log("clicking back");
    
        auth().onAuthStateChanged(user => {
        if (user) {
          props.navigation.navigate('BookingList');
        } else {
          props.navigation.navigate('Login');
        }
      });
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);

    // returned function will be called on component unmount
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);
  
};
