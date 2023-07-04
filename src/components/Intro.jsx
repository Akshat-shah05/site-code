import "./intro.css"
import React, { useState, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";

const Intro = () => {

    const [currentHeading, setCurrentHeading] = useState(0);
    const headings = ['Fullstack Developer', 'AI/ML Enthusiast', 'Computer Science Student', 'Explorer', 'Dancer'];
    
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentHeading((prevHeading) => (prevHeading + 1) % headings.length);
        }, 5000); // Change heading every 5 seconds
    
        return () => clearInterval(interval);
      }, []);
    
      useEffect(() => {
        if (currentHeading === headings.length - 1) {
          // Reset to the first heading after reaching the last one
          const resetInterval = setInterval(() => {
            setCurrentHeading(0);
          }, 0); // Doesn't wait before resetting
    
          return () => clearInterval(resetInterval);
        }
      }, [currentHeading]);

    return (
        
        <>
            <div className="background-container-intro">
                <div className="self-intro-name">
                    <h1 className="before-name">Hey! I am</h1> <h1 className="name"> Akshat Shah </h1>
                    <div className="description-animation">
                        <h4 className="description-heading"> {headings[currentHeading]} </h4>
                    </div>
                    <div className="contact-icons">
                        <ul className="intro-icon-list"> 
                            <li> 
                                <a href="https://www.instagram.com/akshat.shah05/"> <FaInstagram size={36}/>  </a> 
                            </li>
                            <li> 
                                <a href="https://github.com/Akshat-shah05"> <FaGithub size={36}/> </a> 
                            </li>
                            <li> 
                                <a href="https://twitter.com/AkshatShah_05"> <FaTwitter size={36}/>  </a> 
                            </li>
                            <li> 
                                <a href="https://www.linkedin.com/in/akshat-shah-6934b11b5/"> <FaLinkedin size={36}/>  </a> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
        </>
        
    )
}

export default Intro;

// I am a 17 y/o passionate developer exploring full-stack development, machine learning, web 3.0 and cybersecurity. I am currently pursuing my Bachelors of Computer Science at The University of Waterloo