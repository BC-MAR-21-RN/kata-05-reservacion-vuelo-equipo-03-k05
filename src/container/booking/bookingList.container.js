import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {ButtonNext, Reservation} from '../../components/booking';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {general} from './styles';
const listReservation = [
  {
    id: 'id1',
    cityTo: 'Cartagena',
    countryTo: 'Colombia',
    cityFrom: 'Tokio',
    countryFrom: 'Japon',
    date: 'December 22, 2021',
    passengers: 2,
  },
  {
    id: 'id2',
    cityTo: 'Bogotá',
    countryTo: 'Colombia',
    cityFrom: 'Colima',
    countryFrom: 'Mexico',
    date: 'September 12, 2021',
    passengers: 2,
  },
  {
    id: 'id3',
    cityTo: 'Cali',
    countryTo: 'Colombia',
    cityFrom: 'Mexico',
    countryFrom: 'Mexico',
    date: 'April 23, 2022',
    passengers: 2,
  },
  {
    id: 'id4',
    cityTo: 'Pereira',
    countryTo: 'Colombia',
    cityFrom: 'Colima',
    countryFrom: 'Mexico',
    date: 'April 23, 2022',
    passengers: 2,
  },
  {
    id: 'id5',
    cityTo: 'Barranquilla',
    countryTo: 'Colombia',
    cityFrom: 'San Juan',
    countryFrom: 'Puerto Rico',
    date: 'April 23, 2022',
    passengers: 2,
  },
  {
    id: 'id6',
    cityTo: 'Madrid',
    countryTo: 'Spain',
    cityFrom: 'San Andres',
    countryFrom: 'Colombia',
    date: 'April 23, 2022',
    passengers: 2,
  },
  {
    id: 'id7',
    cityTo: 'Barcelona',
    countryTo: 'Spain',
    cityFrom: 'Medellin',
    countryFrom: 'Colombia',
    date: 'April 23, 2022',
    passengers: 2,
  },
  {
    id: 'id8',
    cityTo: 'Santiago',
    countryTo: 'Chile',
    cityFrom: 'Cartagena',
    countryFrom: 'Colombia',
    date: 'April 23, 2022',
    passengers: 2,
  },
];
const BookingList = props => {
  const next = () => {
    props.navigation.navigate('BookingFrom');
  };
  const reservations = ({item}) => {
    return (
      <Reservation
        key={item.id}
        origin={item.countryFrom}
        destination={item.countryTo}
        date={item.date}
        passengers={item.passengers}
      />
    );
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
