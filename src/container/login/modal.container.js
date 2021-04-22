import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View} from 'react-native';

const Modal = ({status}) => {
  if (status) {
    return <View>
        <FontAwesomeIcon icon={faCheckCircle} size={24} color="#FFF" />
    </View>;
  }
  return <View></View>;
};

export default Modal;
