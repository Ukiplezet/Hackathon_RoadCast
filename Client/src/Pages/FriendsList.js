import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";
import OnHoverScrollContainer from "../Components/CostumScrollBar/CostumScrollDiv";

export default function FriendsList() {
  return (
    <Col
      className="center-content shadow-lg pt-2 text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <OnHoverScrollContainer>
        This is the friends list of the friends of the user
      </OnHoverScrollContainer>
    </Col>
  );
}
