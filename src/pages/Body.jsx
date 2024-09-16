import React from 'react'
import './Body.css';

export default function Body() {
  return (
    <div className="body-container">
      <img 
        src="src/assets/about-hero.png"
        alt='This is the body image for this website'
        className="body-image"
      />
      <div className="content">
        <h1 className="main-heading">
          We provide the most affordable and the most comfortable schools and other websites 
          for all the states and the local government agencies around the world. Creativity 
          is our other name. Please patronize us.
        </h1>
        <p className="description">
          We have agents in all the local governments across the country and beyond. We also 
          provide the most needed and up-to-date technologies and deployment processes around 
          the world. We’ve got you covered and provide all necessary accessories globally.
        </p>
      </div>
    </div>
  );
}
