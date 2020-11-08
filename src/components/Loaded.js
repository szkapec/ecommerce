import React from 'react'
import Navbar from './Navbar';
import loaded from './assets/ball.svg';

export default function Loaded() {
    return (
            <>
            <div className="loaded">
                <div>
                    <Navbar/>
                </div>
                <img src={loaded} alt="loading" />
            </div>
            </>
    )
}
