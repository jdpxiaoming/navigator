/**
 * 自定义Button
 * created by poe 20161128
 */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet ,
  Touch,
  TouchableHighlight
} from 'react-native';

export default class Button extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
}


var styles = StyleSheet.create({
  button:{
    margin:10,
    textAlign: 'center'
  }
});
