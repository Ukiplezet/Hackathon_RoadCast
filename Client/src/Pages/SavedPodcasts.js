import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";

export default function SavedPodcasts() {
  return (
    <Col
      className="center-content shadow-lg pt-2 text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <h1> Here will be a list of the podcasts that the user saved. </h1>
      <h3>(either to listen in the future, or unfinished)</h3>
    </Col>
  );
}
