import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {setBase64} from '../methods';
import firestore from '@react-native-firebase/firestore';
export const useLoginSingUp = (login, inputs) => {
  const handleEmailAuthentication = () => {
    if (login) {
      loginUserWithMail();
    } else {
      createUserWithMail(inputs);
    }
  };
  const handleAuthWithGoogle = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth()
      .signInWithCredential(googleCredential)
      .then(resp => {
        console.log('RESPONSE=====>', resp);
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
          .catch(errr => console.log('error', errr));
      })
      .catch(error => {
        console.log('ERROR', error);
      });
  };
  return [handleEmailAuthentication, handleAuthWithGoogle];
};

const createUserWithMail = ({
  emailProps: {value: email},
  nameProps: {value: name},
  passwordProps: {value: password},
  privacyProps: {value: privacy},
  subscribeProps: {value: subscribed},
}) => {
  console.log(
    'creatiingUser',
    email,
    name,
    setBase64(password),
    privacy,
    subscribed,
  );

  auth()
    .createUserWithEmailAndPassword(email, setBase64(password))
    .then(() => {
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
        });
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};
const loginUserWithMail = ({
  emailProps: {value: email},

  passwordProps: {value: password},
}) => {
  auth()
    .signInWithEmailAndPassword(email, setBase64(password))
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

export const useLogout = props => {
  const logout = () => {
    console.log('has logout');
    auth()
      .signOut()
      .then(() => props.navigation.navigate('Login'));
  };

  return [logout];
};
