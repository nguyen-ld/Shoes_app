import {StyleSheet} from 'react-native';

export const styleSplashScreen = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: '#FFFFFF',
    width: '100%',
    flex: 1,
  },
  imgSplash: {
    width: '100%',
    height: 450,
    resizeMode: 'contain',
  },
  containerTitle: {
    marginBottom: 35,
  },
  titleSplash: {
    fontSize: 30,
    textAlign: 'center',
    color: '#5B9EE1',
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 40,
  },
  contentSplash: {
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    letterSpacing: 0.6,
    color: '#707B81',
    fontFamily: 'Poppins-Medium',
  },
  containerSignup: {
    backgroundColor: '#5B9EE1',
    paddingVertical: 20,
    borderRadius: 15,
  },
  titleSignUp: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
});
