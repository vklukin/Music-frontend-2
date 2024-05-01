import { Route, Routes } from "react-router-dom";

import { MainLayout } from "@components/templates/MainLayout";

export function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<></>} />
      </Route>
    </Routes>
  );
}
