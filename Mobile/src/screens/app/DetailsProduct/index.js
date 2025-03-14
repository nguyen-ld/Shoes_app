import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {FlatList} from 'react-native-gesture-handler';
import {useEffect, useState} from 'react';
import {getListGalleryImages} from '../../../api/GalleryProductAPI';
import GalleryView from '../../../items/ItemGallery';
import {getListInfo} from '../../../api/ProductAPI';
import {getListSize} from '../../../api/SizeAPI';
import SizeView from '../../../items/ItemSize';
import {addToCart, getListCartByUser} from '../../../api/CartAPI';
import Loading from '../../../components/ModalLoading';

const Details = ({route}) => {
    const {id_product, id} = route.params;
    console.log('ID User trong Details:', id);

    const [images, setImages] = useState([]);
    const [product, setProduct] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedSize, setselectedSize] = useState(null);
    const [selectedGallery, setselectedGallery] = useState(null);
    const [size, setSize] = useState([]);
    const [text, setText] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getListGalleryImages(id_product)
            .then(setImages)
            .catch(error => console.log('Lỗi khi lấy hình ảnh : ', error))
            .finally(setLoading(false));
    }, [id_product]);

    useEffect(() => {
        setLoading(true);
        if (id_product) {
            getListInfo(id_product)
                .then(data => {
                    setProduct(data);
                    setSelectedImage(data.images);
                    console.log('link ảnh : ', data.images);
                })
                .catch(error => console.log('Lỗi khi lấy thông tin : ', error))
                .finally(setLoading(false));
        }
    }, [id_product]);

    useEffect(() => {
        setLoading(true);
        getListSize()
            .then(setSize)
            .catch(error => console.log('Lỗi khi lấy size : ', error))
            .finally(setLoading(false));
    }, []);

    const addProductToCart = async () => {
        if (
            !product._id ||
            !selectedGallery ||
            !selectedSize ||
            !selectedImage
        ) {
            Alert.alert(
                'Vui lòng chọn đủ thông tin trước khi thêm vào giỏ hàng.',
            );
            return;
        }
        try {
            setLoading(true);
            console.log('🛒 Dữ liệu trước khi gửi API:', {
                id_product: product._id,
                images: selectedImage,
                id_size: selectedSize,
                quantity: 1,
                id_user: id,
            });
            const data = await addToCart(
                id,
                product._id,
                selectedSize,
                1,
                selectedImage,
            );
            console.log('data hoàn thành  : ', data);
        } catch (error) {
            console.log('Lỗi khi thêm vào giỏ hàng:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <Image
                        source={[{uri: selectedImage}]}
                        style={styles.imageProductDetails}
                    />
                </View>

                <View style={styles.containerContent}>
                    <Text style={styles.titleProduct}>{product.name}</Text>
                    <Text style={styles.price}>
                        {product.priceInitial
                            ? product.priceInitial.toLocaleString('vi-VN') +
                              ' đ'
                            : 'Đang cập nhật'}
                    </Text>

                    <Text
                        style={styles.describe}
                        numberOfLines={text ? 4 : 0}
                        onPress={() => setText(!text)}>
                        {product.describe}
                    </Text>
                    <Text style={styles.categories}>Bộ sưu tập</Text>
                    <FlatList
                        data={images}
                        renderItem={({item}) => (
                            <GalleryView
                                item={item}
                                onPress={() => {
                                    setSelectedImage(item.images);
                                    setselectedGallery(item._id);
                                }}
                                isSelected={selectedGallery === item._id}
                            />
                        )}
                        keyExtractor={item =>
                            item?._id?.toString() || Math.random().toString()
                        }
                        numColumns={4}
                        columnWrapperStyle={{
                            justifyContent: 'flex-start',
                            gap: 10,
                            marginBottom: 10,
                        }}
                        contentContainerStyle={{marginHorizontal: 5}}
                    />
                    <Text style={styles.textSize}>Size</Text>
                    <FlatList
                        data={size}
                        keyExtractor={item => item._id.toString()}
                        renderItem={({item}) => (
                            <SizeView
                                item={item}
                                onPress={() => setselectedSize(item._id)}
                                isSelected={selectedSize === item._id}
                            />
                        )}
                        numColumns={7}
                        columnWrapperStyle={{
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: 12,
                            marginBottom: 10,
                        }}
                        contentContainerStyle={{marginHorizontal: 5}}
                    />
                </View>
                <View style={{marginTop: 8}}>
                    <View style={styles.footer}>
                        <View>
                            <Text style={styles.titleFooter}>Tổng tiền : </Text>
                            <Text style={styles.titleFooter}>
                                {product.priceInitial
                                    ? product.priceInitial.toLocaleString(
                                          'vi-VN',
                                      ) + ' đ'
                                    : 'Đang cập nhật'}
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={styles.containerButton}
                            activeOpacity={0.8}
                            onPress={addProductToCart}>
                            <Text style={styles.textButton}>
                                Thêm vào giỏ hàng
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Loading loading={loading}></Loading>
            </View>
        </>
    );
};
export default Details;
