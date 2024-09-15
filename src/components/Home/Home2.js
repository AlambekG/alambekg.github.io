import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import meImg from "../../Assets/me.jpg"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMediumCircle,
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <br />
      <br />
        <Row>
          <Col md={8} className="home-about-description">
           <br/>
           <br/>
           <br/>
           <br/>
        <p className="home-about-body">
          {/* <p style={{ textAlign: "justify" }}> */}
            Hi there, I am <span className="purple"> Alambek Gulamidinov. </span>
            <br />
            New Grad Software Engineer from UNIST
            <br/>
            I love to code and develop solutions that matter
            <br/>
            Connect with me to share insights!
            <br />
          </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img src={meImg} className="img-fluid" alt="Alambek Gulamidinov"/>
            {/* <div class="about-img">
                <img src={meImg} className="img-fluid" alt="Alambek Gulamidinov"/>
            </div> */}
              {/* <img src={myImg} className="img-fluid" alt="Alambek Gulamidinov" /> */}
            </Tilt>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br /> <br /> <br /> <br /> <br /> 
        <Row>
          <Col md={12} className="home-about-social">
            <h3>Contact Me</h3>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AlambekG"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nerond/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/xyzz0407"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
