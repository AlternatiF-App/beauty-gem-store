import React from 'react'
import Navbar from './components/header/Navbar'
import Partner from './components/homepage/Partner'
import Product from './components/homepage/Product'
import Section1 from './components/homepage/Section1'

export default function Homepage() {
    return (
        <div>
            <Navbar/>
            <Section1/>
            <Partner/>
            <Product/>
        </div>
    )
}
