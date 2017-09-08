import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import ProfileScreen from './pages/ProfileScreen'
import WelcomeScreen from './pages/WelcomeScreen'
import WebScreen from "./pages/WebScreen";
import global from "./global";
import FindScreen from "./pages/FindScreen";
import MineScreen from "./pages/MineScreen";
import HomeScreen from "./pages/HomeScreen";


/**
 * Tab导航
 */
const MainScreenNavigator = TabNavigator({
  Home: {screen: HomeScreen},
  Find: {screen: FindScreen},
  // Video: {screen: VideoScreen},
  Mine: {screen: MineScreen},
}, {
  tabBarPosition: 'bottom',
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

export default App;


