import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
} from 'react-native';
import {styles} from './style';
import Input from '../../../components/Input';
const ChangePassword = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View>
            <View style={styles.containerTitle}>
              <Image source={require('../../../assets/padlock.png')} />
              <Text style={styles.title}>old password</Text>
            </View>
            <Input password></Input>
          </View>
          <View>
            <View style={[styles.containerTitle, {marginTop: 10}]}>
              <Image source={require('../../../assets/padlock.png')} />
              <Text style={styles.title}>New password</Text>
            </View>
            <Input password></Input>
            <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
              <Image source={require('../../../assets/check.png')} />
              <Text style={{fontFamily: 'Poppins-Medium'}}>
                Passwords are 8 to 16 characters long
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 10, marginTop: 5}}>
              <Image source={require('../../../assets/check.png')} />
              <Text style={{fontFamily: 'Poppins-Medium'}}>
                Password must contain numbers, letters, and 1 special character
              </Text>
            </View>
            <View>
              <View style={[styles.containerTitle, {marginTop: 15}]}>
                <Image source={require('../../../assets/padlock.png')} />
                <Text style={styles.title}>Confirm password </Text>
              </View>
              <Input password></Input>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity style={styles.cancel} activeOpacity={1}>
                <Text style={[styles.titleButton, {color: 'black'}]}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.update} activeOpacity={1}>
                <Text style={styles.titleButton}>Cập nhật</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default ChangePassword;
