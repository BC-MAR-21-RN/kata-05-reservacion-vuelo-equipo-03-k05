import React, {useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {ButtonNext, Reservation} from '../../components/booking';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faPowerOff} from '@fortawesome/free-solid-svg-icons';
import {general} from './styles';
import {useLogout} from '../../library/hooks';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const BookingList = props => {
  const [data, setData] = useState([]);
  const reservations = ({item}) => {
    return <Reservation key={item} {...item} />;
  };
  const [logout] = useLogout(props);

  useEffect(() => {
    const unsubscribeListener = firestore()
      .collection('reservas')
      .doc(auth().currentUser.uid)
      .onSnapshot(documentSnapshot => {
        if (documentSnapshot) {
          var DATA = documentSnapshot.data().flights;
          setData(DATA);
        }
      });
    return () => unsubscribeListener();
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
        functionNext={() => props.navigation.navigate('BookingFrom')}
        active={true}
      />
    </View>
  );
};

export default BookingList;
