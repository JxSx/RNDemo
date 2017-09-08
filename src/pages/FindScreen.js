import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';


export default class FindScreen extends React.Component{

  static navigationOptions = {
    tabBarLabel:'发现',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/ic_tab_navi_normal.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render(){
    return(
      <Text>FindScreen</Text>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});