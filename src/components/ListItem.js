import React from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback, Image, Dimensions} from 'react-native';
import ImageGridView from "./ImageGridView";

export default class ListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  _onPress = () => {
    const item = this.props.data.item;
    this.props.onPressItem(item.desc, item.url);
  };

  render() {
    const item = this.props.data.item;

    let imageComponent;
    if (item.images != null && item.images.length > 0) {
      imageComponent = (
        <Image source={{uri: item.images[0]}}
               style={styles.imageStyle}/>
      );
    } else {
      imageComponent = (<View/>);
    }

    return (
      <TouchableNativeFeedback
        onPress={this._onPress}
        background={TouchableNativeFeedback.Ripple('#CCC', false)}>
        <View style={styles.itemContainer}>
          <View style={styles.itemTxtContainer}>

            <Text style={styles.titleStyle} numberOfLines={2}>{item.desc}</Text>

            {/*<View style={styles.imageStyle}>*/}
            {/*{imagesGrid}*/}
            {/*</View>*/}

            {/*<ImageGridView data={item.images}/>*/}


            <View style={styles.itemBottom} onPress={this._onPress}>
              <Text>By: {item.who}</Text>
              <Text>{item.createdAt.split('T')[0]}</Text>
            </View>
          </View>

          {imageComponent}
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#FFF',
  },
  itemTxtContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  titleStyle: {
    flex: 1,
    fontSize: 17,
    color: '#222',
  },
  itemBottom: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageStyle: {
    width: 80,
    height: 80,
    marginLeft: 8
  }
});