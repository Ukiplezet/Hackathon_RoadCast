import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import "../Layout/MainContainer.css";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import ChatSidebar from "../Components/ChatSidebar/ChatSidebar";
import PlayerFooter from "../Components/Footer/PlayerFooter";
import MenuSidebar from "../Components/MenuSidebar/MenuSidebar";
import Navbar from "../Components/Topbar/Navbar";
import Routes from "./index";
const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Container className="display-container d-flex flex-row justify-content-evenly">
          <MenuSidebar />
          <Routes />
          <ChatSidebar className="" />
        </Container>
        <PlayerFooter />
      </BrowserRouter>
    </>
  );
};

export default Home;
