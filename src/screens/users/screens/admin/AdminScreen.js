import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Tabs } from '../../components/Tabs'

const people = [
  { name: 'Administrador' },
  { name: 'Docente' },
  { name: 'Secretaria' },
  { name: 'Estudiante' }
]

export const AdminScreen = () => {

    const [selected, setSelected] = useState(people[0])

    return (
      <div className='pl-60 h-screen overflow-auto bg-gray-100'>
        <Tabs  tabs = {["INFORMACION","CURSOS"]}/>
      </div>
    )
}
