import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from '../../Styles';
import { CONFIRM_COLOR_LIGHT, CONFIRM_COLOR, ACTIVE_COLOR_LIGHT, ACTIVE_COLOR, DECEASED_COLOR_LIGHT, DECEASED_COLOR } from '../../Utils/constant';
import PatientModal from './patientsModel';


class PatientsView extends Component{
    constructor(props){
        super(props)
        this.state = {
            patientInfo: {},
            isOpenModel: false
        }
    }
    componentDidMount(){
        
    }
    _toggleModelView(result){
        this.setState({
            isOpenModel: result
        })
    }
    _setColorGender(gender){
        if(gender == 'F'){
            return {
                "light": CONFIRM_COLOR_LIGHT,
                "color": CONFIRM_COLOR
            }
        }else if(gender == 'M'){
            return {
                "light": ACTIVE_COLOR_LIGHT,
                "color": ACTIVE_COLOR
            }
        }else{
            return {
                "light": DECEASED_COLOR_LIGHT,
                "color": DECEASED_COLOR
            }
        }
    }
    _renderContent(patients){
        return patients.map((patient, index)=>{
            return(
                <TouchableOpacity 
                    activeOpacity={0.6}
                    key={index} 
                    onPress={()=>{
                        this.setState({patientInfo: patient}, ()=>{
                            this._toggleModelView(true)
                        })
                    }}
                    style={[Styles.patientContainer, {backgroundColor: this._setColorGender(patient.gender).light}]} 
                >
                    <Text style={[Styles.patientNumber, { color: this._setColorGender(patient.gender).color }]}>{`P${patient.patientnumber}`}</Text>
                </TouchableOpacity>
            )
        })
    }
    render(){
        const { patients } = this.props;
        const { patientInfo, isOpenModel } = this.state;
        return(
            <View style={{flexDirection:'row', flexWrap: 'wrap', justifyContent: 'space-around'}} >
                {
                    patients?
                    this._renderContent(patients):null
                } 
                {
                    isOpenModel?
                    <PatientModal
                        isOpenModel={isOpenModel}
                        patientInfo={patientInfo}
                        _toggleModelView={this._toggleModelView.bind(this)}
                        _setColorGender={this._setColorGender.bind(this)}
                        {...this.props}
                    />:null
                }
            </View>
        )
    }
}

export default PatientsView;