import React from 'react'

import './project.scss'
import ProjectCard from './projectCard'


const Projects = ()=>{
    return(
        <div className="project">
            <h1 className="mainSection-heading">Projects</h1>
            <div className="projectCard-Container">
            <ProjectCard status={"Completed"} img="./pr1.svg" title={"Sorting Algorithm Visualization"} description={"Sorting algorithm visualizer built with react.js. Implemented MergeSort, Bubble Sort, Selection Sort."} link={"https://github.com/tapan2930/sort-algorithm-visuliazer-react"} web={"https://sort-algorithm-visuliazer-react.vercel.app/"}/>
            <ProjectCard status={"Ongoing"} img="./pr2.svg" title={"Paint Clone"} description={"Paint web app made with html5 canvas and react.js. Features like download and local storage implemented."} link={"https://github.com/tapan2930/sort-algorithm-visuliazer-react"} />
            <ProjectCard status={"Completed"} img="./pr3.svg" title={"Pokemon Classifier"} description={"Pokemon classifier is a deep learning classification web application served with flask and docker."} link={"https://github.com/tapan2930/pokemon-dl"} web={"https://pokemon-dl.azurewebsites.net/"} />
            <ProjectCard status={"Completed"} img="./pr4.png" title={"Amazon Reciew Scrapper CLI Application"} description={"Amazon review scrapper is a cli app which scrapes reviews of a product with equal proportions of reviews from all rating categories and save in .csv."} link={"https://github.com/tapan2930/amazon-reviews-scrapper"} />
            </div>
           
        </div>
    );
}

export default Projects