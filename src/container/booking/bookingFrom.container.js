import React, {useState} from 'react';
import {View} from 'react-native';
import {ButtonNext, Location, Reservation} from '../../components/booking';
import {KeyboardAvoidWrapper} from '../../components/general';
import {general} from './styles';

const BookingFrom = props => {
  const [location, setLocation] = useState('');
  const [active, setActive] = useState(false);
  const next = () => {
    props.navigation.navigate('BookingTo', {origin: location});
  };
  return (
    <KeyboardAvoidWrapper styleWrapper={general.generalContainer}>
      <View style={general.viewArea}>
        <View>
          <Reservation emptyR={true} />
          <Location
            text="Where are you now?"
            inputState={location}
            setActive={setActive}
            setLocation={setLocation}
            active={active}
          />
        </View>
        <ButtonNext functionNext={next} active={active} />
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default BookingFrom;
