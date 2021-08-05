import React, {useState} from 'react'
import MenuProfile from './MenuProfile'
import MenuSettings from './MenuSettings'
import MenuOptions from './MenuOptions'

export default function Product() {

    const [isActive, setActive] = useState(1)

    let jsonMenu = [
        {id:1, menu: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"},
        {id:2, menu: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},
        {id:3, menu: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"},
        {id:4, menu: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"},
        {id:5, menu: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"},
        {id:6, menu: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"}
    ]

    function toggleActive(index){
        setActive(index)
    }

    return (
        <div className="container mx-auto px-4">
            <div className="w-full">
                <h1 className="font-openSans font-bold text-2xl text-center">
                    Top Products
                </h1>
                <h1 className="text-center text-sm font-nunito my-2 mx-12 md:mx-auto">
                    We source directly from multiple factories to ensure the best quality and lowest prices.
                </h1>
                <ul className="flex mb-0 list-none md:flex-row md:flex-wrap pt-8 pb-4 overflow-x-auto" role="tablist">
                    {jsonMenu.map((item, i) => {
                        const index = i+1
                        return(
                            <li key={index} className="mr-2 flex-auto text-center">
                                <a role="tablist" onClick={() => toggleActive(index)}
                                    className={`${isActive === item.id ? ("border-b-2 border-green-500 text-green-500") : ("border-none text-gray-400")} flex justify-center h-12 w-16 cursor-pointer text-xs font-bold uppercase shadow-lg rounded`}>
                                    <svg className={`${isActive === item.id ? ("border-2 border-green-500") : ("border-none") } h-10 w-10 rounded-md p-1 `}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={item.menu} />
                                    </svg>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="py-5">
                    {
                        isActive === 1 ? <MenuProfile/> : (
                            isActive === 2 ? <MenuSettings/> : (
                                isActive === 3 ? <MenuOptions/> : null
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}