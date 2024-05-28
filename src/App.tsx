import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

import { Router } from "./Router";

function App() {
  const { isDarkMode, enable } = useDarkMode({
    defaultValue: false,
    localStorageKey: "ms-theme"
  });

  useEffect(() => {
    if (!isDarkMode) return;

    document.documentElement.classList.add("dark");
    enable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Router />;
}

export default App;
