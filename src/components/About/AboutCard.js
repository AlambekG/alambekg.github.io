import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="home-about-body2">
              Programming since 7th grade. 
              <br /> I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript, Python. </b>
              </i>
              <br />
              My Interest's are building &nbsp;
              <i>
                <b className="purple">Software Solutions </b> <br/>
                and solving &nbsp;
                <b className="purple">
                  complex tech problems.
                </b>
              </i>
              <br />
              Whenever possible, I apply my knowledge on Algorithms and Data Structures 
              to optimize applications
            </p>
            <br />
            Some other activities that I love to do

          <ul>
            <li className="about-activity">
              Playing Football
            </li>
            <li className="about-activity">
              Exploring new things
            </li>
            <li className="about-activity">
               Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
