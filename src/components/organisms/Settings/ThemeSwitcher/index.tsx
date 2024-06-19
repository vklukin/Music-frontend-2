import cn from "classnames";

import { TitledContent } from "@components/atoms/TitledContent";

import "./style.css";
import { useTheme } from "@core/hooks/useTheme";

export default function ThemeSwitcher() {
  const { isDarkMode, toggle } = useTheme();

  return (
    <TitledContent title="Theme">
      <button
        onMouseUp={toggle}
        className={cn("theme-switcher", {
          "theme-switcher--active": isDarkMode
        })}
      >
        <div className="theme-switcher__circle"></div>
      </button>
    </TitledContent>
  );
}
