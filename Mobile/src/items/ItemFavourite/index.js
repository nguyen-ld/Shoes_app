import {Image, View, Text, TouchableOpacity} from 'react-native';
import {styleFavourite} from './style';
const FavouriteItemView = ({item}) => {
    console.log('item nhận được từ api : ', item);
    return (
        <View style={styleFavourite.container}>
            <View style={styleFavourite.containerImages}>
                <Image
                    source={{uri: item.id_product.images}}
                    style={styleFavourite.imagesFavourite}
                />
            </View>
            <Text style={styleFavourite.nameProduct}>
                {item.id_product.name}
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Text style={styleFavourite.priceProduct}>
                    {item.id_product.priceInitial.toLocaleString('vi-VN')} đ
                </Text>
                <TouchableOpacity
                    style={styleFavourite.AddToCart}
                    activeOpacity={0.9}>
                    <Image source={require('../../assets/icon_add.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default FavouriteItemView;
