import React, { useState, useRef } from "react";
import "./index.scss";
import woopie from "../../assets/images/woopiebounce.png";
import baseball from "../../assets/images/baseballFeild.jpg";
import json from "../../assets/images/json.jpg";
import cube from "../../assets/images/rubiks.jpg";
import Sidebar from "../Sidebar";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const gridRef = useRef();

  const projects = [
    {
      id: 1,
      title: "Field Manager",
      img: baseball,
      link: "https://fieldmanager.onrender.com/",
      description: "Full-stack application allowing people to book baseball fields",
      technologies: ["BootStrap", "Node.js", "PostgreSQL", "JavaScript"],
    },
    {
      id: 2,
      title: "Json Parser",
      img: json,
      link: "https://personalwebsite-f3ql.onrender.com/json.html",
      description: "json file validator built with pyhton",
      technologies: ["Python", "NodeJS", "Regex"],
    },
    {
      id: 3,
      title: "Rubiks Cube Time",
      img: cube,
      link: "https://personalwebsite-f3ql.onrender.com/cube.html",
      description: "Inspired By my Love of Rubiks Cubes",
      technologies: ["JavaScript", "NodeJS"],
    },
    {
      id: 4,
      title: "Woopie Bounce",
      link: "https://globalgamejam.org/games/2024/2024-global-game-jam-entry-5",
      img: woopie,
      description: "2D Platformer game made as a team as part of a Hackathon",
      technologies: ["Unity", "C#", "Graphic design"],
    },
  ];

  const handleScroll = () => {
    if (gridRef.current) {
      const scrollLeft = gridRef.current.scrollLeft;
      const cardWidth = gridRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  const scrollToCard = (index) => {
    if (gridRef.current) {
      const cardWidth = gridRef.current.clientWidth;
      gridRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="projects__container">
      <Sidebar />
      <h1 class='title'>Projects</h1>
      <div className="projects__grid" ref={gridRef} onScroll={handleScroll}>
        {projects.map((project) => (
          <div key={project.id} className="projects__card">
            <div className="projects__card-content">
              <h3 className="projects__card-title">{project.title}</h3>
              <a href= {project.link} target="_blank" rel="noreferrer"><img src={project.img} alt={project.title} /> </a>
              <p className="projects__card-description">{project.description}</p>
              <div className="projects__tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="projects__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Bubbles */}
      <div className="projects__bubbles">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`projects__bubbles-bubble ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => scrollToCard(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
