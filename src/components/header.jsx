import React from 'react'
import { Link  } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './header.scss'

import MyButton from './button.jsx'

const Header = () =>{

    const classToggle = ()=> {
        let navs = document.querySelector('.navbar');
        navs.classList.toggle('active')
        // navs.forEach(nav => nav.classList.toggle('active'));
      } 
    
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
                    <Link onClick={classToggle} className="navlinks" to="/#About">About Me</Link>
                    <Link onClick={classToggle} className="navlinks" to="/#Skills">Skills</Link>
                    <Link onClick={classToggle} className="navlinks" to="/#Project">Projects</Link>
                    <Link onClick={classToggle} className="navlinks" to="/#Experience">Experience</Link>
                    <Link className="navlinks page-btn" to="/resume"> Resume </Link>

                    {/* <Link className="navlinks page-btn"> Resources </Link> */}
                    
            </nav>
      
        </div>
       
    )
}



export default Header