import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {FlatList} from 'react-native-gesture-handler';
import {useCallback, useState} from 'react';
import AddressView from '../../../components/ItemAddress';
import {useFocusEffect} from '@react-navigation/native';
import {ListAddressByUser} from '../../../api/UserAPI';

const AddressEdit = ({navigation, route}) => {
  const [address, setAddress] = useState([]);
  const {id} = route.params || null;
  console.log('id profile => address : ', id);
  useFocusEffect(
    useCallback(() => {
      ListAddressByUser(id)
        .then(setAddress)
        .catch(error => console.error('Lỗi khi tải địa chỉ :', error));
    }, []),
  );
  const handlerUpdate = item => {
    navigation.navigate('UpdateAddress', {address: item, id_user: id});
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
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Image
              source={require('../../../assets/not_found_address.png')}
              style={{width: 280, height: 280}}
            />
          </View>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              textAlign: 'center',
              marginVertical: 20,
              marginHorizontal: 60,
            }}>
            The current user does not have an address !!!
          </Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.containerAdd}
        onPress={() => navigation.navigate('EditAddress', {id: id})}>
        <Image source={require('../../../assets/add.png')} />
        <Text style={styles.textAddress}>Add new address</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AddressEdit;
