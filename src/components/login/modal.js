import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Modal, Text, View} from 'react-native';
import {modalStyles as styles} from './styles';

const ModalLayout = ({icon, text}) => {
  return (
    <Modal visible transparent animationType="slide">
      <View style={styles.mainContainer}>
        <View style={styles.infoContainer}>
          <FontAwesomeIcon icon={icon} size={60} color="#5c6ef8" />
          <Text style={styles.textModal}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalLayout
