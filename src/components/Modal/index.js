import {Image, Modal, TouchableOpacity, View, Text} from 'react-native';
import {styles} from './style';
import {useEffect, useState} from 'react';

const ModalView = ({visible, onClose, onConfirm, title, content}) => {
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    setShowModal(visible);
  }, [visible]);

  return (
    <Modal visible={showModal} transparent animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.close} onPress={onClose}>
            <Image source={require('../../assets/close.png')} />
          </TouchableOpacity>

          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.message, {color: ' '}]}>{content}</Text>

          <TouchableOpacity style={styles.containerEvent} onPress={onConfirm}>
            <Text style={styles.content}>Đồng ý</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalView;
