import {Image, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {style} from './style';
const Search = ({placeholder}) => {
  return (
    <View style={style.container}>
      <TextInput style={style.inputSearch} placeholder={placeholder} />
      <Image source={require('../../assets/Icon.png')} style={style.image} />
    </View>
  );
};
export default Search;
