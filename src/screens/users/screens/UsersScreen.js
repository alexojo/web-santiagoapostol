import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../../hooks/useForm';
import { startRegister } from '../../../redux/actions/auth';
import { Input, InputListbox, InputSearch } from '../components/Input'

export const UsersScreen = () => {
    const dispatch = useDispatch();

    const people = [
        { name: 'Administrador' },
        { name: 'Docente' },
        { name: 'Secretaria' },
        { name: 'Estudiante' }
    ]


    const [ formValues, handleInputChange, setValues ] = useForm({  
        dni: '76222661',
        nombre: 'a',
        apellidoPaterno: 'a',
        apellidoMaterno: 'a',
        direccion:'a',
        fechaNacimiento:'',
        correoElectronico:'a',
        nroCelular:'a',
        rol: 'a',
        password:'123456',
        urlFoto:'a'
    });
    const { dni, password, nombre, apellidoPaterno, apellidoMaterno, direccion, fechaNacimiento, correoElectronico, nroCelular, rol, urlFoto } = formValues;

    
    const inputFile = useRef(null) 

    const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
    };
    const [selected, setSelected] = useState(people[0]);

    const RegisterUsuario = ( e ) =>{
        e.preventDefault();
        console.log({...formValues, rol: selected.name});
        dispatch( startRegister( {...formValues, rol: selected.name} ) )
    }

    
    

    return (
        <div className='pl-60 h-screen flex overflow-auto bg-gray-100'>

            <div className='w-full flex flex-col items-start mb-5'>
                {/* titulo */}
                <div className="w-full sm:px-6 mb-7 mt-5 sm:flex items-center justify-between">
                    <div>
                        <p className="text-2xl font-bold leading-normal text-gray-800">Datos de Usuarios</p>
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
                        <form onSubmit={ RegisterUsuario }>
                            
                            <div className='flex mt-4'>
                                <div className='w-full'>
                                    <div className='flex flex-row space-x-4 basis'>
                                        <InputSearch label="DNI" name="dni" placeholder="********" value = { dni } onChange = { handleInputChange }/>
                                        <Input basis="basis-1/4" label="Nombre:" name="nombre" placeholder="" value = { nombre } onChange = { handleInputChange }/>
                                        <Input basis="basis-1/4" label="Ap. Paterno:" name="apellidoPaterno" placeholder="" value = { apellidoPaterno } onChange = { handleInputChange }/>
                                        <Input basis="basis-1/4" label="Ap. Materno:" name="apellidoMaterno" placeholder="" value = { apellidoMaterno } onChange = { handleInputChange }/>
                                    </div>
                                    <div className='flex flex-wrap gap-x-4 bass'>
                                        
                                        <Input basis="basis-2/4" label="Dirección:" name="direccion" placeholder="" value = { direccion } onChange = { handleInputChange }/>
                                        <Input basis="basis-1/4" label="Fecha Nacimiento:" name="fechaNacimiento" type="date" placeholder="" value = { fechaNacimiento } onChange = { handleInputChange }/>
                                        
                                        <Input basis="basis-1/4" label="Correo electrónico:" name="correoElectronico" placeholder="" value = { correoElectronico } onChange = { handleInputChange }/>
                                        <Input basis="basis-1/4" label="Nro. Celular:" name="nroCelular" placeholder="" value = { nroCelular } onChange = { handleInputChange }/>
                                        <InputListbox basis="basis-1/4" label="Rol:" people = {people} selected={ selected } setSelected = {setSelected }/>
                                    </div>

                                </div>
                                
                                <div className='mt-4 ml-4 w-56'>
                                    <img src='https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilu.jpg?ver=6'
                                        className='border-x border-t border-gray-300 rounded-t-md'/>
                                    <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
                                    <button
                                        className="bg-slate-200  w-full shadow-lg shadow-gray-300/40 px-6 py-2.5 text-gray-700 font-semibold text-xs leading-tight uppercase rounded-b-md  hover:text-sky-600 hover:bg-slate-300 focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3"
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light" 
                                        onClick={onButtonClick}                               
                                        >
                                        CARGAR IMAGEN
                                    </button>
                                </div>

                            </div>
                            

                            <div className="text-center pb-1">
                                <button
                                className="bg-sky-600 inline-block px-6 py-2.5 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-1/6 mb-3"
                                type = "submit"
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
                        
                        <i className="fa-solid fa-magnifying-glass absolute cursor-pointer pt-2.5 left-4 text-gray-400"></i>

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
