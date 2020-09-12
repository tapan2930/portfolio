import React from 'react'

import './mainSection.scss'

import AboutMe from './aboutMe'
import Skills from './skill'
import Projects from './project'
import Experience from './experience'


const MainSection = ()=>{
    
    return(
        <div className="mainSection">
        <div className="InfoContainer">
            <div id="About"><AboutMe /></div>
            <div id="Skills"><Skills /></div>
            <div id="Project"><Projects /></div>
            <div id="Experience"><Experience /></div>
        </div>
        </div>
    );
}


export default MainSection