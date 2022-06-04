import React from 'react'

export const TeachersScreen = () => {
    return (
        <div className='pl-60 h-screen flex overflow-auto bg-gray-100'>

        <div className='w-full flex flex-col items-start'>
            {/* titulo */}
            <div className="w-full sm:px-6 mb-7 mt-5 sm:flex items-center justify-between">
                <div>
                    <p className="text-2xl font-bold leading-normal text-gray-800">Docentes</p>
                    <p className="text-sm font-normal leading-normal text-gray-500">Hola Dante, bienvenido al panel de Santiago Apóstol</p>
                </div>
                
                
                <div className='flex gap-4'>

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
            <div className="mb-4 sm:px-6">
                
                <div className="relative flex">
                    
                    <i className="fa-solid fa-magnifying-glass absolute z-20 cursor-pointer pt-2.5 left-4 text-gray-400"></i>

                    <input className="form-control block w-full px-10 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none"
                            type="text"
                            placeholder='Buscar'
                    />
                </div>
            </div>
            {/* tabla */}
            <div className="w-full sm:px-6 overflow-y-auto flex flex-wrap gap-4">
           
                <div className='mb-2 grow shrink basis-60'>
                    <div className='flex flex-none items-center bg-white shadow rounded-lg pl-4 pr-10 py-5'>
                        <div className="w-14 h-14">
                            <img className="shadow-md w-full h-full rounded-full object-cover" alt="" src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                        <div className='pl-4'>
                            <p className='font-bold leading-none text-base text-gray-800'>Alex Tapia Creo</p>
                            <p className='font-medium leading-none text-xs text-gray-400 mt-2'>Psicólogo</p>
                            <p className='font-semibold leading-none text-xs text-sky-600 mt-2'>Ver perfil</p>
                        </div>
                    </div>
                </div>
                <div className='mb-2 grow shrink basis-60'>

                    <div className='flex items-center bg-white shadow rounded-lg pl-4 pr-10 py-5'>
                        <div className="w-14 h-14">
                            <img className="shadow-md w-full h-full rounded-full object-cover" alt="" src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                        <div className='pl-4'>
                            <p className='font-bold leading-none text-base text-gray-800'>Alex Tapia Creo</p>
                            <p className='font-medium leading-none text-xs text-gray-400 mt-2'>Psicólogo</p>
                            <p className='font-semibold leading-none text-xs text-sky-600 mt-2'>Ver perfil</p>
                        </div>
                    </div>
                </div>
                <div className='mb-2 grow shrink basis-60'>
                    <div className='flex  items-center bg-white shadow rounded-lg pl-4 pr-10 py-5'>
                        <div className="w-14 h-14">
                            <img className="shadow-md w-full h-full rounded-full object-cover" alt="" src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                        <div className='pl-4'>
                            <p className='font-bold leading-none text-base text-gray-800'>Alex Tapia Creo</p>
                            <p className='font-medium leading-none text-xs text-gray-400 mt-2'>Psicólogo</p>
                            <p className='font-semibold leading-none text-xs text-sky-600 mt-2'>Ver perfil</p>
                        </div>
                    </div>
                </div>
                <div className='mb-2 grow shrink basis-60'>
                    <div className='flex  items-center bg-white shadow rounded-lg pl-4 pr-10 py-5'>
                        <div className="w-14 h-14">
                            <img className="shadow-md w-full h-full rounded-full object-cover" alt="" src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                        <div className='pl-4'>
                            <p className='font-bold leading-none text-base text-gray-800'>Alex Tapia Creo</p>
                            <p className='font-medium leading-none text-xs text-gray-400 mt-2'>Psicólogo</p>
                            <p className='font-semibold leading-none text-xs text-sky-600 mt-2'>Ver perfil</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        {/* informacion personal */}
        <div className='w-96 bg-white mr-6  my-5 shadow rounded-lg flex flex-col justify-between '>

            
            <div className='overflow-auto'>
                <div className='mx-4 mt-5 mb-10 h-20 py-1 shadow-2xl shadow-slate-300/70 border-[1px] border-slate-100 rounded-md '>
                    <p className='ml-4 font-semibold text-xs text-gray-600'>Asistencia</p>
                </div>
                <div className='px-4 mt-4 '>
                    <div className='flex flex-row justify-between text-gray-800 text-sm'>
                        <p className='font-semibold '>ID: 123456</p>
                        <i className='fa-solid fa-graduation-cap'></i>
                    </div>

                    <div className='flex flex-col items-center mt-4'>
                        
                        <div className="w-28 h-28 shadow-lg bord border-[5px] border-white shadow-gray-300 rounded-full">
                            <img className="w-full h-full rounded-full object-cover" alt="" src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                        <p className='font-bold leading-none text-base text-sky-600 mt-4'>Alex Tapia Creo</p>
                        <p className='font-medium leading-none text-xs text-sky-600 mt-2'>5° Primaria A</p>


                        <div className='flex flex-row gap-3 text-sky-600 mt-2'>
                            <div className='bg-sky-100 rounded-full h-8 w-8 flex items-center justify-center'>
                                <i className="fa-solid fa-phone  fa-sm"/>
                            </div>
                            <div className='bg-sky-100 rounded-full h-8 w-8 flex items-center justify-center'>
                                <i className="fa-solid fa-envelope  fa-sm"/>
                            </div>
                        </div>
                    </div>

                    <div className='text-sm text-gray-800 mt-7 '>
                        <p className='font-bold mb-1 '>Acerca de</p>
                        <p className='text-justify text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <div className='flex flex-row justify-between text-sm text-gray-800 mt-7'>
                        <div className='flex flex-col gap-3'> 
                            <div>
                                <p className='font-bold'>Edad</p>
                                <p className='text-xs mt-1'>15</p>
                            </div>
                            <div>
                                <p className='font-bold'>Cumpleaños</p>
                                <p className='text-xs mt-1'>02 Junio 2001</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'> 
                            <div>
                                <p className='font-bold'>Género</p>
                                <p className='text-xs mt-1'>Masculino</p>
                            </div>
                            <div>
                                <p className='font-bold'>Dirección</p>
                                <p className='text-xs mt-1'>Urb Amauta B-14</p>
                            </div>
                        </div>
                    </div>

                    <div className='text-sm text-gray-800 mt-7'>
                        <p className='font-bold'>Estudiantes del mismo salón</p>

                        <div className="flex flex-grow items-center mt-2">
                            <img className="shadow-md w-8 h-8 rounded-full border-2 border-white" alt="" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
                            <img className="shadow-md w-8 h-8 rounded-full border-2 border-white -ml-2" alt="" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
                            <img className="shadow-md w-8 h-8 rounded-full border-2 border-white -ml-2" alt="" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
                            <img className="shadow-md w-8 h-8 rounded-full border-2 border-white -ml-2" alt="" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
                            <img className="shadow-md w-8 h-8 rounded-full border-2 border-white -ml-2" alt="" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
                            <img className="shadow-md w-8 h-8 rounded-full border-2 border-white -ml-2" alt="" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
                            
                            <p className='ml-2 text-xs mt-1 text-sky-600'>+12 más</p>
                        </div>
                    </div>

                </div>
            </div>

            
            <div className='mt-5 px-4 border-t-[1px] my-2 flex items-center justify-center'>   
                <button 
                className='my-3 shadow-lg bg-slate-200 shadow-gray-300/40 text-xs font-semibold text-sky-600 py-2 px-8 rounded-lg align-middle hover:text-sky-700 hover:bg-slate-300 transition duration-300 ease-in-out'
                data-mdb-ripple="true" data-mdb-ripple-color="info">
                    
                <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>
                Más info
                 
                </button>
                 
            </div>
        </div>



    </div>
    )
}