import React, { useState } from "react";
import "../assets/styles/ComponentStyles/contactStyles.css";

const socialLinks = {
    github: import.meta.env.VITE_SOCIAL_GITHUB,
    linkedin: import.meta.env.VITE_SOCIAL_LINKEDIN,
    instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
             {/*change this with the actual link of your site when you host * /api/send-email * will remain as it is. */} 
            const apiUrl = import.meta.env.DEV 
                ? 'https://your-site-url/api/send-email'
                : '/api/send-email';
                
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            
            if (data.success) {
                setSubmitStatus({
                    success: true,
                    message: "Message sent successfully! I'll get back to you soon."
                });
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            } else {
                throw new Error(data.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setSubmitStatus({
                success: false,
                message: "Failed to send message. Please try again later."
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section id="contact" className="contact-section section">
                <div className="container">
                    <div className="title">
                        <h2 className="section-title text-center mb-4">Contact <span className="text-accent">Me</span></h2>
                    </div>

                    <div className="contact-container">
                        {/* Contact info section remains unchanged */}
                        <div className="contact-info">
                            <h3 className="contact-subtitle mb-3">Get In Touch</h3>
                            <p className="contact-text mb-4">
                                Feel free to reach out to me for any questions, project inquiries, or just to say hello.
                                I'm always open to discussing new projects and opportunities.
                            </p>

                            <div className="info-items">
                                <div className="info-item">
                                    <div className="info-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="info-content">
                                        <h4>Location</h4>
                                        <p>Your Location</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="info-content">
                                        <h4>Email</h4>
                                        {/* replace this with you email */}
                                        <p><a href="mailto:your-email@example.com">your-email@example.com</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links">
                                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        <div className="contact-form-container">
                            <h3 className="form-title mb-3">Send Me a Message</h3>

                            {submitStatus && (
                                <div className={`form-${submitStatus.success ? 'success' : 'error'}-message`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your Message"
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button  
                                    type="submit"
                                    className="submit-btn"
                                    disabled={isSubmitting}
                                >
                                {isSubmitting ? 'Sending...' : 'Send Message'} <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;