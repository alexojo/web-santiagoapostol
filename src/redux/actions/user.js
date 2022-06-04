import { fetchSinToken } from "../../helpers/fetch";



export const RegisterUser = async ( formValues ) => {
    
    const resp = await fetchSinToken( 'auth/new-user', formValues , 'POST' );
    const body = await resp.json();
    return body

}

export const GetAllUsers = async ( ) => {
    
    const resp = await fetchSinToken( 'auth/get-users' );
    const body = await resp.json();
    return body

}