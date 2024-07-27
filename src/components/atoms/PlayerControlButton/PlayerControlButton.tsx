import cn from "classnames";

import "./style.css";

import { ReactComponent as Pause } from "@assets/pause.svg";
import { ReactComponent as Play } from "@assets/play.svg";
import { ReactComponent as Back } from "@assets/skip-back.svg";
import { ReactComponent as Forward } from "@assets/skip-forward.svg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  iconType: "prev" | "pause" | "play" | "next";
};

export const PlayerControlButton = (props: ButtonProps) => {
  const { iconType, ...restProps } = props;

  const Icon: {
    [T in ButtonProps["iconType"]]: React.ReactNode;
  } = {
    prev: <Back />,
    next: <Forward />,
    pause: <Pause />,
    play: <Play />
  };

  return (
    <button
      className={cn("player-control-button", props.className)}
      {...restProps}
    >
      {Icon[iconType]}
    </button>
  );
};
