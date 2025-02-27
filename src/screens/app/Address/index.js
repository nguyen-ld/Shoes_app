import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {FlatList} from 'react-native-gesture-handler';
import {useCallback, useState} from 'react';
import AddressView from '../../../components/ItemAddress';
import {useFocusEffect} from '@react-navigation/native';
import {ListAddressByUser} from '../../../api/UserAPI';

const AddressEdit = ({navigation, id_user}) => {
  const [address, setAddress] = useState([]);

  useFocusEffect(
    useCallback(() => {
      ListAddressByUser(id_user)
        .then(setAddress)
        .catch(error => console.error('Lỗi khi tải địa chỉ :', error));
    }, []),
  );
  const handlerUpdate = item => {
    navigation.navigate('UpdateAddress', {address: item});
    console.log('item parent : ', address);
  };
  return (
    <View style={styles.container}>
      {address ? (
        <FlatList
          style={{flexGrow: 0}}
          data={address}
          renderItem={({item}) => (
            <AddressView
              item={item}
              handlerUpdate={() => handlerUpdate(item)}
            />
          )}
          keyExtractor={item => item._id.toString()}
          keyboardShouldPersistTaps="handled"
        />
      ) : (
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              textAlign: 'center',
              color: 'red',
              marginVertical: 20,
            }}>
            User has no address
          </Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.containerAdd}
        onPress={() => navigation.navigate('EditAddress')}>
        <Image source={require('../../../assets/add.png')} />
        <Text style={styles.textAddress}>Add new address</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AddressEdit;
