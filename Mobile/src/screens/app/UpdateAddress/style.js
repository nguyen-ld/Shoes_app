import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBody: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 20,
    margin: 8,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, .2)',
    margin: 0,
    paddingTop: 10,
    paddingHorizontal: 0,
  },
  location: {
    fontFamily: 'Poppins-Medium',
  },
  containerButton: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  complete: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 8,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: 'white',
    backgroundColor: '#5B9EE1',
    borderRadius: 10,
  },
  delete: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 8,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#5B9EE1',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#5B9EE1',
    borderRadius: 10,
  },

  //error
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginLeft: 0,
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 8,
  },
});
