import {useEffect, useState} from 'react';
import {isValidEmail, isValidPassword} from '../methods';

export const useLogin = (email, password) => {
  const [ableLogIn, setableLogIn] = useState(false);
  useEffect(() => {
    if (isValidEmail(email) && isValidPassword(password)) {
      return setableLogIn(true);
    }
    return setableLogIn(false);
  }, [email, password]);

  return [ableLogIn];
};

export const useSingIn = (user, email, password, privaci, subscribe) => {
  const [ableSingIn, setableSingIn] = useState(false);
  console.log(
    'data',
    privaci,
    subscribe,
    Boolean(user),
    isValidEmail(email),
    isValidPassword(password),
  );
  useEffect(() => {
    if (
      user &&
      isValidEmail(email) &&
      isValidPassword(password) &&
      privaci &&
      subscribe
    ) {
      return setableSingIn(true);
    }
    return setableSingIn(false);
  }, [user, email, password, privaci, subscribe]);

  return [ableSingIn];
};