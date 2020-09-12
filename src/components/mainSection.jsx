import React from 'react'

import './mainSection.scss'

import AboutMe from './aboutMe'
import Skills from './skill'
import Projects from './project'
import Experience from './experience'


const MainSection = ({refs})=>{
    
    return(
        <div className="mainSection">
        <div className="InfoContainer">
            <div ref={refs.refAbout} id="About"><AboutMe /></div>
            <div ref={refs.refSkills} id="Skills"><Skills /></div>
            <div ref={refs.refProjects} id="Project"><Projects /></div>
            <div ref={refs.refExperience} id="Experience"><Experience /></div>
        </div>
        </div>
    );
}


export default MainSection