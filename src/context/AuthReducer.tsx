import { AuthState } from "./AuthContext";

type AuthAction = 
    | { type: 'signIn' }
    | { type: 'logOut'}
    | { type: 'changeName', payload: string}
    | { type: 'changeFavIcon', payload: string}; // El payload es el que suele contener el dato

// Declaramos que esta funcion tiene que devolver un dato de tipo AuthState
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                userName: 'no-username-yet'
            }
            
        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
                favoriteIcon: undefined
            }
        
        case 'changeName':
            return {
                ...state,
                userName: action.payload
            }

        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            }
    
        default:
            return state;
    }
}