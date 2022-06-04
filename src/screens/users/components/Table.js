import React from 'react'

export const Table = () => {

    columnas=[
        { title:"Nombre", field:"nombre", type:"str"},
        { title:"DNI", field:"dni", type:"img"},
        { title:"Clase", field:"nombre"},
        { title:"Nombre", field:"nombre"},
        { title:"Nombre", field:"nombre"},
        { title:"Nombre", field:"nombre"}
    ]

    return (
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
                                                <img className="shadow-md w-full h-full rounded-full" alt="" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
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
                                                <i className="fa-solid fa-phone  fa-sm"/>
                                            </div>
                                            <div className='bg-sky-100 rounded-full h-8 w-8 flex items-center justify-center'>
                                                <i className="fa-solid fa-envelope  fa-sm"/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-16 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                    

                                    <td className="pl-7 cursor-pointer">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10">
                                                <img className="shadow-md w-full h-full rounded-full object-cover" alt="" src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
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
                                                <i className="fa-solid fa-phone  fa-sm"/>
                                            </div>
                                            <div className='bg-sky-100 rounded-full h-8 w-8 flex items-center justify-center'>
                                                <i className="fa-solid fa-envelope  fa-sm"/>
                                            </div>
                                        </div>
                                    </td>
                                </tr> 
                                <tr className="h-16 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                    

                                    <td className="pl-7 cursor-pointer">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10">
                                                <img className="shadow-md w-full h-full rounded-full" alt="" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
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
                                                <i className="fa-solid fa-phone  fa-sm"/>
                                            </div>
                                            <div className='bg-sky-100 rounded-full h-8 w-8 flex items-center justify-center'>
                                                <i className="fa-solid fa-envelope  fa-sm"/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-16 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                    

                                    <td className="pl-7 cursor-pointer">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10">
                                                <img className="shadow-md w-full h-full rounded-full object-cover" alt="" src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
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
                                                <i className="fa-solid fa-phone  fa-sm"/>
                                            </div>
                                            <div className='bg-sky-100 rounded-full h-8 w-8 flex items-center justify-center'>
                                                <i className="fa-solid fa-envelope  fa-sm"/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>                      
                            </tbody>
                        </table>
                    </div>
                </div>
    )
}
