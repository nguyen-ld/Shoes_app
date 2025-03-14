import {Modal, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {useState, useEffect} from 'react';

const ModelSex = ({visible, onClose, onSelect}) => {
  const [showModal, setShowModal] = useState(visible); // nhận là false

  useEffect(() => {
    setShowModal(visible);
  }, [visible]);
  const handleSelect = sex => {
    onSelect(sex);
    onClose();
  };
  return (
    <Modal visible={showModal} transparent animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Giới tính</Text>
          <TouchableOpacity onPress={() => handleSelect('Nam')}>
            <Text style={styles.content}>Nam</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelect('Nữ')}>
            <Text style={styles.content}>Nữ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelect('Khác')}>
            <Text style={styles.content}>Khác</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default ModelSex;
