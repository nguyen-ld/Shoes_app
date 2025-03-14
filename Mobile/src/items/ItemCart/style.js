import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  conatainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  imagesCart: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  priceInitial: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  quantity: {
    fontSize: 18,
    color: '#828A89',
    fontFamily: 'Poppins-Medium',
    marginHorizontal: 3,
  },
  size: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
  },
});
