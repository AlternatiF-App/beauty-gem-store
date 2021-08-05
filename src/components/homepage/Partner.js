import React, {useEffect} from 'react'
import Glide from '@glidejs/glide'
import PartnerCard from './PartnerCard'

export default function Partner() {

    let slider = new Glide('#partner', {
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
                perView:4
            },
            768:{
                perView:4
            },
            1024:{
                perView:4
            },
            1280:{
                perView:6
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
            <div id="partner" className="glide container mx-auto overflow-x-auto">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides flex">
                        <li className="glide_slide">
                            <PartnerCard/>
                        </li>
                        <li className="glide_slide">
                            <PartnerCard/>
                        </li>
                        <li className="glide_slide">
                            <PartnerCard/>
                        </li>
                        <li className="glide_slide">
                            <PartnerCard/>
                        </li>
                        <li className="glide_slide">
                            <PartnerCard/>
                        </li>
                        <li className="glide_slide">
                            <PartnerCard/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
