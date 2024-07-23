import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { Header } from "@components/organisms/Header";

import { useAppHooks } from "./App.hooks";
import "./app.css";
import { PlayerControls } from "@components/organisms/PlayerControls";

function App() {
  useAppHooks();

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
