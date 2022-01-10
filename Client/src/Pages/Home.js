import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

import ChatSidebar from "../Components/ChatSidebar/ChatSidebar";
import PlayerFooter from "../Components/Footer/PlayerFooter";
import CenterContent from "../Components/MainContent/CenterContent";
import MenuSidebar from "../Components/MenuSidebar/MenuSidebar";
import Navbar from "../Components/Topbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="center-page d-flex flex-col justify-content-evenly">
        <div className="d-flex flex-col justify-content-evenly">
          <MenuSidebar />
          <CenterContent className="" />
          <ChatSidebar className="" />
        </div>
      </section>
      <PlayerFooter />
    </>
  );
};

export default Home;
