import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'

export default function title() {
    return (
        <section className="container mx-auto py-10 md:py-20 px-8 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className='mx-auto space-y-4'>
                    <h1 className="text-gray-600 text-sm md:text-base font-semibold">Beauty Gems</h1>
                    <div>
                        <h1 className="text-5xl md:text-8xl font-nunito font-bold">START 
                            <span className="text-5xl md:text-8xl text-green-500 font-nunito font-bold"> SELLING</span>
                        </h1>
                        <h1 className="text-5xl md:text-8xl font-nunito font-bold">ONLINE FOR</h1>
                        <h1 className="text-5xl md:text-8xl text-green-500 font-nunito font-bold">FREE</h1>
                    </div>
                    <p className="text-sm md:text-base font-nunito font-semibold">
                        Beauty Gem Store allows you to choose the best products to sell
                        from thousand of dropshipping supplier all over the world
                    </p>
                    <div className="flex">
                        <input
                            id="search"
                            name="search"
                            type="text"
                            autoComplete="text"
                            required
                            className="appearance-none w-3/4 px-3 py-5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-border-gray-300 focus:border-gray-300 focus:z-10 sm:text-sm"
                            placeholder="Enter Keywords"
                        />
                        <i className="bg-green-500 text-white p-5">
                            <SearchIcon
                                className="h-5 w-5"
                            />
                        </i>
                    </div>
                </div>
                <div className="mx-auto hidden md:block">
                    <img className="h-full object-cover"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdeifpxeochufn.cloudfront.net%2Fwp-content%2Fuploads%2F2017%2F06%2Fecommerce-2.png&f=1&nofb=1"
                    />
                </div>
            </div>
        </section>
    )
}
