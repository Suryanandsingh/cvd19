import React from 'react';
import { StyleSheet, Dimensions , Platform} from 'react-native';
import { COVIDE_TEXT, COVID_COLOR, LIGHT_COLOR, PURPLE, ACTIVE_COLOR, CONFIRM_COLOR, COVIDE_LOGO, TEXT_COLOR } from '../Utils/constant';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    baseColor:{
        backgroundColor:'white',
        flex: 1
    },
    center:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    slogan_view:{
        position:'absolute',
        bottom: height/10,
        left: 0,
        right: 0,
    },
    slogan_text:{
        textAlign: 'center',
        fontSize: 25,
        letterSpacing: 7,
        fontWeight: '500',
        color: COVIDE_TEXT
    },
    //Header
    headerContainer:{
        height: height/8,
        alignItems: 'flex-end',
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 12
    },
    headerTextView: {
        flexDirection: 'row',
        padding: 3
    },
    headerText:{
        fontSize: 25,
        fontWeight: 'bold',
        color: COVID_COLOR
    },
    headerSearchView: {
        backgroundColor: '#f2f2f2',
        width: width/11,
        height: width/11,
        borderRadius: width/22,
        marginHorizontal: 3,
        alignItems:'center',
        justifyContent:'center'
    },
    //Total Count
    totalCountContainer:{

    },
    confirmCountView:{
        backgroundColor: 'rgba(32,26,162, 0.1)',
        flexDirection:'row',
        marginHorizontal: width/5,
        marginVertical: 10,
        paddingHorizontal: 3,
        paddingVertical: 8,
        borderRadius: 3,
    },
    totalCountView:{
        width: '50%',
        alignItems:'center',
        justifyContent:'center'
    },
    totalCountText:{
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 0,
        color: PURPLE
    },
    totalCountTextSmall:{
        fontWeight: '500',
        fontSize: 13,
        letterSpacing: 0,
        color: PURPLE
    },
    countView:{
        backgroundColor: 'rgba(76, 117, 242, 0.1)',
        width: '23%',
        alignItems:'center',
        paddingVertical: 7,
        borderRadius: 3
    },
    //Location
    locatinContent:{
        flexDirection:'row',
        backgroundColor:'white',
        marginHorizontal: 2,
        marginVertical: 7,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 7,
        justifyContent:'space-between',
        alignItems:'center',
        ...Platform.select({
            ios:{
                shadowColor: '#000',
                shadowRadius: 1,
                shadowOpacity: 0.6,
                shadowOffset: { width: 0, height: 1 }
            },
            android:{
                elevation: 5
            }
        }),
        minHeight: height/9.5
    },
    locationName:{
        fontWeight: '500',
        fontSize: 21,
        letterSpacing: 1,
        color: COVIDE_TEXT,
        marginBottom: 1
    },
    locationCount: {
        fontWeight: '500',
        fontSize: 15,
        color: TEXT_COLOR,
        marginTop: 1
    },
    //Footer
    footerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#f2f2f2',
        height: width/2.3,
        paddingVertical: 15,
        paddingHorizontal: 5,
        marginHorizontal: 1
    },
    footerIconView:{
        flexDirection:'row'
    },
    footerTextView:{
        alignSelf:'center',
        flexDirection:'row'
    },
    footerImage: {
        width: 30,
        height: 30,
        resizeMode:'contain'
    },
    footer_slogan_text:{
        textAlign: 'center',
        letterSpacing: 1,
        fontSize: 17,
        fontWeight: '800',
        marginHorizontal: 5,
        color: COVID_COLOR
    },
    //Tested
    cardContainer:{
        backgroundColor:'#f2f2f2',
        flexDirection:'row',
        marginHorizontal: 15, 
        marginVertical: 7,
        padding: 7,
        borderRadius: 5,
        minHeight: height/2.9,
        ...Platform.select({
            ios:{
                shadowOffset: { width: -1, height: 1 },
                shadowColor: COVID_COLOR,
                shadowRadius: 1,
                shadowOpacity: 1
            },
            android:{
                elevation: 5
            }
        })
    },
    cardContent_1:{
        width: '67%',
        paddingHorizontal: 3,
        justifyContent: 'center'
    },
    cardContent_2:{
        width: '33%',
        justifyContent:'space-between'
    },
    smallTextView:{
       alignSelf: 'flex-end',
       padding: 2,
       margin: 1
    },
    smallText:{
        textAlign: 'right',
        marginRight: 3,
        fontSize: 15,
        letterSpacing: 1,
        fontWeight: '500',
        color: COVIDE_TEXT
    },
    smallTextDown:{
        fontSize: 12, 
        fontWeight: '400', 
        color: COVID_COLOR
    },
    textCard:{
        ...Platform.select({
            ios:{
                fontSize: width/22,
            },
            android:{
                fontSize: width/20,
            }
        }),
        
        fontWeight: '700',
        alignSelf: 'center',
        color: COVID_COLOR
    },
    textCardValue: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: PURPLE
    },
    testTextKey:{
        fontSize: 16,
        fontWeight: '500',
        color: COVID_COLOR
    },
    testTextValue: {
        fontSize: 17, 
        fontWeight: '700',
        color: ACTIVE_COLOR
    },
    //loader
    loaderText:{
        fontSize: 30,
        fontWeight: '500',
        letterSpacing: 7,
        color: COVID_COLOR
    },
    suspendText:{
        padding: 15, 
        fontSize: 16, 
        fontWeight:'500', 
        color:COVID_COLOR
    },
    //Notification
    notificationCardContainer:{
        backgroundColor:'white',
        justifyContent: 'center',
        marginVertical: 5,
        padding: 2,
        borderRadius: 5,
        minHeight: height/10,
        ...Platform.select({
            ios:{
                shadowOffset: { width: -1, height: 1 },
                shadowColor: COVID_COLOR,
                shadowRadius: 1,
                shadowOpacity: 1
            },
            android:{
                elevation: 5
            }
        }),
        borderLeftWidth: 3,
    },
    notificationText:{
        fontWeight: '600',
        fontSize: 17,
        color: COVID_COLOR,
        padding: 3,
    },
    notificationTimeText:{
        position: 'absolute',
        right: 3,
        bottom: 3,
        fontSize: 13,
        color: COVIDE_TEXT
    },

    //search
    searchHeaderContainer:{
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 7,
        ...Platform.select({
            ios:{
                marginTop: 20,
                height: width/8
            },
            android:{
                height: width/8
            }
        })
    },
    backIconView:{
        height: '90%',
        alignItems:'center',
        justifyContent: 'center',
        width: '10%'
    },
    searchInput:{
        backgroundColor:'#f2f2f2',
        width: '78%',
        height: '90%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 17,
        fontWeight: '500',
        color: COVID_COLOR
    },
    searchClearView:{
        backgroundColor: '#f2f2f2',
        marginTop: 3,
        width: width/17,
        height: width/17,
        borderRadius: width/34,
        alignItems:'center',
        justifyContent: 'center'
    },
    defaultSearchContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    searchBackgroundImg:{
        width: width/2.2,
        height: width/7,
        resizeMode: 'cover',
        alignItems:'center',
        justifyContent: 'center'
    },
    searchImgText:{
        fontWeight: '600',
        fontSize: 20,
        color: 'white',
        padding: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    pickerContainer:{
        height: width/10, 
        width: width/3.1,
        marginVertical: 2,
    },
    dateannouncedContainer:{
        backgroundColor: '#f2f2f2',
        height: width/10,
        alignItems:'center',
        justifyContent: 'center',
        paddingHorizontal: 7,
        flexDirection:'row'
    },

    //patinetDetains
    patientContainer:{
        width: width/5.2, 
        height: width/10.5,
        padding: 7,
        paddingVertical: 27,
        marginVertical: 4,
        position:'relative',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    },
    patientGender:{
        position: 'absolute',
        top: 1,
        right: 3,
        fontSize: 12,
    },
    patientNumber:{
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 14,
        color: COVID_COLOR
    },
    modalContainer:{
        position:'absolute',
        top: width/3,
        right:0,
        left:0,
        bottom:0,
        backgroundColor:'white',
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
        shadowColor: COVID_COLOR,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 3
    },
    modalHeader:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        height: width/8,
        paddingHorizontal: 10,
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
    },
    modalClose:{
        fontSize: 20,
        fontWeight:'500',
        color: COVID_COLOR
    },
    //Zone
    zoneButtom:{
        paddingVertical: 5,
        width: '30%',
        alignItems:'center',
        borderRadius: 3
    },
    zoneButtomContainer:{
        alignItems:'center', 
        justifyContent:'space-between', 
        paddingHorizontal: width/13, 
        paddingVertical: 7,
        flexDirection:'row'
    },
    zoneView:{
        backgroundColor: COVID_COLOR,
        width: width/3.4,
        height: width/3.4,
        marginVertical: 5,
        paddingHorizontal: 3,
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center'
    }
})