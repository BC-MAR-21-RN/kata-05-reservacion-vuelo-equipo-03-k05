import {StyleSheet} from 'react-native';

export const general = StyleSheet.create({
  generalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export const resultContainer = StyleSheet.create({
  result: {flex: 3, justifyContent: 'center'},
  text: {
    fontWeight: 'bold',
    fontSize: 34,
    marginLeft: 20,
  },
});
