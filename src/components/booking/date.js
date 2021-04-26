import React from 'react';
import {View, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {dateStyle} from './styles';
const Date = ({dateChange}) => {
  return (
    <View>
      <Text style={dateStyle.text}>Select date</Text>
      <CalendarPicker 
        previousComponent={
          <FontAwesomeIcon icon={faAngleLeft} size={24} color="#5c6ef8" />
        }
        nextComponent={
          <FontAwesomeIcon icon={faAngleRight} size={24} color="#5c6ef8" />
        }
        
        weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
        onDateChange={date => dateChange(date)}
      />
    </View>
  );
};

export default Date;
