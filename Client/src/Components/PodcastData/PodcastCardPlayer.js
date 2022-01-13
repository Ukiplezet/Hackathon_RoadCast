import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Button, Card, Row } from "react-bootstrap";
import "../../Layout/PodcastModal.css";

function PodcastCardPlayer(props) {
  const {
    id,
    title_original,
    podcastCategory,
    description_original,
    episodeDescription,
    pub_date_ms,
    audio_length_sec,
    rating,
    audio,
    genre_ids,
    thumbnail,
  } = props.podcastToPlay;

  return (
    <Card className="podcast-card d-flex flex-row-nowrap pt-3 justify-content-start">
      <Col className="d-flex flex-col">
        <Card.Img
          style={{ width: "250px", height: "300px" }}
          variant="top"
          src={thumbnail}
          alt={"this is a photo of the podcast"}
          className="d-flex flex-col  my-4 border-2 border border-grey align-self-start text-light"
        />
        <Card.Body className=" pt-4">
          <Card.Text className="">
            <Row className="d-flex justify-content-center fs-5">
              <div>
                <Card.Title className="mb-3">
                  <strong>podcastName: </strong>
                  {title_original}
                </Card.Title>
                <i>
                  <strong>Podcast Description: </strong>
                  <i>{description_original}</i>
                </i>
                <div className="my-3">
                  <i className="">
                    <strong>Episode Description: </strong>
                    <i>{episodeDescription} </i>
                  </i>
                </div>
                <div className="my-4">
                  <i>
                    <strong>Podcast Category:</strong> {podcastCategory}
                  </i>
                </div>
              </div>
            </Row>
            <div className="d-flex flex-row justify-content-evenly mt-2 fs-5">
              <i>
                <strong>date:</strong> <i>{pub_date_ms.toString()}</i>
              </i>
              <i>
                <strong>length:</strong> {audio_length_sec}
              </i>
              <i>
                <strong>rating:</strong> {genre_ids}
              </i>
            </div>
          </Card.Text>
        </Card.Body>
      </Col>
    </Card>
  );
}

export default PodcastCardPlayer;
