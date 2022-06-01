import React, { useState } from 'react'

export const Tabs = ({ tabs }) => {

    const [Menu, setMenu] = useState("second")

    return (
        <>
            <div class="mb-4 border-b-2 border-gray-30 dark:border-gray-700 mx-5" >
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center nav nav-tabs"  id="tabs-tab3" role="tablist">
                    
                    <li class="relative group" role="presentation">
                        <a class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 dark:hover:text-gray-300 active"
                        id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3" aria-selected="true" href="#tabs-home3"
                        >Settings xd</a>

                        <div className='bg-blue-500 h-[3px] w-full absolute left-0 -bottom-[1px] rounded-t-sm hidden group-hover:flex'></div>
                    </li>
                    <li class="relative group" role="presentation">
                        <a class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 dark:hover:text-gray-300 active"
                        id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab" aria-controls="tabs-profile3" aria-selected="true" href="#tabs-profile3"
                        >Settings</a>

                        <div className='bg-blue-500 h-[3px] w-full absolute left-0 -bottom-[1px] rounded-t-sm hidden group-hover:flex'></div>
                    </li>
                    <li class="relative group" role="presentation">
                        <a class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 dark:hover:text-gray-300 active"
                        id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tabs-messages3" role="tab" aria-controls="tabs-messages3" aria-selected="true" href="#tabs-messages3"
                        >Settings</a>

                        <div className='bg-blue-500 h-[3px] w-full absolute left-0 -bottom-[1px] rounded-t-sm hidden group-hover:flex'></div>
                    </li>
                </ul>
            </div>

            <div class="tab-content" id="tabs-tabContent3">
                <div class="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
                    Tab 1 content button version
                </div>
                <div class="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                    Tab 2 content button version
                </div>
                <div class="tab-pane fade" id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                    Tab 3 content button version
                </div>
            </div>

    

        </>
    )
}
