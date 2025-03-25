import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import {API_BASE_URL, DEFAULT_HEADERS} from '../config/apiConfig';

const jwt_interceptor = axios.create({
    baseURL: API_BASE_URL,
    headers: DEFAULT_HEADERS,
    withCredentials: true,
});

const refreshToken = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/refresh`, null, {
            withCredentials: true,
        });

        if (response.data.status === 200) {
            console.log('Refresh thành công:', response.data);
            const {accessToken} = response.data;
            await AsyncStorage.setItem('accessToken', accessToken);
            return accessToken;
        } else {
            console.log('Không có accessToken mới, cần đăng nhập lại.');
            return null;
        }
    } catch (error) {
        console.log('Lỗi refresh token:', error.message);
        return error;
    }
};

jwt_interceptor.interceptors.request.use(
    async config => {
        let token = await AsyncStorage.getItem('accessToken');

        if (!token) {
            console.log('Không tìm thấy accessToken');
            console.log('>>> config : ', config);
            return config;
        }

        try {
            const decoded = jwtDecode(token);
            const currentTime = Math.floor(Date.now() / 1000);

            if (decoded.exp < currentTime) {
                console.log('Access token hết hạn. Đang refresh token...');
                token = await refreshToken();

                if (!token) {
                    console.log('Refresh token cũng hết hạn. Đăng xuất...');
                    await AsyncStorage.removeItem('accessToken');
                    return Promise.reject({
                        message: 'Token hết hạn. Vui lòng đăng nhập lại.',
                    });
                }
            }

            config.headers.Authorization = `Bearer ${token}`;
        } catch (error) {
            console.log('Lỗi khi decode token:', error);
        }

        return config;
    },
    err => {
        return Promise.reject(err);
    },
);

export default jwt_interceptor;
