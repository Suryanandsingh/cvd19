import React from 'react';
import { Platform, View , StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    DrawerItem,
    createDrawerNavigator,
    DrawerContentScrollView
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import HomeIcon from 'react-native-vector-icons/AntDesign';
import PeopleIcon from 'react-native-vector-icons/Feather';
import ZoneIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Components/Home';
import StateWise from '../Components/StateWise';
import Tested from '../Components/Tested/totalTested';
import { COVID_COLOR, COVIDE_LOGO, COVIDE_TEXT } from '../Utils/constant';
import Notification from '../Components/Notification';
import Demographics from '../Components/Demographics';
import Zone from '../Components/Zone';
import Styles from '../Styles';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = ({ navigation, style }) =>{
    return(
        <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
            <Stack.Navigator initialRouteName={"Home"} >
                <Stack.Screen name="Home" component={Home} 
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="StateWise" component={StateWise}
                    options={{
                        headerTitle:'',
                        ...Platform.select({
                            android:{
                                headerTintColor: COVID_COLOR,
                            }
                        }),
                        headerStyle:{
                            shadowOpacity: 0, 
                            shadowRadius: 0,
                            shadowOffset: {height:0},
                            elevation: 0
                        }
                    }}
                />
                <Stack.Screen name="Tested" component={Tested}
                    options={{
                        headerTitle:'',
                        ...Platform.select({
                            android:{
                                headerTintColor: COVID_COLOR,
                            }
                        }),
                        headerStyle:{
                            shadowOpacity: 0, 
                            shadowRadius: 0,
                            shadowOffset: {height:0},
                            elevation: 0
                        }
                    }}
                />
                <Stack.Screen name="Notification" component={Notification}
                    options={{
                        headerTitle:'',
                        ...Platform.select({
                            android:{
                                headerTintColor: COVID_COLOR,
                            }
                        }),
                        headerStyle:{
                            shadowOpacity: 0, 
                            shadowRadius: 0,
                            shadowOffset: {height:0},
                            elevation: 0
                        }
                    }}
                />
                <Stack.Screen name="Demographics" component={Demographics}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="Zone" component={Zone}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </Animated.View>
    )
}

const DrawerContent = (props) =>{
    return(
        <DrawerContentScrollView 
            {...props} 
            scrollEnabled={false} 
            contentContainerStyle={{ flex: 1 }}
        >
            <View>
                <View style={{alignItems:'center', padding:20}} >
                    <Text style={Styles.headerText}>COVID19</Text>
                    <Text style={[Styles.headerText, {color: COVIDE_TEXT}]}>INDIA</Text>
                </View>
            </View>
            <View>
                <DrawerItem 
                    label="Home" 
                    style={{alignItems:'flex-start'}}
                    onPress={() => props.navigation.navigate('Home')} 
                    icon={()=> <HomeIcon name="home" size={20} color={COVIDE_TEXT} />}
                />
                <DrawerItem 
                    label="Zone" 
                    style={{alignItems:'flex-start'}}
                    onPress={() => props.navigation.navigate('Zone')} 
                    icon={()=> <ZoneIcon name="home-city-outline" size={20} color={COVIDE_TEXT}/>}
                />
                <DrawerItem 
                    label="Demographics" 
                    style={{alignItems:'flex-start'}}
                    onPress={() => props.navigation.navigate('Demographics')} 
                    icon={()=> <PeopleIcon name="users" size={20} color={COVIDE_TEXT}/>}
                />
            </View>
            <View 
                style={{
                    position:'absolute',
                    bottom: 20,
                    left: 0,
                    right: 0
                }}
            >
                <Text style={[Styles.slogan_text, {fontSize: 14, letterSpacing: 1}]} >{`stay home stay safe`.toUpperCase()}</Text>
            </View>
        </DrawerContentScrollView>
    )
}

function App(){
    const [progress, setProgress] = React.useState(new Animated.Value(0));
    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8],
      });
      const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 16],
      });
    
      const animatedStyle = { borderRadius, transform: [{ scale }] };
    return(
        <NavigationContainer>
            <Drawer.Navigator
                drawerType="slide"
                drawerStyle={styles.drawerStyles}
                overlayColor="transparent"
                contentContainerStyle={{ flex: 1 }}
                sceneContainerStyle={{ backgroundColor: "#f2f2f2" }}
                drawerContent={props => {
                    setProgress(props.progress);
                    return <DrawerContent {...props} />
            }}
            >
                <Drawer.Screen name={"screens"} >
                    {props=><AppStack {...props} style={animatedStyle}/>}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default App;

const styles = StyleSheet.create({
    stack: {
      flex: 1,
      shadowColor: '#FFF',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 5,
      // overflow: 'scroll',
      // borderWidth: 1,
    },
    drawerStyles: { flex: 1, width: '60%', backgroundColor: 'transparent' },
    drawerItem: { alignItems: 'center', marginVertical: 0 },
    drawerLabel: { color: 'red', marginLeft: 0 },
    avatar: {
      borderRadius: 60,
      marginBottom: 16,
      borderColor: 'white',
      borderWidth: StyleSheet.hairlineWidth,
    },
  });