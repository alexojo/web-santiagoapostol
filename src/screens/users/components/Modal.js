import React from 'react'

export const Modal = ({id, title="a", subtitle="a" }) => {
    return (
        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
             id= {id}
             tabindex="-1" 
             aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                
                <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                
                    <div class="p-6 text-center flex flex-col justify-center items-center">

                        <i class="fa-solid fa-circle-check text-emerald-500 fa-3x py-4"></i>                   
                        

                        <p className="text-base font-semibold leading-normal text-center text-gray-800">{ title }</p>
                        <p className=" text-sm leading-none text-center text-gray-600 mt-2">{ subtitle }</p>
                    
                        <button className="text-sm font-medium leading-none mt-6 text-white px-6 py-4 bg-emerald-500 rounded w-full hover:bg-emerald-600 transform duration-300 ease-in-out focus:outline-none"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                data-bs-dismiss="modal">Continuar</button>


                    </div>
                </div>
                
            </div>
        </div>
    )
}
