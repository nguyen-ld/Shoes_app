import {StyleSheet} from 'react-native';
export const styleFavourite = StyleSheet.create({
  container: {
    width: '48%',
    height: 210,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 10,
    elevation: 5,
    marginTop: 10,
  },
  containerImages: {
    width: '100%',
    height: 130,
    alignItems: 'center',
    padding: 15,
  },

  imagesFavourite: {
    width: '90%',
    height: '100%',
    resizeMode: 'stretch',
  },
  nameProduct: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    paddingHorizontal: 15,
    flex: 1,
  },
  priceProduct: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    paddingLeft: 15,
  },
  AddToCart: {
    backgroundColor: '#5B9EE1',
    padding: 10,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
  },
});
