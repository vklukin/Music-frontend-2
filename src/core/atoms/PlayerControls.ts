import { atom } from "jotai";

type AudioStateType = "playing" | "pause";

export const AudioStateAtom = atom<AudioStateType>("pause");
export const isAudioPlayingAtom = atom<boolean>(false);
