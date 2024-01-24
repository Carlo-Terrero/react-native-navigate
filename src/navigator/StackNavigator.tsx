import { createStackNavigator } from '@react-navigation/stack';

import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

// Este es el nombre de las rutae y el tipo de props que admitem
interface Persona {
    id: number,
    nombre: string
}

export type RootStackParams = {
    PaginaScreen1: undefined, // Se puede indicar como null, pero de esta otra manera se deja un poco de flexibilidad
    PaginaScreen2: undefined,
    PaginaScreen3: undefined,
    // PersonaScreen: {id: number, nombre: string}, // las dos son validas
    PersonaScreen: Persona,
}

// Implementamos el tipo que hemos creado en el stack
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {


    return (
        <Stack.Navigator
            // initialRouteName='Pagina3Screen' //De esta manera indicamos la primera screen que se muestra sin cambiar el orden en su declaración posterior
            screenOptions={{
                headerStyle: { //Styliza la cabecera
                    elevation: 0, //Elimina la linea que separa la cabecera del cuerpo (android)
                    shadowColor: 'transparent', //Elimina la linea que separa la cabecera del cuerpo (IOS)
                    // backgroundColor: 'red', // color del fondo
                },
                cardStyle: { //Estilos del fondo de las screens
                    backgroundColor: 'white'
                },
            }}
        >
            <Stack.Screen name="Pagina1Screen" options={{ title:"Página 1" }} component={Pagina1Screen} />
            <Stack.Screen name="Pagina2Screen" options={{ title:"Página 2" }} component={Pagina2Screen} />
            <Stack.Screen name="Pagina3Screen" options={{ title:"Página 3" }} component={Pagina3Screen} />
            <Stack.Screen name="PersonaScreen" options={{ title:"Persona"  }} component={PersonaScreen} />
        </Stack.Navigator>
    );
}

// Esta es otra forma de poner los botones en la cabecera, de esta manera se aplica para todos.
{/* <Stack.Navigator
    // initialRouteName='Pagina3Screen' //De esta manera indicamos la primera screen que se muestra sin cambiar el orden en su declaración posterior
    screenOptions={{
        headerStyle: { //Styliza la cabecera
            elevation: 0, //Elimina la linea que separa la cabecera del cuerpo (android)
            shadowColor: 'transparent', //Elimina la linea que separa la cabecera del cuerpo (IOS)
            // backgroundColor: 'red', // color del fondo
        },
        cardStyle: { //Estilos del fondo de las screens
            backgroundColor: 'white'
        },
        headerRight: () => (
            <Button
                onPress={() => console.log('This is a button!')}
                title="Info"
                color="red"
            />
        ),
    }}
></Stack.Navigator> */}

// Esta es otra forma de colocar un boton en la cabecera Puede ser diferente para cada uno
{/* <Stack.Screen  
    name="Pagina1Screen" 
    options={{ 
        title:"Página 1",
        headerRight: () => (
            <Button
                onPress={() => console.log('This is a button!')}
                title="Info"
                color="red"
            />
        ),
    }} 
    component={Pagina1Screen} 
/> */}