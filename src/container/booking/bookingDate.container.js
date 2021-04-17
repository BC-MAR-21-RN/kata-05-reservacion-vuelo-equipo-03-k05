import React, {useState} from 'react';
import {View} from 'react-native';
import {ButtonNext, Reservation, Date} from '../../components/booking';
import {general} from './styles';
import moment from 'moment';

const BookingDate = props => {
  const [dateSelected, setDateSelected] = useState('');
  const next = () => {
    props.navigation.navigate('BookingPassenger', {
      ...props.route.params,
      date: moment(dateSelected).format('LL'),
    });
  };
  const dateChange = date => {
    setDateSelected(date ? date.toString() : date);
  };
  return (
    <View style={general.generalContainer}>
      <Reservation {...props.route.params} />
      <Date dateChange={dateChange} />
      <ButtonNext functionNext={next} active={dateSelected} />
    </View>
  );
};

export default BookingDate;
