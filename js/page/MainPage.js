/**
 * 主要页面
 * created by poe 2016/11/28
 */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import FirstPage from './FirstPage';
import SecondPage  from './SecondPage';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab :'home'
    } ;
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          renderIcon={() => <Image style={styles.imageTag} source={require('../image/ic_find_hot.png')} />}
          renderSelectedIcon={() => <Image style={styles.imageTag} source={require('../image/ic_hot_home.png')} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          {<FirstPage navigator={this.props.navigator}/>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="我的"
          renderIcon={() => <Image style={styles.imageTag} source={require('../image/ic_find_latest.png')} />}
          renderSelectedIcon={() => <Image style={styles.imageTag} source={require('../image/ic_feed_follow.png')} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          {<SecondPage navigator={this.props.navigator}/>}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  imageTag:{
    width:30,
    height:30,
  },
});
