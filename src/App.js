import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RouterOutlet from "./components/Router/RouterOutlet";

function App() {
  return (
    <BrowserRouter>
      {/* We will place the AppHeader Component here that will contain our links. */}
      <RouterOutlet />
    </BrowserRouter>
  );
}

export default App;