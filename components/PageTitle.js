'use strict';
import React,{Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js');
const {StyleSheet,Text,View} = ReactNative;

class PageTitle extends Component{
  render(){
    return (
      <View>
        <View style={styles.pagetitle} />
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>{this.props.title} </Text>
        </View>
      </View>
    );
  }
}

module.exports = PageTitle;
