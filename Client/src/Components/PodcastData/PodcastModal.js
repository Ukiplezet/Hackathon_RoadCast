import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Button, Card, Row } from "react-bootstrap";
import api from "../../Utils/API";
import React, { useState, useContext } from "react";
import "../../Layout/PodcastModal.css";
import PodcastCard from "./PodcastCard";
import { useHistory } from "react-router-dom";
export default function PodcastModal(props) {
  const history = useHistory();
  // const { title_original, id } = props.resultsObject;
  // const { genre_ids, thumbnail } = props.resultsObject.podcast;
  {
    /* // id={element.id}
      // podcastCategory={element.podcast.genre_ids}
      // podcastName={element.title_original}
      // picture={element.podcast.thumbnail}
      // podcastDescription={element.description_original}
      // episodeDescription={element.episodeDescription}
      // date={element.pub_date_ms}
      // length={element.audio_length_sec}
      // rating={element.rating}
      // audio={element.autio} */
  }
  return (
    <>
      <Modal
        dialogClassName="podcast-modal"
        show={props.podcastModal}
        onHide={props.HandleOpenPocastModal}
        className=""
      >
        <Modal.Header className=" podcast-modal-header d-flex justify-content-center">
          <Modal.Title className="text-light"></Modal.Title>
        </Modal.Header>
        <PodcastCard props={props} />
        <Card.Footer className="podcast-modal-footer">
          <Col className="flex-row d-flex pb-0 justify-content-evenly">
            <Button
              onClick={() => {
                props.HandleOpenPocastModal();
                props.toggleShow(true);
              }}
              variant="light"
              type="submit"
              className="mx-2"
              id="liveToastBtn"
            >
              Save For Later
            </Button>
            <Button
              variant="success"
              className="mx-2"
              onClick={() => {
                props.HandleOpenPocastModal();
                const userId = localStorage.getItem("id");
                history.push(`/listeningnow/${userId}`);
              }}
            >
              Play This Podcast
            </Button>
            <Button
              onClick={() => {
                props.HandleOpenPocastModal();
                props.setShowLoadingSpinner(true);
                props.setResultSliderOpen(false);
                props.displaySearchResultsHandler();
              }}
              variant="dark"
              type="submit"
              className="mx-2"
            >
              Show Similar Results
            </Button>
          </Col>
        </Card.Footer>
      </Modal>
    </>
  );
}
