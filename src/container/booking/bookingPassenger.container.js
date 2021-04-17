import React, {useState} from 'react';
import {View} from 'react-native';
import {ButtonNext, Reservation, Passengers} from '../../components/booking';
import {general} from './styles';

const BookingPassenger = props => {
  const [selectedItem, setSelectedItem] = useState(1);
  const next = () => {
    props.navigation.navigate('BookingResults', {
      ...props.route.params,
      numberPassengers: selectedItem + 1,
    });
  };
  const passengerChange = item => {
    setSelectedItem(item);
  };
  return (
    <View style={general.generalContainer}>
      <View style={general.viewArea}>
        <View>
          <Reservation {...props.route.params} />
          <Passengers
            passenger={selectedItem}
            passengerChange={passengerChange}
          />
        </View>
        <ButtonNext functionNext={next} active={true} />
      </View>
    </View>
  );
};

export default BookingPassenger;
