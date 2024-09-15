import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="home-about-body2">
            <div>
              Education:
              <br />
              <div className="aboutDiv">
              <span className="large"> Ulsan National Institute of Science and Technology (UNIST) </span>
              <br/>
              <b className="purple medium"> BS in Computer Science and Engineering (2019-2024)</b> 
              </div>
            </div>
            <br />
            <div>
              Experience:
              <div className="aboutDiv"> 
                <span className="large"> Software Engineer (Seoul, 2024 March - Present) </span>
                <br/>
                <span className="medium"> <a href="https://www.nepla.net/" className="purple">  Nepla Co. </a> 
                , Early stage legal-tech startup </span>
              </div>
              <div className="aboutDiv"> 
                <span className="large"> R&D Software Engineer Intern (Ulsan, 2023 July - 2023 September) </span>
                <br/>
                <span className="medium"> <a href="https://www.ibs.re.kr/eng.do" className="purple"> Institute for Basic Science </a> 
                , basic science research institute </span>
              </div>
              <div className="aboutDiv"> 
                <span className="large"> R&D Software Engineer Intern (Ulsan, 2023 March - 2023 June) </span>
                <br/>
                <span className="medium"> <a href="https://pal.unist.ac.kr/" className="purple"> Pal lab </a> 
                , Research laboratory at UNIST</span>
              </div>
              <div className="aboutDiv"> 
                <span className="large"> Software Developer Intern (Seoul, 2022 December - 2023 February)</span>
                <br/>
                <span className="medium"> <a href="https://o-n2.com/" className="purple"> OnSquare </a> 
                , Tech startup with product downloaded 30+ million times on Google Play.</span>
              </div>
            </div>
            </p>
            <br />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
