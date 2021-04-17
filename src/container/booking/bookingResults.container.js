import React from 'react';
import {View, Text} from 'react-native';
import {ButtonNext, Reservation} from '../../components/booking';
import {general, resultContainer} from './styles';
const BookingResults = props => {
  const next = () => {
    /*props.navigation.navigate('myflights', {Origin: props.route.params.Origin,
      Destination: props.route.params.Destination,
      dateFormat: props.route.params.dateFormat,
      numberPassengers: props.route.params.numberPassengers,});*/
  };
  return (
    <View style={general.generalContainer}>
      <View style={resultContainer.result}>
        <Reservation
          {...props.route.params}
          passengers={`${props.route.params.numberPassengers}`}
        />
        <Text style={resultContainer.text}>Your request was received.</Text>
      </View>
      <ButtonNext name="Finish" functionNext={next} active={true} />
    </View>
  );
};

export default BookingResults;
