import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './header.scss'


const Header = () =>{
    return(
        <div className="navbar">
             <nav className="header">
            <div className="logo">
                <img src="./logo.svg" alt="logo" width="100"/>
            </div>
            <div className="nav-toggle" onClick={e => classToggle()}>
                <FontAwesomeIcon icon={ faBars}/>
            </div>
            </nav>
            <nav className="navLinksMenu">
                    <Link className="navlinks"> Skills </Link>
                    <Link className="navlinks"> Projects </Link>
                    <Link className="navlinks"> Photography</Link>
                    <Link className="navlinks"> Resume </Link>
            </nav>
      
        </div>
       
    )
}

function classToggle(){

    
    let navs = document.querySelector('.navbar');
    console.log(navs)
    navs.classList.toggle('active')
    // navs.forEach(nav => nav.classList.toggle('active'));

  }
  

export default Header
