import React, {Fragment} from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

export default function Navbar() {
    return (
        <nav className="bg-white bg-opacity-60 py-4 px-8 md:px-14 lg:px-20">
            <div className="flex justify-between">
                <div className="my-auto flex">
                    <h1 className="font-semibold font-nunito text-3xl leading-none text-green-400">Beauty </h1>
                    <h1 className="font-semibold font-nunito text-3xl">Gems</h1>
                </div>
                <Popover>
                    {({ open }) => (
                    <>
                    <div className="flex items-center justify-end md:hidden lg:hidden xl:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <div className="hidden md:bloxk lg:block xl:bloxk">
                        <ul className="flex space-x-2 md:space-x-8 lg:space-x-4 justify-end">
                            <li className="my-auto font-nunito border-b-2 border-black">Home</li>
                            <li className="my-auto font-nunito">Browse</li>
                            <li className="my-auto font-nunito">Source More</li>
                            <li className="my-auto font-nunito">Our Service</li>
                            <li className="my-auto font-nunito">Logo</li>
                            <li className="my-auto font-nunito">Register</li>
                            <li className="my-auto font-nunito py-1 px-4 bg-green-500 text-white rounded-md">
                                Post Request
                            </li>
                        </ul>
                    </div>
                    
                    <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-150 right right-full"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 left left-full"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                        >
                        <Popover.Panel
                            focus
                            static
                            className="absolute bg-gray-900 bg-opacity-20 top-0 bottom-0 inset-x-0 transition transform origin-top-right md:hidden lg:hidden xl:hidden"
                        >
                            <div className="fixed top-0 left-0 bottom-0 rounded-lg py-6 px-6 w-5/6 md:w-1/2 h-screen shadow-md bg-white overflow-hidden">
                                <div className="flex items-center justify-between px-6">
                                    <h1 className="font-semibold font-nunito text-2xl text-green-500">
                                        Beauty<span className="text-black">Gems</span>
                                    </h1>
                                    <div className="-mr-2 flex items-center">
                                        <Popover.Button className="bg-white rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                                            <span className="sr-only">Close main menu</span>
                                            <XIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-10 mb-4 px-6">
                                    <ul className="space-y-5">
                                        <li className="my-auto font-nunito">Home</li>
                                        <li className="my-auto font-nunito">Browse</li>
                                        <li className="my-auto font-nunito">Source More</li>
                                        <li className="my-auto font-nunito">Our Service</li>
                                        <li className="my-auto font-nunito">Logo</li>
                                        <li className="my-auto font-nunito">Register</li>
                                    </ul>
                                </div>
                                <div className="absolute bottom-0 px-6 w-full">
                                    <div className="pt-6 w-full">
                                        <a className="font-nunito py-3 px-4 mb-3 w-full flex justify-center bg-green-500 text-white rounded-md">
                                            Post Request
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel> 
                    </Transition>   
                    </>
                    )}
                </Popover>
            </div>
        </nav>
    )
}
