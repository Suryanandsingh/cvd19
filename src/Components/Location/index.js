import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
import Styles from '../../Styles';
import { ACTIVE_COLOR, RECOVERED_COLOR, DECEASED_COLOR, CONFIRM_COLOR } from '../../Utils/constant';

class Location extends Component{
    _arrowView(color, value){
        if(value > 0){
            return(
                <View style={{alignItems:'center'}}>
                    <Icon name="md-arrow-up" size={20} color={color} />
                    <Text style={{fontSize: 14, color: color}}>{value}</Text>
                </View>
            )
        }else{
            return null
        }
    }
    _renderContent(locations){
        return locations.map((location, index)=>{
            if(index === 0){
                return null
            }else{
                return (
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={Styles.locatinContent} key={index}
                        onPress={()=>{
                            location.confirmed==0?null:
                            this.props.navigation.navigate('StateWise', {count: location})
                            }
                        }    
                    >
                        <View style={{width: '70%'}}>
                            <Text style={Styles.locationName}>{location.state}</Text>
                            <View style={{flexDirection:'row'}} >
                                <Text style={[Styles.locationCount, { color: CONFIRM_COLOR }]}>
                                    {`cfm: `}
                                </Text>
                                <Text style={Styles.locationCount}>{location.confirmed}</Text>
                            </View>
                        </View>
                        <Animatable.View 
                            animation="lightSpeedIn"
                            delay={320}
                            easing="ease-in-out-sine"
                            style={[Styles.center, 
                            {flexDirection:'row', width: '30%', justifyContent:'space-around'}]}
                        >
                            {this._arrowView(ACTIVE_COLOR, location.deltaconfirmed)}
                            {this._arrowView(RECOVERED_COLOR, location.deltarecovered)}
                            {this._arrowView(DECEASED_COLOR, location.deltadeaths)}
                        </Animatable.View>
                    </TouchableOpacity>
                )
            }
        })
    }
    render(){
        const { location } = this.props;
        return(
            <Animatable.View animation="fadeInUpBig" delay={150} >
                {
                location && location.length ?
                    this._renderContent(location):null
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