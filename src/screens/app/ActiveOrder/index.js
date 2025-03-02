import {useCallback, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './style';
import {FlatList} from 'react-native-gesture-handler';
import {listOrderByUser} from '../../../api/OrderAPI';
import {useFocusEffect} from '@react-navigation/native';
import OrderView from '../../../components/ItemOrder';
const ActiveView = ({id_user}) => {
  const [order, setOrder] = useState([]);

  const listOrder = async () => {
    try {
      const data = await listOrderByUser(id_user, 'Đang xử lý');
      console.log('order list : ', data);
      setOrder(data);
    } catch (error) {
      console.log('Lỗi khi lấy danh sách đơn hàng:', error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      listOrder();
    }, []),
  );
  return (
    <View style={styles.container}>
      {order.length == 0 ? (
        <View style={styles.containerEmpty}>
          <Image
            source={require('../../../assets/not_found.png')}
            style={styles.imagesEmpty}
          />

          <Text style={styles.textEmpty}>
            You have no active orders at this time!
          </Text>
        </View>
      ) : (
        <FlatList
          data={order}
          keyExtractor={(item, index) =>
            item._id ? item._id : index.toString()
          }
          renderItem={({item}) => <OrderView item={item} />}
        />
      )}
    </View>
  );
};
export default ActiveView;
