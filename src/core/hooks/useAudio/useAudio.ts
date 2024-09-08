import { useAtomValue, useSetAtom } from "jotai";
import { useCallback, useMemo } from "react";

import { audioAtom, isAudioPlayingAtom } from "@/core/atoms/player";
import { useAudioHooks } from "./useAudio.hooks";

export interface useAudioResponse {
  play: () => void;
  pause: () => void;
  toggle: () => void;
}
type useAudioFunction = () => useAudioResponse;

let actx: AudioContext | null = null;

export const useAudio: useAudioFunction = () => {
  const audio = useAtomValue(audioAtom);
  const setIsAudioPlaying = useSetAtom(isAudioPlayingAtom);

  const play = useCallback<() => void>(() => {
    if (!actx) {
      actx = new AudioContext();
      const audioVolume = actx.createGain();
      const source = actx.createMediaElementSource(audio);

      source.connect(audioVolume);
      audioVolume.connect(actx.destination);
      void actx.resume();
    }

    if (actx.state === "suspended") {
      void actx.resume();
    }

    setIsAudioPlaying(true);
    void audio.play();
  }, [audio, setIsAudioPlaying]);

  const pause = useCallback<() => void>(() => {
    setIsAudioPlaying(false);
    audio.pause();
  }, [audio, setIsAudioPlaying]);

  const toggle = useCallback<() => void>(() => {
    if (!audio.paused) {
      pause();
      return;
    }

    void play();
  }, [audio.paused, pause, play]);

  useAudioHooks({ toggle });

  return useMemo(
    () => ({
      play,
      pause,
      toggle
    }),
    [play, pause, toggle]
  );
};
