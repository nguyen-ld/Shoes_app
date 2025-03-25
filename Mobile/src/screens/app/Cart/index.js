import {useCallback, useEffect, useState} from 'react';
import {Alert, FlatList, Image, TouchableOpacity, View} from 'react-native';
import CartView from '../../../items/ItemCart';
import {styles} from './style';
import {getListCartByUser} from '../../../api/CartAPI';
import {Text} from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';
import Loading from '../../../components/ModalLoading';
import {addOrder} from '../../../api/OrderAPI';
import ModalOrderSuccess from '../../../components/ModalOrderSuccess';
import {context} from '../../../context/contextAPI';
import {useContext} from 'react';

const Cart = ({navigation, route}) => {
    const id_address = route.params?.id_address || null;

    const {userId} = useContext(context);

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [selectedItems, setSelectedItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hide, setHide] = useState(false);

    const handleToggle = (checkedItem, item) => {
        setSelectedItems(prevSelect => {
            console.log('Danh sách trước khi cập nhật:', prevSelect);

            if (checkedItem) {
                const updatedList = [
                    ...prevSelect,
                    {id_product: item.id_product._id, quantity: item.quantity},
                ];
                console.log('Danh sách sau khi thêm:', updatedList);
                return updatedList;
            } else {
                const updatedList = prevSelect.filter(
                    si => si.id_product !== item.id_product._id,
                );
                console.log('Danh sách sau khi xóa:', updatedList);
                return updatedList;
            }
        });
    };
    console.log('Order', selectedItems);

    const caculator = updateCart => {
        const totalCart = updateCart.reduce(
            (sum, item) => (sum += item.priceCurrent),
            0,
        );
        setTotal(totalCart);
    };
    const ListCart = async () => {
        try {
            setLoading(true);
            const data = await getListCartByUser(userId);
            console.log('data list : ', data);
            setCart(data);
            caculator(data);
        } catch (error) {
            console.log('Lỗi khi lấy danh sách giỏ hàng:', error);
        } finally {
            setLoading(false);
        }
    };
    useFocusEffect(
        useCallback(() => {
            ListCart();
        }, []),
    );

    const addNewOrder = async () => {
        if (!Array.isArray(selectedItems) || selectedItems.length === 0) {
            Alert.alert('Đơn hàng', 'Vui lòng chọn sản phẩm để đặt hàng.');
            return;
        }
        if (!id_address || !id_address._id) {
            Alert.alert('Đơn hàng', 'Vui lòng chọn địa chỉ giao hàng.');
            return;
        }

        console.log('Selected Items:', selectedItems);
        console.log('ID Address:', id_address._id);
        console.log('data gửi lên : ', userId, id_address._id, selectedItems);
        try {
            setLoading(true);
            const data = await addOrder(userId, selectedItems, id_address._id);

            if (data) {
                setHide(true);
                setSelectedItems([]);
                ListCart();
            }
        } catch (error) {
            console.log(
                'Lỗi khi đặt hàng:',
                error.response?.data || error.message,
            );
            Alert.alert('Lỗi', 'Đặt hàng thất bại, vui lòng thử lại!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ModalOrderSuccess
                visible={hide}
                onClose={() => setHide(!hide)}></ModalOrderSuccess>

            <View style={styles.container}>
                {cart.length == 0 ? (
                    <View style={styles.containerEmpty}>
                        <Image
                            source={require('../../../assets/cartEmpty.png')}
                            style={styles.imagesEmpty}
                        />
                        <Text style={styles.textEmpty}>Your shopping cart</Text>
                        <Text style={styles.textEmpty}>
                            There are no products yet!
                        </Text>
                    </View>
                ) : (
                    <FlatList
                        data={cart}
                        keyExtractor={(item, index) =>
                            item._id ? item._id : index.toString()
                        }
                        renderItem={({item}) => (
                            <CartView
                                item={item}
                                ListCart={ListCart}
                                handleToggle={handleToggle}
                            />
                        )}
                        contentContainerStyle={{
                            marginHorizontal: 10,
                            marginVertical: 10,
                        }}
                    />
                )}
                <View style={styles.containerCheckout}>
                    <TouchableOpacity
                        style={styles.selectAddress}
                        onPress={() =>
                            navigation.navigate('SelectAddress', {
                                id_user: userId,
                            })
                        }>
                        <Text style={styles.address}>
                            Select delivery address
                        </Text>
                        <Image source={require('../../../assets/right.png')} />
                    </TouchableOpacity>
                    {id_address !== null ? (
                        <View style={{marginBottom: 15}}>
                            <View>
                                <Text style={styles.infoUser}>
                                    {id_address.fullname} |{' '}
                                    <Text>{id_address.numberphone}</Text>
                                </Text>
                                <Text style={styles.infoUser}>
                                    {id_address.street} , Phường{' '}
                                    <Text>{id_address.ward}</Text> , Quận{' '}
                                    <Text>{id_address.district}</Text> ,{' '}
                                    <Text>{id_address.city}</Text>
                                </Text>
                            </View>
                        </View>
                    ) : null}
                    <View style={styles.containerToTalCost}>
                        <Text style={styles.titleTotal}>Total amount : </Text>
                        <Text style={styles.titleTotal}>
                            {total.toLocaleString('Vi-vn')} đ
                        </Text>
                    </View>
                    {cart.length === 0 ? (
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={styles.checkoutEnable}
                            onPress={() =>
                                Alert.alert(
                                    'Giỏ hàng',
                                    'Xin lỗi hiện tại giỏ hàng của bạn đang trống. Vui lòng hãy thêm sản phẩm vào giỏ hàng để tiến hành đặt hàng.',
                                )
                            }>
                            <Text style={styles.textButtonEnable}>
                                Checkout
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={styles.checkout}
                            onPress={addNewOrder}>
                            <Text style={styles.textButton}>Checkout</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            <Loading loading={loading}></Loading>
        </>
    );
};
export default Cart;
