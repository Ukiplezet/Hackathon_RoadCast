import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faUserFriends,
  faAtom,
  faBookmark,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

function MenuSidebar() {
  return (
    <div className="pt-2 mx-1 ">
      <img
        className="logo"
        alt="Logo for Podcast Commuter"
        src="https://www.placecage.com/g/151/100"
      />
      <nav
        className="wrapper d-flex flex-row justify-content-start"
        id="header"
      >
        <ul className="mainNav list-unstyled fs-6 ms-2 py-3">
          <li className="py-1 d-flex">
            <a style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faUserCircle} className="me-2" />
              User Profile
            </a>
          </li>
          <li className="py-1 d-flex">
            <a style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faUserFriends} className="me-2" />
              Friends List
            </a>
          </li>
          <li className="py-1 d-flex">
            <a style={{ cursor: "pointer" }}>
              <FontAwesomeIcon
                icon={faAtom}
                style={{ cursor: "pointer" }}
                className="me-2"
              />
              Discover
            </a>
          </li>
          <li className="py-1 d-flex">
            <a style={{ cursor: "pointer" }}>
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ cursor: "pointer" }}
                className="me-2"
              />
              Saved Podcasts
            </a>
          </li>
          <li className="py-1 d-flex">
            <a style={{ cursor: "pointer" }}>
              <FontAwesomeIcon
                icon={faCogs}
                style={{ cursor: "pointer" }}
                className="me-2"
              />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuSidebar;
