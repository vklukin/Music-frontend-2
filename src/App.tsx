import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { Header } from "@components/organisms/Header";

import { useAppHooks } from "./App.hooks";
import "./app.css";

function App() {
  useAppHooks();

  return (
    <div className="layout layout--main">
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
