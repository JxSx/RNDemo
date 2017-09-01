import React from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback, Image, Dimensions} from 'react-native';
import ImageGridView from "./ImageGridView";

export default class ListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  _onPress = () => {
    this.props.onPressItem(this.props.data.item.url);
  };

  render() {
    const item = this.props.data.item;
    return (
      <TouchableNativeFeedback
        onPress={this._onPress}
        background={TouchableNativeFeedback.Ripple('#CCC', false)}>
        <View style={styles.itemContainer}>
          <Text style={{fontSize: 17, color: '#222'}}>{item.desc}</Text>

          {/*<View style={styles.imageStyle}>*/}
          {/*{imagesGrid}*/}
          {/*</View>*/}

          <ImageGridView data={item.images}/>

          <View style={styles.itemBottom} onPress={this._onPress}>
            <Text>By: {item.who}</Text>
            <Text>{item.createdAt.split('T')[0]}</Text>
          </View>

        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 8,
    backgroundColor: '#FFF'
  },
  itemBottom: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageStyle: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
  }
});