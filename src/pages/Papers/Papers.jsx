import React from "react";
import "./papers.css";
import '../../components/fade.css';
import SlideIn from '../../components/SlideIn';
import '../../components/slideIn.css';
import SlideInR from '../../components/SlideInR';
import '../../components/slideInR.css';
import FadeinView from '../../components/FadeinView';
import { Tilt } from "react-tilt";

function Papers() {
  return (
    <>
      <FadeinView>
        <div className="papers-intro">
          {" "}
          <h1 id="papers"> Papers and Articles </h1>{" "}
          <div className="papers-intro-description">
            <h4>
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
          <SlideIn>
            <Tilt>
              <div id="paper-card-1" className="card-containerp">
                <div id="paper-container-1" className="content-card-container">
                  <a href="https://drive.google.com/file/d/1y1vc92c0NO5j-lR36DOj9SMkcSYQG6oa/view?usp=sharing" target="_blank">
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
          </SlideIn>

          {/* Card Set up for the 2nd project */}
          <SlideIn>
            <Tilt>
              <div id="paper-card-2" className="card-containerp">
                <div id="paper-container-2" className="content-card-container">
                  <a href="https://drive.google.com/file/d/1zYvk563cYrg3NF9s8dXjy4tEGzgWA8jW/view?usp=sharing" target="_blank">
                    <h2 className="paper-card-title">
                      {" "}
                      The Relationship Between Voltage and Anode Concentration{" "}
                    </h2>
                    <h4>
                      {" "}
                      Analyzed the relationship between Voltage and Anode Solution Concentration in a Voltaic/Galvanic Cell using Copper (II) Sulfate and Zinc Nitrate. Achieved results accurate to a 2% error when compared to scientific studies.{" "}
                    </h4>
                  </a>
                </div>
              </div>
            </Tilt>
          </SlideIn>

          {/* Card Set up for the 3rd project */}
          <SlideIn>
            <Tilt>
              <div id="paper-card-3" className="card-containerp">
                <div id="paper-container-3" className="content-card-container">
                  <a href="https://drive.google.com/file/d/1bA4W-jDNg8bEVjfBv4bxkySBV53Zee_C/view?usp=sharing" target="_blank">
                    <h2 className="paper-card-title">
                      {" "}
                      The Impact of Interpupillary Distance on Binocular Vision{" "}
                    </h2>
                    <h4>
                      Created a modified device that can determine the field of view of each eye, which can be used to determine binocular field of vision. This study has various applications to sports and vision treatments.
                    </h4>
                  </a>
                </div>
              </div>
            </Tilt>
          </SlideIn>

          {/* Card Set up for the 4th project */}
          <SlideIn>
            <Tilt>
              <div id="paper-card-4" className="card-containerp">
                <div id="paper-container-4" className="content-card-container">
                  <a href="https://drive.google.com/file/d/1llvf29nXGFo1-HtxVuNBKVbz-DqimRdG/view?usp=sharing" target="_blank">
                    <h2 className="paper-card-title">
                      {" "}
                      A Detailed Plan to Increasing LFN's Net Profits{" "}
                    </h2>
                    <h4>
                      Produced a 30 page report on the prospect of using sponsorships to increase Low Fat Nutritions Profits. Determined that sponsoring a sports event in Mississauga could lead to a 15% increase in net profit. 
                    </h4>
                  </a>
                </div>
              </div>
            </Tilt>
          </SlideIn>
        </div>
      </FadeinView>
    </>
  );
}

export default Papers;
