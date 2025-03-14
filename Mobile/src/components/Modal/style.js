import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 5,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  message: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    marginVertical: 5,
  },
  containerEvent: {
    marginTop: 5,
    alignItems: 'flex-end',
  },
  content: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
  close: {
    alignItems: 'flex-end',
    marginBottom: 5,
  },
});
