import {TouchableOpacity, Text} from 'react-native';
import {styleButtonComponents} from './style';
const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styleButtonComponents.container}>
      <Text style={styleButtonComponents.titleButton}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
