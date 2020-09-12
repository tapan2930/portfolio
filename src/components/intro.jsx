import React from 'react'
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

import MyButton from './button.jsx'

import './intro.scss'

const Intro = () =>{
    return(
        <div className="hero">
            <div className="headlines">
                <span className="greetings">Hey! I am</span>
                <h1 className="headName">Tapan Patel</h1>
                <span className="tagLine">I <span className="highlight">design</span> and <span className="highlight">build</span> apps, and everything that comes with it.</span>
                <br/>
                <MyButton to={"https://github.com/tapan2930"} value = {"Github"}  color={"#24292d"} icon={faGithub}/>
                <MyButton to={"https://www.linkedin.com/in/tapan-patel-7567511a5/"} value = {"Linkdin"}  color={"#0077b4"} icon={faLinkedinIn}/>
                <MyButton to={"https://www.instagram.com/tapan__p/"} value = {"Instagram"}  color={"#cf0076"} icon={faInstagram}/>
                <div className="mouse"></div>
            </div>
        </div>
    )
}

export default Intro
