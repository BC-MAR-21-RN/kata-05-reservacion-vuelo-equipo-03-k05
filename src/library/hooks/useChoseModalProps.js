import {useEffect, useState} from 'react';
import {
  faCheckCircle,
  faSpinner,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

export const useChoseModalProps = props => {
  const {data, error, loading, login} = props;
  const [state, setState] = useState({});
  useEffect(() => {
    if (data) {
      setState({icon: faCheckCircle, text: login ? 'Logged In' : 'Signed Up'});
    } else if (error) {
      setState({
        icon: faTimesCircle,
        text: login ? "Can't Log in" : "Can't sign up",
      });
    } else if (loading) {
      setState({
        icon: faSpinner,
        text: login ? 'Logging In...' : 'Signing up...',
      });
    } else {
      setState('');
    }
  }, [data, error, loading,]);

  return [state];
};
