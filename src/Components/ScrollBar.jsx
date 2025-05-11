import { useEffect } from "react";
import "../assets/styles/scrollBarStyles.css";

const ScrollBar = () => {
    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
        const scrollBar = document.querySelector('.scroll-bar');
        
        if (scrollBar) {
            scrollBar.style.width = `${scrollPercent}%`;
        }
    };
    
    useEffect(() => {
        // Initialize scroll position on mount
        handleScroll();
        
        // Add event listener
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        // <div className="scroll-bar-container">
            <div className="scroll-bar"></div>
        // </div> 
    );
};

export default ScrollBar;