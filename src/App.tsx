import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

import { Router } from "./Router";

function App() {
  const { isDarkMode, enable } = useDarkMode({
    defaultValue: false,
    localStorageKey: "ms-theme"
  });

  useEffect(() => {
    if (
      isDarkMode ||
      (!isDarkMode && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      enable();
    }

    enable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Router />;
}

export default App;
