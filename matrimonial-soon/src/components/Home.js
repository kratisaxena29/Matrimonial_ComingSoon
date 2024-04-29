import React, { useState, useEffect } from 'react';
import logo from '../images/logo1.png';
import HeroImage from '../images/hero_image2.png';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gradientStyle = {
    background: '#F5F5DC',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    color: '#B22222',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
    padding: '0 20px',
  };

  const leftContainerStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '700px',
    height: 'auto',
    maxWidth: '100%',
  };

  const textStyle = {
    marginBottom: '20px',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    marginTop: '20px',
    fontFamily: 'El Messiri',
    position: 'relative',
    overflow: 'hidden',
    animation: 'typing 3s steps(20, end)',
    color: `linear-gradient(to right, #EC174A, #F68C1F)`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    // color: 'transparent',
  };

  const comingStyle = {
    position: 'relative',
    color: "#EC174A"
  };

  const soonStyle = {
    position: 'relative',
    color: "#F68C1F"

  };

  const rightContainerStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    display: isMobile ? 'none' : 'flex',
    animation: imageLoaded ? 'fade-in 1s ease-in-out' : 'none',
    opacity: imageLoaded ? 1 : 0,
  };

  const bigImageStyle = {
    maxWidth: '110%',
    right: 0,
    height: 'auto',
  };

  const keyframeStyle = `
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }

    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;

  return (
    <div style={gradientStyle}>
      <style>{keyframeStyle}</style>
      <div style={leftContainerStyle} className="left-container">
        <img src={logo} alt="Logo" style={logoStyle} className="logo" />
        <h1 style={textStyle} className="text-style">
          <span style={comingStyle}>Coming </span>
          <span style={soonStyle}>Soon</span>
        </h1>
      </div>
      <div style={rightContainerStyle} className="right-container">
        <img
          src={HeroImage}
          alt="Big Image"
          style={bigImageStyle}
          className="big-image"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </div>
  );
}
