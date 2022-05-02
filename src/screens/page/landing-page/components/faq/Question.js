import React, {useState} from 'react'

export const Question = ( { pregunta, respuesta } ) => {

    const [box1, setBox1] = useState(false);

    return (
        <div  className="">

            <div class={`group shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]  rounded p-4 md:p-4  hover:cursor-pointer mb-5
            
                ${box1 ? 'bg-sky-700 ': 'bg-slate-50 hover:bg-sky-700 duration-500' }`}
                
                onClick={() => setBox1(!box1)}>
    
                <div className="flex items-center justify-between">
                    <div >
                        <h2 class={`group-hover:text-white text-base md:text-xl font-semibold leading-none select-none ${box1 ? ' text-white':'text-gray-800'}`}>
                            {pregunta}
                        </h2>
                    </div>
    
                    <button  className="focus:outline-none cursor-pointer">
                        {box1 ? (
                            <i class={`fa-solid fa-caret-up fa-2x group-hover:text-white ${box1 ? 'text-white':'text-gray-800'}`}></i>
                        ) : (
                            <i class={`fa-solid fa-caret-down fa-2x group-hover:text-white ${box1 ? 'text-white':'text-gray-800'}`}></i>
                        )}
                    </button>
                </div>

            </div>
    
            {box1 && (
                <ul className=" px-4 mb-8 delay-">
                    <li>
                        <p className="text-justify text-base md:text-xl leading-normal text-gray-600 mt-4 ">
                            {respuesta}
                        </p>
                    </li>
                </ul>
            )}
        </div>
        
  )
}
