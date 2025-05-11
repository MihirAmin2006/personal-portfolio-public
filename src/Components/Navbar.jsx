import React, { useState, useEffect } from "react";
import "../assets/styles/ComponentStyles/navbarStyles.css";


const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "projects", "contact"];
            const currentPos = window.scrollY + 100;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    
                    if (currentPos >= top && currentPos < top + height) {
                        setActiveLink(`#${section}`);
                    }
                }
            });

            // Check if we're at the top of the page
            if (window.scrollY < 100) {
                setActiveLink("/");
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Initial check
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };
    
    const navLinks = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "#about"
        },
        {
            name: "Projects",
            link: "#projects"
        },
        {
            name: "Contact",
            link: "#contact" 
        }  
    ];
    
    return (
        <nav className="navbar">
            <h1 className="logo">
                <a href="/">
                    <span className="logo-first-name">First</span>
                    <span className="logo-last-name">Last</span>
                </a>
            </h1>
            
            <button className="menu-btn" onClick={toggleMenu}>
                {menuActive ? "✕" : "☰"}
            </button>
            
            <ul className={`nav-items ${menuActive ? "active" : ""}`}>
                {
                    navLinks.map((link, index) => (
                        <li key={index} className="nav-item">
                            <a 
                                href={link.link} 
                                id="navLink" 
                                className={`nav-link ${activeLink === link.link ? "active" : ""}`}
                                onClick={() => {
                                    setMenuActive(false);
                                    setActiveLink(link.link);
                                }}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;
