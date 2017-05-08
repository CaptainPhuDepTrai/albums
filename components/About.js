import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Button } from 'native-base';

export default class About extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Button success onPress={this.props.clickHome}>
          <Text>Back to Home</Text>
        </Button>
      </View>
    );
  }
}
