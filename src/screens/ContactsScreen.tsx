import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

    // De esta manera de desestructura un obj dentro de una desustructuracion
    // const { signIn, authState: {isLoggedIn} } = useContext(AuthContext);
    const { signIn, authState } = useContext(AuthContext);

    return (
        <View style={ styles.globalMargin}>
            <Text style={ styles.title}>
                ContactsScreen
            </Text>    

            {/* Aqui se aplica el objeto desestructurado */}
            {/* { !isLoggedIn && <Button title="SignIn" onPress={signIn} /> } */}
            { !authState.isLoggedIn && <Button title="SignIn" onPress={signIn} /> }
            
        </View>
    )
}
