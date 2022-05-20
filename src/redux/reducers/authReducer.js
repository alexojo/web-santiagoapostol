import { types } from "../types/types";

/* const action = {
    type: types.login
    payload: {
        name: "alex"
    }
} */

const initialState = {
    checking: true, // veririficar si la BD aun sigue analizando el input
    // uid: null,
    // name: null
}

export const authReducer = ( state= initialState, action ) => {

    switch ( action.type ) {

        case types.authLogin:
            return{
                ...state,
                ...action.payload,
                checking: false
            }

        case types.authCheckingFinish:
            return{
                ...state,
                checking: false
            }
        
        case types.authLogout:
            return{
                checking: false
            }
    
        default:
            return state;
    
        }

}