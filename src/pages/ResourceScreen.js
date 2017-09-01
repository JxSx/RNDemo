import React from 'react';
import {View} from 'react-native';
import BaseListScreen from './BaseListScreen';

export default class ResourceScreen extends BaseListScreen {


  static navigationOptions = {
    tabBarLabel: '拓展资源',
  };

  render() {
    return <View>
      <BaseListScreen category="拓展资源"/>
    </View>
  }
}
