import { Outlet } from "react-router-dom";

import { Header } from "@components/organisms/Header";

import "./style.css";

export function MainLayout() {
  return (
    <div className="layout layout--main">
      <Header />
      <Outlet />
    </div>
  );
}
