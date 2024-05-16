import cn from "classnames";

type Props = {
  children: React.ReactNode;
  styles?: string;
};

export const PageWidthContainer: React.FC<Props> = ({ children, styles }) => {
  return (
    <div
      data-testid="page-width-container"
      className={cn(
        "mx-auto w-full px-5 desktop:px-0 desktop:w-[1400px]",
        styles
      )}
    >
      {children}
    </div>
  );
};
