import React, { Component } from 'react';
import { SafeAreaView, View, Text, Image, Dimensions, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from '../../Styles';
import { COVIDE_LOGO, RECOVERED_COLOR } from '../../Utils/constant';

const { width } = Dimensions.get('window');

class Splash extends Component{
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('Dashboard')
        }, 2000)
    }
    render(){
        return(
            <SafeAreaView style={Styles.center}>
                <StatusBar backgroundColor={"transparent"} barStyle="dark-content"/> 
                <View>
                    <Icon name="home-heart" size={width/2} color={RECOVERED_COLOR} />
                </View>
                <View style={Styles.slogan_view}>
                    <Text 
                        style={Styles.slogan_text}>
                        {`stay home`.toUpperCase()}
                    </Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default Splash;