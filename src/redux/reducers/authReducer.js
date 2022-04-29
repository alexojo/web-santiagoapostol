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

        /* case types.login:
            
            return {
                ...action.payload,
                logged: true
            };

        case types.logout:
        
            return {
                logged: false
            }; */
    
        default:
            return state;
    
        }

}