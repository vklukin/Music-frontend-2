import { useAtomValue, useSetAtom } from "jotai";
import { useCallback, useMemo } from "react";

import { audioAtom, isAudioPlayingAtom } from "@atoms/Player";

type useAudioResponse = () => {
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => Promise<void>;
};

let actx: AudioContext | null = null;

export const useAudio: useAudioResponse = () => {
  const audio = useAtomValue(audioAtom);
  const isAudioPlaying = useSetAtom(isAudioPlayingAtom);

  const play = useCallback<() => Promise<void>>(async () => {
    if (!actx) {
      actx = new AudioContext();
      const audioVolume = actx.createGain();
      const source = actx.createMediaElementSource(audio);

      source.connect(audioVolume);
      audioVolume.connect(actx.destination);
      await actx.resume();
    }
    if (actx.state === "suspended") {
      await actx.resume();
    }
    isAudioPlaying(true);
    await audio.play();
  }, [audio, isAudioPlaying]);

  const pause = useCallback<() => void>(() => {
    isAudioPlaying(false);
    audio.pause();
  }, [audio, isAudioPlaying]);

  const toggle = useCallback<() => Promise<void>>(async () => {
    if (!audio.paused) {
      pause();
      return;
    }

    await play();
  }, [audio.paused, pause, play]);

  return useMemo(
    () => ({
      play,
      pause,
      toggle
    }),
    [play, pause, toggle]
  );
};
