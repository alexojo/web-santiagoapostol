import React from 'react'
import { New } from './New'
import { Noticias } from './Noticias'

export const News = () => {

    return (
    <div class="py-10 container mx-auto  ">
        <div class="flex lg:flex-row justify-between flex-col lg:gap-8 gap-5">
            <div>
                <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold 2xl:leading-10 leading-0 lg:text-left text-center text-sky-600">
                   Noticias Santiaguinas
                </h1>
                <h2 tabIndex={0} className="text-base leading-normal lg:text-left text-center text-gray-600 mt-5">
                    Entérate de todas las actividades y eventos de la Institución.
                </h2>
            </div>
            <div class="flex justify-center items-center">
                    <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                    bg-sky-600 transition duration-150 ease-in-out hover:bg-blue-400 md:text-xl md:font-bold  
                    rounded text-white px-4 sm:px-10 border border-blue-500 py-2 sm:py-4 text-sm">Ver más</button>

                </div>
        </div>

        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center mt-4 px-4 lg:px-0 pt-5">
            {
                Noticias.map( noticia => (
                    <New
                        imagen = {noticia.imagen}
                        mes = {noticia.mes}
                        dia = {noticia.dia}
                        evento = {noticia.evento}
                        descripcion = {noticia.descripcion}
                    />
                ))
            }
        </div>



    </div>
  )
}
