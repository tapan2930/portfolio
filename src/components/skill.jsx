import React from "react"

import './skill.scss'

import SkillLabel from './skill-label'
import Card from './card'

const Skills = () => {
  return (
    <div className="skills" id="skills">
        <h1 className="mainSection-heading">Skills</h1>
        <h2 className="mainSection-subHeading">Currently Focusing on</h2>
        <div>
        <Card value={"React.js"} img={"./reactjs.svg"} />
        <Card value={"Django"} img={"./dj.svg"}/>
        <Card value={"MongoDB"} img={"./mongo.svg"} />
        </div>
        <h2 className="mainSection-subHeading">Programming Languages</h2>
            <SkillLabel labels={["Python","Javascript","PHP", "C++", "Dart"]}/>
        <h2 className="mainSection-subHeading" >Concepts and Technologies</h2>
            <SkillLabel labels={["Data Structues","Rest API","Deep Learning"]}/>
        <h2 className="mainSection-subHeading" >Tools and Framework</h2>
            <SkillLabel labels={["React.JS","Django","Flask", "Express.JS", "MangoDB", "PyTorch", "Docker"]}/>
        <h2 className="mainSection-subHeading" >Want To Learn in Future</h2>
        <SkillLabel labels={["Go", "GraphQL", "TypeScript"]}/>
    </div>
  )
}

export default Skills

