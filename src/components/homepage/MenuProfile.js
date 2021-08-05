import React, {useEffect, useState} from 'react'
import Glide from '@glidejs/glide'

export default function MenuProfile() {

    let [isActive, setActive] = useState(1)
    let jsonProduct = [
        {id:1, merk: "emina", jenis: "sun screen"},
        {id:2, merk: "scarlett", jenis: "body lotion"},
        {id:3, merk: "scarlett", jenis: "serum"},
        {id:4, merk: "emina", jenis: "sun screen"},
        {id:5, merk: "emina", jenis: "sun screen"},
        {id:6, merk: "emina", jenis: "sun screen"},
        {id:7, merk: "emina", jenis: "sun screen"},
        {id:8, merk: "emina", jenis: "sun screen"}
    ]

    function toggleActive(index){
        setActive(index)
    }

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
                    {jsonProduct.map((item, i) => {
                        const index = i+1
                        return(
                            <div key={index} onClick={() => toggleActive(index)} 
                                className={`${isActive === item.id ? ("border-2 border-green-500") : ("border-none")} glide__slide flex-row mx-auto mb-2 p-1 rounded-md`}>
                                <img className="h-64 w-full rounded-md"
                                    src={`${process.env.PUBLIC_URL}/images/item.jpg`}
                                />
                                <div className="p-2">
                                    <h1 className="font-nunito font-bold">Sun Screen</h1>
                                    <h1 className="font-nunito text-gray-400">Emina</h1>
                                </div>
                                {isActive === item.id ?
                                    <button className="bg-green-500 text-white uppercase w-full py-1 rounded-md">
                                        Buy
                                    </button> : null
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
