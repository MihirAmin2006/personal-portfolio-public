import React from "react";
import "../assets/styles/ComponentStyles/aboutStyles.css";
import profilePic from "../assets/img/profilePic.jpg";

const About = () => {
    return (
        <>
            <section id="about" className="about-section section">
                <div className="container">
                    <div className="title">
                        <h2 className="section-title text-center mb-4">About <span className="text-accent">Me</span></h2>
                    </div>

                    <div className="about-container">
                        <div className="about-image">
                            <div className="image-frame">
                                <img src={profilePic} alt="Alternate Text" />
                            </div>
                            <div className="experience-badge">
                                <span className="years">2+</span>
                                <span className="text">Years Experience</span>
                            </div>
                        </div>

                        <div className="about-content">
                            <h3 className="about-subtitle mb-2">Subtitle {/*i.e. Backend Developer*/}</h3>

                            <p className="about-text mb-3">
                                {/* single paragraph about you */}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, cumque? Provident esse corrupti maxime quae, soluta expedita ab quas quia mollitia debitis quasi voluptate tempora ullam quaerat quod cupiditate facere veniam recusandae aspernatur sunt aperiam repudiandae sint. Quibusdam, sapiente maxime. Voluptatibus voluptatum impedit, sed illum quod nihil temporibus neque. Aliquam!
                            </p>

                            <p className="about-text mb-3">
                                {/* second paragraph in continue */}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nemo dicta facilis eaque, facere iure quam, nihil quisquam tempore soluta esse dolore est? Consequuntur ad debitis vitae beatae est aliquid molestias impedit nemo fugit voluptatem!
                            </p>

                            <div className="skills-container">
                                <h4 className="skills-title mb-2">My Skills</h4>
                                <div className="skills-grid">
                                    <div className="skill-item">
                                        <div className="skill-name">PHP</div>
                                        <div className="skill-bar">
                                            <div className="skill-progress" style={{ width: "85%" }}></div>
                                        </div>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-name">MySQL</div>
                                        <div className="skill-bar">
                                            <div className="skill-progress" style={{ width: "85%" }}></div>
                                        </div>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-name">JAVA</div>
                                        <div className="skill-bar">
                                            <div className="skill-progress" style={{ width: "75%" }}></div>
                                        </div>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-name">React JS</div>
                                        <div className="skill-bar">
                                            <div className="skill-progress" style={{ width: "70%" }}></div>
                                        </div>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-name">SQL</div>
                                        <div className="skill-bar">
                                            <div className="skill-progress" style={{ width: "80%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="about-buttons mt-4">
                                <a href="#contact" className="btn-primary">Contact Me</a>
                                <a href="#projects" className="btn-outline">View Projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </>
    );
};

export default About;