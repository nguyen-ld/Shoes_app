import {View, Modal, TouchableOpacity, Image} from 'react-native';
import {style} from './style';
import {useEffect, useState} from 'react';
import {Text} from 'react-native-gesture-handler';
const ModalCancel = ({visible, onClose, Logout, isImage, content, title}) => {
    const [showModal, setShowModal] = useState(visible);
    useEffect(() => {
        setShowModal(visible);
    }, [visible]);
    return (
        <Modal visible={showModal} transparent animationType="fade">
            <View style={style.modalBackground}>
                <View style={style.modalContainer}>
                    <View style={style.containerImages}>
                        {isImage ? (
                            <View style={style.withImages}>
                                <Image
                                    source={require('../../assets/logout.png')}
                                    style={style.imageLog}
                                />
                            </View>
                        ) : (
                            <View
                                style={[
                                    style.withImages,
                                    {borderRadius: '50%'},
                                ]}>
                                <Image
                                    source={require('../../assets/change_pass.png')}
                                    style={[
                                        style.imageLog,
                                        {width: 100, height: 100},
                                    ]}
                                />
                            </View>
                        )}
                    </View>
                    <Text style={style.logout}>{title}</Text>
                    <Text style={style.titleDialog}>{content}</Text>
                    {isImage ? (
                        <View style={style.containerButtonGroup}>
                            <TouchableOpacity
                                style={style.widthButtonCancel}
                                activeOpacity={1}
                                onPress={onClose}>
                                <Text
                                    style={{
                                        color: '#5B9EE1',
                                        fontFamily: 'Poppins-SemiBold',
                                        fontSize: 16,
                                        textAlign: 'center',
                                    }}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={style.widthButtonSave}
                                activeOpacity={1}
                                onPress={Logout}>
                                <Text style={style.textButton}>Agree</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={style.containerButton}>
                            <TouchableOpacity
                                style={style.widthButtonSaveOne}
                                activeOpacity={1}
                                onPress={Logout}>
                                <Text style={style.textButton}>Agree</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </Modal>
    );
};
export default ModalCancel;
