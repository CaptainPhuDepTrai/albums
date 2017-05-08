import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Button } from 'native-base';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <Button success onPress={this.props.clickAbout}><Text>Go to About</Text></Button>
      </View>
    );
  }
}
