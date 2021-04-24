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

  if (!data && !error && !loading) return <></>;
  return (
    <ModalLayout
      {...(data
        ? {icon: faCheckCircle, text: login ? 'Logged In' : 'Signed Up'}
        : error
        ? {
            icon: faTimesCircle,
            text: login ? "Can't Log in" : "Can't sign up",
          }
        : loading
        ? {
            icon: faSpinner,
            text: login ? 'Logging In...' : 'Signing up...',
          }
        : null)}
    />
  );
};

export default ModalScreen;
