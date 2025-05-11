import React from "react";
import "../assets/styles/ComponentStyles/projectStyles.css";
import project1_img from "../assets/img/pro1.jpg";
import project2_img from "../assets/img/pro2.jpg";
import project3_img from "../assets/img/pro3.jpg";
import project4_img from "../assets/img/pro4.jpg";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Title of Project1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam alias vel consectetur sed nihil blanditiis velit aspernatur dignissimos eligendi, debitis quae sequi tenetur, nam enim fugiat consequuntur neque, voluptatum accusantium veniam cumque suscipit excepturi exercitationem molestias id! Maxime, expedita facere?",
            technologies: ["TECHNOLOGIES", "USED", "IN", "YOUR", "PROJECT"],
            image: project1_img,
            liveLink: import.meta.env.VITE_PROJECT1_LIVE_LINK,
            githubLink: import.meta.env.VITE_PROJECT1_GITHUB
        },
        {
            id: 2,
            title: "Title of Project2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam alias vel consectetur sed nihil blanditiis velit aspernatur dignissimos eligendi, debitis quae sequi tenetur, nam enim fugiat consequuntur neque, voluptatum accusantium veniam cumque suscipit excepturi exercitationem molestias id! Maxime, expedita facere?",
            technologies: ["TECHNOLOGIES", "USED", "IN", "YOUR", "PROJECT"],
            image: project2_img,
            liveLink: import.meta.env.VITE_PROJECT2_LIVE_LINK,
            githubLink: import.meta.env.VITE_PROJECT2_GITHUB
        },
        {
            id: 3,
            title: "Title of Project3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam alias vel consectetur sed nihil blanditiis velit aspernatur dignissimos eligendi, debitis quae sequi tenetur, nam enim fugiat consequuntur neque, voluptatum accusantium veniam cumque suscipit excepturi exercitationem molestias id! Maxime, expedita facere?",
            technologies: ["TECHNOLOGIES", "USED", "IN", "YOUR", "PROJECT"],
            image: project3_img,
            liveLink: import.meta.env.VITE_PROJECT3_LIVE_LINK,
            githubLink: import.meta.env.VITE_PROJECT3_GITHUB
        },
        {
            id: 4,
            title: "Title of Project4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam alias vel consectetur sed nihil blanditiis velit aspernatur dignissimos eligendi, debitis quae sequi tenetur, nam enim fugiat consequuntur neque, voluptatum accusantium veniam cumque suscipit excepturi exercitationem molestias id! Maxime, expedita facere?",
            technologies: ["TECHNOLOGIES", "USED", "IN", "YOUR", "PROJECT"],
            image: project4_img,
            liveLink: import.meta.env.VITE_PROJECT3_LIVE_LINK,
            githubLink: import.meta.env.VITE_PROJECT3_GITHUB
        }
    ];

    return (
        <>
            <section id="projects" className="projects-section section">
                <div className="container">
                    <div className="title">
                        <h2 className="section-title text-center mb-4">My <span className="text-accent">Projects</span></h2>
                    </div>
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div className="project-card" key={project.id}>
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                                <i className="fas fa-external-link-alt"></i> Live Demo
                                            </a>
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                                <i className="fab fa-github"></i> GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tech">
                                        {project.technologies.map((tech, index) => (
                                            <span className="tech-tag" key={index}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <hr />
        </>
    );
};

export default Projects;