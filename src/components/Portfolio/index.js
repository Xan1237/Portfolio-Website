import React, { useState, useRef } from "react";
import "./index.scss";
import woopie from "../../assets/images/woopiebounce.png";
import baseball from "../../assets/images/baseballFeild.jpg";
import json from "../../assets/images/json.jpg";
import cube from "../../assets/images/rubiks.jpg";
import SpaceStyler from "../../assets/images/360spacestyler.ico";
import Sidebar from "../Sidebar";
import carLoan from "../../assets/images/cartooncar.jpg"
import fitcheck from "../../assets/images/fitcheck.jpg"

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const gridRef = useRef();

  const projects = [
    {
      id: 6,
      title: "Fitcheck",
      img: fitcheck,
      link: "https://fitcheck.fitness",
      description: "A Social media platform allowing gym enthusiasts to connect and share their fitness journeys. As well as rate diffrent gyms and find fitness services",
      technologies: ["NodeJS", "React"],
    },
    {
      id: 6,
      title: "360 SpaceStyler",
      img: SpaceStyler,
      link: "https://youtu.be/XXmj8QDrFbk?si=aHc7y7xtznlfxdqi&t=52",
      description: "A marketplace allowing realtors to create 360° immersive experiences of their properties, and allowing renters to style them to match their needs.",
      technologies: ["AWS", "Python"],
    },
     {
      id: 6,
      title: "Car Loan Approval Chatbot",
      img: carLoan,
      link: "https://youtu.be/XXmj8QDrFbk?si=aHc7y7xtznlfxdqi&t=52",
      description: "Used Cognizants open source neuro-ai software to create an agentic ai chatbot to determine a customers car loan eligibility.",
      technologies: ["Agentic AI", "Python"],
    },
    {
      id: 1,
      title: "Field Manager",
      img: baseball,
      link: "https://fieldmanager.onrender.com/",
      description: "Full-stack application allowing people to book baseball fields.",
      technologies: ["BootStrap", "Node.js", "PostgreSQL", "JavaScript"],
    },
    {
      id: 2,
      title: "JSON Parser",
      img: json,
      link: "https://personalwebsite-f3ql.onrender.com/json.html",
      description: "JSON file validator built with Python.",
      technologies: ["Python", "NodeJS", "Regex"],
    },
    {
      id: 3,
      title: "Rubik's Cube Timer",
      img: cube,
      link: "https://personalwebsite-f3ql.onrender.com/cube.html",
      description: "Inspired by my love of Rubik's Cubes.",
      technologies: ["JavaScript", "NodeJS"],
    },
    {
      id: 4,
      title: "Woopie Bounce",
      link: "https://globalgamejam.org/games/2024/2024-global-game-jam-entry-5",
      img: woopie,
      description: "2D platformer game made as a team as part of a hackathon.",
      technologies: ["Unity", "C#", "Graphic design"],
    }
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

    </section>
  );
};

export default Projects;
