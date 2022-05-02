import React from 'react'

export const ContactUs = () => {
    return (
        <div className=" bg-gray-100 w-full py-10">
            <div className="container mx-auto">
                <div className="flex lg:flex-row justify-between flex-col lg:gap-8 gap-5">
                    <div>
                        <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold 2xl:leading-10 leading-0 lg:text-left text-center text-sky-600">
                        Contáctanos para mayor información
                        </h1>
                        <h2 tabIndex={0} className="text-base leading-normal lg:text-left text-center text-sky-600 mt-5">
                        Por este medio podremos contactarte y ofrecerte mejor atencion para tus dudas.
                        </h2>
                    </div>
                    <div className="flex justify-center items-center">
                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500
                            bg-white transition duration-150 ease-in-out hover:bg-sky-400 hover:text-white md:text-xl font-medium md:font-semibold  
                            rounded text-sky-600 px-4 sm:px-10 border-2 border-sky-600 py-2 sm:py-4 text-sm">Contáctanos</button>

                        </div>
                </div>
            </div>

        </div>
    )
}
