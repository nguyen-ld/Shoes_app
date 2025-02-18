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
    height: 380,
  },
  containerTitle: {
    marginBottom: 55,
  },
  titleSplash: {
    fontSize: 30,
    textAlign: 'center',
    color: '#1877F2',
    fontFamily: 'Poppins-SemiBold',
  },
  contentSplash: {
    textAlign: 'center',
    marginTop: 15,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 14,
    letterSpacing: 0.8,
    fontFamily: 'Poppins-Medium',
  },
  containerButton: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  containerSignup: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 40,
  },
  titleSignUp: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
});
