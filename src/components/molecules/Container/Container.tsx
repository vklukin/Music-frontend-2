import cn from "classnames";

import "./style.scss";

type Props = {
  children: React.ReactNode;
  styles?: string;
};

export const PageWidthContainer: React.FC<Props> = ({ children, styles }) => {
  return <div className={cn("page-width-container", styles)}>{children}</div>;
};
