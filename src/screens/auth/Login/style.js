import {StyleSheet} from 'react-native';
export const styleLogin = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  textContainer: {
    marginBottom: 10,
    marginTop: 20,
  },
  titleLogin: {
    fontSize: 48,
    fontFamily: 'Poppins-ExtraBold',
  },
  titleLoginTwo: {
    color: '#1877F2',
    marginTop: -20,
  },
  contentTitleLogin: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#4E4B66',
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
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  checkText: {
    color: '#4E4B66',
    fontWeight: '100',
    fontFamily: 'Poppins-Medium',
  },
  containerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 10,
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
