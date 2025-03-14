import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {useCallback, useState, useContext} from 'react';
import {infoUser} from '../../../api/UserAPI';
import {useFocusEffect} from '@react-navigation/native';
import ModalCancel from '../../../components/ModalCancel';
import {context} from '../../../context/contextAPI';

const Profile = ({navigation}) => {
    const {userId} = useContext(context);
    const [info, setInfo] = useState('');
    const [hide, setHide] = useState(false);
    console.log('Profile nhận : ', userId);

    const fetchUserInfo = async () => {
        try {
            const userData = await infoUser(userId);
            setInfo(userData);
        } catch (error) {
            console.log('Không lấy được thông tin user:', error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchUserInfo();
        }, [userId]),
    );
    console.log('ID trước khi navigate AddressEdit:', info._id);

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
                        onPress={() =>
                            navigation.navigate('EditProfile', {id: info._id})
                        }
                        activeOpacity={0.9}>
                        <Text style={styles.title}>Edit Profile</Text>
                        <Image source={require('../../../assets/next.png')} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.containerItem, {marginVertical: 20}]}
                    onPress={() =>
                        navigation.navigate('ChangePassword', {id: userId})
                    }>
                    <Text style={styles.title}>Change Password</Text>
                    <Image source={require('../../../assets/next.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.containerItem, {marginBottom: 20}]}
                    onPress={() =>
                        navigation.navigate('AddressEdit', {id: userId})
                    }
                    activeOpacity={0.9}>
                    <Text style={styles.title}>Address</Text>
                    <Image source={require('../../../assets/next.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerItem}
                    onPress={() => setHide(true)}
                    activeOpacity={1}>
                    <Text style={styles.title}>Logout</Text>
                    <Image source={require('../../../assets/next.png')} />
                </TouchableOpacity>
                <ModalCancel
                    isImage={true}
                    visible={hide}
                    title="Logout"
                    content="Are you want to logout ?"
                    onClose={() => setHide(!hide)}
                    Logout={() => {
                        navigation.navigate('login');
                        setHide(hide);
                    }}></ModalCancel>
            </View>
        </View>
    );
};
export default Profile;
