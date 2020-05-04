import React, { Component, Suspense } from 'react';
import { KeyboardAvoidingView, View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { connect } from 'react-redux';
import { getZone } from '../../Redux/Actions/zone';
import Styles from '../../Styles';
import Header from '../Header';
import * as Animatable from 'react-native-animatable';
import { RED_LIGHT, RED, GREEN_LIGHT, GREEN, ORANGE_LIGHT, ORANGE, TEXT_COLOR, COVID_COLOR } from '../../Utils/constant';
import Loader from '../Loader/loader';
import Footer from '../Footer';

const { width, height } = Dimensions.get('window')

const Zone = React.lazy(()=>import('./zones'))

const zoneColor = {
    "Red":{
        'light': RED_LIGHT,
        'color': RED
    },
    "Green":{
        'light': GREEN_LIGHT,
        'color': GREEN
    },
    "Orange": {
        'light': ORANGE_LIGHT,
        'color': ORANGE
    }
}

class Zones extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectedZone: 'Red',
            selectState: 'all'
        }
    }
    async componentDidMount(){
        await this.props.getZone();
    }
    getSortedValues(obj, key) {
        const setValues = new Set(obj.map((p) => p[key]));
        if (setValues.size > 1) setValues.add('');
        return Array.from(setValues).sort();
    }
    _renderStatePicker(){
        const { selectState } = this.state;
        const { zone } = this.props;
        return(
            <Picker
                selectedValue={selectState}
                style={[Styles.pickerContainer, {width:'100%'}]}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({selectState: itemValue})
                }>
                <Picker.Item  label="All state" value="all" />
                {this.getSortedValues(zone, 'state').map(
                    (state, index) => {
                    return (
                        <Picker.Item  key={index} label={state} value={state}>
                        {state === '' ? 'All' : state}
                        </Picker.Item>
                    );
                    }
                )}
            </Picker>
        )
    }
    _zonePartition(color){
        const { selectedZone } = this.state;
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                style={[Styles.zoneButtom, 
                selectedZone === color?{backgroundColor:'#f2f2f2'}:null
                ]}
                onPress={()=>{
                    this.setState({selectedZone: color})
                }}
            >
                <View style={{backgroundColor: zoneColor[color].light, width: '90%', height: width/11, alignItems:'center', justifyContent:'center'}} >
                    <Text style={{color: zoneColor[color].color, fontSize: 16}} >{color}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    title(){
        return(
            <>
                <Text style={{fontSize: 18, fontWeight: '500', letterSpacing: 1, color: TEXT_COLOR}} >
                    Zone/District
                </Text>
                <View
                    style={{
                        borderBottomColor: TEXT_COLOR,
                        borderBottomWidth: 0.6,
                    }}
                    />
            </>
        )
    }
    _isDataLoaded(){
        const { zone, loader } = this.props;
        const { selectedZone, selectState } = this.state;
        if(!loader){
            return(
                <View style={{padding: 10}}>
                    {this.title()}
                    <Suspense fallback={
                    <Text style={{fontSize: 21, letterSpacing: 2, color: COVID_COLOR, marginTop: 7}} >
                        Loading...
                    </Text>} >
                        <Animatable.View 
                            animation="slideInUp"
                            easing="ease-in"
                            style={{flexDirection:'row', flexWrap:'wrap', justifyContent: 'space-around'}} >
                            <Zone
                                zones={zone}
                                zoneColor={zoneColor}
                                filters={
                                    {
                                        state: selectState==='all'?'':selectState,
                                        zone: selectedZone
                                    }
                                }
                                {...this.props}
                            />
                        </Animatable.View>
                    </Suspense>
                </View>
            )
        }else{
            return <Loader active={loader} height={height/3.5}/>
        }
    }
    render(){
        const { loader } = this.props;
        return(
            <KeyboardAvoidingView style={Styles.baseColor}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header title1={"Zo"} title2={"ne"} {...this.props}/>
                    <View style={{marginHorizontal: width/11, borderWidth: 1, borderColor: '#f2f2f2'}} >
                        {this._renderStatePicker()}
                    </View>
                    <View style={Styles.zoneButtomContainer} >
                        {this._zonePartition('Red')}
                        {this._zonePartition('Orange')}
                        {this._zonePartition('Green')}
                    </View>
                    {this._isDataLoaded()}
                    {/* {
                        loader?null:
                        <Footer/>
                    } */}
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        zone: state.Zone.zone,
        loader: state.Loader.loader
    }
}

export default connect(mapStateToProps, {
    getZone
})(Zones);