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
import {useState} from 'react';
import {styles} from './style';
import {addNewAddress} from '../../../api/UserAPI';
import Loading from '../../../components/ModalLoading';

const EditAddress = ({route}) => {
  const {id} = route.params || null;
  console.log('Id nhận từ address -> edit address', id);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [ward, setWard] = useState('');
  const [street, setStreet] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

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

  const handleAddAddress = async () => {
    if (!validateFields()) return;

    const newAddress = {
      street,
      city,
      district,
      ward,
      fullname: name,
      numberphone: phone,
    };
    console.log('Dữ liệu gửi lên:', newAddress);

    try {
      setLoading(true);
      const response = await addNewAddress(id, newAddress);
      if (response.status === 200) {
        console.log('Thêm địa chỉ thành công ');
      } else {
        console.log('Thêm địa chỉ thất bại!');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
              <Text style={[styles.title, {marginTop: 20}]}>House number </Text>
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
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.containerButton}
              onPress={handleAddAddress}>
              <Text style={styles.complete}>Complete</Text>
            </TouchableOpacity>

            <Loading loading={loading} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default EditAddress;
