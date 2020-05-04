import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import Styles from '../../Styles';

class PatientModal extends Component{
    _textView(key, value){
        const { _setColorGender, patientInfo } = this.props;
        return(
            <View style={{flexDirection:'row', marginVertical: 2}}>
                <Text style={Styles.testTextKey}>{`${key}:`}</Text>
                <Text style={[Styles.testTextValue, { marginLeft: 5, color:  _setColorGender(patientInfo.gender).color }]}>{value}</Text>
            </View>
        )
    }
    render(){
        const { isOpenModel, _toggleModelView, patientInfo, _setColorGender } = this.props;
        return(
            <Modal
                visible={isOpenModel}
                transparent={true}
                onRequestClose={()=>{_toggleModelView(false)}}
                animationType='slide'
            >
                <View
                    style={Styles.modalContainer}
                >
                    <View style={[Styles.modalHeader, { backgroundColor:  _setColorGender(patientInfo.gender).light}]}>
                        <Text style={[Styles.headerText, { color: _setColorGender(patientInfo.gender).color }]}>{`P${patientInfo.patientnumber}`}</Text>
                        <TouchableOpacity 
                            style={{padding: 7}}
                            activeOpacity={0.5}
                            onPress={()=>_toggleModelView(false)}
                        >
                            <Text style={Styles.modalClose}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{padding: 10}} >
                        {this._textView('Date Announced', patientInfo.dateannounced ? patientInfo.dateannounced : '?')}
                        {this._textView('Detected State', patientInfo.detectedstate ? patientInfo.detectedstate : '?')}
                        {this._textView('State Patient Number', patientInfo.statepatientnumber ? patientInfo.statepatientnumber : '?')}
                        {this._textView('Contracted from', patientInfo.contractedfromwhichpatientsuspected ? patientInfo.contractedfromwhichpatientsuspected : '?')}
                        {this._textView('Nationality', patientInfo.nationality ? patientInfo.nationality : '?')}
                        {this._textView('Type of transmission', patientInfo.typeoftransmission ? patientInfo.typeoftransmission : '?')}
                        {this._textView('Detected City', patientInfo.detectedcity ? patientInfo.detectedcity : '?')}
                        {this._textView('Detected District', patientInfo.detecteddistrict ? patientInfo.detecteddistrict : '?')}
                        {this._textView('Age', patientInfo.agebracket ? patientInfo.agebracket : '?')}
                        {this._textView('Gender', patientInfo.gender ? patientInfo.gender : '?')}
                        {this._textView('Notes', patientInfo.notes)}
                    </View>
                </View>
            </Modal>
        )
    }
}

export default PatientModal;