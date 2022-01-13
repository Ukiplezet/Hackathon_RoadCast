import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import AudioPlayer from "react-audio-element";
import OnHoverScrollContainer from "../Components/CostumScrollBar/CostumScrollDiv";
import PodcastCardPlayer from "../Components/PodcastData/PodcastCardPlayer";

function CenterContent() {
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
    <Col
      className="center-content shadow-lg py-2 text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <OnHoverScrollContainer>
        <Row className="audioDiv mx-4">
          <PodcastCardPlayer podcastToPlay={podcastData} />
          <AudioPlayer
            style={{ cursor: "pointer" }}
            className=""
            src="https://www.listennotes.com/e/p/f13d8c2343e748858464167b426fe67b/"
            overrideStyles={true}
            showHours={true}
            classNames={{
              controlButton: "custom-control",
              playPause: "custom-play-pause",
              timeText: "custom-time-text",
              sliderTrack: "custom-slider-track",
            }}
            colors={{ sliderTrack: "#2e3646" }}
          />
        </Row>
      </OnHoverScrollContainer>
    </Col>
  );
}

export default CenterContent;
