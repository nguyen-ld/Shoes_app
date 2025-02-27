import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  name: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: 'rgba(0, 0, 0, .54)',
  },
  location: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: 'rgba(0, 0, 0, .54)',
  },
  line: {
    borderWidth: 0.8,
    borderColor: 'rgba(0, 0, 0, .09)',
    marginVertical: 15,
  },
});
