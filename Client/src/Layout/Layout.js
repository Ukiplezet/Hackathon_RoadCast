import React, { Fragment, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import "../Layout/MainContainer.css";

import ChatSidebar from "../Components/ChatSidebar/ChatSidebar";
import PlayerFooter from "../Components/Footer/Footer";
import MenuSidebar from "../Components/MenuSidebar/MenuSidebar";
import Navbar from "../Components/Topbar/Navbar";
import { UserContext } from "../Context/AuthContext";

const Layout = ({ children }) => {
  const { user } = useContext(UserContext);
  if (user.auth) {
    return (
      <Fragment>
        <Navbar />
        <Container className="display-container d-flex flex-row justify-content-evenly">
          <MenuSidebar />
          {children}
          <ChatSidebar />
        </Container>
        <PlayerFooter />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Navbar />
        <Container className="display-container d-flex flex-row justify-content-evenly">
          {children}
        </Container>
        <PlayerFooter />
      </Fragment>
    );
  }
};

export default Layout;
