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
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginVertical: 5,
  },
  content: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginVertical: 5,
  },
});
