import React from 'react'

import './mainSection.scss'

import AboutMe from './aboutMe'
import Skills from './skill'
import Projects from './project'


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
        </div>
        </div>
    );
}


export default MainSection