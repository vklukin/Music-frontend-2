import cn from "classnames";

import { ReactComponent as LogoIcon } from "@assets/Logo.svg";
import "./style.scss";

type Props = {
  containerStyles?: string;
  iconStyles?: string;
  linkStyles?: string;
  href?: string;
};

export const Logo: React.FC<Props> = ({
  containerStyles,
  iconStyles,
  linkStyles,
  href = "/"
}) => {
  return (
    <div className={cn("logo", containerStyles)}>
      <a href={href} className={cn("logo__link", linkStyles)}>
        <LogoIcon className={cn("logo__link-icon", iconStyles)} />
      </a>
    </div>
  );
};
