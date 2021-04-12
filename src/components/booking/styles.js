import {StyleSheet} from 'react-native';
export const buttonNext = (pd = 12, colorButton = '#5c6ef8') => {
  return StyleSheet.create({
    buttonContainer: {
      padding: pd,
      justifyContent: 'flex-end',
    },
    buttonStyle: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colorButton,
      padding: 10,
      backgroundColor: colorButton,
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
      borderBottomColor: colorBorder ? '#5c6ef8' : '#b6b7ba',
      borderBottomWidth: colorBorder ? 2 : 1,
    },
  });
};

export const reservationStyle = emptyR => {
  return StyleSheet.create({
    container: {
      marginLeft: 20,
      marginRight: 20,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 30,
    },
    cityContainer: {
      flexDirection: 'row',
      width: '100%',
      borderBottomColor: '#b6b7ba',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: emptyR ? 0 : 0.7,
    },
    planeIcon: {
      color: '#5c6ef8',
      display: emptyR ? 'none' : 'flex',
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
    dpContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
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
    color: '#5c6ef8',
  },
  picker: {width: 100, height: 150, textAlign: 'center'},
  itemStyle: {color: 'black', fontSize: 26, fontWeight: 'bold'},
});
