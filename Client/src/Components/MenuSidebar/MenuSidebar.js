import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MenuSidebar() {
  return (
    <div className="pt-2 mx-1 ">
      <img
        className="logo"
        alt="Logo for Podcast Commuter"
        src="https://www.placecage.com/g/151/100"
      />
      <nav className="wrapper " id="header">
        <ul className="mainNav list-unstyled">
          <li>
            <a> User Profile</a>
          </li>
          <li>
            <a>Friends List</a>
          </li>
          <li>
            <a>Discover</a>
          </li>
          <li>
            <a>Saved Podcasts</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuSidebar;
