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
const BookingFrom = props => {
  const [location, setLocation] = useState('jojo');
  const [active, setActive] = useState(false);

  const next = () => {
    props.navigation.navigate('BookingTo', {Origin: location.split(', ', 2)});
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
            <Reservation emptyR={true} />
            <Location
              text="Where are you now?"
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

export default BookingFrom;
