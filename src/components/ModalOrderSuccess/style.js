import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '75%',
    paddingHorizontal: 20,
    paddingVertical: 40,
    elevation: 5,
  },
  images: {
    width: 114,
    height: 114,
    resizeMode: 'contain',
  },
  titleModal: {
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    marginVertical: 15,
    marginHorizontal: 40,
    fontSize: 16,
  },
  buttonModal: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    backgroundColor: '#5B9EE1',
    marginHorizontal: 30,
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 15,
    color: 'white',
  },
});
