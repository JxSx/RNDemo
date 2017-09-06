import React from 'react';
import {View,StatusBar} from 'react-native';
import BaseListScreen from './BaseListScreen';

export default class AndroidScreen extends BaseListScreen {

  render() {
    return <View>
      <StatusBar
        backgroundColor="#008CEE"
      />

      <BaseListScreen category="Android" navigation={this.props.navigation}/>
    </View>
  }
}
