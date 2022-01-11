import React, { useState, useContext, useEffect } from "react";
import "../App.css";
import { Card, Col, ListGroup } from "react-bootstrap";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditUserModal from "../Components/users/EditUserModal";
import { UserContext } from "../Context/AuthContext";

export default function UserProfile() {
  return (
    <Col
      xs={10}
      md={8}
      lg={7}
      className="center-content shadow-lg pt-2 text-white"
    >
      This is user Profile
    </Col>
  );
}
