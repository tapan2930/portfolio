import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './header.scss'


const Header = ({refs}) =>{
    const scrollTo = ele => {
        ele.scrollIntoView({
          behavior: "smooth",
          block:"start"
        });
      };
    
      const onClickHandler = (ref)=>{
          classToggle();
          scrollTo(ref);
      }
    return(

        <div className="navbar">
             <nav className="header">
            <div className="logo">
                <img src="./logo.svg" alt="logo" width="60"/>
            </div>
            <div className="nav-toggle" onClick={e => classToggle()}>
                <FontAwesomeIcon icon={ faBars }/>
            </div>
            </nav>


            <nav className="navLinksMenu">
                    <a onClick={() => {onClickHandler(refs.refAbout.current)}} className="navlinks"> About </a>

                    <a onClick={() => {
                        onClickHandler(refs.refSkills.current)
                    }}
                     className="navlinks"> Skills </a>

                    <a onClick={() => {
                        onClickHandler(refs.refProjects.current)
                    }} className="navlinks"> Projects </a>

                    <a onClick={() => {
                        onClickHandler(refs.refExperience.current)
                    }} className="navlinks"> Experience</a>
                    
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
