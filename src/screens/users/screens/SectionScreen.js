import React from 'react'

export const SectionScreen = () => {
    return (
        <div className='pl-60 h-screen flex overflow-auto bg-gray-100'>

            <div className='w-full flex flex-col items-start'>
                {/* titulo */}
                <div className="w-full sm:px-6 mb-7 mt-5 sm:flex items-center justify-between">
                    <div>
                        <p className="text-2xl font-bold leading-normal text-gray-800">1° Primaria 'A'</p>
                        <p className="text-sm font-normal leading-normal text-gray-500">Hola Dante, bienvenido al panel de Santiago Apóstol</p>
                    </div>
                    
                    
                    <div className='flex gap-4'>

                        <a className="bg-sky-600 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" 
                            data-bs-toggle="collapse" 
                            href="#collapseExample" 
                            
                            aria-controls="collapseExample">
                            <i class="fa-solid fa-pencil mr-2"></i>
                            Editar
                            
                        </a>

                    </div>
                </div>
                {/* formulario */}
                <div className="collapse w-full sm:px-6 mt-2 -translate-y-5" id="collapseExample">
    
                    <div class= " px-4 md:px-10 py-4  rounded-lg shadow bg-white">
                        <div class="text-sm font-normal leading-normal text-gray-400">
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
                        
                        <i class="fa-solid fa-magnifying-glass absolute z-20 cursor-pointer pt-2.5 left-4 text-gray-400"></i>

                        <input className="form-control block w-full px-10 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none"
                                type="text"
                                placeholder='Buscar'
                        />
                    </div>
                </div>
                {/* tabla */}
                <div className="w-full sm:px-6 overflow-y-auto">
            
                    <div className="bg-white shadow px-4 pt-4  pb-5  rounded-lg">
                        <table className="w-full whitespace-nowrap">
                            <thead clas>
                                <tr className="h-10 w-full text-sm leading-none text-gray-800">
                                    <th className="font-bold text-left pl-7">Nombre</th>
                                    <th className="font-bold text-left pl-2">ID</th>
                                    <th className="font-bold text-left pl-7">Clase</th>
                                    <th className="font-bold text-left pl-7">Edad</th>
                                    <th className="font-bold text-left pl-7">Género</th>
                                    <th className="font-bold text-left pl-7">Contacto</th>
                                </tr>
                            </thead>
                            <tbody className="w-full">
                                <tr className="h-16 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                    

                                    <td className="pl-7 cursor-pointer">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10">
                                                <img className="shadow-md w-full h-full rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
                                            </div>
                                            <div className="pl-2">
                                                <p className="font-medium">Adrian Gonzáles Carpio</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="pl-2">
                                        <p className="font-normal">76222661</p>

                                    </td>
                                    <td className="pl-7">
                                        <p className="font-normal">5° Primaria 'A'</p>
                                    </td>
                                    <td className="pl-7">
                                        <p className="font-normal">15</p>
                                    </td>
                                    <td className="pl-7">
                                        <p className="font-normal">Masculino</p>
                                    </td>

                                    
    
                                    <td className="pl-7">
                                        <div className='flex flex-row gap-3 text-sky-600'>
                                            <div className='bg-sky-100 rounded-full h-8 w-8 flex items-center justify-center'>
                                                <i class="fa-solid fa-phone  fa-sm"/>
                                            </div>
                                            <div className='bg-sky-100 rounded-full h-8 w-8 flex items-center justify-center'>
                                                <i class="fa-solid fa-envelope  fa-sm"/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-16 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                    

                                    <td className="pl-7 cursor-pointer">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10">
                                                <img className="shadow-md w-full h-full rounded-full object-cover" src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                            </div>
                                            <div className="pl-2">
                                                <p className="font-medium">Alex Tapia Creo</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="pl-2">
                                        <p className="font-normal">76222661</p>

                                    </td>
                                    <td className="pl-7">
                                        <p className="font-normal">5° Primaria 'A'</p>
                                    </td>
                                    <td className="pl-7">
                                        <p className="font-normal">15</p>
                                    </td>
                                    <td className="pl-7">
                                        <p className="font-normal">Masculino</p>
                                    </td>

                                    
    
                                    <td className="pl-7">
                                        <div className='flex flex-row gap-3 text-sky-600'>
                                            <div className='bg-sky-100 rounded-full h-8 w-8 flex items-center justify-center'>
                                                <i class="fa-solid fa-phone  fa-sm"/>
                                            </div>
                                            <div className='bg-sky-100 rounded-full h-8 w-8 flex items-center justify-center'>
                                                <i class="fa-solid fa-envelope  fa-sm"/>
                                            </div>
                                        </div>
                                    </td>
                                </tr> 
                                <tr className="h-16 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                    

                                    <td className="pl-7 cursor-pointer">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10">
                                                <img className="shadow-md w-full h-full rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
                                            </div>
                                            <div className="pl-2">
                                                <p className="font-medium">Adrian Gonzáles Carpio</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="pl-2">
                                        <p className="font-normal">76222661</p>

                                    </td>
                                    <td className="pl-7">
                                        <p className="font-normal">5° Primaria 'A'</p>
                                    </td>
                                    <td className="pl-7">
                                        <p className="font-normal">15</p>
                                    </td>
                                    <td className="pl-7">
                                        <p className="font-normal">Masculino</p>
                                    </td>

                                    
    
                                    <td className="pl-7">
                                        <div className='flex flex-row gap-3 text-sky-600'>
                                            <div className='bg-sky-100 rounded-full h-8 w-8 flex items-center justify-center'>
                                                <i class="fa-solid fa-phone  fa-sm"/>
                                            </div>
                                            <div className='bg-sky-100 rounded-full h-8 w-8 flex items-center justify-center'>
                                                <i class="fa-solid fa-envelope  fa-sm"/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-16 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                    

                                    <td className="pl-7 cursor-pointer">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10">
                                                <img className="shadow-md w-full h-full rounded-full object-cover" src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                            </div>
                                            <div className="pl-2">
                                                <p className="font-medium">Alex Tapia Creo</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="pl-2">
                                        <p className="font-normal">76222661</p>

                                    </td>
                                    <td className="pl-7">
                                        <p className="font-normal">5° Primaria 'A'</p>
                                    </td>
                                    <td className="pl-7">
                                        <p className="font-normal">15</p>
                                    </td>
                                    <td className="pl-7">
                                        <p className="font-normal">Masculino</p>
                                    </td>

                                    
    
                                    <td className="pl-7">
                                        <div className='flex flex-row gap-3 text-sky-600'>
                                            <div className='bg-sky-100 rounded-full h-8 w-8 flex items-center justify-center'>
                                                <i class="fa-solid fa-phone  fa-sm"/>
                                            </div>
                                            <div className='bg-sky-100 rounded-full h-8 w-8 flex items-center justify-center'>
                                                <i class="fa-solid fa-envelope  fa-sm"/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>                      
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>


            {/* informacion personal */}
            <div className='w-[500px] bg-white mr-6  my-5 shadow rounded-lg flex flex-col justify-between '>
                
                <div>
                    <div className='flex mb-3 border-b-2'>
                        <button className='font-semibold leading-none text-sm text-gray-400 hover:text-gray-800 hover-uppercase mx-5 cursor-pointer py-3'>PERFIL</button>
                        <button className='font-semibold leading-none text-sm text-gray-400 hover:text-gray-800 uppercase mx-5 cursor-pointer py-3'>AGREGAR</button>
                    </div>
                </div>

                
                <div className='overflow-auto'>
                    
                    <div className='px-4 mt-4 '>
                        <div className='flex flex-row justify-between text-gray-800 text-sm'>
                            <p className='font-semibold '>ID: 123456</p>
                            <i className='fa-solid fa-graduation-cap'></i>
                        </div>

                        <div className='flex flex-col items-center mt-4'>
                            
                            <div className="w-28 h-28 shadow-lg bord border-[5px] border-white shadow-gray-300 rounded-full">
                                <img className="w-full h-full rounded-full object-cover" src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                            </div>
                            <p className='font-bold leading-none text-base text-sky-600 mt-4'>Alex Tapia Creo</p>
                            <p className='font-medium leading-none text-xs text-sky-600 mt-2'>5° Primaria A</p>


                            <div className='flex flex-row gap-3 text-sky-600 mt-2'>
                                <div className='bg-sky-100 rounded-full h-8 w-8 flex items-center justify-center'>
                                    <i class="fa-solid fa-phone  fa-sm"/>
                                </div>
                                <div className='bg-sky-100 rounded-full h-8 w-8 flex items-center justify-center'>
                                    <i class="fa-solid fa-envelope  fa-sm"/>
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
                                <img className="shadow-md w-8 h-8 rounded-full border-2 border-white" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
                                <img className="shadow-md w-8 h-8 rounded-full border-2 border-white -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
                                <img className="shadow-md w-8 h-8 rounded-full border-2 border-white -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
                                <img className="shadow-md w-8 h-8 rounded-full border-2 border-white -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
                                <img className="shadow-md w-8 h-8 rounded-full border-2 border-white -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
                                <img className="shadow-md w-8 h-8 rounded-full border-2 border-white -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
                                
                                <p className='ml-2 text-xs mt-1 text-sky-600'>+12 más</p>
                            </div>
                        </div>

                    </div>
                </div>

                
                <div className='mt-5 px-4 border-t-[1px] my-2 flex items-center justify-center'>   
                    <button 
                    className='my-3 shadow-lg bg-slate-200 shadow-gray-300/40 text-xs font-semibold text-sky-600 py-2 px-8 rounded-lg align-middle hover:text-sky-700 hover:bg-slate-300 transition duration-300 ease-in-out'
                    data-mdb-ripple="true" data-mdb-ripple-color="info">
                        
                    <i class="fa-solid fa-arrow-up-right-from-square mr-2"></i>
                    Más info
                    
                    </button>
                    
                </div>
            </div>



        </div>
    )
}
