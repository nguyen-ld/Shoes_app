import {useState} from 'react';
import {styleInput} from './style';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Text,
  Pressable,
  Image,
} from 'react-native';

const Input = ({label, password}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPassWord, setIsPassWord] = useState(false);
  const showPass = () => {
    setIsPassWord(!isPassWord);
  };
  return (
    <KeyboardAvoidingView
      style={styleInput.containerView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        keyboardShouldPersistTaps="always">
        <View>
          <Text style={styleInput.label}>{label}</Text>
          <View
            style={[
              styleInput.container,
              {borderColor: isFocused ? '#1F41BB' : '#4E4B66'},
            ]}>
            <TextInput
              style={styleInput.input}
              placeholderTextColor="#626262"
              secureTextEntry={password && !isPassWord}
              onFocus={() => {
                setIsFocused(true);
                console.log('Input Focused:', isFocused);
              }}
              onBlur={() => {
                setIsFocused(false);
                console.log('Input Blurred:', isFocused);
              }}
            />
            {password ? (
              <Pressable onPress={showPass}>
                <Image
                  style={styleInput.eye}
                  source={
                    isPassWord
                      ? require('../../assets/eye.png')
                      : require('../../assets/eye-close.png')
                  }
                />
              </Pressable>
            ) : null}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Input;
