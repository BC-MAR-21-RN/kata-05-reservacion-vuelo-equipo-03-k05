import React from 'react';
import {View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlane} from '@fortawesome/free-solid-svg-icons';
import {reservationStyle} from './styles';
const Reservation = ({
  origin = {city: '', country: ''},
  destination = {city: '', country: ''},
  emptyR = false,
  date = '',
  passengers = '',
}) => {
  const styles = reservationStyle(emptyR);
  return (
    <View style={styles.container}>
      <View style={{...styles.cityContainer, ...styles.dpContainer}}>
        <View>
          <Text style={styles.begAms}>{origin.city ? 'BEG' : ''}</Text>
          <Text style={styles.city}>{origin.city}</Text>
        </View>
        <FontAwesomeIcon icon={faPlane} style={styles.planeIcon} />
        <View>
          <Text style={{...styles.begAms, ...styles.ams}}>
            {destination.city ? 'AMS' : ''}
          </Text>
          <Text style={styles.city}>{destination.city}</Text>
        </View>
      </View>
      <View style={styles.dpContainer}>
        <Text>{date}</Text>
        <Text>{passengers}</Text>
      </View>
    </View>
  );
};

export default Reservation;
