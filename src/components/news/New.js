import React from 'react'

export const New = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" class="">
        
        <div class="relative rounded-xl">
            <img className=" w-full rounded-2xl hover:cursor-pointer hover:brightness-75 duration-500" src="https://www.turismocuzco.com/wp-content/uploads/backup/2010/09/Las-danzas-tipicas-del-Cusco.jpg" alt="people discussing on board" />

            <div class="absolute top-0 right-0 rounded-bl-50 rounded-tr-2xl bg-sky-600 px-4 text-center py-2 select-none">
                <p class="text-white m-0">Setiembre</p>
                <p class="text-white text-4xl font-bold inline-block -translate-y-2">24</p>
            </div>
        </div>


        <div class="pt-3">
            <p class=" font-bold text-2xl text-gray-600">Evento Fiestas del Cusco</p>
            <p class=" hidden sm:flex text-gray-600 pt-5 leading-relaxed text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>

    </div>
  )
}
