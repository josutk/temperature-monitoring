import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  TemperatureMonitoring  from './TemperatureMonitoringComponent'
import { render } from 'react-dom';
import * as Font from "expo-font";

export default class App extends Component {
  state = {
    fontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'digital-7': require('./assets/fonts/digital-7.regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render(){
    if(this.state.fontLoaded){
         return (
          <TemperatureMonitoring > </ TemperatureMonitoring>
        );
    }else{
      return null
    }
  };
};
