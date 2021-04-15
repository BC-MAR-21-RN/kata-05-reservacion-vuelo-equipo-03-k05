import {useState} from 'react';
import {useCheckBox, useInput, useLogin, useSingIn} from '.';

import {useLogin, useSingIn} from './useSingUpLogIn';

export const useFormLoginController = inputs => {
  const [ableLogIn] = useLogin(
    inputs.emailProps.value,
    inputs.passwordProps.value,
  );
  const [ableSingIn] = useSingIn(
    inputs.nameProps.value,
    inputs.emailProps.value,
    inputs.passwordProps.value,
    inputs.privacyProps.value,
    inputs.subscribeProps.value,
  );
  const [login, setLogin] = useState(false);
  const permisionToInteract = login ? !ableLogIn : !ableSingIn;
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  return [
    {
      login,
      setLogin,
      permisionToInteract,
      isShowingPassword,
      ableLogIn,
      ableSingIn,
      setIsShowingPassword,
    },
  ];
};

export const useInputController = () => {
  const [nameProps] = useInput('');
  const [emailProps] = useInput('');
  const [passwordProps] = useInput('');
  const [privacyProps] = useCheckBox(false);
  const [subscribeProps] = useCheckBox(false);
  return [{nameProps, emailProps, passwordProps, privacyProps, subscribeProps}];
};
