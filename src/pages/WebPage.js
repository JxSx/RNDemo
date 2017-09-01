import React from 'react';
import {StyleSheet, Text, View, WebView} from 'react-native';
import LoadingView from "../components/LoadingView";

export default class WebPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF'
  },
  base: {
    flex: 1,
    height:200
  },
});