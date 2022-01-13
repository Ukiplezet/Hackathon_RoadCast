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
  const [videoKey, setVideoKey] = useState();
  const [podcastModal, setPodcastModal] = useState(false);
  useEffect(() => {
    sortResult();
  }, []);
  const sortResult = async () => {
    setMovies(resultsObject);
  };
  let display = resultsObject.map((item, index) => {
    return (
      <img
        key={index.id}
        // onClick={() => handleMovieClick(item)}
        className={isSmall ? "small-poster" : "poster"}
        src={item.podcast.thumbnail}
        alt=""
      />
    );
  });
  const openPodcastModal = () => {
    if (!podcastModal) {
      setPodcastModal(true);
    } else {
      setPodcastModal(false);
    }
  };

  return (
    <>
      <div className="row w-75 d-flex" onClick={openPodcastModal}>
        <h5 className="text-start my-1"></h5>

        <div className="posters" onClick={openPodcastModal}>
          {resultsObject && display}{" "}
        </div>
        <div
          className={videoKey ? "close-icon" : "hide-icon"}
          onClick={openPodcastModal}
        >
          <img src={close} alt="close" />
        </div>
      </div>

      <PodcastModal
        toggleShow={toggleShow}
        HandleOpenPocastModal={openPodcastModal}
        podcastModal={podcastModal}
        displaySearchResultsHandler={displaySearchResultsHandler}
        setShowLoadingSpinner={setShowLoadingSpinner}
        setResultSliderOpen={setResultSliderOpen}
        resultsObject={resultsObject}
      />
    </>
  );
}

export default RowPost;
