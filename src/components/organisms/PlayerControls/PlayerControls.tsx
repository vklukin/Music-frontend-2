import { useAtomValue } from "jotai";

import "./style.scss";
import { isAudioPlayingAtom } from "@/core/atoms/player";

import { PlayerControlButton } from "@components/atoms/PlayerControlButton";
import { PageWidthContainer } from "@components/molecules/Container";

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
