import {
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard,
    ScrollView,
} from 'react-native';
import {styles} from './style';
import Loading from '../../../components/ModalLoading';
import {useEffect, useState} from 'react';
import {
    infoAddressById,
    updateAddressUser,
    deleteAddress,
} from '../../../api/UserAPI';
import ModalView from '../../../components/Modal';
const UpdateAddress = ({route, navigation}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [ward, setWard] = useState('');
    const [street, setStreet] = useState('');
    const [loading, setLoading] = useState(false);
    const [hide, setHide] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorCity, setErrorCity] = useState(false);
    const [errorDistrict, setErrorDistrict] = useState(false);
    const [errorWard, setErrorWard] = useState(false);
    const [errorHouse, setErrorHouse] = useState(false);

    const item = route.params.address || null;
    const id_user = route.params.id_user || null;

    const validateFields = () => {
        let newErrors = true;

        if (!name.trim()) {
            console.log('Lỗi: Tên bị trống');
            setErrorName('Vui lòng nhập họ và tên');
            newErrors = false;
        }

        if (!phone.trim()) {
            console.log('Lỗi: Số điện thoại bị trống');
            setErrorPhone('Vui lòng nhập số điện thoại');
            newErrors = false;
        } else {
            const regexPhoneNumber = /^(0[3|5|7|8|9])[0-9]{8}$/;
            if (!regexPhoneNumber.test(phone)) {
                console.log('Lỗi: Số điện thoại không hợp lệ');
                setErrorPhone('Số điện thoại không hợp lệ');
                newErrors = false;
            }
        }

        if (!city.trim()) {
            console.log('Lỗi: Thành phố bị trống');
            setErrorCity('Vui lòng nhập tỉnh/thành phố');
            newErrors = false;
        }
        if (!district.trim()) {
            console.log('Lỗi: Quận/Huyện bị trống');
            setErrorDistrict('Vui lòng nhập quận/huyện');
            newErrors = false;
        }
        if (!ward.trim()) {
            console.log('Lỗi: Phường/Xã bị trống');
            setErrorWard('Vui lòng nhập phường/xã');
            newErrors = false;
        }
        if (!street.trim()) {
            console.log('Lỗi: Số nhà bị trống');
            setErrorHouse('Vui lòng nhập số nhà');
            newErrors = false;
        }

        console.log('Kết quả validate:', newErrors);
        return newErrors;
    };

    const updateAddress = async () => {
        console.log('Gọi hàm');

        if (!validateFields()) {
            console.log(
                'Dữ liệu nhập vào không hợp lệ, không tiếp tục cập nhật.',
            );
            return;
        }

        console.log('Bắt đầu kiểm tra dữ liệu thay đổi...');

        let updatedValue = null;

        // Kiểm tra và lấy giá trị thay đổi đầu tiên
        if (street !== item.street) updatedValue = street;
        else if (district !== item.district) updatedValue = district;
        else if (ward !== item.ward) updatedValue = ward;
        else if (city !== item.city) updatedValue = city;
        else if (phone !== item.numberphone) updatedValue = phone;
        else if (name !== item.fullname) updatedValue = name;

        // Nếu không có gì thay đổi thì không cập nhật
        if (!updatedValue) {
            console.log('Không có dữ liệu nào thay đổi.');
            return;
        }

        console.log('Dữ liệu cần cập nhật:', updatedValue);

        try {
            setLoading(true);

            const data = await updateAddressUser(
                item._id,
                id_user,
                updatedValue,
            );

            console.log('Dữ liệu cập nhật thành công:', data);
        } catch (error) {
            console.log('Có lỗi xảy ra khi cập nhật địa chỉ:', error);
            if (error.type === 'phone') {
                setErrorPhone('Số điện thoại đã được dùng');
            }
        } finally {
            setLoading(false);
        }
    };

    const removeAddress = async () => {
        try {
            setLoading(true);
            const response = await deleteAddress(id_user, item._id);
            if (response) {
                console.log('địa chỉ đã xóa : ', response);
                setHide(false);
                navigation.goBack();
            }
        } catch (error) {
            console.log('có lỗi khi xóa địa chỉ : ', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchAddressInfo = async () => {
            try {
                setLoading(true);
                const addressInfoArray = await infoAddressById(item._id);
                console.log('id_address truyền vào : ', item._id);
                console.log(addressInfoArray);
                setStreet(addressInfoArray.street);
                setCity(addressInfoArray.city);
                setDistrict(addressInfoArray.district);
                setWard(addressInfoArray.ward);
                setName(addressInfoArray.fullname);
                setPhone(addressInfoArray.numberphone);
            } catch (error) {
                console.error(
                    'Có lỗi xảy ra khi lấy thông tin địa chỉ :',
                    error,
                );
            } finally {
                setLoading(false);
            }
        };

        fetchAddressInfo();
    }, [item._id]);

    return (
        <ScrollView>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{flex: 1, justifyContent: 'space-between'}}>
                        <View style={styles.containerBody}>
                            {/* Họ và tên */}
                            <Text style={styles.title}>Full name </Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    errorName && styles.inputError,
                                ]}
                                value={name}
                                onChangeText={text => {
                                    setName(text);
                                    setErrorName(false);
                                }}
                            />

                            {errorName && (
                                <Text style={styles.errorText}>
                                    {errorName}
                                </Text>
                            )}
                            {/* Số điện thoại */}
                            <Text style={[styles.title, {marginTop: 20}]}>
                                Phone number
                            </Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    errorPhone && styles.inputError,
                                ]}
                                value={phone}
                                onChangeText={text => {
                                    setPhone(text);
                                    setErrorPhone(false);
                                }}
                                keyboardType="numeric"
                            />
                            {errorPhone && (
                                <Text style={styles.errorText}>
                                    {errorPhone}
                                </Text>
                            )}
                            {/* Tỉnh / Thành phố */}
                            <Text style={[styles.title, {marginTop: 20}]}>
                                Province / City
                            </Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    errorCity && styles.inputError,
                                ]}
                                value={city}
                                onChangeText={text => {
                                    setCity(text);
                                    setErrorCity(false);
                                }}
                            />
                            {errorCity && (
                                <Text style={styles.errorText}>
                                    {errorCity}
                                </Text>
                            )}
                            {/* Quận / Huyện */}
                            <Text style={[styles.title, {marginTop: 20}]}>
                                District / District
                            </Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    errorDistrict && styles.inputError,
                                ]}
                                value={district}
                                onChangeText={text => {
                                    setDistrict(text);
                                    setErrorDistrict(false);
                                }}
                            />
                            {errorDistrict && (
                                <Text style={styles.errorText}>
                                    {errorDistrict}
                                </Text>
                            )}
                            {/* Phường / Xã */}
                            <Text style={[styles.title, {marginTop: 20}]}>
                                Ward / Commune
                            </Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    errorWard && styles.inputError,
                                ]}
                                value={ward}
                                onChangeText={text => {
                                    setWard(text);
                                    setErrorWard(false);
                                }}
                            />
                            {errorWard && (
                                <Text style={styles.errorText}>
                                    {errorWard}
                                </Text>
                            )}
                            {/* Số nhà */}
                            <Text style={[styles.title, {marginTop: 20}]}>
                                House number
                            </Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    errorHouse && styles.inputError,
                                ]}
                                placeholder="Street name, Building, House number"
                                value={street}
                                onChangeText={text => {
                                    setStreet(text);
                                    setErrorHouse(false);
                                }}
                            />
                            {errorHouse && (
                                <Text style={styles.errorText}>
                                    {errorHouse}
                                </Text>
                            )}
                        </View>

                        {/* Button Hoàn thành */}
                        <View style={styles.containerButton}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={{width: '48%'}}>
                                <Text
                                    style={styles.delete}
                                    onPress={() => setHide(true)}>
                                    Delete address
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={{width: '48%'}}
                                onPress={updateAddress}>
                                <Text style={styles.complete}>
                                    Update address
                                </Text>
                            </TouchableOpacity>
                            <Loading loading={loading} />
                        </View>
                        <ModalView
                            visible={hide}
                            onClose={() => setHide(false)}
                            onConfirm={removeAddress}
                            title="Xóa địa chỉ"
                            content="Bạn có muốn xóa địa chỉ này ra khỏi danh sách không?"></ModalView>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};
export default UpdateAddress;
