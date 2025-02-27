import {Text, View, StatusBar, ScrollView} from 'react-native';
import {styleRegister} from './style';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import GoogleLogin from '../../../components/GoogleLogin';
import FacebookLogin from '../../../components/FacebookLogin';
import {RegisterAccount} from '../../../api/UserAPI';
import {useState} from 'react';
import Loading from '../../../components/ModalLoading';

const Register = ({navigation}) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [useNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const hasSpecialChar = password => {
    const specialCharsPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?/]/;
    return specialCharsPattern.test(password);
  };
  const validateForm = () => {
    let valid = true;

    // Kiểm tra tên đăng nhập
    if (username === null) {
      setUserNameError(true);
      valid = false;
    } else {
      setUserNameError(false);
    }

    // Kiểm tra mật khẩu
    if (password === null) {
      setPasswordError('Vui lòng nhập mật khẩu');
      valid = false;
    } else if (password.length < 8) {
      setPasswordError('Mật khẩu phải có ít nhất 8 ký tự');
      valid = false;
    } else if (password.length > 16) {
      setPasswordError('Mật khẩu phải có tối đa 16 ký tự');
      valid = false;
    } else if (!hasSpecialChar(password)) {
      setPasswordError('Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt');
      valid = false;
    } else {
      setPasswordError(null);
    }

    // Kiểm tra mật khẩu xác nhận
    if (confirmPassword === null) {
      setConfirmPasswordError('Vui lòng nhập mật khẩu xác nhận');
      valid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Mật khẩu xác nhận không khớp');
      valid = false;
    } else {
      setConfirmPasswordError(null);
    }

    return valid;
  };

  const register = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      setLoading(true);
      const response = await RegisterAccount(
        username,
        password,
        confirmPassword,
      );
      if (response) {
        console.log('data đki thành công : ', response);
        navigation.navigate('login');
      }
    } catch (error) {
      console.log('Lỗi khi tạo tài khoản ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styleRegister.container}>
      <View>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <View style={styleRegister.textContainer}>
          <Text style={styleRegister.titleLogin}>Hello</Text>
          <Text style={styleRegister.contentTitleLogin}>
            Sign up get Started
          </Text>
        </View>
        <Input
          label="Username*"
          value={username}
          onChangeText={text => {
            setUsername(text);
            if (text) {
              setUserNameError(false);
            }
          }}
          onBlur={() => {
            if (!username) setUserNameError(true);
          }}
          error={useNameError}
        />
        {useNameError && <Text style={{color: 'red'}}>{useNameError}</Text>}
        <Input
          label="Password* "
          password
          value={password}
          onChangeText={text => {
            setPassword(text);
            if (text) {
              setPasswordError(false);
            }
          }}
          onBlur={() => {
            if (!password) setPasswordError(true);
          }}
          error={passwordError}
        />
        {passwordError && <Text style={{color: 'red'}}>{passwordError}</Text>}
        <Input
          label="Confirm Password* "
          password
          value={confirmPassword}
          onChangeText={text => {
            setConfirmPassword(text);
            if (text) {
              setConfirmPasswordError(false);
            }
          }}
          onBlur={() => {
            if (!confirmPassword) setConfirmPasswordError(true);
          }}
          error={confirmPasswordError}
        />
        {confirmPasswordError && (
          <Text style={{color: 'red'}}>{confirmPasswordError}</Text>
        )}
        <Text style={{marginBottom: 5}}></Text>
        <Button title="Register" onPress={register}></Button>
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
        <Loading loading={loading}></Loading>
      </View>
    </ScrollView>
  );
};
export default Register;
