import React from 'react'

import './project.scss'
import ProjectCard from './projectCard'


const Projects = ()=>{
    return(
        <div className="project">
            <h1 className="mainSection-heading">Projects</h1>
            <div className="projectCard-Container">
            <ProjectCard status={"Done"} img="./pr1.svg" title={"Sorting Algorithm Visualization"} description={"Sorting algorithm visualizer built with react.js. Implemented MergeSort, Bubble Sort, Selection Sort."} link={"https://github.com/tapan2930/sort-algorithm-visuliazer-react"} />
            <ProjectCard status={"Ongoing"} img="./pr2.svg" title={"Paint Clone"} description={"Sorting algorithm visualizer built with react.js. Implemented MergeSort, Bubble Sort, Selection Sort."} link={"https://github.com/tapan2930/sort-algorithm-visuliazer-react"} />
            <ProjectCard status={"Done"} img="./pr3.svg" title={"Pokemon Classifier"} description={"Sorting algorithm visualizer built with react.js. Implemented MergeSort, Bubble Sort, Selection Sort."} link={"https://github.com/tapan2930/pokemon-dl"} />
            <ProjectCard status={"Done"} img="./pr4.png" title={"Amazon Reciew Scrapper CLI Application"} description={"Sorting algorithm visualizer built with react.js. Implemented MergeSort, Bubble Sort, Selection Sort."} link={"https://github.com/tapan2930/amazon-reviews-scrapper"} />
            </div>
           
        </div>
    );
}

export default Projects