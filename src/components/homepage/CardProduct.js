import React from 'react'

export default function CardProduct() {
    return (
        <div className="flex-row mx-auto">
            <img className="h-64 w-full rounded-md"
                src={`${process.env.PUBLIC_URL}/images/item.jpg`}
            />
            <div className="p-2">
                <h1 className="font-nunito font-bold">Sun Screen</h1>
                <h1 className="font-nunito text-gray-400">Emina</h1>
            </div>
            <button className="bg-green-500 text-white uppercase w-full py-1 rounded-md">
                Buy
            </button>
        </div>
    )
}
