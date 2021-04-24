import {useState} from 'react';
import {
  useCheckBox,
  useInput,
  useValidationsLogin,
  useValidationsSingIn,
  useValidationsSingInWithGoogle,
} from '.';

export const useFormLoginController = ({
  nameProps: {value: name},
  emailProps: {value: email},
  passwordProps: {value: password},
  privacyProps: {value: privacy},
}) => {
  const [ableLogIn] = useValidationsLogin(email, password);
  const [ableSingIn] = useValidationsSingIn(name, email, password, privacy);
  const [ableSingInWithGoogle] = useValidationsSingInWithGoogle(privacy);
  const [login, setLogin] = useState(true);
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  return [
    {
      login,
      setLogin,
      permisionToInteract: login ? !ableLogIn : !ableSingIn,
      isShowingPassword,
      setIsShowingPassword,
      ableLogIn,
      ableSingIn,
      permisionSingUp: login ? false : !ableSingInWithGoogle,
      ableSingInWithGoogle,
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
