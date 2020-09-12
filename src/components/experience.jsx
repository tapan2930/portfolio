import React from 'react'

import './experience.scss'
import ProjectCard from './projectCard'


const Experience = ()=>{
    return(
        <div className="experience">
           <h1 className="mainSection-heading">Experience</h1>
           <h2 className="mainSection-subHeading">Freelance Projects</h2>
           <div className="info-card">
               <h1>NetAmaze Network</h1>
               <h2>Freelance Web Developer</h2><span> | June, 2019</span>
               <div className="brief">
                   <p>
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, suscipit temporibus quia quisquam modi quos molestiae esse. Soluta quisquam nobis ut placeat saepe animi, corrupti fugit eveniet eius, autem recusandae.
                   </p>
               </div>
           </div>

           <div className="info-card">
               <h1>NetAmaze Network</h1>
               <h2>Freelance Web Developer</h2><span> | June, 2019</span>
               <div className="brief">
                   <p>
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, suscipit temporibus quia quisquam modi quos molestiae esse. Soluta quisquam nobis ut placeat saepe animi, corrupti fugit eveniet eius, autem recusandae.
                   </p>
               </div>
           </div>
           
        </div>
    );
}

export default Experience