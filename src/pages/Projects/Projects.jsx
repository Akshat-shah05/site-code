import React from 'react'
import './projects.css'
import Navbar from '../../components/Navbar'
import travelSite from '../../assets/travel-site.png'
import toDo from '../../assets/todo.png'
import pongGame from '../../assets/ponggame.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';
import { FaReact } from 'react-icons/fa';
import { SiPython } from 'react-icons/si';

function Projects() {  
  
  return (
    <>
        <Navbar/>

        {/* Container for all of the cards --> will be a grid --> turned to flex-column at certain width */}
        
        <div className="projects-intro"> <h1> Check out my Projects! </h1> </div>
        
        <div className="main-projects-container">

          {/* Card Set up for the 1st project */}
          <div id="project-card-1" className="card-container">
            <img src={travelSite}></img>
            <div id="content-container-1" className="content-card-container">
                <h2 className="project-card-title"> Travel Site </h2>
                <h4> This was the first webpage I made while learning react. It is responsive travel site designed with figma, and was a great introduction to thinking in React </h4>
                <h4 className="source-code"> <a href="https://github.com/Akshat-shah05/React-travel-site"> Source Code ! </a></h4>
                <div className="technologies-used">
                  <FontAwesomeIcon icon={faHtml5} size="3x" color="orange"/>
                  <FontAwesomeIcon icon={faCss3} size="3x" color="blue"/>
                  <FontAwesomeIcon icon={faJs} size="3x" color="yellow"/>
                  <FaReact size={45} color="blue"/>
                </div>   
            </div>
          </div>

          {/* Card Set up for the 2nd project */}
          <div id="project-card-2" className="card-container">
            <img src={toDo}></img>
            <div id="content-container-2" className="content-card-container">
                <h2 className="project-card-title"> To Do List </h2>
                <h4> A simple to do list made with react. Works mainly with the DOM to control list-item state and local storage. Great for practicing JS functionalities.  </h4>
                <h4 className="source-code"> <a href="https://github.com/Akshat-shah05/To-do-list"> Source Code ! </a></h4>
                <div className="technologies-used">
                  <FontAwesomeIcon icon={faHtml5} size="3x" color="orange"/>
                  <FontAwesomeIcon icon={faCss3} size="3x" color="blue"/>
                  <FontAwesomeIcon icon={faJs} size="3x" color="yellow"/>
                  <FaReact size={45} color="blue"/>
                </div>   
            </div>
          </div>

          {/* Card Set up for the 3rd project */}
          <div id="project-card-3" className="card-container">
            <img src={pongGame}></img>
            <div id="content-container-3" className="content-card-container">
              <h2 className="project-card-title"> Pong in Python </h2>
              <h4>Making pong in python with turtle and os. Clean UI and responsive until a 300px width - Also supports multiplayer and has sound effects for bounces and wins.</h4>
              <h4 className="source-code"> <a href="https://github.com/Akshat-shah05/pong-python"> Source Code ! </a></h4>
              <div className="technologies-used">
                  <SiPython size={45} color="green"/>
              </div>
            </div>
          </div>

          {/* Card Set up for the 4th project */}
          <div id="project-card-4" className="card-container">
            <img></img>
            <div id="content-container-4" className="content-card-container">
              
            </div>
          </div>

        </div>
    </>
  )
}

export default Projects
