import React from "react";
import "../styles/Sponsor.css";

const sponsors = [
  { id: 1, name: "Bosch", logo: "/images/Sponsor1.jpg" },
  { id: 2, name: "Tata Motors", logo: "/images/Sponsor2.jpg" },
  { id: 3, name: "Mahindra", logo: "/images/Sponsor3.jpg" },
  { id: 4, name: "Siemens", logo: "/images/Sponsor4.jpg" },
  { id: 5, name: "Reliance", logo: "/images/Sponsor5.jpg" },
  // Add more logos here
];

const Sponsor = () => {
  return (
    <section className="sponsor-section">
      <div className="sponsor-container">
        <h2 className="sponsor-title">
          Powering Innovation with Our Proud Sponsors ⚡
        </h2>

        <div className="sponsor-logos-wrapper">
          <div className="sponsor-logos">
            {sponsors.map((sponsor) => (
              <div className="sponsor-logo-card" key={sponsor.id}>
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="sponsor-logo"
                />
              </div>
            ))}
            {/* duplicate logos for infinite scroll */}
            {sponsors.map((sponsor) => (
              <div className="sponsor-logo-card" key={`dup-${sponsor.id}`}>
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="sponsor-logo"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="sponsor-cta">
          <h3>Become a Sponsor</h3>
          <p>
            Join us in building the future of sustainable mobility with our
            Electric Formula Vehicle project. Together, we can drive innovation
            and inspire the next generation of engineers.
          </p>
          <a href="/contact">
            <button className="cta-button">Sponsor Us</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
