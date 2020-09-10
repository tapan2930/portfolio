import React from 'react'

import './mainSection.scss'

// import AboutMe from './aboutMe'
import Skills from './skill'
import Projects from './project'
import { Link } from 'gatsby'

const MainSection = ()=>{
    return(
        <div className="mainSection">
        <div className="menuListContainer">
            <nav className="navSide">
            <ul className="menuList">
                <li className="sideMenu"><Link href="#aboutMe" activeClassName="sideMenuActive">- Skills</Link></li>
                <li className="sideMenu"><Link href="#aboutMe">- Projects</Link></li>
                <li className="sideMenu"><Link href="#aboutMe">- Photography</Link></li>
                <li className="sideMenu"><Link href="#aboutMe">- Resume Preview</Link></li>
            </ul>
            </nav>
           
        </div>
        <div className="InfoContainer">
            <Skills />
            <Projects />

        </div>
        </div>
    );
}

export default MainSection