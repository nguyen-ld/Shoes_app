import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from './style';
import {useState, useEffect} from 'react';
import ModelSex from '../../../components/ModalSex';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Platform} from 'react-native';
import {infoUser, updateInfo} from '../../../api/UserAPI';
import Loading from '../../../components/ModalLoading';

const EditProfile = ({route, navigation}) => {
  const {id} = route.params;
  const [date, setDate] = useState(null);
  const [visible, setVisible] = useState(false);
  const [sex, setSex] = useState(null);
  const [open, setOpen] = useState(false);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [numberphone, setNumberphone] = useState('');
  const [loading, setLoading] = useState(false);

  const updateInfoUserById = async () => {
    if (!fullname || !date || !sex || !numberphone || !email) {
      Alert.alert(
        'Change information',
        'Please add complete information before updating',
      );
      return;
    }

    try {
      setLoading(true);
      const response = await updateInfo(
        id,
        fullname,
        date,
        sex,
        email,
        numberphone,
      );

      console.log(response);
    } catch (error) {
      console.error('Có lỗi xảy ra khi cập nhật thông tin người dùng:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await infoUser(id);
        setFullname(userInfo.fullname);
        setEmail(userInfo.email);
        setNumberphone(userInfo.numberphone);
        setSex(userInfo.sex);
        if (userInfo.date) {
          setDate(new Date(userInfo.date));
        }
      } catch (error) {
        console.error('Có lỗi xảy ra khi lấy thông tin người dùng:', error);
      }
    };

    fetchUserInfo();
  }, [id]);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Image
              source={require('../../../assets/user.png')}
              style={styles.images}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text style={styles.title}>Full name </Text>
            <TextInput
              style={styles.input}
              value={fullname}
              onChangeText={setFullname}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.title}>Email </Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.title}>Phone number</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={numberphone}
              onChangeText={setNumberphone}
            />
          </View>
          <ModelSex
            visible={visible} // false
            onClose={() => setVisible(false)}
            onSelect={sex => setSex(sex)}
          />
          <TouchableOpacity
            style={styles.containerBox}
            onPress={() => setVisible(true)}>
            <Text style={styles.titleSex}>Sex </Text>
            <View>
              <View style={styles.containerDate}>
                <Text style={styles.textDate}>
                  {sex == null ? 'Set up now' : sex}
                </Text>
                <Image source={require('../../../assets/right.png')} />
              </View>
            </View>
          </TouchableOpacity>
          {open && (
            <DateTimePicker
              value={date || new Date()}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                if (selectedDate) {
                  setDate(selectedDate);
                }
                setOpen(false);
              }}
            />
          )}

          <TouchableOpacity
            style={[styles.containerBox, {marginVertical: 0}]}
            onPress={() => setOpen(true)}>
            <Text style={styles.titleSex}>Date of birth </Text>
            <View>
              <View style={styles.containerDate}>
                <Text style={styles.textDate}>
                  {date === null ? 'Set up now' : date.toLocaleDateString()}
                </Text>
                <Image source={require('../../../assets/right.png')} />
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 40,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={styles.cancel}
              activeOpacity={1}
              onPress={() => navigation.goBack()}>
              <Text style={[styles.titleButton, {color: 'black'}]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.update}
              activeOpacity={1}
              onPress={updateInfoUserById}>
              <Text style={styles.titleButton}>Update</Text>
            </TouchableOpacity>
          </View>
          <Loading loading={loading}></Loading>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default EditProfile;
