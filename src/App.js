import React from 'react'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'

export const App = () => {
  return (
    <div className="relative">
        <Header/>
        <Hero/>

        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="lg:w-10/12 w-full">
                <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">About</p>
                <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
                    We are here to make great design accessible and delightfull for everyone</h2>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire,</p>
            </div>

            <div className="lg:mt-14 sm:mt-10 mt-12">
                <img className="lg:block hidden w-full" src="https://i.ibb.co/GvwJnvn/Group-736.png" alt="Group of people Chilling" />
                <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" alt="Group of people Chilling" />
                <img className="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" alt="Group of people Chilling" />
            </div>

            <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                <div className="w-full xl:w-5/12 lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Story</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="lg:flex items-center w-full lg:w-1/2 ">
                    <img className="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" />
                </div>
            </div>
        </div>



      <div className="pt-10">
          <h2 className="text-2xl leading-6 text-gray-800 text-center px-4">Testimonials</h2>
          <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">What our client says</h1>
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-20 px-10 py-20 gap-6">
              <div>
                  <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
                      <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                          <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0)">
                                  <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                  <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                              </g>
                              <defs>
                                  <clipPath id="clip0">
                                      <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                  </clipPath>
                              </defs>
                          </svg>
                          <p className="xl:w-80 text-base leading-normal text-center mt-4">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                      </div>
                      <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                          <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g filter="url(#filter0_dd)">
                                  <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                              </g>
                              <defs>
                                  <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                      <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                      <feOffset dy={4} />
                                      <feGaussianBlur stdDeviation={3} />
                                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                      <feOffset dy={2} />
                                      <feGaussianBlur stdDeviation="2.5" />
                                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                      <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                  </filter>
                              </defs>
                          </svg>
                      </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-10">
                      <img src="https://i.ibb.co/ZgF5Zzz/avatar-1.png" alt="profile pictre" className="w-12 h-12" />
                      <p className="text-base font-semibold leading-4 my-2 text-gray-800">Tom Koch</p>
                      <p className="text-base leading-4 text-center text-gray-600">Developer</p>
                  </div>
              </div>
              <div>
                  <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
                      <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                          <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0)">
                                  <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                  <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                              </g>
                              <defs>
                                  <clipPath id="clip0">
                                      <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                  </clipPath>
                              </defs>
                          </svg>
                          <p className="xl:w-80 text-base leading-normal text-center mt-4">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                      </div>
                      <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                          <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g filter="url(#filter0_dd)">
                                  <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                              </g>
                              <defs>
                                  <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                      <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                      <feOffset dy={4} />
                                      <feGaussianBlur stdDeviation={3} />
                                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                      <feOffset dy={2} />
                                      <feGaussianBlur stdDeviation="2.5" />
                                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                      <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                  </filter>
                              </defs>
                          </svg>
                      </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-10">
                      <img src="https://i.ibb.co/8BLjmqz/avatar-2.png" alt="profile pictre" className="w-12 h-12" />
                      <p className="text-base font-semibold leading-4 my-2 text-gray-800">Alan Max</p>
                      <p className="text-base leading-4 text-center text-gray-600">Designer</p>
                  </div>
              </div>
              <div>
                  <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
                      <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                          <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0)">
                                  <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                  <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                              </g>
                              <defs>
                                  <clipPath id="clip0">
                                      <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                  </clipPath>
                              </defs>
                          </svg>
                          <p className="xl:w-80 text-base leading-normal text-center mt-4">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                      </div>
                      <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                          <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g filter="url(#filter0_dd)">
                                  <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                              </g>
                              <defs>
                                  <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                      <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                      <feOffset dy={4} />
                                      <feGaussianBlur stdDeviation={3} />
                                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                      <feOffset dy={2} />
                                      <feGaussianBlur stdDeviation="2.5" />
                                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                      <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                  </filter>
                              </defs>
                          </svg>
                      </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-10">
                      <img src="https://i.ibb.co/y0KCX7p/avatar-3.png" alt="profile pictre" className="w-12 h-12" />
                      <p className="text-base font-semibold leading-4 my-2 text-gray-800">Kera Joo</p>
                      <p className="text-base leading-4 text-center text-gray-600">Support</p>
                  </div>
              </div>
          </div>
      </div>

      <div className="bg-gray-800 px-4 py-9 md:px-6 md:py-12 lg:px-20 lg:py-12">
            <div className="flex flex-col md:flex-row md:justify-between pb-10">
                <div className="flex flex-col items-center">
                    <button className="w-full md:w-auto px-24 py-2 bg-white border rounded-md text-xl font-semibold leading-tight text-gray-800 hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-200 focus:ring-opacity-50">Get started</button>
                    <p className="pt-2 text-sm leading-none text-gray-300 cursor-pointer hover:underline">Or see our plans</p>
                </div>
                <div>
                    <p className="w-72 pt-9 md:py-0 text-sm leading-tight text-gray-300">10:00 AM to 6 PM, Monday - Friday Semurh inc 800 bolystan street suite 2475, Bostan MA</p>
                </div>
            </div>

            <div className="w-full px-8 border-white border rounded-md flex flex-col justify-start md:flex-row md:justify-between lg:justify-center gap-2 md:gap-20 py-6">
                <p className="text-sm leading-none text-gray-300">USA 800 Bolystan street,2475,Bostan MA</p>
                <div className="flex justify-start gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e2e8f0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg>
                    <p className="text-sm leading-none text-gray-300" >mail@smrush .com</p>
                </div>
            </div>

            <div className="pt-10 flex flex-col xl:flex-row justify-between">
                <div className="flex flex-col md:gap-10">
                    <div className="flex items-start w-full">
                        <div className="pb-10 md:pb-0">
                            <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Product</h3>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Email Marketing</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Website Builder</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Market Automation</p>
                        </div>
                        <div className="pb-10 md:pb-0 2xl:pl-20 pl-16">
                            <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Support</h3>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Generate lead</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Size Guide</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Shipping</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Payment Security</p>
                        </div>
                        <div className="pb-10 md:pb-0 2xl:pl-20 pl-16 md:block hidden">
                            <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Solutions</h3>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Generate Lead</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Self knowledge</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Work from home</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Engage customers</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Boost online sales</p>
                        </div>
                        <div className="pb-10 md:pb-0 2xl:pl-20 pl-16 md:block hidden">
                            <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Visit us</h3>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Mayfair</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Melbourne</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Wimbledon</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="pb-10 md:pb-0 md:hidden">
                            <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Solutions</h3>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Generate Lead</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Self knowledge</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Work from home</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Engage customers</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Boost online sales</p>
                        </div>
                        <div className="pb-10 md:pb-0 pl-16 md:hidden">
                            <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Visit us</h3>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Mayfair</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Melbourne</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Wimbledon</p>
                        </div>
                    </div>
                    <div className="flex items-start w-full">
                        <div className="pb-10 md:pb-0">
                            <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Pricing</h3>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Integration</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Affiliate program</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Agency Partner</p>
                        </div>
                        <div className="pb-10 md:pb-0 2xl:pl-20 pl-16">
                            <h3 className="text-xl cursor-default font-semibold leading-tight text-white pb-8">Entreprenuer</h3>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Online Marketer</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Marketing Manager</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Mid and large companies</p>
                        </div>
                        <div className="2xl:pl-20 md:pl-16 md:block hidden">
                            <h3 className="text-xl cursor-default font-semibold leading-tight text-white pb-8">About Getresponce</h3>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Career</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Api docs</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Accessibility</p>
                        </div>
                    </div>
                    <div className="2xl:pl-20 md:pl-16 md:hidden">
                        <h3 className="text-xl cursor-default font-semibold leading-tight text-white pb-8">About Getresponce</h3>
                        <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Career</p>
                        <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Api docs</p>
                        <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Accessibility</p>
                    </div>
                </div>

                <div className="pt-16 md:pt-12 lg:pt-0">
                    <h3 className="text-xl font-semibold leading-tight text-white">Blog</h3>
                    <div className="pt-8 mb-6 flex justify-center cursor-pointer items-center flex-col md:flex-row md:justify-start gap-6">
                        <img className="hidden lg:block" src="https://i.ibb.co/qYT5Rfg/Rectangle-93.png" alt="a workspace" />
                        <img className="block lg:hidden" src="https://i.ibb.co/FxNmTwC/Rectangle-93-1.png" alt="a workspace" />
                        <p className="text-center md:text-left text-base font-semibold cursor-pointer leading-normal text-gray-100">Email Marketing for beginners</p>
                    </div>
                    <div className="mb-6 flex justify-center cursor-pointer items-center flex-col md:flex-row md:justify-start gap-6">
                        <img className="hidden lg:block" src="https://i.ibb.co/z88NZGh/Rectangle-94.png" alt="a woman" />
                        <img className="block lg:hidden" src="https://i.ibb.co/pnbjk3y/Rectangle-93-2.png" alt="a woman" />
                        <p className="text-center md:text-left text-base font-semibold cursor-pointer leading-normal text-gray-100">Essential guide for dress</p>
                    </div>
                    <div className="mb-6 flex justify-center cursor-pointer items-center flex-col md:flex-row md:justify-start gap-6">
                        <img className="hidden lg:block" src="https://i.ibb.co/vZYLsMs/Rectangle-95.png" alt="a workspace" />
                        <img className="block lg:hidden" src="https://i.ibb.co/qpCrNwx/Rectangle-93-3.png" alt="a workspace" />
                        <p className="text-center md:text-left text-base font-semibold leading-normal text-gray-100">Essential guide for landing pages</p>
                    </div>
                    <div className="flex items-center md:justify-start justify-center">
                        <button className=" pt-8 hover:underline text-base font-medium leading-none text-white cursor-pointer">View all posts</button>
                    </div>
                </div>
            </div>

            <div className="pt-10 lg:pt-24 flex justify-center md:justify-start gap-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler cursor-pointer icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler cursor-pointer icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler cursor-pointer icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler cursor-pointer icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="3" y="5" width="18" height="14" rx="4" />
                    <path d="M10 9l5 3l-5 3z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler cursor-pointer icon-tabler-brand-pinterest" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="8" y1="20" x2="12" y2="11" />
                    <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
                    <circle cx="12" cy="12" r="9" />
                </svg>
            </div>
        </div>


    </div>
  )
}
