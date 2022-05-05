import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'// Hook que cambia la locacion
import { typesUser } from '../../../../redux/types/types';
import { NavsAdmin, NavsSecretary } from './Navs';



export const SideBar = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/login')
    }

    const rol = "ADMINISTRADOR";
    
    const [navs, setNavs] = useState([])

    useEffect(() => {

        
        switch ( rol ) {
            case typesUser.userAdmin:
                setNavs( NavsAdmin )
                break;
            case typesUser.userSecretary:
                setNavs( NavsSecretary )
                break;
        
            default:
                console.log("default")
                break;
        }
    }, [])
    
    

    return (
        <div class="w-60 h-full shadow-md bg-white absolute flex flex-col justify-between" id="sidenavSecExample">
            
            <div className='overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300'>
                <div class="py-2 px-6">
                    <a href="#!">
                        <div class="flex items-center justify-center mx-auto">
                            <div class="">
                                <img src={require('../../../../images/Insignia.png')} class="w-8" alt="Avatar"/>
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
                    {
                        navs.map( nav => (

                            <li class="relative">

                                <NavLink to= { nav.link } key={ nav.name } >

                                    <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-zinc-400 font-medium text-ellipsis whitespace-nowrap rounded hover:text-sky-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="info">
                                        
                                        <i class={`${ nav.icon } w-3 h-3 mr-3`}></i>
                                        <span>{ nav.name }</span>
                                    </div>

                                </NavLink>
                            </li>
                        ))
                    }
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
