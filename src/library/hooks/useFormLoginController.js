import {useState} from 'react';
import {useCheckBox, useInput, useLogin, useSingIn} from '.';
import {useSingInWithGoogle} from './useSingUpLogIn';

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
  
  );
  const [ableSingInWithGoogle] = useSingInWithGoogle(
    inputs.privacyProps.value,
  
  );
  const [login, setLogin] = useState(true);
  const permisionToInteract = login ? !ableLogIn : !ableSingIn;
  const permisionSingUp=login?false:!ableSingInWithGoogle
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  return [
    {
      login,
      setLogin,
      permisionToInteract,
      isShowingPassword,
      ableLogIn,
      ableSingIn,
      permisionSingUp,
      ableSingInWithGoogle,
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
