import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetStarted from './src/component/GetStarted';
import Home from './src/component/Home';
import Login from './src/component/Login';
import Register from './src/component/Register';
import Navigator from './src/Navigator';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <GetStarted/> */}
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      <Navigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
