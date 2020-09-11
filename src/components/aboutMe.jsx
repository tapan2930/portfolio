import React from 'react'

import './aboutMe.scss'

import MyButton from './button'

const AboutMe = () =>{
    return(
        <div className="aboutMe">
            <h1>About Me</h1>
            <div className="profile-img-container">
                <img className="profile-img" src="./profile.png" alt="Tapan patel" width="100"/>
            </div>
            <div className="about-Info">
                <div className="brief-about">
                   <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam sapiente, error ipsam asperiores nam modi quas, esse exercitationem laboriosam tempora quidem culpa fugiat temporibus ipsum fuga inventore architecto ad iste.</p>
                </div>
                <table>
                    <tr>
                        <td className="answer">
                            <MyButton value={"Github"} color={"yellow"} />
                            <MyButton value={"Linkdin"} color={"purple"} />
                            <MyButton value={"Twitter"} color={"green"} />
                            <MyButton value={"Email"} color={"black"} />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default AboutMe
