import {View, Text, TextInput, Pressable, Image} from 'react-native';
import {useState} from 'react';
import {styleInput} from './style';

const Input = ({label, password, value, onChangeText, error, onBlur}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPassWord, setIsPassWord] = useState(false);

  const showPass = () => {
    setIsPassWord(!isPassWord);
  };

  return (
    <View style={styleInput.containerView}>
      <Text style={styleInput.label}>{label}</Text>
      <View
        style={[
          styleInput.container,
          {
            borderColor: error
              ? 'red' // Nếu có lỗi, viền đỏ
              : isFocused
              ? '#1F41BB'
              : '#4E4B66',
          },
        ]}>
        <TextInput
          style={styleInput.input}
          placeholderTextColor="#626262"
          secureTextEntry={password && !isPassWord}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            if (onBlur) onBlur();
          }}
          value={value}
          onChangeText={onChangeText}
        />
        {password && (
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
        )}
      </View>
    </View>
  );
};
export default Input;
