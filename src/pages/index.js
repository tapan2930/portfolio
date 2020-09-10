import React from "react"

import '../styles/index.style.scss'

import Intro from '../components/intro.jsx'
import Header from '../components/header.jsx'
import MainSection from '../components/mainSection.jsx'
// import AboutMe from '../components/aboutMe'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Intro />
      <MainSection />
    </div>
  )
}

export default App
