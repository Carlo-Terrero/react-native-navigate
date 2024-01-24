import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

//esta props extienden de StackScreenProps para traer las props por defecto de ahí y porder
//Utilizarlas con TS. Tambien podemos añadir más.
interface Props extends StackScreenProps<any,any>{};
export const Pagina2Screen = ({navigation}: Props) => {

    // const navigator = useNavigation(); // Esta forma de navegation nos da error

    useEffect(() => {
        // con esta opcion reemplazamos el titulo de la cabecera
        navigation.setOptions({
            title: 'Hola mundo', //Reemplaza al que viene desde el padre
            headerBackTitle: 'back' // se pone al lado de la flecha de atras en IOS (no cambia en android). En caso de que el string sea vacio muestra cosas por defecto
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> PaginaScreen 2 </Text>

            <Button 
                title="Ir página 3"
                onPress={() => navigation.navigate('Pagina3Screen')}
            />

            {/* Esta forma de navegation nos da error    
            <Button 
                title="Ir Página 3"
                onPress={ () => navigator.navigate('Pagina3Screen')}
            /> */}
        </View>
    )
}