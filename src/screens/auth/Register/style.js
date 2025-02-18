import {StyleSheet} from 'react-native';
export const styleRegister = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  textContainer: {
    marginBottom: 10,
  },
  titleLogin: {
    fontSize: 48,
    fontFamily: 'Poppins-ExtraBold',
    color: '#1877F2',
    marginTop: 30,
  },
  contentTitleLogin: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#4E4B66',
    marginBottom: 30,
  },
  forgot: {
    fontSize: 14,
    textAlign: 'right',
    fontFamily: 'Poppins-Medium',
    color: '#1877F2',
  },
  create: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  text: {
    color: '#4E4B66',
    fontWeight: '500',
    marginVertical: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  sign_up: {
    color: '#1877F2',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  containerLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
});
