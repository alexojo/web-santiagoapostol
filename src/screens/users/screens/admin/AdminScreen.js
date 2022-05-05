import React from 'react'

export const AdminScreen = () => {

    function showDropDownMenu(el) {
        el.target.parentElement.children[1].classList.toggle("hidden");
    }

    function swaptext(el) {
        const targetText = el.target.innerText;
        document.getElementById("drop-down-content-setter").innerText =
          targetText;
        document.getElementById("drop-down-div").classList.toggle("hidden");
  
      }

    return (
        <div className='pl-60 h-screen flex items-center'>
            <div>
          <p className="mb-3 text-sm font-medium leading-none text-left text-gray-800">Team Type</p>
          <div className="relative ">
            <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
              <button onClick={showDropDownMenu} className="relative flex items-center justify-between w-full h-12 px-5 py-3 dropbtn-one">
                <span className="pr-4 text-sm font-medium text-gray-600" id="drop-down-content-setter">
                  Beginner
                </span>
                <svg id="rotate" className="absolute z-10 cursor-pointer right-5" width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="absolute right-0 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12" id="drop-down-div">
                <a href="javascript:void(0)" className="hover"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                    Beginner
                  </p></a>
                <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                    Intermediate
                  </p></a>
                <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                    Expert
                  </p></a>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
        </div>
    )
}
