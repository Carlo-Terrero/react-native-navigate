// Esta me esta fallando
import 'react-native-gesture-handler';
import React from 'react';

//Este me esta fallando
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { Tabs } from './src/navigator/Tabs';

const App = () => {
    return (
        <NavigationContainer>
            {/* <StackNavigator/> */}
            {/* <MenuLateralBasico/> */}
            <MenuLateral/>
            {/* <Tabs/> */}
        </NavigationContainer>
    )
}

export default App;