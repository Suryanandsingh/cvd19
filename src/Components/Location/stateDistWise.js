import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons'
import Styles from '../../Styles';
import { ACTIVE_COLOR, RECOVERED_COLOR, DECEASED_COLOR, CONFIRM_COLOR } from '../../Utils/constant';

class Location extends Component{
    _arrowView(color, value){
        if(value>0){
            return(
                <View style={{alignItems:'center'}}>
                    <Icon name="md-arrow-up" size={20} color={color} />
                    <Text style={{fontSize: 14, color: color}}>
                        {value}
                    </Text>
                </View>
            )
        }else{
            return null
        }
    }
    _renderContent(location, locationObj){
        return locationObj.map((dist, index)=>{
            return(
                <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={Styles.locatinContent} key={index}   
                >
                    <View style={{width: '70%'}}>
                        <Text style={Styles.locationName}>
                            {dist}
                        </Text>
                        <View style={{flexDirection:'row'}} >
                            <View style={{flexDirection:'row'}} >
                                <Text style={[Styles.locationCount, { color: CONFIRM_COLOR }]}>
                                    {`cfm: `}
                                </Text>
                                <Text style={Styles.locationCount}>
                                    {location[dist].confirmed}
                                </Text>
                            </View>
                            <View style={{flexDirection:'row', marginLeft: 10}} >
                                <Text style={[Styles.locationCount, { color: ACTIVE_COLOR }]}>
                                    {`act: `}
                                </Text>
                                <Text style={Styles.locationCount}>
                                    {location[dist].active}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Animatable.View 
                        animation="lightSpeedIn"
                        delay={280}
                        easing="ease-in-out-sine"
                        style={[Styles.center, 
                        {flexDirection:'row', width: '30%', justifyContent:'space-around'}]}
                    >
                        {this._arrowView(ACTIVE_COLOR, location[dist].delta.confirmed)}
                        {this._arrowView(RECOVERED_COLOR, location[dist].delta.recovered)}
                        {this._arrowView(DECEASED_COLOR, location[dist].delta.deceased)}
                    </Animatable.View>
                </TouchableOpacity>
            )
        })
    }
    render(){
        const { location, locationObj } = this.props;
        return(
            <Animatable.View animation="fadeInUpBig">
                {
                locationObj &&locationObj.length>0?
                    this._renderContent(location, locationObj):null
                }
            </Animatable.View>
        )
    }
}
const mapStateToProps = (state) => {
    return{

    }
}

export default connect(mapStateToProps, null)(Location);