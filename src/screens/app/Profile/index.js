import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {useCallback, useState} from 'react';
import {infoUser} from '../../../api/UserAPI';
import {useFocusEffect} from '@react-navigation/native';

const Profile = ({navigation, id_user}) => {
  const [info, setInfo] = useState('');
  console.log('Profile nhận : ', id_user);

  const fetchUserInfo = async () => {
    try {
      const userData = await infoUser(id_user);
      setInfo(userData);
    } catch (error) {
      console.log('Không lấy được thông tin user:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchUserInfo();
    }, [id_user]),
  );
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../../../assets/user.png')}
          style={styles.image}
        />
        <Text style={styles.name}>User name : {info.username}</Text>
        <Text style={styles.id}>ID : {info._id}</Text>
      </View>
      <View style={styles.containerContent}>
        <View>
          <TouchableOpacity
            style={styles.containerItem}
            onPress={() => navigation.navigate('EditProfile', {id: info._id})}
            activeOpacity={0.9}>
            <Text style={styles.title}>Edit Profile</Text>
            <Image source={require('../../../assets/next.png')} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.containerItem, {marginVertical: 20}]}
          onPress={() => navigation.navigate('ChangePassword')}>
          <Text style={styles.title}>Change Password</Text>
          <Image source={require('../../../assets/next.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.containerItem, {marginBottom: 20}]}
          onPress={() => navigation.navigate('AddressEdit')}
          activeOpacity={0.9}>
          <Text style={styles.title}>Address</Text>
          <Image source={require('../../../assets/next.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerItem}>
          <Text style={styles.title}>Logout</Text>
          <Image source={require('../../../assets/next.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Profile;
