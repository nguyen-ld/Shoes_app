import {View, Text, FlatList, Image} from 'react-native';
import {styles} from './style';
import {useCallback, useState} from 'react';
import {getListFavourite} from '../../../api/FavouriteAPI';
import FavouriteItemView from '../../../components/ItemFavourite';
import {useFocusEffect} from '@react-navigation/native';
const Favourite = () => {
  const [favourite, setFavourite] = useState([]);

  const fetchFavourite = async () => {
    try {
      const data = await getListFavourite();
      setFavourite(data);
    } catch (error) {
      console.log('Lỗi khi lấy danh sách', error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      fetchFavourite();
    }, []),
  );
  return (
    <View style={styles.container}>
      {favourite == 0 ? (
        <View style={styles.containerEmpty}>
          <Image
            source={require('../../../assets/cartEmpty.png')}
            style={styles.imagesEmpty}
          />
          <Text style={styles.textEmpty}>There are no products yet!</Text>
        </View>
      ) : (
        <FlatList
          data={favourite}
          keyExtractor={item => item._id}
          renderItem={({item}) => <FavouriteItemView item={item} />}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            flex: 1,
          }}
          contentContainerStyle={{
            marginHorizontal: 10,
            marginTop: 5,
          }}
        />
      )}
    </View>
  );
};
export default Favourite;
