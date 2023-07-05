import React from "react";
import "./projects.css";
import travelSite from "../../assets/travel-site.png";
import toDo from "../../assets/todo.png";
import pongGame from "../../assets/ponggame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";
import { FaReact } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { Tilt } from "react-tilt";

function Projects() {
  return (
    <>
      {/* Container for all of the cards --> will be a grid --> turned to flex-column at certain width */}

      <div className="projects-intro">
        <h1> Projects </h1>
        <div className="projects-intro-description">
          <h4>
            {" "}
            Working on these projects enabled me to expand my knowledge, refine
            my skills and increase my programming efficiency. These smaller
            projects have allowed transition into projects that hopefully have a
            positive impact on society. <br></br><mark className="mark-highlight">
              {" "}
              Projects to look out for:
            </mark>{" "}
            AI Chrome extension, Full stack stock price predictor + many more!
          </h4>
        </div>
      </div>

      <div className="main-projects-container">
        {/* Card Set up for the 1st project */}
        <Tilt>
          <div id="project-card-1" className="card-container">
            <div id="content-container-1" className="content-card-container">
              <h2 className="project-card-title"> Travel Site </h2>
              <h4>
                {" "}
                This was the first webpage I made while learning react. It is
                responsive travel site designed with figma, and was a great
                introduction to thinking in React{" "}
              </h4>
              <h4 className="source-code">
                {" "}
                <a href="https://github.com/Akshat-shah05/React-travel-site">
                  {" "}
                  Source Code !{" "}
                </a>
              </h4>
              <div className="technologies-used">
                <FontAwesomeIcon icon={faHtml5} size="3x" color="white" />
                <FontAwesomeIcon icon={faCss3} size="3x" color="white" />
                <FontAwesomeIcon icon={faJs} size="3x" color="white" />
                <FaReact size={45} color="white" />
              </div>
            </div>
          </div>
        </Tilt>

        {/* Card Set up for the 2nd project */}
        <Tilt>
          <div id="project-card-2" className="card-container">
            <div id="content-container-2" className="content-card-container">
              <h2 className="project-card-title"> To Do List </h2>
              <h4>
                {" "}
                A simple to do list made with react. Works mainly with the DOM
                to control list-item state and local storage. Great for
                practicing JS functionalities.{" "}
              </h4>
              <h4 className="source-code">
                {" "}
                <a href="https://github.com/Akshat-shah05/To-do-list">
                  {" "}
                  Source Code !{" "}
                </a>
              </h4>
              <div className="technologies-used">
                <FontAwesomeIcon icon={faHtml5} size="3x" color="white" />
                <FontAwesomeIcon icon={faCss3} size="3x" color="white" />
                <FontAwesomeIcon icon={faJs} size="3x" color="white" />
                <FaReact size={45} color="white" />
              </div>
            </div>
          </div>
        </Tilt>

        {/* Card Set up for the 3rd project */}
        <Tilt>
          <div id="project-card-3" className="card-container">
            <div id="content-container-3" className="content-card-container">
              <h2 className="project-card-title"> Pong in Python </h2>
              <h4>
                Making pong in python with turtle and os. Clean UI and
                responsive until a 300px width - Also supports multiplayer and
                has sound effects for bounces and wins.
              </h4>
              <h4 className="source-code">
                {" "}
                <a href="https://github.com/Akshat-shah05/pong-python">
                  {" "}
                  Source Code !{" "}
                </a>
              </h4>
              <div className="technologies-used">
                <SiPython size={45} color="white" />
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  );
}

export default Projects;
