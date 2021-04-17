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
  {
    id: 'id2',
    origin: {city: 'Bogotá', country: 'Colombia'},
    destination: {city: 'Colima', country: 'Mexico'},
    date: 'September 12, 2021',
    passengers: 1,
  },
  {
    id: 'id3',
    origin: {city: 'Cali', country: 'Colombia'},
    destination: {city: 'Mexico', country: 'Mexico'},
    date: 'April 23, 2022',
    passengers: 2,
  },
  {
    id: 'id4',
    origin: {city: 'Pereira', country: 'Colombia'},
    destination: {city: 'Colima', country: 'Mexico'},
    date: 'April 23, 2022',
    passengers: 4,
  },
  {
    id: 'id5',
    origin: {city: 'Barranquilla', country: 'Colombia'},
    destination: {city: 'San Juan', country: 'Puerto Rico'},
    date: 'April 23, 2022',
    passengers: 2,
  },
  {
    id: 'id6',
    origin: {city: 'Madrid', country: 'Spain'},
    destination: {city: 'San Andres', country: 'Colombia'},
    date: 'April 23, 2022',
    passengers: 1,
  },
  {
    id: 'id7',
    origin: {city: 'Barcelona', country: 'Spain'},
    destination: {city: 'Medellin', country: 'Colombia'},
    date: 'April 23, 2022',
    passengers: 2,
  },
  {
    id: 'id8',
    origin: {city: 'Santiago', country: 'Chile'},
    destination: {city: 'Cartagena', country: 'Colombia'},
    date: 'April 23, 2022',
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
