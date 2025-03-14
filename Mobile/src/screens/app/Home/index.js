import React, {useEffect, useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {style} from './style';
import {FlatList} from 'react-native-gesture-handler';
import ItemsCategories from '../../../items/ItemsCategories';
import {getListCategory} from '../../../api/CategoriesAPI';
import ItemProducts from '../../../items/ItemProduct';
import {getListProductById} from '../../../api/ProductAPI';
import Loading from '../../../components/ModalLoading';
import {context} from '../../../context/contextAPI';
import {useContext} from 'react';

const Home = ({navigation}) => {
    const {userId} = useContext(context);
    console.log('ID User từ Context: ', userId);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [category, setCategorys] = useState([]);
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSelectCategory = categoryId => {
        setSelectedCategory(categoryId);
    };

    useEffect(() => {
        getListCategory()
            .then(data => {
                setLoading(true);
                setCategorys(data);
                if (data.length > 0) {
                    setSelectedCategory(data[0]._id);
                }
            })
            .catch(error => console.error('Lỗi khi tải danh mục :', error))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        setLoading(true);
        getListProductById(selectedCategory, navigation)
            .then(setProduct)
            .catch(error => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    }, [selectedCategory]);

    return (
        <>
            <View style={style.container}>
                <View style={style.containerHeadePage}>
                    <Image
                        source={require('../../../assets/user.png')}
                        style={style.images}
                    />
                    <View>
                        <View style={style.welcom}>
                            <Text style={style.textWelcom}>Welcome Back</Text>
                            <Image
                                source={require('../../../assets/wave.png')}
                            />
                        </View>
                        <Text style={style.textNameUser}>Le Duc Nguyen</Text>
                    </View>
                </View>
                <Image
                    source={require('../../../assets/banner1.png')}
                    style={{marginTop: 10, width: '100%'}}
                />
                <View>
                    <Text style={style.titlecategory}>Categories</Text>
                    <FlatList
                        data={category}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress={() => handleSelectCategory(item._id)}
                                activeOpacity={0.8}>
                                <ItemsCategories
                                    item={item}
                                    isSelected={item._id === selectedCategory}
                                />
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item._id.toString()}
                        numColumns={4}
                        columnWrapperStyle={{
                            justifyContent: 'space-between',
                            marginVertical: 10,
                        }}
                    />
                </View>

                <FlatList
                    data={product}
                    renderItem={({item}) => (
                        <ItemProducts item={item} id_user={userId} />
                    )}
                    keyExtractor={item => item._id.toString()}
                    numColumns={2}
                    columnWrapperStyle={{
                        flex: 1,
                        justifyContent: 'space-around',
                        marginTop: 10,
                    }}
                    contentContainerStyle={{paddingHorizontal: 10}}
                />
            </View>
            <Loading loading={loading}></Loading>
        </>
    );
};

export default Home;
