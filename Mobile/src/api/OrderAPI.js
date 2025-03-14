import axios from 'axios';
import {API_BASE_URL, DEFAULT_HEADERS} from '../config/apiConfig';
import {Order} from '../models/Order';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: DEFAULT_HEADERS,
});

export const addOrder = async (id_user, items, id_address) => {
  try {
    const response = await api.post('/addOrder', {
      id_user,
      items,
      id_address,
    });
    if (response.data.status === 200) {
      console.log('Đặt hàng thành công : ', response.data.data);
      return response.data.data;
    } else {
      console.log('API : ', response.data.message);
      return response.data.message;
    }
  } catch (error) {
    console.log('Lỗi khi đặt hàng : ', error);
    return error;
  }
};
export const listOrderByUser = async (id_user, status) => {
  try {
    const response = await api.get(`/getListOrder/${id_user}/status/${status}`);
    if (response.data.status === 200) {
      console.log('Lấy danh sách đơn hàng thành công  : ', response.data.data);
      return response.data.data.map(item => {
        return new Order(
          item._id,
          item.id_user,
          item.totalOrder,
          item.totalQuantity,
          item.status,
          item.date,
        );
      });
    } else {
      console.log('Lấy danh sách đơn hàng thất bại : ', response.data.message);
      return [];
    }
  } catch (error) {
    console.log('Lỗi khi lấy danh sách đơn hàng : ', error);
    return [];
  }
};
