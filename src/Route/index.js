import 'react-native-gesture-handler';
import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Splash from '../Components/Splash';
import Dashboard from './routing';


const SwitchNavigator = createSwitchNavigator({
    Splash:Splash,
    Dashboard:Dashboard
}, {
    initialRouteName:'Splash'
})

export default createAppContainer(SwitchNavigator);