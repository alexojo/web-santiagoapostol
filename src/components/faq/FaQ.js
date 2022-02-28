import React from 'react'
import { Question } from './Question';


export const FaQ = () => {
    return (

        <div class='bg-sky-50'>
            <div class="absolute w-full h-40 md:h-60 object-center object-fit z-0 bg-sky-600"></div>
            <div class="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20  pb-10">

                <div class=" md:py-16 py-10">
                    <h1 class="lg:text-6xl md:text-5xl text-3xl font-bold leading-10 text-white">
                        Preguntas Frecuentes
                    </h1>
                </div>

                <div class="container mx-auto ">
                    
                    <Question/>

                    <Question/>

                    <Question/>

                    <Question/>
                    
                    
                </div>
            </div>
        </div>

  )
}
