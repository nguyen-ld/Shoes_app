import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {useState} from 'react';
import ModalView from '../Modal';
import {removeItem, updateCartItem} from '../../api/CartAPI';
import CheckBox from '../Checkbox';
const CartView = ({item, ListCart, handleToggle}) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [price, setPrice] = useState(item.priceCurrent);
  const [visible, setVisible] = useState(false);
  const [check, setCheck] = useState(false);
  const [select, setSelect] = useState([]);

  const increaseQuantity = async () => {
    const newQuantity = quantity + 1;
    try {
      console.log('item_id : ', item._id);
      const updatedItem = await updateCartItem(item._id, newQuantity);
      setQuantity(updatedItem.quantity);
      setPrice(updatedItem.priceCurrent);
      ListCart();
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể cập nhật số lượng');
    }
  };

  const decreaseQuantity = async () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      try {
        const updatedItem = await updateCartItem(item._id, newQuantity);
        setQuantity(updatedItem.quantity);
        setPrice(updatedItem.priceCurrent);
        ListCart();
      } catch (error) {
        Alert.alert('Lỗi', 'Không thể cập nhật số lượng');
      }
    } else {
      Alert.alert('Giảm số lượng', 'Số lượng không thể âm !!!');
    }
  };

  const removeItemToList = async () => {
    try {
      const data = await removeItem(item._id);
      console.log('Dữ liệu trả về từ API:', data);
      Alert.alert(
        'Xóa sản phẩm ',
        'Sản phẩm đã được xóa ra khỏi giỏ hàng của bạn ',
      );
      setVisible(false);
      ListCart();
    } catch (error) {
      Alert.alert('Lỗi khi xóa sản phẩm', error.message);
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={styles.conatainer}>
        <CheckBox
          checked={check}
          isChecked={() => {
            setCheck(!check);
            handleToggle(!check, item);
          }}
        />

        <View style={styles.containerImages}>
          <Image source={{uri: item.images}} style={styles.imagesCart} />
        </View>
        <View>
          <Text style={styles.name}>{item.id_product.name}</Text>
          <Text style={styles.priceInitial}>
            {price.toLocaleString('Vi-vn')} đ
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <TouchableOpacity onPress={decreaseQuantity}>
              <Image source={require('../../assets/minus.png')} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity}>
              <Image source={require('../../assets/plus.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 27,
          alignItems: 'center',
        }}>
        <Text style={styles.size}>{item.id_size.size_value}</Text>
        <View>
          <ModalView
            visible={visible}
            onClose={() => setVisible(false)}
            onConfirm={removeItemToList}
            title="Xóa sản phẩm"
            content="Bạn có muốn xóa sản phẩm này ra khỏi giỏ hàng không?"
          />
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Image source={require('../../assets/delete.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CartView;
