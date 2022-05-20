import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { startLogin } from '../../../redux/actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    // Hook que cambia la locacion
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/page')
    }

    // Formulario

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        loginEmail: 'dantecito26@hotmail.com',
        loginPassword: '123456'
    });

    const { loginEmail, loginPassword } = formLoginValues;

    const handleLogin = ( e ) => {

        e.preventDefault();
        
        dispatch( startLogin( loginEmail, loginPassword ) )


        // Navigate a another screen ( admin, teacher, student )
        navigate('/student',{replace: true})
    }


    return (
    
        <div className="bg-gray-200 min-h-screen flex items-center">
            <div className="container mx-auto py-6 px-6 h-full">
                <div className="flex justify-center items-center h-full g-6 text-gray-800">
                <div className="lg:w-10/12 md:w-8/12">
                    <div className="block bg-white shadow-lg rounded-lg">
                        <div className="lg:flex lg:flex-wrap g-0">
                            
                            {/* FORMULARIO */}

                            <div className="lg:w-6/12 px-4 md:px-0">
                                <div className="md:p-12 md:mx-6">
                                    <div className="text-center pt-2 pb-7 md:pt-0">
                                        <img
                                            className="mx-auto h-16 w-auto"
                                            src={require('../../../images/Insignia.png')}
                                            alt="logo"
                                        />

                                    </div>
                                    <form onSubmit={ handleLogin }>
                                        <div className="flex">
                                            <h3 className="mb-4 text-xl font-medium text-gray-800">Iniciar sesión</h3>
                                        </div>
                                        <div className="mb-4">
                                            
                                            <label className="block mb-2 text-sm font-medium text-gray-800">Usuario</label>
                                            <input                                                
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none"
                                                type="text"
                                                placeholder="usuario@santiagoapostol.com"
                                                name="loginEmail"
                                                value= { loginEmail }
                                                onChange={ handleLoginInputChange }
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block mb-2 text-sm font-medium text-gray-800">Contraseña</label>
                                            <input
                                                type="password"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none"                                      
                                                placeholder="*******"
                                                name="loginPassword"
                                                value= { loginPassword }
                                                onChange={ handleLoginInputChange }
                                            />
                                        </div>
                                        <div className="flex justify-between mb-6 mt-6">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-sky-600"/>
                                                </div>
                                                <label className="ml-2 text-sm font-medium text-gray-900 ">Recuerdame</label>
                                            </div>
                                            <a href="#" className="text-sm font-medium text-sky-600 hover:underline ">Olvidaste tu contraseña?</a>
                                        </div>
                                        <div className="text-center mb-12 pb-1">
                                            <button
                                            className="bg-sky-600 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                            type="button"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"

                                            onClick={handleLogin}
                                            >
                                            Ingresar
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-between space-x-4  pb-6">
                                            <p className="text-sm font-medium text-gray-600 ">No estas registrado? <a className="text-sky-600 hover:underline">Crear cuenta</a></p>
                                            <button
                                            type="button"
                                            className="inline-block px-2 lg:px-6 py-2 border-2 border-sky-600 text-sky-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"

                                            onClick={ handleBack }
                                            >
                                            <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                                            web
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>


                            {/* FRASE */}

                            <div className="bg-sky-700 lg:w-6/12 hidden lg:flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                                <div className="text-white px-4 py-6 md:p-12 md:mx-6 text-justify ">
                                    <h4 className="text-xl font-semibold mb-6">Formando personas de calidad</h4>
                                    <p className="text-sm">
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
