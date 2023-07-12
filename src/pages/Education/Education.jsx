import React from "react";
import "./education.css";
import SlideIn from '../../components/SlideIn';
import '../../components/slideIn.css';
import SlideInR from '../../components/SlideInR';
import '../../components/slideInR.css';
import FadeinView from '../../components/FadeinView';

function Education() {
  return (
    <>
        <FadeinView>
            <div className="education-container">
                <SlideIn>
                    <h1 id="education"> Education </h1>
                    <h2> University of Waterloo </h2>
                    <h3 className="program"> Bachelors of Computer Science - (BCS) </h3>
                    <h3 className="program-description">
                    {" "}
                    Waterloo, ON, Canada • Sept 2023 - Apr 2028 (Expected)
                    </h3>
                </SlideIn>
                <SlideIn>
                    <h4 className="further-description">
                    Waterloo is home to one of the best Computer Science school and Math
                    Faculty in the world. Intersecting my love for math and programming
                    with the ability to innovate, studying computer science will allow me
                    to develop logical solutions to pressing problems in society.
                    Considering my goals, I am planning on a Minor in Combinatorics and
                    Optimization with a specialization in Artificial Intelligence!
                    </h4>
                </SlideIn>
            </div>
        </FadeinView>
    </>
  );
}

export default Education;
