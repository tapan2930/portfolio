import React from "react"

import './skill.scss'

import SkillLabel from './skill-label'

const Skills = () => {
  return (
    <div className="skills">
        <h1 className="mainSection-heading">Skills</h1>
        <h2 className="mainSection-subHeading">Main Focus</h2>
            
        <h2 className="mainSection-subHeading">Programming Languages</h2>
            <SkillLabel labels={["Python","Javascript","PHP", "C++", "Dart"]}/>
        <h2 className="mainSection-subHeading" >Concepts and Technologies</h2>
            <SkillLabel labels={["Data Structues","Rest API","Deep Learning"]}/>
        <h2 className="mainSection-subHeading" >Tools and Framework</h2>
            <SkillLabel labels={["React.JS","Django","Flask", "Node.JS", "PostreSQL", "MangoDB", "PyTorch", "Docker"]}/>
        <h2 className="mainSection-subHeading" >Want To Learning in Future</h2>
        <SkillLabel labels={["Go", "GraphQL", "TypeScript"]}/>
    </div>
  )
}

export default Skills

