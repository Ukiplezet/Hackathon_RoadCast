import React from "react";
import { Card, Col, Carousel } from "react-bootstrap";
import "../Layout/DiscoverStyle.css";
import RowPost2 from "../Components/NetFlixSlider/RowPost2";
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
      className="center-content shadow-lg   text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <OnHoverScrollContainer>
        <h2 className="my-3">Discover New &amp; Trending Podcasts</h2>
        <h4>This is based on our talented Data-Science team</h4>
        <h4> and our unique algorithm</h4>
        <RowPost2
          title="You might also like"
          isSmall={true}
          api={originals}
          className="my-5 pb-5"
          title="Here are your podcasts of interest:"
          isSmall={false}
        />
        <RowPost2 title="Random Podcasts" isSmall={true} api={actions} />
        <RowPost2
          title="Cannabis related podcasts"
          isSmall={true}
          api={romance}
        />
        <RowPost2
          title="Javascript podcasts"
          isSmall={true}
          api={comedy}
          className="my-5 pb-5"
          title="Here are your podcasts of interest:"
          isSmall={false}
        />
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
