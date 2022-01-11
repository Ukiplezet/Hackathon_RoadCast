import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import AudioPlayer from "react-audio-element";
function CenterContent() {
  return (
    <Col
      className="center-content shadow-lg pt-2 text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <h1>Show data regarding the selected podcast</h1>
      <Row className="audioDiv mx-4">
        <AudioPlayer
          style={{ cursor: "pointer" }}
          className="mt-2"
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          overrideStyles={true}
          showHours={true}
          classNames={{
            controlButton: "custom-control",
            playPause: "custom-play-pause",
            timeText: "custom-time-text",
            sliderTrack: "custom-slider-track",
          }}
          colors={{ sliderTrack: "#2e3646" }}
        />
      </Row>
    </Col>
  );
}

export default CenterContent;
