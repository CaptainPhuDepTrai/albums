import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Home from './components/Home.js'
import About from './components/About.js'
import { Navigator } from 'react-native-deprecated-custom-components';

export default class MyHome extends Component {
  renderScene(route, navigator) {

    switch (route.name) {
      case 'Home': return (<Home clickAbout={() => navigator.push({ name: 'About' })} />);
      case 'About': return (<About clickHome={() => navigator.pop({ name: 'Home' })} />);
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Home' }}
        renderScene={this.renderScene}
      />
    );
  }
}


AppRegistry.registerComponent('MyHome', () => MyHome);
