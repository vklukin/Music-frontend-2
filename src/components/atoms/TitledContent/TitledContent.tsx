import cn from "classnames";

import "./style.scss";

type Props = {
  children: React.ReactNode;
  title: string;
  classNames?: {
    container?: string | string[];
    title?: string | string[];
    content?: string | string[];
  };
};

export const TitledContent: React.FC<Props> = ({
  children,
  classNames,
  title
}) => {
  return (
    <div className={cn("labeled-content", classNames?.container)}>
      <p className={cn("labeled-content__title", classNames?.title)}>{title}</p>
      <div className={cn("labeled-content__body", classNames?.content)}>
        {children}
      </div>
    </div>
  );
};
