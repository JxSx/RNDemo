import React from 'react';
import {Text, View, StyleSheet,StatusBar, Dimensions,Image, Animated} from 'react-native';
import NavigationUtil from "../utils/NavigationUtil";

const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;
export default class WelcomeScreen extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0.5),
    }
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      duration: 2000,
      toValue: 1
    }).start();//开始

    this.timer = setTimeout(() => {
      NavigationUtil.reset(this.props.navigation, 'Main');
    }, 2000);
  }

  componentWillUnmount() {
    // 请注意Un"m"ount的m是小写

    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <Animated.View style={[styles.container,{opacity: this.state.fadeAnim}]}>

        {/*translucent为true，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。*/}
        <StatusBar
          backgroundColor="transparent"
          translucent
        />

        <Image source={require('../img/splash.png')} style={{width: maxWidth, height: maxHeight}}/>

        {/*<Text>
          Welcome to React Native!
        </Text>*/}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});