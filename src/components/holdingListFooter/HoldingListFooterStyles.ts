import { StyleSheet } from 'react-native';
import { Colors } from '../../constans';

export const HoldingListFooterStyles = StyleSheet.create({
  footerContainer: {
    marginTop: 20,
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
  extraFooterMargin: {
    marginVertical: 10,
  },
});
