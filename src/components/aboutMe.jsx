import React from 'react'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './aboutMe.scss'

import MyButton from './button'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const AboutMe = () =>{
    return(
        <div className="aboutMe">
            <h1>About Me</h1>
            <div className="profile-img-container">
                <img className="profile-img" src="./profile.png" alt="Tapan patel" width="100"/>
            </div>
            <div className="about-Info">
                <div className="brief-about">
                   <p>In a fullstack developer, living in India. I like to keep things simple and scalable. I always admire great user interface and try to make one. Connect with me on: </p>
                </div>
                <table>
                    <tr>
                        <td className="answer">
                            <MyButton to={"https://github.com/tapan2930"} value = {"Github"}  color={"#24292d"} icon={faGithub}/>
                            <MyButton to={"https://www.linkedin.com/in/tapan-patel-7567511a5/"} value = {"Linkdin"}  color={"#0077b4"} icon={faLinkedinIn}/>
                            <MyButton to={"https://www.instagram.com/tapan__p/"} value = {"Instagram"}  color={"#cf0076"} icon={faInstagram}/>
                            <MyButton to={"https://twitter.com/tapan2930"} value={"Twitter"} color={"#1da1f3"} icon={faTwitter} />
                            <MyButton to={"mailto:tapan2930@gmail.com"} value={"Email"} color={"#24292d"} icon={faEnvelopeOpen} />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default AboutMe
