/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx } from "@emotion/core";
import PlayIcon from "./icons/PlayIcon";
import PauseIcon from "./icons/PauseIcon";
import NextIcon from "./icons/NextIcon";
import PrevIcon from "./icons/PrevIcon";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";
import WhatsappIcon from "./icons/WhatsappIcon";
import {
  PlayerContainer,
  playerButtons,
  controlsHover,
  socialButtons,
  rm1,
  lm1
} from "../styles/Player";

const Player = ({ track }) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("audio");
    playing ? audio.play() : audio.pause();
  });

  return (
    <div css={PlayerContainer}>
      <audio preload="none" id="audio">
        <source src={track} type="audio/mp4" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div css={playerButtons}>
        <PrevIcon />
        {playing ? (
          <PauseIcon
            onClick={() => setPlaying(false)}
            css={`
              ${controlsHover}
            `}
          />
        ) : (
          <PlayIcon onClick={() => setPlaying(true)} css={controlsHover} />
        )}
        <NextIcon />
      </div>
      <div css={socialButtons}>
        <FacebookIcon />
        <TwitterIcon />
        <WhatsappIcon />
      </div>
    </div>
  );
};

export default Player;
