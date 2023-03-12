import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RouterOutlet from "./components/Router/RouterOutlet";
import AppHeader from "./components/Router/AppHeader";

function App() {
  return (
    <BrowserRouter>
      <AppHeader></AppHeader>
      <RouterOutlet />
    </BrowserRouter>
  );
}

export default App;