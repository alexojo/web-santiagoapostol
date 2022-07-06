import React, { useEffect, useState } from 'react'
import { typesUser } from '../../../redux/types/types'
import { FunctionEdad, FunctionFechaATexto } from '../functions/functionFechas'
import { useNavigate } from 'react-router-dom';

export const UserDetails = ({ url = '/student' }) => {

    const data = {
        apellidoMaterno: "Montalvo",
        apellidoPaterno: "Monzon",
        correoElectronico: "",
        createdAt: "2022-05-24T04:05:41.179Z",
        direccion: "Urb Amauta B-14",
        dni: "22222222",
        estado: "Activo",
        fechaNacimiento: "2001-01-21",
        genero:"Masculino",
        nombre: "Alexander Junior",
        nroCelular: "a",
        password: "$2a$10$OKF0qdl267BjC28gE2efaebkKwfSnB.2GgxO6t4WFW5VM2wYs2Ym2",
        rol: "Administrador",
        updatedAt: "2022-05-24T04:05:41.179Z",
        urlFoto: "https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        __v: 0,
    }

    const [datosUsuario, setDatosUsuario] = useState({
        edad: "",
        fechaCumpleaños: "",
        icon: ""
    })

    const CargarIcon = (rol) => {
        switch ( rol.toUpperCase() ) {
            case typesUser.userAdmin:
                return "fa-solid fa-user-gear"
                break;
            case typesUser.userSecretary:
                return "fa-solid fa-user-tag"
                break;
            case typesUser.userStudent:
                return "fa-solid fa-graduation-cap"
                break;
            case typesUser.userTeacher:
                return "fa-solid fa-user-tie"
                break;
            default:
                return "fa-solid fa-user"
                break;
        }
    }

    const navigate = useNavigate();
    const navegar = () => {
        console.log( url )
        navigate(url)
    }

    // Cargar datos de Usuario
    useEffect(() => {
        const fecha = data.fechaNacimiento;

        const edad = FunctionEdad( fecha );
        const fechaCumpleaños = FunctionFechaATexto( fecha );
        const icon = CargarIcon( data.rol )
        setDatosUsuario({
            edad: edad,
            fechaCumpleaños: fechaCumpleaños,
            icon: icon
        })

    }, [])
    

    return (
        <div className='w-full h-full bg-white border border-gray-200 rounded-lg flex flex-col justify-between '>

                
                <div className='overflow-auto'>
                    
                    <div className='px-4 mt-4 '>
                        <div className='flex flex-row justify-between text-gray-700 text-sm'>
                            <p className='font-semibold '>DNI: { data.dni }</p>
                            <i className={ datosUsuario.icon }></i>
                        </div>

                        <div className='flex flex-col items-center mt-4'>
                            
                            <div className="w-28 h-28 shadow-lg bord border-[5px] border-white shadow-gray-300 rounded-full">
                                <img className="w-full h-full rounded-full object-cover" alt="" src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                            </div>
                            <p className='font-bold leading-none text-center text-base text-sky-600 mt-4'>{`${data.nombre} ${data.apellidoPaterno} ${data.apellidoMaterno}`}</p>
                            <p className='font-medium leading-none text-xs text-sky-600 mt-2'>{ data.rol }</p>


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

                        <div className='flex flex-row gap-12 justify-between text-sm text-gray-800 mt-7'>
                            <div className='flex flex-col gap-3'> 
                                <div>
                                    <p className='font-bold'>Edad</p>
                                    <p className='text-xs mt-1'>{datosUsuario.edad }</p>
                                </div>
                                <div>
                                    <p className='font-bold'>Cumpleaños</p>
                                    <p className='text-xs mt-1 text-justify'>{ datosUsuario.fechaCumpleaños }</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3'> 
                                <div>
                                    <p className='font-bold'>Género</p>
                                    <p className='text-xs mt-1 text-justify'>{ data.genero }</p>
                                </div>
                                <div>
                                    <p className='font-bold'>Dirección</p>
                                    <p className='text-xs mt-1 text-justify'>{ data.direccion }</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                
                <div className='mt-5 px-4 border-t-[1px] my-2 flex items-center justify-center'>   
                    <button 
                    className='my-3 shadow-sm shadow-gray-600/50 bg-slate-200 text-xs font-semibold text-gray-700 py-2 px-8 rounded-md align-middle hover:text-sky-700 hover:bg-slate-300 transition duration-300 ease-in-out'
                    data-mdb-ripple="true" data-mdb-ripple-color="info" onClick={ () => navegar( url ) }>
                        
                    <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>
                    Más Info
                    
                    </button>
                    
                </div>
            </div>
    )
}
