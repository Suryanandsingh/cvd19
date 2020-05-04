import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import TotalCount from '../TotalCount';
import Styles from '../../Styles';
import { COVIDE_TEXT, TEXT_COLOR } from '../../Utils/constant';
import { getStateDistDetails, getStateTestedDetails } from '../../Redux/Actions/home';
import Location from '../Location/stateDistWise';
import Footer from '../Footer';
import DataLoader from '../Loader/loader';
import Title from '../Title/custom';

const { height } = Dimensions.get('window')

class StateWise extends Component{
    componentDidMount(){
        const { count } = this.props.route.params;
        this.props.getStateDistDetails(count.state);
        this.props.getStateTestedDetails();

    }
    locationText(){
        return(
            <>
                <Text style={{fontSize: 18, fontWeight: '500', letterSpacing: 1, color: TEXT_COLOR}} >District</Text>
                <View
                    style={{
                        borderBottomColor: TEXT_COLOR,
                        borderBottomWidth: 0.6,
                    }}
                    />
            </>
        )
    }
    _randerLocation(loader){
        const { stateDist } = this.props;
        if(loader){
            return <DataLoader active={loader} height={height/5}/>
        }else{
            return(
                <>
                {
                    stateDist?
                    <Location 
                        location={stateDist} 
                        {...this.props}
                        locationObj={Object.keys(stateDist)}
                    />:null
                }
            </>
            )
        }
    }
    render(){
        const { count } = this.props.route.params;
        const { loader, stateTested } = this.props;
        return(
            <SafeAreaView style={Styles.baseColor} >
                <StatusBar backgroundColor={"transparent"} barStyle="dark-content" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Title title={count.state}/>
                    <TotalCount 
                        count={count}  
                        totalsamplestested={
                            stateTested && stateTested.length>0 && stateTested !== undefined?
                            stateTested.filter((state)=> {return state.state==count.state}).reverse()[0].totaltested
                            :''
                        } 
                        { ...this.props } 
                        isStateWise={count.state}
                    />
                    <View style={{padding: 15}}>
                        {this.locationText()}
                        {this._randerLocation(loader)}
                    </View>
                    {loader?null:<Footer/>}
                </ScrollView>
            </SafeAreaView>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        stateDist: state.Home.stateDist,
        stateTested: state.Home.stateTested,
        loader: state.Loader.loader
    }
}

export default connect(mapStateToProps, {
    getStateDistDetails,
    getStateTestedDetails
})(StateWise);