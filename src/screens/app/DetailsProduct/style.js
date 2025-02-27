import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // position: 'relative',
  },
  imageProductDetails: {
    width: 300,
    height: 200,
  },
  containerContent: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  titleProduct: {
    fontSize: 20,
    color: '#5B9EE1',
    fontFamily: 'Poppins-SemiBold',
  },
  price: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  describe: {
    color: '#707B81',
    marginTop: 5,
    fontFamily: 'Poppins-Light',
    fontSize: 14,
  },
  categories: {
    marginTop: 10,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  textSize: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    backgroundColor: 'white',
    borderColor: '#F8F9FA',
    borderWidth: 1,
  },
  titleFooter: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  containerButton: {
    backgroundColor: '#5B9EE1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    justifyContent: 'center',
  },
  textButton: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: 'white',
    alignItems: 'center',
  },
});
