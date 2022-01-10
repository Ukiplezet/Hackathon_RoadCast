import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import "../Layout/MainContainer.css";

import ChatSidebar from "../Components/ChatSidebar/ChatSidebar";
import PlayerFooter from "../Components/Footer/PlayerFooter";
import CenterContent from "../Components/MainContent/CenterContent";
import MenuSidebar from "../Components/MenuSidebar/MenuSidebar";
import Navbar from "../Components/Topbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <Container className="display-container d-flex flex-row justify-content-evenly">
        <MenuSidebar />
        <CenterContent className="" />
        <ChatSidebar className="" />
      </Container>
      <PlayerFooter />
    </>
  );
};

export default Home;
