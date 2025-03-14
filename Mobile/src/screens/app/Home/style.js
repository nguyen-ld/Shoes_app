import {StatusBar, StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: StatusBar.currentHeight,
  },
  containerHeadePage: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  images: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  welcom: {
    flexDirection: 'row',
    gap: 5,
  },
  textWelcom: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
  },
  textNameUser: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  titlecategory: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 10,
  },
});
