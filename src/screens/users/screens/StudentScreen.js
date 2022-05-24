import React, { useState } from 'react'

export const StudentScreen = () => {

    const [Menu, setMenu] = useState("INFORMACIÓN");

    let loginButton;
    if (Menu === "INFORMACIÓN") {
    loginButton = 
        <div>

        </div>

    } else {
    loginButton = 
        <div>
            
        </div>
    }


    return (
        <div className='pl-60 h-screen flex flex-col items-start overflow-auto bg-gray-100'>

            {/* titulo */}
            <div className="w-full sm:px-6 mb-7 mt-5 sm:flex items-center justify-between">
                <div>
                    <p className="text-2xl font-bold leading-normal text-gray-800">Datos de Estudiante</p>
                    <p className="text-sm font-normal leading-normal text-gray-500">Hola Dante, bienvenido al panel de Santiago Apóstol</p>
                </div>
                
                
                <div className='flex gap-4'>
                    <a className="bg-sky-600 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" 
                        data-bs-toggle="collapse" 
                        href="#collapseExample" 
                        
                        aria-controls="collapseExample">
                        <i className="fa-solid fa-sliders mr-2"></i>
                        Filtrar
                        
                    </a>

                    <a className="bg-sky-600 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" 
                        data-bs-toggle="collapse" 
                        href="#collapseExample" 
                        
                        aria-controls="collapseExample">
                        <i className="fa-solid fa-plus mr-2"></i>
                        Agregar
                        
                    </a>

                </div>
            </div>
            {/* formulario */}
            <div className="collapse w-full sm:px-6 mt-2 -translate-y-5" id="collapseExample">

                <div className= " px-4 md:px-10 py-4  rounded-lg shadow bg-white">
                    <div className="text-sm font-normal leading-normal text-gray-400">
                        Complete el siguiente formulario para agregar una nueva sección
                    </div>
                    <form >
                        <div className='flex flex-wrap just gap-4 mt-4'>

                            <div className="mb-2 grow shrink basis-36">    
                                <label className="block text-sm font-medium text-gray-700">Price</label>
                                <input                                                
                                    className="form-control mt-1 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none"
                                    type="text"
                                    placeholder="1"
                                    name="loginEmail"    
                                />
                            </div>
                            
                            <div className="mb-2 grow shrink basis-36">    
                                <label className="block text-sm font-medium text-gray-700">Price</label>
                                <input                                                
                                    className="form-control mt-1 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none"
                                    type="text"
                                    placeholder="1"
                                    name="loginEmail"    
                                />
                            </div>
                            
                            
                            
                        </div>

                        <div className="text-center pb-1">
                            <button
                            className="bg-sky-600 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-1/6 mb-3"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"

                            
                            >
                            Ingresar
                            </button>
                        </div>
                                    
                                </form>
                </div>
            

            </div>
            {/* buscador */}
                
            <div className='flex mb-3 w-full sm:px-6 mt-2'>
                
                <button className='font-semibold leading-none text-sm text-gray-400 hover:text-sky-600 border-b-2 hover:border-sky-600 uppercase px-5 cursor-pointer py-3 select-none '
                        onClick={() => setMenu("INFORMACIÓN")}
                >CURSOS </button>
                
                <button className='font-semibold leading-none text-sm text-gray-400 hover:text-sky-600 border-b-2 hover:border-sky-600 uppercase px-5 cursor-pointer py-3 select-none'
                        onClick={() => setMenu("GUARDAR")}
                >ASISTENCIA</button>
                <div className='border-b-2 w-full'></div>
            </div>




        </div>
    )
}
