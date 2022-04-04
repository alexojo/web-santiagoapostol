import React from 'react'

export const AboutUs = () => {
  return (
    <>
    <button type="button" class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Modal title</h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
        Modal body text goes here.
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button" class="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">Close</button>
        <button type="button" class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1">Save changes</button>
      </div>
    </div>
  </div>
</div>
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div data-aos="fade-right" data-aos-duration="1000"
                className=" w-full text-justify">
                <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
                    Formando personas de calidad</h2>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                    En estos 28 años de vida Institucional, la I.E.P. "Santiago Apóstol" se ha hecho parte de la historia de nuestra comunidad Santiaguina, partiendo de que nuestra labor de
                    compromiso es el de FORMAR PERSONAS DE CALIDAD para lo cual contamos con profesionales de probada trayectoria, quienes vuelcan sus conocimientos, experiencia y amor en la
                    formación de nuestros niños, para que sean hombre y mujeres de bien que destaquen en nuestra sociedad y trasciendan para el bien de sus familiar, la comunidad y del país,
                    siendo prueba de ello las mas de 14 de promociones de ex alumnos santiaguinos y las que vendrán.
                </p>
            </div>

            <div data-aos="zoom-in" data-aos-duration="1000" 
                className="lg:mt-14 sm:mt-10 mt-12">
                <img className="lg:block hidden w-full rounded-lg" src="https://i.ibb.co/WGzc4Ys/DSC-0019-3.jpg" alt="Group of people Chilling" />
                <img className="lg:hidden sm:block hidden w-full rounded-lg" src="https://i.ibb.co/R2gHH6k/DSC-0019-2.jpg" alt="Group of people Chilling" />
                <img className="sm:hidden block w-full rounded-lg" src="https://i.ibb.co/xgpwtvq/DSC-0019-4.jpg" alt="Group of people Chilling" />
            </div>

            <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                <div data-aos="fade-right" data-aos-duration="1000"
                    className="w-full xl:w-5/12 lg:w-6/12 text-justify">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Nuestra Historia</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-4">
                        Los orígenes de nuestra institución datan del año 1994 y se vinculan al trabajo encomiable de su fundadora y promotora la Señora Leonor Villagarcía Aquize,
                        quien junto a su familia, sintieron la necesidad de ayudar a los padres de familia a formar a las niñas y niños y adolescentes como personas de calidad lo
                        cual sabemos sólo puede ser el resultado de una educación integral, de allí es que surge la idea de crear una institución educativam en este maravilloso
                        distrito de personas emprendedoras y luchadoras, para luego, posicionarse en el corazón del mismo.
                    </p>
                    {/* <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the
                         English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from
                    </p> */}
                </div>
                <div  data-aos="fade-left" data-aos-duration="1000" 
                    className="lg:flex items-center w-full lg:w-1/2 ">
                    <img className="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" />
                </div>
            </div>
        </div>
    </>
  )
}
