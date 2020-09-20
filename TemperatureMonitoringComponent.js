import { StyleSheet, Text, ScrollView, FlatList,View, SafeAreaView  } from 'react-native';
import React, { Component } from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {Header} from 'react-native-elements'
import GroupButton from './GroupButtonComponent'

export default class TemperatureMonitoring extends Component{;

    render(){
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.headerPos}>
                    <Header
                        containerStyle={styles.header} 
                        centerComponent={<GroupButton />}
                    />
                </View>
                    <FlatList 
                        data = {[
                            {key: 'Tanque 1'},
                            {key: 'Tanque 2'},
                            {key: 'Tanque 3'},
                            {key: 'Tanque 4'},
                            {key: 'Tanque 5'},
                            {key: 'Tanque 6'},
                            {key: 'Tanque 7'},
                            {key: 'Tanque 8'},
                            {key: 'Tanque 9'},
                            {key: 'Tanque 10'},
                            {key: 'Tanque 11'},
                            {key: 'Tanque 12'},
                            {key: 'Tanque 13'},
                            {key: 'Tanque 14'},
                            {key: 'Tanque 15'},
                            {key: 'Tanque 16'},
                        ]}
                        renderItem={({item}) => 
                            <Card style={styles.card}>
                                <CardTitle
                                    style={styles.cardText}  
                                    title={item.key}
                                />
                                <CardContent > 
                                    <Text style={styles.cardText}> 
                                        27 °C
                                    </Text>
                                </CardContent>
                            </Card>
                        }
                    />
            </ SafeAreaView>
        )
    }
};
const styles = StyleSheet.create({
    cardText: {
        fontSize:45,
        color: 'green',
        fontFamily: 'digital-7', 
        textAlign:'center'
    },
    card:{
        backgroundColor: 'gainsboro',
    },
    header:{
       backgroundColor:'gainsboro',
        paddingRight:15,
        paddingLeft:15,
        height: 170
    },
    headerPos:{
        paddingTop: 30,
        paddingRight:5,
        paddingLeft:5
    }
});
  