import React from 'react'

export const New = ( { imagen, mes, dia, evento, descripcion}) => {
  return (
    <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="">
        
        <div className="relative rounded-xl">
            <img className=" w-full rounded-2xl hover:cursor-pointer hover:brightness-75 duration-500" src={imagen} alt="people discussing on board" />

            <div className="absolute top-0 right-0 rounded-bl-50 rounded-tr-2xl bg-sky-600 px-4 text-center py-2 select-none">
                <p className="text-white m-0">{mes}</p>
                <p className="text-white text-4xl font-bold inline-block -translate-y-2">{dia}</p>
            </div>
        </div>


        <div className="pt-3">
            <p className=" font-bold text-2xl text-gray-600">{evento}</p>
            <p className=" hidden sm:flex text-gray-600 pt-5 leading-relaxed text-justify">
                {descripcion}</p>
        </div>
    </div>
  )
}
