import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import ProfileScreen from './pages/ProfileScreen'
import WelcomeScreen from './pages/WelcomeScreen'
import WebScreen from "./pages/WebScreen";
import global from "./global";
import FindScreen from "./pages/FindScreen";
import MineScreen from "./pages/MineScreen";
import AndroidScreen from "./pages/AndroidScreen";
import IOSScreen from "./pages/IOSScreen";
import ResourceScreen from "./pages/ResourceScreen";


/**
 * Tab导航
 */
const HomeScreenNavigator = TabNavigator({
  Android: {screen: AndroidScreen},
  iOS: {screen: IOSScreen},
  Resource: {screen: ResourceScreen},
}, {
  tabBarPosition: 'top',
  swipeEnabled: false,
  lazy: true,
  tabBarOptions: {
    upperCaseLabel:false,
    indicatorStyle:{
      backgroundColor:'#FFF'
    }
  },
});
/**
 * Tab导航
 */
const MainScreenNavigator = TabNavigator({
  Home: {
    screen: HomeScreenNavigator,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '首页',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('./img/ic_tab_team_normal.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    })
  },
  Find: {screen: FindScreen},
  // Video: {screen: VideoScreen},
  Mine: {screen: MineScreen},
}, {
  tabBarPosition: 'bottom',
  lazy: true,
  tabBarOptions: {
    activeTintColor:`${global.activeColor}`,
    inactiveTintColor :`${global.inactiveColor}`,
    lazy: true,
    showIcon: true,
    showLabel:true,
    upperCaseLabel:false,
    labelStyle: {
      fontSize: 10,
      marginTop: 0,
      marginBottom: 0,
    },
    style: {
      marginBottom: -2,
      backgroundColor:'#FFF'
    },
  },
  navigationOptions:{
    title:'Home'
  }
});

/**
 * 页面导航
 */
const App = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null
    },
  },
  Main: {
    screen: MainScreenNavigator,
    navigationOptions: {
      header: null,
    }
  },
  Profile: {screen: ProfileScreen},
  Web: {screen: WebScreen},
}, {
  headerMode: 'screen',
  navigationOptions: {
    headerTintColor:`${global.titleTextColor}`,
    headerStyle: {
      backgroundColor:`${global.titleBackgroundColor}`
    },
    headerTitleStyle:{
      color:`${global.titleTextColor}`
    },
    gesturesEnabled:true,
  }
});


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default App;


