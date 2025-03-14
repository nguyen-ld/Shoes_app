import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

const SizeView = ({item, onPress, isSelected}) => {
  return (
    <View style={[styles.container, isSelected ? styles.select : {}]}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            styles.sizeText,
            isSelected ? {color: 'white', fontFamily: 'Poppins-Medium'} : {},
          ]}>
          {item.size_value}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SizeView;
