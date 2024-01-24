import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LogBox } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ContactsScreen } from '../screens/ContactsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native-paper';

//Esto es utilizo para eliminar un warning despues de agragar la barra inferior
LogBox.ignoreLogs(['Sending']);

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{
                paddingTop: top, //Esto se incluyó para IOS
            }}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({route})=>({
                tabBarPressColor: colores.primary,
                //aqui el icono
                tabBarIcon: ({color}) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'ContactsScreen':
                            iconName = 'people-outline';
                            break;
                        case 'ChatScreen':
                            iconName = 'chatbox-ellipses-outline';
                            break;
                        case 'AlbumsScreen':
                            iconName = 'images-outline';
                            break;
                        default:
                            break;
                    }

                    return < Icon name={iconName} size={24} color={colores.primary}/>
                },
                tabBarStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                    paddingTop: top, //Esto se incluyó para IOS
                }  
            })}
            
        >
          <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
          <Tab.Screen name="ChatScreen" component={ChatScreen} />
          <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}
