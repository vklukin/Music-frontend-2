import ReactDOM from "react-dom/client";

import "./styles/index.css";

import App from "./App.tsx";
import { ApiWrapper } from "./components/templates/ApiWrapper/ApiWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <ApiWrapper>
    <App />
  </ApiWrapper>
);
