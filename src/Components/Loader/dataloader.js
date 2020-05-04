import React, { Component } from 'react'
import {
    ActivityIndicator
} from 'react-native'

export default class DataLoader extends Component {
    render() {
        const { active, size, color } = this.props;
        if(active){
            return(
                <ActivityIndicator 
                    animating 
                    style={{alignItems:'center'}} 
                    size={size} 
                    color={color} 
                /> 
            )
        }else{
            return null;
        }
    }
}
