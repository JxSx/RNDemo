import React from 'react';
import {Text,Image,StyleSheet} from 'react-native';


export default class MineScreen extends React.Component{

  static navigationOptions = {
    tabBarLabel:'我',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/ic_tab_mine_normal.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render(){
    return(
      <Text>MineScreen</Text>
    );
  }
}


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});