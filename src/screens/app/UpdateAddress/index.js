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
import {infoAddressById, updateAddressUser} from '../../../api/UserAPI';
const UpdateAddress = ({route}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [ward, setWard] = useState('');
  const [street, setStreet] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const item = route.params.address || null;
  console.log('id_address : ', item ? item : null);
  const validateFields = () => {
    let newErrors = {};
    if (!name.trim()) newErrors.name = 'Vui lòng nhập họ và tên';
    if (!phone.trim()) newErrors.phone = 'Vui lòng nhập số điện thoại';
    if (!city.trim()) newErrors.city = 'Vui lòng nhập tỉnh/thành phố';
    if (!district.trim()) newErrors.district = 'Vui lòng nhập quận/huyện';
    if (!ward.trim()) newErrors.ward = 'Vui lòng nhập phường/xã';
    if (!street.trim()) newErrors.street = 'Vui lòng nhập số nhà';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateAddress = async () => {
    try {
      setLoading(true);
      const data = await updateAddressUser(
        item._id,
        '67bd61f8a4f6cf15263bf20a',
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
  useEffect(() => {
    const fetchAddressInfo = async () => {
      try {
        setLoading(true);
        const addressInfoArray = await infoAddressById(item._id);
        console.log('id_address truyền vào : ', item._id);
        console.log('data fe', addressInfoArray);
        if (addressInfoArray.length > 0) {
          const addressInfo = addressInfoArray[0];
          setStreet(addressInfo.street);
          setCity(addressInfo.city);
          setDistrict(addressInfo.district);
          setWard(addressInfo.ward);
          setName(addressInfo.fullname);
          setPhone(addressInfo.numberphone);
        } else {
          console.log('Không có dữ liệu địa chỉ.');
        }
      } catch (error) {
        console.error('Có lỗi xảy ra khi lấy thông tin địa chỉ :', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAddressInfo();
  }, [item._id]);
  console.log(name);
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
                onChangeText={setName}
              />

              {errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
              {/* Số điện thoại */}
              <Text style={[styles.title, {marginTop: 20}]}>Phone number</Text>
              <TextInput
                style={[styles.input, errors.phone && styles.inputError]}
                value={phone}
                onChangeText={setPhone}
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
                onChangeText={setCity}
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
                onChangeText={setDistrict}
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
                onChangeText={setWard}
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
                onChangeText={setStreet}
              />
              {errors.street && (
                <Text style={styles.errorText}>{errors.street}</Text>
              )}
            </View>

            {/* Button Hoàn thành */}
            <View style={styles.containerButton}>
              <TouchableOpacity activeOpacity={0.9} style={{width: '48%'}}>
                <Text style={styles.delete}>Delete address</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                style={{width: '48%'}}
                onPress={updateAddress}>
                <Text style={styles.complete}>Update address</Text>
              </TouchableOpacity>
              <Loading loading={loading} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
export default UpdateAddress;
