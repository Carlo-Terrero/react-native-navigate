import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = () => {
    
    return Platform.OS === 'ios' ?
    <TabsIos/> :
    // <TabsIos/>
    <TabsAndroid/>
}

const ButtomTabAndroid = createMaterialBottomTabNavigator();
function TabsAndroid() {
    return (
        <ButtomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                // backgroundColor: colores.primary
                backgroundColor: 'white'
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ( {color, focused} ) => {

                     // const a = <Icon name="images-sharp" size={80} color="#900" />
                    // let iconName: React.JSX.Element;
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = "file-tray-stacked-outline";
                            break;
                        case 'TopTabNavigator':
                            iconName = "albums-outline";
                            break;
                        case 'StackNavigator':
                            iconName = "home-outline";
                            break;
                        default:
                            break;
                    }

                    return <Icon name={iconName} size={28} color={colores.primary} />;
                }
            })}
        >
            <ButtomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tabs1'}} component={Tab1Screen} />
            <ButtomTabAndroid.Screen name="TopTabNavigator" options={{title: 'Tabs2'}} component={TopTabNavigator} />
            <ButtomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
        </ButtomTabAndroid.Navigator>
    );
}


const ButtomTabIOS = createBottomTabNavigator();
export const TabsIos = () => {
    
    return (
        <ButtomTabIOS.Navigator
            // screenOptions={{
            //     tabBarActiveTintColor: 'red',
            //     // tabBarActiveTintColor: colores.primary,
            //     tabBarStyle: {
            //         borderTopColor: colores.primary,
            //         borderTopWidth: 0,//linea superior de los tabs
            //         elevation: 0,
            //     },
            //     tabBarLabelStyle: {
            //         fontSize: 15,
            //     },
            //     tabBarIcon: ( {color, focused, size} ) => {
            //         return <Text style={{color: color}}>T1</Text>
            //     }
            // }}

            screenOptions={({route }) => ({
                tabBarActiveTintColor: 'red',
                // tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,//linea superior de los tabs
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                    // paddingBottom: 5
                },
                tabBarIcon: ( {color, focused, size} ) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = "file-tray-stacked-outline";
                            break;
                        case 'TopTabNavigator':
                            iconName = "albums-outline";
                            break;
                        case 'StackNavigator':
                            iconName = "home-outline";
                            break;
                        default:
                            break;
                    }

                    return <Icon name={iconName} size={28} color={colores.primary} />;
                }
            })}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
        >
            {/* Forma 1 de agragar el icono en los tabs. Los props vienen del padre que es Tab.Navigator */}
            {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tabs1', tabBarIcon: (props) => <Text style={{ color: props.color}}>T1</Text>}} component={Tab1Screen} /> */}
            <ButtomTabIOS.Screen name="Tab1Screen" options={{title: 'Tabs1'}} component={Tab1Screen} />
            <ButtomTabIOS.Screen name="TopTabNavigator" options={{title: 'Tabs2'}} component={TopTabNavigator} />
            <ButtomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
        </ButtomTabIOS.Navigator>
    )
}
