import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerCheckout: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    elevation: 5,
    backgroundColor: 'white',
  },
  containerToTalCost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleTotal: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  checkout: {
    backgroundColor: '#5B9EE1',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  containerEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagesEmpty: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 25,
  },
  textEmpty: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    textAlign: 'justify',
    color: 'rgba(0, 0, 0, .8)',
  },
  selectAddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
  },
  address: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  infoUser: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  checkoutEnable: {
    backgroundColor: '#D1C9C9',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  textButtonEnable: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});
