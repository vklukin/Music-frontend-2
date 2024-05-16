import { Outlet } from "react-router-dom";

import { Header } from "@components/organisms/Header";

export function MainLayout() {
  return (
    <div className="h-full grow">
      <Header />
      <Outlet />
    </div>
  );
}
