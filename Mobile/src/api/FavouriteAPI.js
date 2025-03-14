import axios from 'axios';
import {API_BASE_URL, DEFAULT_HEADERS} from '../config/apiConfig';
import {Favourites} from '../models/favourite';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: DEFAULT_HEADERS,
});

export const getListFavourite = async () => {
    try {
        const response = await api.get('/getListFavourite');
        if (response.data.status === 200) {
            return response.data.data.map(item => {
                return new Favourites(item._id, item.id_product);
            });
        }
    } catch (error) {
        console.log('Không có sản phẩm  ', error);
        return [];
    }
};
export const addFavourite = async id_product => {
    try {
        const response = await api.post('/addFavourite', {id_product});
        return response.data;
    } catch (error) {
        console.error('Lỗi khi thêm sản phẩm yêu thích:', error);
        return {status: 500, message: 'Lỗi server'};
    }
};
export const removeFavourite = async id_product => {
    try {
        const response = await api.delete(`/removeFavourite/${id_product}`);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi xóa sản phẩm yêu thích:', error);
        return {status: 500, message: 'Lỗi server'};
    }
};
