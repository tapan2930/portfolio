import React from 'react'

import MyButton from './button.jsx'

import './intro.scss'

const Intro = () =>{
    return(
        <div className="hero">
            <div className="headlines">
                <span className="greetings">Hey! I AM</span>
                <h1 className="headName">Tapan Patel</h1>
                <span className="tagLine">I <span className="highlight">design</span> and <span className="highlight">build</span> apps, and everything that comes with it.</span>
                <br/>
                <MyButton to={"https://github.com/tapan2930"} value = {"Github"}  color={"yellow"}/>
                <MyButton to={"https://github.com/tapan2930"} value = {"Linkdin"}  color={"green"}/>
                <MyButton to={"https://github.com/tapan2930"} value = {"Instagram"}  color={"purple"}/>
                <div className="mouse"></div>
            </div>
        </div>
    )
}

export default Intro
