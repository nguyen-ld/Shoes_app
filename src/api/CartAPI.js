import axios from 'axios';
import {API_BASE_URL, DEFAULT_HEADERS} from '../config/apiConfig';
import {CartItems} from '../models/CartItems';
import {Alert} from 'react-native';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: DEFAULT_HEADERS,
});

export const addToCart = async (
  id_user,
  id_product,
  id_size,
  quantity = 1,
  images,
) => {
  try {
    const response = await api.post('/addToCart', {
      id_product,
      id_size,
      id_user,
      quantity,
      images,
    });

    if (response.data.status === 200) {
      Alert.alert(
        'Thêm sản phẩm vào giỏ hàng ',
        'Sản phẩm đã được thêm thành công vào giỏ hàng!',
      );
    } else {
      console.error('API trả về lỗi:', data);
      Alert.alert('Lỗi', 'Không thể thêm sản phẩm vào giỏ hàng.');
    }
  } catch (error) {
    console.log(' Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
  }
};
export const getListCartByUser = async id_user => {
  try {
    const response = await api.get(`/getListCart/${id_user}`);
    if (response.data.status !== 200) {
      console.log('Lỗi API : ', response.data.message);
      return [];
    }
    console.log('Danh sách giỏ hàng nhận được : ', response.data.data);
    return response.data.data.map(item => {
      return new CartItems(
        item._id,
        item.id_product,
        item.id_cart,
        item.id_size,
        item.quantity,
        item.priceCurrent,
        item.images,
      );
    });
  } catch (error) {
    console.log('Lỗi khi lấy danh sách giỏ hàng  :  ', error);
    return [];
  }
};
export const updateCartItem = async (id_cartItems, quantity) => {
  try {
    const response = await api.post('/updateQuantity', {
      id_cartItems,
      quantity,
    });
    if (response.data.status === 200) {
      console.log('update số lượng thành công :', response.data.data);
      return response.data.data;
    } else {
      console.log('update số lượng thất bại :', response.data.message);
      return null;
    }
  } catch (error) {
    console.log('Lỗi khi cập nhật số lượng : ', error);
    return null;
  }
};
export const removeItem = async id_product => {
  try {
    const response = await api.delete(`/removeItem/${id_product}`);
    if (response.data.status === 200) {
      console.log('Xóa thành công sản phẩm : ', response.data.status);
      return response.data.data;
    } else {
      console.log('Xóa thất bại ', response.data.message);
      return null;
    }
  } catch (error) {
    console.log('Lỗi khi xóa sản phẩm : ', error);
    return null;
  }
};
