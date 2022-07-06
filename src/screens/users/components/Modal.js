import { CheckCircleIcon, ClipboardCheckIcon, ExclamationCircleIcon, XCircleIcon } from '@heroicons/react/outline'
import React, { useState, useEffect } from 'react'

const cssIcon= "w-16 stroke-1";
const typeModals = [
    {
        type: "success_register",
        icon: <ClipboardCheckIcon className={`${cssIcon} text-emerald-500`}/>,
    },
    {
        type: "error",
        icon: <ExclamationCircleIcon className={`${cssIcon} text-rose-600`}/>
    }
]

export const Modal = ({id, title="", subtitle="", show=false, setShow, typeModal="success_register" }) => {

    const [typeStyle, setTypeStyle] = useState(0);

    useEffect(() => {
        
        const index = typeModals.findIndex( item => item.type === typeModal );

        if(index === -1) {
            setTypeStyle(0)
        } else {
            setTypeStyle(index)
        }


    }, [typeModal])


    return (

        <>
            <div class={`modal fixed z-40 w-full h-full inset-0 bg-gray-900 bg-opacity-60 ${ show ? "" : "hidden"}`}
                 onClick={() => setShow(false)}
                 onKeyDown={() => setShow(false)}
                >
                
            </div>
            <div class={`fixed w-1/2 lg:w-96  z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md space-y-5 drop-shadow-lg select-none ${ show ? "" : "hidden"}`}
                 >
                
                <div className="p-6 text-center flex flex-col justify-center items-center">


                    <div className='px-2 flex flex-col justify-center items-center'>
                        
                        {typeModals[typeStyle].icon}  


                        <p className="mt-3 text-lg font-bold leading-normal text-center text-gray-800">{ title }</p>
                        <p className=" text-sm leading-none text-center text-gray-400 mt-2 mb-5">{ subtitle }</p>

                    </div>

                    <button className="text-sm font-medium leading-none mt-3 text-white px-8 w-full py-4 bg-sky-600 rounded-md shadow-gray-600/50 shadow-sm
                                    hover:bg-sky-700 transform duration-300 ease-in-out focus:outline-none active:shadow-lg focus:shadow-lg"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onClick={() => setShow(false)}
                            autofocus="true"
                            >
                            Continuar
                    </button>


                </div>

            </div>
        </>
       
    )
}
