import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { useAppHooks } from "./App.hooks";
import "./app.scss";

import { Router } from "./Router";
import { Header } from "@components/organisms/Header";
import { PlayerControls } from "@components/organisms/PlayerControls";
import { Loader } from "./components/atoms/Loader";

function App() {
  useAppHooks();

  return (
    <div className="layout layout--main">
      <Header />
      <div className="layout__body">
        <BrowserRouter>
          <Suspense fallback={<Loader centered />}>
            <Router />
          </Suspense>
        </BrowserRouter>
      </div>
      <PlayerControls />
    </div>
  );
}

export default App;
