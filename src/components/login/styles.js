import {StyleSheet} from 'react-native';
import {colors} from '../../library/styles/global';

export const LayoutLoginStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  textInputContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  titleText: {
    marginHorizontal: '5%',
    fontSize: 22,
    color: colors.purple,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingVertical: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  buttonArea: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textLink: {
    color: colors.purple,
    textDecorationLine: 'underline',
  },
  icons: {
    width: 20,
    height: 20,
    tintColor: 'black',
  },
});

export const buttonStyles = StyleSheet.create({
  button: {
    height: 40,
    width: '90%',
    borderRadius: 10,
    backgroundColor: colors.purple,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  disabled: {
    height: 40,
    width: '90%',
    borderRadius: 10,
    backgroundColor: colors.grey,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  textButton: {
    color: 'white',
    fontSize: 16,
  },
});

export const tintCheckBox = {
  true: colors.purple,
  false: 'black',
};
export const CheckBoxStyles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  checkbox: {
    alignSelf: 'center',
    backgroundColor: 'red',
  },
  label: {
    margin: 8,
    color: colors.grey,
  },
  hide: {
    display: 'none',
  },
  requiered: {
    color: 'red',
  },
});

export const InputConfigurableStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 10,
  },
  textInput: {
    marginHorizontal: 5,
    width: '80%',
    height: 40,
    color: 'black',
    width: '88%',
    height: 40,
  },
  titleText: {
    paddingVertical: 10,
    marginHorizontal: '5%',
  },
  searchContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingRight: 20,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 2,
  },
  hide: {
    display: 'none',
  },
  focused: {
    borderColor: colors.purple,
    borderWidth:2
  },
});
