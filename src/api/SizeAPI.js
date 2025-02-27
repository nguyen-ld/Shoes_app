import axios from 'axios';
import {API_BASE_URL, DEFAULT_HEADERS} from '../config/apiConfig';
import {Size} from '../models/Size';

const api = axios.create({
  headers: DEFAULT_HEADERS,
  baseURL: API_BASE_URL,
});

export const getListSize = async () => {
  try {
    const response = await api.get('/getListSizeProduct');
    if (response.data.status !== 200) {
      console.log('Lỗi API : ', response.data.message);
      return [];
    }
    return response.data.data.map(item => {
      console.log('Size nhận được : ', response.data.data);
      return new Size(item._id, item.size_value);
    });
  } catch (error) {
    console.log('Lỗi không nhận được data :  ', error);
    return [];
  }
};
