import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Nền mờ đen
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingBox: {
    width: 160,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#333',
  },
});
