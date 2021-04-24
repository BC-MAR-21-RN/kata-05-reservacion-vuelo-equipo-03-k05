import React, {useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import {ButtonNext, Reservation} from '../../components/booking';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faPowerOff} from '@fortawesome/free-solid-svg-icons';
import {general} from './styles';
import {useLogout} from '../../library/hooks';
const listReservation = [
  {
    id: 'id1',
    origin: {city: 'Cartagena', country: 'Colombia'},
    destination: {city: 'Tokio', country: 'Japan'},
    date: 'December 22, 2021',
    passengers: 3,
  },
];

const BookingList = ({navigation: {navigate}}) => {
  const [logout] = useLogout(navigate);
  return (
    <View style={general.generalContainer}>
      <Text style={general.tittle}>My flights</Text>
      <ButtonNext
        round={true}
        name={<FontAwesomeIcon icon={faPowerOff} size={24} color="#FFF" />}
        functionNext={logout}
        active={true}
      />
      <FlatList
        data={listReservation}
        renderItem={({item}) => <Reservation {...item} />}
        keyExtractor={item => item.id}
      />
      <ButtonNext
        position="absolute"
        round={true}
        name={<FontAwesomeIcon icon={faPlus} size={24} color="#FFF" />}
        functionNext={() => navigate('BookingFrom')}
        active={true}
      />
    </View>
  );
};

export default BookingList;
