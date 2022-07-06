import React, { useEffect, useState } from 'react'

const typeButtons = [
    {
        type: 'primary',
        css:'bg-sky-600 text-white font-medium shadow-sm hover:bg-sky-700',
        rippleColor:'light'
    },
    {
        type: 'secondary',
        css:'bg-slate-200 text-gray-700 font-semibold shadow-sm hover:text-sky-700 hover:bg-slate-300',
        rippleColor:'info'
    },
    {
        type: 'stroked',
        css:'border-slate-200 border-2 text-gray-700 font-semibold hover:text-sky-600 hover:bg-slate-100',
        rippleColor:'light'
    },
    {
        type: 'gray',
        css:'bg-gray-100 text-gray-600 border hover:bg-gray-200 focus:bg-gray-200',
        rippleColor:'info'
    }
]

export const Button = ({label="", icon=null, handleClick, typeButton="primary", style="", modal="", type="button" }) => {

    const [typeStyle, setTypeStyle] = useState(0);
    
    useEffect(() => {
        
        const index = typeButtons.findIndex( item => item.type === typeButton )
        setTypeStyle(index)

    }, [typeButton])
    

    return(
        <button
            className={`${ typeButtons[typeStyle].css }
                        px-8 py-2 shadow-gray-600/50 text-xs rounded-md flex items-center justify-center select-none transition duration-300 ease-in-out active:shadow-lg focus:outline-none ${ style }
                    `}
            data-mdb-ripple="true" 
            data-mdb-ripple-color = { typeButtons[typeStyle].rippleColor }
            onClick={ handleClick }
            data-bs-toggle={modal!="" ? "modal" : ""} 
            data-bs-target={ modal }
            type={type} 
            >

            { icon && <div className={`h-4 w-4  ${ label!=="" ? 'mr-2' : '' }`}> {icon} </div> }
            {label}

        </button>

    )

}

