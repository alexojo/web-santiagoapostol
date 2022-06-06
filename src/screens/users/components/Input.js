import React from 'react'

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

export const Input = ({label, basis, cursor="", name, value ="", placeholder, type = "text", onChange }) => {
    return (
        <div className={`mb-4 grow shrink ${basis}`}>    
            <label className="block text-xs font-medium text-gray-700 ml-1">{ label }</label>
            <input                                                
                className={`mt-[1px] block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:border-2 focus:outline-none ${cursor}`}
                placeholder= { placeholder }
                name= { name }
                value = { value }
                onChange = { onChange }
                type = { type }
                required
            />
        </div>
    )
}

export const InputSearch = ({label, name, value ="", placeholder, onChange }) => {
    return (
        <div className="mb-2 grow shrink basis-1/4">    
            <label className="block text-xs font-medium text-gray-700 ml-1">{ label }</label>
            <div class="flex mt-[1px]">
                <input 
                    className=" w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white border-y border-l  border-gray-300 rounded-l-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:border-y-2 focus:border-l-2 focus:outline-none"
                    placeholder="Buscar"
                    name = { name }
                    value = { value }
                    onChange = { onChange }/>
                <button class=" bg-slate-200 shadow-gray-300/40 shadow-lg font-semibold text-gray-700 pl-2 pr-1 rounded-r-md hover:text-sky-600 hover:bg-slate-300 transition duration-300 ease-in-out"
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light">
                    <i className="fa-solid fa-magnifying-glass mr-2"></i>    
                </button>
            </div>
        </div>
    )
}

export const InputSearchTable = () => {

  return (
    
    <div class="relative flex items-center text-gray-400 focus-within:text-sky-600">
        <span class="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
        <svg xmlns="http://ww50w3.org/2000/svg" class="w-4 fill-current" viewBox="0 0 35.997 36.004">
            <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
        </svg>
        </span>
        <input type="search" placeholder="Buscar" 
              class="w-full pl-14 pr-4 py-1.5 rounded-md text-sm text-gray-700 outline-none border border-gray-300 focus:border-sky-600 focus:border-2 transition"/>
    </div>
    
  )
}



export const InputListbox = ({ label, basis, people, selected, setSelected }) => {

    return (
        <div className={`grow shrink ${basis}`}>
            <label className="block text-xs font-medium text-gray-700 ml-1">{ label }</label>
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative">
                  <Listbox.Button className="mt-[1px] block w-full px-3 py-1.5 text-sm text-left font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:border-2 focus:outline-none">
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
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm text-left font-normal text-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {people.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                              active ? 'bg-slate-200 text-sky-600' : 'text-gray-700'
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
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-600">
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
        
    )
}