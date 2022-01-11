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
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faAngleRight}
          style={{ cursor: "pointer" }}
          className="ms-4 me-5 mt-2 text-light"
        ></FontAwesomeIcon>
        <img
          style={{ height: "40px" }}
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
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
        ></FontAwesomeIcon>
      </div>
      <div className="d-flex flex-row ">
        <img
          className="rounded-pill me-3"
          src="https://www.placecage.com/30/30"
        />
        <span className="me-3 fs-6">UserName</span>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          style={{ cursor: "pointer" }}
          className="me-5 mt-1 text-light"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Navbar;
