import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Login from "./Login";

function Welcome() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModalHandler = () => {
    if (!modalOpen) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  };
  return (
    <Col
      className="center-content shadow-lg pt-2 text-white"
      xs={12}
      md={12}
      lg={12}
    >
      <h1>Hey there, Welcome to the best commute app EVA!</h1>
      <h3>Please login to plan your trip</h3>
      <Row className="d-flex justify-content-center">
        <iframe
          src="https://giphy.com/embed/2DMWjDy699m0jdCYig"
          width="700"
          height="250"
          frameBorder="0"
          //   class="giphy-embed"
          //   allowFullScreen
        ></iframe>
        <Button
          className="w-25 mt-3"
          onClick={(e) => {
            e.preventDefault();
            openModalHandler();
          }}
        >
          Login
        </Button>
      </Row>
      <Login modalOpen={modalOpen} handleModalOpen={openModalHandler} />
    </Col>
  );
}

export default Welcome;
