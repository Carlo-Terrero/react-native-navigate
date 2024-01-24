import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

//Esta props extienden de StackScreenProps, para traer las props por defecto de ahí y porder
//utilizarlas con TS. Tambien podemos añadir más.
// interface Props extends StackScreenProps<any,any>{};
interface Props extends DrawerScreenProps<any,any>{};

export const Pagina1Screen = ({navigation}: Props) => {

    // Aquí gestionamos el munú lateral pero en esta pg, aunque en la forma en la que la hemos hecho
    // se duplica con el que se implementa por defecto
    useEffect(() =>{
        navigation.setOptions({
            headerLeft: () => (
                // <Button
                //     title='Menú'
                //     onPress={() => navigation.toggleDrawer()}
                // />
                <TouchableOpacity
                    style={{
                        marginLeft: 10
                    }}
                    onPress={ () => navigation.toggleDrawer()}
                >
                    <Icon name='menu-outline' color={colores.primary} size={30}/>
                </TouchableOpacity>
            ),
        });
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> PaginaScreen 1</Text>

            <Button 
                title="Ir página 2"
                //Aquí añadimos el nombre que le ponemos cuando lo declaramos en StackNavegacion.
                onPress={ () => navigation.navigate('Pagina2Screen')} 
            />

            <Text
                style={{
                    marginVertical: 20,
                    fontSize: 20,
                    marginLeft: 5,
                }}
            > Navegar con argumentos.</Text>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: colores.primary
                    }}
                    
                // Le añadimos un obj con los datos al lado del nombre de la screen para enviar los props a ese componente
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1, 
                        nombre: 'Carlos',
                    })}
                    >
                    <Icon name='person-outline' size={50} color='white'/>
                    <Text style={ styles.botonGrandeTexto}>Carlos</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2, 
                        nombre: 'Alicia',
                    })}
                    >
                    <Icon name='person-outline' size={50} color='white'/>
                    <Text style={ styles.botonGrandeTexto}>Alicia</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
