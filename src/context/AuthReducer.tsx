import { AuthState } from "./AuthContext";

type AuthAction = { type: 'signIn' };

// Declaramos que esta funcion tiene que devolver un dato de tipo AuthState
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                userName: 'no-username-yet'
            }
    
        default:
            return state;
    }
}