import {Text, View, TouchableOpacity, Alert} from 'react-native';
import {style} from './style';
import {FlatList} from 'react-native-gesture-handler';
import {useCallback, useState} from 'react';
import DeliveryView from '../../../components/Delivery';
import {useFocusEffect} from '@react-navigation/native';
import {ListAddressByUser} from '../../../api/UserAPI';
import Loading from '../../../components/ModalLoading';
const SelectAddress = ({navigation, id_user}) => {
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelectedItem] = useState(null);
  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      ListAddressByUser(id_user)
        .then(setAddress)
        .catch(error => console.log('không nhận được địa chỉ  : ', error))
        .finally(() => setLoading(false));
    }, []),
  );
  return (
    <View style={style.container}>
      <FlatList
        data={address}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <DeliveryView item={item} setSelectedItem={setSelectedItem} />
        )}
      />
      {selected == null ? (
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              'Địa chỉ giao hàng',
              'Vui lòng chọn một địa chỉ để nhận đơn hàng của bạn !',
            )
          }
          activeOpacity={1}
          style={style.complete}>
          <Text style={style.successEnable}>Complete</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.9}
          style={style.complete}
          onPress={() => navigation.navigate('Cart', {id_address: selected})}>
          <Text style={style.success}>Complete</Text>
        </TouchableOpacity>
      )}

      <Loading loading={loading}></Loading>
    </View>
  );
};
export default SelectAddress;
