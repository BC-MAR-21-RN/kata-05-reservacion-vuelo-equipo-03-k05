import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {
  faCheckCircle,
  faSpinner,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import {StackActions} from '@react-navigation/routers';
import {ModalLayout} from '../../components/login';
const ModalScreen = props => {
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
  const {data, error, loading} = props;
  if (data) {
    return (
      <ModalLayout
        icon={faCheckCircle}
        text={props.login ? 'Logged In' : 'Signed Up'}
      />
    );
  }

  if (error) {
    return (
      <ModalLayout
        icon={faTimesCircle}
        text={props.login ? "Can't Log in" : "Can't sign up"}
      />
    );
  }
  if (loading) {
    return (
      <ModalLayout
        icon={faSpinner}
        text={props.login ? 'Logging In...' : 'Signing up...'}
      />
    );
  }
  return <></>;
};

export default ModalScreen;
