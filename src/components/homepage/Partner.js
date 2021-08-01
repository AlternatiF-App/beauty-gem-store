import React, {useEffect} from 'react'
import Glide from '@glidejs/glide'
import PartnerCard from './PartnerCard'

export default function Partner() {

    let slider = new Glide('#glide', {
        type: 'slider',
        perView: 6,
        bound:true,
        lenght:6,
        width:1536,
        breakpoints:{
            360:{
                perView:2,
                lenght:2,
                width:360,
                touchAngle:1,
                bound:true
            },
            640:{
                perView:4,
                lenght:4,
                width:640,
                bound:true
            },
            768:{
                perView:4,
                lenght:4,
                width:768,
                bound:true
            },
            1024:{
                perView:4,
                lenght:4,
                width:1024,
                bound:true
            },
            1280:{
                perView:5,
                lenght:5,
                width:1280,
                bound:true
            }
        }
    })

    useEffect(() => {
        slider.mount()
    }, [slider])

    return (
        <div className="container mx-auto my-6">
            <h1 className="font-openSans font-bold text-xl text-center mx-10 my-10 h-14">
                Trusted by over 1,000,000 business worldwide customers
            </h1>
            <div id="glide" className="glide container mx-auto overflow-x-auto">
                <div className="glide__track" data-glide-el="track">
                    <div id="glide" className="glide__slides space-x-6 md:space-x-10 flex">
                        {/* <div className="glide__slide">
                            <PartnerCard/>
                        </div> */}
                        <PartnerCard/>
                        <PartnerCard/>
                        <PartnerCard/>
                        <PartnerCard/>
                        <PartnerCard/>
                        <PartnerCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}
