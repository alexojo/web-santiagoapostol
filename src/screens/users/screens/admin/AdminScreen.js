import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Tabs } from '../../components/Tabs'
import { Input, InputSearch, InputSearchTable } from '../../components/Input'
import { Table } from '../../components/Table'

const people = [
  { name: 'Administrador' },
  { name: 'Docente' },
  { name: 'Secretaria' },
  { name: 'Estudiante' }
]
const tabs = [
  {
      target: "#tabs-home3",
      text: "Información",
      icon: "fa-solid fa-circle-info",
      component: <Input />
  },
  {
      target: "#tabs-profile3",
      text: "Registrar",
      icon: "fa-solid fa-pen",
      component: <InputSearch />
  },
  {
      target: "#tabs-messages3",
      text: "Option 3",
      icon: "fa-solid fa-message",
      component: <Input />
  }
];

export const AdminScreen = () => {

    const [selected, setSelected] = useState(people[0])

    return (
      <div className='pl-60 h-screen overflow-auto bg-gray-100'>
        <div className='mt-3'>
          <Table />

        </div>


      
      </div>
    )
}
