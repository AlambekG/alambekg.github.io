import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import LiveBright from "../../Assets/Projects/livebr.png";
import uMatter from "../../Assets/Projects/umm.png";
import SpaceShooter from "../../Assets/Projects/spp.png";
import infoVis from "../../Assets/Projects/popVis.png";
import MazeSolver from "../../Assets/Projects/Astar.png"
import PantryTracker from "../../Assets/Projects/pantry.png"

 
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={PantryTracker}
              isBlog={false}
              title="Pantry Tracker"
              description="This is a pantry inventory app with camera integration for capturing and tracking food items, 
                          hosted on Vercel with Firebase backend for real-time data management."
              ghLink="https://github.com/AlambekG/PantryTracker"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={LiveBright}
              isBlog={false}
              title="LiveBright"
              description="LiveBright is a calendar application with location-based event discovery. App features a customizable calendar view with 
                             location-based event discovery and advanced filtering options. Users can filter events by categories such as music, 
                             sports, and art, as well as by date, time, and location. The app allows users to save events to their calendar, 
                             purchase tickets, and share events with friends."
              ghLink="https://github.com/AlambekG/LiveBright"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={uMatter}
              isBlog={false}
              title="uMatter"
              description="This app was made in JunctionAsia Hackathon by our team.
                             This app helps managers take care about their employees’ well-being. 
                             The workers need to take a survey, which asks indirect questions related to their current mental well-being on a weekly basis. 
                             According to the questionnaire result, the company can suggest various activities that help increase employee well-being."
              ghLink="https://github.com/AlambekG/uMatter"
              
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={infoVis}
              isBlog={false}
              title="Information Visualization"
              description="I present an interactive visualization interface designed for analyzing population data. 
                                 The interface utilizes various visual encodings, interaction techniques, and animation effects to 
                                 facilitate data exploration and understanding. The application is implemented using JavaScript with a focus on 
                                 leveraging the D3 library for visualization tasks."
              ghLink="https://github.com/AlambekG/Visualization_projects"            
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={MazeSolver}
              isBlog={false}
              title="Maze Solver"
              description=" Maze Solver is an efficient and user-friendly application that tackles the challenge of finding the shortest path through complex mazes. 
              Utilizing a blend of Java and C++, it implements the three most popular graph search algorithms: 
              Depth-First Search (DFS), Breadth-First Search (BFS), and A* Search, demonstrating their applications and effectiveness in pathfinding contexts"
              ghLink="https://github.com/AlambekG/mazeSolver"
              
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={SpaceShooter}
              isBlog={false}
              title="SpaceShooter"
              description="Recreated classical Space shooter game in Unity. 
                             The game has different difficulty levels and has several interfaces for the menu, 
                             and game chapters. Used technologies: Unity, C#. "
              ghLink="https://github.com/AlambekG/MyUnityProjects/tree/main/spaceshooter"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
