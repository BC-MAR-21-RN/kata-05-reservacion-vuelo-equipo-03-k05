import React, {useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {ButtonNext, Reservation} from '../../components/booking';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faPowerOff} from '@fortawesome/free-solid-svg-icons';
import {general} from './styles';
import {useLogout} from '../../library/hooks';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import 'moment-timezone';

const BookingList = props => {
  const [data, setData] = useState([]);
  const next = () => {
    props.navigation.navigate('BookingFrom');
  };
  const reservations = ({item}) => {
    return <Reservation key={item} {...item} />;
  };
  const [logout] = useLogout(props);
  const fetchData = () => {
    return firestore()
      .collection('reservas')
      .doc(auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          var DATA = documentSnapshot.data().flights;
          setData(DATA);
        }
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={general.generalContainer}>
      <Text style={general.tittle}>My flights</Text>
      <ButtonNext
        round
        name={<FontAwesomeIcon icon={faPowerOff} size={24} color="#FFF" />}
        functionNext={logout}
        active
      />
      <FlatList
        data={data}
        renderItem={reservations}
        keyExtractor={item => item.id}
      />
      <ButtonNext
        position="absolute"
        round
        name={<FontAwesomeIcon icon={faPlus} size={24} color="#FFF" />}
        functionNext={next}
        active
      />
    </View>
  );
};

export default BookingList;
