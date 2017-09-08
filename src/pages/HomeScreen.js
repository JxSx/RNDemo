import React from 'react';
import {Text, Image,StyleSheet} from 'react-native';
import {TabNavigator} from 'react-navigation'
import AndroidScreen from "./AndroidScreen";
import IOSScreen from "./IOSScreen";
import ResourceScreen from "./ResourceScreen";


export default class HomeScreen extends React.Component{

  static navigationOptions = {
    tabBarLabel:'首页',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/ic_tab_team_normal.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render(){
    return(
      <HomeScreenNavigator/>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

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