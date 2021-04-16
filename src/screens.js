import React from 'react';
import {
  BookingList,
  BookingFrom,
  BookingTo,
  BookingDate,
  BookingPassenger,
  BookingResults,
} from './container';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
export const Stack = createStackNavigator();

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

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

const listScreens = [
  {name: 'BookingList', component: BookingList, back: false},
  {name: 'BookingFrom', component: BookingFrom, back: true},
  {name: 'BookingTo', component: BookingTo, back: true},
  {name: 'BookingDate', component: BookingDate, back: true},
  {name: 'BookingPassenger', component: BookingPassenger, back: true},
  {name: 'BookingResults', component: BookingResults, back: true},
];

export const Screens = () => {
  const listRoutes = () => {
    return listScreens.map(item => {
      return (
        <Stack.Screen
          key={item.name}
          name={item.name}
          options={
            item.back
              ? ({navigation}) => optionsBack(navigation)
              : {headerShown: false}
          }
          component={item.component}
        />
      );
    });
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>{listRoutes()}</Stack.Navigator>
    </NavigationContainer>
  );
};
