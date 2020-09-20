import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  TemperatureMonitoring  from './TemperatureMonitoringComponent'
import { render } from 'react-dom';

export default class App extends Component {
  
  render(){
    return (
      //<Text>asdasd </Text>  
      <TemperatureMonitoring > </ TemperatureMonitoring>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
