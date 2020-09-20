import React from 'react'

import './project.scss'

import MyButton from  './button'


const ProjectCard = ({title, img, description, link, web, status})=> {
    let arr = [web];
    return(
        <div className="project-card">
                <div className="project-img-container">
    <div className={`bagde ${status.toLowerCase()}`}>{status}</div>
    <a href={link} target="_blank" rel="noreferrer"><div className="project-image">
                    <img className="img" src={img} alt={title}/>
                    </div></a>
                </div>
                
                <div className="project-title">
                    <a href={link} target="_blank" rel="noreferrer"><h2>{title}</h2></a>
                </div>
                <div className="project-description">
                    <p>{description}</p>
                </div>
                <div className="project-links">
                    {
                      arr.map(a=>{
                          if(a !== undefined){
                            return  <MyButton value={"Web"} to={web} color={"black"}/>
                          }  
                          return null                 
                      })
                    }
               
                <MyButton value={"Code"} to={link} color={"black"}/>
                </div>
            </div>
    )
}

export default ProjectCard