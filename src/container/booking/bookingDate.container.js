import React, {useState} from 'react';
import {View} from 'react-native';
import {ButtonNext, Reservation, Date} from '../../components/booking';
import {general} from './styles';
import moment from 'moment';

const BookingDate = props => {
  const [dateSelected, setDateSelected] = useState('');
  const next = () => {
    props.navigation.navigate('BookingPassenger', {
      Origin: props.route.params.Origin,
      Destination: props.route.params.Destination,
      dateFormat: moment(dateSelected).format('LL'),
    });
  };
  const dateChange = date => {
    setDateSelected(date ? date.toString() : date);
  };
  return (
    <View style={general.generalContainer}>
      <Reservation
        origin={props.route.params.Origin[1]}
        destination={props.route.params.Destination[1]}
      />
      <Date dateChange={dateChange} />
      <ButtonNext functionNext={next} active={dateSelected} />
    </View>
  );
};

export default BookingDate;
