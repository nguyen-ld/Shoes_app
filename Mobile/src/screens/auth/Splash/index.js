import {Image, Pressable, Text, View} from 'react-native';
import {styleSplashScreen} from './style';
import Button from '../../../components/Button';
const SplashScreens = ({navigation}) => {
  return (
    <View style={styleSplashScreen.container}>
      <Image
        resizeMode="center"
        source={require('../../../assets/welcom.png')}
        style={styleSplashScreen.imgSplash}
      />
      <View style={styleSplashScreen.containerTitle}>
        <Text style={styleSplashScreen.titleSplash}>
          You'll Find Everything
        </Text>
        <Text style={styleSplashScreen.titleSplash}>You Need Here !</Text>
        <Text style={styleSplashScreen.contentSplash}>
          Explore all product models to choose the product you like
        </Text>
      </View>
      <Pressable
        style={styleSplashScreen.containerSignup}
        onPress={() => navigation.navigate('login')}>
        <Text style={styleSplashScreen.titleSignUp}>Get Started</Text>
      </Pressable>
    </View>
  );
};
export default SplashScreens;
