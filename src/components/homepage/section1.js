import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'

export default function Section1() {
    return (
        <div className="bg-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className='py-4 md:py-14 mx-6 lg:mx-20'>
                    <div className="text-sm lg:text-lg my-4">
                        <h1 className="font-nunito text-gray-500">Beauty Gems</h1>
                    </div>
                    <div className="uppercase text-6xl lg:text-7xl 2xl:text-8xl font-bold font-openSans my-4">
                        <span>
                            start <span className="text-green-500">selling</span> online for <span className="text-green-500">free</span>
                        </span>
                    </div>
                    <div className="text-sm lg:text-lg my-4">
                        <p className="text-gray-500 font-nunito">
                            Beauty Gems allow you to choose the best product to sell from thousand dropshipping suppliers all over the world.
                        </p>
                    </div>
                    <div className="flex">
                        <input
                            className="w-10/12 md:w-5/12 lg:w-9/12 xl:w-7/12 2xl:w-5/12 h-10 placeholder-gray-500 focus:outline-none px-5"
                            placeholder="Enter Keywords"
                        />
                        <button className="p-4 h-10 bg-green-500">
                            <SearchIcon className="h-2.5 w-2.5 text-white rounded-md"/>
                        </button>
                    </div>
                </div>
                <div className="hidden md:block">
                    <img className="w-4/6 h-4/6 my-40 mx-auto object-cover"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdeifpxeochufn.cloudfront.net%2Fwp-content%2Fuploads%2F2017%2F06%2Fecommerce-2.png&f=1&nofb=1"
                    />
                </div>
            </div>
        </div>
    )
}
