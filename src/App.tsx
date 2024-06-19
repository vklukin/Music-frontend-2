import { Router } from "./Router";

import { useAppHooks } from "./App.hooks";

function App() {
  useAppHooks();

  return <Router />;
}

export default App;
