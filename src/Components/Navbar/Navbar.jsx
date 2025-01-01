import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../../src/assets/imgs/assets/firstlogo.png';
import underline from '../../assets/imgs/assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';





export default function Navbar() {

  const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
        <img className='nav-img' src={logo} alt="" />
        <ul className='nav-menu'>
          <li> <AnchorLink classNameanchor-link  href='#home'> <p onClick={()=>setMenu("home")}>  Home </p></AnchorLink> {menu==="home" ? <img src={underline} alt=''/>:<></>}</li>
          <li> <AnchorLink classNameanchor-link offset={50} href='#about'> <p onClick={()=>setMenu("about")}> About Me </p></AnchorLink> {menu==="about" ? <img src={underline} alt=''/>:<></>}</li>
          <li> <AnchorLink classNameanchor-link offset={50} href='#services'> <p onClick={()=>setMenu("services")}> Services </p></AnchorLink> {menu==="services" ? <img src={underline} alt=''/>:<></>}</li>
          <li> <AnchorLink classNameanchor-link offset={50} href='#work'> <p onClick={()=>setMenu("work")}> Portfoilo </p></AnchorLink> {menu==="work" ? <img src={underline} alt=''/>:<></>}</li>
          <li> <AnchorLink classNameanchor-link offset={50} href='#contact'><p onClick={()=>setMenu("contact")}> Contact </p> </AnchorLink> {menu==="contact" ? <img src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink classNameanchor-link offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}
