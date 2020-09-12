import React from 'react'

import './mainSection.scss'

import AboutMe from './aboutMe'
import Skills from './skill'
import Projects from './project'
import Experience from './experience'


// const toScroll = (myref) => {
//     window.scrollTo({ behavior: 'smooth', top: myref.current.offsetTop })
// }

const MainSection = ()=>{
    return(
        <div className="mainSection">
        <div className="InfoContainer">
            <AboutMe />
            <Skills />
            <Projects />
            <Experience />
        </div>
        </div>
    );
}


export default MainSection