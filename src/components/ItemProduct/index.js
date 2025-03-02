import {
  Alert,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {style} from './style';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  addFavourite,
  getListFavourite,
  removeFavourite,
} from '../../api/FavouriteAPI';
const ItemProducts = ({item, id_user}) => {
  const navigation = useNavigation();
  const [heart, setHeart] = useState(false);
  console.log('item product id_user : ', id_user);
  useEffect(() => {
    const fetchFavourites = async () => {
      const favourites = await getListFavourite();
      const isFavourite = favourites.find(
        fav => fav.id_product._id === item._id,
      );
      setHeart(isFavourite);
    };
    fetchFavourites();
  }, [item]);

  const toggleFavourite = async () => {
    if (!heart) {
      const response = await addFavourite(item._id);
      console.log('name : ', item._id);
      if (response.status === 200) {
        Alert.alert(
          'Yêu thích ',
          `Đã thêm sản phẩm ${item.name} vào danh mục yêu thích`,
        );
        setHeart(true);
      } else {
        Alert.alert('Lỗi:', response.message);
      }
    } else {
      const response = await removeFavourite(item._id);
      console.log('id : ', item._id);
      if (response.status === 200) {
        Alert.alert(
          'Yêu thích ',
          `Đã xóa sản phẩm ${item.name} ra khỏi danh mục yêu thích`,
        );
        setHeart(false);
      } else {
        Alert.alert('Lỗi:', response.message);
      }
    }
  };

  return (
    <View style={style.container}>
      <View style={style.containerImages}>
        <Image source={{uri: item.images}} style={style.images} />
      </View>

      <Text style={[style.productName, style.title]}>{item.name}</Text>
      <View style={style.containerView}>
        <Text style={[style.price]}>
          {item.priceInitial.toLocaleString('vi-VN')} đ
        </Text>
        <TouchableOpacity
          style={style.buttonAdd}
          onPress={() => {
            console.log(item._id); // In ra ID sản phẩm
            navigation.navigate('DetailsProduct', {
              id_product: item._id,
              id: id_user,
            });
          }}>
          <Image
            source={require('../../assets/icon_add.png')}
            style={style.add}
          />
        </TouchableOpacity>
      </View>
      <Pressable onPress={toggleFavourite} style={style.containerHeart}>
        <Image
          source={
            heart
              ? require('../../assets/heart-active.png')
              : require('../../assets/heart.png')
          }
          style={style.heartIcon}
        />
      </Pressable>
    </View>
  );
};
export default ItemProducts;
