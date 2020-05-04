import AnimateNumber from '@bankify/react-native-animate-number';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import Styles from '../../Styles';
import { ACTIVE_COLOR, CONFIRM_COLOR, COVIDE_TEXT, DECEASED_COLOR, PURPLE, RECOVERED_COLOR } from '../../Utils/constant';
import DataLoader from '../Loader/dataloader';

const months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
  };


class TotalCount extends Component{
    constructor(props){
        super(props)
        this.state = {
            day: 1,
            month: ''
        }
    }
    componentDidMount(){
        const { lastupdatedtime } = this.props.count;
        this.getDate(lastupdatedtime);
    }
    getDate(lastupdatedtime){
        this.setState({
            day: `${lastupdatedtime}`.slice(0, 2),
            month: months[`${lastupdatedtime}`.slice(3, 5)]
        })
    }
    render(){
        const { 
            active, 
            confirmed, 
            deaths, 
            recovered, 
            deltaconfirmed, 
            deltadeaths, 
            deltarecovered 
        } = this.props.count;
        const { day, month } = this.state;
        const { totalsamplestested, dataLoader, isStateWise } = this.props;
        return(
            <View style={Styles.totalCountContainer} >
                <View style={Styles.confirmCountView}>
                    <View style={[Styles.totalCountView, { width: '20%' }]} >
                        <Text style={[Styles.totalCountText, {color: COVIDE_TEXT}]}>{day}</Text>
                        <Text style={[Styles.totalCountTextSmall, { color: COVIDE_TEXT }]}>{month}</Text>
                    </View>
                    <View style={[Styles.totalCountView, { width: '80%', flexDirection:'row'}]}>
                        <View>
                            <AnimateNumber 
                            value={confirmed} 
                            countBy={2876} 
                            timing="easeOut"
                            renderContent={(displayValue)=>{
                                return <Text style={[Styles.totalCountText, {color: CONFIRM_COLOR}]}>{displayValue}</Text>
                            }}
                            />
                            <Text style={[Styles.totalCountTextSmall, {color: CONFIRM_COLOR}]}>Confirmed</Text>
                            </View>
                        <Text style={[Styles.totalCountTextSmall, {color: CONFIRM_COLOR, marginLeft: 10}]}>
                            {deltaconfirmed?`+${deltaconfirmed}`:null}
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                    <View style={[Styles.countView]}>
                    <Text style={[Styles.totalCountTextSmall, {color: ACTIVE_COLOR}]}>
                            
                    </Text>
                        <AnimateNumber 
                        value={active} 
                        countBy={3456} 
                        timing="easeOut"
                        renderContent={(displayValue)=>{
                            return <Text style={[Styles.totalCountText, {color: ACTIVE_COLOR}]}>{displayValue}</Text>
                        }}
                        />
                        <Text style={[Styles.totalCountTextSmall, {color: ACTIVE_COLOR}]}>Active</Text>
                    </View>
                    <View style={[Styles.countView]}>
                    <Text style={[Styles.totalCountTextSmall, {color: RECOVERED_COLOR}]}>
                        {deltarecovered?`+${deltarecovered}`:null}
                    </Text>
                        <AnimateNumber 
                        value={recovered} 
                        countBy={345} 
                        timing="easeOut"
                        renderContent={(displayValue)=>{
                            return <Text style={[Styles.totalCountText, {color: RECOVERED_COLOR}]}>{displayValue}</Text>
                        }}
                        />
                        <Text style={[Styles.totalCountTextSmall, {color: RECOVERED_COLOR}]}>Recovered</Text>
                    </View>
                    <View style={[Styles.countView]}>
                    <Text style={[Styles.totalCountTextSmall, {color: DECEASED_COLOR}]}>
                        {deltadeaths?`+${deltadeaths}`:null}
                    </Text>
                        <AnimateNumber 
                        value={deaths} 
                        countBy={123} 
                        timing="easeOut"
                        renderContent={(displayValue)=>{
                            return <Text style={[Styles.totalCountText, {color: DECEASED_COLOR}]}>{displayValue}</Text>
                        }}
                        />
                        <Text style={[Styles.totalCountTextSmall, {color: DECEASED_COLOR}]}>Deceased</Text>
                    </View>
                    {
                        dataLoader === false && !dataLoader?
                        <TouchableOpacity 
                            activeOpacity={0.8}
                            style={[Styles.countView]}
                            onPress={()=>{
                                this.props.navigation.navigate('Tested', {isStateWise: isStateWise})
                            }}
                        >
                            <Text style={[Styles.totalCountTextSmall, {color: PURPLE}]}>Tested</Text>
                            <AnimateNumber 
                            value={`${totalsamplestested?totalsamplestested:'Pending'}`} 
                            countBy={`${totalsamplestested?56789:''}`} 
                            timing="easeOut"
                            renderContent={(displayValue)=>{
                                return <Text style={[Styles.totalCountText, {color: PURPLE}]}>
                                    {!displayValue?'Pending':displayValue}
                                </Text>
                            }}
                            />
                            <Text style={[Styles.totalCountTextSmall, {color: PURPLE}]}>{`View all >`}</Text>
                        </TouchableOpacity>:
                        <View style={[Styles.countView]}>
                            <DataLoader active={dataLoader} size="small" color={PURPLE}/>
                        </View>
                    }
                    
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        dataLoader: state.Loader.dataLoader,
    }
}

export default connect(mapStateToProps, null)(TotalCount);