import React from 'react';
import {
  faCheckCircle,
  faSpinner,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import {ModalLayout} from '../../components/login';
import {useRedirect} from '../../library/hooks';
const ModalScreen = props => {
  useRedirect(props);
  const {data, error, loading, login} = props;

  const newProps = () => {
    console.log("DATA",data, error, loading,);
    if (data) {
      return {icon: faCheckCircle, text: login ? 'Logged In' : 'Signed Up'};
    } else if (error) {
      return {
        icon: faTimesCircle,
        text: login ? "Can't Log in" : "Can't sign up",
      };
    } else if (loading) {
      return {
        icon: faSpinner,
        text: login ? 'Logging In...' : 'Signing up...',
      };
    } else {
      return '';
    }
  };

if (!newProps())return <></>;

 return <ModalLayout {...newProps()} />;
};

export default ModalScreen;
