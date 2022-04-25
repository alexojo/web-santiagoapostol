import React from 'react'

export const LoginScreen = () => {
  return (
    <>
        <div class="modal fade hidden overflow-y-auto overflow-x-hidden fixed w-full md:inset-0 h-modal md:h-full"
             id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >


            <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    

                    <div class="flex justify-end p-2">
                        <button type="button" data-bs-dismiss="modal" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>  
                        </button>
                    </div>
                    <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
                        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Iniciar Sesión</h3>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tu correo electrónico</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="70405614@santiagoapostol.com"/>
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input  type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"/>
                                </div>
                                <div class="ml-3 text-sm">
                                <label  class="font-medium text-gray-900 dark:text-gray-300">Recuerdame</label>
                                </div>
                            </div>
                            <a href="#" class="text-sm text-sky-600 hover:underline dark:text-blue-500">Olvide mi contraseña?</a>
                        </div>

                        <button type="submit" class="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-sky-600 dark:focus:ring-blue-800"
                        >
                            Ingresar
                        </button>
                        
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            No estas registrado? <a href="#" class="text-sky-600 hover:underline dark:text-blue-500">Crear cuenta</a>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    </>
  )
}
