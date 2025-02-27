import {
  Text,
  View,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {styleLogin} from './style';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import GoogleLogin from '../../../components/GoogleLogin';
import CheckBox from '../../../components/Checkbox';
import {useState, useEffect} from 'react';
import FacebookLogin from '../../../components/FacebookLogin';
import {LoginApplication} from '../../../api/UserAPI';
import Loading from '../../../components/ModalLoading';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [check, setCheck] = useState(false);
  const Register = () => {
    navigation.navigate('register');
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedUsername = await AsyncStorage.getItem('username');
        const savedPassword = await AsyncStorage.getItem('password');
        console.log('Dữ liệu lấy được:', savedUsername, savedPassword);
        if (savedUsername !== null && savedPassword !== null) {
          setUsername(savedUsername);
          setPassword(savedPassword);
          setCheck(true);
        }
      } catch (error) {
        console.log('Lỗi khi lấy dữ liệu:', error);
      }
    };

    loadData();
  }, []);

  const LoginApp = async () => {
    if (!validate()) {
      return;
    }
    setLoading(true);
    try {
      const result = await LoginApplication(username, password);
      if (result) {
        console.log('Login successfully', result);

        if (check) {
          await AsyncStorage.setItem('username', username);
          await AsyncStorage.setItem('password', password);
        } else {
          await AsyncStorage.removeItem('username');
          await AsyncStorage.removeItem('password');
        }
        navigation.navigate('tabs', {id_user: result._id});
      } else {
        console.log('Sai tên đăng nhập hoặc mật khẩu');
      }
    } catch (error) {
      console.log('Lỗi khi đăng nhập', error);
    } finally {
      setLoading(false);
    }
  };

  const validate = () => {
    let valid = true;
    if (!username.trim()) {
      setErrorUsername(true);
      valid = false;
    } else {
      setErrorUsername(false);
    }
    if (!password.trim()) {
      setErrorPassword(true);
      valid = false;
    } else {
      setErrorPassword(false);
    }
    return valid;
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styleLogin.container}>
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          <View style={styleLogin.textContainer}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styleLogin.titleLogin}>Hello </Text>
              <Text style={[styleLogin.titleLogin, styleLogin.titleLoginTwo]}>
                Again!
              </Text>
            </View>
            <Text style={styleLogin.contentTitleLogin}>
              Welcome back you’ve
            </Text>
            <Text style={styleLogin.contentTitleLogin}>been missed!</Text>
          </View>

          <Input
            label="Username*"
            value={username}
            onChangeText={text => {
              setUsername(text);
              if (text.trim()) setErrorUsername(false);
            }}
            onBlur={() => {
              if (!username.trim()) setErrorUsername(true);
            }}
            error={errorUsername}
          />
          {errorUsername && (
            <Text style={{color: 'red'}}>Vui lòng nhập tên đăng nhập</Text>
          )}

          <Input
            label="Password*"
            password
            value={password}
            onChangeText={text => {
              setPassword(text);
              if (text.trim()) setErrorPassword(false);
            }}
            onBlur={() => {
              if (!password.trim()) setErrorPassword(true);
            }}
            error={errorPassword}
          />
          {errorPassword && (
            <Text style={{color: 'red'}}>Vui lòng nhập mật khẩu</Text>
          )}

          <View style={styleLogin.containerBox}>
            <View style={styleLogin.checkRow}>
              <CheckBox
                checked={check}
                isChecked={() => setCheck(!check)}></CheckBox>
              <Text style={styleLogin.checkText}>Remember me?</Text>
            </View>
            <View>
              <Text style={styleLogin.forgot}>Forgot your password?</Text>
            </View>
          </View>
          <Button title="Login" onPress={LoginApp}></Button>
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
          <Loading loading={loading}></Loading>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default Login;
