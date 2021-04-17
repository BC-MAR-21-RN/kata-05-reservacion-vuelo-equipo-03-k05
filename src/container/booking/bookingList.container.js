import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {ButtonNext, Reservation} from '../../components/booking';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {general} from './styles';
const listReservation = [
  {
    id: 'id1',
    origin: {city: 'Cartagena', country: 'Colombia'},
    destination: {city: 'Tokio', country: 'Japan'},
    date: 'December 22, 2021',
    passengers: 3,
  },
];

const BookingList = props => {
  const next = () => {
    props.navigation.navigate('BookingFrom');
  };
  const reservations = ({item}) => {
    return <Reservation {...item} />;
  };
  return (
    <View style={general.generalContainer}>
      <Text style={general.tittle}>My flights</Text>
      <FlatList
        data={listReservation}
        renderItem={reservations}
        keyExtractor={item => item.id}
      />
      <ButtonNext
        position="absolute"
        round={true}
        name={<FontAwesomeIcon icon={faPlus} size={24} color="#FFF" />}
        functionNext={next}
        active={true}
      />
    </View>
  );
};

export default BookingList;
