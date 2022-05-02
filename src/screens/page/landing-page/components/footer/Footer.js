import React from 'react'

export const Footer = () => {
  return (
    <div>

    <div className="w-full pt-4 bg-sky-600">

        <div className="container mx-auto" >
            <div className=" text-center sm:text-right">
                <p className="text-white tracking-wide">Atención 10:00 AM a 02:00 PM, Lunes a Viernes</p>
            </div>
            <div className="border-2 rounded-lg grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-center mt-3 mx-4 sm:mx-0 py-4">
                <div class ="flex flex-row justify-center items-center text-white">
                    <i className="fa-solid fa-phone fa-lg"></i>
                    <p className="ml-3 ">(+51) 084-242443</p>
                </div>
                <div className="flex flex-row justify-center items-center text-white">
                    <i className="fa-solid fa-envelope fa-lg"></i>
                    <p className="ml-3 ">santiagoapostol@gmail.com</p>
                </div>
                <div className="flex flex-row justify-center items-center text-white">
                    <i className="fa-solid fa-location-dot fa-lg"></i>
                    <p className="ml-3 ">Plaza Santiago N°517</p>
                </div>
            </div>
        </div>

        <div className="container mx-auto flex flex-col sm:flex-row  justify-between py-4 ">
                <div>
                    <p className="text-white text-center font-semibold mx-4 sm:mx-0">Copyright © 2022 Desarrollado por Alexander Monzon. Todos los derechos reservados</p>    
                </div>
                <div className="grid grid-cols-3 gap-5 justify-center items-center text-center text-white pt-3 sm:pt-0 mx-40 sm:mx-0">
                    <a href='https://www.youtube.com/' className=" hover:text-gray-300"><i className="fa-brands fa-github fa-xl"></i></a>
                    <a href='https://www.youtube.com/' className=" hover:text-gray-300"><i className="fa-brands fa-facebook fa-xl"></i></a>
                    <a href='https://www.youtube.com/' className=" hover:text-gray-300"><i className="fa-solid fa-envelope fa-xl"></i></a>
                </div>
            </div>
        </div>
    </div>
    
  )
}
