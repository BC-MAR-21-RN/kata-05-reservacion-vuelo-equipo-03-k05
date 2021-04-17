import React, {useState} from 'react';
import {View} from 'react-native';
import {ButtonNext, Location, Reservation} from '../../components/booking';
import {KeyboardAvoidWrapper} from '../../components/general';
import {general} from './styles';

const BookingTo = props => {
  const [location, setLocation] = useState('');
  const [active, setActive] = useState(false);
  const next = () => {
    props.navigation.navigate('BookingDate', {
      ...props.route.params,
      destination: location,
    });
  };
  const changeLocation = locate => {
    locate.city && locate.country ? setActive(true) : setActive(false);
    setLocation(locate);
  };
  return (
    <KeyboardAvoidWrapper styleWrapper={general.generalContainer}>
      <View style={general.viewArea}>
        <View>
          <Reservation {...props.route.params} />
          <Location
            text="Where will you be flying to?"
            inputState={location}
            changeState={changeLocation}
            active={active}
          />
        </View>
        <ButtonNext functionNext={next} active={active} />
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default BookingTo;
