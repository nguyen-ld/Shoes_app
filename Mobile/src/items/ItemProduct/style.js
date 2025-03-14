import {Dimensions, StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    width: '48%',
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 10,
    elevation: 5,
  },

  containerImages: {
    width: '100%',
    height: 150,
    alignItems: 'center',
  },

  images: {
    width: '90%',
    height: '100%',
    resizeMode: 'contain',
  },

  productName: {
    flex: 1,
    alignContent: 'stretch',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    textTransform: 'capitalize',
    textAlign: 'left',
    paddingHorizontal: 10,
  },
  price: {
    fontFamily: 'Poppins-Medium',
    paddingHorizontal: 10,
    fontSize: 15,
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonAdd: {
    backgroundColor: '#5b9ee1',
    padding: 10,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  add: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 18,
  },
  heartIcon: {
    width: 36,
    height: 36,
  },
  containerHeart: {
    position: 'absolute',
    right: 10,
    top: 5,
  },
});
