import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows,
  SiVite,
  SiLinux,
  SiJira,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <h4>Linux OS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <h4>Mac OS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h4>VS Code</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h4>Postman</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <h4>Jira</h4>
      </Col>
      
    </Row>
  );
}

export default Toolstack;
