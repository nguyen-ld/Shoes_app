import {StyleSheet} from 'react-native';
export const styleInput = StyleSheet.create({
  containerView: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 8,
    color: '#4E4B66',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
  container: {
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  input: {
    padding: 15,
    fontWeight: '400',
    flex: 1,
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
  eye: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
  },
});
