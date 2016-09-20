const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navbar: {
   alignItems: 'center',
   backgroundColor: '#fff',
   borderBottomColor: '#eee',
   borderColor: 'transparent',
   borderWidth: 1,
   justifyContent: 'center',
   height: 44,
   flexDirection: 'row'
 },
 navbarTitle: {
   color: '#444',
   fontSize: 16,
   fontWeight: "500",
 },
 pagetitle: {
   backgroundColor: '#fff',
   height: 22,
 },
})

module.exports = styles
module.exports.constants = constants;
