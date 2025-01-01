import React from 'react'
import './Hero.css'
import profile_img from '../../assets/imgs/assets/download.jpg';


export default function Hero() {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1> <span>I'm Shreya Soni</span>, A Web Developer </h1>
            <p> Hello, I am a Web Developer from rajkot skilled in html ,css ,javascript ,react js.</p>
                <div className='hero-action'>
                    <div className="hero-connect"> Connect With Me </div>
                    <div className="hero-resume"> My Resume </div>
                </div>
        </div>
    )
}
