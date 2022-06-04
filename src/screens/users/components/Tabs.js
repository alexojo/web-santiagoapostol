import React, { useEffect, useState } from 'react'
import { Input, InputSearch } from './Input';

export const Tabs = ({ tabs}) => {

    console.log( tabs )

    const [Active, setActive] = useState([])
    
    useEffect(() => {
        let Aux = new Array(tabs.length).fill( false);
        Aux[ 0 ] = true;
        setActive( Aux) 
    }, [])
    


    const Activo = ( index ) => {
        let Aux = new Array(tabs.length).fill( false);
        Aux[ index ] = true;
        setActive( Aux) 
        console.log( Aux )
    }

    return (
        <>
            <div class="mb-4 border-b-2 border-gray-30 dark:border-gray-700" >
                <ul class="nav nav-tabs flex flex-wrap  text-sm font-medium text-center "  id="tabs-tab3" role="tablist">
                    {
                        tabs.map( (tab, index) => (

                            <li class="relative group nav-item cursor-pointer pt-0" role="presentation" data-bs-toggle="pill" data-bs-target= { tab.target } onClick={ () => Activo( index )}>
                                
                                <div className='nav-link  h-full' >
                                    <a class={` font-medium leading-none text-sm flex items-center p-3 mb-2 mx-2 border-transparent  hover:bg-gray-200 rounded-lg transition duration-700 ease-in-out select-none ${ Active[index] ? 'text-sky-600' : 'text-gray-400'}`}
                                    
                                    > {tab.icon} { tab.text }</a>

                                    { Active[index] && <div className='bg-sky-600 h-[4px] w-full absolute left-0 -bottom-[2px] rounded-t-sm transition duration-300 ease-in-out'></div>}

                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>



            <div class="tab-content" >
                    {
                        tabs.map( (tab, index) => (

                            <div class={`tab-pane fade show ${ Active[index] ? 'active' : ''}`} id={ tab.target.slice(1) }  >
                                { tab.component }
                            </div>
                        ))
                    }
            </div>

            


    

        </>
    )
}
