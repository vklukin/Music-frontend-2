import { Outlet } from "react-router-dom";

import { Header } from "@components/organisms/Header";

export function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
