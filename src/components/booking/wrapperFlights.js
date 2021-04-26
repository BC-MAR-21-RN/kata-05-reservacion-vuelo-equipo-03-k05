import React from 'react';
import {ButtonNext} from './';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faPowerOff} from '@fortawesome/free-solid-svg-icons';
const WrapperFlights = props => {
  return (
    <>
      <ButtonNext
        round
        name={<FontAwesomeIcon icon={faPowerOff} size={24} color="#FFF" />}
        functionNext={props.logout}
        active
      />
      {props.children}
      <ButtonNext
        position="absolute"
        round
        name={<FontAwesomeIcon icon={faPlus} size={24} color="#FFF" />}
        functionNext={() => props.navigate('BookingFrom')}
        active={true}
      />
    </>
  );
};
export default WrapperFlights;
