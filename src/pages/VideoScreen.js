import React from 'react';
import {View} from 'react-native';
import BaseListScreen from './BaseListScreen';

export default class VideoScreen extends BaseListScreen {

  static navigationOptions = {
    tabBarLabel: '休息视频',
  };

  render() {
    return <View>
      <BaseListScreen category="休息视频"/>
    </View>
  }
}
