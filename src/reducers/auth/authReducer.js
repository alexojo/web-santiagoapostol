import { types } from "../../types/types";



/* const action = {
    type: types.login
    payload: {
        name: "alex"
    }
} */


export const authReducer = ( state= {}, action ) => {

    switch ( action.type ) {

        case types.login:
            
            return {
                ...action.payload,
                logged: true
            };

        case types.logout:
        
            return {
                logged: false
            };
    
        default:
            break;
    
        }

}

