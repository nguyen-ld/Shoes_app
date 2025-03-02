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
  const [errors, setErrors] = useState({});
  const [hide, setHide] = useState(false);

  const item = route.params.address || null;
  const id_user = route.params.id_user || null;
  // console.log('id_user : ', id_user ? id_user : null);
  // console.log('id_address : ', item ? item : null);
  const validateFields = () => {
    let newErrors = {};
    if (!name.trim()) newErrors.name = 'Vui lòng nhập họ và tên';
    if (!phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else {
      const regexPhoneNumber = /^(0[3|5|7|8|9])[0-9]{8}$/;
      if (!regexPhoneNumber.test(phone)) {
        newErrors.phone = 'Số điện thoại không hợp lệ';
      }
    }

    const existsPhone = item.numberphone.some(
      phone => phone.numberphone === phone,
    );
    if (existsPhone) newErrors.phone = 'Số điện thoại đã được sử dụng';

    if (!city.trim()) newErrors.city = 'Vui lòng nhập tỉnh/thành phố';
    if (!district.trim()) newErrors.district = 'Vui lòng nhập quận/huyện';
    if (!ward.trim()) newErrors.ward = 'Vui lòng nhập phường/xã';
    if (!street.trim()) newErrors.street = 'Vui lòng nhập số nhà';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateAddress = async () => {
    if (!validateFields()) {
      return;
    }
    try {
      setLoading(true);
      const data = await updateAddressUser(
        item._id,
        id_user,
        street,
        district,
        ward,
        city,
        phone,
        name,
      );
      console.log(data);
    } catch (error) {
      console.error('Có lỗi xảy ra khi cập nhật thông tin người dùng:', error);
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
        setStreet(addressInfoArray[0].street);
        setCity(addressInfoArray[0].city);
        setDistrict(addressInfoArray[0].district);
        setWard(addressInfoArray[0].ward);
        setName(addressInfoArray[0].fullname);
        setPhone(addressInfoArray[0].numberphone);
      } catch (error) {
        console.error('Có lỗi xảy ra khi lấy thông tin địa chỉ :', error);
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
                style={[styles.input, errors.name && styles.inputError]}
                value={name}
                onChangeText={text => {
                  setName(text);
                  setErrors(false);
                }}
              />

              {errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
              {/* Số điện thoại */}
              <Text style={[styles.title, {marginTop: 20}]}>Phone number</Text>
              <TextInput
                style={[styles.input, errors.phone && styles.inputError]}
                value={phone}
                onChangeText={text => {
                  setPhone(text);
                  setErrors(false);
                }}
                keyboardType="numeric"
              />
              {errors.phone && (
                <Text style={styles.errorText}>{errors.phone}</Text>
              )}
              {/* Tỉnh / Thành phố */}
              <Text style={[styles.title, {marginTop: 20}]}>
                Province / City
              </Text>
              <TextInput
                style={[styles.input, errors.city && styles.inputError]}
                value={city}
                onChangeText={text => {
                  setCity(text);
                  setErrors(false);
                }}
              />
              {errors.city && (
                <Text style={styles.errorText}>{errors.city}</Text>
              )}
              {/* Quận / Huyện */}
              <Text style={[styles.title, {marginTop: 20}]}>
                District / District
              </Text>
              <TextInput
                style={[styles.input, errors.district && styles.inputError]}
                value={district}
                onChangeText={text => {
                  setDistrict(text);
                  setErrors(false);
                }}
              />
              {errors.district && (
                <Text style={styles.errorText}>{errors.district}</Text>
              )}
              {/* Phường / Xã */}
              <Text style={[styles.title, {marginTop: 20}]}>
                Ward / Commune
              </Text>
              <TextInput
                style={[styles.input, errors.ward && styles.inputError]}
                value={ward}
                onChangeText={text => {
                  setWard(text);
                  setErrors(false);
                }}
              />
              {errors.ward && (
                <Text style={styles.errorText}>{errors.ward}</Text>
              )}
              {/* Số nhà */}
              <Text style={[styles.title, {marginTop: 20}]}>House number</Text>
              <TextInput
                style={[styles.input, errors.street && styles.inputError]}
                placeholder="Street name, Building, House number"
                value={street}
                onChangeText={text => {
                  setStreet(text);
                  setErrors(false);
                }}
              />
              {errors.street && (
                <Text style={styles.errorText}>{errors.street}</Text>
              )}
            </View>

            {/* Button Hoàn thành */}
            <View style={styles.containerButton}>
              <TouchableOpacity activeOpacity={0.9} style={{width: '48%'}}>
                <Text style={styles.delete} onPress={() => setHide(true)}>
                  Delete address
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                style={{width: '48%'}}
                onPress={updateAddress}>
                <Text style={styles.complete}>Update address</Text>
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
