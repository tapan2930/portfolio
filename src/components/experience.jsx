import React from 'react'

import './experience.scss'


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
                   Developed frontend Website. Managed routing, SEO optimaztion and other features. Designed mobile first Website.
                   </p>
               </div>
           </div>

           <div className="info-card">
               <h1>Shreeji Engineers</h1>
               <h2>Freelance Software Developer</h2><span> | June, 2019</span>
               <div className="brief">
                   <p>
                   Developed Custom Invoice Genearating Application in PHP. Implemented PDF generation, Storing Clients and product to Database.
                   </p>
               </div>
           </div>
           
        </div>
    );
}

export default Experience