import React, {useRef} from 'react'

import './mainSection.scss'

// import AboutMe from './aboutMe'
import Skills from './skill'
import Projects from './project'
import { Link } from 'gatsby'

const toScroll = (myref) => {
    window.scrollTo({ behavior: 'smooth', top: myref.current.offsetTop })
}

const MainSection = ()=>{
    return(
        <div className="mainSection">
        <div className="InfoContainer">
            <div ><Skills/></div>
            <div ><Projects id="projects"/></div>
        </div>
        </div>
    );
}


export default MainSection