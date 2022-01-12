import React from "react";
import { Card, Col, Container, ListGroup } from "react-bootstrap";
import OnHoverScrollContainer from "../Components/CostumScrollBar/CostumScrollDiv";
// Testing

function Map() {
  return (
    <Col
      className="center-content shadow-lg pt-2 text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <OnHoverScrollContainer>
        
      <Col>A map to show the user's live route to destination</Col>
          </OnHoverScrollContainer>
    </Col>
  );
}

export default Map;
