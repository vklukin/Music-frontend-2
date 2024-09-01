import cn from "classnames";

import "./style.css";

type Props = {
  loaderSize?: string;
  className?: string | string[];
  centered?: boolean;
};

export const Loader: React.FC<Props> = ({
  loaderSize,
  centered,
  className
}) => {
  return (
    <div
      className={cn(
        "loader",
        `--size: ${loaderSize ?? "6rem"};`,
        {
          "loader--centered": centered
        },
        className
      )}
    >
      <span className="loader__body"></span>
    </div>
  );
};
