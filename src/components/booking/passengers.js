import React from 'react';
import {View, Text} from 'react-native';
import {passengersStyles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretRight, faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import Picker from '@gregfrench/react-native-wheel-picker';
var PickerItem = Picker.Item;

const Passengers = ({passengerChange, passenger}) => {
  const itemList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <View style={passengersStyles.container}>
      <Text style={passengersStyles.text}>How many passengers?</Text>
      <View style={passengersStyles.pickerContainer}>
        <FontAwesomeIcon
          icon={faCaretRight}
          style={passengersStyles.iconStyle}
          size={20}
        />
        <Picker
          style={passengersStyles.picker}
          lineColor="#fff" //to set top and bottom line color (Without gradients)
          lineGradientColorFrom="#fff" //to set top and bottom starting gradient line color
          lineGradientColorTo="#fff" //to set top and bottom ending gradient
          selectedValue={passenger}
          itemStyle={passengersStyles.itemStyle}
          onValueChange={index => passengerChange(index)}>
          {itemList.map((value, i) => (
            <PickerItem label={value} value={i} key={i} />
          ))}
        </Picker>
        <FontAwesomeIcon
          icon={faCaretLeft}
          style={passengersStyles.iconStyle}
          size={20}
        />
      </View>
    </View>
  );
};

export default Passengers;
