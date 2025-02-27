import './gesture-handler.native';
import {enableScreens} from 'react-native-screens';
enableScreens();

import React from 'react';
import SplashScreens from './src/screens/auth/Splash';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './src/components/BottomTabNavigation';
import DetailProducts from './src/screens/app/DetailsProduct';
import EditProfile from './src/screens/app/EditProfile';
import ChangePassword from './src/screens/app/ChangePassword';
import AddressEdit from './src/screens/app/Address';
import EditAddress from './src/screens/app/EditAddress';
import SelectAddress from './src/screens/app/SelectAddress';
import UpdateAddress from './src/screens/app/UpdateAddress';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {fontFamily: 'Poppins-SemiBold', fontSize: 18},
        }}>
        <Stack.Screen
          name="splash"
          component={SplashScreens}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="tabs"
          component={Tabs}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="DetailsProduct"
          component={DetailProducts}
          options={{
            title: 'Product details',
          }}
        />
        <Stack.Screen
          name={'EditProfile'}
          component={EditProfile}
          options={{title: 'Change information'}}
        />
        <Stack.Screen
          name={'ChangePassword'}
          component={ChangePassword}
          options={{title: 'Change password'}}
        />
        <Stack.Screen
          name={'AddressEdit'}
          component={AddressEdit}
          options={{title: 'Address'}}
        />
        <Stack.Screen
          name="EditAddress"
          component={EditAddress}
          options={{title: 'New address'}}
        />
        <Stack.Screen
          name="SelectAddress"
          component={SelectAddress}
          options={{title: 'Delivery address', headerLeft: () => null}}
        />
        <Stack.Screen
          name="UpdateAddress"
          component={UpdateAddress}
          options={{title: 'Edit address'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
