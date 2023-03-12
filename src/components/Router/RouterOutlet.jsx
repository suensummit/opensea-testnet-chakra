import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";

function RouterOutlet() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Other routes here... */}
    </Routes>
  );
}

export default RouterOutlet;