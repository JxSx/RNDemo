import React from 'react';
import {View, FlatList, Text, ActivityIndicator,StyleSheet} from 'react-native';
import {requestRandomData} from '../api/GankApi';
import ListItem from "../components/ListItem";
import LoadingView from "../components/LoadingView";


let page = 1;
export default class BaseListScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      first: true,
      dataList: [],
      refreshing: false,
      loadMore: false,
    }
  }

  componentDidMount() {
    this.requestData(1)
  }

  _onPressItem = (title, url) => {
    const {navigate} = this.props.navigation;
    console.log(this.props.navigation);
    navigate('Web', {'title':title, url})
  };

  _renderItem = (item) => (
    <ListItem
      data={item}
      onPressItem={this._onPressItem}
    />
  );

  _dividerLine = () => (<View style={{height: 2}}/>);

  _emptyComponent = () => (<LoadingView/>);

  _onRefresh = () => {
    this.setState({
      refreshing: true
    });
    this.requestData(1)
  };

  _onEndReached = () => {
    if (!this.state.refreshing && !this.state.loadMore) {
      this.setState({
        loadMore: true
      })
      this.requestData(++page);
    }
  };

  _onFooterComponent = () => {
    return (
      <View style={styles.footerStyle}>
        <ActivityIndicator
          style={styles.indicatorStyle}
          size="large"
        />
      </View>
    )
  };

  requestData = (page) => {
    requestRandomData(this.props.category, page)
      .then((result) => {
        this.setState({
          first: false,
          loadMore: false,
          refreshing: false,
          dataList: page == 1 ? result.results : this.state.dataList.concat(result.results),
        })
      });
  };

  render() {

    let content;

    if (this.state.first) {
      content = (<LoadingView/>);
    } else {
      content = (<FlatList
        initialNumToRender={10}
        data={this.state.dataList}
        keyExtractor={(item, index) => item._id}
        renderItem={this._renderItem}
        onRefresh={this._onRefresh}
        refreshing={this.state.refreshing}
        ItemSeparatorComponent={this._dividerLine}
        onEndReachedThreshold={0.1}
        onEndReached={this._onEndReached}
        ListFooterComponent={this._onFooterComponent}
      />);
    }

    return (
      <View style={{flex: 1}}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerStyle: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDD'
  },
  indicatorStyle: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
});