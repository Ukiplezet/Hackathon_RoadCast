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
  api,
}) {
  const [movies, setMovies] = useState([]);
  const [podcastModal, setPodcastModal] = useState(false);
  const [podcastInfo, setPodcastInfo] = useState({});

  useEffect(() => {
    sortResult();
  }, []);
  const sortResult = async () => {
    setMovies(resultsObject);
  };
  const openPodcastModal = () => {
    if (!podcastModal) {
      setPodcastModal(true);
    } else {
      setPodcastModal(false);
    }
  };
  let display = resultsObject.map((item, index) => {
    return (
      <img
        onClick={openPodcastModal}
        key={index.id}
        className={isSmall ? "small-poster" : "poster"}
        src={item.podcast.thumbnail}
        alt=""
      />
    );
  });
  const podcastData = {
    id: "f13d8c2343e748858464167b426fe67b",
    rss: "https://supercarlinbrothers.libsyn.com/rss",
    link: "https://supercarlinbrothers.libsyn.com/star-wars-theory-the-white-saber-theory?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
    audio: "https://www.listennotes.com/e/p/f13d8c2343e748858464167b426fe67b/",
    image:
      "https://cdn-images-1.listennotes.com/podcasts/super-carlin-brothers-j-and-ben-carlin-RyWtwTvoiCe-BodDr7iIAR3.1400x1400.jpg",
    podcast: {
      id: "8bdbb906eef04e5d8b391e947998e9af",
      image:
        "https://cdn-images-1.listennotes.com/podcasts/super-carlin-brothers-j-and-ben-carlin-RyWtwTvoiCe-BodDr7iIAR3.1400x1400.jpg",
      genre_ids: [68, 214, 265, 99],
      thumbnail:
        "https://cdn-images-1.listennotes.com/podcasts/super-carlin-brothers-j-and-ben-carlin-HVRX5onYNcG-BodDr7iIAR3.300x300.jpg",
      listen_score: null,
      title_original: "Super Carlin Brothers",
      listennotes_url:
        "https://www.listennotes.com/c/8bdbb906eef04e5d8b391e947998e9af/",
      title_highlighted: "Super Carlin Brothers",
      publisher_original: "J and Ben Carlin",
      publisher_highlighted: "J and Ben Carlin",
      listen_score_global_rank: null,
    },
    itunes_id: 1479112798,
    thumbnail:
      "https://cdn-images-1.listennotes.com/podcasts/super-carlin-brothers-j-and-ben-carlin-HVRX5onYNcG-BodDr7iIAR3.300x300.jpg",
    pub_date_ms: 1576602000082,
    title_original: "Star Wars Theory: The White Saber Theory",
    listennotes_url:
      "https://www.listennotes.com/e/f13d8c2343e748858464167b426fe67b/",
    audio_length_sec: 763,
    explicit_content: false,
    title_highlighted:
      '<span class="ln-search-highlight">Star</span> <span class="ln-search-highlight">Wars</span> Theory: The White Saber Theory',
    description_original:
      "With Star Wars Episode 9 The Rise of Skywalker just days away J dives into the Star Wars Galaxy to discuss the future of Kylo Ren’s Lightsaber and the White Saber theory!",
    description_highlighted:
      '...With <span class="ln-search-highlight">Star</span> <span class="ln-search-highlight">Wars</span> Episode 9 The Rise of Skywalker just days away J dives into the <span class="ln-search-highlight">Star</span> <span class="ln-search-highlight">Wars</span> Galaxy to discuss the future of Kylo Ren’s Lightsaber and the White Saber theory!',
    transcripts_highlighted: [],
  };
  return (
    <>
      <div className="row w-75 d-flex">
        <h5 className="text-start my-1"></h5>

        <div className="posters" onClick={openPodcastModal}>
          {resultsObject && display}{" "}
        </div>
      </div>
      <PodcastModal
        toggleShow={toggleShow}
        HandleOpenPocastModal={openPodcastModal}
        podcastModal={podcastModal}
        podcastInfo={podcastInfo}
        displaySearchResultsHandler={displaySearchResultsHandler}
        setShowLoadingSpinner={setShowLoadingSpinner}
        setResultSliderOpen={setResultSliderOpen}
        podcast={podcastData}
      />
    </>
  );
}

export default RowPost;
