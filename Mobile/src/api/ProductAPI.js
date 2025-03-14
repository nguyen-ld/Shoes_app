import axios from 'axios';

import {API_BASE_URL, DEFAULT_HEADERS} from '../config/apiConfig';
import {Products} from '../models/Products';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: DEFAULT_HEADERS,
});
export const getListProductById = async id_categories => {
    try {
        if (!id_categories) return [];

        const response = await api.get(`/getListProduct/${id_categories}`);
        if (response.status === 200) {
            return response.data.data.map(
                item =>
                    new Products(
                        item._id,
                        item.name,
                        item.images,
                        item.id_categories,
                        item.priceInitial,
                        item.describe,
                    ),
            );
        }
    } catch (error) {
        console.error('Lỗi API:', error);
        return [];
    }
};

export const getListInfo = async id_product => {
    try {
        const response = await api.get(`/getInfoProductById/${id_product}`);
        return response.data.data;
    } catch (error) {
        console.error('Lỗi khi lấy thông tin sản phẩm : ', error);
        return [];
    }
};
