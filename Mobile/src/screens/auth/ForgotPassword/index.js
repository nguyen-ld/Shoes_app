import {
    Keyboard,
    KeyboardAvoidingView,
    Text,
    TouchableWithoutFeedback,
    View,
    TextInput,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button';
function ForgotPasword() {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex: 1}}>
                    <Text style={styles.titleForgot}>Reset password</Text>
                    <Text style={styles.content}>
                        Please enter your email address to request password
                        reset
                    </Text>
                    <View
                        style={{
                            position: 'relative',
                            marginHorizontal: 20,
                            marginVertical: 15,
                        }}>
                        <TextInput style={styles.input} />
                        <Icon
                            style={styles.icon}
                            name="mail-outline"
                            size={24}
                            color="black"
                        />
                    </View>
                    <View style={{marginHorizontal: 20, marginTop: 10}}>
                        <Button title="Send" />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default ForgotPasword;
