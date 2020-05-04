import React,  { Component } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Styles from '../../Styles';
import { dateTimeFormat } from '../../Utils/custom';
import { COVID_COLOR, COVIDE_TEXT } from '../../Utils/constant';

class TestCard extends Component{
    _renderText(key, value){
        return(
            <View style={{flexDirection:'row', marginVertical: 2}} >
                <Text style={Styles.testTextKey}>{`${key}: `}</Text>
                <Text style={[Styles.testTextValue, value?'':{fontSize: 13, color: COVID_COLOR, fontWeight: '400'}]}>
                    {value?value:'Not updated'}
                </Text>
            </View>
        )
    }
    _renderLongText(key, value){
        return(
            <Text style={{flexDirection:'row', marginVertical: 2, alignItems: 'baseline'}}>
                <Text style={Styles.testTextKey}>{`${key}: `}</Text>
                <Text  style={[Styles.testTextValue, value?'':{fontSize: 13, color: COVID_COLOR, fontWeight: '400'}]}>
                {value?parseFloat(value).toFixed(2):'Not updated'}
                </Text>
            </Text>
        )
    }
    render(){
        const { tested, isStateWise } = this.props;
        if(tested && tested.length>0){
            return tested.map((test, index)=>{
                return(
                    <View style={Styles.cardContainer} key={index} >
                        <View style={Styles.cardContent_1} >
                            {this._renderText(
                                isStateWise?
                                'Total Negative cases':
                                'Total individuals', 
                                isStateWise?
                                test.negative:
                                test.totalindividualstested
                            )}
                            {this._renderText(
                                'Total positive cases', 
                                isStateWise?
                                test.positive:
                                test.totalpositivecases
                            )}
                            {this._renderText(
                                'Positive percentage', 
                                test.testpositivityrate
                            )}
                            {this._renderText(
                                isStateWise?
                                'Pending results':
                                'Sample reported', 
                                isStateWise?
                                test.unconfirmed:
                                test.samplereportedtoday
                            )}
                            {this._renderLongText(
                                isStateWise?
                                'People in quarantine':
                                'Individuals tested per confirmed case', 
                                isStateWise?
                                test.totalpeopleinquarantine:
                                test.individualstestedperconfirmedcase
                            )}
                            {this._renderLongText(
                                isStateWise?
                                'People released from quarantine':
                                'Test per confirmed case', 
                                isStateWise?
                                test.totalpeoplereleasedfromquarantine:
                                test.testsperconfirmedcase
                            )}
                            {
                                isStateWise?
                                this._renderLongText('Positive cases from samples reported', test.positivecasesfromsamplesreported)
                                :null
                            }
                        </View>
                        <View style={Styles.cardContent_2}>
                            <Text style={Styles.smallText} >
                                {dateTimeFormat(
                                    isStateWise?
                                    test.updatedon:
                                    test.updatetimestamp,
                                    false
                                )}
                            </Text>
                            <View style={{alignItems: 'center'}} >
                                <Text style={Styles.textCard}>{'Total sample'}</Text>
                                <Text style={Styles.textCardValue}>
                                    {
                                        isStateWise?
                                        test.totaltested?test.totaltested:'-----':
                                        test.totalsamplestested?test.totalsamplestested:'-----'
                                    }
                                </Text>
                            </View>
                            <TouchableOpacity 
                                activeOpacity={0.6}
                                style={[Styles.smallTextView]}
                                onPress={()=>{
                                    isStateWise?
                                    Linking.openURL(test.source):
                                    null
                                }}
                            >
                                <Text 
                                    style={[Styles.smallTextDown]} 
                                >
                                    Source
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })
        }else{
            return null
        }
    }
}
export default TestCard;