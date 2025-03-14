import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagesEmpty: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 25,
  },
  textEmpty: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    textAlign: 'justify',
    color: 'rgba(0, 0, 0, .8)',
  },
});
