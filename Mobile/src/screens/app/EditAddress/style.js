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
  // switch: {
  //   marginTop: 30,
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   flexDirection: 'row',
  // },
  location: {
    fontFamily: 'Poppins-Medium',
  },
  containerButton: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  complete: {
    paddingVertical: 10,
    marginVertical: 8,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: 'white',
    backgroundColor: '#5B9EE1',
    borderRadius: 10,
  },
  //error
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
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
