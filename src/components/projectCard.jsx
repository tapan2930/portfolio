import React from 'react'

import './project.scss'

import MyButton from  './button'


const ProjectCard = ({title, img, description, link, web, status})=> {
    return(
        <div className="project-card">
                <div className="project-img-container">
                <div className="project-image">
                    <img className="img" src={img} alt=""/>
                    </div>
                </div>
                
                <div className="project-title">
    <h2>{title}</h2>
                </div>
                <div className="project-description">
                    {description}
                </div>
                <div className="project-links">
                <MyButton value={"Web"} to={link} color={"green"}/>
                <MyButton value={"Code"} to={link} color={"green"}/>
                </div>
            </div>
    )
}

export default ProjectCard