import React from "react";

import heroImage from "./../../assets/heroimage.jpg";
import sarangi from "./../../assets/sarangi.png";
import bedi from "./../../assets/bedi.png";
import gjsingh from "./../../assets/gjsingh.png";

function Hero() {
  return (
    <div className="hero-section">
      <div className="banner"></div>
      <div className="logo">
        <div className="heading orbitron-font-set">VAICON 2025</div>
        <div className="subline">
          18th Annual Conference of Venous Association of India
        </div>
      </div>
      <div className="hero-content">
        <div className="section-image">
          <img src={heroImage} alt="medical conference banner" />
        </div>
        <div className="section-content">
          Dear Friends,
          <br /> On behalf of the Venous Association of India, it is my pleasure
          to extend a warm invitation to you to attend and actively participate
          in VAICON 2025. 18th Annual Conference of the Venous Association of
          India, to be hosted in the capital of India Delhi on{" "}
          <b>20th-22nd March, 2025 in Taj Vivanta, Dwarka, Delhi.</b> <br />
          <p></p>
          This carries forward the tradition of imparting cutting edge
          information on Venous Diseases to the participants. Vaicon is a dais,
          where International and National leading Medical Professionals deliver
          didactic lectures and demonstrations with participation in audience
          discussions so that at the end of conference delegates go back with
          comprehensive knowledge of the latest advances and innovations in
          Venous Diseases. <br />
          <p></p>
          The weather in March is pleasant at Delhi. We invite you to Delhi to
          join us in 2025 in Delhi.
        </div>
      </div>
      <div className="org">
        <div className="org-heading"></div>
        <div className="org-members">
          <ul className="members">
            <li>
              <img src={gjsingh} alt="Dr Gulshan Jit Singh" />
              <div className="designation">
                Dr. Gulshan Jit Singh <br /> Organising Chairman <br />
                VAICON 2025
              </div>
            </li>
            <li>
              <img src={bedi} alt="Dr H S Bedi" />
              <div className="designation">
                Dr. H S Bedi <br />
                Oganising Co-Chairman <br />
                VAICON 2025
              </div>
            </li>
            <li>
              <img src={sarangi} alt=" Dr P S Sarangi" />
              <div className="designation">
                Dr. P S Sarangi <br />
                Organising Secretary <br />
                VAICON 2025
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
