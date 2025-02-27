import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner: {
    flex: 1,
    padding: 24,
  },
  containerTitle: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  titleButton: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  update: {
    backgroundColor: '#5B9EE1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '48%',
  },
  cancel: {
    backgroundColor: 'white',
    borderColor: '#A8A6A7',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '48%',
  },
});
