import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../Styles';
import * as Animatable from 'react-native-animatable';
import { COVID_COLOR } from '../../Utils/constant';
import Bangalore from '../../Assests/images/bangalore.jpg';
import Chennai from '../../Assests/images/CHENNAI.jpg';
import Delhi from '../../Assests/images/delhi.jpg';
import Hydrabad from '../../Assests/images/hydrabad.jpg';
import Kolkata from '../../Assests/images/kolkata.jpeg';
import Lucknow from '../../Assests/images/lucknow.jpg';
import Mumbai from '../../Assests/images/gateway_india.jpg';
import Gujarat from '../../Assests/images/gujrat.jpg';

const defaultSearch = [
    {
        'title': 'Mumbai',
        'image': Mumbai,
        'state': 'Maharashtra'
    },
    {
        'title': 'Delhi',
        'image': Delhi,
        'state': 'Delhi'
    },
    {
        'title': 'Gujarat',
        'image': Gujarat,
        'state': 'Gujarat'
    },
    {
        'title': 'Chennai',
        'image': Chennai,
        'state': 'Tamil Nadu'
    },
    {
        'title': 'Lucknow',
        'image': Lucknow,
        'state': 'Uttar Pradesh'
    },
    {
        'title': 'Kolkata',
        'image': Kolkata,
        'state': 'West Bengal'
    },
    {
        'title': 'Bangalore',
        'image': Bangalore,
        'state': 'Karnataka'
    },
    {
        'title': 'Hydrabad',
        'image': Hydrabad,
        'state': 'Telangana'
    }
]

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            search: ''
        }
    }
    _renderSearchHeader(){
        const { search } = this.state;
        return(
            <View style={Styles.searchHeaderContainer} >
                <TouchableOpacity 
                    style={Styles.backIconView} 
                    activeOpacity={0.6}
                    onPress={()=>{this.props.toggleSearchView(false)}}
                >
                {
                    Platform.OS==='ios'?
                    <Icon name={"ios-arrow-back"} size={28} color={'rgb(0, 122, 255)'} />:
                    <Icon name={"md-arrow-back"} size={28} color={COVID_COLOR} />
                }
                </TouchableOpacity>
                <TextInput
                    underlineColorAndroid="transparent"
                    style={Styles.searchInput}
                    placeholder="search..."
                    onChangeText={(text)=>{this.setState({search: text})}}
                    value={search}
                    autoFocus={true}
                    keyboardType="web-search"
                />
                <TouchableOpacity 
                    style={Styles.searchClearView}
                    activeOpacity={0.5}
                    onPress={()=>{
                        this.setState({search: ''})
                    }}
                >
                    <Icon name="ios-close" size={22}/>
                </TouchableOpacity>
            </View>
        )
    }
    _renderDefaultsearch(){
        const { allStateWise } = this.props;
        return defaultSearch.map((data, index)=>{
            return(
                <TouchableOpacity 
                    key={index}
                    activeOpacity={0.8}
                    style={{marginVertical: 5}}
                    onPress={()=>{
                        this.props.navigation.navigate('StateWise', {
                            count: allStateWise.filter((state)=>{
                                return state.state == data.state
                            })[0]
                        })
                    }}
                >
                    <ImageBackground style={Styles.searchBackgroundImg}  source={data.image}>
                        <Text style={Styles.searchImgText} >{data.title}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            )
        })
    }
    render(){
        const { isPressSearch } = this.props;
        if(isPressSearch){
            return(
                <React.Fragment>
                    {this._renderSearchHeader()}
                    <Animatable.View animation="fadeInDown" delay={100} style={Styles.defaultSearchContainer} >
                        {this._renderDefaultsearch()}
                    </Animatable.View>
                </React.Fragment>
            )
        }else{
            return null
        }
        
    }
}

const mapStateToProps = (state) => {
    return{
        allStateWise: state.Home.allStateWise,
    }
}

export default connect(mapStateToProps, null)(Search);