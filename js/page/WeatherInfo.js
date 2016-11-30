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

export default class SecondPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mData:[],
    } ;
  }
  _pressButton() {
    const { navigator } = this.props ;
    if(navigator){
      //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
      navigator.pop();
    }
  }
  /**
   * {
      date: "2016-11-30",
      week: "3",
      dayweather: "阴",
      nightweather: "多云",
      daytemp: "13",
      nighttemp: "6",
      daywind: "西",
      nightwind: "西北",
      daypower: "4",
      nightpower: "≤3"
      },
   */
  _fetchData(){
    var url = 'http://poe.leanapp.cn/getWeather?type=base' ;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        let forecasts = responseData.lives;
        var datas = [];

        for(let i in forecasts){
          let cast = {
            // date: forecasts[i].date,
            // week: forecasts[i].week,
            // dayweather: forecasts[i].dayweather,
            // nightweather: forecasts[i].nightweather,
            // daytemp: forecasts[i].daytemp,
            // nighttemp: forecasts[i].nighttemp,
            // daywind: forecasts[i].daywind,
            // nightwind: forecasts[i].nightwind,
            // daypower: forecasts[i].daypower,
            // nightpower: forecasts[i].nightpower
            province: forecasts[i].province,
            city: forecasts[i].city,
            adcode: forecasts[i].adcode,
            weather: forecasts[i].weather,
            temperature: forecasts[i].temperature,
            winddirection: forecasts[i].winddirection,
            windpower: forecasts[i].windpower,
            humidity: forecasts[i].humidity,
            reporttime: forecasts[i].reporttime,
          }
          datas.push(cast);
        }

        if(datas.length !== 0){
          this.setState({
            mData : datas
          });
        }
      }).done();
  }

  render() {
    var cast = this.state.mData[0];
    var temperature = '';
    var weather = '';
    var wind = '';//风向
    var windPower = '';//风力等级
    var title = '';
    if(cast){
      temperature = cast.temperature + "°";
      weather =　cast.weather;
      wind = cast.winddirection +'风　'　;
      windPower = cast.windpower+ " 级　"
      title = cast.reporttime+cast.province+cast.city ;
    }

    return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text style={styles.texter}>{title}</Text>
                </TouchableOpacity>
                <Text style={styles.texter}>{temperature} {weather}</Text>
                <Text style={styles.texter}> {wind}{windPower} </Text>
            </View>
    );
  }

  componentDidMount(){
    this._fetchData();
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
