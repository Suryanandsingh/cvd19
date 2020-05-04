import React,  { Component, Suspense } from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Styles from '../../Styles';
import { COVIDE_TEXT, COVID_COLOR } from '../../Utils/constant';
import Footer from '../Footer';

const TestCard = React.lazy(() => import('./testCard'))

class TotalTested extends Component{
    _title(state){
        return(
            <View style={{paddingVertical: 7, paddingHorizontal: 15}}>
                <Text style={{color: COVIDE_TEXT, fontWeight: '500', fontSize: 21}}>
                    {
                        state?
                        `${state} tested report`:
                        'All tested report'
                    }
                </Text>
            </View>
        )
    }
    render(){
        const { allTested, stateTested } = this.props;
        const { isStateWise } = this.props.route.params;
        return(
            <SafeAreaView style={Styles.baseColor} >
                <StatusBar backgroundColor={"transparent"} barStyle="dark-content" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this._title(isStateWise)}
                    <Suspense fallback={
                        <Text style={Styles.suspendText} >
                            Loading...
                        </Text>} >
                        <TestCard 
                            tested={
                                isStateWise?
                                stateTested.filter((state)=> {return state.state==isStateWise}).reverse():
                                allTested
                            } 
                            isStateWise={isStateWise}
                            {...this.props} 
                        />
                        <Footer/>
                    </Suspense>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        allTested: state.Home.allTested,
        stateTested: state.Home.stateTested,
    }
}
export default connect(mapStateToProps, null)(TotalTested);