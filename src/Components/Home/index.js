import React, { Component } from 'react';
import { KeyboardAvoidingView, Text, View, ScrollView, StatusBar, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { getAllDetails } from '../../Redux/Actions/home';
import { TEXT_COLOR } from '../../Utils/constant';
import Header from '../Header';
import Search from '../Header/searchHeader';
import TotalCount from '../TotalCount';
import Location from '../Location';
import Footer from '../Footer';
import DataLoader from '../Loader/loader';
import Styles from '../../Styles';

const { height } = Dimensions.get('window')

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            isPressSearch: false
        }
        this.toggleSearchView = this.toggleSearchView.bind(this);
    }
    componentDidMount(){
        this.props.getAllDetails()
    }
    toggleSearchView(result){
        this.setState({isPressSearch: result})
        // this.setState({isPressSearch: result})
    }
    title(){
        return(
            <>
                <Text style={{fontSize: 18, fontWeight: '500', letterSpacing: 1, color: TEXT_COLOR}} >State/UT</Text>
                <View
                    style={{
                        borderBottomColor: TEXT_COLOR,
                        borderBottomWidth: 0.6,
                    }}
                    />
            </>
        )
    }
    _isDataLoaded(loader){
        const { allStateWise } = this.props;
        const { allTested } = this.props;
        if(loader){
            return <DataLoader active={loader} height={height/2.7}/>
        }else{
            return (
                <>
                    {
                        allStateWise && allStateWise.length>0?
                        <TotalCount 
                            count={allStateWise[0]} 
                            totalsamplestested={allTested[0].totalsamplestested}  
                            {...this.props} 
                            isStateWise={false}
                        />:null
                    }
                    <View style={{padding: 15}}>
                        {this.title()}
                        <Location location={allStateWise} {...this.props} />
                    </View>
                    <Footer/>
                </>
            )
        }
    }
    render(){
        const { loader } = this.props;
        const { isPressSearch } = this.state;
        return(
            <KeyboardAvoidingView style={Styles.baseColor} >
                <StatusBar backgroundColor={"transparent"} barStyle="dark-content" />
                <ScrollView showsVerticalScrollIndicator={false} >
                    {/* {
                        isPressSearch?
                        <Search 
                            isPressSearch={isPressSearch} 
                            toggleSearchView={this.toggleSearchView.bind()}
                            {...this.props}
                        />: */}
                        <Header title1={'COVID19'} title2={'India'} {...this.props} />
                    {/* } */}
                    {this._isDataLoaded(loader)}
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allStateWise: state.Home.allStateWise,
        allTested: state.Home.allTested,
        loader: state.Loader.loader
    }
}

export default connect(mapStateToProps,  { getAllDetails })(Home);