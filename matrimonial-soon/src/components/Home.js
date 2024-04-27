import React from 'react';
import logo from '../images/logo_remove.png'; // Replace '../images/logo_remove.png' with the path to your logo image
import HeroImage from '../images/hero_image2.png'; // Replace '../images/hero_image2.png' with the path to your big image

export default function Home() {
  const gradientStyle = {
    background: '#770737',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  };

  const logoStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    width: '200px', // Adjust size as needed
    height: 'auto', // Maintain aspect ratio
  };

  const bigImageStyle = {
    position: 'absolute',
    bottom: '0',
    right: '0',
    width: '300px', // Adjust size as needed
    height: 'auto', // Maintain aspect ratio
    animation: 'float 5s infinite', // Animation for the big image
  };

  const animationKeyframes = `
    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0); }
    }

    @keyframes fadeIn {
      0% { opacity: 0; }
      50% { opacity: 1; }
      100% { opacity: 0; }
    }
  `;

  return (
    <div style={gradientStyle}>
      <style>{animationKeyframes}</style>
      <img src={logo} alt="Logo" style={logoStyle} />
      <h1 style={{ marginBottom: '20px', animation: 'fadeIn 3s infinite, float 5s infinite' }}>We Are Coming Soon...</h1>
      <img src={HeroImage} alt="Big Image" style={bigImageStyle} />
    </div>
  );
}
