import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import "../Layout/MainContainer.css";

const Home = () => {
  return (
    <Col
      className="center-content shadow-lg pt-2 text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <h1>Plan you commute with style and at ease</h1>
    </Col>
  );
};

export default Home;
