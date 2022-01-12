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
      className="center-content shadow-lg my-2  text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <OnHoverScrollContainer>
        <RowPost title="You might also like" isSmall={true} api={originals} />
        <RowPost title="Random Podcasts" isSmall={true} api={actions} />
        <RowPost
          title="Cannabis related podcasts"
          isSmall={true}
          api={romance}
        />
        <RowPost title="Javascript podcasts" isSmall={true} api={comedy} />
        <RowPost title="Python podcasts" isSmall={true} api={horror} />
      </OnHoverScrollContainer>
    </Col>
  );
}
