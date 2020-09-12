import React from 'react'
import { Link  } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { AnchorLink } from "gatsby-plugin-anchor-links";

import './header.scss'

const Header = () =>{
    
    return(

        <div className="navbar">
             <nav className="header">
            <div className="logo">
                <Link to="/" ><img src="./logo.svg" alt="logo" width="60"/></Link>
            </div>
            <div className="nav-toggle" onClick={e => classToggle()}>
                <FontAwesomeIcon icon={ faBars }/>
            </div>
            </nav>


            <nav className="navLinksMenu">
                    <AnchorLink onClick={()=> {classToggle()}} stripHash={true} className="navlinks"  title="About" to="/#About" />
                    <AnchorLink onClick={()=> {classToggle()}} stripHash={true} className="navlinks"  title="Skills" to="/#Skills" />
                    <AnchorLink onClick={()=> {classToggle()}} stripHash={true} className="navlinks"  title="Projects" to="/#Project" />
                    <AnchorLink onClick={()=> {classToggle()}} stripHash={true} className="navlinks"  title="Experience" to="/#Experience" />
                    <Link className="navlinks page-btn" to="/resume"> Resume </Link>
                    <Link className="navlinks page-btn"> Resources </Link>
                    
            </nav>
      
        </div>
       
    )
}

function classToggle(){

    let navs = document.querySelector('.navbar');
    navs.classList.toggle('active')
    // navs.forEach(nav => nav.classList.toggle('active'));
  }
  

export default Header
