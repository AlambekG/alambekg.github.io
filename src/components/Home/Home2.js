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
            <h1 style={{ fontSize: "2.6em" }}>
              Who <span className="purple"> I am </span>
            </h1>
        <p className="home-about-body">
          {/* <p style={{ textAlign: "justify" }}> */}
            Hi there, I am <span className="purple"> Alambek Gulamidinov. </span>
            I'm a fresh graduate of UNIST (South Korea) 
            <br />
            I am motivated by the prospect of innovation, excellence, and creating solutions that matter.
            <br/>
            I'm seeking opportunities that will allow me to leverage my technical and leadership skills.
            <br/>
            Connect with me to explore potential collaborations or to share insights!
            <br />
          </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img src={meImg} className="img-fluid" alt="img"/>
            {/* <div class="about-img">
                <img src={meImg} className="img-fluid" alt="img"/>
            </div> */}
              {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}
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
