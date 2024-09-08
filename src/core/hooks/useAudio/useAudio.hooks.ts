import { useEffect } from "react";

import { useAudioResponse } from "./useAudio";

interface useAudioHooksProps {
  toggle: useAudioResponse["toggle"];
}

export const useAudioHooks = ({ toggle }: useAudioHooksProps) => {
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "KeyK":
        case "Space":
          toggle();
          break;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
