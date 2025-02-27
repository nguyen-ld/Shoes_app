import axios from 'axios';
import {API_BASE_URL, DEFAULT_HEADERS} from '../config/apiConfig';
import {Products} from '../models/Products';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: DEFAULT_HEADERS,
});

export const getListProductById = async id_categories => {
  if (!id_categories) {
    console.error('Lỗi: id_categories không được truyền vào.');
    return [];
  }

  try {
    const response = await api.get(`/getListProduct/${id_categories}`);

    if (response.data.status !== 200) {
      console.warn('Lỗi API:', response.data.message);
      return [];
    }

    console.log('API Response:', response.data.data);

    return response.data.data.map(item => {
      console.log('Sản phẩm nhận được:', item);
      return new Products(
        item._id,
        item.name,
        item.images,
        item.id_categories,
        item.priceInitial,
        item.describe,
      );
    });
  } catch (error) {
    console.error('Lỗi khi lấy danh sách sản phẩm:', error);
    return [];
  }
};
export const getListInfo = async id_product => {
  try {
    const response = await api.get(`/getInfoProductById/${id_product}`);
    if (response.data.status !== 200) {
      console.log('Lỗi API : ', response.data.message);
      return [];
    }
    console.log('sản phẩm nhận được : ', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy thông tin sản phẩm : ', error);
    return [];
  }
};
