import './aboutme.css'
import selfImage from '../../assets/self-photo2.jpg'
import { Tilt } from 'react-tilt';
import SlideIn from '../../components/SlideIn';
import '../../components/slideIn.css';
import SlideInR from '../../components/SlideInR';
import '../../components/slideInR.css';
import FadeinView from '../../components/FadeinView';
import '../../components/fade.css';


function AboutMe() {
  return (
    <>
      <FadeinView>
        <div className="aboutme-container">
          <div className="about-intro-div"><h1 className="about-intro" id="about-me"> About Me </h1></div>
          <div className="image-and-description">
            <img src={selfImage} width='275px' height='275'></img>
            <h4> Hey, my name is Akshat Shah. I'm a passionate 17 y/o developer pursuing Computer Science at the University of Waterloo! As of now, I am focused on fullstack development, and am exploring cybersecurity, machine learning and web3! </h4>
          </div>
          <div className="programming-languages">
            <div className="languages-title-container"><h2> Programming Languages </h2></div>
            <div className="language-icon-container">
                <SlideIn>
                  <Tilt>
                    <div id="python-icon" className="aboutme-icons">  
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width='60px' height='60px'/>
                      <h6>Python</h6>
                    </div>
                  </Tilt>  
                </SlideIn>  
                
                <SlideIn>
                  <Tilt>
                    <div id="C-icon" className="aboutme-icons">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width='60px' height='60px'/>
                      <h6>C</h6>
                    </div>
                  </Tilt>
                </SlideIn>
                
                <SlideIn>
                  <Tilt>
                    <div id="javascript-icon" className="aboutme-icons">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width='60px' height='60px'/>
                      <h6>Javascript</h6>
                    </div>
                  </Tilt>
                </SlideIn>

                <SlideIn>
                  <Tilt>
                    <div id="html-icon" className="aboutme-icons">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width='60px' height='60px'/>
                      <h6>HTML</h6>
                    </div>
                  </Tilt>
                </SlideIn>

                <SlideIn>
                  <Tilt>
                    <div id="css-icon" className="aboutme-icons">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width='60px' height='60px'/>
                      <h6>CSS</h6>
                    </div>
                  </Tilt>
                </SlideIn>
              
                <SlideIn>
                  <Tilt>
                    <div id="sass-icon" className="aboutme-icons">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width='60px' height='60px' />
                      <h6>SASS</h6>
                    </div>
                  </Tilt>
                </SlideIn>

                <SlideIn>
                  <Tilt>
                    <div id="mongodb-icon" className="aboutme-icons">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width='60px' height='60px'/>
                      <h6>MondoDB</h6>
                    </div>
                  </Tilt>
                </SlideIn> 
            </div>

          </div>
          <div className="frameworks">
            <div className="frameworks-title-container"><h2> Frameworks </h2></div>
            <div className="framework-icon-container">
              <SlideInR>
                <Tilt>
                  <div id="react-icon" className="aboutme-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width='60px' height='60px'/>
                    <h6>React Js</h6>
                  </div>
                </Tilt>
              </SlideInR> 

              <SlideInR>
                <Tilt>
                  <div id="next-icon" className="aboutme-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" width='60px' height='60px'/>
                    <h6>Next Js</h6>
                  </div>
                </Tilt>
              </SlideInR>
              
              <SlideInR>
                <Tilt> 
                  <div id="node-icon" className="aboutme-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width='60px' height='60px'/>
                    <h6>Node Js</h6>
                  </div>
                </Tilt>
              </SlideInR>

              <SlideInR>
                <Tilt>
                  <div id="express-icon" className="aboutme-icons">  
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width='60px' height='60px'/>
                    <h6> Express JS </h6>
                  </div>
                </Tilt>
              </SlideInR>

              <SlideInR>
                <Tilt>
                  <div id="tailwind-icon" className="aboutme-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width='60px' height='60px'/>
                    <h6> Tailwind </h6>
                  </div>
                </Tilt>
              </SlideInR>

              <SlideInR>
                <Tilt>
                  <div id="pytorch-icon" className="aboutme-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" width='60px' height='60px'/>
                    <h6> Pytorch </h6>
                  </div>
                </Tilt>
              </SlideInR>
            </div>
          </div>
        </div>
      </FadeinView>
    </>
  )
}

export default AboutMe
