import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {requestRandomData} from '../api/GankApi';
import ListItem from "../components/ListItem";
import WebPage from "./WebPage";
import LoadingView from "../components/LoadingView";


let page = 1;
export default class BaseListScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      refreshing: true,
      loadingMore: false,
    }
  }

  componentWillMount() {
    this.requestData(1)
  }

  _onPressItem = (url) => {
    const {navigate} = this.props.navigation;
    navigate('Web', {name: 'Jane'})
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
    if (!this.state.refreshing && !this.state.loadingMore) {
      this.setState({
        loadingMore: true
      })
      this.requestData(++page);
    }
  };

  requestData = (page) => {
    requestRandomData(this.props.category, page)
      .then((result) => {
        this.setState({
          loadingMore: false,
          refreshing: false,
          dataList: page == 1 ? result.results : this.state.dataList.concat(result.results),
        })
      });
  };

  render() {
    return (
      <View>
        <FlatList
          initialNumToRender={10}
          data={this.state.dataList}
          keyExtractor={(item, index) => item._id}
          renderItem={this._renderItem}
          onRefresh={this._onRefresh}
          refreshing={this.state.refreshing}
          ItemSeparatorComponent={this._dividerLine}
          onEndReachedThreshold={0.3}
          onEndReached={this._onEndReached}
        />
      </View>
    );
  }
}
