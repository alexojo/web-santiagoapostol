import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const people = [
  { name: 'Administrador' },
  { name: 'Docente' },
  { name: 'Secretaria' },
  { name: 'Estudiante' }
]

export const AdminScreen = () => {

    const [selected, setSelected] = useState(people[0])

    return (
        <div className='pl-60 h-screen flex items-center z-20'>
           <div className="fixed top-16 w-72">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
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
        </div>
    )
}
