import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/imgs/assets/firstlogo.png'
import user_icon from '../../assets/imgs/assets/user_icon.svg'



export default function Footer() {
    return (
        <div className='footer'>

            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p> I am a Web developer from Rajkot.</p>

                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
                <div className="footer-bottom">
                    <hr />
                    <p className="footer-bottom-left">
                        @ 2023 Shreya Soni. All rights reserved
                    </p>
                    <div className="footer-bottom-right">
                        <p> Term of Services </p>
                        <p> Privacy Policy</p>
                        <p> Connect wiht Me </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
