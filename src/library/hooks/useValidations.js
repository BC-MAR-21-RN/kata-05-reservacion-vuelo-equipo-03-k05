import {useEffect, useState} from 'react';
import {isValidEmail, isValidPassword} from '../methods';

export const useValidationsLogin = (email, password) => {
  const [ableLogIn, setableLogIn] = useState(false);
  useEffect(() => {
    if (isValidEmail(email) && isValidPassword(password)) {
      return setableLogIn(true);
    }
    return setableLogIn(false);
  }, [email, password]);

  return [ableLogIn];
};

export const useValidationsSingIn = (user, email, password, privaci) => {
  const [ableSingIn, setableSingIn] = useState(false);

  useEffect(() => {
    if (user && isValidEmail(email) && isValidPassword(password) && privaci) {
      return setableSingIn(true);
    }
    return setableSingIn(false);
  }, [user, email, password, privaci]);

  return [ableSingIn];
};

export const useValidationsSingInWithGoogle = privaci => {
  const [ableSingIn, setableSingIn] = useState(false);
  useEffect(() => {
    if (privaci) {
      return setableSingIn(true);
    }
    return setableSingIn(false);
  }, [privaci]);
  return [ableSingIn];
};
