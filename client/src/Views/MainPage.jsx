import React from 'react'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Demo from '../Components/Demo'
import Header from '../Components/Header'
import Project from '../Components/Project'

const MainPage = () => {
  return (
    <div>
        <Header />
        <About/>
        <Project/>
        <Demo/>
        <Contact/>
    </div>
  )
}

export default MainPage