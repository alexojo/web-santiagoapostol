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

export const GetUserByDni = async ( dni ) => {
        
    const resp = await fetchSinToken( `auth/getUserByDni/${dni}` );
    const body = await resp.json();
    return body
    
}

export const GetName = async ( dni ) => {

    const resp = await fetch( `https://dniruc.apisperu.com/api/v1/dni/${dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IjE3MTkxNEB1bnNhYWMuZWR1LnBlIn0.k7g6kzW_9q6rw98FnMgzSHmdfwrXMy6R_cbMcdyXHR4`  );
    const body = await resp.json();
    return body

}    