import { useLocalStorage } from "usehooks-ts";

export const useTheme = () => {
  const [isDarkMode, setDarkMode] = useLocalStorage("ms-theme", false);
  return {
    isDarkMode,
    toggle: () => {
      setDarkMode((prev: boolean) => !prev);
    },
    enable: () => {
      setDarkMode(true);
    },
    disable: () => {
      setDarkMode(false);
    }
  };
};
