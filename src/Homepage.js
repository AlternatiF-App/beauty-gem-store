import React from 'react'
import Navbar from './components/header/Navbar'
import Partner from './components/homepage/Partner'
import Section1 from './components/homepage/Section1'

export default function Homepage() {
    return (
        <div>
            <Navbar/>
            <Section1/>
            <Partner/>
        </div>
    )
}
