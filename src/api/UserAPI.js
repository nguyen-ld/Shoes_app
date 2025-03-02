import axios from 'axios';
import {API_BASE_URL, DEFAULT_HEADERS} from '../config/apiConfig';
import {User} from '../models/User';
import {Alert} from 'react-native';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: DEFAULT_HEADERS,
});
export const ListAddressByUser = async id_user => {
    try {
        const response = await api.get(`/getListAddress/${id_user}`);
        if (response.data.status === 200) {
            console.log('danh sách địa chỉ : ', response.data.data);
            return response.data.data.map(item => ({
                _id: item._id,
                street: item.street,
                city: item.city,
                district: item.district,
                ward: item.ward,
                fullname: item.fullname,
                numberphone: item.numberphone,
            }));
        } else {
            console.log('Lỗi API : ', response.data.message);
        }
    } catch (error) {
        console.log('Lỗi khi lấy danh sách địa chỉ : ', error);
    }
};
export const infoUser = async id_user => {
    try {
        const response = await api.get(`/getInfoUser/${id_user}`);

        if (response.data.status === 200) {
            const item = response.data.data;
            if (item) {
                console.log('Thông tin user : ', item);
                return new User(
                    item._id,
                    item.username,
                    item.password,
                    item.numberphone,
                    item.images,
                    item.email,
                    item.fullname,
                    item.sex,
                    item.date,
                    item.address,
                );
            } else {
                console.log('Không có thông tin người dùng');
                return null;
            }
        } else {
            console.log('Lỗi API : ', response.data.message);
            return null;
        }
    } catch (error) {
        console.log('Lỗi khi lấy thông tin user : ', error);
        return null;
    }
};
export const updateInfo = async (
    id_user,
    fullname,
    date,
    sex,
    email,
    numberphone,
) => {
    try {
        const response = await api.patch(`/updateInfo/${id_user}`, {
            fullname,
            email,
            numberphone,
            sex,
            date,
        });
        if (response.data.status === 200) {
            console.log('update thông tin thành công : ', response.data.data);
            Alert.alert(
                'Chỉnh sửa thông tin ',
                'Chỉnh sửa thông tin người dùng thành công',
            );
            return response.data.data;
        } else {
            console.log('update thông tin thất bại : ', response.data.message);
            return null;
        }
    } catch (error) {
        console.log('Lỗi khi update thông tin user : ', error);
        return null;
    }
};
export const updateAddressUser = async (
    id_address,
    id_user,
    street,
    district,
    ward,
    city,
    numberphone,
    username,
) => {
    try {
        const response = await api.patch(
            `/updateAddress/${id_user}/address/${id_address}`,
            {street, district, ward, city, numberphone, username},
        );
        if (response.data.status === 200) {
            console.log('update đại chỉ thành công : ', response.data.data);
            Alert.alert(
                'Sửa địa chỉ ',
                'Chỉnh sửa thông tin địa chỉ của người dùng thành công',
            );
            return response.data.data;
        } else {
            console.log('update địa chỉ thất bại : ', response.data.message);
            return null;
        }
    } catch (error) {
        console.log('Lỗi khi update thông tin địa chỉ : ', error);
        return null;
    }
};
export const addNewAddress = async (_id, address) => {
    try {
        const response = await api.patch(`/addAddress/${_id}`, {
            address,
        });
        if (response.data.status === 200) {
            Alert.alert('Địa chỉ mới ', 'Thêm địa chỉ thành công!');
            return response.data.data;
        } else {
            console.log('API status : ', response.data.message);
            return null;
        }
    } catch (error) {
        console.log('Lỗi khi thêm địa chỉ mới  :  ', error);
        return null;
    }
};
export const deleteAddress = async (id_user, id_address) => {
    try {
        const response = await api.delete(
            `/users/${id_user}/address/${id_address}`,
        );
        if (response.data.status === 200) {
            console.log('delete địa chỉ thành công');
            Alert.alert(
                'Xóa địa chỉ ',
                'Xóa thông tin địa chỉ của người dùng thành công',
            );
            return response.data.data;
        } else {
            console.log('delete thất bại ');
            return response.data.message;
        }
    } catch (error) {
        console.log('Lỗi khi xóa địa chỉ : ', error);
        return null;
    }
};
export const infoAddressById = async id_address => {
    try {
        const response = await api.get(`/infoAddressByUser/${id_address}`);
        if (response.data.status === 200) {
            console.log('Lấy thông tin thành công : ', response.data.data);
            return response.data.data;
        } else {
            console.log('Lấy thông tin thất bại ');
            return response.data.message;
        }
    } catch (error) {
        console.log('Lỗi khi lấy thông tin : ', error);
        return null;
    }
};
export const LoginApplication = async (username, password) => {
    try {
        const response = await api.post('/login', {username, password});

        if (response.data.status === 200) {
            console.log(' Đăng nhập thành công');
            return response.data.data;
        } else {
            console.log(' Đăng nhập thất bại');
            return response.data.message;
        }
    } catch (error) {
        console.log('Lỗi khi gọi API:', error);
        console.log('bug : ', error.response.data.message);
        if (error.response && error.response.data) {
            throw {
                message: error.response.data.message,
                type: error.response.data.type,
            };
        }
    }
};

export const RegisterAccount = async (username, password, confirmPassword) => {
    try {
        const response = await api.post('/register', {
            username,
            password,
            confirmPassword,
        });
        if (response.data.status === 200) {
            console.log('register thành công ');
            return response.data.data;
        } else {
            console.log('register thất bại', response.data.message);
            return null;
        }
    } catch (error) {
        console.log('Lỗi khi tạo tài khoản : ', error);
        return null;
    }
};
export const changePassword = async (
    id_user,
    passwordOld,
    passwordNew,
    conFirmPasswordNew,
) => {
    try {
        const response = await api.patch(`/changePassword/${id_user}`, {
            passwordOld,
            passwordNew,
            conFirmPasswordNew,
        });
        if (response.data.status === 200) {
            console.log('đổi mật khẩu thành công');
            console.log('data trả về  : ', response.data.data);
            return response.data.data;
        } else {
            console.log('đổi mật khẩu thất bại');
            return response.data.message;
        }
    } catch (error) {
        console.log('Lỗi APi : ', error);
        console.log('bug : ', error.response.data.message);
        if (error.response && error.response.data) {
            throw {
                message: error.response.data.message,
                type: error.response.data.type,
            };
        }
    }
};
