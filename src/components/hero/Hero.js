import React from 'react'

export const Hero = () => {

    return (
    <>
        <div className=" bg-cover md:bg-center bg-bg-img md:bg-bg-img-md">
            <div className="container mx-auto flex flex-col items-center md:items-start py-12 md:py-32">
                
                <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center md:items-start flex-col  mb-5 sm:mb-10">

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-left  text-gray-800 font-black leading-7 md:leading-10">
                        Institución Educativa
                        <br/>
                        <span className=" text-sky-600"> Santiago Apostol</span>
                    </h1>
                    <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-800 font-bold text-center md:text-left text-sm sm:text-lg">
                        "Más de 25 años formando personas de calidad"</p>
                </div>
                <div className="flex justify-center items-center">
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500
                    bg-sky-600 transition duration-150 ease-in-out hover:bg-sky-400 lg:text-xl lg:font-bold  
                    rounded text-white px-4 sm:px-10 border border-sky-500 py-2 sm:py-4 text-sm">Matricúlame</button>

                </div>
            </div>
        </div>

    </>
  )
}
