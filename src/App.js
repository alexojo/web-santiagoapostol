import React, { useReducer } from 'react'
import { Provider } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { store } from './redux/store/store';
import { AppRouter } from './routers/AppRouter';



AOS.init({
  
    once: true, // whether animation should happen only once - while scrolling down
});


export const App = () => {

    return (  
        <Provider store= { store }>

            <AppRouter />

        </Provider>



    )
}
