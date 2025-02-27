import {View, Dimensions} from 'react-native';
import {styles} from './style';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ActiveView from '../ActiveOrder';
import CompleteView from '../CompleteOrder';
import {useState} from 'react';

const Order = ({id_user}) => {
  const routes = [
    {key: 'active', title: 'Active'},
    {key: 'complete', title: 'Complete'},
  ];
  const renderScene = ({route}) => {
    switch (route.key) {
      case 'active':
        return <ActiveView id_user={id_user} />;
      case 'complete':
        return <CompleteView id_user={id_user} />;
      default:
        return null;
    }
  };
  const width = {width: Dimensions.get('window').width};
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <TabView
        renderScene={renderScene}
        initialLayout={width}
        onIndexChange={setIndex}
        navigationState={{index, routes}}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={{backgroundColor: 'white'}}
            indicatorStyle={{backgroundColor: '#5B9EE1', height: 3}}
            labelStyle={{fontSize: 16, fontWeight: 'bold'}}
            activeColor="black"
            inactiveColor="black"
          />
        )}
      />
    </View>
  );
};
export default Order;
