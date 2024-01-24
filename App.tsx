// Esta me esta fallando
import 'react-native-gesture-handler';
import React from 'react';

//Este me esta fallando
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { Tabs } from './src/navigator/Tabs';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
    return (
        <NavigationContainer>
            <Appstate>
                <MenuLateral/>
                {/* Estos son los diferentes tipos de navegacion */}
                {/* <StackNavigator/> */}
                {/* <MenuLateralBasico/> */}
                {/* <Tabs/> */}
            </Appstate>
        </NavigationContainer>
    )
}

// const Appstate = ({ children }: {children: JSX.Element[]}) => { // Con tipado
const Appstate = ({ children }: any ) => { // Sin tipado
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export default App;