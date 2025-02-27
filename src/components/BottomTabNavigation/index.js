import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/app/Home';
import Favourite from '../../screens/app/Favourite';
import Order from '../../screens/app/Order';
import Cart from '../../screens/app/Cart';
import Profile from '../../screens/app/Profile';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Tabs = ({route, navigation}) => {
  const {id_user} = route.params || {};
  console.log('tabs nhận : ', id_user);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = 'bag-outline';
          } else if (route.name === 'Order') {
            iconName = 'cart-outline';
          } else if (route.name === 'Favourite') {
            iconName = 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }
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
      <Tab.Screen name="Home" options={{headerShown: false}}>
        {props => <Home {...props} id_user={id_user} />}
      </Tab.Screen>

      <Tab.Screen name="Cart">
        {props => <Cart {...props} id_user={id_user} />}
      </Tab.Screen>

      <Tab.Screen name="Order">
        {props => <Order {...props} id_user={id_user} />}
      </Tab.Screen>

      <Tab.Screen name="Favourite">
        {props => <Favourite {...props} id_user={id_user} />}
      </Tab.Screen>

      <Tab.Screen name="Profile">
        {props => <Profile {...props} id_user={id_user} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
export default Tabs;
