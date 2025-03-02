import {
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Image,
    Keyboard,
} from 'react-native';
import {styles} from './style';
import Input from '../../../components/Input';
import {useState} from 'react';
import {changePassword} from '../../../api/UserAPI';
import Loading from '../../../components/ModalLoading';
import ModalCancel from '../../../components/ModalCancel';
const ChangePassword = ({route, navigation}) => {
    const id_user = route.params.id || null;
    console.log('change password nhận : ', id_user);
    const [passwordOld, setPasswordOld] = useState('');
    const [passwordNew, setPasswordNew] = useState('');
    const [conFirmPasswordNew, setConFirmPasswordNew] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorOld, setErrorOld] = useState(false);
    const [errorNew, setErrorNew] = useState(false);
    const [errorConfirm, setErrorConfirm] = useState(false);
    const [hide, setHide] = useState(false);

    const validateForm = () => {
        let validate = true;
        if (!passwordOld) {
            setErrorOld('Please enter old password');
            validate = false;
        }
        if (!passwordNew) {
            setErrorNew('Please enter new password');
            validate = false;
        }
        if (!conFirmPasswordNew) {
            setErrorConfirm('Please enter the confirmation password');
            validate = false;
        }
        return validate;
    };
    const resetPassword = async () => {
        if (!validateForm()) {
            return;
        }
        try {
            setLoading(true);
            const result = await changePassword(
                id_user,
                passwordOld,
                passwordNew,
                conFirmPasswordNew,
            );
            if (result) {
                setHide(true);
                console.log('Modal hiển thị:', hide); // Debug
            }
        } catch (error) {
            console.log('lỗi khi đổi mật khẩu  :', error);
            console.log(error.type);
            if (error.type === 'passOld') {
                setErrorOld('The old password is incorrect');
            }
            if (error.type === 'repeat') {
                setErrorNew('The new password matches the old password');
            }
            if (error.type === 'length') {
                setErrorNew('Password length must be from 8 to 16 characters');
            }
            if (error.type === 'confirm') {
                setErrorConfirm('Confirmation password does not match');
            }
            if (error.type === 'weak_password') {
                setErrorNew(
                    'Password must contain at least 1 letter, 1 number and 1 special character',
                );
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <View>
                        <View style={styles.containerTitle}>
                            <Image
                                source={require('../../../assets/padlock.png')}
                            />
                            <Text style={styles.title}>Old password</Text>
                        </View>
                        <Input
                            password
                            value={passwordOld}
                            onChangeText={text => {
                                setPasswordOld(text);
                                setErrorOld(false);
                            }}
                            onBlur={() => {
                                if (!passwordOld)
                                    setErrorOld('Please enter old password');
                            }}
                            error={errorOld}></Input>
                        {errorOld ? (
                            <Text
                                style={{
                                    fontFamily: 'Poppins-Light',
                                    color: 'red',
                                }}>
                                {errorOld}
                            </Text>
                        ) : (
                            false
                        )}
                    </View>
                    <View>
                        <View style={[styles.containerTitle, {marginTop: 10}]}>
                            <Image
                                source={require('../../../assets/padlock.png')}
                            />
                            <Text style={styles.title}>New password</Text>
                        </View>
                        <Input
                            password
                            error={errorNew}
                            value={passwordNew}
                            onBlur={() => {
                                if (!passwordNew)
                                    setErrorNew('Please enter new password');
                            }}
                            onChangeText={text => {
                                setPasswordNew(text);
                                setErrorNew(false);
                            }}></Input>
                        {errorNew ? (
                            <Text
                                style={{
                                    fontFamily: 'Poppins-Light',
                                    color: 'red',
                                }}>
                                {errorNew}
                            </Text>
                        ) : (
                            false
                        )}
                        <View
                            style={{
                                flexDirection: 'row',
                                gap: 10,
                                marginTop: 10,
                            }}>
                            <Image
                                source={require('../../../assets/check.png')}
                            />
                            <Text style={{fontFamily: 'Poppins-Medium'}}>
                                Passwords are 8 to 16 characters long
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                gap: 10,
                                marginTop: 5,
                            }}>
                            <Image
                                source={require('../../../assets/check.png')}
                            />
                            <Text style={{fontFamily: 'Poppins-Medium'}}>
                                Password must contain numbers, letters, and 1
                                special character
                            </Text>
                        </View>
                        <View>
                            <View
                                style={[
                                    styles.containerTitle,
                                    {marginTop: 15},
                                ]}>
                                <Image
                                    source={require('../../../assets/padlock.png')}
                                />
                                <Text style={styles.title}>
                                    Confirm password{' '}
                                </Text>
                            </View>
                            <Input
                                password
                                value={conFirmPasswordNew}
                                onChangeText={text => {
                                    setConFirmPasswordNew(text);
                                    setErrorConfirm(false);
                                }}
                                onBlur={() => {
                                    if (!conFirmPasswordNew)
                                        setErrorConfirm(
                                            'Please enter the confirmation password',
                                        );
                                }}
                                error={errorConfirm}></Input>
                        </View>
                        {errorConfirm ? (
                            <Text
                                style={{
                                    fontFamily: 'Poppins-Light',
                                    color: 'red',
                                }}>
                                {errorConfirm}
                            </Text>
                        ) : (
                            false
                        )}
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 30,
                                alignItems: 'center',
                                justifyContent: 'space-around',
                            }}>
                            <TouchableOpacity
                                style={styles.cancel}
                                activeOpacity={1}>
                                <Text
                                    style={[
                                        styles.titleButton,
                                        {color: 'black'},
                                    ]}>
                                    Hủy
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.update}
                                activeOpacity={1}
                                onPress={resetPassword}>
                                <Text style={styles.titleButton}>Cập nhật</Text>
                            </TouchableOpacity>
                        </View>
                        <ModalCancel
                            isImage={false}
                            visible={hide}
                            title="Password change successful"
                            content="You have successfully changed your password. Please log in again to use the application."
                            Logout={() =>
                                navigation.navigate('login')
                            }></ModalCancel>
                    </View>
                    <Loading loading={loading}></Loading>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};
export default ChangePassword;
