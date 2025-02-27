import axios from 'axios';
import {API_BASE_URL, DEFAULT_HEADERS} from '../config/apiConfig';
import {Gallery} from '../models/GalleryProduct';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: DEFAULT_HEADERS,
});

export const getListGalleryImages = async id_product => {
  try {
    const response = await api.get(`/getListImagesGallery/${id_product}`);
    if (response.data.status != 200) {
      console.log('Lỗi API', response.data.message);
      return [];
    }
    return response.data.data.map(item => {
      console.log('Bộ sưu tập nhận được ', response.data.data);
      return new Gallery(item._id, item.images, item.id_product);
    });
  } catch (error) {
    console.error('Lỗi khi lấy danh sách sản phẩm:', error);
    return [];
  }
};
