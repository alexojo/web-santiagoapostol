import React from 'react'

export const Stat = () => {
    // 
    return (
        
        <>
            <div className="w-full py-10 lg:pt-10 lg:pb-10 bg-gray-100">
                <div className="mx-auto  container grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 duration-700">
                    

                    <div className="flex justify-center items-center w-full lg:border-r border-gray-300 hover:translate-y-1 hover:scale-105 duration-300">
                        <div>
                            <i className="w-1/2 fa-solid fa-user-pen fa-5x text-sky-600 " ></i>
                        </div>
               
                        <div className=" w-1/2 pl-5">
                            <h1 className="text-sky-600 font-bold text-2xl lg:text-5xl tracking-1px">300+</h1>
                            <h2 className="text-gray-800 text-base lg:text-lg mt-4 leading-8 tracking-wide">Estudiantes Matriculados</h2>
                        </div>
                    </div>

                    <div className="flex justify-center items-center w-full lg:border-r border-gray-300  hover:scale-105 duration-300">
                        <div>
                            <i className="w-1/2 fa-solid fa-user-graduate fa-5x text-sky-600 " ></i>
                        </div>
               
                        <div className=" w-1/2 pl-5">
                            <h1 className="text-sky-600 font-bold text-2xl lg:text-5xl tracking-1px">100+</h1>
                            <h2 className="text-gray-800 text-base lg:text-lg mt-4 leading-8 tracking-wide">Estudiantes Graduados</h2>
                        </div>
                    </div>

                    <div className="flex justify-center items-center w-full lg:border-r border-gray-300 hover:scale-105 duration-300">
                        <div>
                            <i className="w-1/2 fa-solid fa-clock fa-5x text-sky-600 " ></i>
                        </div>
               
                        <div className=" w-1/2 pl-5">
                            <h1 className="text-sky-600 font-bold text-2xl lg:text-5xl tracking-1px">28</h1>
                            <h2 className="text-gray-800 text-base lg:text-lg mt-4 leading-8 tracking-wide">Años de Experiencia</h2>
                        </div>
                    </div>

                    <div className="flex justify-center items-center w-full hover:scale-105 duration-300">
                        <div>
                            <i className="w-1/2 fa-solid fa-user-tie fa-5x text-sky-600 " ></i>
                        </div>
               
                        <div className=" w-1/2 pl-5">
                            <h1 className="text-sky-600 font-bold text-2xl lg:text-5xl tracking-1px">30+</h1>
                            <h2 className="text-gray-800 text-base lg:text-lg mt-4 leading-8 tracking-wide">Docentes Capacitados</h2>
                        </div>
                    </div>

                    

                </div>
            </div>
        </>
    )
}
