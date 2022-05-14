import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ]

export const SectionsScreen = () => {

    

    const [selected, setSelected] = useState(people[0])

    return (
        <div className='pl-60 h-screen flex flex-col items-center overflow-auto bg-gray-100'>
            

            <div className="w-full sm:px-6 mb-7 mt-5 sm:flex items-center justify-between">
                <div>
                    <p className="text-2xl font-bold leading-normal text-gray-800">Secciones</p>
                    <p className="text-sm font-normal leading-normal text-gray-500">Hola Dante, bienvenido al panel de Santiago Apóstol</p>
                </div>
                
                
                <div>

                    <a className="bg-sky-600 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full" 
                        data-bs-toggle="collapse" 
                        href="#collapseExample" 
                        
                        aria-controls="collapseExample">
                        <i class="fa-solid fa-plus mr-2"></i>
                        Agregar
                        
                    </a>

                </div>
            </div>
            

            <div className="collapse w-full sm:px-6 mt-2 -translate-y-5" id="collapseExample">
   
                <div class= " px-4 md:px-10 py-4  rounded-lg shadow bg-white">
                    <div class="text-sm font-normal leading-normal text-gray-400">
                        Complete el siguiente formulario para agregar una nueva sección
                    </div>
                    <form >
                        <div className='flex flex-wrap just gap-4 mt-4'>

                            <div className="mb-2 grow shrink basis-36">    
                                <label className="block text-sm font-medium text-gray-700">Price</label>
                                <input                                                
                                    className="form-control mt-1 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none"
                                    type="text"
                                    placeholder="1"
                                    name="loginEmail"    
                                />
                            </div>
                            <div className="mb-2 grow shrink basis-36">    
                                <label className="block text-sm font-medium text-gray-700">Price</label>
                                <div className="w-full">
                                    <Listbox value={selected} onChange={setSelected}>
                                        <div className="relative mt-1">
                                        
                                        <Listbox.Button className="mt-1 flex justify-between w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 focus:border-2 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none">
                                            <span className="block truncate">{selected.name}</span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <SelectorIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            </span>
                                        </Listbox.Button>
                                        
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {people.map((person, personIdx) => (
                                                <Listbox.Option
                                                key={personIdx}
                                                className={({ active }) =>
                                                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                                    active ? 'bg-blue-50 text-sky-600' : 'text-gray-800'
                                                    }`
                                                }
                                                value={person}
                                                >
                                                {({ selected }) => (
                                                    <>
                                                    <span
                                                        className={`block truncate ${
                                                        selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                    >
                                                        {person.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text--sky-600">
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                    </>
                                                )}
                                                </Listbox.Option>
                                            ))}
                                            </Listbox.Options>
                                        </Transition>
                                        </div>
                                    </Listbox>
                                </div>
                            </div>
                            <div className="mb-2 grow shrink basis-36">    
                                <label className="block text-sm font-medium text-gray-700">Price</label>
                                <input                                                
                                    type="text"
                                    placeholder="1"
                                    name="loginEmail"    
                                />
                            </div>
                            
                            
                            
                        </div>

                        <div className="text-center pb-1">
                            <button
                            className="bg-sky-600 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-1/6 mb-3"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"

                            
                            >
                            Ingresar
                            </button>
                        </div>
                                    
                                </form>
                </div>
            

            </div>


            <div className="w-full sm:px-6">
           
                <div className="bg-white shadow px-4 md:px-10 pt-4  pb-5 overflow-y-auto rounded-lg">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-10 w-full text-sm leading-none text-gray-800">
                                <th className="font-bold text-left pl-12">Grado</th>
                                <th className="font-bold text-left pl-12">Nivel</th>
                                <th className="font-bold text-left pl-12">Sección</th>
                                <th className="font-bold text-left pl-12">N° Estudiantes</th>
                                <th className="font-bold text-left pl-12">Tutor</th>
                                <th className="font-bold text-left pl-12">Mas acciones</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-16 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                
                                <td className="pl-12">
                                    <p className="font-normal leading-none text-gray-800">1°</p>

                                </td>
                                <td className="pl-12">
                                    <p className="font-normal">Primaria</p>
                                </td>
                                <td className="pl-12">
                                    <p className="font-normal">Única</p>
                                </td>
                                <td className="pl-12">
                                    <p className="font-normal">15</p>
                                </td>

                                <td className="pl-12 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="shadow-md w-full h-full rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">Roxana Rodriguez Villagarcia</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Docente</p>
                                        </div>
                                    </div>
                                </td>
 
                                <td className="pl-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </td>
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                
                                <td className="pl-12">
                                    <p className="font-normal leading-none text-gray-800">2°</p>

                                </td>
                                <td className="pl-12">
                                    <p className="font-normal">Primaria</p>
                                </td>
                                <td className="pl-12">
                                    <p className="font-normal">Única</p>
                                </td>
                                <td className="pl-12">
                                    <p className="font-normal">20</p>
                                </td>

                                <td className="pl-12 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="shadow-md w-full h-full rounded-full object-cover" src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">Alex Tapia Creo</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Psicólogo</p>
                                        </div>
                                    </div>
                                </td>
 
                                <td className="pl-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </td>
                            </tr>

                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
