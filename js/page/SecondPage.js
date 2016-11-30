/**
 * 测试跳转回{FirstPage}
 * created by poe 2016-11-24
 */
import React from 'react';
import {
  View,
  Navigator,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import FirstPage from './FirstPage';
import WeatherInfo from './WeatherInfo';

export default class SecondPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {} ;
  }
  _pressButton() {
    const { navigator } = this.props ;
    if(navigator){
      //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
      navigator.pop();
    }
  }
  _pressWeahter() {
    const {navigator} = this.props;
    if(navigator){
      navigator.push({
        name:'WeatherInfo',
        component:WeatherInfo,
      });
    }
  }

  render() {
    return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text style={styles.texter}>点我跳回去</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._pressWeahter.bind(this)} >
                  <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
                </TouchableOpacity>
            </View>
    );
  }
}

const styles = StyleSheet.create ({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  texter:{
    textAlign: 'center',
    color:'skyblue',
    fontSize:20,
    margin:20
  },
});
