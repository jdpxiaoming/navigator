/**
 * created by poe
 */
import React from 'react';
import{
  View,
  Navigator,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  ToolbarAndroid
} from 'react-native';
import SecondPage  from './SecondPage';
import WeatherInfo from './WeatherInfo';

export default class FirstPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  _pressButton() {
    const { navigator } = this.props ;
    if(navigator) {
      navigator.push({
        name : 'SecondPage' ,
        component : SecondPage
      });
    }
  }
  _pressWeahter() {
    const { navigator } = this.props ;
    if(navigator){
      navigator.push({
        name : 'WeatherInfo' ,
        component : WeatherInfo
      });
    }
  }

  render() {
      return (
          <ScrollView style={styles.container}>
          <ToolbarAndroid
              logo={require('../image/ic_share_ios.png')}
              title="NavigatorAPP"
              actions={[{title: 'Settings', icon: require('./../image/ic_find_hot.png'), show: 'always'}]}
              onActionSelected={this.onActionSelected}
              />
            <TouchableOpacity onPress={this._pressButton.bind(this)} activeOpacity={0.5}>
              <Text style={styles.texter}>Fist page , click to next  ! !!!! </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._pressWeahter.bind(this)} >
              <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            </TouchableOpacity>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
          </ScrollView>
      );
  }
}

const styles = StyleSheet.create ({
  container:{
    flex: 1,
    flexDirection:'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  texter:{
    textAlign: 'center',
    color:'skyblue',
    fontSize:20,
    margin:20,
    padding:10
  },
});
