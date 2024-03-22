import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage, GridPage } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home-page */}
        <Route path="/" element={<HomePage />} />

        {/* grid-page */}
        <Route path="/grid" element={<GridPage />} />
      </Routes>
    </BrowserRouter>
  );
}
