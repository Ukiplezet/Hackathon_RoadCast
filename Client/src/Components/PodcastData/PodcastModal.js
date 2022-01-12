import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Button, Card, Row } from "react-bootstrap";
import api from "../../Utils/API";
import React, { useState, useContext } from "react";
import "../../Layout/PodcastModal.css";
import PodcastCard from "./PodcastCard";
export default function PodcastModal(props) {
  //   const {
  //     podcastName,
  //     podcastDescription,
  //     podcastCategory,
  //     length,
  //     date,
  //     episodeDescription,
  //     rating,
  //   } = podcast;
  return (
    <Modal
      dialogClassName="podcast-modal"
      show={props.podcastModal}
      onHide={props.HandleOpenPocastModal}
      className=""
    >
      <Modal.Header className=" podcast-modal-header d-flex justify-content-center">
        <Modal.Title className="text-light">podcastName</Modal.Title>
      </Modal.Header>
      <PodcastCard props={props} />
      <Card.Footer className="podcast-modal-footer">
        <Col className="flex-row d-flex pb-0 justify-content-evenly">
          <Button variant="light" type="submit" className="mx-2">
            Save For Later
          </Button>
          <Button
            variant="success"
            className="mx-2"
            onClick={props.HandleOpenPocastModal}
          >
            Play This Podcast
          </Button>
          <Button variant="dark" type="submit" className="mx-2">
            Show Similar Results
          </Button>
        </Col>
      </Card.Footer>
    </Modal>
  );
}
