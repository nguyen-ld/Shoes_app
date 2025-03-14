import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    width: '20%',
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    elevation: 5,
    padding: 10,
    marginTop: 5,
  },
  imagesGallery: {
    width: '100%',
    height: 40,
    resizeMode: 'cover',
  },
  selected: {
    borderWidth: 2,
    borderColor: '#5B9EE1',
    borderRadius: 12,
  },
});
