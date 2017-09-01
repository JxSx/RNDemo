import React from 'react';
import {View} from 'react-native';
import BaseListScreen from './BaseListScreen';

export default class AndroidScreen extends BaseListScreen {

  render() {
    return <View>
      <BaseListScreen category="Android" navigation={this.props.navigation}/>
    </View>
  }
}
