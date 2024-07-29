import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiExpress,
  SiNestjs,
  SiTypescript,
  SiPrisma,
  SiAmazon,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h4>C ++</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h4>Typescript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4>React</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
        <h4>Nest js</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h4>Next JS</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h4>Mongo DB</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4>Git</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <h4>Redis</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h4>Postgres SQL</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h4>Python</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h4>Java</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPrisma />
        <h4>Prisma</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAmazon/>
        <h4>AWS</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
