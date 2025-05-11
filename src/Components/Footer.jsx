import React from "react";
import "../assets/styles/ComponentStyles/footerStyles.css";

const socialLinks = {
    github: import.meta.env.VITE_SOCIAL_GITHUB,
    linkedin: import.meta.env.VITE_SOCIAL_LINKEDIN,
    instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM
};

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h3 className="footer-heading">Your Name</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, amet esse. In adipisci molestias similique!</p>
                        <div className="social-links-footer">
                            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="footer-section links">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section contact">
                        <h3 className="footer-heading">Contact Me</h3>
                        {/* change the email with your email */}
                        <p><a href="mailto:your-email@example.com" style={{color: "white"}}><i className="fas fa-envelope"></i> your-email@example.com</a></p>
                        <p><i className="fas fa-map-marker-alt"></i> Your Location</p>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;