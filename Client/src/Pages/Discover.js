import React from "react";
import { Card, Col, Carousel } from "react-bootstrap";

export default function Discover() {
  return (
    <Col
      className="center-content shadow-lg pt-2 text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <h3>Today's favorite topic is:</h3>
      <h4>Nicholas Cage!</h4>
      <Carousel fade>
        <Carousel.Item className="d-flex flex-col justify-content-center">
          <img
            style={{
              height: "350px",
              width: "250px",
            }}
            className="d-block w-75"
            src="https://www.placecage.com/350/250"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="d-flex flex-col justify-content-center">
          <img
            style={{
              height: "350px",
              width: "20vw",
            }}
            className="d-block w-75"
            src="https://www.placecage.com/340/250"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="d-flex flex-col justify-content-center">
          <img
            style={{
              height: "350px",
              width: "20vw",
            }}
            className="d-block w-75"
            src="https://www.placecage.com/340/230"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="d-flex flex-col justify-content-center">
          <img
            style={{
              height: "350px",
              width: "20vw",
            }}
            className="d-block w-75"
            src="https://www.placecage.com/342/245"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>Fouth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="d-flex flex-col justify-content-center">
          <img
            style={{
              height: "350px",
              width: "20vw",
            }}
            className="d-block w-75"
            src="https://www.placecage.com/345/230"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Col>
  );
}
