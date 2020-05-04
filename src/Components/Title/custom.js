import React from 'react';
import { View, Text } from 'react-native'
import Styles from '../../Styles'
import { COVIDE_TEXT } from '../../Utils/constant';

function Title(props){
    return(
        <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
            <Text style={[Styles.headerText, {color: COVIDE_TEXT}]}>{props.title}</Text>
        </View>
    )
}

export default Title;