import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";
import OnHoverScrollContainer from "../Components/CostumScrollBar/CostumScrollDiv";
import RowPost from "../Components/NetFlixSlider/RowPost";
import { originals } from "../Components/constants/urls";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SavedPodcasts() {
  return (
    <Col
      className="center-content shadow-lg pt-2 text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <OnHoverScrollContainer>
        <h1> Here will be a list of the podcasts that the user saved. </h1>
        <h3>(either to listen in the future, or unfinished)</h3>
        <RowPost
          className="mb-5 pb-5"
          title="List of saved podcasts"
          isSmall={false}
          api={originals}
        />
      </OnHoverScrollContainer>
    </Col>
  );
}
