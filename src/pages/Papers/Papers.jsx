import React from 'react'
import './papers.css'
import Navbar from '../../components/Navbar'
import mathIAImg from '../../assets/IA-files/MathIAImage.png'
import chemIAImg from '../../assets/IA-files/ChemIAImage.png'
import bioIAImg from '../../assets/IA-files/BioIAImage.png'
import businessIAImg from '../../assets/IA-files/BusinessIAImage.png'

function Papers() {
  return (
    <>
        <Navbar />

        <div className="papers-intro"> <h1> Check out Some Papers and Articles I have Written! </h1> </div>
        
        <div className="main-papers-container">

          {/* Card Set up for the 1st project */}
          <div id="paper-card-1" className="card-container">
            <a href="https://drive.google.com/file/d/1y1vc92c0NO5j-lR36DOj9SMkcSYQG6oa/view?usp=sharing"><img src={mathIAImg}></img></a>
            <div id="paper-container-1" className="content-card-container">
                <h2 className="paper-card-title"> Mathematical Model of Mars' Planetary Orbit </h2>
                <h4> This was the first webpage I made while learning react. It is responsive travel site designed with figma, and was a great introduction to thinking in React </h4>

            </div>
          </div>

          {/* Card Set up for the 2nd project */}
          <div id="paper-card-2" className="card-container">
            <a href="https://drive.google.com/file/d/1zYvk563cYrg3NF9s8dXjy4tEGzgWA8jW/view?usp=sharing"><img src={chemIAImg}></img></a>
            <div id="paper-container-2" className="content-card-container">
                <h2 className="paper-card-title"> The Relationship Between Voltage and Anode Concentration </h2>
                <h4> A simple to do list made with react. Works mainly with the DOM to control list-item state and local storage. Great for practicing JS functionalities.  </h4>

            </div>
          </div>

          {/* Card Set up for the 3rd project */}
          <div id="paper-card-3" className="card-container">
            <a href="https://drive.google.com/file/d/1bA4W-jDNg8bEVjfBv4bxkySBV53Zee_C/view?usp=sharing"><img src={bioIAImg}></img></a>
            <div id="paper-container-3" className="content-card-container">
              <h2 className="paper-card-title"> The Impact of Interpupillary Distance on Binocular Vision </h2>
              <h4>Making pong in python with turtle and os. Clean UI and responsive until a 300px width - Also supports multiplayer and has sound effects for bounces and wins.</h4>

            </div>
          </div>

          {/* Card Set up for the 4th project */}
          <div id="paper-card-4" className="card-container">
            <a href="https://drive.google.com/file/d/1llvf29nXGFo1-HtxVuNBKVbz-DqimRdG/view?usp=sharing"><img src={businessIAImg}></img></a>
            <div id="paper-container-4" className="content-card-container">
              <h2 className="paper-card-title"> A Detailed Plan to Increasing LFN's Net Profits  </h2>
              <h4>Making pong in python with turtle and os. Clean UI and responsive until a 300px width - Also supports multiplayer and has sound effects for bounces and wins.</h4>
            </div>
          </div>

        </div>
    </>
  )
}

export default Papers
