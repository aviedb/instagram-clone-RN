import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('instagram', () => App);

import Header from './src/component/Header'

class App extends Component {
  render() {
    return(
      <Header headerText="Instagram"/>
    )
  }
}

AppRegistry.registerComponent('instagram', () => App)
