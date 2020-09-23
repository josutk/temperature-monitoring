import { StyleSheet, Text, ScrollView, FlatList,View  } from 'react-native';
import React, { Component } from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { ButtonGroup } from 'react-native-elements'
import {connect} from 'react-redux';
import {change_select_painel}from './actions/groupButtonAction';
import {bindActionCreators} from 'redux'
class GroupButton extends Component{
    
    constructor(props){
        super(props)
        this.state ={
            selectedIndex: 1,
            buttons : ['Painel 1', 'Painel 2', 'Atualizar'],
        },
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex){
        this.setState({selectedIndex})
        this.props.change_select_painel(this.state.selectedIndex)
        console.log('updated',this.props)
    }
    
    showPainelName(){
        if (this.state.selectedIndex < 2){
            return  this.state.buttons[this.state.selectedIndex]
        }else{
            return 'Atualizado'
        }
    }
    
    render(){
        const selectedIndex = this.state.selectedIndex
        console.log(selectedIndex)
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

const mapStateToProps = (state) =>{
    const selected = state    
    return selected
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      change_select_painel,
    }, dispatch)
  );
export default connect(mapStateToProps, mapDispatchToProps)(GroupButton);
