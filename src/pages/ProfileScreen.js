import React from 'react';
import {
  View,
  Button
} from 'react-native';
import LoadingView from "../components/LoadingView";

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.name}`,
  });

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1}}>

        <LoadingView/>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', {name: 'Jane'})
        }
      />
      </View>
    );
  }
}