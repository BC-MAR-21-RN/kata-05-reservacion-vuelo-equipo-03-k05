import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BookingFrom,
  BookingTo,
  BookingDate,
  BookingPassenger,
  BookingResults,
} from './src/container';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
const Stack = createStackNavigator();
const App = () => {
  const optionsBack = navigation => ({
    headerTitle: '',
    headerStyle: {
      elevation: 0, // remove shadow on Android
      shadowOpacity: 0, // remove shadow on iOS
    },
    headerLeft: () => (
      <FontAwesomeIcon
        onPress={() => navigation.goBack()}
        icon={faAngleLeft}
        size={24}
        color="#5c6ef8"
      />
    ),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BookingFrom"
          options={({navigation}) => optionsBack(navigation)}
          component={BookingFrom}
        />
        <Stack.Screen
          name="BookingTo"
          options={({navigation}) => optionsBack(navigation)}
          component={BookingTo}
        />
        <Stack.Screen
          name="BookingDate"
          options={({navigation}) => optionsBack(navigation)}
          component={BookingDate}
        />
        <Stack.Screen
          name="BookingPassenger"
          options={({navigation}) => optionsBack(navigation)}
          component={BookingPassenger}
        />
        <Stack.Screen
          name="BookingResults"
          options={({navigation}) => optionsBack(navigation)}
          component={BookingResults}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
