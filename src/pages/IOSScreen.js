import React from 'react';
import {View} from 'react-native';
import BaseListScreen from './BaseListScreen';

export default class IOSScreen extends BaseListScreen {

  static navigationOptions = {
    tabBarLabel: 'iOS',
  };

  render() {
    return <View>
      <BaseListScreen category="iOS"/>
    </View>
  }
}