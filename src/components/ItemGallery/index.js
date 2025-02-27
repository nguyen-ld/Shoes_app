import {Image, View, TouchableOpacity} from 'react-native';
import {styles} from './style';

const GalleryView = ({item, onPress, isSelected}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, isSelected && styles.selected]}>
      <Image source={{uri: item.images}} style={styles.imagesGallery} />
    </TouchableOpacity>
  );
};

export default GalleryView;
