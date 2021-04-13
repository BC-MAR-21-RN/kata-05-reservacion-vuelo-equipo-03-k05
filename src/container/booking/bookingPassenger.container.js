import React, {useState} from 'react';
import {View} from 'react-native';
import {ButtonNext, Reservation, Passengers} from '../../components/booking';
import {general} from './styles';

const BookingPassenger = props => {
  const [selectedItem, setSelectedItem] = useState(1);

  const next = () => {
    props.navigation.navigate('BookingResults', {
      Origin: props.route.params.Origin,
      Destination: props.route.params.Destination,
      dateFormat: props.route.params.dateFormat,
      numberPassengers: selectedItem + 1,
    });
  };
  const passengerChange = item => {
    setSelectedItem(item);
    console.log(item);
  };
  return (
    <View style={general.generalContainer}>
      <View style={general.viewArea}>
        <View>
          <Reservation
            origin={props.route.params.Origin[1]}
            destination={props.route.params.Destination[1]}
            date={props.route.params.dateFormat}
          />
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
