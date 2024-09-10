import { useState } from "react";

import { ReactComponent as PlaySmall } from "@assets/play-small.svg";
import { ReactComponent as PauseSmall } from "@assets/pause-small.svg";

import "./style.scss";
import { AudioListItem } from "../../../core/models/audio";
import { durationTimeObject } from "../../../core/utils/durationTimeObject";

type Props = {
  audioData: AudioListItem;
};

export const AudioItem: React.FC<Props> = ({ audioData }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const time = durationTimeObject(audioData.duration);
  // TODO: add play music logic and animation
  return (
    <div className="audio-element">
      <div className="audio-element__play-button audio-button-wrapper">
        <span className="audio-button-wrapper__index">{audioData.id + 1}</span>
        <button className="audio-button-wrapper__button">
          {isPlaying ? <PauseSmall /> : <PlaySmall />}
        </button>
      </div>
      <div className="audio-element__track-name audio-author-details">
        <p className="audio-author-details__track">{audioData.title}</p>
        <p className="audio-author-details__separator">&nbsp;—&nbsp;</p>
        <p className="audio-author-details__author">{audioData.author}</p>
      </div>
      <div className="audio-element__duration">
        <span className="audio-element__duration-time">
          {time.minutes}:{time.seconds.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};
