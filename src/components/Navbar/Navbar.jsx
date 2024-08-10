import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-content">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#reg">Registration</a>
        </li>
        <li>
          <a href="#schedule">Schedule</a>
        </li>
        <li>
          <a href="#organizers">Organizers</a>
        </li>
        <li>
          <a href="#venue">Venue</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
