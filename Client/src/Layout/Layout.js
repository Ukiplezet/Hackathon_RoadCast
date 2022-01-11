import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import "../Layout/MainContainer.css";
import { BrowserRouter } from "react-router-dom";

import ChatSidebar from "../Components/ChatSidebar/ChatSidebar";
import PlayerFooter from "../Components/Footer/Footer";
import MenuSidebar from "../Components/MenuSidebar/MenuSidebar";
import Navbar from "../Components/Topbar/Navbar";
import Routes from "../Pages/index";
import Login from "../Pages/Login";
import Welcome from "../Pages/Welcome";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Container className="display-container d-flex flex-row justify-content-evenly">
          <Welcome />
          {/* <MenuSidebar />
          <Routes />
          <ChatSidebar className="" /> */}
        </Container>
        <PlayerFooter />
      </BrowserRouter>
    </>
  );
};

export default Home;
