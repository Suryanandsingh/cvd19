import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions
} from 'react-native'
import { COVIDE_TEXT } from '../../Utils/constant';
import Styles from '../../Styles';

const HEIGHT = Dimensions.get('window').height

export default class Loader extends Component {
    render() {
        const { height, active } = this.props;
        if(active){
            return(
                <View style={[Styles.center, { marginTop: height}]} >
                    <Text style={Styles.loaderText} >Loading...</Text>
                </View>
            )
        }else{
            return null;
        }
    }
}
