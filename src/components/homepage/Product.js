import React, {useEffect, useState, useContext} from 'react'
import $ from 'jquery'

export default function Product() {

    let [showPro1, setPro1] = useState(true)
    let [showPro2, setPro2] = useState(false)

    let togglePro1 = () => setPro1(true) || setPro2(false)
    let togglePro2 = () => setPro2(true) || setPro1(false)

    useEffect(() => {
        $(document).on('click', 'ul li', function(){
            $(this).addClass('text-white bg-green-500').siblings().removeClass('text-white bg-green-500');
            $(this).removeClass('bg-white text-green-500').siblings().addClass('bg-white text-green-500');
        })
    })

    return (
        <div className="container mx-auto">
            <div className="w-full">
                <h1 className="font-openSans font-bold text-2xl text-center">
                    Top Products
                </h1>
                <h1 className="text-center text-sm font-nunito my-2 mx-12 md:mx-auto">
                    We source directly from multiple factories to ensure the best quality and lowest prices.
                </h1>
                <ul className="flex mb-0 list-none md:flex-row md:flex-wrap pt-8 pb-4 overflow-x-auto" role="tablist">
                    <li className="-mb-px mr-2 flex-auto text-center text-white bg-green-500">
                        <a role="tablist" href="#link1" onClick={togglePro1}
                            className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block">
                            Profile
                        </a>
                    </li>
                    <li className="-mb-px mr-2 flex-auto text-center bg-white text-green-500">
                        <a role="tablist" href="#link2" onClick={togglePro2}
                            className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block">
                            Settings
                        </a>
                    </li>
                    <li className="-mb-px mr-2 flex-auto text-center bg-white text-green-500">
                        <a role="tablist" href="#link2"
                            className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block">
                            Options
                        </a>
                    </li>
                    <li className="-mb-px mr-2 flex-auto text-center bg-white text-green-500">
                        <a role="tablist" href="#link2"
                            className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block">
                            Options
                        </a>
                    </li>
                    <li className="-mb-px mr-2 flex-auto text-center bg-white text-green-500">
                        <a role="tablist" href="#link2"
                            className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block">
                            Options
                        </a>
                    </li>
                    <li className="-mb-px mr-2 flex-auto text-center bg-white text-green-500">
                        <a role="tablist" href="#link2"
                            className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block">
                            Options
                        </a>
                    </li>
                </ul>
                <div className="py-5">
                    { showPro1 ? <Profile1 /> : null}
                    { showPro2 ? <Profile2 /> : null}
                </div>
            </div>
        </div>
    )
}

const Profile1 = () =>{
    return(
        <div>
            Profile 1
        </div>
    )
}

const Profile2 = () =>{
    return(
        <div>
            Profile 2
        </div>
    )
}