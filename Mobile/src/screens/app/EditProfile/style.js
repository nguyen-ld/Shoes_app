import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner: {
    flex: 1,
    paddingHorizontal: 25,
  },
  images: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  input: {
    borderBottomWidth: 1,
    padding: 0,
    marginVertical: 5,
    fontSize: 16,
    borderBottomColor: '#A8A6A7',
    fontFamily: 'Poppins-Light',
  },
  titleButton: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  update: {
    backgroundColor: '#5B9EE1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: ' 48%',
  },
  cancel: {
    backgroundColor: 'white',
    borderColor: '#A8A6A7',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: ' 48%',
  },
  containerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    elevation: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 5,
  },
  containerDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDate: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
  },
  titleSex: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    marginVertical: 5,
  },
});
