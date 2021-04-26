import React from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ButtonNext, Reservation} from '../../components/booking';
import {general, resultContainer} from './styles';

const BookingResults = ({route, navigation}) => {
  const {origin, destination, date, passengers} = route.params;
  const newData = {
    origin,
    destination,
    date,
    passengers,
  };
  const next = () => {
    firestore()
      .collection('reservas')
      .doc(auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          var collectionData = documentSnapshot.data();
          newData.id = collectionData.flights.length.toString();
          collectionData.flights.push(newData);

          firestore()
            .collection('reservas')
            .doc(auth().currentUser.uid)
            .set(collectionData);
          navigation.navigate('BookingList');
        }
      });
  };
  return (
    <View style={general.generalContainer}>
      <View style={resultContainer.result}>
        <Reservation {...route.params} passengers={`${passengers}`} />
        <Text style={resultContainer.text}>Your request was received.</Text>
      </View>
      <ButtonNext name="Finish" functionNext={next} active={true} />
    </View>
  );
};

export default BookingResults;
