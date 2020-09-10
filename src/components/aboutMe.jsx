import React from 'react'
import { Image,Heading } from 'rebass'

import './aboutMe.scss'

const AboutMe = ({to, color, value}) =>{
    return(
        <div className="aboutMe">
            <div>
                <Image/>
            </div>
            <div>
                <Heading>About Me</Heading>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <table>
                    
                </table>
                </div>
        </div>
    )
}

export default AboutMe
