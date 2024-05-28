import cn from "classnames";
import { ReactComponent as LogoIcon } from "@assets/Logo.svg";

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
    <div className={cn("w-32", containerStyles)}>
      <a href={href} className={cn("h-full w-full block", linkStyles)}>
        <LogoIcon className={cn("w-full h-full logo", iconStyles)} />
      </a>
    </div>
  );
};
