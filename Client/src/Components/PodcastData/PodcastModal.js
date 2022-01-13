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
  // const { title_original } = props.podcast;
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
  } = props.podcast;

  const playSelectedPodcast = async (podcast) => {
    const userId = localStorage.getItem("id");
    const storedPodcast = localStorage.setItem("podcast", podcast);
    history.push(`/listeningnow/${userId}/`);
  };
  const fetchRelatedPodcasts = async (props) => {
    const similarPodcast = props.podcast;
    const response = await api.findPodcastBasedOnUserPref(similarPodcast);
    console.log(response);
  };

  return (
    <>
      <Modal
        dialogClassName="podcast-modal"
        show={props.podcastModal}
        onHide={props.HandleOpenPocastModal}
        className=""
      >
        <Modal.Header className=" podcast-modal-header d-flex justify-content-center">
          <Modal.Title className="text-light">{title_original}</Modal.Title>
        </Modal.Header>
        <PodcastCard podcast={props.podcast} id={id} />
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
              onClick={async () => {
                props.HandleOpenPocastModal();
                await playSelectedPodcast(props.podcast);
              }}
            >
              Play This Podcast
            </Button>
            <Button
              onClick={async () => {
                props.HandleOpenPocastModal();
                props.setShowLoadingSpinner(true);
                props.setResultSliderOpen(false);
                props.displaySearchResultsHandler();
                await fetchRelatedPodcasts(props);
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
