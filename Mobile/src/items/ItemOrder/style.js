import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  containerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerText: {
    width: '68%',
  },
  containerNumber: {
    width: '28%',
  },
  IdOrder: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
  },
  dateOrder: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: '#A8A6A7',
  },
  priceOrder: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
  quantityOrder: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#A8A6A7',
    textAlign: 'right',
  },
  status: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#5B9EE1',
    textAlign: 'right',
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#5B9EE1',
    marginTop: 8,
    opacity: 0.3,
  },
});
