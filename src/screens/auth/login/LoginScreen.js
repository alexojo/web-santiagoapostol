import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {

    // Hook que cambia la locacion
    const navigate = useNavigate();



    const handleLogin = () => {
        navigate('/student',{
            replace: true
        })
    }
    
    const handleBack = () => {
        navigate('/')
    }

    return (
    
        <div class="bg-gray-200 min-h-screen flex items-center">
            <div class="container mx-auto py-6 px-6 h-full">
                <div class="flex justify-center items-center h-full g-6 text-gray-800">
                <div class="lg:w-10/12 md:w-8/12">
                    <div class="block bg-white shadow-lg rounded-lg">
                        <div class="lg:flex lg:flex-wrap g-0">
                            
                            {/* FORMULARIO */}

                            <div class="lg:w-6/12 px-4 md:px-0">
                                <div class="md:p-12 md:mx-6">
                                    <div class="text-center pt-2 pb-7 md:pt-0">
                                        <img
                                            class="mx-auto h-16 w-auto"
                                            src={require('../../../images/Insignia.png')}
                                            alt="logo"
                                        />

                                    </div>
                                    <form>
                                        <div class="flex">
                                            <h3 class="mb-4 text-xl font-medium text-gray-800">Iniciar sesión</h3>
                                        </div>
                                        <div class="mb-4">
                                            
                                            <label class="block mb-2 text-sm font-medium text-gray-800">Usuario</label>
                                            <input
                                                type="text"
                                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none"
                                                placeholder="usuario@santiagoapostol.com"
                                            />
                                        </div>
                                        <div class="mb-4">
                                            <label class="block mb-2 text-sm font-medium text-gray-800">Contraseña</label>
                                            <input
                                            type="password"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none"                                      
                                            placeholder="*******"
                                            />
                                        </div>
                                        <div class="flex justify-between mb-6 mt-6">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-sky-600"/>
                                                </div>
                                                <label class="ml-2 text-sm font-medium text-gray-900 ">Recuerdame</label>
                                            </div>
                                            <a class="text-sm font-medium text-sky-600 hover:underline ">Olvidaste tu contraseña?</a>
                                        </div>
                                        <div class="text-center mb-12 pb-1">
                                            <button
                                            class="bg-sky-600 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                            type="button"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"

                                            onClick={handleLogin}
                                            >
                                            Ingresar
                                            </button>
                                        </div>
                                        <div class="flex items-center justify-between space-x-4  pb-6">
                                            <p class="text-sm font-medium text-gray-600 ">No estas registrado? <a class="text-sky-600 hover:underline">Crear cuenta</a></p>
                                            <button
                                            type="button"
                                            class="inline-block px-2 lg:px-6 py-2 border-2 border-sky-600 text-sky-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"

                                            onClick={ handleBack }
                                            >
                                            <i class="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                                            web
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>


                            {/* FRASE */}

                            <div class="bg-sky-700 lg:w-6/12 hidden lg:flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                                <div class="text-white px-4 py-6 md:p-12 md:mx-6 text-justify ">
                                    <h4 class="text-xl font-semibold mb-6">Formando personas de calidad</h4>
                                    <p class="text-sm">
                                    Nuestra labor de compromiso es el de FORMAR PERSONAS DE CALIDAD 
                                    para lo cual contamos con profesionales de probada trayectoria, 
                                    quienes vuelcan sus conocimientos, experiencia y amor en la formación 
                                    de nuestros niños, para que sean hombre y mujeres de bien que destaquen
                                        en nuestra sociedad y trasciendan para el bien de sus familiar, 
                                        la comunidad y del país.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    
  )
}
