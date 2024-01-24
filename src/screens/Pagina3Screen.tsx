import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'

//Esta props extienden de StackScreenProps para traer las props por defecto de ahí y porder
//Utilizarlas con TS. Tambien podemos añadir más.
interface Props extends StackScreenProps<any,any>{};

export const Pagina3Screen = ( {navigation} :Props ) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>    
                Pagina3Screen
            </Text>

            <Button
                title="Regresar"
                // Nos lleva a la anterior
                onPress={ () => navigation.pop()}
            />

            <Button
                title="Ir a Home"
                // Nos lleva al principio
                onPress={ () => navigation.popToTop()}
            />
        </View>
    )
}