import React from 'react';

import {ModalLayout} from '../../components/login';
import {useChoseModalProps, useRedirect} from '../../library/hooks';
const ModalScreen = props => {
  useRedirect(props);
  const {data, error, loading} = props;
  const [newProps] = useChoseModalProps(props);
  if ((!data && !error && !loading) || !newProps) return <></>;
  return <ModalLayout {...newProps} />;
};

export default ModalScreen;
