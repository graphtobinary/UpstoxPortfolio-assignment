import { StyleSheet } from 'react-native';
import { Colors } from '../../constans';

export const HoldingItemStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  boldText: {
    fontWeight: 'bold',
    color: Colors.black,
  },
  normalText: {
    color: Colors.black,
  },
  statsContainer: {
    backgroundColor: '#ccc',
  },
});
