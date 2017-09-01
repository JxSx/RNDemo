import React from 'react';
import {View} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import AndroidScreen from './pages/AndroidScreen';
import IOSScreen from './pages/IOSScreen';
import ProfileScreen from './pages/ProfileScreen'
import WelcomeScreen from './pages/WelcomeScreen'
import VideoScreen from "./pages/VideoScreen";
import ResourceScreen from "./pages/ResourceScreen";
import WebPage from "./pages/WebPage";
import BaseListScreen from "./pages/BaseListScreen";


/**
 * Tab导航
 */
const MainScreenNavigator = TabNavigator({
  Android: {screen: AndroidScreen},
  iOS: {screen: IOSScreen},
  // Video: {screen: VideoScreen},
  Resource: {screen: ResourceScreen},
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  lazy: true,
  // tabBarOptions: {
  //   activeTintColor: '#e91e63',
  // },
});
MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};
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
  Web: {screen: WebPage},
}, {
  headerMode: 'screen'
});

export default App;


