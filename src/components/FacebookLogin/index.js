import {TouchableOpacity, Image, Text} from 'react-native';
import {styleFacebookLogin} from './style';

export const FacebookLogin = () => {
  return (
    <TouchableOpacity style={styleFacebookLogin.container} activeOpacity={1}>
      <Image
        source={require('../../assets/facebook.png')}
        style={styleFacebookLogin.image}
      />
      <Text style={styleFacebookLogin.text}>Facebook</Text>
    </TouchableOpacity>
  );
};
export default FacebookLogin;
