import React from "react";
import { FaBolt, FaLeaf, FaUsers, FaCogs, FaRoad } from "react-icons/fa";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section fullscreen-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            "Driving the future of mobility with innovation, sustainability, and
            the spirit of engineering excellence."
          </h2>
        </div>

        <div className="about-content">
          <p>
            KJEI Racers is a passionate student-led motorsports team
            participating in <b>SAEINDIA eBAJA</b>, dedicated to designing and
            manufacturing an <b>Electric Formula Vehicle</b> that merges
            sustainability with performance.
          </p>
          <p>
            Our mission is to develop an energy-efficient, high-performance EV
            while nurturing engineering talent, teamwork, and innovation. We aim
            to contribute towards the vision of <b>green mobility</b> and inspire
            the next generation of engineers.
          </p>
        </div>
        <div className="about-features">
          <div className="feature-card">
            <FaBolt className="feature-icon" />
            <h3>Electric Powertrain</h3>
            <p>Cutting-edge EV technology designed for efficiency & performance.</p>
          </div>
          <div className="feature-card">
            <FaLeaf className="feature-icon" />
            <h3>Sustainability</h3>
            <p>Promoting clean energy & eco-friendly racing innovation.</p>
          </div>
          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>Team Spirit</h3>
            <p>Collaboration and passion fuel our journey in eBAJA.</p>
          </div>
          <div className="feature-card">
            <FaCogs className="feature-icon" />
            <h3>Innovation</h3>
            <p>Pioneering new designs & testing engineering excellence.</p>
          </div>
          <div className="feature-card">
            <FaRoad className="feature-icon" />
            <h3>Future Mobility</h3>
            <p>Creating sustainable mobility solutions for tomorrow.</p>
          </div>

          {/* Duplicate for smooth loop */}
          <div className="feature-card">
            <FaBolt className="feature-icon" />
            <h3>Electric Powertrain</h3>
            <p>Cutting-edge EV technology designed for efficiency & performance.</p>
          </div>
          <div className="feature-card">
            <FaLeaf className="feature-icon" />
            <h3>Sustainability</h3>
            <p>Promoting clean energy & eco-friendly racing innovation.</p>
          </div>
          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>Team Spirit</h3>
            <p>Collaboration and passion fuel our journey in eBAJA.</p>
          </div>
          <div className="feature-card">
            <FaCogs className="feature-icon" />
            <h3>Innovation</h3>
            <p>Pioneering new designs & testing engineering excellence.</p>
          </div>
          <div className="feature-card">
            <FaRoad className="feature-icon" />
            <h3>Future Mobility</h3>
            <p>Creating sustainable mobility solutions for tomorrow.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;