import {Text, View} from 'react-native';
import {styles} from './style';

const OrderView = ({item}) => {
  const formatDate = isoString => {
    if (!isoString) return 'N/A';
    const date = new Date(isoString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <View style={styles.containerText}>
          <Text style={styles.IdOrder}>ID đơn hàng : {item._id}</Text>
          <Text style={styles.dateOrder}>
            Ngày tạo : {formatDate(item.date)}
          </Text>
        </View>
        <View>
          <Text style={styles.priceOrder}>
            {item.totalOrder.toLocaleString('Vi-vn')} đ
          </Text>
          <Text style={styles.quantityOrder}>x {item.totalQuantity}</Text>
        </View>
      </View>
      <Text style={styles.status}>Trạng thái : {item.status}</Text>
      <View style={styles.line}></View>
    </View>
  );
};
export default OrderView;
