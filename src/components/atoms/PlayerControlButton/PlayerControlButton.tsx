import cn from "classnames";

import "./style.css";
import { useAudio } from "@core/hooks/useAudio";

import { ReactComponent as Pause } from "@assets/pause.svg";
import { ReactComponent as Play } from "@assets/play.svg";
import { ReactComponent as Back } from "@assets/skip-back.svg";
import { ReactComponent as Forward } from "@assets/skip-forward.svg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  iconType: "prev" | "pause" | "play" | "next";
};

export const PlayerControlButton = (props: ButtonProps) => {
  const { iconType, onClick, ...restProps } = props;

  const { play, pause } = useAudio();

  const Icon: {
    [T in ButtonProps["iconType"]]: React.ReactNode;
  } = {
    prev: <Back />,
    next: <Forward />,
    pause: <Pause />,
    play: <Play />
  };

  const onButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClick && onClick(e);

    switch (iconType) {
      case "pause":
        pause();
        break;
      case "play":
        play();
        break;
    }
  };

  return (
    <button
      className={cn(
        "player-control-button",
        `player-control-button--${iconType}`,
        props.className
      )}
      onClick={onButtonClick}
      {...restProps}
    >
      {Icon[iconType]}
    </button>
  );
};
