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
  const [podcastContent, setPodcastContent] = useState({});
  useEffect(() => {
    sortResult();
  }, []);
  const sortResult = async () => {
    setMovies(resultsObject);
  };

  const openPodcastModal = (item) => {
    setPodcastContent(item);
    if (!podcastModal) {
      setPodcastModal(true);
    } else {
      setPodcastModal(false);
    }
  };

  let display = resultsObject.map((item, index) => {
    console.log(item);
    return (
      <div onClick={openPodcastModal(item)} key={index.id}>
        <img
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
        podcast={podcastContent}
      />
    </>
  );
}

export default RowPost;
