import React from "react";
import "./projects.css";
import albumify from '../../assets/albumify.png'
import sangeet from '../../assets/sangeet.png'
import pern  from '../../assets/pern.png'
import shirt from '../../assets/shirt.png'
import '../../components/fade.css';
import FadeinView from '../../components/FadeinView';
import SlideIn from '../../components/SlideIn';
import '../../components/slideIn.css';
import '../../components/slideInR.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiNodedotjs, SiPostgresql, SiPython, SiReact } from "react-icons/si";
import { Tilt } from "react-tilt";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";

function Projects() {
  return (
    <>
      {/* Container for all of the cards --> will be a grid --> turned to flex-column at certain width */}
      <FadeinView>
        <div className="projects-intro">
          <h1 id="projects"> Projects </h1>
        </div>

        <div className="main-projects-container">
          {/* Card Set up for the 1st project */}
          <SlideIn>
            <Tilt>
              <div id="project-card-1" className="card-container">
                <div id="content-container-1" className="content-card-container">
                  <div className="pimage"><img src={albumify} style={{ width: '500px', height: '400px' }}></img></div>
                  <h2 className="project-card-title"> Albumify </h2>
                  <h4>
                    {" "}
                    A fullstack AI-powered Spotify Playlist Cover Generator made at Hack the North 2023.
                    Built with Fast API, OpenAI and React!{" "}
                  </h4>
                  <h4 className="source-code">
                    {" "}
                    <a href="https://github.com/HanzPo/hack-the-north-2023" target="_blank">
                      {" "}
                      Source Code! &nbsp;&nbsp;&nbsp;{" "}
                    </a>
                    <a href="https://devpost.com/software/funny-name?ref_content=user-portfolio&ref_feature=in_progress">
                      <strong> Check it Out </strong> 
                    </a>
                  </h4>
                  <div className="technologies-used">
                    <FontAwesomeIcon icon={faHtml5} size="3x" color="orange" />
                    <FontAwesomeIcon icon={faCss3} size="3x" color="#01B9C5" />
                    <FontAwesomeIcon icon={faJs} size="3x" color="yellow" />
                    <FaReact size={45} color="#01B9C5" />
                    <SiPython size={45} color="green"/>
                    <SiFastapi size={45} color="#64F2A4" />
                    <SiOpenai size={45} color="white" />
                  </div>
                </div>
              </div>
            </Tilt>
          </SlideIn>

          {/* Card Set up for the 2nd project */}
          <SlideIn>
            <Tilt>
              <div id="project-card-2" className="card-container">
                <div id="content-container-2" className="content-card-container">
                  <div className="pimage2"><img src={shirt} style={{ width: '500px', height: '400px' }}></img></div> {/* CHANGE THE IMAGE */}
                  <h2 className="project-card-title"> AI Shirt Customizer </h2>
                  <h4>
                    {" "}
                    Built a 3D AI Powered Shirt customizer, react, tailwind, openAI, Node and Express{" "}
                  </h4>
                  <h4 className="source-code">
                    {" "}
                    <a href="https://github.com/Akshat-shah05/ThreeJS-shirt-AI" target="_blank"> {/* CHANGE THE SOURCE CODE LINK */}
                      Source Code! &nbsp;&nbsp;&nbsp;
                    </a>
                    <a href="https://shirt-ai.vercel.app/">
                      <strong> Try it Out </strong> 
                    </a>
                  </h4>
                  <div className="technologies-used">
                    <FontAwesomeIcon icon={faHtml5} size="3x" color="orange" />
                    <FontAwesomeIcon icon={faCss3} size="3x" color="#01B9C5" />
                    <FontAwesomeIcon icon={faJs} size="3x" color="yellow" />
                    <SiReact size={45} color="#01B9C5" />
                    <SiTailwindcss size={45} color="#B4D7FF"/>
                    <SiOpenai size={45} color="White"/>
                    <SiNodedotjs size={45}></SiNodedotjs>
                    <SiExpress size={45}></SiExpress>
                  </div>
                </div>
              </div>
            </Tilt>
          </SlideIn>

          {/* Card Set up for the 3rd project */}
          <SlideIn>
            <Tilt>
              <div id="project-card-3" className="card-container">
                <div id="content-container-3" className="content-card-container">
                  <div className="pimage"><img src={pern} style={{ width: '500px', height: '400px' }}></img></div> {/* CHANGE THE IMAGE */}
                  <h2 className="project-card-title"> PERN to-do App </h2>
                  <h4>
                    Fullstack CRUD todo app built with ReactJS, NodeJS, ExpressJS, Bootstrap, PostgreSQL
                  </h4>
                  <h4 className="source-code"> {/* CHANGE THE SOURCE CODE LINK */}
                    {" "}
                    <a href="https://github.com/Akshat-shah05/PERN-ToDo" target="_blank"> {/* CHANGE THE SOURCE CODE LINK */}
                      {" "}
                      Source Code !{""}
                    </a>
                  </h4>
                  <div className="technologies-used">
                    <FontAwesomeIcon icon={faHtml5} size="3x" color="orange" />
                    <FontAwesomeIcon icon={faCss3} size="3x" color="#01B9C5" />
                    <FontAwesomeIcon icon={faJs} size="3x" color="yellow" />
                    <SiReact size={45} color="#01B9C5" />
                    <SiBootstrap size={45} color="#AC94F4" />
                    <SiPostgresql size={45} color="white" />
                  </div>
                </div>
              </div>
            </Tilt>
          </SlideIn>

        </div>
      </FadeinView>
      
    </>
  );
}

export default Projects;
