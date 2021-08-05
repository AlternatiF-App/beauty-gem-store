import React, {useEffect, useState, useContext} from 'react'
import $ from 'jquery'
import { BrowserRouter as Router, Switch, Route, useLocation, Link} from "react-router-dom";
import Glide from '@glidejs/glide'
import CardProduct from './CardProduct'

export default function Product() {

    const [isActive, setActive] = useState(1)

    let jsonMenu = [
        {id:1, menu: "profile"},
        {id:2, menu: "settings"},
        {id:3, menu: "options"},
        {id:4, menu: "options"},
        {id:5, menu: "options"},
        {id:6, menu: "options"}
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
                        console.log("MENU", index)
                        return(
                            <li key={index} className="mr-2 flex-auto text-center">
                                <a role="tablist" onClick={() => toggleActive(index)}
                                    className={`${isActive === item.id ? ("bg-green-500 text-white") : ("bg-white text-green-500")} text-xs cursor-pointer font-bold uppercase px-5 py-3 shadow-lg rounded block`}>
                                    {item.menu}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="py-5">
                    {
                        isActive === 1 ? <Profile/> : (
                            isActive === 2 ? <Settings/> : (
                                isActive === 3 ? <Options/> : null
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

const Profile = () =>{

    let slider = new Glide('.products', {
        type: 'slider',
        perView: 6,
        peek:{
            before:0,
            after:0
        },
        rewind:false,
        bound:true,
        animationTimingFunc:"ease",
        animationDuration:1000,
        swipeThreshold:50,
        dragThreshold:10,
        breakpoints:{
            360:{
                perView:2
            },
            640:{
                perView:2
            },
            768:{
                perView:4
            },
            1024:{
                perView:5
            },
            1280:{
                perView:6
            }
        }
    })

    useEffect(() => {
        slider.mount()
    }, [slider])

    return(
        <div className="glide products container mx-auto overflow-x-auto">
            <div className="glide__track" data-glide-el="track">
                <div className="glide__slides flex">
                    <div className="glide_slide">
                        <CardProduct/>
                    </div>
                    <div className="glide_slide">
                        <CardProduct/>
                    </div>
                    <div className="glide_slide">
                        <CardProduct/>
                    </div>
                    <div className="glide_slide">
                        <CardProduct/>
                    </div>
                    <div className="glide_slide">
                        <CardProduct/>
                    </div>
                    <div className="glide_slide">
                        <CardProduct/>
                    </div>
                    <div className="glide_slide">
                        <CardProduct/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Settings = () =>{
    return(
        <div className="space-y-5 mx-auto">
            <p className="font-nunito text-base">
            Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
            </p>
            <p className="font-nunito text-base">
            Dynamically innovate resource-leveling customer service for state of the art customer service.
            </p>
        </div>
    )
}

const Options = () =>{
    return(
        <div className="space-y-5 mx-auto">
            <p className="font-nunito text-base">
                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
            </p>
            <p className="font-nunito text-base">
                Dramatically maintain clicks-and-mortar solutions without functional solutions.
            </p>
        </div>
    )
}