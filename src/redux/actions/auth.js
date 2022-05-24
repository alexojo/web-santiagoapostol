import { fetchConToken, fetchSinToken } from "../../helpers/fetch"
import { types } from "../types/types";


export const startLogin = ( dni, password ) => {
    return async( dispatch ) => {
        
        const resp = await fetchSinToken( 'auth', {dni, password}, 'POST' );
        const body = await resp.json();
        
        if( body.ok ) {
            localStorage.setItem('token',body.token )
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                nombre: body.nombre
            }) )
        } else{
            console.log( body )
        }

    }
}

export const startRegister = ( formValues ) => {
    return async( dispatch ) => {
        console.log( formValues )
        const resp = await fetchSinToken( 'auth/new-user', formValues , 'POST' );
        const body = await resp.json();
        
        if( body.ok ) {
            localStorage.setItem('token',body.token )
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                nombre: body.nombre
            }) )
        } else{
            console.log( body )
        }

    }    
}

export const startChecking = () => {

    return async( dispatch ) => {

        const resp = await fetchConToken( 'auth/renew-user' );
        const body = await resp.json();
        
        if( body.ok ) {
            localStorage.setItem('token',body.token )
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else{
            
            dispatch( checkingFinish() )

        }

    }
}

const checkingFinish = () => ({
    type: types.authCheckingFinish
})

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
})

export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );


    }
}

const logout = () => ({
    type: types.authLogout
})