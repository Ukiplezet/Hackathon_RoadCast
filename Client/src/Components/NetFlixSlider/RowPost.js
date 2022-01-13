import React, { useEffect, useState } from "react";
import Axios from "./axios";
import { imageUrl, baseUrl, API_KEY } from "../constants/constants";
import close from "./red-x.svg";
import "./RowPost.css";
import ShowTrailer from "./ShowTrailer";
import "bootstrap/dist/css/bootstrap.min.css";
import PodcastModal from "../PodcastData/PodcastModal";

function RowPost({
  displaySearchResultsHandler,
  setShowLoadingSpinner,
  setResultSliderOpen,
  toggleShow,
  title,
  isSmall,
  resultsObject,
}) {
  const [movies, setMovies] = useState([]);
  const [podcastModal, setPodcastModal] = useState(false);
  useEffect(() => {
    sortResult();
  }, []);
  const sortResult = async () => {
    setMovies(resultsObject);
  };
  const openPodcastModal = () => {
    setPodcastModal(!podcastModal);
    console.log("fuck me");
    resultsObject.filter((id) => {
      if (id === resultsObject.id)
        return (
          <PodcastModal
            toggleShow={toggleShow}
            HandleOpenPocastModal={openPodcastModal}
            podcastModal={podcastModal}
            displaySearchResultsHandler={displaySearchResultsHandler}
            setShowLoadingSpinner={setShowLoadingSpinner}
            setResultSliderOpen={setResultSliderOpen}
            podcast={resultsObject}
          />
        );
    });
  };
  let display = resultsObject.map((item, index) => {
    return (
      <div onClick={openPodcastModal}>
        <img
          key={index.id}
          className={isSmall ? "small-poster" : "poster"}
          src={item.podcast.thumbnail}
          alt=""
        />
      </div>
    );
  });

  return (
    <>
      <div className="row w-75 d-flex">
        <h5 className="text-start my-1"></h5>

        <div className="posters">{resultsObject && display} </div>
      </div>
      <PodcastModal
        toggleShow={toggleShow}
        HandleOpenPocastModal={openPodcastModal}
        podcastModal={podcastModal}
        displaySearchResultsHandler={displaySearchResultsHandler}
        setShowLoadingSpinner={setShowLoadingSpinner}
        setResultSliderOpen={setResultSliderOpen}
        podcast={resultsObject}
      />
    </>
  );
}

export default RowPost;
