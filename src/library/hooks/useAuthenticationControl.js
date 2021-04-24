import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {setBase64} from '../methods';
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
export const useLoginSingUp = (login, inputs) => {
  const [state, setState] = useState({data: '', error: '', loading: false});
  useEffect(() => {
    setState({...state, login});
  }, [login]);
  const handleEmailAuthentication = () => {
    login
      ? loginUserWithMail(inputs, state, setState)
      : createUserWithMail(inputs, state, setState);
  };
  const handleAuthWithGoogle = async () => {
    setState({...state, loading: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth()
      .signInWithCredential(googleCredential)
      .then(resp => {
        createAditionalData(resp, state, setState, inputs);
      })
      .catch(error => {
        setState({...state, loading: false, error: error});
      });
  };
  return [state, handleEmailAuthentication, handleAuthWithGoogle];
};

const createUserWithMail = (inputs, state, setState) => {
  const {
    emailProps: {value: email},
    passwordProps: {value: password},
  } = inputs;
  setState({...state, loading: true});
  auth()
    .createUserWithEmailAndPassword(email, setBase64(password))
    .then(resp => {
      createAditionalData(resp, state, setState, inputs);
    })
    .catch(error => {
      setState({...state, loading: false, error: error});
    });
};
const loginUserWithMail = (
  {emailProps: {value: email}, passwordProps: {value: password}},
  state,
  setState,
) => {
  setState({...state, loading: true});
  auth()
    .signInWithEmailAndPassword(email, setBase64(password))
    .then(resp => {
      setState({...state, loading: false, data: resp});
    })
    .catch(error => {
      setState({...state, loading: false, error: error});
    });
};

const createAditionalData = (resp, state, setState, inputs) => {
  setState({...state, loading: false, data: resp});
  firestore()
    .collection('userData')
    .doc(auth().currentUser.uid)
    .set({
      name: auth().currentUser.displayName,
      privacityAccepted: inputs.privacyProps.value,
      subscribed: inputs.subscribeProps.value,
    })
    .then(() => {
      firestore()
        .collection('reservas')
        .doc(auth().currentUser.uid)
        .set({flights: []});
    })
    .catch(errr => setState({...state, loading: false, error: errr}));
};

export const useLogout = navigate => {
  const logout = () => {
    auth()
      .signOut()
      .then(() => navigate('Login'));
  };

  return [logout];
};
