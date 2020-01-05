import React from "react";
import "../styles/Player.css";
import PlayIcon from "./icons/PlayIcon";
import NextIcon from "./icons/NextIcon";
import PrevIcon from "./icons/PrevIcon";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";
import WhatsappIcon from "./icons/WhatsappIcon";

const Player = () => {
  return (
    <div className="player">
      <div className="player-buttons">
        <PrevIcon />
        <PlayIcon />
        <NextIcon />
      </div>
      <div className="social-buttons">
        <FacebookIcon />
        <TwitterIcon />
        <WhatsappIcon />
      </div>
    </div>
  );
};

export default Player;
