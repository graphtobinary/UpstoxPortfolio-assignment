import { StyleSheet } from 'react-native';
import { Colors } from '../../constans';

export const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
  },
  listHeaderStyle: {
    backgroundColor: Colors.primaryColor,
    padding: 15,
  },
  listHeaderTextStyle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
