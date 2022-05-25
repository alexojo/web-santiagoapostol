import React from 'react'

export const Modal = ({}) => {
    return (
        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
             id="exampleModal" 
             tabindex="-1" 
             aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                
                <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                </button>
                <div class="p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-40   w-40 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
</svg>
                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Usuario ingresado correctamente</h3>
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
                </div>

                
            </div>
        </div>
    )
}
