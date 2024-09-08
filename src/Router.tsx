import { Route, Routes } from "react-router-dom";

import MainPageLazy from "./components/pages/Main";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPageLazy />} />
    </Routes>
  );
}
