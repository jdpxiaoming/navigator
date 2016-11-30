/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
// import FirstPage   from './js/page/FirstPage';
// import WeahterInfo from './js/page/WeatherInfo';
import MainPage from './js/page/MainPage';

export default class navigator extends Component {
  render() {
    let defaultName = 'MainPage';
    let defaultComponet = MainPage;
      // let defaultName = 'WeahterInfo';
      // let defaultComponet = WeahterInfo;
    return (
      <Navigator
        initialRoute = {{name: defaultName , component: defaultComponet}}
        configureScene = {(route) => {
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}

        renderScene={(route , navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
    );
  }
}
AppRegistry.registerComponent('navigator', () => navigator);
