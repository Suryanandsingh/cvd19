import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, Text, StatusBar, Dimensions, ScrollView } from 'react-native';
import { getNotifications } from '../../Redux/Actions/notification';
import Title from '../Title/custom';
import Styles from '../../Styles';
import Footer from '../Footer';
import Loader from '../Loader/loader';

const NotificationCard = React.lazy(()=>import('./card'));

const { height } = Dimensions.get('window')

class Notification extends Component{
    async componentDidMount(){
        await this.props.getNotifications();
    }
    _isDataLoaded(){
        const { loader, notifications } = this.props;
        if(loader){
            return <Loader active={loader} height={height/3}/>
        }else{
            return(
                <Suspense fallback={
                    <Text style={Styles.suspendText} >
                        Loading...
                    </Text>} 
                >  
                    <View style={{marginHorizontal: 10}}>
                        <NotificationCard notifications={notifications} {...this.props}/>
                    </View>
                    <Footer/>
                </Suspense>
            )
        }
    }
    render(){
        return(
            <SafeAreaView style={Styles.baseColor} >
                <StatusBar barStyle="dark-content" backgroundColor={"transparent"}/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Title title={'Notifications'}/>
                    {this._isDataLoaded()}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        notifications: state.Notification.notifications,
        loader: state.Loader.loader
    }
}

export default connect(mapStateToProps, {
    getNotifications
})(Notification);