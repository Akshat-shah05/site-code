import React from "react";
import "./papers.css";
import { Tilt } from "react-tilt";

function Papers() {
  return (
    <>
      <div className="papers-intro">
        {" "}
        <h1> Papers and Articles </h1>{" "}
        <div className="papers-intro-description">
          <h4>
            {" "}
            These papers and articles are collections of my best academic and
            non-academic pieces of writing. Whether it be mathematics, the
            sciences or the humanities, my goal with these papers is to enrich my
            knowledge in various fields of study through an inquiry-based
            approach.
          </h4>
        </div>
      </div>
      

      <div className="main-papers-container">
        {/* Card Set up for the 1st project */}
        <Tilt>
          <div id="paper-card-1" className="card-container">
            <div id="paper-container-1" className="content-card-container">
              <a href="https://drive.google.com/file/d/1y1vc92c0NO5j-lR36DOj9SMkcSYQG6oa/view?usp=sharing">
                <h2 className="paper-card-title">
                  {" "}
                  Mathematical Model of Mars' Planetary Orbit{" "}
                </h2>
                <h4>
                  {" "}
                  Modelled the orbit of Mars using Keplars Law, deriving both a
                  polar and rectangular formula. Percent Error calculated to be
                  0.227%. Utilized Vector Calculus, various theories from
                  classical mechanics and curve-fitting models{" "}
                </h4>
              </a>
            </div>
          </div>
        </Tilt>

        {/* Card Set up for the 2nd project */}
        <Tilt>
          <div id="paper-card-2" className="card-container">
            <div id="paper-container-2" className="content-card-container">
              <a href="https://drive.google.com/file/d/1zYvk563cYrg3NF9s8dXjy4tEGzgWA8jW/view?usp=sharing">
                <h2 className="paper-card-title">
                  {" "}
                  The Relationship Between Voltage and Anode Concentration{" "}
                </h2>
                <h4>
                  {" "}
                  A simple to do list made with react. Works mainly with the DOM
                  to control list-item state and local storage. Great for
                  practicing JS functionalities.{" "}
                </h4>
              </a>
            </div>
          </div>
        </Tilt>

        {/* Card Set up for the 3rd project */}
        <Tilt>
          <div id="paper-card-3" className="card-container">
            <div id="paper-container-3" className="content-card-container">
              <a href="https://drive.google.com/file/d/1bA4W-jDNg8bEVjfBv4bxkySBV53Zee_C/view?usp=sharing">
                <h2 className="paper-card-title">
                  {" "}
                  The Impact of Interpupillary Distance on Binocular Vision{" "}
                </h2>
                <h4>
                  Making pong in python with turtle and os. Clean UI and
                  responsive until a 300px width - Also supports multiplayer and
                  has sound effects for bounces and wins.
                </h4>
              </a>
            </div>
          </div>
        </Tilt>

        {/* Card Set up for the 4th project */}
        <Tilt>
          <div id="paper-card-4" className="card-container">
            <div id="paper-container-4" className="content-card-container">
              <a href="https://drive.google.com/file/d/1llvf29nXGFo1-HtxVuNBKVbz-DqimRdG/view?usp=sharing">
                <h2 className="paper-card-title">
                  {" "}
                  A Detailed Plan to Increasing LFN's Net Profits{" "}
                </h2>
                <h4>
                  Making pong in python with turtle and os. Clean UI and
                  responsive until a 300px width - Also supports multiplayer and
                  has sound effects for bounces and wins.
                </h4>
              </a>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  );
}

export default Papers;
