import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';

/* ------------ Forma recomendada ------------*/
// interface Props extends StackScreenProps<any, any>{}; //forma sin implementar parametro
// De la forma siguiente se muestra como se implementan los parametros, exportamos el e implementamos
// un paramList (tipado hecho por nosotros) y luego indicamos el parametro del paramList que vamos a
// como un string (entre ''/"").

interface Props extends StackScreenProps<RootStackParams, "PersonaScreen">{};

export const PersonaScreen = ( {route, navigation} : Props) => {

    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])
    

    return (
        <View>
            <Text>
                {
                    JSON.stringify( params, null, 3)
                }
            </Text>
        </View>
    )
}


// 1º Forma sin tipado
// interface Props extends StackScreenProps<any, any>{};

// export const PersonaScreen = ( {route, navigation} : Props) => {

//     const params = route.params;

//     useEffect(() => {
//         navigation.setOptions({
//             title: params?.nombre // Esto indica que si excite este parametro lo aplique
//             title: params!.nombre // Esto indica a Ts que lo aplique porque yo lo estoy gestionando
//         })
//     }, [])
// }


// 2º forma con un tipado un poco mas explicito y nos ayuda para un tipado mas rápido.
// Creamos la interface con el nombre que querramos
// interface RouterParams {
//     id: number,
//     nombre: string
// }

// interface Props extends StackScreenProps<any, any>{};

// export const PersonaScreen = ( {route, navigation} : Props) => {

//     const params = route.params as RouterParams; // <--- y la utilizamos aquí para implementarla en el params

//     useEffect(() => {
//         navigation.setOptions({
//             title: params.nombre
//         })
//     }, [])
// }


// La 3º y mejor opcion es ir a la pagina donde se encuentra el StackNavigator e
// indicar desde ahí el tipo de props que recibe cada screen.