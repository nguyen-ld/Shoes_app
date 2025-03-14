import {View, Modal, ActivityIndicator, Text} from 'react-native';
import {style} from './style';
const Loading = ({loading}) => {
  return (
    <Modal visible={loading} transparent animationType="fade">
      <View style={style.overlay}>
        <View style={style.loadingBox}>
          <ActivityIndicator size="large" color="#5B9EE1" />
          <Text style={style.loadingText}>Đang tải...</Text>
        </View>
      </View>
    </Modal>
  );
};
export default Loading;
