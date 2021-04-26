import React, {useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {WrapperFlights, Reservation} from '../../components/booking';
import {general} from './styles';
import {useLogout, useFirebaseGet} from '../../library/hooks';
import auth from '@react-native-firebase/auth';

const BookingList = props => {
  const [data, setData] = useState([]);
  const reservations = ({item}) => {
    return <Reservation key={item} {...item} />;
  };
  const [logout] = useLogout(props.navigation.navigate);
  useFirebaseGet(auth().currentUser.uid, setData, 'reservas', 'flights');
  return (
    <View style={general.generalContainer}>
      <Text style={general.tittle}>My flights</Text>
      <WrapperFlights navigate={props.navigation.navigate} logout={logout}>
        <FlatList
          data={data}
          renderItem={reservations}
          keyExtractor={item => item.id}
        />
      </WrapperFlights>
    </View>
  );
};

export default BookingList;
