import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {colors} from '../../library/styles/global';
import {buttonNext} from './styles';

const ButtonNext = ({
  functionNext,
  active,
  name = 'Next',
  round = false,
  position = 'relative',
}) => {
  const styles = buttonNext(
    20,
    active ? colors.purple : colors.disabled,
    round,
    position,
  );
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
