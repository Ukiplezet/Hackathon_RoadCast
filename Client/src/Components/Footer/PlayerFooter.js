import React from "react";
import "../../Layout/Footer.css";

function PlayerFooter() {
  return (
    <footer className="border-top">
      <div className="audioDiv">
        <audio
          className="audio-controller"
          controls
          //   src={this.state.selectedPodcast.podAudio}
        ></audio>
      </div>
    </footer>
  );
}

export default PlayerFooter;
