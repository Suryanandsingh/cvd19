import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from '../../Styles';
import { filterByObject } from '../../Utils/custom';



class ZoneName extends Component{
    constructor(props){
        super(props)
        this.state = {
            zones: this.props.zones
        }
    }
    componentDidMount(){
        this.setState({
            zones: filterByObject(this.props.zones, this.props.filters)
        })
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        if(this.props !== nextProps){
            this.setState({
                zones: filterByObject(nextProps.zones, nextProps.filters)
            })
        }
    }
    _selectColor(zone){
        if(zone === 'Red'){
            return 'Red'
        }else if(zone === 'Green'){
            return 'Green'
        }else{
            return 'Orange'
        }
    }
    render(){
        const { zoneColor } = this.props;
        const { zones } = this.state;
        if(zones && zones.length>0){
            return zones.map((zone, index)=>{
                return(
                    <View key={index} style={[Styles.zoneView, {
                        backgroundColor: zoneColor[this._selectColor(zone.zone)].light
                    }]}>
                        <Text style={
                            {
                                color: zoneColor[this._selectColor(zone.zone)].color,
                                fontSize: 12,
                                fontWeight:'bold',
                                textAlign:'center',
                                letterSpacing: 1
                            }
                        } 
                        >
                            {zone.district}
                        </Text>
                        <Text style={
                            {
                                color: zoneColor[this._selectColor(zone.zone)].color,
                                fontSize: 10,
                                textAlign:'center',
                                fontWeight:'600',
                                letterSpacing: 1
                            }
                        } 
                        >
                            {zone.lastupdated}
                        </Text>
                        <Text style={
                            {
                                color: zoneColor[this._selectColor(zone.zone)].color,
                                fontSize: 9,
                                textAlign:'center',
                                fontWeight:'500',
                                letterSpacing: 1
                            }
                        } 
                        >
                            {`(last updated)`}
                        </Text>
                    </View>
                )
            })
        }else{
            if(zones.length == 0){
                return(
                    <View style={{marginTop: 20}}>
                        <Text style={[Styles.slogan_text, {  
                            fontSize: 16, letterSpacing: 1, color: zoneColor[this._selectColor(this.props.filters.zone)].color
                        }]}>{`stay home stay safe`.toUpperCase()}</Text>
                    </View>
                )
            }else{
                return null
            }
        }
    }
}

export default ZoneName;