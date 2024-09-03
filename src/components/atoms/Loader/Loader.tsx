import cn from "classnames";
import { CSSProperties } from "react";

import "./style.scss";
import { omitEmptyProps } from "../../../core/utils/omitEmptyProps";

type Props = {
  loaderSize?: string;
  className?: string | string[];
  centered?: boolean;
  loaderColor?: string;
};

export const Loader: React.FC<Props> = ({
  loaderSize,
  centered,
  className,
  loaderColor
}) => {
  const styles = {
    "--size": loaderSize ?? "6rem",
    "--loader-color": loaderColor
  };

  return (
    <div
      className={cn(
        "loader",
        {
          "loader--centered": centered
        },
        className
      )}
    >
      <span
        className={cn("loader__body", {
          "loader__body--custom-color": loaderColor
        })}
        style={omitEmptyProps(styles) as CSSProperties}
      ></span>
    </div>
  );
};
