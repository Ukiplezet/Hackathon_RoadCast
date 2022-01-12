import React from "react";
import { Card, Col, Carousel } from "react-bootstrap";
import "../Layout/DiscoverStyle.css";
import RowPost from "../Components/NetFlixSlider/RowPost";
import {
  actions,
  comedy,
  horror,
  originals,
  romance,
} from "../Components/constants/urls";
import OnHoverScrollContainer from "../Components/CostumScrollBar/CostumScrollDiv";

export default function Discover() {
  return (
    <Col
      className="center-content shadow-lg pt-2 text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <OnHoverScrollContainer>
        <RowPost title="Netflix Originals" isSmall={true} api={originals} />
        <RowPost title="Action Movies" isSmall={true} api={actions} />
        <RowPost title="Romantic Movies" isSmall={true} api={romance} />
        <RowPost title="Comedy Movies" isSmall={true} api={comedy} />
        <RowPost title="Horror Movies" isSmall={true} api={horror} />
      </OnHoverScrollContainer>
    </Col>
  );
}
