import React from 'react'
import { Preguntas } from './Preguntas';
import { Question } from './Question';


export const FaQ = () => {

    
    return (

        <div className='bg-sky-50'>
            <div className="absolute w-full h-40 md:h-60 object-center object-fit z-0 bg-sky-600"></div>
            <div className="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20  pb-10">

                <div data-aos="zoom-out" data-aos-duration="1000" className=" md:py-16 py-10">
                    <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold leading-10 text-white">
                        Preguntas Frecuentes
                    </h1>
                </div>

                <div className="container mx-auto mt-4  ">
                    
                    {
                        Preguntas.map( pregunta => (
                            <Question
                                
                                pregunta = {pregunta.pregunta}
                                respuesta = {pregunta.respuesta}
                            />
                        ))
                    }
                  
                </div>
                <button></button>
            </div>
        </div>

  )
}
