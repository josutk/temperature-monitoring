import { StyleSheet, Text, ScrollView, FlatList,View  } from 'react-native';
import React, { Component } from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {ButtonGroup} from 'react-native-elements'

export default class GroupButton extends Component{
    
    constructor(){
        super()
        this.state ={
            selectedIndex: 1,
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
    
    render(){
        const {selectedIndex} = this.setState

        return(
            <View>
                <Text style={styles.selectedButton}>
                    {this.showPainelName()}
                </Text>
                <ButtonGroup 
                    onPress={this.updateIndex}
                    selectedButtonStyle={styles.selectedButton}
                    selectedIndex={selectedIndex}
                    buttons={this.state.buttons}
                    containerStyle={styles.buttonGroup}
                />
           </View>
        ); 
    };
}

const styles = StyleSheet.create({
   buttonGroup:{
        height: 40,
        width: 345,
        backgroundColor:'white'
    },
    
    selectedButton:{
        paddingBottom:15,
        textAlign:"center",
        fontSize: 23
    }

});
  