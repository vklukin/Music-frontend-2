import "./style.scss";

import { AudioListItem } from "../../../core/models/audio";

type Props = {
  audioData: AudioListItem;
};

export const AudioItem: React.FC<Props> = ({ audioData }) => {
  console.log(audioData);

  // TODO: add duration time
  return (
    <div className="audio-element">
      <div className="audio-element__play-button">
        <button></button>
      </div>
      <div className="audio-element__track-name"></div>
      {/* <div className="audio-element__duration"></div> */}
    </div>
  );
};
