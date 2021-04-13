import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import {ButtonNext, Location, Reservation} from '../../components/booking';
import {general} from './styles';
const BookingTo = props => {
  const [location, setLocation] = useState('');
  const [active, setActive] = useState(false);
  const next = () => {
    props.navigation.navigate('BookingDate', {
      Origin: props.route.params.Origin,
      Destination: location.split(', ', 2),
    });
  };
  const changeLocation = city => {
    city.includes(', ') ? setActive(true) : setActive(false);
    setLocation(city);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-70}
      style={general.generalContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={general.viewArea}>
          <View>
            <Reservation origin={props.route.params.Origin[1]} />
            <Location
              text="Where will you be flying to?"
              inputState={location}
              changeState={changeLocation}
              active={active}
            />
          </View>
          <ButtonNext functionNext={next} active={active} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default BookingTo;
