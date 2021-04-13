import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {buttonNext} from './styles';
const ButtonNext = ({functionNext, active, name = 'Next'}) => {
  const styles = buttonNext(20, active ? '#5c6ef8' : '#b6b7ba');
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        disabled={!active}
        onPress={() => (active ? functionNext() : '')}>
        <Text style={styles.textButton}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonNext;
