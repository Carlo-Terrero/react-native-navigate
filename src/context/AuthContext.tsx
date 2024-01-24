import { createContext, useReducer } from "react";
import { authReducer } from "./AuthReducer";

//En la screen de settings consumimos el context

// Definir que información se va a utilizar
export interface AuthState {
    isLoggedIn      : boolean;
    userName?       : string;
    favoriteIcon?   : string;
}

// Estado inicial <exportarlo es opcional>
const authInitialState: AuthState = {
    isLoggedIn: false,
    userName: undefined,
    favoriteIcon: undefined,
}

// Preparación del contenido del context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    changeName: (newName: string) => void;
    changeFavoriteIcon: (iconName: string) => void;
}

// Creacion del contexto, el cual utilizaremos a la hora de declarar que tipo de contexto vamos a usar
export const AuthContext = createContext({} as AuthContextProps);

// Proveedor del estado
// export const AuthProvider = ({ children } : { children: JSX.Element[]}) => { // Tipado
export const AuthProvider = ({ children } : any) => { // Sin tipado

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({type: 'signIn'})
    }

    const logOut = () => {
        dispatch({type: 'logOut'})
    }

    const changeName = (newName: string) => {
        dispatch({type: 'changeName', payload: newName})
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({type: 'changeFavIcon', payload: iconName})
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logOut,
            changeName,
            changeFavoriteIcon
        }}>
            { children}
        </AuthContext.Provider>
    )
}