import React from 'react'

import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          I am an Electrical and Electronics Engineer with extensive experience in web development, using both MERN stack and Python Django. I have over five years of experience in deep learning, machine learning, and artificial intelligence, specifically utilizing tools like PyTorch, TensorFlow, and scikit-learn.
        </p>
        <p>
          My passion for innovation drives me to explore new technologies and develop solutions that can help businesses and individuals thrive. Whether it's building complex websites or designing intelligent systems, I bring creativity and expertise to every project.
        </p>
      </div>

      <div className="about-images">
        <img
          src="src/assets/about-hero.png"
          alt="Working on AI Project"
          className="about-image"
        />
        <img
          src="src/assets/about-hero.png"
          alt="Speaking at Tech Conference"
          className="about-image"
        />
      </div>
    </div>
  );
}
