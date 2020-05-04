import React, { Component, Suspense } from 'react';
import { View, Text } from 'react-native';
import { TEXT_COLOR, COVID_COLOR, CONFIRM_COLOR, ACTIVE_COLOR, DECEASED_COLOR, COVIDE_TEXT } from '../../Utils/constant';
import Octicons from 'react-native-vector-icons/Octicons';
import { filterByObject } from '../../Utils/custom';

const Patients = React.lazy(()=>import('./patients'));


class PatientsView extends Component{
    constructor(props){
        super(props)
        this.state = {
            pateints: []
        }
    }
    componentDidMount(){
        const { filter, demographics } = this.props;
            this.setState({
                pateints: filterByObject(demographics, filter)
            })
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        if(this.props !== nextProps){
            const { filter, demographics } = nextProps;
            this.setState({
                pateints: filterByObject(demographics, filter)
            })
        }
    }
    _previewGender(color, value){
        return(
            <View style={{flexDirection:'row', marginHorizontal: 2}} >
                <Octicons name="primitive-dot" size={20} color={color}/>
                <Text style={{fontSize: 14, fontWeight: '500', marginHorizontal: 1, color: color}} >{value}</Text>
            </View>
        )
    }
    title(){
        return(
            <>
                <Text style={{fontSize: 18, fontWeight: '500', letterSpacing: 1, color: TEXT_COLOR}} >
                    Patients
                </Text>
                <View
                    style={{
                        borderBottomColor: TEXT_COLOR,
                        borderBottomWidth: 0.6,
                    }}
                    />
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'flex-end'}} >
                    {this._previewGender(CONFIRM_COLOR, 'Female')}
                    {this._previewGender(ACTIVE_COLOR, 'Male')}
                    {this._previewGender(DECEASED_COLOR, 'Unknown')}
                </View>
            </>
        )
    }
    render(){
        const { pateints } = this.state;
        const { filter } = this.props;
        if(pateints.length>0){
            return(
                <View style={{padding: 15}} >
                    {this.title()}
                    <Suspense fallback={
                        <Text style={{fontSize: 19, letterSpacing: 1, color: COVID_COLOR}} >
                            Loading...
                        </Text>} 
                    >
                        <Patients patients={pateints} {...this.props} />
                    </Suspense>
                </View>
            )
        }else{
            return(
                <View style={{ marginVertical: 150 , flexDirection:'row', justifyContent:'center'}} >
                    <Text style={{color: COVID_COLOR}} >
                        No new cases on 
                    </Text>
                    <Text style={{color: COVIDE_TEXT, marginLeft: 3}} >
                        {filter.dateannounced} 
                    </Text>
                </View>
            )
        }
    }
}

export default PatientsView;