import React from 'react'

export const Content = () => {
  return (
    <div className='w-full bg-gray-50 py-10'>
        <div className="mx-auto  container flex flex-col items-center justify-center">

            <div data-aos="zoom-in" data-aos-duration="1000" className="xl:w-1/2 w-11/12">
                <h1 tabIndex={0} className="lg:text-6xl md:text-5xl text-3xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800">
                    Tocando cientos de vidas
                </h1>
                <h2 role="contentinfo" tabIndex={0} className="text-base leading-normal text-center text-gray-600 mt-5">
                    Brindando nuestra experiencia y amor en la formación de nuestros niños, para que sean hombres y mujeres de bien que destaquen en nuestra sociedad
                </h2>
            </div>

            <div data-aos="zoom-out" data-aos-duration="1000"
                className="px-4 flex flex-wrap justify-center mt-4 ">

                <div className="mt-12">
                    <div className="flex items-end ">
                        <img tabIndex={0}  src="https://i.ibb.co/kBgtHK6/Rectangle-5.png" alt="girl with blue background" className="w-20 h-20 rounded-lg mr-6 hover:brightness-75  duration-500" />
                        <img tabIndex={0}  src="https://i.ibb.co/X20GD65/DSC-0190-2.jpg" alt="guy winking" className="w-48 h-36 rounded-lg hover:brightness-75  duration-500 object-cover" />
                    </div>
                    <div className="flex items-center justify-end my-6 hover:brightness-75  duration-500">
                        <img tabIndex={0}  src="https://i.ibb.co/HHQ3BNQ/DSC-0123-2.jpg" alt="guy smiling" className=" w-4/5 h-44 rounded-lg hover:brightness-75  duration-500 object-cover"/>
                    </div>
                    <div className="flex items-start">
                        <img tabIndex={0}  src="https://i.ibb.co/Q9s8RZF/DSC-0033-2.jpg" alt="girl with bluw background" className="w-48 h-48 rounded-lg hover:brightness-75  duration-500 object-cover" />
                        <img tabIndex={0}  src="https://i.ibb.co/whwFpZ5/DSC-0066.jpg" alt="guy with glasses" className="w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover object-fit hover:brightness-75  duration-500" />
                    </div>
                </div>
                
                <div className="ml-6 mt-6">
                    <img tabIndex={0}  src="https://i.ibb.co/ynCjC7X/DSC-0048-2.jpg" className="w-72 h-80 rounded-lg hover:brightness-75  duration-500 object-cover" alt="guy with sunglasses" />
                    <div className="flex items-start mt-6">
                        <img tabIndex={0}  src="https://i.ibb.co/yF3t1X1/DSC-0014-2.jpg" alt="girl  laughing" className="w-48 h-48 rounded-lg hover:brightness-75  duration-500 object-cover" />
                        <img tabIndex={0}  src="https://i.ibb.co/2Yj51CY/Rectangle-13.png" alt="guy with glasses" className="w-20 h-20 rounded-lg ml-6 object-cover object-fit hover:brightness-75  duration-500" />
                    </div>
                </div>
                
                <div className="mt-6 ml-6">
                    <div className="lg:flex ">
                        <div>
                            <img tabIndex={0}  src="https://i.ibb.co/yFFD6xF/DSC-0060-2.jpg" alt="group of friends" className="w-96 h-72 rounded-lg object-center object-fit hover:brightness-75  duration-500 object-cover" />
                        </div>
                        <div>
                            <div className="flex ml-6">
                                <img tabIndex={0}  src="https://i.ibb.co/80jvpSv/Rectangle-16.png" className="w-20 h-20 rounded-lg mt-14 hover:brightness-75  duration-500" alt="man" />
                                <img tabIndex={0}  src="https://i.ibb.co/6PR2Y74/Rectangle-15.png" className="w-20 h-24 mt-6 lg:mt-0 rounded-lg ml-6 hover:brightness-75  duration-500" alt="woman" />
                            </div>
                            <img tabIndex={0}  src="https://i.ibb.co/qWFDkRR/DSC-0131-2.jpg" alt="boy with blonde hair" className="ml-6 mt-6 w-48 h-32 rounded-lg hover:brightness-75  duration-500 object-cover" />
                        </div>
                    </div>
                    <div className="mt-6 flex flex-wrap">
                        <img tabIndex={0} className="w-48 h-48 rounded-lg hover:brightness-75  duration-500 object-cover"  src="https://i.ibb.co/fQ2BKcM/239313794-4317376238330252-6159125347695414633-n.jpg" alt="young girl with red hair" />
                        <img tabIndex={0} className="w-72 h-56 rounded-lg mt-6 sm:mt-0 ml-6 hover:brightness-75  duration-500 object-cover"  src="https://i.ibb.co/5BrkjWb/DSC-0109-3-3.jpg" alt="young girl with red hair" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
