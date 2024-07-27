import { useAtomValue } from "jotai";

import "./style.css";
import { PlayerControlButton } from "@components/atoms/PlayerControlButton";
import { isAudioPlayingAtom } from "@core/atoms/PlayerControls";
import { PageWidthContainer } from "../../molecules/Container";

export const PlayerControls = () => {
  const isAudioPlaying = useAtomValue(isAudioPlayingAtom);

  return (
    <div className="player-controls">
      <PageWidthContainer styles="player-controls__container">
        <div className="player-controls__buttons-wrapper">
          <PlayerControlButton iconType="prev" />
          <PlayerControlButton iconType={isAudioPlaying ? "pause" : "play"} />
          <PlayerControlButton iconType="next" />
        </div>
      </PageWidthContainer>
    </div>
  );
};
