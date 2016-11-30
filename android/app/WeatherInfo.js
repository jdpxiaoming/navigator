/**
 * 获取苏州当前的天气预报
 * https://poe.leanapp.cn/getWeather?type=base
 * created by poe 2016-11-25
 */
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ToastAndroid
} from 'react-native';
import SecondPage from './SecondPage';

const onButtonPress = () => {
  ToastAndroid.show('你点击了我了~好疼！', ToastAndroid.LONG);
};

export default class WeahterInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      refreshing: true,
      mData: []
    };
  }

  _pressButton(){
    const {navigator} = this.props;
    if(navigator){
      navigator.pop();
    }
  }

  render () {
    let display ='12' ;
    let weather = '';
    let humidity = '0';
    let winddirection = '东';
    if(this.state.mData.length !== 0){
      display = this.state.mData[0].temperature;
      weather = this.state.mData[0].weather;
      humidity = this.state.mData[0].humidity;
      this.winddirection  = this.state.mData[0].winddirection;
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text style={styles.weahterText}> 今日天气　{weather} 　</Text>
          <Text style={styles.weahterText}> 今日温度　{display} °　</Text>
          <Text style={styles.weahterText}> 空气湿度　{humidity} 　</Text>
          <Text style={styles.weahterText}> 今日风向　{winddirection} 　</Text>
        </TouchableOpacity>
      </View>
    );
  }

  componentDidMount(){
    this._fetchData();
  }
  _fetchData(){
    var url ="http://poe.leanapp.cn/getWeather?type=base";
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        let data = responseData.lives;
        var dataLives = [];
        for(let i in data){
          let info =　{
            province: data[i].province,//"江苏",
            city: data[i].city,
            adcode: data[i].adcode,
            weather: data[i].weather,
            temperature: data[i].temperature,
            winddirection: data[i].winddirection,
            windpower: data[i].windpower,
            humidity: data[i].humidity,
            reporttime: data[i].reporttime
          }
          dataLives.push(info);
        }
        if(dataLives.length !== 0){
          this.setState({
            refreshing: true ,
            mData: dataLives
          });
        }
      }).done();
  }
}



const styles = StyleSheet.create ({
  container:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#333333',
    justifyContent:'center'
  },
  weahterText:{
    textAlign:'center',
    fontSize:20,
    color:'#f0f012',
    padding:10
  }
});
