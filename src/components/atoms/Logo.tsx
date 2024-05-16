import cn from "classnames";
import { ReactComponent as LogoIcon } from "@assets/Logo.svg";

type Props = {
  containerStyles?: string;
  iconStyles?: string;
};

export const Logo: React.FC<Props> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={cn("h-full p-2 w-fit", containerStyles)}>
      <LogoIcon className={cn("w-full h-full logo", iconStyles)} />
    </div>
  );
};
