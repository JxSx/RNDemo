import React from 'react';
import {View} from 'react-native';
import BaseListScreen from './BaseListScreen';

export default class ResourceScreen extends BaseListScreen {


  static navigationOptions = {
    tabBarLabel: '拓展资源',
  };

  render() {
    return <View  style={{flex:1}}>
      <BaseListScreen category="拓展资源"  navigation={this.props.navigation}/>
    </View>
  }
}
