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
  api,
}) {
  const [movies, setMovies] = useState([]);
  const [videoKey, setVideoKey] = useState();
  const [podcastModal, setPodcastModal] = useState(false);
  useEffect(() => {
    Axios.get(api)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, [api]);

  const handleMovieClick = (item) => {
    Axios.get(`${baseUrl}/movie/${item.id}/videos?api_key=${API_KEY}`)
      .then((response) => {
        let videoData = response.data.results[0];
        setVideoKey(videoData.key);
      })
      .catch((err) => {
        console.log("Video is not found..,Please choose another Movie...");
      });

    console.log(videoKey);
  };
  let display = movies.map((item, index) => {
    return (
      <img
        key={index}
        onClick={() => handleMovieClick(item)}
        className={isSmall ? "small-poster" : "poster"}
        src={imageUrl + item.backdrop_path}
        alt=""
      />
    );
  });
  const handleShow = () => {
    setVideoKey(undefined);
  };

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
        <h5 className="text-start my-1">{title}</h5>

        <div className="posters" onClick={openPodcastModal}>
          {movies && display}{" "}
        </div>
        <div
          className={videoKey ? "close-icon" : "hide-icon"}
          onClick={openPodcastModal}
        >
          <img src={close} alt="close" />
        </div>
      </div>
      {/* <div className="show-container">
        {videoKey && <ShowTrailer videoKey={videoKey} />}
      </div> */}
      <PodcastModal
        toggleShow={toggleShow}
        HandleOpenPocastModal={openPodcastModal}
        podcastModal={podcastModal}
        displaySearchResultsHandler={displaySearchResultsHandler}
        setShowLoadingSpinner={setShowLoadingSpinner}
        setResultSliderOpen={setResultSliderOpen}
      />
    </>
  );
}

export default RowPost;
