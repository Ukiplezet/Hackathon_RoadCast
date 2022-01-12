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

export default function Discover() {
  return (
    <Col
      className="center-content shadow-lg pt-2 text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <RowPost title="Netflix Originals" api={originals} />
      <RowPost title="Action Movies" isSmall={true} api={actions} />
      <RowPost title="Romantic Movies" api={romance} />
      <RowPost title="Comedy Movies" isSmall={true} api={comedy} />
      <RowPost title="Horror Movies" isSmall={true} api={horror} />
    </Col>
  );
}
