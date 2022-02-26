import React from 'react'

export const Header = () => {

    return (
        <>
            <nav className="w-full border-b-2 sticky top-0 bg-white">
                <div className="py-5 md:py-0 container mx-auto flex justify-center items-center md:justify-between">
                    <div aria-label="Home. logo" role="img">
                        <img className="w-12 justify-center" src="https://scontent.faqp2-2.fna.fbcdn.net/v/t1.6435-9/32595184_1915145531893473_362045681260560384_n.png?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHSDxCN5tYilmE3vcSAKxGzWE_RNIJeSaFYT9E0gl5JoREzDlIravuOJqwsniOCaR6bbncuc0BOo2dB69p8nApm&_nc_ohc=utCjc3OB0rkAX-kx-xI&tn=NXhlY5J3Uh-rUa_U&_nc_ht=scontent.faqp2-2.fna&oh=00_AT_u7ty0jgmY17pK3io4JxTtpDMl5KgRj6Es7O28SwV5Gw&oe=6238E55C" alt="logo" />
                    </div>

                    <div id="menu" className=" " >
                        <ul className=" invisible md:visible  md:text-base py-10 md:flex  md:flex-row justify-center fixed md:relative 
                                        top-0 bottom-0 left-0 right-0  md:bg-transparent ">
                            <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                                <p>Inicio</p>
                            </li>
                            <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                <p>Nosotros</p>
                            </li>
                            <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                <p >Preguntas Frecuentes</p>
                            </li>
                            <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                <p>Noticias</p>
                            </li>
                            <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                <p>Contáctanos</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

        </>
  )
}
