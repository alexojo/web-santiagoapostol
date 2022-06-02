import React, { useState } from 'react'

export const Tabs = ({  }) => {

    const [Active, setActive] = useState([true,false,false])
    
    const tabs = [
        {
            target: "#tabs-home3",
            text: "Option 1"
        },
        {
            target: "#tabs-profile3",
            text: "Option 2"
        },
        {
            target: "#tabs-messages3",
            text: "Option 3"
        }
    ];

    const content = [

    ]

    const Activo = ( index ) => {
        let Aux = new Array(3).fill( false);
        Aux[ index ] = true;
        setActive( Aux) 
    }

    return (
        <>
            <div class="mb-4 border-b-2 border-gray-30 dark:border-gray-700 mx-5" >
                <ul class="nav nav-tabs flex flex-wrap  text-sm font-medium text-center "  id="tabs-tab3" role="tablist">
                    {
                        tabs.map( (tab, index) => (

                            <li class="relative group nav-item cursor-pointer" role="presentation" onClick={ () => Activo( index )}>
                                <a class={`nav-link font-semibold leading-none text-sm inline-block p-3 border-transparent  hover:bg-gray-200 text-gray-400 hover:text-sky-600 uppercase transition duration-300 ease-in-out ${ Active[index] ? 'text-sky-600' : ''}`}
                                data-bs-toggle="pill" data-bs-target= { tab.target }
                                > { tab.text }</a>

                                { Active[index] && <div className='bg-sky-600 h-[4px] w-full absolute left-0 -bottom-[2px] rounded-t-sm transition duration-300 ease-in-out'></div>}
                            </li>
                        ))
                    }
                </ul>
            </div>



            <div class="tab-content mx-5" >
                <div class="tab-pane fade show active" id="tabs-home3"  >
                    Tab 1 content button version
                </div>
                <div class="tab-pane fade" id="tabs-profile3" >
                    Tab 2 content button version
                </div>
                <div class="tab-pane fade" id="tabs-messages3" >
                    Tab 3 content button version
                </div>
            </div>

            


    

        </>
    )
}
