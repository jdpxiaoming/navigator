/**
 * 首页-主要的Fragment
 * created by poe 2016/12/01
 */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import FirstPage from './FirstPage';
import SecondPage  from './SecondPage';

export default class HomeTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab :'home'
    } ;
  }

  render() {
    return (
      <ScrollableTabView>
        <FirstPage tabLabel = "First" />
        <SecondPage tabLabel = "Second" />
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  imageTag:{
    width:30,
    height:30,
  },
});
