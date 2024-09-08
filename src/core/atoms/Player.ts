import { atom } from "jotai";

export const isAudioPlayingAtom = atom<boolean>(false);

export const currentAudioDurationAtom = atom<number>(0);

const audio = new Audio();
audio.crossOrigin = "anonymous";
export const audioAtom = atom<HTMLAudioElement>(audio);
