import React, { useReducer } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './reducers/auth/authContext';
import { authReducer } from './reducers/auth/authReducer';

AOS.init({
  
    once: true, // whether animation should happen only once - while scrolling down
    
});

const init = () =>{

  return JSON.parse( localStorage.getItem('user') ) || {logged:false}

}


export const App = () => {

  const [ user, dispatch ] = useReducer( authReducer, {}, init )

    return (
        <AuthContext.Provider value={{
          user,
          dispatch

        }}>
            <AppRouter />

        </AuthContext.Provider>


    )
}
