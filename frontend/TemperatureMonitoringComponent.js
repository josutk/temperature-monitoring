import { StyleSheet, Text, ScrollView, FlatList,View, SafeAreaView, Dimensions  } from 'react-native';
import React, { Component } from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {Header} from 'react-native-elements'
import {connect} from 'react-redux'
import { ButtonGroup } from 'react-native-elements'
import  axios  from 'axios'

class TemperatureMonitoring extends Component{
    constructor(props){
        super(props)
        this.state ={
            selectedIndex: 0,
            buttons : ['Painel 1', 'Painel 2', 'Atualizar'],
            list : [0]
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
    getSensorsValues(){
        axios.get('http://192.168.1.4:8000/api/values/').then(response => {
          this.setState({list: response.data})
          console.log(response.data)
        }).catch(error => console.log(error));
    }
    

    showPainel(painel){
        if(painel == 0){
            this.getSensorsValues()
            return (
                <FlatList 
                        data = {[
                            {key: 'Painel 1 Tanque 1'},
                            {key: 'Painel 1 Tanque 2'},
                            {key: 'Painel 1 Tanque 3'},
                            {key: 'Painel 1 Tanque 4'},
                            {key: 'Painel 1 Tanque 5'},
                            {key: 'Painel 1 Tanque 6'},
                            {key: 'Painel 1 Tanque 7'},
                            {key: 'Painel 1 Tanque 8'},
                            {key: 'Painel 1 Tanque 9'},
                            {key: 'Painel 1 Tanque 10'},
                            {key: 'Painel 1 Tanque 11'},
                            {key: 'Painel 1 Tanque 12'},
                            {key: 'Painel 1 Tanque 13'},
                            {key: 'Painel 1 Tanque 14'},
                            {key: 'Painel 1 Tanque 15'},
                            {key: 'Painel 1 Tanque 16'},
                        ]}
                        renderItem={({item}) => 
                            <Card style={styles.card}>
                                <Text style={styles.lineTop}>____________________</Text>
                                <Text style={styles.cardTitle}>
                                    {item.key}
                                </Text>
                                <CardContent > 
                                    <Text style={styles.cardText}> 
                                        {this.state.list[0]} °c
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
                        {key: 'Painel 2 Tanque 1'},
                        {key: 'Painel 2 Tanque 2'},
                        {key: 'Painel 2 Tanque 3'},
                        {key: 'Painel 2 Tanque 4'},
                        {key: 'Painel 2 Tanque 5'},
                        {key: 'Painel 2 Tanque 6'},
                        {key: 'Painel 2 Tanque 7'},
                        {key: 'Painel 2 Tanque 8'},
                        {key: 'Painel 2 Tanque 9'},
                        {key: 'Painel 2 Tanque 10'},
                        {key: 'Painel 2 Tanque 11'},
                        {key: 'Painel 2 Tanque 12'},
                        {key: 'Painel 2 Tanque 13'},
                        {key: 'Painel 2 Tanque 14'},
                        {key: 'Painel 2 Tanque 15'},
                        {key: 'Painel 2 Tanque 16'},
                    ]}
                    renderItem={({item}) => 
                        <Card style={styles.card}>
                                <Text style={styles.lineTop}>____________________</Text>
                                <Text style={styles.cardTitle}>
                                    {item.key}
                                </Text>
                            <CardContent > 
                                <Text style={styles.cardText}> 
                                    27 °C
                                </Text>
                            </CardContent>
                        </Card>
                    }
                />)
            }if(painel == 2){
                return (
                    <View style={styles.position}>
                    <View style={styles.colorBack}>
                    </View>
                    </View>
                )
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
        color: 'white',
        fontFamily: 'digital-7', 
        textAlign:'center',
        paddingTop:10
    },
    card:{
        backgroundColor: 'darkturquoise',
        borderStyle:"dotted"
    },
    header:{
       backgroundColor:'darkturquoise',
        paddingRight:15,
        paddingLeft:15,
        height: 120
    },
    headerPos:{
        paddingTop: 30,
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
        backgroundColor:'cadetblue'
    },
    cardTitle:{
        color:'white',
        fontSize:23,
        textAlign: "center",
        paddingLeft:75,
        paddingTop:5
    },
    lineTop:{
        paddingLeft:110
    },
    colorBack:{
        backgroundColor:'darkturquoise',
        height: '100%',
        width: '100%'
    },
    position:{
        paddingTop:5,
        paddingLeft:5,
        paddingRight:5,
        paddingBottom: 155
    }
});
const mapStateToProps = (state) =>{
    const { selected } = state    
    return { selected }
}
export default connect(mapStateToProps)(TemperatureMonitoring);
