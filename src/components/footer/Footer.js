import React from 'react'

export const Footer = () => {
  return (
    <div>

    <div class="w-full pt-4 bg-sky-600">

        <div class="container mx-auto" >
            <div class=" text-center sm:text-right">
                <p class="text-white tracking-wide">Atención 10:00 AM a 02:00 PM, Lunes a Viernes</p>
            </div>
            <div class="border-2 rounded-lg grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-center mt-3 mx-4 sm:mx-0 py-4">
                <div class ="flex flex-row justify-center items-center text-white">
                    <i class="fa-solid fa-phone"></i>
                    <p class="ml-3 ">(+51) 084-242443</p>
                </div>
                <div class="flex flex-row justify-center items-center text-white">
                    <i class="fa-solid fa-envelope"></i>
                    <p class="ml-3 ">santiagoapostol@gmail.com</p>
                </div>
                <div class="flex flex-row justify-center items-center text-white">
                    <i class="fa-solid fa-location-dot"></i>
                    <p class="ml-3 ">Plaza Santiago N°517</p>
                </div>
            </div>
        </div>

        <div class="container mx-auto flex flex-col sm:flex-row  justify-between py-4 ">
                <div>
                    <p class="text-white text-center font-semibold mx-4 sm:mx-0">Copyright © 2022 Desarrollado por Alexander Monzon. Todos los derechos reservados</p>    
                </div>
                <div class="grid grid-cols-3 gap-5 justify-center items-center text-center text-white pt-3 sm:pt-0 mx-40 sm:mx-0">
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-solid fa-envelope"></i>
                </div>
            </div>
        </div>
    </div>
    
  )
}
