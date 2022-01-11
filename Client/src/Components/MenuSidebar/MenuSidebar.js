import React, { useState, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faUserFriends,
  faAtom,
  faBookmark,
  faCogs,
  faHome,
  faMapMarkedAlt,
  faHeadphonesAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../../Layout/SideManu.css";
function MenuSidebar() {
  const history = useHistory();
  const { user } = useContext(UserContext);

  return (
    <Col className="user-side-menu mt-3 mx-1 " xs={1} md={2} lg={2}>
      <img
        className="logo rounded-pill align-self-start"
        alt="Logo for Podcast Commuter"
        src="https://www.placecage.com/g/151/100"
      />
      <nav
        className="wrapper d-flex flex-row justify-content-start"
        id="header"
      >
        <ul className="mainNav list-unstyled fs-6 ms-2 py-3">
          <li className="py-1 d-flex">
            <a
              style={{ cursor: "pointer" }}
              className="navbar-brand text-light fs-6"
              to="/"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                history.push(`/${user._id}`);
              }}
            >
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Home
            </a>
          </li>
          <li className="py-1 d-flex">
            <a
              style={{ cursor: "pointer" }}
              className="navbar-brand text-light fs-6"
              to="/listeningnow"
              href="/listeningnow"
              onClick={(e) => {
                e.preventDefault();
                history.push(`/listeningnow/${user._id}`);
              }}
            >
              <FontAwesomeIcon icon={faHeadphonesAlt} className="me-2" />
              Listening Now
            </a>
          </li>
          <li className="py-1 d-flex">
            <a
              style={{ cursor: "pointer" }}
              className="navbar-brand text-light fs-6"
              to="/map"
              href="/map"
              onClick={(e) => {
                e.preventDefault();
                history.push(`/map/${user._id}`);
              }}
            >
              <FontAwesomeIcon icon={faMapMarkedAlt} className="me-2" />
              Map
            </a>
          </li>

          <li className="py-1 d-flex">
            <a
              style={{ cursor: "pointer" }}
              className="navbar-brand text-light fs-6"
              to="/friendslist"
              href="/friendslist"
              onClick={(e) => {
                e.preventDefault();
                history.push(`/friendslist/${user._id}`);
              }}
            >
              <FontAwesomeIcon icon={faUserFriends} className="me-2" />
              Friends List
            </a>
          </li>
          <li className="py-1 d-flex">
            <a
              style={{ cursor: "pointer" }}
              className="navbar-brand text-light fs-6"
              to="/discover"
              href="/discover"
              onClick={(e) => {
                e.preventDefault();
                history.push(`/discover/${user._id}`);
              }}
            >
              <FontAwesomeIcon
                icon={faAtom}
                style={{ cursor: "pointer" }}
                className="me-2"
              />
              Discover
            </a>
          </li>
          <li className="py-1 d-flex">
            <a
              style={{ cursor: "pointer" }}
              className="navbar-brand text-light fs-6"
              to="/savedpodcasts"
              href="/savedpodcasts"
              onClick={(e) => {
                e.preventDefault();
                history.push(`/savedpodcasts/${user._id}`);
              }}
            >
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ cursor: "pointer" }}
                className="me-2"
              />
              Saved Podcasts
            </a>
          </li>
          <li className="py-1 d-flex">
            <a
              style={{ cursor: "pointer" }}
              className="navbar-brand text-light fs-6"
              to="/userprofile"
              href="/userprofile"
              onClick={(e) => {
                e.preventDefault();
                history.push(`/userprofile/${user._id}`);
              }}
            >
              <FontAwesomeIcon icon={faUserCircle} className="me-2" />
              User Profile
            </a>
          </li>
          <li className="py-1 d-flex">
            <a
              style={{ cursor: "pointer" }}
              className="navbar-brand text-light fs-6"
              to="/settings"
              href="/settings"
              onClick={(e) => {
                e.preventDefault();
                history.push(`/settings/${user._id}`);
              }}
            >
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
    </Col>
  );
}

export default MenuSidebar;
