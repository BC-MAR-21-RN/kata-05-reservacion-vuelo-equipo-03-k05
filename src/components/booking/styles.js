import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../library/styles/global';

const screenWidth = Dimensions.get('window').width;

export const buttonNext = (pd = 12, colorActive, roundButton, position) => {
  return StyleSheet.create({
    buttonContainer: {
      padding: pd,
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: position,
      bottom: position === 'absolute' ? 20 : 0,
      left: position === 'absolute' ? screenWidth / 2 - 40 : 0,
    },
    buttonStyle: {
      borderRadius: roundButton ? 50 : 10,
      width: roundButton ? 50 : '100%',
      borderWidth: 1,
      borderColor: colorActive,
      padding: 10,
      backgroundColor: colorActive,
      textAlign: 'center',
      justifyContent: 'center',
    },
    textButton: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
};

export const locationStyles = colorBorder => {
  return StyleSheet.create({
    container: {
      marginLeft: 20,
    },
    textStyle: {
      fontSize: 34,
      fontWeight: 'bold',
      width: '80%',
    },
    inputStyle: {
      marginTop: 45,
      borderBottomColor: colorBorder ? colors.purple : colors.disabled,
      borderBottomWidth: colorBorder ? 2 : 1,
    },
  });
};

export const reservationStyle = emptyR => {
  return StyleSheet.create({
    container: {
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 30,
    },
    cityContainer: {
      borderBottomColor: '#b6b7ba',
      alignItems: 'center',
      borderBottomWidth: emptyR ? 0 : 0.7,
    },
    dpContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    planeIcon: {
      color: colors.purple,
      display: emptyR ? 'none' : 'flex',
      position: 'absolute',
      left: screenWidth / 2 - 20,
    },
    begAms: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    ams: {
      textAlign: 'right',
    },
    city: {
      color: '#b6b7ba',
      marginBottom: 5,
      fontSize: 12,
    },
  });
};

export const dateStyle = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 34,
    marginBottom: 15,
    marginLeft: 20,
  },
});
export const passengersStyles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 34,
    marginBottom: 15,
  },
  pickerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    color: colors.purple,
  },
  picker: {width: 100, height: 150, textAlign: 'center'},
  itemStyle: {color: 'black', fontSize: 26, fontWeight: 'bold'},
});
