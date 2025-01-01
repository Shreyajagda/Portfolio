import React from 'react'
import './About.css';
import theme_pattern from '../../assets/imgs/assets/theme_pattern.svg';
import profile_img from '../../assets/imgs/assets/download.jpg';




export default function About() {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1> About Me </h1>
                <img className='about-logo' src={theme_pattern} alt="" />
            </div>

            <div className='about-sections'>
                <div className='about-left'>
                    <img className='about-profile' src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <h1> About Me </h1>
                        <p> Hello! I’m Shreya Soni, a passionate web developer with a knack for creating sleek, user-friendly websites that bring ideas to life.I specialize in front-end and back-end development, ensuring every project I work on is not only visually stunning but also fast, responsive, and functional. With expertise in [list a few key skills like HTML, CSS, JavaScript, React, Node.js], I love turning complex problems into simple, elegant solutions. Whether it’s crafting a personal portfolio or developing a full-scale web application, I’m committed to delivering quality and innovation.</p>
                        <p className='p2'> Let's Build Together!</p>
                       <button className='about-connect'>   About Me</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
