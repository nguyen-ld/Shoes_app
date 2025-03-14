import {Image, Modal, View, Text, TouchableOpacity} from 'react-native';
import {style} from './style';
import {useState, useEffect} from 'react';

const ModalOrderSuccess = ({visible, onClose}) => {
    const [showModal, setShowModal] = useState(visible);
    useEffect(() => {
        setShowModal(visible);
    }, [visible]);
    return (
        <Modal visible={showModal} transparent animationType="fade">
            <View style={style.modalBackground}>
                <View style={style.modalContainer}>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image
                            source={require('../../assets/successfully.png')}
                            style={style.images}
                        />
                    </View>
                    <Text style={style.titleModal}>
                        Your order has been successfully installed
                    </Text>
                    <TouchableOpacity
                        style={style.containerButtonModal}
                        activeOpacity={1}
                        onPress={onClose}>
                        <Text style={style.buttonModal}>Complete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
export default ModalOrderSuccess;
