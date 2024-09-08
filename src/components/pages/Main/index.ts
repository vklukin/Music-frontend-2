import { lazy } from "react";

const MainPageLazy = lazy(() =>
  import("./Main").then((d) => ({ default: d.MainPage }))
);
export default MainPageLazy;
