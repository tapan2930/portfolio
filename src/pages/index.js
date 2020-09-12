import React, { useRef }  from 'react'


import '../styles/index.style.scss'

import Intro from '../components/intro.jsx'
import Header from '../components/header.jsx'
import MainSection from '../components/mainSection.jsx'
// import AboutMe from '../components/aboutMe'


const App = () => {
  const refs = {
    refAbout : useRef(),
    refSkills : useRef(),
    refProjects : useRef(),
    refExperience : useRef()
    }

  return (
    <div className="app">
      <Header refs = {refs} />
      <Intro />
      <MainSection refs={refs} />
    </div>
  )
}

 



export default App
