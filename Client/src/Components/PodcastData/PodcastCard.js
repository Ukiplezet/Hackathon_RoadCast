import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Button, Card, Row } from "react-bootstrap";
import "../../Layout/PodcastModal.css";

function PodcastCard(props) {
  const { name, backdrop_path } = props.podcastInfo;
  console.log(backdrop_path);
  return (
    <Card className="podcast-card d-flex flex-row-nowrap pt-3 justify-content-start">
      <Col className="d-flex flex-col">
        <Card.Img
          style={{ width: "600px", height: "480px" }}
          variant="top"
          src={`http:localhost:3000/${backdrop_path}`}
          alt={"this is a photo of the podcast"}
          className="d-flex flex-col ms-4 ps-3 my-4 border-2 border border-grey align-self-center text-light"
        />
        <Card.Body className=" ms-2 pt-4">
          <Card.Text className="">
            <Row className="d-flex justify-content-between fs-5">
              <div>
                <Card.Title className="mb-3">
                  <strong>podcastName: </strong>
                  {name}
                </Card.Title>
                <i>
                  <strong>Podcast Description: </strong>
                  <i>podcastDescription</i>
                </i>
                <div className="my-3">
                  <i className="">
                    <strong>Episode Description: </strong>
                    <i>"episodeDescription" </i>
                  </i>
                </div>
                <div className="my-4">
                  <i>
                    <strong>Podcast Category:</strong> podcastCategory this
                    Podcast is going to blow your face off!
                  </i>
                </div>
              </div>
              <Col className="d-flex flex-row justify-content-evenly mt-2">
                <i>
                  <strong>date:</strong> date
                </i>
                <i>
                  <strong>length:</strong> length
                </i>
                <i>
                  <strong>rating:</strong> rating
                </i>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Col>

    </Card>
  );
}

export default PodcastCard;
