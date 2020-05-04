import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import HomeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PrayIcon from 'react-native-vector-icons/FontAwesome5';
import FaceMaskIcon from '../../Assests/facemask.jpg';
import Styles from '../../Styles';
import { COVID_COLOR } from '../../Utils/constant';

const { width } = Dimensions.get('window')

class Footer extends Component{
    render(){
        return(
            <View style={Styles.footerContainer} >
                <View style={Styles.footerIconView}>
                    <PrayIcon style={{marginHorizontal: 15}} name="praying-hands" size={width/5.5} color={COVID_COLOR}/>
                    <HomeIcon style={{marginHorizontal: 15}} name="home-account" size={width/4.5} color={COVID_COLOR}/>
                </View>
                <View style={Styles.footerTextView}>
                    <Text style={Styles.footer_slogan_text} >{`Keep distance`.toUpperCase()}</Text>
                    <Text style={Styles.footer_slogan_text}>{`Stay home`.toUpperCase()}</Text>
                    <Text style={Styles.footer_slogan_text}>{`Stay safe`.toUpperCase()}</Text>
                </View>
            </View>
        )
    }
}

export default Footer;
