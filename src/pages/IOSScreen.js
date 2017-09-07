import React from 'react';
import {View} from 'react-native';
import BaseListScreen from './BaseListScreen';

export default class IOSScreen extends BaseListScreen {

  static navigationOptions = {
    tabBarLabel: 'iOS',
  };

  render() {
    return <View  style={{flex:1}}>
      <BaseListScreen category="iOS"/>
    </View>
  }
}