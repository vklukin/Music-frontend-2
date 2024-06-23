import cn from "classnames";

import "./style.css";

type Props = {
  ulClassName?: string;
  liClassName?: string;
};

type Navigation = {
  title: string;
  link: string;
};

const navigation: Navigation[] = [
  {
    title: "Главная",
    link: "/"
  }
];

const NavigationLink = ({
  link,
  title,
  liClassName
}: Navigation & { liClassName?: string }) => {
  return (
    <li
      className={cn(
        "header__navigation-link navigation-link navigation-link__hover-underline-animation",
        liClassName
      )}
    >
      <a href={link}>{title}</a>
    </li>
  );
};

export const HeaderNavigation: React.FC<Props> = ({
  ulClassName,
  liClassName
}) => {
  return (
    <ul className={cn("header__navigation", ulClassName)}>
      {navigation.map(({ title, link }, index) => (
        <NavigationLink
          key={index}
          link={link}
          title={title}
          liClassName={liClassName}
        />
      ))}
    </ul>
  );
};
