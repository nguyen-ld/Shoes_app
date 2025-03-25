import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    titleForgot: {
        fontFamily: 'Poppins-Medium',
        paddingHorizontal: 20,
        fontSize: 24,
    },
    content: {
        marginHorizontal: 20,
        fontSize: 16,
        fontFamily: 'Poppins-Light',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingLeft: 40,
        fontSize: 16,
        fontFamily: 'Poppins-Light',
        height: 50,
    },
    icon: {
        position: 'absolute',
        left: 10,
        top: '45%',
        transform: [{translateY: -10}],
    },
});
