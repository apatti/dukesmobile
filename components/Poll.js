'use strict';
import React,{Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js');
const {StyleSheet,Text,View,Picker} = ReactNative;

class Poll extends Component{
  state = {
    polls:[],
    poll_index:0
  };
  componentDidMount=function(){
        this.fetchPolls();
      };

  fetchPolls = function(){

  };

  render(){
    return(
      <View style={styles.pollContainer}>
        <Text style={styles.instructions}>
          {this.props.pollQuestion}
        </Text>
        //<Picker style={styles.pollPicker} onValueChange = {}
      </View>
    );
  }
}
