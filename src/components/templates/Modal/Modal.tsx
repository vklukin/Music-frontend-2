import cn from "classnames";
import { createPortal } from "react-dom";

import "./style.css";

type Props = {
  classNames?: {
    container?: string | string[];
    backdrop?: string | string[];
    content?: string | string[];
  };
  open: boolean;
  onCloseClick: () => void;
  children: React.ReactNode;
};

export const Modal: React.FC<Props> = ({
  classNames,
  children,
  open = false,
  onCloseClick
}) => {
  if (!open) return <></>;

  const Element = () => {
    return (
      <div className={cn("ui-modal", classNames?.container)}>
        <div
          className={cn("ui-modal__backdrop", classNames?.backdrop)}
          onClick={onCloseClick}
        ></div>
        <div className={cn("ui-modal__content", classNames?.content)}>
          {children}
        </div>
      </div>
    );
  };

  return createPortal(
    <Element />,
    document.getElementById("modal") as HTMLDivElement
  );
};
