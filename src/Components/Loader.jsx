import React, { useEffect, useState } from 'react';
import '../assets/styles/ComponentStyles/loaderStyles.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisitedPortfolio');
    
    // If already visited, don't show loader
    if (hasVisited) {
      setLoading(false);
      return;
    }
    
    // First visit - show loader and set flag
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasVisitedPortfolio', 'true');
      }, 1500); // Minimum display time of 1.5 seconds
    };

    // If document already loaded, start timer
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Otherwise wait for the load event
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // If not loading, return null (don't render anything)
  if (!loading) return null;

  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-circle"></div>
        <div className="loader-text">
          <h2>Loading Portfolio</h2>
          <div className="loader-progress">
            <div className="loader-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;