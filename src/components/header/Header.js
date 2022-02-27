import React from 'react'

export const Header = () => {

    return (
        <>
            <nav className="w-full border-b-2 bg-white">
                <div className="py-5 md:py-0 container mx-auto flex justify-center items-center md:justify-between">
                    <div aria-label="Home. logo" role="img">
                        <img className="w-12 justify-center hover:translate-y-1 hover:scale-105 duration-300" src={require('../../images/Insignia.png')} alt="logo" />
                    </div>

                    <div id="menu" className=" " >
                        <ul className=" hidden md:text-base py-10 md:flex  md:flex-row justify-center fixed md:relative 
                                        top-0 bottom-0 left-0 right-0  md:bg-transparent ">
                            <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                                <p>Inicio</p>
                            </li>
                            <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                <p>Nosotros</p>
                            </li>
                            <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                <p >Preguntas Frecuentes</p>
                            </li>
                            <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                <p>Noticias</p>
                            </li>
                            <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                <p>Contáctanos</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

        </>
  )
}
