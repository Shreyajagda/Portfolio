import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/imgs/assets/theme_pattern.svg'
import service_data from '../../assets/imgs/assets/services_data'
import arrow_icon from '../../assets/imgs/assets/arrow_icon.svg'


export default function Services() {
  return (
    <div id='services' className='services'>
        <div className="service-title">
            <h1> My Services </h1>
            <img className='img1' src={theme_pattern} alt="" />
        </div>
        <div className='services-container'>
            {service_data.map((Services,index) =>{
                return <div key={index} className='services-format'>
                    <h3>{Services.s_no}</h3>
                    <h2>{Services.s_name}</h2>
                    <p> {Services.s_desc}</p>
                    <div className='services-readmore'> 
                        <p> Read More </p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}
