import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Button, useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const { width } = useWindowDimensions();

    return (
        
        <Drawer.Navigator
            screenOptions={{
                // drawerPosition: 'right', //el menu lateral sale por la derecha pero la burguer siguen en el izq
                drawerType: width >= 768 ? 'permanent' : 'front', //Jugamos con el tema de cambiar el tamaño de la pantalla.
            }}
        >
            <Drawer.Screen name="StackNavigator" options={{title: 'Home',
            // headerRight: () => (
            //     <Button
            //         onPress={() => console.log('This is a button!')}
            //         title="Info"
            //         color="red"
            //     />
            // ),
        }} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{title: 'Settings'}} component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

// Esta es una forma de poner botones en Drawer.Navigator, el que pongamos aqui parece que se coloca sobre el que está
{/* <Drawer.Navigator
    screenOptions={{
        // drawerPosition: 'right', //el menu lateral sale por la derecha pero la burguer siguen en el izq
        drawerType: width >= 768 ? 'permanent' : 'front', //Jugamos con el tema de cambiar el tamaño de la pantalla.
        headerRight: () => (
            <Button
                onPress={() => console.log('This is a button!')}
                title="Info"
                color="red"
            />
        ),
        headerLeft: () => (
            <Button
                onPress={() => console.log('This is a button!')}
                title="Info"
                color="red"
            />
        ),
    }}
></Drawer.Navigator> */}