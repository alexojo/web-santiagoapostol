import { PrinterIcon, RefreshIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { InputListbox, InputSearchTable } from './Input'

export const Table = () => {

    const columnas = [
        { title:"Nombre", field:["nombre","apellidoPaterno","apellidoMaterno","urlFoto"], type:"img"},
        { title:"ID", field:"dni", type:"str"},
        { title:"Rol", field:"rol", type:"str"},
        { title:"Fecha Nacimiento", field:"fechaNacimiento", type:"str"},
        { title:"Estado", field:"estado", type:"str"}
    ]
    

    const datos = [
        {
            apellidoMaterno: "Montalvo",
            apellidoPaterno: "Monzon",
            correoElectronico: "",
            createdAt: "2022-05-24T04:05:41.179Z",
            direccion: "a",
            dni: "22222222",
            estado: "Activo",
            fechaNacimiento: "2022-05-23",
            nombre: "Alexander Junior",
            nroCelular: "a",
            password: "$2a$10$OKF0qdl267BjC28gE2efaebkKwfSnB.2GgxO6t4WFW5VM2wYs2Ym2",
            rol: "Administrador",
            updatedAt: "2022-05-24T04:05:41.179Z",
            urlFoto: "https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            __v: 0,
        },
        {
            apellidoMaterno: "Montalvo",
            apellidoPaterno: "Monzon",
            correoElectronico: "",
            createdAt: "2022-05-24T04:05:41.179Z",
            direccion: "a",
            dni: "22222222",
            estado: "Activo",
            fechaNacimiento: "2022-05-23",
            nombre: "Alexander Junior",
            nroCelular: "a",
            password: "$2a$10$OKF0qdl267BjC28gE2efaebkKwfSnB.2GgxO6t4WFW5VM2wYs2Ym2",
            rol: "Administrador",
            updatedAt: "2022-05-24T04:05:41.179Z",
            urlFoto: "https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            __v: 0,
        },
        {
            apellidoMaterno: "Montalvo",
            apellidoPaterno: "Monzon",
            correoElectronico: "",
            createdAt: "2022-05-24T04:05:41.179Z",
            direccion: "a",
            dni: "22222222",
            estado: "Activo",
            fechaNacimiento: "2022-05-23",
            nombre: "Alexander Junior",
            nroCelular: "a",
            password: "$2a$10$OKF0qdl267BjC28gE2efaebkKwfSnB.2GgxO6t4WFW5VM2wYs2Ym2",
            rol: "Administrador",
            updatedAt: "2022-05-24T04:05:41.179Z",
            urlFoto: "https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            __v: 0,
        }
        
    ]

    const people = [
        { name: 'Todos los roles' },
        { name: 'Administrador' },
        { name: 'Docente' },
        { name: 'Secretaria' },
        { name: 'Estudiante' }
    ]
    const [selected, setSelected] = useState(people[0]);

    return (
        <div className="w-full h-full flex flex-col bg-white border rounded-lg border-gray-200">
            
            <div className="bg-white px-4 pt-3 h-full pb-5 rounded-lg  overflow-y-auto flex flex-col justify-between">
                <div>
                    <div className='w-full mb-8 flex justify-between items-center '>
                        <div className=''>
                            <InputSearchTable />
                        </div>
                        <div className='flex items-center  gap-1'>
                            <InputListbox basis="w-48" label=""  people = {people} selected={ selected } setSelected = {setSelected }/>

                            <button data-mdb-ripple="true" data-mdb-ripple-color="info"
                            class="py-1.5 rounded-md items-center align-middle px-1 border flex text-sm text-gray-600   bg-gray-100 focus:bg-gray-100 active:bg-gray-200 ">
                                <RefreshIcon class="h-5 w-5 text-gray-600"/>
                            </button>
                            <button data-mdb-ripple="true" data-mdb-ripple-color="info"
                            class="py-1.5 rounded-md items-center px-3 ml-3 border flex text-sm text-gray-600 roun  bg-gray-100 focus:bg-gray-100 active:bg-gray-200 ">
                                <PrinterIcon class="h-5 w-5 mr-1 text-gray-600"/>
                                Imprimir
                            </button>
                            
                        </div>
                        
                    </div>
                    
                    <table className="w-full ">
                        <thead clas>
                            <tr className="h-10 w-full text-sm leading-none text-gray-800">
                                {
                                    columnas.map( (columna, index) => (
                                        <th className="font-bold text-left pl-2" id='index'>{ columna.title }</th>                                            
                                    ))
                                }
                                <th className="font-bold text-left pl-2">Contacto</th> 
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            {
                                datos.map( (dato, index) => (

                                    <tr className="h-16 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                        
                                        {
                                            columnas.map( (columna, index) => 
                                                columna.type == "img" ? 
                                                    (<td className="pl-2 cursor-pointer">
                                                        <div className="flex items-center">
                                                            <div className="w-10 h-10">
                                                                <img className="shadow-md w-full h-full rounded-full object-cover" alt="" src={dato[columna.field[3]]} />
                                                            </div>
                                                            <div className="pl-2">
                                                                <p className="font-medium">{`${dato[columna.field[0]]} ${dato[columna.field[1]]} ${dato[columna.field[2]]}`}</p>
                                                            </div>
                                                        </div>
                                                    </td>) 
                                                    : 
                                                    (<td className="pl-2">
                                                        <p className="font-normal">{ dato[columna.field] }</p>       
                                                    </td>)
                                            )
                                        }                                           
                                        <td className="pl-2">
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

                                ))
                            }

                        </tbody>
                    </table>
                </div>
                <div>Paginación</div>
            </div>
        </div>
    )
}
