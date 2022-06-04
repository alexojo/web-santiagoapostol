import { ChartPieIcon, ClipboardListIcon, IdentificationIcon, PencilAltIcon } from '@heroicons/react/outline';
import { SelectorIcon } from '@heroicons/react/solid';
import React, { useState } from 'react'
import { Input, InputSearch } from '../../../components/Input';
import { Tabs } from '../../../components/Tabs';

export const StudentScreen = () => {

    const tabs = [
        {
            target: "#tabs-home3",
            text: "Su Perfil",
            icon: <IdentificationIcon className="h-5 w-5 mr-1"/>,
            component: <Input />
        },
        {
            target: "#tabs-profile3",
            text: "Notas",
            icon: <ClipboardListIcon className="h-5 w-5 mr-1"/>,
            component: <InputSearch />
        },
        {
            target: "#tabs-messages3",
            text: "Asistencia",
            icon: <ChartPieIcon className="h-5 w-5 mr-1"/>,
            component: <Input />
        }
      ];

    return (
        <div className='pl-60 h-screen flex flex-col items-start overflow-auto bg-gray-100'>

            {/* titulo */}
            <div className="w-full sm:px-6 mb-2 mt-5 sm:flex items-center justify-between">
                <div>
                    <p className="text-2xl font-bold leading-normal text-gray-800">Estudiante (Alexander Javier Huaman)</p>

                </div>
                
            </div>

            {/* Tabs */}
                
            <div className='mb-3 w-full sm:px-6 mt-2'>       
                <Tabs tabs={ tabs }/>
            </div>




        </div>
    )
}
