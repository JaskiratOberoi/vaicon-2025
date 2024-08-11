import React from "react";
import taj from "../../assets/taj.jpeg";

function Venue() {
  return (
    <div className="venue" id="venue">
      <div className="venue-title orbitron-font-set">Venue</div>
      <div className="venue-title-sub orbitron-font-set">
        Hotel Taj Vivanta, Dwarka
      </div>
      <div className="venue-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.375079746229!2d77.06078427640958!3d28.55849758743722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b07258b26f1%3A0xdb069b2f46a6e90e!2sVivanta%20New%20Delhi%2C%20Dwarka!5e0!3m2!1sen!2sin!4v1723317325606!5m2!1sen!2sin"
          title="google map"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <img className="venue-img" src={taj} alt="vivanta by taj" />
      </div>
    </div>
  );
}

export default Venue;
