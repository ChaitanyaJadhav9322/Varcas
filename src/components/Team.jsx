import React, { useState } from "react";
import "../styles/Team.css";

const placeholder =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='280' height='280' viewBox='0 0 280 280'><rect width='100%' height='100%' fill='%23E6E6E6' /><g transform='translate(70,40)'><circle cx='70' cy='70' r='60' fill='%23CFCFCF' /><text x='70' y='150' font-size='18' text-anchor='middle' fill='%23808080' font-family='Arial'>No Image</text></g></svg>`
  );

const Team = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  // ✅ Directly point to public/images/
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Team Lead",
      frontImage: "/images/user.jpg",
      backImage: "/images/realUser1.jpg",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Design Engineer",
      frontImage: "/images/user.jpg",
      backImage: "/images/realUser2.jpg",
      linkedin: "https://linkedin.com/in/janesmith",
    },
    {
      id: 3,
      name: "Robert Johnson",
      role: "Mechanical Engineer",
      frontImage: "/images/user.jpg",
      backImage: "/images/realUser3.jpg",
      linkedin: "https://linkedin.com/in/robertjohnson",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Electrical Engineer",
      frontImage: "/images/user.jpg",
      backImage: "/images/realUser4.jpg",
      linkedin: "https://linkedin.com/in/emilydavis",
    },
  ];

  const handleFlip = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section className="ev-team-section">
      <div className="ev-team-container">
        <h2 className="ev-team-title">Our Team</h2>

        <div className="ev-team-grid">
          {teamMembers.map((member) => (
            <div className="ev-team-grid-item" key={member.id}>
              <div
                className={`ev-team-card ${
                  flippedCard === member.id ? "flipped" : ""
                }`}
                onClick={() => handleFlip(member.id)}
              >
                <div className="ev-team-inner">
                  <div className="ev-team-front">
                    <div className="ev-team-image">
                      <img
                        src={member.frontImage}
                        alt={member.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = placeholder;
                        }}
                      />
                    </div>
                    <div className="ev-team-info">
                      <h5>{member.name}</h5>
                      <p className="ev-team-role">{member.role}</p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ev-linkedin-link"
                      >
                        <i className="fab fa-linkedin"></i> LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="ev-team-back">
                    <div className="ev-team-image">
                      <img
                        src={member.backImage}
                        alt={`${member.name} real`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = placeholder;
                        }}
                      />
                    </div>
                    <div className="ev-team-info">
                      <h5>{member.name}</h5>
                      <p className="ev-team-role">Real Profile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

         
      </div>
    </section>
  );
};

export default Team;
