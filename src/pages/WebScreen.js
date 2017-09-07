import React from 'react';
import {StyleSheet, Text, View, WebView} from 'react-native';
import LoadingView from "../components/LoadingView";

export default class WebScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  constructor(props) {
    super(props);
    this.state = {
      title:''
    }
  }

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        {/*WebView API链接：http://reactnative.cn/docs/0.48/webview.html#content*/}
        <WebView
          ref={(ref) => {
            this.webview = ref;
          }}
          style={styles.base}
          source={{uri: params.url}}
          javaScriptEnabled
          domStorageEnabled
          decelerationRate="normal"
          startInLoadingState
          scalesPageToFit
          onShouldStartLoadWithRequest={() => {
            return true;
          }}
          onNavigationStateChange={this.onNavigationStateChange}
          renderLoading={() => <LoadingView/>}
          onLoad={() => console.log('load success')}
          onError={() => console.log('load failure')}
          onLoadEnd={() => console.log('onLoadEnd:加载结束时（无论成功或失败）调用')}
          onLoadStart={() => console.log('onLoadStart')}
        />
      </View>
    );
  }

  onNavigationStateChange = (navState) => {
    console.log('navState'+navState.title)
    // this.props.navigation.setParams({title: navState.title})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  base: {
    flex: 1,
    height: 200
  },
});

/*
<WebView
          ref={(ref) => {
            this.webview = ref;
          }}
          style={styles.base}
          source={{uri: params.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
          onShouldStartLoadWithRequest={() => {
            return true;
          }}
          renderLoading={() => <LoadingView/>}
        />
 */