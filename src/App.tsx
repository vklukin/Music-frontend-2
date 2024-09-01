import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { Header } from "@components/organisms/Header";
import { PlayerControls } from "@components/organisms/PlayerControls";

import { useAppHooks } from "./App.hooks";
import "./app.css";

function App() {
  useAppHooks();

  // TODO: add Suspense component + loading image
  return (
    <div className="layout layout--main">
      <Header />
      <div className="layout__body">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
      <PlayerControls />
    </div>
  );
}

export default App;
