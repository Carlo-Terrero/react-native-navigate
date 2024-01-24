import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, View, ViewBase, useWindowDimensions } from 'react-native';
// import DrawerContentScrollView
import DrawerContent from '@react-navigation/drawer';
import { colores, styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

    const MenuInterno = ({navigation}: DrawerContentComponentProps) => {

        return (

            // Al colocarlo de esta manera, la navegación se hace desde aquí y no por defecto como antes.
            // Lo bueno de colocarlo de esta manera es que pordemos interactuar y estilizar mejor el componenete.
            // RECUERDA: Para que haga referencia al screen que querramos, tenemos que hacer referencia al name con el que lo declaramos .

            // contenedor del avatar  
            <DrawerContentScrollView
                
            >
                <View style={styles.avatarContainer}>
                    <Image
                        source={{
                            uri: 'https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-avatar-placeholder-abstract-white-blue-green-png-image_3918476.jpg'
                        }}
                        style={styles.avatar}
                    />
                </View>

                {/* // Opciones de menú */}
                <View
                    style={styles.menuContainer}
                >
                    <TouchableOpacity style={{
                        ...styles.menuBoton,
                        flexDirection: 'row',
                    }}
                        onPress={ () => navigation.navigate('Tabs')}
                    >
                        <Icon name='navigate-outline' size={25} style={{marginRight: 10}}/>
                        <Text style={ styles.menuTexto}>Navegacion</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        ...styles.menuBoton,
                        flexDirection: 'row',
                    }}
                        onPress={ () => navigation.navigate('SettingsScreen')}
                    >
                        <Icon name='settings-outline' size={25} style={{marginRight: 10}} />
                        <Text style={ styles.menuTexto}>Ajustes</Text>
                    </TouchableOpacity>

                </View>

            </DrawerContentScrollView>

            
        );
    }

    return (
        
        <Drawer.Navigator
            drawerContent={(Props) => <MenuInterno {...Props}/>}
            screenOptions={{
                // drawerPosition: 'right', //el menu lateral sale por la derecha pero la burguer siguen en el izq
                drawerType: width >= 768 ? 'permanent' : 'front', //Jugamos con el tema de cambiar el tamaño de la pantalla.
            }}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    )
}
