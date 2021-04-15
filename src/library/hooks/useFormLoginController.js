import {useState} from 'react';
import {useInput} from '.';
import {useCheckBox} from './useInput';
import {useLogin, useSingIn} from './useSingUpLogIn';

export const useFormLoginController = () => {
  const [nameProps] = useInput('');
  const [emailProps] = useInput('');
  const [passwordProps] = useInput('');
  const [privacyProps] = useCheckBox(false);
  const [subscribeProps] = useCheckBox(false);
  const [ableLogIn] = useLogin(emailProps.value, passwordProps.value);
  const [ableSingIn] = useSingIn(
    nameProps.value,
    emailProps.value,
    passwordProps.value,
    privacyProps.value,
    subscribeProps.value,
  );
  const [login, setLogin] = useState(false);
  const permisionToInteract = login ? !ableLogIn : !ableSingIn;
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  return [{

      login,
      setLogin,
      permisionToInteract,
      isShowingPassword,
      nameProps,
      emailProps,
      passwordProps,
      privacyProps,
      subscribeProps,
      ableLogIn,
      ableSingIn,
      setIsShowingPassword
    }
  ];
};
