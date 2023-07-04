import './aboutme.css'
import selfImage from '../../assets/self-photo2.jpg'
import { Tilt } from 'react-tilt';

function AboutMe() {
  return (
    <>
      <div className="aboutme-container">
        <h1 className="about-intro"> About Me </h1>
        <div className="image-and-description">
          <img src={selfImage} width='275px' height='275'></img>
          <h4></h4>
        </div>
        <div className="programming-languages">
          <h2> Programming Languages </h2>
          <div className="language-icon-container">
            <Tilt>
              <div id="python-icon" className="aboutme-icons">  
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width='60px' height='60px'/>
                <h6>Python</h6>
              </div>
            </Tilt>  
            
            <Tilt>
              <div id="C-icon" className="aboutme-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width='60px' height='60px'/>
                <h6>C</h6>
              </div>
            </Tilt>
              
            <Tilt>
              <div id="javascript-icon" className="aboutme-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width='60px' height='60px'/>
                <h6>Javascript</h6>
              </div>
            </Tilt>
              
            <Tilt>
              <div id="html-icon" className="aboutme-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width='60px' height='60px'/>
                <h6>HTML</h6>
              </div>
            </Tilt>
              
            <Tilt>
              <div id="css-icon" className="aboutme-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width='60px' height='60px'/>
                <h6>CSS</h6>
              </div>
            </Tilt>
              
            <Tilt>
              <div id="sass-icon" className="aboutme-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width='60px' height='60px' />
                <h6>SASS</h6>
              </div>
            </Tilt>
              
            <Tilt>
              <div id="mongodb-icon" className="aboutme-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width='60px' height='60px'/>
                <h6>MondoDB</h6>
              </div>
            </Tilt>
            
          </div>

        </div>
        <div className="frameworks">
          <h2> Frameworks </h2>
          <div className="framework-icon-container">
            <Tilt>
              <div id="react-icon" className="aboutme-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width='60px' height='60px'/>
                <h6>React Js</h6>
              </div>
            </Tilt>
              
            <Tilt>
              <div id="next-icon" className="aboutme-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" width='60px' height='60px'/>
                <h6>Next Js</h6>
              </div>
            </Tilt>
              
            <Tilt> 
              <div id="node-icon" className="aboutme-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width='60px' height='60px'/>
                <h6>Node Js</h6>
              </div>
            </Tilt>

            <Tilt>
              <div id="tailwind-icon" className="aboutme-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width='60px' height='60px'/>
                <h6> Tailwind </h6>
              </div>
            </Tilt>

            <Tilt>
              <div id="pytorch-icon" className="aboutme-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" width='60px' height='60px'/>
                <h6> Pytorch </h6>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
