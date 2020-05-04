import React from 'react';
import { KeyboardAvoidingView, Text, Dimensions, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Picker } from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CalendarIcon from 'react-native-vector-icons/EvilIcons';
import { getDemographics } from '../../Redux/Actions/demographics';
import Header from '../Header';
import Styles from '../../Styles';
import Loader from '../Loader/loader';
import { dateFormat, filterByObject } from '../../Utils/custom';
import { COVID_COLOR } from '../../Utils/constant';
import PatientsView from './patientsView';
import Footer from '../Footer'


const { height, width } = Dimensions.get('window')

class Demographics extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            language: 'java',
            detectedstate: 'all',
            detecteddistrict: 'all',
            detectedcity: 'all',
            dateannounced: 'all',
            showDate: false
          };
        this.getSortedValues = this.getSortedValues.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    async componentDidMount(){
        await this.props.getDemographics();
        var date = new Date();
        this.setState({
            dateannounced: dateFormat(date)
        })
    }
    onChange(e, d){
        this.setState({showDate: false})
        this.setState({dateannounced: dateFormat(d)})
    }
    getSortedValues(obj, key) {
        const setValues = new Set(obj.map((p) => p[key]));
        if (setValues.size > 1) setValues.add('');
        if (key === 'dateannounced') return Array.from(setValues);
        return Array.from(setValues).sort();
    }
    _renderDate(){
        const { showDate, dateannounced } = this.state;
        if(showDate){
            return(
                <DateTimePicker
                        testID="dateTimePicker"
                        minimumDate={new Date(2020, 0, 30)}
                        textColor={COVID_COLOR}
                        timeZoneOffsetInMinutes={0}
                        value={new Date()}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={this.onChange}
                        
                /> 
            )
        }
        return(
            <TouchableOpacity 
                style={Styles.dateannouncedContainer} 
                onPress={()=>{this.setState({showDate: true})}}
            >
                <Text style={{fontSize: 15}} >{dateannounced}</Text>
                <CalendarIcon name="calendar" size={20} color={COVID_COLOR}/>  
            </TouchableOpacity>            
        )
    }
    _renderLocation(){
        const { detectedcity, detecteddistrict, detectedstate } = this.state;
        const { demographics } = this.props;
        return(
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}} >
                <View >
                    <Picker
                        selectedValue={detectedstate}
                        style={Styles.pickerContainer}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({detectedstate: itemValue})
                        }>
                        <Picker.Item  label="State" value="" />
                        {this.getSortedValues(demographics, 'detectedstate').map(
                            (state, index) => {
                            return (
                                <Picker.Item  key={index} label={state} value={state}>
                                {state === '' ? 'All' : state}
                                </Picker.Item>
                            );
                            }
                        )}
                    </Picker>
                </View>
                {
                    detectedstate !== 'all'?
                    <View>
                        <Picker
                            selectedValue={detecteddistrict}
                            style={Styles.pickerContainer}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({detecteddistrict: itemValue})
                            }>
                            <Picker.Item label="District" value="" />
                            {this.getSortedValues(
                                filterByObject(demographics, {
                                    detectedstate: detectedstate,
                                }),
                                'detecteddistrict'
                            ).map((district, index) => {
                                return (
                                <Picker.Item key={index} label={district} value={district}>
                                    {district === '' ? 'All' : district}
                                </Picker.Item>
                                );
                            })}
                        </Picker>
                    </View>:null
                }
                {
                    detecteddistrict !== 'all'?
                    <View>
                        <Picker
                            selectedValue={detectedcity}
                            style={Styles.pickerContainer}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({detectedcity: itemValue})
                            }>
                            <Picker.Item label="City" value="" />
                            {this.getSortedValues(
                                filterByObject(demographics, {
                                    detecteddistrict: detecteddistrict,
                                }),
                                'detecteddistrict'
                            ).map((city, index) => {
                                return (
                                <Picker.Item key={index} label={city} value={city}>
                                    {city === '' ? 'All' : city}
                                </Picker.Item>
                                );
                            })}
                        </Picker>
                    </View>:null
                }
            </View>
        )
    }
    _renderHeader(){
        return(
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-around'}} >
                {this._renderLocation()}
                {this._renderDate()}
            </View>
        )
    }
    _isDataLoaded(){
        const { loader, demographics } = this.props;
        const { detectedcity, detecteddistrict, detectedstate, dateannounced } = this.state;
        if(loader){
            return <Loader active={loader} height={height/2.8}/>
        }else{
            return(
                <>
                    {this._renderHeader()}
                    <PatientsView
                        filter={
                            {
                                detectedstate: detectedstate=='all'?'':detectedstate,
                                detecteddistrict: detecteddistrict=='all'?'':detecteddistrict,
                                detectedcity: detectedcity=='all'?'':detectedcity,
                                dateannounced: `${dateannounced}`.toString()
                            }
                        }
                        demographics={demographics}
                        {...this.props}
                    />
                </>
            )
        }
    }
    render(){
        const { loader, demographics } = this.props;
        return(
            <KeyboardAvoidingView style={Styles.baseColor} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header {...this.props} title1={'Demo'} title2={'graphics'}/>
                    {this._isDataLoaded()}
                    {/* {
                        !loader && demographics.length>0?
                        <Footer/>:null
                    } */}
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        demographics: state.Demographics.demographics,
        loader: state.Loader.loader
    }
}

export default connect(mapStateToProps, {
    getDemographics
})(Demographics);