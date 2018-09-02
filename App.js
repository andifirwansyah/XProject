import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import LoginScreen from './src/Screen/LoginScreen';
import { MyRoute } from './src/config/Route';
export default class App extends React.Component {
  render() {
    return (
      <MyRoute/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
