import React from 'react'
import { Table } from '../../../components/Table'
import { UserDetails } from '../../../components/UserDetails'

export const ListaUsuarios = () => {
    return (
        <div className="flex overflow-auto h-full">
            <div className="w-full ml-6 overflow-auto mb-5">
                <Table />
            </div>
            <div className="w-96 mr-6 ml-2 mb-5">
                <UserDetails />
            </div>
        </div>
    )
}
