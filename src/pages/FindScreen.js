import React from 'react';
import {View, Text, StyleSheet, Image, ViewPagerAndroid, Dimensions} from 'react-native';
import {requestLatestNews} from '../api/ZhiHuApi';

// import ViewPager from 'react-native-viewpager';
const {width, height} = Dimensions.get('window');

export default class FindScreen extends React.Component{

  static navigationOptions = {
    tabBarLabel:'发现',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/ic_tab_navi_normal.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  constructor(props) {
    super(props);
    // var dataSource = new ViewPager.DataSource({
    //   pageHasChanged: (p1, p2) => p1 !== p2,
    // });
    // this.state = {
    //   dataSource: dataSource.cloneWithPages([]),
    // }
  }

  componentDidMount() {
    requestLatestNews().then(result => {
      // this.setState({
      //   dataSource: this.state.dataSource.cloneWithPages(result.top_stories)
      // });
    });
  }

  render(){
    return(
      <View style={{flex: 1}}>

        <Text>发现页面</Text>
        {/*<ViewPager
          style={{flex:1}}
          dataSource={this.state.dataSource}
          renderPage={this._renderPage}
          isLoop={false}
          initialPage={0}
          renderPageIndicator={false}
          autoPlay={false}/>*/}
      </View>
    );
  }

  _renderPage = (item) => {
    console.log(item)
    return (<Text>111</Text>);
  }

}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
    height: 100
  }
});