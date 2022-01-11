import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import "../Layout/MainContainer.css";
import { UserContext } from "../Context/AuthContext";
import Login from "./Login";

const Home = () => {
  const { user } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);

  const openModalHandler = () => {
    if (!modalOpen) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  };

  if (user.auth) {
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
  } else {
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
};

export default Home;
