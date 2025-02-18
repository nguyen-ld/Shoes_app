import {Image, Touchable, TouchableOpacity, View} from 'react-native';
import {styleCheckBox} from './style';
const CheckBox = ({checked, isChecked}) => {
  return (
    <TouchableOpacity
      style={styleCheckBox.container}
      activeOpacity={1}
      onPress={() => isChecked(!checked)}>
      {checked ? (
        <View style={styleCheckBox.innerContainer}>
          <Image
            style={styleCheckBox.checkIcon}
            source={require('../../assets/icon_checkbox.png')}></Image>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};
export default CheckBox;
