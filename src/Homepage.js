import React from 'react'
import Navbar from './components/header/navbar'
import Title from './components/homepage/title'

export default function Homepage() {
    return (
        <div className="bg-gray-200">
            <Navbar/>
            <Title/>
        </div>
    )
}
