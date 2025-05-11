import React from "react";
import "../assets/styles/ComponentStyles/heroStyles.css";
import profilePic from "../assets/img/profilePic.jpg";
import cv from "../assets/files/YOUR_CV.pdf" 

const Hero = () => {
    return (
        <>
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>Hello, I am {/* replace this with actual name */}<span className="text-accent">Name</span></h1>
                            <h2 className="hero-subtitle">Backend Developer</h2>
                            {/* replace this with actual description */}
                            <p className="hero-description mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis consequuntur maxime officia enim excepturi officiis vitae error, nostrum tempora in pariatur qui corrupti beatae. Ad!
                            </p>
                            <div className="hero-buttons">
                                <a 
                                    href={cv} 
                                    download="YOUR_NAME_CV.pdf"
                                    className="btn-primary"
                                >
                                    Download CV
                                </a>
                                <a href="#contact" className="btn-outline">Contact Me</a>
                            </div>
                        </div>
                        <div className="hero-image">
                            <div className="hero-image-container">
                                <div className="hero-image-placeholder">
                                    <img src={profilePic} alt="Profile" />
                                </div>
                            </div>
                            <div className="hero-shape"></div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </>
    );
};

export default Hero;