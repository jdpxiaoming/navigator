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
import HomeFragment from './HomeTab';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MainPage extends React.Component {
  static defaultProps = {
    selectedColor:'rgb(22,131,251)',
    normalColor:'#a9a9a9'
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedTab :'home'
    } ;
  }

  render() {
    //do something .
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          renderIcon={() => <Image style={styles.imageTag} source={require('../image/ic_find_hot.png')} />}
          renderSelectedIcon={() => <Image style={styles.imageTag} source={require('../image/ic_hot_home.png')} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          {<HomeFragment navigator={this.props.navigator}/>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="我的"
          renderIcon={() => <Image style={styles.imageTag} source={this.state.personNormal} />}
          renderSelectedIcon={() => <Image style={styles.imageTag} source={this.state.personSelected} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          {<SecondPage navigator={this.props.navigator}/>}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }

  componentWillMount(){
    const {selectedcolor,normalColor } = this.props;
  //   Icon.getImageSource('md-home',50,selectedcolor).then((source) => this.setState({homeSelected:source}));
  //   Icon.getImageSource('md-home',50,normalColor).then((source) => this.setState({homeNormal:source}));
  //   Icon.getImageSource('md-person',50,selectedcolor).then((source) => this.setState({personSelected:source}));
    // Icon.getImageSource('md-person',50,normalColor).then((source) => this.setState({personNormal:source}));
  }
}


const styles = StyleSheet.create({
  imageTag:{
    width:30,
    height:30,
  },
});
