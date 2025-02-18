import {Text, View, StatusBar} from 'react-native';
import {styleRegister} from './style';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import GoogleLogin from '../../../components/GoogleLogin';
import FacebookLogin from '../../../components/FacebookLogin';

const Register = ({navigation}) => {
  return (
    <View style={styleRegister.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styleRegister.textContainer}>
        <Text style={styleRegister.titleLogin}>Hello</Text>
        <Text style={styleRegister.contentTitleLogin}>Sign up get Started</Text>
      </View>
      <Input label="Username*" />
      <Input label="Password* " password />
      <Input label="Confirm Password* " password />
      <Text style={{marginBottom: 5}}></Text>
      <Button title="Register"></Button>
      <Text style={styleRegister.text}>or continue with</Text>
      <View style={styleRegister.containerLogin}>
        <FacebookLogin></FacebookLogin>
        <GoogleLogin></GoogleLogin>
      </View>
      <Text style={styleRegister.create}>
        Already have an account ?
        <Text
          style={styleRegister.sign_up}
          onPress={() => navigation.navigate('login')}>
          {' '}
          Login
        </Text>
      </Text>
    </View>
  );
};
export default Register;
