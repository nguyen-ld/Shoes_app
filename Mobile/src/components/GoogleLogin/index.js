import {TouchableOpacity, Image, Text} from 'react-native';
import {styleGoogleLogin} from './style';

export const GoogleLogin = () => {
  return (
    <TouchableOpacity style={styleGoogleLogin.container} activeOpacity={1}>
      <Image
        source={require('../../assets/google.png')}
        style={styleGoogleLogin.image}
      />
      <Text style={styleGoogleLogin.text}>Google</Text>
    </TouchableOpacity>
  );
};
export default GoogleLogin;
