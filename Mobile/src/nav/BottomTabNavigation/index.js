import {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/app/Home';
import Favourite from '../../screens/app/Favourite';
import Order from '../../screens/app/Order';
import Cart from '../../screens/app/Cart';
import Profile from '../../screens/app/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import {context} from '../../context/contextAPI';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const {userId} = useContext(context);
    console.log('User ID từ Context: ', userId);

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName;
                    if (route.name === 'Home') iconName = 'home-outline';
                    else if (route.name === 'Cart') iconName = 'bag-outline';
                    else if (route.name === 'Order') iconName = 'cart-outline';
                    else if (route.name === 'Favourite')
                        iconName = 'heart-outline';
                    else if (route.name === 'Profile')
                        iconName = 'person-outline';

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontFamily: 'Poppins-Medium',
                },
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 10,
                },
                headerStyle: {
                    borderBottomColor: '#EEEEEE',
                    borderBottomWidth: 1,
                },
                tabBarActiveTintColor: '#007aff',
                tabBarInactiveTintColor: '#A8A6A7',
                tabBarItemStyle: {
                    backgroundColor: 'transparent',
                },
            })}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Order" component={Order} />
            <Tab.Screen name="Favourite" component={Favourite} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default Tabs;
