import React, {useEffect} from 'react';
import {View, FlatList, Text, BackHandler} from 'react-native';
import {ButtonNext, Reservation} from '../../components/booking';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {general} from './styles';
import {useBackButtonCustom, useLogout} from '../../library/hooks';

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
  const [logout] = useLogout(props);
  useBackButtonCustom(props);
  return (
    <View style={general.generalContainer}>
      <Text style={general.tittle}>My flights</Text>
      <ButtonNext
        name={<FontAwesomeIcon icon={faPlus} size={24} color="#FFF" />}
        functionNext={logout}
        active={true}
      />
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
