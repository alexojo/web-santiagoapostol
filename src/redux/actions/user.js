import { fetchSinToken } from "../../helpers/fetch";



export const RegisterUser = async ( formValues ) => {
    
    try {
        const resp = await fetchSinToken( 'auth/new-user', formValues , 'POST' );
        const body = await resp.json();
        return body
    } catch (error) {
        return error
    }
    
}