import axios from 'axios';
import {API_BASE_URL, DEFAULT_HEADERS} from '../config/apiConfig';
import {Categories} from '../models/Categories';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: DEFAULT_HEADERS,
});

export const getListCategory = async () => {
  try {
    const response = await api.get('/getListCategories');
    console.log('API Response:', response.data);
    return response.data.data.map(
      item => new Categories(item._id, item.name, item.images),
    );
  } catch (error) {
    console.error('Lỗi khi lấy danh sách danh mục:', error);
    return [];
  }
};
