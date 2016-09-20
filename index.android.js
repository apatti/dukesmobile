/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = require('./styles.js');
const PageTitle = require('./components/PageTitle');

const firebaseconfig = {
  apiKey: "AIzaSyAgBrZXDmefLSD9jwIFJTdQJ3mI03pc368",
  authDomain: "radiant-fire-3138.firebaseapp.com",
  databaseURL: "https://radiant-fire-3138.firebaseio.com",
  storageBucket: "radiant-fire-3138.appspot.com",
  messagingSenderId: "281856077896"
};

const firebaseApp = firebase.initializeApp(firebaseconfig);

class DukesApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PageTitle title="Dukes XI - Home" />
      </View>
    );
  }
}


AppRegistry.registerComponent('DukesApp', () => DukesApp);
