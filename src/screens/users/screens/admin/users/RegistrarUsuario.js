import React, { useEffect, useRef, useState } from 'react'
import { Table } from '../../../components/Table'
import { UserDetails } from '../../../components/UserDetails'
import { Input, InputListbox, InputSearch } from '../../../components/Input'
import { useForm } from '../../../../../hooks/useForm'
import { GetAllUsers, RegisterUser } from '../../../../../redux/actions/user';

export const RegistrarUsuario = () => {

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
        dni: '',
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        direccion:'',
        fechaNacimiento:'',
        correoElectronico:'',
        nroCelular:'',
        rol: '',
        password:'123456',
        urlFoto:''
    });
    const { dni, password, nombre, apellidoPaterno, apellidoMaterno, direccion, fechaNacimiento, correoElectronico, nroCelular, rol, urlFoto } = formValues;

    // Image
    const fileInputRef = useRef(null)
    
    const [image, setImage] = useState();
    const [preview, setPreview] = useState( );

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
            setPreview(reader.result);
            };
            reader.readAsDataURL(image);
        } else {
            setPreview('https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilu.jpg?ver=6');
        }
    }, [image]);
    
    



    const onButtonClick = () => {
        // `current` points to the mounted file input element
        fileInputRef.current.click();
    };


    
    //
    const RegisterUsuario = ( e ) =>{
        e.preventDefault();
        //console.log({...formValues, rol: selected.name});
        
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


    return (
        <div className="flex overflow-auto h-full mx-5 mb-5 gap-5">
            <div className="w-1/2">
                <div className="w-full h-full flex flex-col bg-white border rounded-lg border-gray-200 p-4 overflow-auto">

                    <div className="text-sm font-normal leading-normal text-gray-400">
                        Complete el siguiente formulario para agregar una nuevo usuario
                    </div>
                    <form onSubmit={ RegisterUsuario }>
                        
                        <div className='mt-4 basis-1/'>
                            <div className='w-full'>
                                <div className='flex flex-col'>
                                    <InputSearch label="DNI" name="dni" placeholder="********" value = { dni } onChange = { handleInputChange } autoFocus="autofocus"/>
                                    <Input basis="w-full" label="Nombre completo:" name="nombre" placeholder="" value = { nombre } onChange = { handleInputChange } disabled="disabled"/>
                                </div>
                                <div className='flex flex-wrap gap-x-4 bass'>
                                    
                                    <Input basis="w-full" label="Dirección:" name="direccion" placeholder="Urb. Av. Calle. XXXXX  N° XXX" value = { direccion } onChange = { handleInputChange } important="true" />
                                    <Input basis="w-full" label="Fecha Nacimiento:" name="fechaNacimiento" type="date" placeholder="" value = { fechaNacimiento } onChange = { handleInputChange } important="true"/>
                                    
                                    <Input basis="w-full" label="Correo electrónico:" name="correoElectronico" placeholder="Debe ingresar un correo válido" type='email' value = { correoElectronico } onChange = { handleInputChange } />
                                    <Input basis="w-full" label="Nro. Celular:" name="nroCelular" placeholder="999 123 456" value = { nroCelular } onChange = { handleInputChange } important="true"/>
                                    <InputListbox basis="w-full" label="Rol:" people = {people} selected={ selected } setSelected = {setSelected }/>
                                </div>

                            </div>
                            
                            <label className="block text-xs font-medium text-gray-700 ml-1 mt-4">Foto de perfil:</label>
                            <div className='w-full border border-solid border-gray-300 rounded-md flex flex-col items-center'>
                                
                                <img src={preview}
                                    className='border border-dashed border-gray-300 rounded-md w-48 h-48 object-cover  m-4'/>
                                <div className='gap-4 flex'>
                                    <button
                                        className=" border-2 border-slate-200  shadow-lg shadow-gray-300/40 px-12 py-2.5 text-gray-700 font-semibold text-xs leading-tight uppercase rounded-md  hover:text-sky-600 hover:bg-slate-100 focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3"
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light" 
                                        onClick={() => setImage(null)} 
                        
                                        >
                                        ELIMINAR
                                    </button>
                                    <button
                                        className="bg-slate-200   shadow-lg shadow-gray-300/40 px-12 py-2.5 text-gray-700 font-semibold text-xs leading-tight uppercase rounded-md  hover:text-sky-600 hover:bg-slate-300 focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3"
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light" 
                                        onClick={(event) => {
                                            event.preventDefault();
                                            fileInputRef.current.click();
                                        }} 
                        
                                        >
                                        CARGAR
                                    </button>

                                </div>
                                <input type='file' id='file' ref={fileInputRef} className="hidden" onChange={(event) => {
                                    const file = event.target.files[0];
                                    if (file && file.type.substr(0, 5) === "image") {
                                    setImage(file);
                                    } else {
                                    setImage(null);
                                    }
                                }}/>
                            </div>

                        </div>
                        

                        <div className="text-center pb-1 mt-4">
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
            </div>
            

            <div className="w-1/2">
                <div className="w-full h-full flex flex-col bg-white border rounded-lg border-gray-200 p-4 overflow-auto">

                    <div className="text-sm font-normal leading-normal text-gray-400">
                        Ingrese el archivo excel con los datos de los usuarios                      
                    </div>

                    <div className="pb-1 mt-4">
                        <InputListbox basis="w-full" label="Rol de los usuarios a ingresar:"  people = {people} selected={ selected } setSelected = {setSelected }/>

                    </div>

                    <hr className='mt-5'></hr>

                    <label className="block text-xs font-medium text-gray-700 ml-1 mt-4">Archivo excel:</label>
                    <div className='w-full border border-solid border-gray-300 rounded-md flex flex-col items-center'>
                        <img src='https://1000marcas.net/wp-content/uploads/2020/12/Microsoft-Excel-Logo.png'
                            className='border border-dashed border-gray-300 rounded-md w-48 m-4 py-5 saturate-[.25]'/>
                        <button
                            className="bg-slate-200 w-48  shadow-lg shadow-gray-300/40 px-6 py-2.5 text-gray-700 font-semibold text-xs leading-tight uppercase rounded-md  hover:text-sky-600 hover:bg-slate-300 focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light" 
                            onClick={onButtonClick}   
            
                            >
                            CARGAR Archivo
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
