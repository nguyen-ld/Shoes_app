import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerImage: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#5B9EE1',
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 25,
    paddingHorizontal: 20,
    position: 'relative',
    backgroundColor: 'white',
    marginTop: 60,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    position: 'absolute',
    top: -50,
    alignSelf: 'center',
  },
  name: {
    fontFamily: 'Poppins-Medium',
    paddingTop: 35,
    fontSize: 16,

    marginBottom: 5,
    textAlign: 'center',
  },
  id: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    textAlign: 'center',
  },
  containerContent: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 15,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#5B9EE1',
  },
});
