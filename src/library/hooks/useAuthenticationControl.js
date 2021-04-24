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
    if (login) {
      loginUserWithMail(inputs, state, setState);
    } else {
      createUserWithMail(inputs, state, setState);
    }
  };
  const handleAuthWithGoogle = async () => {
    setState({...state, loading: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth()
      .signInWithCredential(googleCredential)
      .then(resp => {
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
      })
      .catch(error => {
        setState({...state, loading: false, error: error});
      });
  };
  return [state, handleEmailAuthentication, handleAuthWithGoogle];
};

const createUserWithMail = (
  {
    emailProps: {value: email},
    nameProps: {value: name},
    passwordProps: {value: password},
    privacyProps: {value: privacy},
    subscribeProps: {value: subscribed},
  },
  state,
  setState,
) => {
  setState({...state, loading: true});
  auth()
    .createUserWithEmailAndPassword(email, setBase64(password))
    .then(resp => {
      setState({...state, loading: false, data: resp});
      firestore()
        .collection('userData')
        .doc(auth().currentUser.uid)
        .set({
          name: name,
          privacityAccepted: privacy,
          subscribed: subscribed,
        })
        .then(() => {
          firestore()
            .collection('reservas')
            .doc(auth().currentUser.uid)
            .set({flights: []});
        })
        .catch(error => {
          setState({...state, loading: false, error: error});
        });
    })
    .catch(error => {
      setState({...state, loading: false, error: error});
    });
};
const loginUserWithMail = (
  {
    emailProps: {value: email},

    passwordProps: {value: password},
  },
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

export const useLogout = props => {
  const logout = () => {
    auth()
      .signOut()
      .then(() => props.navigation.navigate('Login'));
  };

  return [logout];
};
