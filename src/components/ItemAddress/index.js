import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

const AddressView = ({item, index, handlerUpdate}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={handlerUpdate}>
      <View>
        {index >= 1 && <View style={styles.line}></View>}
        <View style={styles.containerInfo}>
          <Text
            style={[
              styles.name,
              {color: 'black', fontFamily: 'Poppins-Medium'},
            ]}>
            {item.fullname}
          </Text>
          <Text style={styles.name}> | </Text>
          <Text style={styles.name}>{item.numberphone}</Text>
        </View>
        <Text style={styles.location}>{item.street}</Text>
        <Text style={styles.location}>
          Phường {item.ward} , Quận <Text>{item.district}</Text> ,{' '}
          <Text>{item.city}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default AddressView;
