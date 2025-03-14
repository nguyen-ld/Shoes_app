import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        width: '70%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        elevation: 5,
    },
    titleDialog: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        textAlign: 'center',
    },
    containerButtonGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    containerButton: {
        alignItems: 'center',
        marginVertical: 15,
    },
    textButton: {
        fontSize: 16,
        backgroundColor: '#5B9EE1',
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: 'white',
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
    },
    imageLog: {
        width: 38,
        height: 38,
        resizeMode: 'contain',
    },
    containerImages: {
        alignItems: 'center',
    },
    withImages: {
        backgroundColor: '#DFE7F4',
        paddingLeft: 15,
        paddingRight: 20,
        paddingVertical: 16,
        borderRadius: 40,
    },
    logout: {
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
        marginTop: 12,
        fontSize: 22,
    },
    widthButtonCancel: {
        width: '48%',
    },
    widthButtonSave: {
        width: '48%',
    },
    widthButtonSaveOne: {
        width: '80%',
    },
});
