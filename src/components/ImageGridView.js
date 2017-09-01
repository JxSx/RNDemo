import React from 'react';
import {StyleSheet, View, Image, Dimensions, ListView, TouchableOpacity} from 'react-native';

const screenW = Dimensions.get('window').width;


// 一些常亮设置
const cols = 3;
const space = 8;
const cellWH = (screenW - 4 * space) / 3;
const vMargin = 8;
const hMargin = 8;
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class ImageGridView extends React.Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data == null ? [] : this.props.data),
    };
  }

  renderRow = (rowData) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => {
        alert('点击了')
      }}>
        <View style={styles.innerViewStyle}>
          <Image source={{uri: rowData}} style={styles.iconStyle}/>
          {/*<Text>{rowData.title}</Text>*/}
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        contentContainerStyle={styles.listViewStyle}
        enableEmptySections={true}
      />
    );
  }
}


const styles = StyleSheet.create({
  listViewStyle: {
    // 主轴方向
    flexDirection: 'row',
    // 一行显示不下,换一行
    flexWrap: 'wrap',
    // 侧轴方向
    alignItems: 'center', // 必须设置,否则换行不起作用
  },

  innerViewStyle: {
    // 文字内容居中对齐
    alignItems: 'center'
  },

  iconStyle: {
    width: cellWH,
    height: 60,
    borderRadius: 5
  },

});