import {Text, View, StatusBar} from 'react-native';
import {styleLogin} from './style';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import GoogleLogin from '../../../components/GoogleLogin';
import CheckBox from '../../../components/Checkbox';
import {useState} from 'react';
import FacebookLogin from '../../../components/FacebookLogin';
const Login = ({navigation}) => {
  const [check, setCheck] = useState(false);
  const Register = () => {
    navigation.navigate('register');
  };
  return (
    <View style={styleLogin.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styleLogin.textContainer}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styleLogin.titleLogin}>Hello </Text>
          <Text style={[styleLogin.titleLogin, styleLogin.titleLoginTwo]}>
            Again!
          </Text>
        </View>

        <Text style={styleLogin.contentTitleLogin}>Welcome back you’ve</Text>
        <Text style={styleLogin.contentTitleLogin}>been missed!</Text>
      </View>
      <Input label="Username*" />
      <Input label="Password*" password />
      <View style={styleLogin.containerBox}>
        <View style={styleLogin.checkRow}>
          <CheckBox checked={check} isChecked={setCheck}></CheckBox>
          <Text style={styleLogin.checkText}>Remember me?</Text>
        </View>
        <View>
          <Text style={styleLogin.forgot}>Forgot your password?</Text>
        </View>
      </View>
      <Button title="Login"></Button>
      <Text style={styleLogin.text}>or continue with</Text>
      <View style={styleLogin.containerLogin}>
        <FacebookLogin></FacebookLogin>
        <GoogleLogin></GoogleLogin>
      </View>
      <Text style={styleLogin.create}>
        Don’t have an account ?
        <Text style={styleLogin.sign_up} onPress={Register}>
          {' '}
          Sign Up
        </Text>
      </Text>
    </View>
  );
};
export default Login;
