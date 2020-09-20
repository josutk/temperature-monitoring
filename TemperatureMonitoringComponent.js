import { StyleSheet, Text, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

 export default class TemperatureMonitoring extends Component{


    render(){
        return (
            <ScrollView>
 
             <Card>
   <CardImage 
       source={{uri: 'http://bit.ly/2GfzooV'}} 
     title="Top 10 South African beaches"
   />
   <CardTitle
     subtitle="Number 6"
   />
   <CardContent text="Clifton, Western Cape" />
   <CardAction 
     separator={true} 
     inColumn={false}>
     <CardButton
       onPress={() => {}}
       title="Share"
       color="#FEB557"
     />
     <CardButton
       onPress={() => {}}
       title="Explore"
       color="#FEB557"
     />
   </CardAction>
 </Card>

</ScrollView>           
        )
    }
}