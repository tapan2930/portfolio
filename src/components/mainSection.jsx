import React from 'react'

import './mainSection.scss'

// import AboutMe from './aboutMe'
import Skills from './skill'
import Projects from './project'

const MainSection = ()=>{
    return(
        <div className="mainSection">
        <div className="menuListContainer">
            <ul className="menuList">
                <li><a href="#aboutMe">- Skills</a></li>
                <li><a href="#aboutMe">- Projects</a></li>
                <li><a href="#aboutMe">- Educations</a></li>
                <li><a href="#aboutMe">- Blogs</a></li>
                <li><a href="#aboutMe">- Photography</a></li>
                <li><a href="#aboutMe">- Resume Priview</a></li>
            </ul>
        </div>
        <div className="InfoContainer">
            <Skills />
            <Projects />
        </div>
        </div>
    );
}

export default MainSection