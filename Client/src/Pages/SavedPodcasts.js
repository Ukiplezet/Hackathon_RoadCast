import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";
import OnHoverScrollContainer from "../Components/CostumScrollBar/CostumScrollDiv";
import RowPost2 from "../Components/NetFlixSlider/RowPost2";
import { horror } from "../Components/constants/urls";
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
        <h2> Here will be a list of the podcasts that the user saved. </h2>
        <h3>(either to listen in the future, or unfinished)</h3>
        <RowPost2
          title="Python podcasts"
          isSmall={true}
          api={horror}
          className="my-5 pb-5"
          title="Here are your podcasts of interest:"
          isSmall={false}
        />
      </OnHoverScrollContainer>
    </Col>
  );
}
