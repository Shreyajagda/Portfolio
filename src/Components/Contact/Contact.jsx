import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/imgs/assets/theme_pattern.svg'
import mail_icon from '../../assets/imgs/assets/mail_icon.svg'
import location_icon from '../../assets/imgs/assets/location_icon.svg'
import call_icon from '../../assets/imgs/assets/call_icon.svg'
import emailjs from 'emailjs-com';

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

    emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
        from_name: name,
        to_name: "Shreya Soni",
        message: message,
        email: email,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        )

    console.log(name, email, message);
    
    }

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1> Get in Touch </h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1 className='h1-1'> Let's Talk </h1>
                    <p className='p1'> I'm currently available to take on new projects, so feel Free </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p> shreyajagda@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p> +91 7016969384 </p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p> Rajkot, Gujarat</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <label htmlFor=""> Your Name </label>
                    <input type="text" onChange={e => setName(e.target.value)} value={name} placeholder='Enter Your Name '/>
                    <label htmlFor=""> Your Email </label>
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder='Enter Your Email'/>
                    <label htmlFor=""> Write Your Message here </label>
                    <textarea name="message" onChange={e => setMessage(e.target.value)} value={message} rows={8} placeholder ='Enter Your Message'></textarea>
                    <button type='submit' className='contact-submit'> Submit Now </button>
                </form>
                
            </div>
        </div>
    )
}
