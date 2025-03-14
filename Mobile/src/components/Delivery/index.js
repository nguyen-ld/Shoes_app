import {StyleSheet, TouchableOpacity, View, Text, Alert} from 'react-native';
import CheckBox from '../Checkbox';
import {useState} from 'react';

const DeliveryView = ({item, index, setSelectedItem}) => {
  const [check, setCheck] = useState(false);

  const handlerCheck = () => {
    const newCheck = !check;
    setCheck(newCheck);
    setSelectedItem(newCheck ? item : null);
    console.log('id : ', newCheck ? item : 'Không có');
  };
  return (
    <View style={styles.container}>
      <View style={{width: '93%'}}>
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
      <CheckBox checked={check} isChecked={handlerCheck}></CheckBox>
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
  },

  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  name: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: 'rgba(0, 0, 0, .54)',
  },
  location: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: 'rgba(0, 0, 0, .54)',
  },
});
export default DeliveryView;
