import { atom } from "jotai";

export const isAudioPlayingAtom = atom<boolean>(false);

export const currentAudioDurationAtom = atom<number>(0);

export const audioAtom = atom<HTMLAudioElement>(new Audio());
