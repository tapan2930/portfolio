import React from "react"

import './skill.scss'

const SkillLabel = (props) => {
  return (
        <div>
            <div className="skill-meter" style={{height:`${props.labels.length * 23}px`}}></div> 
            <div className="skill-label">
                <ul>
                {
                    props.labels.map(label =>{
                        return <li>{label}</li>
                    })
                }
                </ul>
            </div>
        </div>
  )
}

export default SkillLabel
