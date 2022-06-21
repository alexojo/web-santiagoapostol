import React, { useRef, useState, useEffect } from 'react'
import { GetAllUsers, RegisterUser } from '../../../../../redux/actions/user';
import { Input, InputListbox, InputSearch } from '../../../components/Input'

import { Modal } from '../../../components/Modal';
import { Tabs } from '../../../components/Tabs';
import { PencilAltIcon, UserGroupIcon } from '@heroicons/react/outline';
import { useForm } from '../../../../../hooks/useForm';
import { ListaUsuarios } from './ListaUsuarios';
import { Header } from '../../../components/Header';
import { RegistrarUsuario } from './RegistrarUsuario';

export const UsersScreen = () => {

    //List Box
    const people = [
        { name: 'Administrador' },
        { name: 'Docente' },
        { name: 'Secretaria' },
        { name: 'Estudiante' }
    ]
    const [selected, setSelected] = useState(people[0]);

    // Form
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

    // Image
    const inputFile = useRef(null) 

    const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
    };


    
    //
    const RegisterUsuario = ( e ) =>{
        e.preventDefault();
        console.log({...formValues, rol: selected.name});
        
        RegisterUser({...formValues, rol: selected.name})
        .then((resp) => {
            if(resp.ok){
                
            }else{

            }
        })
    }
    const [users, setUsers] = useState([{ apellidoMaterno: "",
                                        apellidoPaterno: "",
                                        correoElectronico: "",
                                        direccion: "",
                                        dni: "",
                                        estado: "",
                                        fechaNacimiento: "",
                                        nombre: "",
                                        nroCelular: "",
                                        rol: "",
                                        urlFoto: ""}])

    useEffect(() => {
        GetAllUsers().
        then( (resp) => { setUsers( resp.users ); console.log( resp.users ) } )
        
    }, [])
    
    const tabs = [
        {
            target: "#tabs-home3",
            text: "Usuarios",
            icon: <UserGroupIcon className="h-5 w-5 mr-1"/>,
            component: <ListaUsuarios />
        },
        {
            target: "#tabs-profile3",
            text: "Registrar",
            icon: <PencilAltIcon className="h-5 w-5 mr-1"/>,
            component: <RegistrarUsuario />
        }
      ];

    
    

    return (
        <div className='pl-60 h-screen overflow-auto bg-slate-100'>

            <div className="w-full h-full flex flex-col">
                <Header title={"Usuarios"}/>

                <Tabs tabs={ tabs }/>
            
            </div>

        </div>    
    )
}

/* {

    <Modal id={"exampleModal"} title={"Usuario registrado correctamente!"} subtitle= {"Datos ingresados al sistema"} />

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
            className="bg-sky-600 inline-block px-6 py-2.5 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3"
            type = "submit"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light" 
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal"                               
            >
            Ingresar
            </button>
        </div>
                    
    </form>
</div>


</div> }*/