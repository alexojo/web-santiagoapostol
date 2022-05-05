import React from 'react'
import { NavLink } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'// Hook que cambia la locacion
import { typesUser } from '../../../redux/types/types';


export const SideBar = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/login')
    }

    const Navs = [
        {
            user: typesUser.userAdmin,
            name: 'Estudiantes',
            link: '/admin',
            icon: 'fa-solid fa-graduation-cap'
        },
        {
            user: typesUser.userAdmin,
            name: 'Secciones',
            link: '/admin',
            icon: 'fa-solid fa-chalkboard'
        },
        {
            user: typesUser.userAdmin,
            name: 'Docentes',
            link: '/admin',
            icon: 'fa-solid fa-user-tie '
        },
        {
            user: typesUser.userAdmin,
            name: 'Año Escolar',
            link: '/admin',
            icon: 'fa-solid fa-calendar'
        },
        {
            user: typesUser.userAdmin,
            name: 'Cursos',
            link: '/admin',
            icon: 'fa-solid fa-book'
        }
    ]

    return (
        <div class="w-60 h-full shadow-md bg-white absolute flex flex-col justify-between" id="sidenavSecExample">
            
            <div>
                <div class="py-2 px-6">
                    <a href="#!">
                        <div class="flex items-center justify-center mx-auto">
                            <div class="">
                                <img src={require('../../../images/Insignia.png')} class="w-8" alt="Avatar"/>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-bold text-sky-700">SANTIAGO APÓSTOL</p>
                            </div>
                        </div>
                    </a>
                </div>

                <hr class="mb-2 w-5/6 mx-auto"/>

                {/* <p className='text-base text-gray-700 font-semibold px-7 py-2'> Menu </p> */}
                
                


                <ul class="relative px-1">
                    <li class="relative">

                        <NavLink to= {Navs[0].link}>

                            <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-zinc-400 font-medium text-ellipsis whitespace-nowrap rounded hover:text-sky-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="info">
                                
                                <i class={`w-3 h-3 mr-3`}></i>
                                <span>Estudiantes</span>
                            </div>

                        </NavLink>
                    </li>
                    <li class="relative">

                        <NavLink to="/admin">

                            <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-zinc-400 font-medium text-ellipsis whitespace-nowrap rounded hover:text-sky-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="info">
                                
                                <i class="fa-solid fa-graduation-cap w-3 h-3 mr-3"></i>
                                <span>Estudiantes</span>
                            </div>

                        </NavLink>
                    </li>
                    <li class="relative" id="sidenavSecEx2">
                        <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-zinc-400 font-medium text-ellipsis whitespace-nowrap rounded hover:text-sky-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="info" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx2" aria-expanded="false" aria-controls="collapseSidenavSecEx2">
                            <i class="fa-solid fa-chalkboard w-3 h-3 mr-3"></i>
                            <span>Secciones</span>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                            </svg>
                        </a>

                    </li>
                    <li class="relative">

                        <NavLink to="/admin">

                            <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-zinc-400 font-medium text-ellipsis whitespace-nowrap rounded hover:text-sky-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="info">
                                <i class="fa-solid fa-user-tie w-3 h-3 mr-3"></i>
                                <span>Docentes</span>
                            </div>

                        </NavLink>
                    </li>
                    <li class="relative">
                        <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-zinc-400 font-medium text-ellipsis whitespace-nowrap rounded hover:text-sky-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="info">
                            <i class="fa-solid fa-calendar w-3 h-3 mr-3"></i>
                            <span>Año escolar</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-zinc-400 font-medium text-ellipsis whitespace-nowrap rounded hover:text-sky-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="info">
                            <i class="fa-solid fa-book w-3 h-3 mr-3"></i>
                            <span>Cursos</span>
                        </a>
                    </li>
                </ul>

                <hr class="mb-2 w-5/6 mx-auto mt-2"/>

                {/* <p className='text-base text-gray-700 font-semibold px-7 py-2'> General </p> */}
                

                <ul class="relative px-1">

                    <li class="relative">
                        <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-zinc-400 font-medium text-ellipsis whitespace-nowrap rounded hover:text-sky-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="info">
                            <i class="fa-solid fa-sun w-3 h-3 mr-3"></i>
                            <span>Modo Oscuro</span>
                            <div class="form-check form-switch ml-auto">
                                <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                                
                            </div>
                        </a>
                    </li>
                    <li class="relative" onClick={ handleBack }>
                        <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-zinc-400 font-medium text-ellipsis whitespace-nowrap rounded hover:text-sky-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="info">
                            <i class="fa-solid fa-right-from-bracket w-3 h-3 mr-3"></i>
                            <span>Salir </span>
                        </a>
                    </li>

                </ul>
            </div>
            
            <div>
                <hr class="mb-2 w-5/6 mx-auto"/>     

                <div class="py-2 px-6 text-center bottom-0 w-full">
                    <a href="#!">
                    <div class="flex items-center">
                        <div class="shrink-0 ">
                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-full w-10 border-[3px] border-white shadow-md" alt="Avatar"/>
                        </div>
                        <div class="ml-3">
                            <p class="text-left text-sm font-semibold text-gray-700">Dante R.</p>
                            <p class="text-xs font-normal text-zinc-400">Administrador</p>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
            
        </div>
    )
}



{/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
    <div className="navbar-collapse">
        <div className="navbar-nav">

            <NavLink 
                className="nav-item nav-link" 
                to="/admin"
            >
                Admin
            </NavLink>

            <NavLink 
                className="nav-item nav-link" 
                to="/student"
            >
                Student
            </NavLink>
            <NavLink 
                className="nav-item nav-link" 
                to="/teacher"
            >
                Teacher
            </NavLink>

        </div>
    </div>
</nav> */}