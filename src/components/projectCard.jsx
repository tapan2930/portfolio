import React from 'react'

import './project.scss'

import MyButton from  './button'


const ProjectCard = ({title, img, description, link, web, status})=> {
    let arr = [web];
    return(
        <div className="project-card">
                <div className="project-img-container">
    <div className={`bagde ${status.toLowerCase()}`}>{status}</div>
                <div className="project-image">
                    <img className="img" src={img} alt=""/>
                    </div>
                </div>
                
                <div className="project-title">
                    <h2>{title}</h2>
                </div>
                <div className="project-description">
                    <p>{description}</p>
                </div>
                <div className="project-links">
                    {
                      arr.map(a=>{
                          if(a != undefined){
                            return  <MyButton value={"Web"} to={web} color={"black"}/>
                          }                   
                      })
                    }
               
                <MyButton value={"Code"} to={link} color={"black"}/>
                </div>
            </div>
    )
}

export default ProjectCard