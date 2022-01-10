import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faSearch,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../../Layout/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Navbar() {
  return (
    <div className="navbar shadow-lg d-flex flex-row justify-content-between">
      <div>
        <FontAwesomeIcon
          icon={faAngleLeft}
          style={{ cursor: "pointer" }}
          className="ms-4 mt-2 text-light"
          size="md"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faAngleRight}
          style={{ cursor: "pointer" }}
          className="ms-4 me-5 mt-2 text-light"
          size="md"
        ></FontAwesomeIcon>
        <img
          src="../../media/Podcasts-icon.png"
          alt="Logo"
          className="text-light"
        />
      </div>
      <div>
        <input className="rounded-pill me-2" style={{ width: "550px" }} />
        <FontAwesomeIcon
          icon={faSearch}
          style={{ cursor: "pointer" }}
          className="me-5 mt-2 text-light"
          size="md"
        ></FontAwesomeIcon>
      </div>
      <div>
        <img className="rounded-pill me-4" src="https://www.placecage.com/30/30" />
        <FontAwesomeIcon
          icon={faSignOutAlt}
          style={{ cursor: "pointer" }}
          className="me-5 mt-2 text-light"
          size="md"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Navbar;
