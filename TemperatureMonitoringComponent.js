import { StyleSheet, Text, ScrollView, FlatList,View, SafeAreaView  } from 'react-native';
import React, { Component } from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {Header} from 'react-native-elements'
import GroupButton from './GroupButtonComponent'
import {connect} from 'react-redux'
import { ButtonGroup } from 'react-native-elements'

class TemperatureMonitoring extends Component{
    constructor(props){
        super(props)
        this.state ={
            selectedIndex: 0,
            buttons : ['Painel 1', 'Painel 2', 'Atualizar'],
        },
        this.updateIndex = this.updateIndex.bind(this)
    }
    
    updateIndex(selectedIndex){
        this.setState({selectedIndex})
    }
    
    showPainelName(){
        if (this.state.selectedIndex < 2){
            return  this.state.buttons[this.state.selectedIndex]
        }else{
            return 'Atualizado'
        }
    }

    showPainel(painel){
        if(painel == 0){
            return (
                <FlatList 
                        data = {[
                            {key: 'Tanque1 1'},
                            {key: 'Tanque1 2'},
                            {key: 'Tanque1 3'},
                            {key: 'Tanque1 4'},
                            {key: 'Tanque1 5'},
                            {key: 'Tanque1 6'},
                            {key: 'Tanque1 7'},
                            {key: 'Tanque1 8'},
                            {key: 'Tanque1 9'},
                            {key: 'Tanque1 10'},
                            {key: 'Tanque1 11'},
                            {key: 'Tanque1 12'},
                            {key: 'Tanque1 13'},
                            {key: 'Tanque1 14'},
                            {key: 'Tanque1 15'},
                            {key: 'Tanque1 16'},
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
            )
        }
        if (painel==1){
                return ( 
                <FlatList 
                    data = {[
                        {key: 'Tanque2 1'},
                        {key: 'Tanque2 2'},
                        {key: 'Tanque2 3'},
                        {key: 'Tanque2 4'},
                        {key: 'Tanque2 5'},
                        {key: 'Tanque2 6'},
                        {key: 'Tanque2 7'},
                        {key: 'Tanque2 8'},
                        {key: 'Tanque2 9'},
                        {key: 'Tanque2 10'},
                        {key: 'Tanque2 11'},
                        {key: 'Tanque2 12'},
                        {key: 'Tanque2 13'},
                        {key: 'Tanque2 14'},
                        {key: 'Tanque2 15'},
                        {key: 'Tanque2 16'},
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
                />)
            }
        }
    render(){
        
        const selectedIndex = this.state.selectedIndex
        return (

            <SafeAreaView style={{flex: 1}}>
                <View style={styles.headerPos}>
                    <Header
                        containerStyle={styles.header} 
                        centerComponent={<ButtonGroup 
                            onPress={this.updateIndex}
                            selectedButtonStyle={styles.selectedButton}
                            selectedIndex={selectedIndex}
                            buttons={this.state.buttons}
                            containerStyle={styles.buttonGroup}
                        />}
                    />
                </View>
            {this.showPainel(this.state.selectedIndex)}
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
        paddingTop: 0,
        paddingRight:5,
        paddingLeft:5
    },
    buttonGroup:{
        height: 40,
        width: 345,
        backgroundColor:'white'
    },
    
    selectedButton:{
        paddingTop:0,
        textAlign:"center",
        fontSize: 23,
        color:'black',
        backgroundColor:'grey'
    },
    selectedA:{
        paddingTop:10
    }

});
const mapStateToProps = (state) =>{
    const { selected } = state    
    return { selected }
}
export default connect(mapStateToProps)(TemperatureMonitoring);
