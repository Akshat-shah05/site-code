import React from 'react'
import './projects.css'
import Navbar from '../../components/Navbar'

function Projects() {
  return (
    <>
        <Navbar/>

        {/* Container for all of the cards --> will be a grid --> turned to flex-column at certain width */}
        <div className="main-projects-container">

          {/* Card Set up for the 1st project */}
          <div className="project-card-1">
            <img></img>
            <div className="content-container-1">

            </div>
          </div>

          {/* Card Set up for the 2nd project */}
          <div className="project-card-2">
            <img></img>
            <div className="content-container-2">

            </div>
          </div>

          {/* Card Set up for the 3rd project */}
          <div className="project-card-3">
            <img></img>
            <div className="content-container-3">

            </div>
          </div>

          {/* Card Set up for the 4th project */}
          <div className="project-card-4">
            <img></img>
            <div className="content-container-4">

            </div>
          </div>
        </div>
    </>
  )
}

export default Projects
