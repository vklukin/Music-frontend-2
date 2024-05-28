import cn from "classnames";

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
        "hover-underline-animation dark:text-white font-medium",
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
    <ul className={cn("", ulClassName)}>
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
