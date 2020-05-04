import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
import Styles from '../../Styles';
import { COVIDE_TEXT } from '../../Utils/constant';
import Menu from '../../Assests/images/menu.png';

class Header extends Component{
    render(){
        const { title1, title2 } = this.props;
        return(
            <View style={Styles.headerContainer}>
                <View style={{flexDirection: 'row'}} >
                    <TouchableOpacity
                        style={Styles.headerSearchView}
                        activeOpacity={0.6}
                        onPress={()=>{this.props.navigation.openDrawer()}}
                    >
                        <Image source={Menu} style={{width:17, height: 17, resizeMode:"contain"}} />
                    </TouchableOpacity>
                    <View style={Styles.headerTextView}>
                        <Text style={Styles.headerText}>{title1}</Text>
                        <Text 
                            style={[Styles.headerText, {color: COVIDE_TEXT}]}>
                            {title2}
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}} >
                    {/* <TouchableOpacity 
                        style={Styles.headerSearchView}
                        activeOpacity={0.6}
                        onPress={()=>{this.props.toggleSearchView(true)}}
                    >
                        <Icon name="ios-search" size={20} />
                    </TouchableOpacity> */}
                        <TouchableOpacity 
                            style={Styles.headerSearchView}
                            activeOpacity={0.6}
                            onPress={()=>{this.props.navigation.navigate('Notification')}}
                        >
                            <Animatable.View animation="swing" delay={1000} easing="ease-in-sine" >
                                <Icon name="ios-notifications-outline" size={20}/>
                            </Animatable.View>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Header;