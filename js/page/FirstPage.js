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
    this.state = {
      mData:[]
    };
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
  //load data ．　
  componentDidMount(){
    this._fetchData();
  }

  render() {
      var date = '2016-12-01';
      var temp = '10';
      var wind = '东　３级';
      if(this.state.mData.length !== 0){
          let cast = this.state.mData[0];
          date = cast.date;
          temp = '白天: '+cast.dayweather+cast.daytemp +"°";
          wind =  cast.daywind+'风'+' '+cast.daypower+'级';
      }
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
            <Text style={styles.texter}>{date} </Text>
            <Text style={styles.texter}>{temp}</Text>
            <Text style={styles.texter}>{wind} </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
            <Text style={styles.texter}>Weather [Suzhou JiangSu]  ! </Text>
          </ScrollView>
      );
  }

  _fetchData() {
    var url ="http://poe.leanapp.cn/getWeather?type=all"
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        let forecasts = responseData.forecasts;
        if(forecasts.length !== 0){
          let object = forecasts[0];
          let data = object.casts;
          var casts = [];
          for(let i in data){
            let cast = {
              date: data[i].date,
              week: data[i].week,
              dayweather: data[i].dayweather,
              nightweather: data[i].nightweather,
              daytemp: data[i].daytemp,
              nighttemp: data[i].nighttemp,
              daywind: data[i].daywind,
              nightwind: data[i].nightwind,
              daypower: data[i].daypower,
              nightpower: data[i].nightpower
            }
            casts.push(cast);
          }

          if(casts.length !== 0 ){
            this.setState({
              mData: casts
            });
          }
        }
      }).done();
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
