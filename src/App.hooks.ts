import { useEffect } from "react";

import { useTheme } from "@core/hooks/useTheme";

export const useAppHooks = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      return;
    }

    document.documentElement.classList.remove("dark");
  }, [isDarkMode]);
};
