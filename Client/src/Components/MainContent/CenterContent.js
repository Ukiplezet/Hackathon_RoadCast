import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import AudioPlayer from "react-audio-element";
function CenterContent() {
  return (
    <Container
      className="center-content shadow-lg pt-2 text-white "
      xs={10}
      md={8}
      lg={8}
    >
      <Col>
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
          {/* <iframe
          src="https://www.listennotes.com/he/podcasts/the-rich-roll/courtney-dauwalter-mindset-MJhaYgx4QHC/embed/"
          height="180px"
          width="100%"
          style="width: 1px; min-width: 100%;"
          frameborder="0"
          scrolling="no"
          loading="lazy"
        ></iframe> */}
        </Row>
      </Col>
    </Container>
  );
}

export default CenterContent;
